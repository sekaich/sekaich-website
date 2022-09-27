import { atom } from 'recoil';

// Auth
export type Auth = {
  isLogined: boolean;
};

// User
export const AuthState = atom<Auth>({
  key: 'auth',
  default: {
    isLogined: false,
  },
});

export type User = {
  id: number | null;
  auth_uid: string | null;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  membership_plan_id: number | null;
  is_disabled: boolean;
  created_at: any;
  updated_at: any;
  deleted_at: any;
};

// User
export const userState = atom<User>({
  key: 'user',
  default: {
    id: null,
    auth_uid: null,
    first_name: '',
    last_name: '',
    email: '',
    membership_plan_id: null,
    is_disabled: false,
    created_at: null,
    updated_at: null,
    deleted_at: null,
  },
});
