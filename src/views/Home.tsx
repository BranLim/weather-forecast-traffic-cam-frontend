import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ListBox } from '../components/ListBox';
import { getLocation } from '../apis/LocationApi';

interface Filter {
  date?: string;
  time?: string;
}

export const Home = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [filter, setFilter] = useState<Filter>({});

  useEffect(() => {
    (async () => {
      if (!filter.date || !filter.time) {
        return;
      }

      const locations = await getLocation(
        ''.concat(filter.date, 'T', filter.time),
      );
      if (locations) {
        setLocations(locations);
      }
    })();
  }, [locations, filter]);

  return (
    <Box maxW="sm" p="6">
      <VStack align="left" maxW="xs" pl="4px">
        <HStack>
          <FormControl>
            <FormLabel>Date</FormLabel>
            <Input
              type="date"
              placeholder="Select Date"
              onChange={(event) => {
                console.log(event.target.value);
                setFilter({ ...filter, date: event.target.value });
              }}
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Time</FormLabel>
            <Input
              type="time"
              placeholder="Select Time"
              onChange={(event) => {
                console.log(event.target.value);
                setFilter({ ...filter, time: event.target.value });
              }}
            ></Input>
          </FormControl>
        </HStack>
        <Box>
          <Text>Locations:</Text>
          <Flex width="100%">
            <ListBox locations={[]} isLoading={false} />
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
};
