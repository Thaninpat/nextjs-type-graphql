import { Box, Container } from '@chakra-ui/react'
import React from 'react'

interface BudgetItemProps {
  result: {
    id: number
    label: string
    key: string
  }
}
;[]

export const BudgetItem: React.FC<BudgetItemProps> = ({
  result,
}: BudgetItemProps) => {
  return (
    <Container>
      <Box m={4}>
        id :{result.id} label :{result.label} key:{result.key}
      </Box>
    </Container>
  )
}
