import React from 'react'
import Budget from '../components/interfaces'

interface BudgetItemProps {
  res: string
}
;[]

export const BudgetItem: React.FC<BudgetItemProps> = ({
  res,
}: BudgetItemProps) => {
  return <div>{res}</div>
}
