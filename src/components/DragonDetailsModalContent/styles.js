import styled from 'styled-components';

export const ContentTitle = styled.h4`
  margin-top: 0;
`

export const ModalContent = styled.div`
  width: 30vw;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

export const InfoValue = styled.div`
  &:not(:last-child) {
    margin-bottom: 12px;
  }

  > span {
    margin-bottom: 20px;
  }
`

export const Info = styled.div`
margin-right: 36px;
min-height: 160px;

`

export const Button = styled.button`
  box-sizing: border-box;
  font-size: 13px;
  text-decoration: none;
  background-color: grey;
  display: block;
  width: 100%;
  color: #FFF;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  padding: 6px 10px;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`
