import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { useUserQuery } from '../generated/graphql'

interface userProps {}

const user: React.FC<userProps> = ({}) => {
  const { data, loading, error } = useUserQuery()

  return (
    <Flex align={'center'} justify={'center'} p={20} flexDirection={'column'}>
      <Heading>User page</Heading>
    </Flex>
  )
}

export default user
