import React, { useState } from 'react'
import Modal from 'react-modal'
import useFetchDragon from '../../hooks/useFetchDragon';
import DragonDetailsModalContent from '../DragonDetailsModalContent';
import {
  Container,
  Icon,
  Name,
  Type
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

  const openModal = () => { setIsOpen(true) }
  const closeModal = () => { setIsOpen(false) }

  const afterOpenModal = useFetchDragon(dragon.id, setDragonDetails)

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
            <DragonDetailsModalContent
              dragonDetails={dragonDetails}
              closeModal={closeModal}
            />
          )
        }
      </Modal>
    </>

  )
}

export default Row
