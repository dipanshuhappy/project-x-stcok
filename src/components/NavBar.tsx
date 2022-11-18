import { Input } from "@chakra-ui/input";
import {
  Heading,
  Box,
  Text,
  Stack,
  VStack,
  useBreakpointValue,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  color,
} from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.png";

function NavBar() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box as="section" pb={{ base: "12", md: "24" }}>
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        <Container py={{ base: "4", lg: "5" }}>
          <HStack spacing="5">
            <img
              src={logo}
              height="50px"
              width="50px"
              style={{
                position: "relative",
                right: "90%",
              }}
            />
            {
              // isDesktop ? (
              <Flex justify="space-between" flex="1">
                <ButtonGroup
                  variant="link"
                  spacing="8"
                  style={{
                    position: "relative",
                    right: "89%",
                  }}
                >
                  <text color="Black">
                    <b>Projext X</b>
                  </text>
                </ButtonGroup>
              </Flex>
              // ) : (
              //   // <IconButton
              //   //   variant="ghost"
              //   //   icon={<FiMenu fontSize="1.25rem" />}
              //   //   aria-label="Open Menu"
              //   // />
              // )
            }
          </HStack>
        </Container>
      </Box>
    </Box>
  );
}

export default NavBar;
