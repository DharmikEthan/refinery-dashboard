import React, { useState } from "react";
import {
  Flex,
  Text,
  Tabs,
  TabList,
  Tab,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import Select from "react-select";
import from_s3_logo from "../../../assets/from_s3_logo.png";
import upload_logo from "../../../assets/upload_logo.png";

const Upload_Section = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleUploadOption = (id) => {
    console.log("Change");
    setActiveTab(id);
  };
  const changeHandler = (event) => {
    console.log("File Picked");
    // setSelectedFile(event.target.files[0]);
    // setIsFilePicked(true);
  };
  const processDocument = () => {
    setIsProcessing(true);
  };

  return (
    <Flex
      justifyContent="space-around"
      width="100%"
      alignItems="center"
      alignSelf="center"
      alignContent="center"
      gap="2rem"
    >
      <Flex flexDirection="row">
        <Tabs
          p="0 24px"
          variant="soft-rounded"
          colorscheme="blue"
          textColor="blue.800"
          //   onChange={(idx) => handleUploadButton(idx)}
          size="sm"
          defaultIndex={0}
        >
          <TabList>
            <Tooltip label="Upload from S3">
              <Tab
                onClick={() => handleUploadOption(0)}
                tabIndex={1}
                color="#0FABE0"
                border="0.4px solid #C8E2FF"
                borderRadius="15px"
                mr="1rem"
              >
                <Text fontSize="16px" fontWeight="500">
                  From S3
                </Text>
                <img src={from_s3_logo} height="auto" width="80%" />
              </Tab>
            </Tooltip>
            <Tooltip label="Upload from local">
              <Tab
                onClick={() => handleUploadOption(1)}
                tabIndex={2}
                color="#0FABE0"
                border="0.4px solid #C8E2FF"
                borderRadius="15px"
              >
                <Text fontSize="16px" fontWeight="500">
                  Upload
                </Text>
                <img src={upload_logo} height="auto" width="80%" />
              </Tab>
            </Tooltip>
          </TabList>
        </Tabs>
      </Flex>
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        gap="2rem"
        alignItems="center"
        alignSelf="center"
        alignContent="center"
      >
        <div style={{ width: "200px" }}>
          <Select
            placeholder={"Custodian Name"}
            required
            name="custodianName"
            id="custodianName"
            style={{ border: "0.4px solid #D1D0D0" }}
          />
        </div>
        {activeTab == 0 && (
          <div style={{ width: "200px" }}>
            <Select
              placeholder={"Statement Name"}
              required
              name="statementName"
              id="statementName"
              style={{ border: "0.4px solid #D1D0D0" }}
            />
          </div>
        )}
        {activeTab == 1 && (
          <div style={{ width: "200px" }}>
            <input style={{}} type="file" id="file" onChange={changeHandler} />
          </div>
        )}
      </Flex>
      <Flex>
        <Button
          isLoading={isProcessing}
          loadingText="Processing"
          colorScheme="blue"
          variant="solid"
          onClick={processDocument}
        >
          Process
        </Button>
      </Flex>
    </Flex>
  );
};

export default Upload_Section;
