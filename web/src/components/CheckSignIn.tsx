<<<<<<< HEAD
import { Flex } from '@chakra-ui/react'
import Router from 'next/router'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContextProvider'
import Loader from 'react-loader-spinner'
import Index from '../pages'
import SignIn from '../pages/signIn'
import App from '../pages/_app'

interface CheckSignInProps {}

export const CheckSignIn: React.FC<CheckSignInProps> = ({}) => {
  const { loggedInUser } = useContext(AuthContext)

  useEffect(() => {
    // If user in not authenticated, push to home page
    if (!loggedInUser) {
      Router.push('/signIn')
      //   alert('Please SignIn.')
    }
  }, [loggedInUser])

  return <div></div>
}
=======
import { Flex } from '@chakra-ui/react'
import Router from 'next/router'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContextProvider'
import Loader from 'react-loader-spinner'
import Index from '../pages'
import SignIn from '../pages/signIn'
import App from '../pages/_app'

interface CheckSignInProps {}

export const CheckSignIn: React.FC<CheckSignInProps> = ({}) => {
  const { loggedInUser } = useContext(AuthContext)

  useEffect(() => {
    // If user in not authenticated, push to home page
    if (!loggedInUser) {
      Router.push('/signIn')
      //   alert('Please SignIn.')
    }
  }, [loggedInUser])

  return <div></div>
}
>>>>>>> de6edc37dde3cf299b819a2c79b87d987b6dd5a3
