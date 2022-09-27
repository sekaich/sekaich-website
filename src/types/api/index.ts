export type Customer = {
  id: number;
  customerName: string;
  phoneNumber: string;
  email: string;
  visitDate: string;
  postCode: number;
  memo: string;
  sendable: boolean;
  createdAt: string;
  updatedAt: string;
};

export type SurveyListItem = {
  id: number;
  title: string;
  createdAt: string;
};

export type SurveyDetail = {
  id: string;
  title: string;
  description: string;
  itemList: SurveyItem[];
};

export type SurveyPages = {
  id: number;
  title: string;
};

export type SurveyItem = {
  id: number;
  pageId: number;
  type:
    | 'radio'
    | 'checkbox'
    | 'textfield'
    | 'textarea'
    | 'pulldown'
    | 'rate'
    | 'time'
    | 'date';
  title: string;
  parts: SurveyItemParts[];
  partsOther: boolean;
};

export type SurveyItemParts = {
  id: number;
  data: string;
};

export type News = {
  id: number;
  title: string;
  body: string;
  createdAt: string;
};

export type Activity = {
  id: number;
  title: string;
  createdAt: string;
};

export type Report = {
  monthCount: {
    delivery: number;
    opened: number;
    review: number;
    questionnaire: number;
    deliveryCoupon: number;
    usedCoupon: number;
  };
  lastMonthCount: {
    delivery: number;
    opened: number;
    review: number;
    questionnaire: number;
    deliveryCoupon: number;
    usedCoupon: number;
  };
};
