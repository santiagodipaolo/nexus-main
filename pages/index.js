import { Box } from '@chakra-ui/react'
import About from '../components/About'
import Blog from '../components/Blog'

import Faqs from '../components/Faqs'

import Hero from '../components/Hero'
import Pricing from '../components/Pricing'
import Stats from '../components/Stats'
import Talents from '../components/Talent'

export default function Home() {
  return (
    <>
      <Box>
        <Hero />
        <About />
        <Stats />
        <Pricing />
        <Talents />
        <Faqs />
        <Blog />
      </Box>
    </>
  )
}
