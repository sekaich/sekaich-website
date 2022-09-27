import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Stack } from '@mui/material';
import { surveyListState } from 'services/survey/SurveyState';
import { SurveyMission } from 'components/molecules/mission/survey/SurveyMission';
import { Layout } from 'components/templates';

export default function SurveyPage(): JSX.Element {
  const surveyList = useRecoilValue(surveyListState);

  return (
    <>
      <Layout>
        <StyledWrapper>
          <Stack spacing={3}>
            <SurveyMission surveyList={surveyList} />
          </Stack>
        </StyledWrapper>
      </Layout>
    </>
  );
}

const StyledWrapper = styled.div`
  padding: 24px 0 24px 24px;
  width: 100%;
`;
