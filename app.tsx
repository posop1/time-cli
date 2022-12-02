import { format } from 'date-fns'
import { Box, Text } from 'ink'
import BigText from 'ink-big-text'
import render from 'ink/build/render'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [time, setTime] = useState<string | undefined>()

  useEffect(() => {
    const timer = setInterval(() => {
      getTime()
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const getTime = () => {
    setTime(format(new Date(), 'dd-MM-yyyy HH:mm:ss'))
  }

  return (
    <Box
      borderStyle="round"
      borderColor="magenta"
      padding={1}
      flexDirection="column"
      alignItems="center"
    >
      <Text bold>{time}</Text>
    </Box>
  )
}

render(<App />)
