import React, { useContext } from 'react'
import Link from 'next/link'
import Router from 'next/router'

// import styled from 'styled-components'
import { AuthContext } from '../context/AuthContextProvider'
import { useMeQuery, useSignoutMutation } from '../generated/graphql'

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const { loggedInUser, handleAuthAction, setAuthUser } = useContext(
    AuthContext
  )

  const [signoutMutation] = useSignoutMutation()

  const handleSignout = async () => {
    try {
      const response = await signoutMutation()

      if (!!response.data?.signout?.message) {
        setAuthUser(null)

        // ทำให้ TAP อื่นๆ Signout ออกไปด้วย
        window.localStorage.setItem('signout', Date.now().toString())

        //  Push user go home page
        Router.push('/signIn')
      }
    } catch (error) {
      alert('Sorry cannot proceed')
    }
  }

  return (
    <header
      className='headerContainer'
      style={{
        width: '100%',
        height: '3rem',
        background: '#888',
        display: 'flex',
      }}
    >
      <nav
        style={{
          width: '80%',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        {loggedInUser ? (
          <>
            <button onClick={handleSignout}>Sign Out</button>
          </>
        ) : (
          <>
            <Link href='/signIn'>Sign In</Link>
            <Link href='/signUp'>Sign Up</Link>
          </>
        )}
      </nav>
    </header>
  )
}

export default NavBar
