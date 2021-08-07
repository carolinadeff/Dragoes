import { useHistory } from 'react-router-dom'
import api from '../services/api';
import payloadHelper from '../helpers/payloadHelper'

const useUpdateDragon = (dragonId) => {
  const history = useHistory()

  const updateDragon = (data) => {
    api.put(`/${dragonId}`, payloadHelper(data))
      .then(() => {
        alert('dragão atualizado')
        history.push('/')
      })
  }

  return updateDragon
}

export default useUpdateDragon
