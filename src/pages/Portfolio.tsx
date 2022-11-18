import {
  Badge,
  Box,
  Button,
  Flex,
  HStack,
  Text,
  useRadio,
} from "@chakra-ui/react";
import React from "react";
import { useLocation } from "wouter";
import { stocks } from "../data";

function Portfolio() {
  const [location, setLocation] = useLocation();
  return (
    <Box flexDirection="column" position={"absolute"} marginLeft="16" left="0">
      <Box>
        <Text marginBottom={"16"} textAlign={"left"} fontSize="5xl">
          Project X
        </Text>

        <Text textAlign={"left"} fontSize={"4xl"}>
          Your Portfolio
        </Text>
        <Box>
          {stocks.map((stock, index) => {
            return (
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"80vw"}
                margin={"16"}
              >
                <Button
                  onClick={() => {
                    setLocation("/stock/" + index);
                  }}
                  padding={"3rem"}
                  fontSize={"5xl"}
                >
                  {stock.name}
                </Button>
                <Badge fontSize={"3xl"} variant="outline" colorScheme="green">
                  {stock.score} %
                </Badge>
              </Flex>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Portfolio;
