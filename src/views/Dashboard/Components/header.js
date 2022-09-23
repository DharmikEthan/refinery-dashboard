import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import ethanai_logo from "../../../assets/ethanai_logo.png";

const Header = () => {
  return (
    <Flex
      justifyContent="space-between"
      width="100%"
      alignItems="center"
      alignSelf="center"
      alignContent="center"
    >
      <Text fontSize="28px" fontWeight="500">
        Refinery Dashboard
      </Text>
      <Flex>
        <img src={ethanai_logo} height="auto" width="80%" />
      </Flex>
    </Flex>
  );
};

export default Header;
