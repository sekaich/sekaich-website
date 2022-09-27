import { atom, selector } from 'recoil';
import { Customer } from 'types/api';

export const customerState = atom<Customer>({
  key: 'Customer',
  default: <Customer>{},
});

export const customerListState = atom<Customer[]>({
  key: 'CustomerList',
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
    {
      id: 2,
      customerName: '山田二郎',
      phoneNumber: '08011112222',
      email: 't.yamada@gmail.com',
      visitDate: '2021-10-2',
      postCode: 0,
      memo: 'テストメモ',
      sendable: false,
      createdAt: '2021-10-2',
      updatedAt: '2021-10-2',
    },
    {
      id: 3,
      customerName: '山田三郎',
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
