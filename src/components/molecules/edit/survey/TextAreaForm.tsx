import React, { FC } from 'react';
import styled from 'styled-components';
import { TextField } from '@mui/material';
import { SurveyItem } from 'types/api';

type Props = {
  itemList: SurveyItem[];
  itemIndex: number;
  editParts: (partsIndex: number, value: string) => void;
};

export const TextAreaForm: FC<Props> = () => {
  return (
    <>
      <StyledDiv>
        <TextField
          disabled
          placeholder='記述式テキスト（長文回答）'
          multiline
          rows={2}
          fullWidth
          inputProps={{
            maxLength: 300,
          }}
        />
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  padding: 0 16px;
`;
