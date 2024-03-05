import React from 'react';
import { Box, Spinner, VStack } from '@chakra-ui/react';
import { ListRow } from './ListRow';
import { Location } from '../models/Location';

interface ListBoxProps {
  locations: Location[];
  isLoading: boolean;
  selectedItem?: string;
  onSelectedRow?: (id: string) => void;
  handleDeleteClick?: (contactId: string) => void;
}

export const ListBox = ({
  locations,
  isLoading,
  selectedItem,
  onSelectedRow,
  handleDeleteClick,
}: ListBoxProps) => {
  return (
    <>
      <Box
        maxH="420px"
        h="420px"
        border="1px"
        borderRadius="lg"
        borderColor="gray.200"
        overflow="scroll"
        scrollBehavior="smooth"
        minWidth="300px"
      >
        {isLoading && (
          <center>
            <Spinner size="lg" mt="10px" />
          </center>
        )}
        <VStack width="100%" spacing="0">
          {locations.map((location) => (
            <ListRow
              key={location.id}
              location={location}
              onSelectedRow={onSelectedRow}
              selectedItem={selectedItem}
              onDelete={handleDeleteClick}
            />
          ))}
        </VStack>
      </Box>
    </>
  );
};
