import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Stack } from '@mui/material';
import { newsListState, activityListState } from 'services/others/OtherState';
import { NewsList } from 'components/molecules/top/NewsList';
import { ReportList } from 'components/molecules/top/ReportList';
import { ActivityList } from 'components/molecules/top/ActivityList';

export default function Top(): JSX.Element {
  const newsList = useRecoilValue(newsListState);
  const activityList = useRecoilValue(activityListState);

  return (
    <>
      <StyledWrapper>
        <Stack spacing={3}>
          <NewsList newsList={newsList} />
          <ReportList />
          <ActivityList activityList={activityList} />
        </Stack>
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  padding: 24px 0 24px 24px;
  width: 100%;
`;
