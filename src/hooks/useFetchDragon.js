import api from "../services/api"

const useFetchDragon = (dragonId, setDragonDetails) => {
  const fetchDragon = () => {
    api.get(`/${dragonId}`)
      .then(({ data }) => { setDragonDetails(data) })
  }

  return fetchDragon
}

export default useFetchDragon
