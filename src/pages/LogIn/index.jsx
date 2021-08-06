import React from 'react'
import { useForm } from 'react-hook-form'
import { Container, Fieldset } from './styles'
import { useAuth } from '../../hooks/auth'
import { useHistory } from 'react-router'

const Login = () => {
  const { register, handleSubmit } = useForm()
  const { signIn } = useAuth()
  const history = useHistory()

  const onSubmit = (data) => {
    const { user, password } = data
    signIn(user, password)
    history.push('/')
  }

  return (
    <Container>
      <div>
        <h4>Dragões</h4>
      <form onSubmit={handleSubmit(onSubmit)} >
        <Fieldset>
          <label>Usuário</label>
          <input type='text' {...register('user')} />
          <label>Senha</label>
          <input type='text' {...register('password')}/>
          <button type="submit">
          Entrar
        </button>
        </Fieldset>
      </form>
      </div>
    </Container>
  )
}

export default Login
