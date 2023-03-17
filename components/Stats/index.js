import { chakra, Container, Stack, HStack, VStack, Flex, Text, Image, Box } from '@chakra-ui/react';

const overviewList = [
  {
    id: 1,
    perk: 'US Time Zones',
    description: 'LatAm is +/- 2 hours of EST.'
  },
  {
    id: 2,
    perk: 'Highly skilled talent',
    description: `In Latam there are super talented professionals who are willing 
    to work remotely for a salary in US dollars.`
  },
  {
    id: 3,
    perk: 'Strong English',
    description: 'LatAm is a non-English continent, but many of its inhabitants have a high level of English proficiency, providing them with a competitive advantage in the global professional market.'
  },
  {
    id: 4,
    perk: 'High motivation',
    description: 'Low salaries in LatAm make the possibility of earning a US dollar salary a strong motivator for workers in the region.'
  },
];

const OverviewSection = () => {
  return (
    <Box bg='blackAlpha.100'>
    <Container maxW="6xl" py={10} id='why' >
      <Box textAlign="center" mb={50}>
      <chakra.span fontSize="5xl" fontWeight="bold" color="blackAlpha.800" bg="linear-gradient(transparent 70%, #c77dff 10%)">
        Why LatAm?
      </chakra.span>

      </Box>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: 0, md: 3 }}
        justifyContent="space-between"
        alignItems="center"
      >
        <VStack spacing={4} alignItems="flex-start" mb={{ base: 5, md: 0 }} maxW="md">
          {overviewList.map((data) => (
            <Box key={data.id}>
              <HStack spacing={2}>
                <Flex
                  fontWeight="bold"
                  boxShadow="md"
                  color="white"
                  bg="#c77dff"
                  rounded="full"
                  justifyContent="center"
                  alignItems="center"
                  w={10}
                  h={10}
                >
                  {data.id}
                </Flex>
                <Text fontSize="xl" fontWeight='bold'>{data.perk}</Text>
              </HStack>
              <Text fontSize="md" color="gray.600" ml={12}>
                {data.description}
              </Text>
            </Box>
          ))}
        </VStack>
        <Image
          boxSize={{ base: 'auto', md: 'sm', lg: 'lg' }}
          objectFit="cover"
          src="/remote-work.jpg"
          rounded="md"
          loading='lazy'
          alt='why image'
        />
      </Stack>
    </Container>
    </Box>
  );
};

export default OverviewSection;