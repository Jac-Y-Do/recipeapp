import { Box, Flex, Heading, HStack, Spacer, Container } from '@chakra-ui/react'
import { ColorModeToggle } from './ui/ColorModeToggle'

export const PageHeader = () => {
  const listPage = () => {
    location.href = 'RecipeListPage'
  }

  return (
    <Box
      as='header'
      bg='#283618'
      color='F8F6E8'
      position='sticky'
      top={0}
      zIndex='sticky'
      shadow='sm'
    >
      <Container>
        <Flex h={16} align='center' maxW='1440px' marginX='auto'>
          <Heading
            size='3xl'
            color='white'
            paddingRight={10}
            onClick={listPage}
            cursor={'pointer'}
          >
            EatMe
          </Heading>
          <Spacer />
          <HStack spacing={6}>
            <ColorModeToggle padding={10} />
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
