import { NextSeo } from "next-seo"
import { useRouter } from "next/router"
import Head from "next/head"

import {
  Box,
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
  useColorModeValue,
  Container,
  Icon,
  chakra,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  VStack,
} from "@chakra-ui/react"

const jobDescription = [
    
         
  {
    "id": "1",
    "job": "Front-end Developer | Binance",
    "title": "Front-end Developer",
    "client": "https://binance.com/en",
    "modality": "Full-time",
    "payment_usd": 1500,
    "requirements": {
      1: 'English C2',
      2: 'React',
      3: 'Tailwind CSS',
      4: 'API integration'
    },
    "responsabilities": {
      1: 'Work with several teams across different initiatives',
      2: 'Deliver results on a daily basis',
      3: 'Document the code',
      4: 'Implement good code practices'
    },
    "summary": "We are looking for a front-end developer who is fluent in english, writing and speaking...",
    "company_opening": 'We are US-based company that focus on the development of crypto-related apps.'
  },


]



const JDTest = () => {


  return (
    <>
      <Head>
        <link rel="icon" href="/favicon-32x32.png" type="image/png"/>
      </Head> 
      

      {jobDescription.map((job, index) => {
        return (
            <>
              <NextSeo
                    title={job.job}
                    description={job.summary}
              />

              
              <Container maxW="6xl" p="6" mt={10} mb={10}>
                <Box>
                  <Box as="header" textAlign="left">
                    
                    {/* Here goes the JD title */}
                    <Heading as="h1" py="4" size="2xl" >
                        {job.title}
                    </Heading>
                    {/* Here goes the JD title */}

                    
                    {/* Here is the reading time and date*/}
                    <Flex direction="column">
                      <Text fontSize="22px" color="#9d4edd" py="5" fontWeight={600}>
                        Nexus
                        
                        
                      </Text>
                      <Text fontSize="18px" fontWeight={600} py="1">Client: {job.client}</Text>
                    </Flex>
                    {/* Here is the reading time and date*/}

                  </Box>

                  <Flex mt={10}>
                    <Box as="article">
                      <Box fontSize={20}>

                          <Text fontWeight={500} mt={5} mb={2}> {job.company_opening} </Text>
                          

                            <Text fontWeight='bold' mt={10} mb={2}> Summary </Text>
                              {job.summary}


                            <Text fontWeight='bold' mt={10}  mb={2}> Responsabilities </Text>
                              <chakra.ul pl={10}>
                                <chakra.li>{job.responsabilities[1]}</chakra.li>
                                <chakra.li>{job.responsabilities[2]}</chakra.li>
                                <chakra.li>{job.responsabilities[3]}</chakra.li>
                                <chakra.li>{job.responsabilities[4]}</chakra.li>
                              </chakra.ul>


                            <Text fontWeight='bold' mt={10}  mb={2}> Requirements </Text>
                              <chakra.ul pl={10}>
                                  <chakra.li>{job.requirements[1]}</chakra.li>
                                  <chakra.li>{job.requirements[2]}</chakra.li>
                                  <chakra.li>{job.requirements[3]}</chakra.li>
                                  <chakra.li>{job.requirements[4]}</chakra.li>
                              </chakra.ul>

                      </Box>
                    </Box>
                  </Flex>
                </Box>

                          
                              <Heading as="h3" size="lg" mb={10} fontWeight="bold" textAlign="left" mt={20}>
                                Apply for this job
                              </Heading>
                              <Box 
                                as="form" 
                                mb={{ base: '2.5rem', lg: '4rem' }} 
                                action="https://formsubmit.co/dipaolo.santiago@gmail.com" 
                                method="POST"
                              >
                                <input type="hidden" name="_captcha" value="false"/>
                                <input type="hidden" name="_next" value="/thanks"/>
                                <input type="hidden" name="_template" value="box" />
                                <input type='hidden' name='Job Offer' value={job.job}/>
                                <Flex justify="start" alignItems="start" flexDirection='column'>
                                  <FormControl
                                    
                                    width={{ base: '100%', lg: 2 / 3 }}
                                    pr={{ lg: '2' }}
                                    mb={{ base: '4', lg: '0' }}
                                  >
                                    <FormLabel fontSize="14px" fontWeight="bold" >
                                      First Name
                                    </FormLabel>
                                    <Input required type="text" name="First Name"/>
                                  </FormControl>
                                  <FormControl
                                    
                                    width={{ base: '100%', lg: 2 / 3 }}
                                    pr={{ lg: '2' }}
                                    mb={{ base: '4', lg: '0' }}
                                  >
                                    <FormLabel fontSize="14px" fontWeight="bold" mt={5}>
                                      Last Name
                                    </FormLabel>
                                    <Input required type="text" name="Last Name"/>
                                  </FormControl>
                                  
                                  <FormControl
                                    
                                    width={{ base: '100%', lg: 2 / 3 }}
                                    pr={{ lg: '2' }}
                                    mb={{ base: '4', lg: '0' }}
                                  >
                                    <FormLabel fontSize="14px" fontWeight="bold" mt={5}>
                                      Email
                                    </FormLabel>
                                    <Input required type='email' name="Email"/>
                                  </FormControl>

                                  <FormControl
                                    
                                    width={{ base: '100%', lg: 2 / 3 }}
                                    pr={{ lg: '2' }}
                                    mb={{ base: '4', lg: '0' }}
                                  >
                                    <FormLabel fontSize="14px" fontWeight="bold" mt={5}>
                                      Phone Number
                                    </FormLabel>
                                    <Input required type='number' name="Phone Number" />
                                  </FormControl>

                                  <FormControl
                                    
                                    width={{ base: '100%', lg: 2 / 3 }}
                                    pr={{ lg: '2' }}
                                    mb={{ base: '4', lg: '0' }}
                                  >
                                    <FormLabel fontSize="14px" fontWeight="bold" mt={5}>
                                      English Level
                                    </FormLabel>
                                    <Input required name="English Level"/>
                                  </FormControl>

                                  <FormControl
                                    
                                    width={{ base: '100%', lg: 2 / 3 }}
                                    pr={{ lg: '2' }}
                                    mb={{ base: '4', lg: '0' }}
                                  >
                                    <FormLabel fontSize="14px" fontWeight="bold" mt={5}>
                                      Salary Expectation (USD)
                                    </FormLabel>
                                    <Input required type='number' name="Salary Expectation"/>
                                  </FormControl>

                                  <FormControl
                                    
                                    width={{ base: '100%', lg: 2 / 3 }}
                                    pr={{ lg: '2' }}
                                    mb={{ base: '4', lg: '0' }}
                                  >
                                    <FormLabel fontSize="14px" fontWeight="bold" mt={5}>
                                      When can you start?
                                    </FormLabel>
                                    <Input required type="text" name="When can you start?"/>
                                  </FormControl>

                                  
                                    <Button
                                      bg="#9d4edd"
                                      color="white"
                                      _hover={{
                                        bg: '#c77dff'
                                      }}
                                      rounded="md"
                                      w={{ base: '100%', md: 2 / 3 }}
                                      type='submit'
                                      mt={8}
                                    >
                                      Submit Application
                                    </Button>
                                  
                                </Flex>
                              </Box>
                            
                           
              </Container> 
            </>
          )
        })}
      
    </>
  )
}

export default JDTest;