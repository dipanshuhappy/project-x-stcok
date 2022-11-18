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
  const [financialData, setFinancialData] = useState<any[]>(
    Papa.parse(stocks[id].financials ?? "").data
  );
  const [shareHolding, setshareHolding] = useState<any[]>(
    Papa.parse(stocks[id].shareHolding ?? "").data
  );
  // useEffect(() => {
  //   const data = Papa.parse(stocks[id].financials ?? "").data;
  //   if (data) {
  //     setFinancialData(data);
  //   }
  //   const data2 = Papa.parse(stocks[id].shareHolding ?? "").data;
  //   if (data) {
  //     setshareHolding(data2);
  //   }
  //   console.log({ data });
  //   console.log({ data2 });
  // }, []);
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
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Financial Year</TableCaption>
          <Thead>
            <Tr>
              {financialData[0].map((title: string) => (
                <Th key={title}>{title}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {financialData.slice(1).map((arr: any[], index) => {
              return (
                <Tr key={index}>
                  {arr.map((value) => {
                    return <Td key={value}>{value}</Td>;
                  })}
                </Tr>
              );
            })}
          </Tbody>
          <Tfoot>
            <Tr>
              {financialData[0]?.map((title: string) => (
                <Th>{title}</Th>
              ))}
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <TableContainer>
        <Table variant="simple" colorScheme="blackAlpha">
          <TableCaption>Share Holding</TableCaption>
          <Thead>
            <Tr>
              {shareHolding[0].map((title: string) => (
                <Th>{title}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {shareHolding.slice(1).map((arr: any[]) => {
              return (
                <Tr>
                  {arr.map((value) => {
                    return <Td>{value}</Td>;
                  })}
                </Tr>
              );
            })}
          </Tbody>
          <Tfoot>
            <Tr>
              {shareHolding[0].map((title: string) => (
                <Th>{title}</Th>
              ))}
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Stock;
