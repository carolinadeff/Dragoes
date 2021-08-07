import api from "../services/api"

const useDeleteDragon = (closeModal, dragonId) => {
  const handleDeleteDragon = () => {
    api.delete(`/${dragonId}`)
      .then(() => {
        alert('dragão excluído')
        closeModal()
        window.location.reload()
      })
  }

  return handleDeleteDragon
}

export default useDeleteDragon
