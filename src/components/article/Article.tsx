import { Box } from '@chakra-ui/layout'
import {
  AspectRatio,
  Heading,
  Image,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import React, { VFC } from 'react'
import LineClam from '../custom/LineClamp'

const Article: VFC = () => {
  return (
    <Box
      as="article"
      color={useColorModeValue('gray.300', 'gray.500')}
      border={1}
      borderStyle="solid"
      borderRadius={6}
    >
      <AspectRatio ratio={16 / 9}>
        <Image src="https://bit.ly/sage-adebayo" />
      </AspectRatio>
      <Box p={3}>
        <LineClam>
          <Heading
            as="h2"
            size="sm"
            fontWeight="nomal"
            color={useColorModeValue('gray.900', '#ffffff')}
          >
            lodash の debounce や throttle で簡単に負荷対策 - Qiita
          </Heading>
        </LineClam>
        <Text fontSize="xs" color="gray.500" isTruncated>
          2021年5月11日
        </Text>
      </Box>
    </Box>
  )
}

export default Article
