import React, { useState } from 'react';
import {
  Box,
  Flex,
  IconButton,
  LinkBox,
  LinkOverlay,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { Location } from '../models/Location';

interface ListRowProps {
  selectedItem?: string;
  location: Location;
  onSelectedRow?: (contactId: string) => void;
  onDelete?: (contactId: string) => void;
}

export const ListRow = ({
  location,
  selectedItem,
  onSelectedRow,
  onDelete,
}: ListRowProps) => {
  const [isShowDelete, setIsShowDelete] = useState<boolean>(false);

  return (
    <Box
      id={location.id}
      width="100%"
      _hover={{ bg: 'gray.200', cursor: 'pointer' }}
      bgColor={selectedItem === location.id ? 'gray.400' : ''}
      onMouseEnter={() => {
        setIsShowDelete(true);
      }}
      onMouseLeave={() => {
        setIsShowDelete(false);
      }}
    >
      <LinkBox>
        <Flex>
          <Text align="left" p="1" fontSize="sm" width="max-content">
            {location.name}
            <LinkOverlay
              onClick={() => {
                onSelectedRow && onSelectedRow(location.id);
              }}
            ></LinkOverlay>
          </Text>
        </Flex>
      </LinkBox>
    </Box>
  );
};
