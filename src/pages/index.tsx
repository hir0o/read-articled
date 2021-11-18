import { SimpleGrid } from '@chakra-ui/react'
import Article from '../components/article/Article'

const Page = () => {
  return (
    <>
      <SimpleGrid
        columns={{ sm: 2, md: 4 }}
        spacing={4}
        rounded="lg"
        color="gray.400"
      >
        <Article></Article>
        <Article></Article>
        <Article></Article>
        <Article></Article>
      </SimpleGrid>
    </>
  )
}

export default Page
