import { Fragment } from 'react';
import {
  Container,
  Box,
  chakra,
  Flex,
  Stack,
  VStack,
  HStack,
  Grid,
  Icon,
  Divider,
  Link,
  useColorModeValue,
  Button
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { IconType } from 'react-icons';
import { FaRegComment, FaRegHeart, FaRegEye } from 'react-icons/fa';

const articles = [
  {
    title: 'Loren Ipsum',
    link: '/job-description/testjd',
    created_at: '21 Jan 2022',
    meta: {
      reactions: 225,
      comments: 20,
      views: 500
    }
  },
  {
    title: 'Data Engineer',
    link: '/job-description/dataengineer',
    created_at: '20 Jun 2021',
    meta: {
      reactions: 400,
      comments: 25,
      views: 300
    }
  },
  {
    title: `Loren Ipsum`,
    link: '',
    created_at: '31 Sept 2022',
    meta: {
      reactions: 5,
      comments: 15,
      views: 150
    }
  }
];

const CareersList = () => {
  return (
    <Container maxW="5xl" p={{ base: 5, md: 20 }} id='careers' mt={20} mb={20}>
      <Box textAlign="center" mb={10}>
            <chakra.span fontSize="5xl" fontWeight="bold" color="blackAlpha.800" bg="linear-gradient(transparent 70%, #c77dff 10%)">
              Careers
            </chakra.span>

          </Box>
      <VStack border="1px solid" borderColor="gray.400" rounded="md" overflow="hidden" spacing={0}>
        {articles.map((article, index) => (
          <Fragment key={index}>
            <Grid
              templateRows={{ base: 'auto auto', md: 'auto' }}
              w="100%"
              templateColumns={{ base: 'unset', md: '4fr 2fr 2fr' }}
              p={{ base: 2, sm: 4 }}
              gap={3}
              alignItems="center"
              _hover={{ bg:'gray.200' }}
            >
              <Box gridColumnEnd={{ base: 'span 2', md: 'span 2' }}>
                <chakra.h3  fontWeight="bold" fontSize="lg">
                  {article.title}
                </chakra.h3>
                
              </Box>
              
              <Stack
                spacing={2}
                direction="row"
                fontSize={{ base: 'sm', sm: 'md' }}
                justifySelf={{base: "flex-start", md: "flex-end"}}
                alignItems="center"
              >
               <Link 
                href={article.link}
                borderRadius={5}
                p={2}
                fontWeight={600}
                bgGradient="linear(to-l, #9d4edd,#c77dff)"
                _hover={{ bgGradient: 'linear(to-l, #c77dff,#9d4edd)', opacity: 0.9 }} 
               >View details</Link>
              </Stack>
            </Grid>
            {articles.length - 1 !== index && <Divider m={0} />}
          </Fragment>
        ))}
      </VStack>
    </Container>
  );
};

export default CareersList;
