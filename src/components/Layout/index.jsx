import React from 'react'
import { useAuth } from '../../hooks/auth'
import { Container, Header, Content } from './styles'

const Layout = ({children, title }) => {
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
      <h4>{title}</h4>
      {children}
    </Content>
  </Container>
)
}



export default Layout
