import styled from 'styled-components';

export const Container = styled.li`
  background-color: ${props => props.color};

  list-style: none;
  border-radius: 5px;
  margin: 10px 0;
  padding: 12px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  background-color: gray;
  &:hover {
    opacity: 0.7;
    transform: translateX(5px);
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
  }
`

export const ContentTitle = styled.h4`
  margin-top: 0;
`

export const Icon = styled.div`
  margin: 0 12px;
  > svg {
    width: 24px;
    height: 24px;
  }
`

export const Name = styled.div`
  flex: 1;
  margin: 0;
`

export const Type = styled.div`
min-width: 100px;
text-align: left;

`

export const ModalContent = styled.div`
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
