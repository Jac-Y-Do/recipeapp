import { Card, Image, Box, Stack, Heading, Text, Flex } from '@chakra-ui/react'
import { RecipeTag, VeganTag, WarningTag } from './RecipeTag'
// import { data } from '../utils/data'
import { useTheme } from 'next-themes'

const capitalizeFirst = ({ str }) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const RecipeItemCard = ({ item, clickFn }) => {
  const { resolvedTheme } = useTheme()
  // Gebruik resolvedTheme uit ColorModeToggle voor de color modus (light/dark)

  return (
    <Card.Root
      borderRadius='xl'
      w='full'
      h='auto'
      onClick={() => clickFn(item)}
      cursor='pointer'
      transition='transform 0.15s ease'
      shadow='md'
      backgroundColor={resolvedTheme === 'light' ? '#C6CBAD' : '#283618'} // Lichtgroen in light mode, donkergroen in dark mode
      color={resolvedTheme === 'light' ? 'black' : 'white'} // Zwart in light mode, wit in dark mode
      _hover={{
        transform: 'scale(1.01)',
        backgroundColor: resolvedTheme === 'light' ? '#949F72' : '#3A4A28', // Donkerder groen in dark mode
        color: resolvedTheme === 'light' ? 'white' : '#C6CBAD' // Wit in light mode, lichtgroen in dark mode
      }}
    >
      <Card.Body>
        <Box
          w='full'
          aspectRatio={{ base: 16 / 9, md: 4 / 3 }}
          overflow='hidden'
          borderRadius='lg'
          transition='transform 0.15s ease'
        >
          <Image
            src={item.recipe.image}
            // width="100%"
            height='100%'
            objectFit='cover'
            aspectRatio={{ base: 4 / 3, sm: 16 / 9 }}
          />
        </Box>
        <Stack mt={{ base: 4, md: 6 }} gap={{ base: 2, md: 3 }}>
          <Heading size={{ base: 'md', md: 'lg' }}>{item.recipe.label}</Heading>
          <Text>
            Kitchen: {capitalizeFirst({ str: item.recipe.cuisineType[0] })}
          </Text>
          <Text>Dish: {capitalizeFirst({ str: item.recipe.mealType[0] })}</Text>
          <Flex gap={2}>
            {item.recipe.dietLabels.map(label => (
              <RecipeTag key={label}>{label}</RecipeTag>
            ))}
          </Flex>
          <Flex gap={2}>
            {item.recipe.healthLabels
              .filter(isVg => isVg.includes('Veg'))
              .map(label => (
                <VeganTag label={label} key={label}>
                  {label}
                </VeganTag>
              ))}
          </Flex>
          {item.recipe.cautions.length > 0 && 'Caution:'}
          <Flex gap={2}>
            {item.recipe.cautions.map(label => (
              <WarningTag key={label}>{label}</WarningTag>
            ))}
          </Flex>
        </Stack>
      </Card.Body>
    </Card.Root>
  )
}
