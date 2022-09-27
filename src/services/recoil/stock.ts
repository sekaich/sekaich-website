import { atom, selector } from 'recoil';

export type Stock = {
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

export const customerState = atom<Stock>({
  key: 'Stock',
  default: <Stock>{},
});

export const customerListState = atom<Stock[]>({
  key: 'StockList',
  default: [
    {
      id: 1,
      customerName: '山田太郎',
      phoneNumber: '08011112222',
      email: 't.yamada@gmail.com',
      visitDate: '2021-10-2',
      postCode: 0,
      memo: 'テストメモ',
      sendable: false,
      createdAt: '2021-10-2',
      updatedAt: '2021-10-2',
    },
  ],
});
