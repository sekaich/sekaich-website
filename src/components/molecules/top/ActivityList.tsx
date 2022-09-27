import React, { FC } from 'react';
import styled from "styled-components";
import { List } from '@mui/material';
import { Activity } from 'types/api';
import { Card } from 'components/atoms/Card';
import { ListItem } from 'components/atoms/ListItem';

type Props = {
  activityList: Activity[];
};

export const ActivityList: FC<Props> = ({ activityList }) => {
  return (
    <>
      <Card title='アクティビティログ' pagePath='/activity'>
        <StyledWrapper>
          <List>
            {activityList.map((e) => (
                <ListItem date={e.createdAt} text={e.title} key={e.id} />
            ))}
          </List>
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