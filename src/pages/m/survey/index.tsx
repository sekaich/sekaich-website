// import { useRecoilValue } from 'recoil';
import styled from "styled-components";
import { Stack } from "@mui/material";
import { Layout } from "components/templates";
import { SurveyEdit } from "components/molecules/edit/survey/SurveyEdit";

export default function EditSurveyPage(): JSX.Element {
  return (
    <>
      <Layout>
        <StyledWrapper>
          <Stack spacing={3}>
            <SurveyEdit />
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
