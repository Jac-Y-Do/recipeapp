import { Tag } from '@chakra-ui/react'

export const RecipeTag = ({ children, ...props }) => {
  return (
    <Tag.Root
      p={{ base: 1.5, md: 2 }}
      size={{ base: 'sm', md: 'md' }}
      variant='solid'
      bg='#DDA15E'
      color='black'
      {...props}
    >
      <Tag.Label>{children}</Tag.Label>
    </Tag.Root>
  )
}

export const WarningTag = ({ children, ...props }) => {
  return (
    <Tag.Root
      p={{ base: 1.5, md: 2 }}
      size={{ base: 'sm', md: 'md' }}
      variant='solid'
      bg='red.400'
      color='black'
      {...props}
    >
      <Tag.Label>{children}</Tag.Label>
    </Tag.Root>
  )
}

export const VeganTag = ({ children, ...props }) => {
  return (
    <Tag.Root
      p={{ base: 1.5, md: 2 }}
      size={{ base: 'sm', md: 'md' }}
      variant='solid'
      bg='#606C38'
      color='white'
      {...props}
    >
      <Tag.Label>{children}</Tag.Label>
    </Tag.Root>
  )
}
