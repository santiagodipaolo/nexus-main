import {useState} from 'react'

import {
  chakra,
  Stack,
  VStack,
  HStack,
  Text,
  Container,
  Box,
  Icon,
  Button,
  Divider,
  SimpleGrid,
  useColorModeValue,
  Flex,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  useDisclosure
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiCheck } from 'react-icons/bi';

import ContactForm from '../ContactForm';

const TwoTiersPricing = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = useState('right')

  return (
    <Box bg='blackAlpha.900' id='pricing'>
    <Container maxW="2xl" p="6" h={{base: 750, md: 720}} >
      <Box textAlign="center" mb={50}>
      <chakra.span fontSize="5xl" fontWeight="bold" color='#e9ecef' bg="linear-gradient(transparent 70%, #c77dff 10%)">
        Pricing
      </chakra.span>

      </Box>
      <SimpleGrid columns={1} spacing={5} mt={4}>
        
        <Box
        minW={{ base: 'xs', sm: 'sm' }}
        border="1px solid"
        borderColor={useColorModeValue('gray.400', 'gray.600')}
        rounded="md"
        marginInline="auto"
        my={3}
        _hover={{
          boxShadow: useColorModeValue(
            '0 4px 6px rgba(160, 174, 192, 0.6)',
            '0 4px 6px rgba(9, 17, 28, 0.4)'
          )
        }}
        h={{base: 550, md: 450}}
        >
          <Box p={6} textAlign='center'>
            <chakra.h2 fontSize="2xl" fontWeight="400" color='#e9ecef' bg="linear-gradient(transparent 0%, #a988c9 99%)">
              360° Solution
            </chakra.h2>
            {/* <Text fontSize="sm">{subLabel}</Text>
            <Text fontSize="4xl" fontWeight="bold" my={4}>
              ${price}
              <Text as="sub" fontSize="md" fontWeight="normal">
                /year
              </Text>
            </Text>
            <Button  bgGradient="linear(to-l, #ffef6f,#ffef9c)"
                  _hover={{ bgGradient: 'linear(to-l, #ffef9c,#ffef6f)', opacity: 0.9 }} size="md" rounded="md" w="100%">
              Find A Hire
            </Button> */}
          </Box>
          <Divider />
          
          <Box>
            <Flex p={5} display='block' >
              {/* <Text fontSize="sm" fontWeight="semibold">
                WHAT CAN YOU EXPECT FROM US
              </Text> */}
              
                <HStack  spacing={3} mb={{base: 8, md: 24}}>
                  {/* <Icon as={BiCheck} h={4} w={4} color="green.500" /> */}
                  <Text fontSize="lg" color='#e9ecef'>
                  We help you find the right talent, and once we make the match, we take care of the entire hiring process, 
                  including all necessary paperwork and documentation for international hiring and monthly salary payments. 
                  <br />
                  <br />
                  In this 
                  360-degree solution, the client determines the talent&apos;s salary and makes a monthly payment to Nexus that covers both 
                  the talent&apos;s salary and payroll services.
                  </Text>
                </HStack>
              
            
              <Button  
                bgGradient="linear(to-l, #9d4edd,#c77dff)"
                _hover={{ bgGradient: 'linear(to-l, #c77dff,#9d4edd)', opacity: 0.9 }} 
                size="md" 
                rounded="md" 
                w="100%"
                color='#e9ecef'
                onClick={onOpen}
              >
                Request a quote
              </Button>

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

            </Flex>
          </Box>
        
        </Box>
      </SimpleGrid>
    </Container>
    </Box>
  );
};

// const PricingCard = ({ title, subLabel, price, features }) => {
//   return (
//     <Box
//       minW={{ base: 'xs', sm: 'sm' }}
//       border="1px solid"
//       borderColor={useColorModeValue('gray.400', 'gray.600')}
//       rounded="md"
//       marginInline="auto"
//       my={3}
//       _hover={{
//         boxShadow: useColorModeValue(
//           '0 4px 6px rgba(160, 174, 192, 0.6)',
//           '0 4px 6px rgba(9, 17, 28, 0.4)'
//         )
//       }}
      
//     >
//       {/* <Box p={6}>
//         <chakra.h2 fontSize="2xl" fontWeight="400">
//           {title}
//         </chakra.h2>
//         <Text fontSize="sm">{subLabel}</Text>
//         <Text fontSize="4xl" fontWeight="bold" my={4}>
//           ${price}
//           <Text as="sub" fontSize="md" fontWeight="normal">
//             /year
//           </Text>
//         </Text>
//         <Button  bgGradient="linear(to-l, #ffef6f,#ffef9c)"
//               _hover={{ bgGradient: 'linear(to-l, #ffef9c,#ffef6f)', opacity: 0.9 }} size="md" rounded="md" w="100%">
//           Find A Hire
//         </Button>
//       </Box> */}
//       <Divider />
      
//       <Box h={{base: 200, md: 370, 'lg': 340, xl: 500}}>
//       <Flex p={5} display='block' alignContent='space-between' >
//         {/* <Text fontSize="sm" fontWeight="semibold">
//           WHAT CAN YOU EXPECT FROM US
//         </Text> */}
//         {features.map((feature, index) => (
//           <HStack key={index} spacing={3} h={350} mb={16}>
//             {/* <Icon as={BiCheck} h={4} w={4} color="green.500" /> */}
//             <Text fontSize="lg" color="gray.500">
//               {feature}
//             </Text>
//           </HStack>
//         ))}
      
//         <Button  
//           bgGradient="linear(to-l, #ffef6f,#ffef9c)"
//           _hover={{ bgGradient: 'linear(to-l, #ffef9c,#ffef6f)', opacity: 0.9 }} 
//           size="md" 
//           rounded="md" 
//           w="100%"
//         >
//           Find A Hire
//         </Button>
//       </Flex>
//       </Box>
      
//     </Box>
//   );
// };

export default TwoTiersPricing;
  