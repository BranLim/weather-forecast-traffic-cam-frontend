import React from 'react';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Input,
  VStack,
} from '@chakra-ui/react';
import { ListBox } from '../components/ListBox';

export const Home = () => {
  return (
    <Box maxW="sm" p="6">
      <VStack align="left" maxW="xs" pl="4px">
        <HStack>
          <FormControl>
            <FormLabel>Date</FormLabel>
            <Input type="date" placeholder="Select Date"></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Time</FormLabel>
            <Input type="time" placeholder="Select Time"></Input>
          </FormControl>
        </HStack>
        <Box>
          <text>Locations:</text>
          <Flex width="100%">
            <ListBox locations={[]} isLoading={false} />
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
};
