import styled from 'styled-components'

export const ListContainer = styled.div`
  height: 50vh;
  width: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: grey;
    border-radius: 5px;
  }
  box-shadow: inset 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
  padding: 0 16px;
  border-radius: 8px;
  margin-bottom: 24px;
`

export const Link = styled.a`
  background-color: grey;
  text-decoration: none;
  white-space: nowrap;
  display: block;
  width: min-content;
  color: #FFF;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  padding: 12px 18px;
  &:hover {
    background-color: darkGrey;
  }


`
