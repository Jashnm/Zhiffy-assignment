import { Box, Button, Flex, Image, List, ListItem } from "@chakra-ui/react";
import Link from "next/link";
import { LOGOUT } from "../constants";
import { useAuthDispatch, useAuthState } from "../context/userContext";

const Navbar = () => {
  const { loggedIn } = useAuthState();
  const dispatch = useAuthDispatch();

  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        px={["1rem", "1.5rem"]}
        py={["0.2rem", "0.4rem"]}
        background="white"
        color="white"
        m="auto"
        w="100%"
        top="0"
        maxH="10rem"
        borderBottom="1px"
        borderBottomColor="gray.100"
      >
        <Link href="/">
          <a>
            <Image
              src="https://media-exp1.licdn.com/dms/image/C4D0BAQH2e5xUqEo6xA/company-logo_200_200/0/1596812959135?e=2159024400&v=beta&t=dexs4LgyduAYIHP4DwJphtQeo9l1Xc1Ib0GMg91Z_D8"
              alt=""
              id="logo"
              boxSize="calc(5.6rem + 2.4vw)"
            />
          </a>
        </Link>

        <List
          maxW="260px"
          w="100%"
          spacing={5}
          listStyleType="none"
          display="flex"
          color="main.500"
          justifyContent="space-evenly"
          alignItems="baseline"
          fontWeight="semibold"
        >
          {loggedIn ? (
            <>
              <ListItem>
                <Link href="/profile">
                  <a>Profile</a>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/products">
                  <a>Products</a>
                </Link>
              </ListItem>
              <ListItem>
                <Button
                  colorScheme="main"
                  onClick={() => {
                    dispatch({ type: LOGOUT });
                    window.location.reload();
                  }}
                >
                  Logout
                </Button>
              </ListItem>
            </>
          ) : (
            <ListItem>
              <Link href="/login">
                <a>
                  <Button>Login</Button>
                </a>
              </Link>
            </ListItem>
          )}
        </List>
      </Flex>
    </>
  );
};

export default Navbar;
