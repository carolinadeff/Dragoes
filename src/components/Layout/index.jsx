import React from 'react'
import { useAuth } from '../../hooks/auth'
import { Container, Header, Content, Title } from './styles'
import { useHistory } from 'react-router-dom'

const Layout = ({children, title }) => {
  const history = useHistory()
  const { signOut } = useAuth()

  return (
  <Container>
    <Header>
      Dragões

    <button
      type='button'
      onClick={signOut}
    >
      Sair
    </button>
    </Header>
    <Content>
      <Title>
        {title}
        <button
          type='button'
          onClick={() => history.goBack()}
        >
          Voltar
        </button>
      </Title>
      {children}
    </Content>
  </Container>
)
}



export default Layout
