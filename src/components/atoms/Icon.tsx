import React, { FC } from 'react';
import styled from 'styled-components';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import SvgAdd from '/public/assets/images/icon-add.svg';
import SvgAsc from '/public/assets/images/icon-asc.svg';
import SvgAdvice from '/public/assets/images/icon-advice.svg';
import SvgCampaign from '/public/assets/images/icon-campaign.svg';
import SvgCalender from '/public/assets/images/icon-calender.svg';
import SvgCopy from '/public/assets/images/icon-copy.svg';
import SvgCoupon from '/public/assets/images/icon-coupon.svg';
import SvgCouponUsed from '/public/assets/images/icon-coupon-used.svg';
import SvgCreate from '/public/assets/images/icon-create.svg';
import SvgCustomer from '/public/assets/images/icon-customer.svg';
import SvgCustomerList from '/public/assets/images/icon-customerlist.svg';
import SvgDelivery from '/public/assets/images/icon-delivery.svg';
import SvgDesc from '/public/assets/images/icon-desc.svg';
import SvgEdit from '/public/assets/images/icon-edit.svg';
import SvgExpandLess from '/public/assets/images/icon-expandless.svg';
import SvgExpandMore from '/public/assets/images/icon-expandmore.svg';
import SvgFolder from '/public/assets/images/icon-folder.svg';
import SvgHelp from '/public/assets/images/icon-help.svg';
import SvgLogout from '/public/assets/images/icon-logout.svg';
import SvgMail from '/public/assets/images/icon-mail.svg';
import SvgMailOpened from '/public/assets/images/icon-mail-opened.svg';
import SvgMission from '/public/assets/images/icon-mission.svg';
import SvgNotification from '/public/assets/images/icon-notification.svg';
import SvgPreview from '/public/assets/images/icon-preview.svg';
import SvgPullDown from '/public/assets/images/icon-pulldown.svg';
import SvgQuestionnaire from '/public/assets/images/icon-questionnaire.svg';
import SvgReport from '/public/assets/images/icon-report.svg';
import SvgReview from '/public/assets/images/icon-review.svg';
import SvgReviews from '/public/assets/images/icon-reviews.svg';
import SvgSearch from '/public/assets/images/icon-search.svg';
import SvgSendList from '/public/assets/images/icon-sendlist.svg';
import SvgSetting from '/public/assets/images/icon-setting.svg';
import SvgStore from '/public/assets/images/icon-store.svg';
import SvgTicket from '/public/assets/images/icon-ticket.svg';
import SvgTime from '/public/assets/images/icon-time.svg';
import SvgTrash from '/public/assets/images/icon-trash.svg';
import SvgWarning from '/public/assets/images/icon-warning.svg';
import { IconType } from 'types/domain';

interface Props extends React.HTMLProps<SvgIconProps> {
  iconType: IconType;
  iconSize?: 'xs' | 'sm' | 'md' | 'lg';
  circle?: 'white';
}

export const Icon: FC<Props> = ({ iconType, iconSize, circle }) => {
  return (
    <>
      <StyledSpan className={iconSize} circle={circle}>
        <SvgIcon>
          {iconType === 'add' && <SvgAdd />}
          {iconType === 'advice' && <SvgAdvice />}
          {iconType === 'asc' && <SvgAsc />}
          {iconType === 'campaign' && <SvgCampaign />}
          {iconType === 'calender' && <SvgCalender />}
          {iconType === 'copy' && <SvgCopy />}
          {iconType === 'coupon' && <SvgCoupon />}
          {iconType === 'coupon-used' && <SvgCouponUsed />}
          {iconType === 'create' && <SvgCreate />}
          {iconType === 'customer' && <SvgCustomer />}
          {iconType === 'customer-list' && <SvgCustomerList />}
          {iconType === 'delivery' && <SvgDelivery />}
          {iconType === 'desc' && <SvgDesc />}
          {iconType === 'edit' && <SvgEdit />}
          {iconType === 'expand-less' && <SvgExpandLess />}
          {iconType === 'expand-more' && <SvgExpandMore />}
          {iconType === 'folder' && <SvgFolder />}
          {iconType === 'help' && <SvgHelp />}
          {iconType === 'logout' && <SvgLogout />}
          {iconType === 'mail' && <SvgMail />}
          {iconType === 'mail-opened' && <SvgMailOpened />}
          {iconType === 'mission' && <SvgMission />}
          {iconType === 'notification' && <SvgNotification />}
          {iconType === 'preview' && <SvgPreview />}
          {iconType === 'pulldown' && <SvgPullDown />}
          {iconType === 'survey' && <SvgQuestionnaire />}
          {iconType === 'report' && <SvgReport />}
          {iconType === 'review' && <SvgReview />}
          {iconType === 'reviews' && <SvgReviews />}
          {iconType === 'search' && <SvgSearch />}
          {iconType === 'send-list' && <SvgSendList />}
          {iconType === 'setting' && <SvgSetting />}
          {iconType === 'store' && <SvgStore />}
          {iconType === 'ticket' && <SvgTicket />}
          {iconType === 'time' && <SvgTime />}
          {iconType === 'trash' && <SvgTrash />}
          {iconType === 'warning' && <SvgWarning />}
        </SvgIcon>
      </StyledSpan>
    </>
  );
};

const StyledSpan = styled.span<{ circle: 'white' | undefined }>`
  display: flex;
  align-items: center;
  padding: ${({ circle }) => (circle ? '5px !important' : 'unset')};
  border-radius: 50%;
  background: ${({ circle }) => (circle ? '#ffffff' : 'unset')};
  &.xs {
    svg {
      font-size: 16px !important;
    }
  }
  &.sm {
    margin: 2px;
    svg {
      font-size: 20px !important;
    }
  }
  &.md {
    svg {
      font-size: 28px !important;
    }
  }
  &.lg {
    svg {
      font-size: 32px !important;
    }
  }
`;
