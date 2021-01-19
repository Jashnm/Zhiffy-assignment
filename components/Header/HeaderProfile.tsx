import {
  Avatar,
  Box,
  Button,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Stack
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useEffect } from "react";
import { IoLocationSharp, IoHeart, IoChatbubble } from "react-icons/io5";
import { LOGIN, LOGOUT } from "../../constants";
import { useAuthDispatch, useAuthState } from "../../context/userContext";
import { getUser } from "../../utils/getUser";

const HeaderProfile = () => {
  const dispatch = useAuthDispatch();
  const { user, loggedIn, email } = useAuthState();
  const router = useRouter();

  useEffect(() => {
    if (loggedIn) {
      const getUser = async () => {
        try {
          const res = await axios.post("http://localhost:5000/session", {
            email
          });
          dispatch({ type: LOGIN, payload: { ...res.data } });
        } catch (err) {
          console.log(err);
        }
      };
      getUser();
    } else {
      router.push("/login");
    }
  }, []);

  return (
    <>
      {loggedIn && (
        <HStack spacing="30px">
          <Box h="40px">
            <Button
              aria-label="location"
              variant="ghost"
              _hover={{ bgColor: "gray.600" }}
              leftIcon={<IoLocationSharp />}
            >
              Jaipur
            </Button>
          </Box>

          <IconButton
            aria-label="likes"
            fontSize="24px"
            variant="ghost"
            _hover={{ color: "gray.700", bgColor: "white" }}
            icon={<IoHeart />}
          />
          <IconButton
            aria-label="chat"
            fontSize="24px"
            variant="ghost"
            _hover={{ color: "gray.700", bgColor: "white" }}
            icon={<IoChatbubble />}
          />

          <Box h="40px">
            <Menu>
              <Avatar
                borderRadius="100%"
                bgColor="transparent"
                as={MenuButton}
                name={user.name}
                src={`http://localhost:5000/${user.img}`}
              />

              <MenuList color="gray.800">
                <MenuItem>
                  <Link href="/profile">
                    <a>My Profile</a>
                  </Link>
                </MenuItem>
                <MenuItem
                  as={Button}
                  variant="ghost"
                  onClick={() => {
                    dispatch({ type: LOGOUT });
                    router.push("/login");
                  }}
                >
                  Log Out{" "}
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </HStack>
      )}
    </>
  );
};

export default HeaderProfile;
