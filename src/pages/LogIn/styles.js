import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: grey;
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  width: 300px;
  display: flex;
  flex-direction: column;
  >label {
    margin-bottom: 2px;
  }
  > input {
    margin-bottom: 32px;
    border-radius: 6px;
    padding: 8px;
    border: none;
  }

  > button {
    width: 100%;
    background-color: transparent;
    border: 2px solid #FFF;
    padding: 8px 16px;
    border-radius: 6px;
    font-weight: bold;
    color: #FFF;
    font-size: 14px;
    margin: 12px 0;

  }
`
