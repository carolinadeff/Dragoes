import React from 'react'
import useDeleteDragon from '../../hooks/useDeleteDragon'
import {
  ContentTitle,
  ModalContent,
  InfoValue,
  Info,
  Button
} from './styles'

const DragonDetailsModalContent = ({ dragonDetails, closeModal }) => {
  const showHistories = () => (
    <>
    {
      dragonDetails.histories.length > 0 ? (
        <ul>
          {
            dragonDetails.histories.map((history) => (
              typeof history === 'string' ? (<li key={history}>{history}</li>) : (<></>)
            ))
          }
        </ul>
          ) : (
            <div>Esse dragão não possui nenhuma história.</div>
          )
        }
    </>
  )

  const handleDeleteDragon = useDeleteDragon(closeModal, dragonDetails.id)

  const formatDate = (date) => (
    new Date(Date.parse(date)).toLocaleDateString('pt-BR')
  )

  return (
    <ModalContent>
      <Info>
        <ContentTitle>{dragonDetails.name}</ContentTitle>
      <InfoValue>
        <label>Tipo:{' '}</label>
        <strong>{dragonDetails.type}</strong>
      </InfoValue>
      <InfoValue>
        <label>Criado em:{' '}</label>
        <strong>{formatDate(dragonDetails.createdAt)}</strong>
      </InfoValue>
      <InfoValue>
          <div>Hitórias</div>
          {showHistories()}
      </InfoValue>
      </Info>

      <div>
        <Button
          as='a'
          href={`/edit/${dragonDetails.id}`}
        >
          Editar
        </Button>
        <Button
          type="button"
          onClick={handleDeleteDragon}
        >
          Excluir
        </Button>
        <Button
          type="button"
          onClick={closeModal}
        >
          Fechar
        </Button>
      </div>
    </ModalContent>
  )
}

export default DragonDetailsModalContent
