import React, { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';
import { Tab as MuiTab, Tabs as MuiTabs } from '@mui/material';
import { Tab } from 'types/domain';
import HistoryIcon from '@mui/icons-material/History';
import ListIcon from '@mui/icons-material/List';

type Props = {
  tabItem: Tab[];
  tabValue: number;
  uniqueTabId?: number;
  setTabValue: Dispatch<SetStateAction<number>>;
  variant?: 'fullWidth';
  className?: 'balloon' | 'fluctuation';
  addPage?: () => void;
  deletePage?: (pageIndex: number, pageId: number) => void;
  hiddenAddTab?: boolean;
  validateFunc?: () => void;
};

export const Tabs: FC<Props> = ({ tabValue, setTabValue, variant, className }) => {
  const tabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <>
      <StyledTabs
        value={tabValue}
        onChange={tabChange}
        variant={variant}
        className={className}>
        <MuiTab key={0} value={0} icon={<HistoryIcon fontSize='large' />} />
        <MuiTab key={1} value={1} icon={<ListIcon fontSize='large' />} />
      </StyledTabs>
    </>
  );
};

const StyledTabs = styled(MuiTabs)`
  .MuiTab-root {
    border-radius: 8px 8px 0 0;
    background: #f2f2f2;
    :not(:last-child) {
      margin-right: 6px;
    }
    .MuiTypography-root {
      margin-left: 8px;
      color: #888888;
      font-size: 16px;
      font-weight: bold;
    }
    &.Mui-selected {
      background: #ffffff;
    }
  }
  .MuiTabs-indicator {
    display: none;
  }
  &.balloon,
  &.fluctuation {
    overflow: visible;
    border-bottom: solid 2px #b0b0b0;
    .MuiTabs-scroller {
      overflow: inherit !important;
    }
    .MuiTabs-flexContainer {
      position: relative;
      top: 2px;
      padding: 0 24px;
    }
    .MuiTab-root {
      padding: 12px 0;
      min-width: 240px;
      border-top: solid 2px #ffffff;
      border-bottom: solid 2px #b0b0b0;
      border-radius: 8px 8px 0 0;
      :not(:last-child) {
        margin-right: 12px;
      }
      .MuiTypography-root {
        font-size: 20px;
      }
      &.Mui-selected {
        overflow: inherit;
        border-top: solid 2px #b0b0b0;
        border-left: solid 2px #b0b0b0;
        border-right: solid 2px #b0b0b0;
        border-bottom: solid 2px #d2ef18;
        background: #d2ef18 !important;
        ::after {
          content: '';
          position: absolute;
          top: 52px;
          border-right: 10px solid transparent;
          border-left: 10px solid transparent;
          border-top: 15px solid #d2ef18;
        }
        .MuiTypography-root {
          color: #000000;
        }
      }
    }
  }
  &.fluctuation {
    .MuiTabs-flexContainer {
      padding: 0 12px;
    }
    .MuiTab-root {
      min-width: 130px;
      min-height: 54px;
      .MuiTypography-root {
        font-size: 16px;
      }
      .MuiTab-iconWrapper {
        margin-right: unset;
      }
      &.add-page-tab {
        min-width: 140px;
        border: solid 2px #b0b0b0;
        background: #ffffff !important;
        .MuiTypography-root {
          margin-left: unset !important;
        }
      }
    }
  }
`;
