import React, { FC } from 'react';
import { List } from '@mui/material';
import { Card } from 'components/atoms/Card';
import { ListItem } from 'components/atoms/ListItem';
import { News } from 'types/api';
import styled from 'styled-components';

type Props = {
  newsList: News[];
};

export const NewsList: FC<Props> = ({ newsList }) => {
  return (
    <>
      <Card title='カブランク' pagePath='/news'>
        <StyledWrapper>
          <List>
            {newsList.map((e) => (
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
