import React from 'react'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

import { useAuth } from '../hooks/useAuth'

const Routes: React.FC = () => {
  const { user } = useAuth()

  console.log(user)
  return user ? <AppRoutes /> : <AuthRoutes />
}

export default Routes
