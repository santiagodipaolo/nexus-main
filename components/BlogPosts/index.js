import React from 'react';
import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue
} from '@chakra-ui/react';
import Link from 'next/link';

const milestones = [
  {
    id: 1,
    date: 'February 22, 2023',
    title: 'The Pandemics Impact on Remote Work: How the Workforce Has Changed',
    link: 'the-pandemics-impact-on-remote-work-how-the-workforce-has-changed',
    description: `The COVID-19 pandemic has changed the way we work, with many companies transitioning to remote work to ensure the safety of their employees...`
  },
  {
    id: 2,
    date: 'February 15, 2023',
    title: 'How to Write Effective Job Descriptions: A Guide for Recruiters',
    link: 'how-to-write-effective-job-descriptions-a-guide-for-recruiters',
    description: `When it comes to recruiting new talent for your company, writing a compelling job description is a crucial step. A well-written job description...`
  },
  {
    id: 3,
    date: 'February 7, 2023',
    title: 'Why Hiring Talent from Latin America Can Benefit Your Business',
    link: 'why-hiring-talent-from-latin-america-can-benefit-your-business',
    description:
      'In todays globalized economy, companies around the world are constantly looking for new ways to grow and expand their operations...'
  }
];

const Posts = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container maxWidth="7xl" p={{ base: 2, sm: 10, md: 20 }} mt={20} mb={20}>
      <Box textAlign="center" mb={10}>
            <chakra.span fontSize="5xl" fontWeight="bold" color="blackAlpha.800" bg="linear-gradient(transparent 70%, #c77dff 10%)">
              Posts
            </chakra.span>

          </Box>
      {milestones.map((milestone) => (
        <Flex key={milestone.id} mb="10px">
          {/* Desktop view(left card) */}
          {isDesktop && milestone.id % 2 === 0 && (
            <>
              <EmptyCard />
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Mobile view */}
          {isMobile && (
            <>
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Desktop view(right card) */}
          {isDesktop && milestone.id % 2 !== 0 && (
            <>
              <Card {...milestone} />

              <LineWithDot />
              <EmptyCard />
            </>
          )}
        </Flex>
      ))}
    </Container>
  );
};

const Card = ({ id, title, description, date, link }) => {
  // For even id show card on left side
  // For odd id show card on right side
  const isEvenId = id % 2 == 0;
  let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';
  let leftValue = isEvenId ? '-15px' : 'unset';
  let rightValue = isEvenId ? 'unset' : '-15px';

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = '-15px';
    rightValue = 'unset';
    borderWidthValue = '15px 15px 15px 0';
  }

  return (
    <HStack
      as={Link}
      href={`/blog/${link}`}
      flex={1}
      p={{ base: 3, sm: 6 }}
      bgGradient="linear(to-l, #c77dff,blackAlpha.900)"
      bg='blackAlpha.900'
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: '0',
        h: '0',
        borderColor: `transparent ${useColorModeValue('#edf2f6', '#1a202c')} transparent`,
        borderStyle: 'solid',
        borderWidth: borderWidthValue,
        position: 'absolute',
        left: leftValue,
        right: rightValue,
        display: 'block'
      }}
    >
      <Box>
        <Text fontSize="lg" color='#c77dff'>
          {date}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%" color='white'>
            {title}
          </chakra.h1>
          <Text fontSize="md" color='white'>{description}</Text>
        </VStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: '40px', md: '40px' }}
      ml={{ base: '0', md: '40px' }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg='#c77dff'
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent"></Box>;
};

export default Posts;
