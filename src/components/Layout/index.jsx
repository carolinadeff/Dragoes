import React from 'react'
import { Container, Header, Content } from './styles'

const Layout = ({children}) => (
  <Container>
    <Header>
      Dragons
    </Header>
    <Content>
      {children}
    </Content>
  </Container>
)

export default Layout
