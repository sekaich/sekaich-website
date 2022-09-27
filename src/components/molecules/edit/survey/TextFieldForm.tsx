import React, { FC } from 'react';
import styled from 'styled-components';
import { FormControlLabel, TextField, FormControl } from '@mui/material';
import { SurveyItem } from 'types/api';

type Props = {
  itemList: SurveyItem[];
  itemIndex: number;
  editParts: (partsIndex: number, value: string) => void;
};

export const TextFieldForm: FC<Props> = ({ itemList, itemIndex, editParts }) => {
  return (
    <>
      <StyledDiv>
        <TextField
          disabled
          placeholder='記述式テキスト（短文回答）'
          fullWidth
          inputProps={{
            maxLength: 100,
          }}
        />
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  padding: 0 16px;
`;
