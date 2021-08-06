import React from 'react';
import { AuthProvider } from './hooks/auth';
import Routes from './Routes';

const App = () => (
  <AuthProvider>
    <Routes />
  </AuthProvider>
)

export default App
