import { atom } from 'recoil';
import { Report } from 'types/api';

export const reportState = atom<Report>({
  key: 'Report',
  default: <Report>{
    monthCount: {
      delivery: 150,
      opened: 68,
      review: 1,
      questionnaire: 17,
      deliveryCoupon: 14,
      usedCoupon: 2,
    },
    lastMonthCount: {
      delivery: 100,
      opened: 30,
      review: 2,
      questionnaire: 8,
      deliveryCoupon: 8,
      usedCoupon: 3,
    }
  },
});
