import React, { FC } from 'react';
import styled from 'styled-components';
import { Stack } from '@mui/material';
import { Category } from 'components/molecules/sideMenu/Category';
import { CategoryTabs } from 'variables/category';
import { Tabs } from 'components/atoms/Tab';

export const LeftSideMenu: FC = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const MissionCategory: any = [
    {
      id: 0,
      name: '2022-04-12',
      iconType: 'gear',
      children: [
        {
          id: 0,
          name: 'アイドま',
          path: '/mission/survey',
        },
      ],
    },
    {
      id: 1,
      name: '2022-04-11',
      iconType: '',
      children: [
        {
          id: 0,
          name: 'アンケートを選ぶ',
          path: '/mission/survey_',
        },
        {
          id: 1,
          name: 'クーポンを選ぶ',
          path: '/mission/coupon',
        },
        {
          id: 2,
          name: 'キャンペーンを作る',
          path: '/mission/campaign',
        },
        {
          id: 3,
          name: '店頭POPを作る',
          path: '/mission/qr',
        },
        {
          id: 4,
          name: 'お客様に声かけする',
          path: '/mission/pop',
        },
      ],
    },
    {
      id: 2,
      name: 'クチコミ獲得について相談',
      path: '/advice',
      iconType: 'advice',
      children: [],
    },
  ];

  const ManageCategory: any = [
    {
      id: 0,
      name: '送信一覧',
      path: '/send-list',
      iconType: 'send-list',
    },
    {
      id: 1,
      name: '成果レポート',
      iconType: 'report',
      children: [
        {
          id: 0,
          name: 'キャンペーンレポート',
          path: '/report',
        },
        {
          id: 1,
          name: '送信履歴レポート',
          path: '/report',
        },
        {
          id: 2,
          name: 'アンケートレポート',
          path: '/report',
        },
        {
          id: 3,
          name: 'クーポンレポート',
          path: '/report',
        },
        {
          id: 4,
          name: 'フィードバック一覧',
          path: '/report',
        },
      ],
    },
    {
      id: 2,
      name: '顧客リスト（一覧）',
      path: '/customer-list',
      iconType: 'customer-list',
    },
    {
      id: 3,
      name: '設定',
      iconType: 'setting',
      children: [
        {
          id: 0,
          name: '契約情報',
          path: '/account',
        },
        {
          id: 1,
          name: 'アカウント管理',
          path: '/account',
        },
      ],
    },
  ];

  const OtherCategory: any = [
    {
      id: 0,
      name: 'ヘルプ',
      path: '/help',
      iconType: 'help',
      children: [],
    },
  ];

  return (
    <>
      <StyledSideMenu></StyledSideMenu>
    </>
  );
};

const StyledSideMenu = styled.div`
  margin-top: 0px;
  width: 90px;
  min-height: 80vh;
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
