import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'
import { BudgetItem } from '../components/BudgetItem'
import { results } from './api/data'

// ไม่ต้องมี interface ในหน้านี้ก้ได้ เพราะหน้านี้เป็น root
interface budgetOverviewProps {
  // result: {
  //   id: number
  //   label: string
  //   key: string
  // }
}
const budgetOverview: React.FC<budgetOverviewProps> = () => {
  const result = results.map((item, index) => {
    return (
      <ul key={index}>
        <BudgetItem result={item} />
      </ul>
    )
  })

  return (
    <Container maxW='xl' centerContent>
      <Heading textAlign={'center'}>Budget</Heading>
      <Box m={5}>{result}</Box>
    </Container>
  )
}

export default budgetOverview
