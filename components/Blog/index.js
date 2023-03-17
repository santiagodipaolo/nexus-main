import Link from 'next/link'
import React from 'react';
import { Box, Badge, SimpleGrid, Container, Image, Text } from '@chakra-ui/react';


const dataList = [
  {
    id: 1,
    title: 'The Pandemics Impact on Remote Work: How the Workforce Has Changed',
    authorName: 'Nexuslat',
    image: '/pandemic.jpg',
    link: 'the-pandemics-impact-on-remote-work-how-the-workforce-has-changed',
    content: `The COVID-19 pandemic has changed the way we work, with many companies transitioning to remote work to ensure the 
    safety of their employees. However, the pandemic has also accelerated pre-existing trends in remote work, resulting in a 
    significant shift in the workforce. Here are some of the changes that the pandemic has brought about in the realm of remote work`
  },
  {
    id: 2,
    title: 'How to Write Effective Job Descriptions: A Guide for Recruiters',
    authorName: 'Nexuslat',
    image: 'writing.jpg',
    link: 'how-to-write-effective-job-descriptions-a-guide-for-recruiters',
    content: `When it comes to recruiting new talent for your company, writing a compelling job description is a crucial step. A well-written job description not only attracts the right candidates but also helps to ensure that everyone is on the same page about the role and responsibilities. Here are some tips for writing effective job descriptions that can help you find the best candidates for the job.`
  },
  {
    id: 3,
    title: 'Why Hiring Talent from Latin America Can Benefit Your Business',
    authorName: 'Nexuslat',
    image: '/hiring.jpg',
    link: 'why-hiring-talent-from-latin-america-can-benefit-your-business',
    content: `In today's globalized economy, companies around the world are constantly looking for new ways to grow and expand their operations. One of the ways to achieve this is by recruiting talented professionals from different regions, including Latin America. Here are some reasons why hiring talent from Latin America can benefit your business.`
  }
];

const Blog = () => {
  return (
    <Box bg='blackAlpha.900' mt={10}>
    <Container maxWidth="1200px" mx="auto" my="auto" p={{ base: 5, md: 10 }} >
      <SimpleGrid columns={[1, 2, 3]} spacing="15px" mb={20} mt={20}>
        {dataList.map((blog) => {
          return (
            <Box position="relative" key={blog.id}>
              <Box fontSize="sm" position="absolute" right="5px" margin="5px" zIndex="1">
               
              </Box>
              <Link href={`/blog/${blog.link}`}>
                <Box
                  borderWidth="1px"
                  shadow="md"
                  rounded="lg"
                  overflow="hidden"
                  position="relative"
                >
                  <Image src={blog.image} alt="Blog image" loading='lazy' />
                  <Box p={{ base: 4, lg: 6 }}>
                    <Box d="flex" alignItems="baseline">
                      <Box
                        fontWeight="semibold"
                        as="h2"
                        letterSpacing="wide"
                        textTransform="uppercase"
                        ml="2"
                        color='#e9ecef'
                      >
                        {blog.title}
                      </Box>
                    </Box>
                    <Box>
                      
                    </Box>
                    <Text
                      mt="1"
                      fontWeight="semibold"
                      noOfLines={3}
                      lineHeight="tight"
                      color="gray.400"
                      fontSize="sm"
                    >
                      {blog.content}
                    </Text>
                  </Box>
                </Box>
              </Link>
            </Box>
          );
        })}
      </SimpleGrid>
    </Container>
    </Box>
  );
};

export default Blog;
