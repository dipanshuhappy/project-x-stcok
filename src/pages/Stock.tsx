import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Iframe from "react-iframe";
import { stocks } from "../data";
import Papa from "papaparse";

function Stock({ id }: { id: number }) {
  const [financialData, setFinancialData] = useState([] as any[]);
  useEffect(() => {
    const data = Papa.parse(stocks[id].financials ?? "").data;
    if (data) {
      setFinancialData(data);
    }
  }, []);
  return (
    <Box>
      <Text margin={"16"} textAlign={"left"} fontSize={"4xl"}>
        {stocks[id].name} : <br />
        The Stock Score is {stocks[id].score}
      </Text>
      <Iframe
        scrolling="no"
        width="800"
        height="420"
        url={stocks[id].graph ?? ""}
      />
      {/* <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Financial Year</TableCaption>
          <Thead>
            <Tr>
              {financialData[0]?.map((title: string) => (
                <Th>{title}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            {financialData.slice(1).map((arr: any[]) => {
              return <Tr></Tr>;
            })}
          </Tbody>
          <Tfoot>
            <Tr>
              {financialData[0].map((title: string) => (
                <Th>{title}</Th>
              ))}
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer> */}
    </Box>
  );
}

export default Stock;
