import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 20%;
  background-color: grey;
  color: #FFF;
  > button {
    background-color: transparent;
    border: 2px solid #FFF;
    padding: 8px 16px;
    border-radius: 6px;
    font-weight: bold;
    color: #FFF;
    font-size: 14px;
  }
`

export const Content = styled.div`
  margin: 0 20%;
  color: grey;
`

export const Title = styled.h4`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > button {
    background-color: transparent;
    border: 2px solid grey;
    padding: 8px 16px;
    border-radius: 6px;
    font-weight: bold;
    color: grey;
    font-size: 14px;
  }
`
