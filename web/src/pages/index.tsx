import Router from 'next/router'
import { Box, Flex, Heading } from '@chakra-ui/react'

import { useContext, useEffect } from 'react'
import NavBar from '../components/NavBar'
import { AuthContext } from '../context/AuthContextProvider'
import { useMeQuery, useSignoutMutation } from '../generated/graphql'
import Loader from 'react-spinners/ScaleLoader'

const Index = () => {
  const { loggedInUser } = useContext(AuthContext)

  useEffect(() => {
    if (!loggedInUser) {
      Router.push('/signIn')
    }
  }, [loggedInUser])

  return !loggedInUser ? (
    <Flex align={'center'} justify={'center'} p={20}>
      <Loader color='#234bff' />
    </Flex>
  ) : (
    <>
      <NavBar />
      <Flex align={'center'} justify={'center'} p={20}>
        <Heading>Hello Home page</Heading>
        <Box>
          <p> Username : {loggedInUser.username}</p>
        </Box>
      </Flex>
    </>
  )
}

export default Index