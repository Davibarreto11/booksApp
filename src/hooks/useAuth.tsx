import type React from 'react'
import { useEffect, useState } from 'react'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/firebase'

// const AuthContext = createContext({})

export const useAuth: React.FC = () => {
  const [user, setUser] = useState<any>()

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, user => {
      console.log('got user: ', user)
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })

    return unSub
  }, [])

  return { user }
}

// export const useAuth = (): any => {
//   const context = useContext(AuthContext)

//   if (!context) {
//     throw new Error('Use Auth mist be used within an AuthProvider')
//   }

//   return context
// }
