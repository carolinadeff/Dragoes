import { useEffect, useState } from "react"
import api from "../services/api"
import iconsList from '../assets/iconsList'


const useFetchDragons = () => {
  const [dragons, setDragons] = useState([])

  const sortDragons = (dragonsList) => (
    dragonsList.sort((a, b) => {
      var textA = a.name.toUpperCase()
      var textB = b.name.toUpperCase()
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
  )

  const drawIcon = () => {
    const index = Math.floor(Math.random() * iconsList.length)
    return iconsList[index]
  }

  useEffect(() => {
    api.get('/')
      .then(({ data }) => (
        data.map((dragonData) => ({ ...dragonData, icon: drawIcon() }))
      ))
      .then((dragonsList) => (sortDragons(dragonsList)))
      .then((dragonsList) => { setDragons(dragonsList) })
  }, [])

  return dragons
}

export default useFetchDragons
