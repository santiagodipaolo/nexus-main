
import {
    Box,
    Flex,
    Text,
    chakra,
    Link
} from '@chakra-ui/react'
import Head from "next/head";

const TermsAndPolicies = () => {
  return (
    <>
        <Head>
          <title>TERMS AND CONDITIONS</title>
          <link rel="icon" href="/favicon-32x32.png" sizes="16x16 32x32" type="image/png"/>
        </Head> 
        <Flex justifyContent="center" flexDir="column" margin="100px"> 

          <Flex justifyContent="center">
            <Text fontSize={32} color="gray.600" fontWeight="bold">TERMS AND CONDITIONS </Text>
          </Flex>
          
          <Flex mt={10} flexDir="column">
            
            <Text>
              <br />
              <br />
              These terms and conditions ("Agreement") govern the use of the services ("Services") provided by Nexus ("Company") to its clients ("Client" or "Clients") in connection with the provision of talent recruitment and payroll services.
<br />
<br />
<b> ACCEPTANCE OF TERMS </b>
<br />
By accessing or using the Services, Client agrees to be bound by this Agreement. If Client does not agree to these terms, Client may not access or use the Services.
<br />
              <br />
<b>USE OF SERVICES</b>
<br />
The Services provided by Company are for the sole purpose of talent recruitment and payroll services for its Clients. Clients may not use the Services for any other purpose without the express written consent of Company.


<br />
              <br />
<b>RECRUITMENT SERVICES</b>
<br />
Nexus provides talent recruitment services to its Clients. Nexus will search for, interview, and contract the talent necessary to fulfill the position required by the Client.
<br />
              <br />
<b>PAYROLL SERVICES</b>
<br />
Nexus provides payroll services to its Clients. Nexus will ensure that all payroll requirements are met and that all international hiring regulations are adhered to.
<br />
              <br />
<b>INTELLECTUAL PROPERTY</b>
<br />
The Services and all content and materials included therein, including without limitation, text, graphics, logos, images, and software, are the property of Company or its licensors and are protected by copyright and other intellectual property laws.
<br />
              <br />
<b>DISCLAIMER OF WARRANTIES</b>
<br />
COMPANY MAKES NO WARRANTIES, EXPRESS OR IMPLIED, WITH RESPECT TO THE SERVICES, INCLUDING WITHOUT LIMITATION, WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. 
<br />
              <br />
<b>LIMITATION OF LIABILITY</b>
<br />
IN NO EVENT SHALL COMPANY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT OR THE USE OF THE SERVICES. 

<br />
              <br />
<b>INDEMNIFICATION</b>
<br />
Client agrees to indemnify and hold harmless Company, its affiliates, and their respective officers, directors, employees, and agents from any and all claims, liabilities, damages, and expenses, including without limitation, reasonable attorneys' fees and costs, arising out of or in connection with Client's use of the Services.
<br />
              <br />
 <b>TERMINATION</b>
 <br />
 Company may terminate this Agreement at any time and for any reason, with or without notice. Upon termination, Client's access to the Services will be immediately revoked.
<br />
              <br />

<b>ENTIRE AGREEMENT</b>
<br />
This Agreement constitutes the entire agreement between Company and Client with respect to the subject matter hereof and supersedes all prior or contemporaneous communications and proposals, whether oral or written, between the parties.
            </Text>
            <Text mt={10}> ©️ 2023 Nexus </Text>
          </Flex>
        
        </Flex>
    </>
  )
}


export default TermsAndPolicies