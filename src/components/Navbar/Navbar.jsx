import React from 'react'
import { Flex, Spacer, Text, Button, HStack, Box, List, ListItem, Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { COLOR } from '../../constant'
import NavbarViewModel from './NavbarViewModel'

const Navbar = ({ children }) => {

  const { isSuccess, email, signOut } = NavbarViewModel()
  console.log(email)

  return (
    <div>
      <Flex
        padding={[5, 5]}
      >
        <Text 
          fontSize={30}
          fontWeight={'semibold'}
          color={COLOR}
        >
          Book Store Ecommerce
        </Text>
        <Spacer />
        <Box>
          <List
            display={"flex"}
            gap={"20px"}
          >
            <ListItem 
              color={COLOR}
            >
              <Link to={"/home"}>Home</Link>
            </ListItem>
            <ListItem 
              color={COLOR}
            >
              <Link to={"/about"}>About</Link>
            </ListItem>
          </List>
        </Box>
        <Spacer />
        <HStack>
          {/* <Input color="" placeholder='Search...' type={"text"} rounded={"20"}/> */}
            {isSuccess ? 
            <>
              <Text 
                fontWeight={"semibold"}
                cursor="pointer"
                _hover={{
                  color: "blue.400",
                }}
              >
              {email}
              </Text>
              <Button 
                colorScheme={"red"}
                onClick={signOut}
              >
                Log out
              </Button>
            </> : 
            <>
              <Button 
                bg={COLOR} 
                color={"white"}>
                  <Link 
                    to="/login">
                      Sign in
                  </Link>
              </Button>
              <Button>
                <Link 
                  to="/register"
                >
                  Sign up
                </Link>
              </Button>
            </>}          
        </HStack>
      </Flex>
      {children}
    </div>
  )
}

export default Navbar