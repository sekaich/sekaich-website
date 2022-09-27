import { atom } from 'recoil';
import { SurveyListItem } from 'types/api';

export const surveyListState = atom<SurveyListItem[]>({
  key: 'SurveyList',
  default: [
    {
      id: 1,
      title: 'アンケートタイトル1',
      createdAt: '2021-10-2',
    },
    {
      id: 2,
      title: 'アンケートタイトル2',
      createdAt: '2021-10-3',
    },
    {
      id: 3,
      title: 'アンケートタイトル3',
      createdAt: '2021-10-5',
    },
    {
      id: 4,
      title: 'アンケートタイトル4',
      createdAt: '2021-10-7',
    },
    {
      id: 5,
      title: 'アンケートタイトル5',
      createdAt: '2021-10-9',
    },
    {
      id: 6,
      title: 'アンケートタイトル6',
      createdAt: '2021-10-10',
    },
    {
      id: 7,
      title: 'アンケートタイトル7',
      createdAt: '2021-10-11',
    },
    {
      id: 8,
      title: 'アンケートタイトル8',
      createdAt: '2021-10-13',
    },
  ],
});
