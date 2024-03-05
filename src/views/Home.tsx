import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Input,
  VStack,
} from '@chakra-ui/react';

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
      </VStack>
    </Box>
  );
};
