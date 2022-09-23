import { Flex, Text } from "@chakra-ui/react";
import data from "../../../assets/demo_table.json";
import { JsonToTable } from "react-json-to-table";
const TableSection = () => {
  return (
    <Flex flexDirection="column">
      <Flex flexDirection="row">
        <Text fontSize="18px" fontWeight="500">
          Extracted <span style={{ color: "blue" }}>Data</span>
        </Text>
      </Flex>
      <JsonToTable json={data} />
    </Flex>
  );
};

export default TableSection;
