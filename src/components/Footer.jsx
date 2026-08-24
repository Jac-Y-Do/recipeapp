import { Box, Container, Center } from '@chakra-ui/react'
import { useState } from 'react'

export const Footer = () => {
  const [footerText, setFooterText] = useState('just for the fun of it.')

  const toggleText = () => {
    setFooterText("don't eat the yellow snow.")
    setTimeout(() => {
      setFooterText('just for the fun of it.')
    }, 3000)
  }
  return (
    <Box
      as='footer'
      bg='#283618'
      color='F8F6E8'
      position='absolute'
      bottom={0}
      marginTop='20px'
      width='100%'
    >
      <Container>
        <Center size='3xl' color='white' h={10} onClick={toggleText}>
          {footerText}
        </Center>
      </Container>
    </Box>
  )
}
