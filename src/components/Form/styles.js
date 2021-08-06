import styled from 'styled-components'

export const FormItem = styled.div`
  margin: 24px 0;
`

export const Button = styled.button`
  background-color: grey;
  display: block;
  width: min-content;
  white-space: nowrap;
  color: #FFF;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  padding: ${({ small }) => (small ? '3px 6px' : '10px 14px')};
  font-size: ${({ small }) => (small ? '12px' : '14px')};
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`

export const Label = styled.h4`
  color: grey;
  margin-bottom: 8px;
`

export const Input = styled.input`
  border: 2px solid grey;
  border-radius: 6px;
  padding: 8px;
`

export const Row = styled.div`
  display: flex;
  margin-bottom: 8px;
  width: 400px;
  align-items: center;
  > ${Input} {
    margin-right: 12px;
    flex: 1;
  }
`

export const ArrayLabel = styled(Label)`
  display: flex;
  align-items: baseline;
  > ${Button} {
    margin-left: 12px
  }
`

export const FormArray = styled.div`
  margin-bottom: 32px;
`
