import { Box, Button, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

interface JobItemProps {
  theJob: { id: string; jobContent: string; comment: string }
}
;[]
export const JobItem: React.FC<JobItemProps> = ({ theJob }: JobItemProps) => {
  //  state Edit job
  const [editJob, setEditJob] = useState<JobItemProps | null>(null)

  function onJobDelete(jobId: any) {
    setAllJob((prevAllJob) => {
      return prevAllJob.filter((theJob) => theJob.id !== jobId)
    })
  }
  return (
    <div>
      <Box mt={4} p={3} bg='#f1f1f1' borderRadius={5}>
        <Text px={4} fontSize={'3xl'}>
          {theJob.jobContent}
        </Text>
        <Text px={4} fontSize={'md'}>
          {theJob.comment}
        </Text>

        <Button
          onClick={() => {
            setEditJob(theJob)
          }}
          bg='#f1f1f1'
          _hover={{
            bgColor: '#f1f1f1',
            color: '#a4b85d',
          }}
        >
          Edit
        </Button>

        <span> | </span>

        <Button
          onClick={() => {
            onJobDelete(theJob.id)
          }}
          bg='#f1f1f1'
          _hover={{
            bgColor: '#f1f1f1',
            color: '#c25f5f',
          }}
        >
          Delete
        </Button>
      </Box>
    </div>
  )
}
