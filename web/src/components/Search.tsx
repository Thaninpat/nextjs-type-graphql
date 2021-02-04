<<<<<<< HEAD
import { Center, Box, Input } from '@chakra-ui/react'
import React from 'react'

interface SearchProps {
  value: string
  onValueChange: any
}

export const Search: React.FC<SearchProps> = ({
  value,
  onValueChange,
}: SearchProps) => {
  return (
    <Center marginTop='30px'>
      <Box padding='10px'>
        <Input
          variant='flushed'
          placeholder='Search'
          type='text'
          value={value}
          onChange={(event) => {
            onValueChange(event.target.value)
          }}
        />
      </Box>
    </Center>
  )
}
=======
import { Center, Box, Input } from '@chakra-ui/react'
import React from 'react'

interface SearchProps {
  value: string
  onValueChange: any
}

export const Search: React.FC<SearchProps> = ({
  value,
  onValueChange,
}: SearchProps) => {
  return (
    <Center marginTop='30px'>
      <Box padding='10px'>
        <Input
          variant='flushed'
          placeholder='Search'
          type='text'
          value={value}
          onChange={(event) => {
            onValueChange(event.target.value)
          }}
        />
      </Box>
    </Center>
  )
}
>>>>>>> de6edc37dde3cf299b819a2c79b87d987b6dd5a3
