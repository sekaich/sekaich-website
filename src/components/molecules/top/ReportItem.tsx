import React, { FC } from 'react';
import styled from 'styled-components';
import { Grid, ListItem as MuiListItem, Stack, Typography } from '@mui/material';
import { Icon } from 'components/atoms/Icon';
import { IconType } from 'types/domain';

type Props = {
  title: string;
  titleLabel?: string;
  iconType: IconType;
  currentCount: number;
  beforeCount?: number;
};

export const ReportItem: FC<Props> = ({
  title,
  titleLabel,
  iconType,
  currentCount,
  beforeCount,
}) => {
  return (
    <>
      <StyledMuiListItem
        className={`${beforeCount && beforeCount > currentCount && 'down-color'}`}>
        <Grid container>
          <Grid item xs={beforeCount ? 9 : 12}>
            <Stack
              className='item-left'
              direction='row'
              alignItems='center'
              justifyContent='space-between'>
              <Stack direction='row' alignItems='center'>
                <Icon iconType={iconType} iconSize='md' />
                <Stack sx={{ paddingLeft: '14px' }}>
                  {titleLabel && (
                    <Typography className='report-title-label'>{titleLabel}</Typography>
                  )}
                  <Typography className='report-title'>{title}</Typography>
                </Stack>
              </Stack>
              <Typography className='report-count'>
                {currentCount}
                <span>件</span>
              </Typography>
            </Stack>
          </Grid>
          {beforeCount && (
            <Grid item xs={3}>
              <Stack
                className='item-right'
                alignItems='flex-start'
                justifyContent='center'>
                <Typography className='report-title'>先月</Typography>
                <Typography className='report-count'>
                  {beforeCount}
                  <span>件</span>
                </Typography>
              </Stack>
            </Grid>
          )}
        </Grid>
      </StyledMuiListItem>
    </>
  );
};

const StyledMuiListItem = styled(MuiListItem)`
  padding: 6px 20px;
  border-radius: 6px;
  background: linear-gradient(to right, #b4d002 25%, #009845);
  &.down-color {
    background: linear-gradient(to right, #cccccc 25%, #95a6a6);
  }
  .item-left {
    padding-right: 18px;
    height: 100%;
    .report-title {
      font-size: 18px;
      font-weight: bold;
      line-height: 1.2;
    }
    .report-title-label {
      color: #ffffff;
      font-size: 18px;
      font-weight: bold;
      letter-spacing: 1.4px;
    }
    .report-count {
      color: #ffffff;
      font-size: 54px;
      font-weight: bold;
      white-space: nowrap;
      span {
        position: relative;
        bottom: 3px;
        padding-left: 3px;
        font-size: 32px;
        font-weight: normal;
      }
    }
  }
  .item-right {
    padding-left: 18px;
    height: 100%;
    border-left: dotted rgba(255, 255, 255, 0.7);
    .report-title {
      font-weight: bold;
    }
    .report-count {
      display: flex;
      align-items: flex-end;
      color: #ffffff;
      font-size: 32px;
      font-weight: bold;
      line-height: 1;
      white-space: nowrap;
      span {
        padding-left: 2px;
        font-size: 20px;
        font-weight: normal;
        line-height: 1.3;
      }
    }
  }
`;
