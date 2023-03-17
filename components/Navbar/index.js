import React, {useState} from "react";
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import {
  chakra,
  Flex,
  HStack,
  Button,
  useColorModeValue,
  Box,
  useDisclosure,
  Text,
  Spacer,
  IconButton,
  SimpleGrid,
  Stack,
  VStack,
  CloseButton,
  Divider,
  useColorMode,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader
} from "@chakra-ui/react";

import { IoPricetagsOutline } from "react-icons/io";
import {FiChevronDown} from "react-icons/fi"
import {FcGoogle} from 'react-icons/fc'
import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from "react-icons/ai";
import { SiMaterialdesignicons, SiGoogleclassroom } from "react-icons/si"
import { CgNotes } from "react-icons/cg"
import {GrBlog} from "react-icons/gr"
import {RiCompassDiscoverLine, RiTeamLine} from "react-icons/ri"
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";
import {ImPriceTags} from 'react-icons/im'
import {FcAbout} from 'react-icons/fc'

import ContactForm from "../ContactForm";

export default function WfWf() {
  const bg = useColorModeValue("white", "gray.800");
  const cl = useColorModeValue("gray.800", "white");
  const mobileNav = useDisclosure();
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const ic = useColorModeValue("brand.600", "brand.50");
  const hbg = useColorModeValue("gray.50", "brand.400");
  const tcl = useColorModeValue("gray.900", "gray.50");
  const dcl = useColorModeValue("gray.500", "gray.50");
  const hbgh = useColorModeValue("gray.100", "brand.500");

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = useState('right')
  
  
  const router = useRouter();

  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg='whiteAlpha.900'
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />

      <Link href='/#us'>
        <Button w="full" variant="ghost" leftIcon={<FcAbout />} onClick={mobileNav.onClose}>
          About
        </Button>
      </Link>

      <Link href='/#talent'>
        <Button w="full" variant="ghost" leftIcon={<RiTeamLine />} onClick={mobileNav.onClose}>
          Talent
        </Button>
      </Link>

      <Link href='/#pricing'>
        <Button w="full" variant="ghost" leftIcon={<ImPriceTags />} onClick={mobileNav.onClose}>
          Pricing
        </Button>
      </Link>

      <Link href='/careers'>
        <Button w="full" variant="ghost" leftIcon={<CgNotes />} onClick={mobileNav.onClose}>
        Carrers
        </Button>
      </Link>

      <Link href='/blog'>
        <Button w="full" variant="ghost" leftIcon={<SiGoogleclassroom />} onClick={mobileNav.onClose}>
          Blog
        </Button>
      </Link>

      {/* <Link href='/blog'>
      <Button w="full" variant="ghost" leftIcon={<GrBlog />}>
        Blog
      </Button>
      </Link> */}
      
    </VStack>
  );

  return (
    <React.Fragment>
      <chakra.header>
        <Flex alignItems="center" justifyContent={{base: "space-between", md:"space-around"}} bg='blackAlpha.900' pr={10}>
          
          
          <Link href="/">
            {/* <Image src={Logo} alt="logo" width="100px" height="100px" style={{cursor: 'pointer'}} /> */}
            <Image src="/Nexus.png" width={200} height={0} />
          </Link>
          
          {/* <Spacer /> */}

          <Box display={{ base: "none", md: "inline-flex" }} pr={{base: 0, sm: 0, md: 5, lg: 10, xl: 10}} mt={0} >
            <Flex alignItems="center" justifyContent="center">
              <Link href='/#us'>
                <Button variant='link' color='#e9ecef' _hover={{color:'#c77dff'}} mr={8}>
                  About
                </Button>
              </Link>

              <Link href='/#talent'>
                <Button variant='link' color='#e9ecef' _hover={{color:'#c77dff'}} mr={8}>
                  Talent
                </Button>
              </Link>

              <Link href='/#pricing'>
                <Button variant='link' color='#e9ecef' _hover={{color:'#c77dff'}} mr={8}>
                  Pricing
                </Button>
              </Link>

              <Link href='/careers'>
                <Button variant='link' color='#e9ecef' _hover={{color:'#c77dff'}} mr={8}>
                  Careers
                </Button>
              </Link>

              <Link href='/blog'>
                <Button variant='link' color='#e9ecef' _hover={{color:'#c77dff'}} mr={8}>
                  Blog
                </Button>
              </Link>
            </Flex>
            
          </Box>

          <Box display="flex" alignItems="center" mb={0}>
          <HStack spacing={2}>
          <Box display={{ base: "none", md: "inline-flex" }} mr={{base: 0, sm: 0, md: 10, lg: 0, xl: 0}}>
            <HStack spacing={1}>
              
              <Button
                // bg={bg}
                // color="gray.700"
                // alignItems="center"
                // fontSize="md"
                // _hover={{ color: cl }}
                // _focus={{ boxShadow: "none" }}
                bgGradient="linear(to-l, #9d4edd,#c77dff)"
                _hover={{ bgGradient: 'linear(to-l, #c77dff,#9d4edd)', opacity: 0.9 }} 
                onClick={onOpen}
                
              >
                
                   Contact us
                
              </Button>

              <Drawer placement={placement} onClose={onClose} isOpen={isOpen} size='xl'>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerHeader borderBottomWidth='1px'>
                    <Flex direction='horizontal' justifyContent='space-between'>
                      <Text></Text>
                      <Button onClick={onClose} color='#9d4edd' variant='ghost'>X</Button>
                    </Flex>
                  </DrawerHeader>
                  <DrawerBody>
                    <ContactForm />
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
                
              
              {/* <Button
                bg={bg}
                color="gray.700"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{ color: cl }}
                _focus={{ boxShadow: "none" }}
                colorScheme='gray.400' variant='outline'
              >
                <Link display="flex" alignItems="center" href="/blog">
                    Blog
                </Link>
              </Button> */}
            </HStack>
          </Box>
            
              {/* <>
                <Menu>
                  <MenuButton as={Button} rightIcon={<FiChevronDown />}>
                    boton
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      
                        <Link href="/dashboard">
                          <p>Dashboard</p>
                        </Link> 
                      
                    </MenuItem>
                    
                    <MenuItem>
                      <p onClick={() => signOut()}>Cerrar sesión</p>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </> */}
             
            
              
            
            </HStack>
            {/* <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Switch to ${text} mode`}
              variant="ghost"
              color="current"
              ml={{ base: "0", md: "3" }}
              onClick={toggleMode}
              icon={<SwitchIcon />}
            /> */}
            <IconButton
              display={{ base: "flex", md: "none" }}
              aria-label="Abrir menu"
              fontSize="20px"
              color='white'
              variant="none"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
              pr={10}
            />
          </Box>
        </Flex>

        {MobileNavContent}
      </chakra.header>
    </React.Fragment>
  );
}