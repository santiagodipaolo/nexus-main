import { Fragment, useState } from 'react';
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Flex,
  Text,
  Icon,
  Divider
} from '@chakra-ui/react';


const ContactForm = () => {

    const [email, setEmail] = useState()

  return (
    <Container maxW="7xl" px={{ base: 5, md: 8 }}>
      <Stack spacing={10}>
        <Flex align="center" justify="center" direction="column">
          <Heading fontSize="4xl" mb={2}>
            Contact Us
          </Heading>
          <Text fontSize="md" textAlign="center">
            Let us know, how can we help you?
          </Text>
        </Flex>
        
        <VStack
          as="form"
          w="100%"
          spacing={8}
          bg={useColorModeValue('white', 'gray.700')}
          rounded="lg"
          boxShadow="lg"
          p={{ base: 5, sm: 10 }}
          action="https://formsubmit.co/dipaolo.santiago@gmail.com" 
          method="POST"
        >
          <VStack spacing={4} w="100%">
            <input type="hidden" name="_captcha" value="false"/>
            <input type="hidden" name="_next" value="/thanks"/>
            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="_replyto" value={email}></input>
            <Stack w="100%" spacing={3} direction={{ base: 'column', md: 'row' }}>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder="Your name" rounded="md" name="Name" required />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Your email" rounded="md" name="Email" onChange={(e) => setEmail(e.target.value)} required/>
              </FormControl>
            </Stack>
            <FormControl id="company">
              <FormLabel>Company</FormLabel>
              <Input type="text" placeholder="Company name" rounded="md" name="Company" required />
            </FormControl>
            {/* <FormControl id="subject">
              <FormLabel>Subject</FormLabel>
              <Input type="text" placeholder="Enter the subject" rounded="md" name="_subject" />
            </FormControl> */}
            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Your message" rounded="md" name='Message' required />
            </FormControl>
          </VStack>
          <VStack w="100%">
            <Button
              bg="#9d4edd"
              color="white"
              _hover={{
                bg: '#c77dff'
              }}
              rounded="md"
              w={{ base: '100%', md: 'max-content' }}
              type='submit'
            >
              Send 
            </Button>
          </VStack>
        </VStack>
      </Stack>
    </Container>
  );
};

export default ContactForm;
