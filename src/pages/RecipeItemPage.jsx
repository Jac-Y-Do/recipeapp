import {
  Stack,
  Flex,
  Text,
  Heading,
  Button,
  Image,
  SimpleGrid,
  Box
} from '@chakra-ui/react'
import { RecipeTag, VeganTag, WarningTag } from '../components/RecipeTag'
import { PageHeader } from '../components/PageHeader'
import { useEffect } from 'react'

export const RecipeItemPage = ({ item, clickFn }) => {
  useEffect(() => {
    // 👇️ Scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      <PageHeader />

      <Image
        src={item.recipe.image}
        w='100%'
        objectFit='cover'
        aspectRatio={{ base: 16 / 9 }}
        maxH={{ base: 400, sm: 400, lg: 500 }}
      />

      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2 }}
        gap={{ base: 4, md: 6 }}
        marginTop='16px'
        paddingBottom={16}
      >
        <Box marginLeft={10} marginRight={10}>
          <Stack flex='1' gap={{ base: 2 }}>
            <Text>
              {item.recipe.mealType}: {item.recipe.dishType}
            </Text>

            <Heading
              size={{ base: 'md', lg: 'lg' }}
              fontSize={{ base: 'xl', md: 'xl' }}
            >
              {item.recipe.label}
            </Heading>

            <Text>Servings: {item.recipe.yield}</Text>

            <Text>Cooking time: {item.recipe.totalTime} Minutes</Text>

            <Heading size={{ base: 'lg', sm: 'lg' }}>Ingredients:</Heading>

            <Text>
              {item.recipe.ingredientLines.map(ingredient => (
                <p key={ingredient}>{ingredient}</p>
              ))}
            </Text>

            <Heading size={{ base: 'lg', sm: 'lg' }}>Nutrients:</Heading>
            <Text>
              {Object.entries(item.recipe.totalNutrients).map(
                ([key, nutrient]) => (
                  <p key={key}>
                    {nutrient.label}: {nutrient.quantity.toFixed(2)}{' '}
                    {nutrient.unit}
                  </p>
                )
              )}
            </Text>
          </Stack>
        </Box>

        <Box marginLeft={10} marginRight={10}>
          `
          <Stack flex='1' gap={{ base: 2 }}>
            {item.recipe.dietLabels.length > 0 && 'Diet:'}
            <Flex gap={2} wrap='wrap'>
              {item.recipe.dietLabels.map(label => (
                <RecipeTag key={label}>{label}</RecipeTag>
              ))}
            </Flex>

            {item.recipe.healthLabels.length > 0 && 'Health labels:'}
            <Flex gap={2} wrap='wrap'>
              {item.recipe.healthLabels.map(label => (
                <VeganTag label={label} key={label}>
                  {label}
                </VeganTag>
              ))}
            </Flex>

            {item.recipe.cautions.length > 0 && 'Caution:'}
            <Flex gap={2} wrap='wrap'>
              {item.recipe.cautions.map(label => (
                <WarningTag key={label}>{label}</WarningTag>
              ))}
            </Flex>

            <Button
              w={{ base: 'full', sm: 'fit-content' }}
              onClick={() => clickFn(undefined)}
            >
              Back to overview
            </Button>
          </Stack>
        </Box>
      </SimpleGrid>
    </>
  )
}
