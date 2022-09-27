import { atom, selector } from 'recoil';
import { News, Activity } from 'types/api';

export const newsListState = atom<News[]>({
  key: 'NewsList',
  default: [
    {
      id: 1,
      title: 'カブランク文章のダミータイトルです',
      body: 'カブランク文章のダミー詳細です',
      createdAt: '2021-10-2',
    },
    {
      id: 2,
      title: 'カブランク文章のダミータイトルですカブランク文章のダミータイトルです',
      body: 'カブランク文章のダミー詳細ですカブランク文章のダミー詳細です',
      createdAt: '2021-10-3',
    },
    {
      id: 3,
      title:
        'カブランク文章のダミータイトルですカブランク文章のダミータイトルですカブランク文章のダミータイトルです',
      body: 'カブランク文章のダミー詳細ですカブランク文章のダミー詳細ですカブランク文章のダミー詳細です',
      createdAt: '2021-10-4',
    },
  ],
});

export const activityListState = atom<Activity[]>({
  key: 'ActivityList',
  default: [
    {
      id: 1,
      title: 'アクティビティログのダミーです',
      createdAt: '2021-10-2',
    },
    {
      id: 2,
      title: 'アクティビティログのダミーですアクティビティログのダミーです',
      createdAt: '2021-10-3',
    },
    {
      id: 3,
      title:
        'アクティビティログのダミーですアクティビティログのダミーですアクティビティログのダミーです',
      createdAt: '2021-10-4',
    },
  ],
});
