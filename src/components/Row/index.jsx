import React, { useState } from 'react'
import Modal from 'react-modal'
import api from '../../services/api';
import {
  Container,
  ContentTitle,
  Icon,
  Name,
  Type,
  ModalContent,
  InfoValue,
  Info,
  Button
} from './styles'

const customStyles = {
  content: {
    top: '20%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Row = ({ dragon }) => {
  Modal.setAppElement('#dragons');
  const [dragonDetails, setDragonDetails] = useState(null)
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    api.get(`/${dragon.id}`)
      .then(({ data }) => { setDragonDetails(data)})
  }

  function closeModal() {
    setIsOpen(false);
  }

  const showHistories = () => {
    if (typeof dragonDetails.histories === 'string') {
      return <div>{dragonDetails.histories}</div>
    } else if (dragonDetails.histories?.length > 0 ) {
      return (
        <ul>
          {
            dragonDetails.histories.map((history) => (
              typeof history === 'string' ? (<li key={history}>{history}</li>) : (<></>)
            ))
          }
        </ul>
      )
    }
    return <div>Esse dragão não possui nenhuma história.</div>
  }

  const handleDeleteDragon = () => {
    api.delete(`/${dragon.id}`)
      .then((response) => console.log(response))
      .then(() => {
        closeModal()
        window.location.reload()
      })
  }

  return (
    <>
    <Container onClick={openModal}>
      <Icon>{dragon.icon}</Icon>
      <Name>{dragon.name}</Name>
      <Type>Tipo: <strong>{dragon.type}</strong></Type>
    </Container>

    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        shouldCloseOnOverlayClick
      >
        {
          dragonDetails && (
            <ModalContent>
              <Info>
                <ContentTitle>{dragonDetails.name}</ContentTitle>
              <InfoValue>
                <label>Tipo:{' '}</label>
                <strong>{dragonDetails.type}</strong>
              </InfoValue>
              <InfoValue>
                  <div>Hitórias</div>
                  {showHistories()}
              </InfoValue>
              </Info>

              <div>
                <Button
                  as='a'
                  href={`/edit/${dragon.id}`}
                >
                  Editar
                </Button>
                <Button
                  color="#ccc"
                  type="button"
                  onClick={handleDeleteDragon}
                >
                  Excluir
                </Button>
                <Button
                  color="pink"
                  type="button"
                  onClick={closeModal}
                >
                  Fechar
                </Button>
              </div>
            </ModalContent>
          )
        }
      </Modal>
    </>

  )
}

export default Row
