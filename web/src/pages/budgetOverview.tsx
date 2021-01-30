import React from 'react'
import { BudgetItem } from '../components/BudgetItem'

interface budgetOverviewProps {
  id: number
  label: string
  key: string
}
;[]

var result: budgetOverviewProps[] = [
  { id: 0, label: 'CId', key: 'contentId' },
  { id: 1, label: 'Modified By', key: 'modifiedBy' },
  { id: 2, label: 'Modified Date', key: 'modified' },
  { id: 3, label: 'Status', key: 'contentStatusId' },
  { id: 4, label: 'Status > Type', key: 'contentStatusId' },
  { id: 5, label: 'Title', key: 'title' },
  { id: 6, label: 'Type', key: 'contentTypeId' },
  { id: 7, label: 'Type > Status', key: 'contentTypeId' },
]

const budgetOverview: React.FC<budgetOverviewProps> = () => {
  return (
    <div>
      {result.map((item, index) => {
        return (
          <div key={index}>
            <BudgetItem res={item.label} />
          </div>
        )
      })}
    </div>
  )
}

export default budgetOverview
