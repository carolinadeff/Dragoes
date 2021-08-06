import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import List from './pages/List'
import Login from './pages/LogIn'
import New from './pages/New'
import Edit from './pages/Edit'
import { useAuth } from './hooks/auth'

const Routes = () => {
  const { logged } = useAuth()

  const  PrivateRoute = ({ ...rest }) => (logged ? <Route {...rest} /> : <Redirect to='/login' />)

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />

        <PrivateRoute path="/" exact component={List} />
        <PrivateRoute path="/new" component={New} />
        <PrivateRoute path="/edit/:dragonId" component={Edit} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
