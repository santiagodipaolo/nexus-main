import * as React from 'react';
import { Container, Text, SimpleGrid, Box, chakra, Divider } from '@chakra-ui/react';


const statData = [
  {
    id: 1,
    label: 'Software Engineering',
    score: '1,730'
  },
  {
    id: 2,
    label: 'Crypto',
    score: '31,573'
  },
  {
    id: 3,
    label: 'Marketing',
    score: '5'
  },
  {
    id: 4,
    label: 'Finance',
    score: '1,730'
  },
  {
    id: 5,
    label: 'Sales',
    score: '31,573'
  },
  {
    id: 6,
    label: 'CX',
    score: '5'
  }
];

const Talents = () => {
  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }} id='talent'>
      <Box textAlign="center" mb={10}>
            <chakra.span fontSize="5xl" fontWeight="bold" color="blackAlpha.800" bg="linear-gradient(transparent 70%, #c77dff 10%)">
              Some of the talent you can find with us
            </chakra.span>

        </Box>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3, xl: 3 }} spacing={5} mt={12} mb={4}>
        {statData.map((data) => (
          <Box 
            key={data.id} 
            p={5} 
            boxShadow="md" 
            rounded="md" 
            borderWidth={1}
            
            _hover={{ bgGradient: 'linear(to-l, #7b2cbf,#9d4edd)', opacity: 0.9 }} 
          >
            <Text fontWeight={600} fontSize="lg" textAlign='center'>
              {data.label}
            </Text>
            
          </Box>
        ))}
      </SimpleGrid>

      <Box textAlign="center" mt={10}>
            <chakra.span fontSize="2xl" fontWeight="bold" color="blackAlpha.800" bg="linear-gradient(transparent 70%, #c77dff 10%)">
              ... and a lot more.
            </chakra.span>

      </Box>

    </Container>
  );
};

export default Talents;

