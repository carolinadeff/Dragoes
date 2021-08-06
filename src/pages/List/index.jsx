import React, { useEffect, useState } from 'react'
import Row from '../../components/Row'
import api from '../../services/api'
import iconsList from '../../assets/iconsList'
import Layout from '../../components/Layout'
import {
  ListContainer,
  Link
} from './styles'


const List = () => {
  const [dragons, setDragons] = useState([])
  const drawIcon = () => {
    const index = Math.floor(Math.random()*iconsList.length)
    return iconsList[index]
  }


  useEffect(() => {
    api.get('/')
    .then(({ data }) => (
      data.map((dragonData) => ({...dragonData, icon: drawIcon() }))
    ))
    .then((dragonsList) => { setDragons(dragonsList) })
  }, [])

  return (
    <Layout title='Todos os dragões' >
      <ListContainer id='dragons'>
        {
          dragons.map((dragon) =>(
            <Row key={dragon.id} dragon={dragon} />
          ))
        }
      </ListContainer>

      <Link
        href='/new'
      >
        Criar um novo dragão
      </Link>
    </Layout>
  )
}

export default List
