import { Container, Box, chakra, Text, Icon, SimpleGrid } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { MdOutlinePersonPin, MdPermDeviceInformation, MdOutlineFlashlightOn } from 'react-icons/md';
import { SiMinds } from 'react-icons/si';
import { IconType } from 'react-icons';
import {BsSpeedometer2} from 'react-icons/bs'
import {MdOutlineHighQuality, MdOutlineSavings} from 'react-icons/md'
import {AiOutlineSafety} from 'react-icons/ai'


const features= [
  {
    heading: 'Quality',
    content:
      'We don’t fill you with profiles to waste your time. We give you between 3 and 5 high quality options.',
    icon: MdOutlineHighQuality
  },
  {
    heading: 'Speed',
    content: `We guarantee hiring in less than 15 days.`,
    icon: BsSpeedometer2
  },
  {
    heading: 'Affordability',
    content:
      'Save 40-70% vs. comparable US-based talent.',
    icon: MdOutlineSavings
  },
  {
    heading: 'Risk Free',
    content: `No upfront or hidden fees. If we don't find the ideal candidate, you won't be charged.`,
    icon: AiOutlineSafety
  }
];

const About = () => {
  return (
   <Box bg='blackAlpha.100'  id='us' h={{base: 1300, md: 800, lg: 700, xl: 700}}> 
        <Container maxW="6xl" p={{ base: 5, md: 20 }}>
          <Box textAlign="center" mb={15}>
            <chakra.span fontSize="5xl" fontWeight="bold" color="blackAlpha.800" bg="linear-gradient(transparent 70%, #c77dff 10%)">
              Nexus is a startup made for startups
            </chakra.span>

          </Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} placeItems="space-around" spacing={16} mt={20} mb={4}>
            {features.map((feature, index) => (
            <Box 
              key={index} 
              textAlign="center"
              borderWidth="1px"
              shadow="lg"
              rounded="3xl"
              overflow="hidden"
              m={1}
              p={5}
              _hover={{ bgGradient: 'linear(to-l, #c77dff,#9d4edd)', opacity: 0.9 }} 
            >
                <Icon as={feature.icon} w={10} h={10} color="#c77dff"/>
                <chakra.h3 fontWeight="semibold" fontSize="2xl">
                {feature.heading}
                </chakra.h3>
                <Text fontSize="md">{feature.content}</Text>
            </Box>
            ))}
        </SimpleGrid>
        </Container>
    </Box>
  );
};

export default About;
