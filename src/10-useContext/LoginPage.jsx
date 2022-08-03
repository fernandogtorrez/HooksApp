import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

const user2 = {
    id:2,
    username: 'Juan',
    email: 'Juan@gmail.com'
}

export const LoginPage = () => {

    const {user, setUser} = useContext(UserContext)

  return (
    <>
        <h3>LoginPage</h3>
        <hr />

        <button className='btn btn-success' onClick={()=> setUser(user2)}> click aqui</button>
        <code>{JSON.stringify(user)}</code>
    </>
  )
}
