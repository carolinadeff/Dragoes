import { useHistory } from "react-router-dom"
import payloadHelper from "../helpers/payloadHelper"
import api from "../services/api"

const useCreateDragon = () => {
  const history = useHistory()

  const createDragon = (data) => {
    api.post('/', payloadHelper(data))
      .then(() => {
        alert('dragão criado')
        history.push('/')
      })
  }

  return createDragon
}

export default useCreateDragon
