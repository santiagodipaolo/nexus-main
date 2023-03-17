import { Fragment } from 'react';
import {
  Container,
  Flex,
  Stack,
  VStack,
  Icon,
  Divider,
  useColorModeValue,
  Avatar,
  Text, Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, AccordionIcon, chakra
} from '@chakra-ui/react';
// Here we have used react-icons package for the icon
import { GoPrimitiveDot } from 'react-icons/go';


const Faqs = () => {
  return (
    <Container maxW="5xl" p={{ base: 5, md: 10 }}>
        <Box textAlign="center" mb={10}>
            <chakra.span fontSize="5xl" fontWeight="bold" color="blackAlpha.800" bg="linear-gradient(transparent 70%, #c77dff 10%)">
              FAQs
            </chakra.span>

        </Box>
      <Accordion allowToggle>
        <AccordionItem>
            <h2>
            <AccordionButton _expanded={{ bg: '#c77dff'}}>
                <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                    What happens if I need a role that is not specified on your website? 
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            If you require a role that is not currently specified on our website, please do not hesitate to contact us. It is highly 
            likely that we are still able to assist you with your recruitment needs. Our team of experts are well-equipped to source and 
            place candidates across a wide range of industries and professions.

            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton _expanded={{ bg: '#c77dff'}}>
                <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                    How is my employee&apos;s salary payment handled?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            We understand the importance of ensuring timely and accurate salary payments to your employees, which is why we handle the 
            entire salary payment process on your behalf. You can trust us to take care of your payroll needs, so that you can focus on 
            your core business operations. We have an efficient and reliable payroll system in place to ensure that your employees are paid 
            on time and in compliance with all relevant regulations

            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton _expanded={{ bg: '#c77dff'}}>
                <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                    What procedures do I need to follow to hire an international employee?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                Hiring an international employee can be a complex process, involving various legal and bureaucratic requirements. However, 
                you don&apos;t need to worry about any of that - we handle all of the paperwork and bureaucracy on your behalf. There are no 
                extra costs or hidden fees involved; everything is included in the flat fee that we quote you.

            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton _expanded={{ bg: '#c77dff'}}>
                <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                Do I need to pay anything if a suitable candidate is not found?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                No, you do not need to pay anything if we are unable to find a suitable candidate for your vacancy. We offer a risk-free 
                solution to our clients, no candidate found, nothing paid.

            </AccordionPanel>
        </AccordionItem>
        </Accordion>
    </Container>
  );
};

export default Faqs;
