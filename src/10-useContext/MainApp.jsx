import React from 'react'
import { BrowserRouter as Router, Link, Navigate, Route, Routes } from 'react-router-dom'
import { AboutPage } from './AboutPage'
import { UserProvider } from './context/UserProvider'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { NavBar } from './NavBar'

export const MainApp = () => {
  return (
    <>
        <UserProvider>
            <h2>MainApp</h2>
            <hr />
            <Router>

                <NavBar/>
                <Routes>
                    <Route path='*' element= { <Navigate to={'/'}/> } />
                    <Route path='/' element= { <HomePage/> } />
                    <Route path='/login' element= { <LoginPage/> } />
                    <Route path='/about' element= { <AboutPage/> } />
                </Routes>

            </Router>
        </UserProvider>
    </>
  )
}
