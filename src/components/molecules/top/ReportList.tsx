import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Grid, List } from '@mui/material';
import { reportState } from 'services/report/ReportState';
import { Card } from 'components/atoms/Card';
import { Tabs } from 'components/atoms/Tab';
import { ReportItem } from 'components/molecules/top/ReportItem';
import { ReportTabItem } from 'variables/top';
import { Divider } from '../../atoms/Divider';

export const ReportList: FC = () => {
  const report = useRecoilValue(reportState);
  const [tabValue, setTabValue] = React.useState(0);

  return (
    <>
      <Card title="ミッションレポート" pagePath="">
        <StyledWrapper>
          <List>
            <Grid container spacing={2} sx={{ padding: '18px 0' }}>
              <Grid item xs={6}>
                <ReportItem
                  title="クチコミ獲得累計"
                  titleLabel="Mission 1"
                  iconType="reviews"
                  currentCount={report.monthCount.delivery}
                />
              </Grid>
              <Grid item xs={6}>
                <ReportItem
                  title="クチコミ獲得累計"
                  titleLabel="Mission 2"
                  iconType="store"
                  currentCount={report.monthCount.delivery}
                />
              </Grid>
            </Grid>
            <Tabs
              tabItem={ReportTabItem}
              tabValue={tabValue}
              setTabValue={setTabValue}
              className="balloon"
            />
            {tabValue === 0 ? (
              <Grid container spacing={2} sx={{ padding: '18px 0' }}>
                <Grid item xs={6}>
                  <ReportItem
                    title="送信数"
                    iconType="mail"
                    currentCount={report.monthCount.delivery}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ReportItem
                    title="開封数"
                    iconType="mail-opened"
                    currentCount={report.monthCount.opened}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ReportItem
                    title="クチコミ獲得数"
                    iconType="review"
                    currentCount={report.monthCount.review}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ReportItem
                    title="アンケート回答数"
                    iconType="survey"
                    currentCount={report.monthCount.questionnaire}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ReportItem
                    title="クーポン配布数"
                    iconType="coupon"
                    currentCount={report.monthCount.deliveryCoupon}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ReportItem
                    title="クーポン使用済枚数"
                    iconType="coupon-used"
                    currentCount={report.monthCount.usedCoupon}
                  />
                </Grid>
              </Grid>
            ) : (
              <Grid container spacing={2} sx={{ padding: '18px 0' }}>
                <Grid item xs={6}>
                  <ReportItem
                    title="送信数"
                    iconType="mail"
                    currentCount={report.monthCount.delivery}
                    beforeCount={report.lastMonthCount.delivery}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ReportItem
                    title="開封数"
                    iconType="mail-opened"
                    currentCount={report.monthCount.opened}
                    beforeCount={report.lastMonthCount.opened}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ReportItem
                    title="クチコミ獲得数"
                    iconType="review"
                    currentCount={report.monthCount.review}
                    beforeCount={report.lastMonthCount.review}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ReportItem
                    title="アンケート回答数"
                    iconType="survey"
                    currentCount={report.monthCount.questionnaire}
                    beforeCount={report.lastMonthCount.questionnaire}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ReportItem
                    title="クーポン配布数"
                    iconType="coupon"
                    currentCount={report.monthCount.deliveryCoupon}
                    beforeCount={report.lastMonthCount.deliveryCoupon}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ReportItem
                    title="クーポン使用済枚数"
                    iconType="coupon-used"
                    currentCount={report.monthCount.usedCoupon}
                    beforeCount={report.lastMonthCount.usedCoupon}
                  />
                </Grid>
              </Grid>
            )}
            <Divider lineStyle="solid" />
          </List>
        </StyledWrapper>
      </Card>
    </>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  ul {
    padding: 0;
  }
`;
