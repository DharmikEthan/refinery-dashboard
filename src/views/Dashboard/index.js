import React from "react";
// import ReactDOM from "react-dom";
import { Flex, SimpleGrid, Grid, Text } from "@chakra-ui/react";
import Header from "./Components/header";
import Upload_Section from "./Components/upload_section";
import TableSection from "./Components/table";

export default function Dashboard() {
  return (
    <Flex flexDirection="column" margin="10px" gap="1rem">
      <Flex>
        <Header />
      </Flex>
      <Flex alignSelf="center">
        <Upload_Section />
      </Flex>
      <Flex flexDirection="column">
        <TableSection />
      </Flex>
    </Flex>
  );
}
