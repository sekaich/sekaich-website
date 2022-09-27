import React, { FC } from 'react';
import styled from 'styled-components';
import { Stack, Typography } from '@mui/material';
import { Category } from 'components/molecules/sideMenu/Category';
import {
  CategoryTabs,
  ManageCategory,
  MissionCategory,
  OtherCategory,
} from 'variables/category';
import { Icon } from 'components/atoms/Icon';
import { Button } from 'components/atoms/Button';
import { Tabs } from 'components/atoms/Tab';

export const SideMenu: FC = () => {
  const [tabValue, setTabValue] = React.useState(0);

  return (
    <>
      <StyledSideMenu>
        <Tabs
          tabItem={CategoryTabs}
          tabValue={tabValue}
          setTabValue={setTabValue}
          variant='fullWidth'
        />
        <Stack className='sidemenu-body'>
          <Stack className='ticket' direction='row' alignItems='center'>
            <Icon iconType='ticket' iconSize='md' />
            <Typography className='ticket-label'>送信可能数</Typography>
            <Typography className='ticket-count'>000</Typography>
          </Stack>
          <div className='ticket-buy'>
            <Button label='送信チケット購入' classes='green' fullWidth />
          </div>
          {tabValue === 0 &&
            MissionCategory.map((e) => (
              <Category
                key={e.id}
                id={e.id}
                categoryTitle={e.name}
                categoryPath={e.path || ''}
                iconType={e.iconType}
                categoryItem={e.children || []}
                mission={true}
              />
            ))}
          {tabValue === 1 &&
            ManageCategory.map((e) => (
              <Category
                key={e.id}
                id={e.id}
                categoryTitle={e.name}
                categoryPath={e.path || ''}
                iconType={e.iconType}
                categoryItem={e.children || []}
                mission={false}
              />
            ))}
          <div className='bottom-items'>
            {OtherCategory.map((e) => (
              <Category
                key={e.id}
                id={e.id}
                categoryTitle={e.name}
                categoryPath={e.path || ''}
                iconType={e.iconType}
                categoryItem={e.children || []}
                mission={false}
              />
            ))}
          </div>
        </Stack>
      </StyledSideMenu>
    </>
  );
};

const StyledSideMenu = styled.div`
  margin-top: 24px;
  width: 350px;
  .sidemenu-body {
    padding: 0 14px 36px 14px;
    height: calc(100% - 54px);
    background: #ffffff;
    .ticket {
      margin: 12px 0;
      padding: 10px 4px;
      border-top: solid 1px #e4e4e4;
      border-bottom: dotted #cecece;
      .ticket-label {
        padding-left: 10px;
        font-size: 15px;
        font-weight: bold;
      }
      .ticket-count {
        margin-left: auto;
        color: #009845;
        font-size: 24px;
        font-weight: bold;
      }
    }
    .ticket-buy {
      padding-bottom: 12px;
    }
    .bottom-items {
      margin-top: auto;
    }
  }
`;
