import React, { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';
import {
  FormControl,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Divider } from 'components/atoms/Divider';
import { SurveyItem } from 'types/api';

type Props = {
  itemList: SurveyItem[];
  itemIndex: number;
  editParts: (partsIndex: number, value: string) => void;
};

export const RateForm: FC<Props> = ({ itemList, itemIndex, editParts }) => {
  return (
    <>
      <StyledStack spacing={2}>
        <Stack direction='row' alignItems='center' spacing={1}>
          <FormControl sx={{ width: '160px' }}>
            <Select
              value={itemList[itemIndex].parts[0].data}
              onChange={(e) => {
                editParts(0, e.target.value);
              }}>
              <MenuItem value={'0'}>
                <Typography>0</Typography>
              </MenuItem>
              <MenuItem value={'1'}>
                <Typography>1</Typography>
              </MenuItem>
            </Select>
          </FormControl>
          <Typography>〜</Typography>
          <FormControl sx={{ width: '160px' }}>
            <Select
              value={itemList[itemIndex].parts[1].data}
              onChange={(e) => {
                editParts(1, e.target.value);
              }}>
              <MenuItem value={'2'}>
                <Typography>2</Typography>
              </MenuItem>
              <MenuItem value={'3'}>
                <Typography>3</Typography>
              </MenuItem>
              <MenuItem value={'4'}>
                <Typography>4</Typography>
              </MenuItem>
              <MenuItem value={'5'}>
                <Typography>5</Typography>
              </MenuItem>
              <MenuItem value={'6'}>
                <Typography>6</Typography>
              </MenuItem>
              <MenuItem value={'7'}>
                <Typography>7</Typography>
              </MenuItem>
              <MenuItem value={'8'}>
                <Typography>8</Typography>
              </MenuItem>
              <MenuItem value={'9'}>
                <Typography>9</Typography>
              </MenuItem>
              <MenuItem value={'10'}>
                <Typography>10</Typography>
              </MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Divider />
        <TextField
          value={itemList[itemIndex].parts[2].data}
          onChange={(e) => {
            editParts(2, e.target.value);
          }}
          placeholder={`${itemList[itemIndex].parts[0].data} ラベル入力(省略可)`}
          fullWidth
        />
        <TextField
          value={itemList[itemIndex].parts[3].data}
          onChange={(e) => {
            editParts(3, e.target.value);
          }}
          placeholder={`${itemList[itemIndex].parts[1].data} ラベル入力(省略可)`}
          fullWidth
        />
      </StyledStack>
    </>
  );
};

const StyledStack = styled(Stack)`
  padding: 0 16px;
  .icon {
    padding: 0 9px 0 9px;
  }
`;
