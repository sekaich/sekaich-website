import React, { FC } from 'react';
import styled from 'styled-components';
import { IconButton, Stack, TextField } from '@mui/material';
import { Card } from 'components/atoms/Card';
import { Divider } from 'components/atoms/Divider';
import { Heading } from 'components/atoms/Heading';
import { Icon } from 'components/atoms/Icon';
import { Button } from 'components/atoms/Button';
import { SurveyListItem } from 'types/api';
import { RadioTable } from '../../common/RadioTable';

type Props = {
  surveyList: SurveyListItem[];
};

export const SurveyMission: FC<Props> = ({ surveyList }) => {
  return (
    <>
      <Card caption='Step1:' title='アンケートを選ぶ'>
        <StyledWrapper>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{ padding: '24px 0' }}>
            <Heading variant='h4'>新しく作成する</Heading>
            <Stack direction='row' alignItems='center' spacing={1}>
              <Button
                label='新規作成'
                routerPath='/edit/survey'
                startIcon={<Icon iconType='create' iconSize='md' circle='white' />}
              />
            </Stack>
          </Stack>
          <Divider />
          <Stack sx={{ padding: '24px 0', width: '50%' }} spacing={2}>
            <Heading variant='h4'>一覧から選ぶ</Heading>
            <Stack direction='row' spacing={1}>
              <TextField
                placeholder='検索: IDまたはアンケートタイトル'
                sx={{ width: '400px' }}
              />
              <IconButton color={'primary'}>
                <Icon iconType='search' iconSize='md' />
              </IconButton>
            </Stack>
          </Stack>
          <RadioTable surveyList={surveyList} />
          <Stack alignItems='center' sx={{ padding: '36px' }}>
            <Button
              annotation='Step2:'
              label='クーポンを選ぶへ進む'
              classes='large'
              routerPath='/create-survey'
            />
          </Stack>
        </StyledWrapper>
      </Card>
    </>
  );
};

const StyledWrapper = styled.div`
  .MuiList-root {
    padding-top: 12px;
  }
`;
