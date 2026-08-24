import {
  Box,
  Flex,
  Heading,
  HStack,
  Button,
  Spacer,
  Container
} from '@chakra-ui/react'
import { ColorModeToggle } from './ui/ColorModeToggle'
import { LuX } from 'react-icons/lu'

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
        <Flex h={16} align='center'>
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
            <Button
              variant='ghost'
              color='#F8F6E8'
              _hover={{ color: '#283618' }}
              onClick={listPage}
              _dark={{ _hover: { color: '#BBACC1' } }}
            >
              <LuX />
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
