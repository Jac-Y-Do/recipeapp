import {
  SimpleGrid,
  Container,
  Box,
  Flex,
  Heading,
  InputGroup,
  Input
} from '@chakra-ui/react'
import { RecipeItemCard } from '../components/RecipeItemCard'
import { data } from '../utils/data'
import { LuSearch } from 'react-icons/lu'
import { useState, useEffect } from 'react'
import { ColorModeToggle } from '../components/ui/ColorModeToggle'
import '../utils/style.css'
// let initialRecipes = data.hits

export const RecipeListPage = ({ clickFn }) => {
  const [recipes, setRecipes] = useState(data.hits)
  const [searchItem, setSearchItem] = useState('')

  const handleInputChange = e => {
    // get the value of the search
    const searchTerm = e.target.value
    // set the searchItem state
    setSearchItem(searchTerm)

    // no entry -> show all recipes
    if (!searchTerm.trim()) {
      setRecipes(data.hits)
      return
    }

    // filter all recipes labels and healthLabels for the searchTerm
    const filteredItems = data.hits.filter(gerecht => {
      const searchLabel = gerecht.recipe.label
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
      const searchHealthLabel = gerecht.recipe.healthLabels.some(label =>
        label.toLowerCase().includes(searchTerm.toLowerCase('veg'))
      )

      return searchLabel || searchHealthLabel
    })
    // update the recipes
    setRecipes(filteredItems)
  }

  useEffect(() => {
    // 👇️ Scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
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
            <Heading size='3xl' color='white' paddingRight={10}>
              EatMe
            </Heading>

            <InputGroup
              flex='1'
              startElement={<LuSearch />}
              css={{ color: 'white' }}
              paddingRight={10}
              className='displayInlineSearch'
              borderRadius='lg'
            >
              <Input
                placeholder='search...'
                _placeholder={{ color: 'white' }}
                css={{ 'background-color': '#606C38', color: 'white' }}
                onChange={handleInputChange}
                name='myInput'
                value={searchItem}
                borderColor={'#283618'}
              />
            </InputGroup>

            <ColorModeToggle />
          </Flex>
        </Container>
      </Box>

      <Box
        as='header'
        bg='#283618'
        color='F8F6E8'
        position='sticky'
        top={0}
        zIndex='sticky'
        shadow='sm'
        className='displayBlockSearch'
      >
        <Flex padding='4' paddingTop='0' align='center'>
          <InputGroup
            flex='1'
            startElement={<LuSearch />}
            css={{ color: 'white' }}
            className='displayBlockSearch'
          >
            <Input
              placeholder='search...'
              _placeholder={{ color: 'white' }}
              css={{ 'background-color': '#606C38', color: 'white' }}
              onChange={handleInputChange}
              name='myInput'
              value={searchItem}
              borderColor={'#283618'}
            />
          </InputGroup>
        </Flex>
      </Box>

      <Container>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
          gap={{ base: 4, md: 6 }}
          marginTop='16px'
          paddingBottom={16}
        >
          {recipes.map(item => (
            <RecipeItemCard
              key={item.recipe.label}
              item={item}
              clickFn={clickFn}
            />
          ))}
        </SimpleGrid>
      </Container>
      {recipes.length === 0 && (
        <Container centerContent fontSize={{ base: '3xl' }}>
          No recipes found...
        </Container>
      )}
    </>
  )
}
