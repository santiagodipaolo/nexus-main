import React, {useState} from 'react';
import {
  chakra,
  Container,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Button,
  Image,
  Skeleton,
  Box,
  Link,
  Flex,
  Icon,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { GoChevronRight } from 'react-icons/go';
import { MdBolt } from 'react-icons/md';
import ContactForm from '../ContactForm';

const HeroSection = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = useState('right')

  return (
    <Box bg='blackAlpha.900'>
    <Container maxW="6xl" px={{ base: 6, md: 3 }} py={5} h={{base: 1100, md: 700, lg: 600, xl:510}}>
      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="space-between">
        <Stack direction="column" spacing={6} justifyContent="center" maxW="480px">
          <HStack
            as={Link}
            p={1}
            rounded="full"
            fontSize="sm"
            w="max-content"
            bg='#c77dff'
            href='/blog'
          >
            <Box
              py={1}
              px={2}
              lineHeight={1}
              rounded="full"
              color="blackAlpha.700"
              bgGradient="linear(to-l, #9d4edd,#c77dff)"
              _hover={{ bgGradient: 'linear(to-l, #c77dff,#9d4edd)', opacity: 0.9 }} 
            >
              What&apos;s new
            </Box>
            <HStack spacing={1} alignItems="center" justifyContent="center">
              <Text lineHeight={1}>See our Blog</Text>
              <Icon as={GoChevronRight} w={4} h={4} />
            </HStack>
          </HStack>
          <chakra.h1 fontSize="5xl" lineHeight={1} fontWeight="bold" textAlign="left" color='#e9ecef'>
            Connecting LatAm professionals to the <br />
            <chakra.span color="#e9ecef">American Dream</chakra.span>
          </chakra.h1>
          <Text
            fontSize="1.2rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="400"
            color="gray.300"
          >
           With our guarantee of top-notch quality and zero risk approach - if we don&apos;t deliver, you don&apos;t pay - you can trust us to 
           find the right fit for your company within 15 days or less.
          </Text>
          <HStack
            spacing={{ base: 0, sm: 2 }}
            mb={{ base: '3rem !important', sm: 0 }}
            flexWrap="wrap"
          >
            <chakra.button
              w={{ base: '100%', sm: 'auto' }}
              h={12}
              px={6}
              color="white"
              size="lg"
              rounded="md"
              mb={{ base: 2, sm: 0 }}
              zIndex={5}
              lineHeight={1}
              bgGradient="linear(to-l, #9d4edd,#c77dff)"
              _hover={{ bgGradient: 'linear(to-l, #c77dff,#9d4edd)', opacity: 0.9 }}
              onClick={onOpen}
            >
              <chakra.span color='blackAlpha.900' fontWeight={600} > GET IN TOUCH </chakra.span>
              <Icon as={MdBolt} h={4} w={4} ml={1} color='blackAlpha.900' />
            </chakra.button>

            <Drawer placement={placement} onClose={onClose} isOpen={isOpen} size='xl'>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader borderBottomWidth='1px'>
                  <Flex direction='horizontal' justifyContent='space-between'>
                    <Text></Text>
                    <Button onClick={onClose} color='#9d4edd' variant='ghost'>X</Button>
                  </Flex>
                </DrawerHeader>
                <DrawerBody>
                  <ContactForm />
                </DrawerBody>
              </DrawerContent>
            </Drawer>
            
            {/* <Box
              d="flex"
              justifyContent="center"
              bg={useColorModeValue('white', 'gray.800')}
              w={{ base: '100%', sm: 'auto' }}
              border="1px solid"
              borderColor="gray.300"
              p={3}
              lineHeight={1.18}
              rounded="md"
              boxShadow="md"
              as={Link}
              zIndex={55555555}
              textAlign='center'
            >
              Lorem Ipsum 
            </Box> */}
          </HStack>
        </Stack>
        <Box ml={{ base: 0, md: 5 }} pos="relative">
          {/* <DottedBox /> */}
          <Image
            loading='lazy'
            width={{base: '100%', md: 500}}
            minW={{ base: 'auto', md: '30rem' }}
            objectFit="cover"
            src="/hero-image.jpg"
            rounded="md"
            fallback={<Skeleton />}
            alt='hero image'
          />
        </Box>
      </Stack>
    </Container>
    </Box>
  );
};

function DottedBox() {
  return (
    <Box position="absolute" left="-45px" top="-30px" height="full" maxW="700px" zIndex={-1}>
      <svg
        color='whiteAlpha.900'
        width="350"
        height="420"
        fill="none"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"></rect>
      </svg>
    </Box>
  );
}

export default HeroSection;
