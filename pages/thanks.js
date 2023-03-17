import Link from "next/link";
import { Box, Container, Flex, Stack, Text } from "@chakra-ui/react"

const Thanks = () => {
    return (
        <Container maxW="5xl" p={{ base: 5, md: 20 }} mt={20} mb={10} h={{base: 200, md: 380, lg: 340, xl: 340}}>

            <Flex justifyContent='center' alignItems='center' fontSize={20}>

                <Stack>
                    <Text> Thanks for your email. We'll get back to you soon! </Text>

                    <Link href='/'>
                        
                        <Text textAlign='center' mt={5} color='#9d4edd' textDecoration='underline'>
                            Go back to home
                        </Text>
                    </Link>
               </Stack>
            
            </Flex>
        </Container>
     
    )
}

export default Thanks;