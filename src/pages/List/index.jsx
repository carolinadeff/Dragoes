import React from 'react'
import Row from '../../components/Row'
import Layout from '../../components/Layout'
import {
  ListContainer,
  Link
} from './styles'
import useFetchDragons from '../../hooks/useFetchDragons'


const List = () => {
  const dragons = useFetchDragons()

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
