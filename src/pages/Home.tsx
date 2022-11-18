import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import Iframe from "react-iframe";
import { Image } from "@chakra-ui/react";
import React from "react";
import niffy from "../assets/niffy.png";
import sensex from "../assets/sensex.png";
import { useLocation } from "wouter";

function Home() {
  const [location, setLocation] = useLocation();
  return (
    <Box flexDirection="column" position={"absolute"} marginLeft="16" left="0">
      <Box>
        <Text marginBottom={"16"} textAlign={"left"} fontSize="3xl">
          Project X
        </Text>

        <Text textAlign={"left"} fontSize={"2xl"}>
          Make Your Portfolio Today Get Started Get Stock Score
        </Text>
      </Box>
      <Text marginTop={"16"} fontSize={"4xl"}>
        NSE 50 Stocks
      </Text>
      <HStack>
        <Image width={"50%"} src={niffy} alt="Dan Abramov" />
        <Image width={"50%"} src={sensex} />
      </HStack>
      <Button
        margin={"16"}
        onClick={() => setLocation("/portfolio")}
        width="40%"
      >
        Create PortFolio
      </Button>
    </Box>
  );
}

export default Home;
