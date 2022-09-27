import * as _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { onAuthStateChange, signInWithRefreshToken } from 'services/utils/supabase';
import * as supabase from 'services/utils/supabase';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { userState, AuthState } from 'services/recoil/user';

const useAuth = (u: any = null) => {
  const [isLogined, setIsLogined] = useState(false);
  const { pathname, push } = useRouter();
  const [user, setUser] = useRecoilState(userState);
  const [auth, setAuth] = useRecoilState(AuthState);

  const NEED_LOGINED_PATHS = ['/account'];
  const REDIRECT_LOGINED_PATHS = ['/signin', '/signup'];

  useEffect(() => {
    console.log('useAuthRecoil', user);

    if (u === null) return;

    handleAuth(u);

    const { data: authListener }: any = onAuthStateChange((event: any, session: any) => {
      if (event === 'SIGN_OUT') {
        setIsLogined(false);
        setAuth({ isLogined: false });
      } else {
        alert('ds');
        setIsLogined(true);
        setAuth({ isLogined: true });
      }

      console.log(event, session);
    });
    return () => authListener.unsubscribe();
  }, []);

  // Routing
  useEffect(() => {
    redirectForAuth();
  }, [auth.isLogined]);

  async function handleAuth(userParams: any) {
    if (userParams) {
      setIsLogined(true);
      console.log('ログイン中です', userParams);

      if (_.includes(REDIRECT_LOGINED_PATHS, pathname)) {
        push('/account');
      }
    } else {
      console.log('ログインしていません');
      setIsLogined(false);
      setAuth({ isLogined: false });

      const jsonStr = localStorage.getItem('supabase.auth.token');

      console.log({ jsonStr });
      if (jsonStr) {
        const json: any = JSON.parse(jsonStr);
        const r = await signInWithRefreshToken(json?.currentSession?.refresh_token);
        console.log('再ログインしました', r);
        setIsLogined(true);
        setAuth({ isLogined: true });
      }

      if (_.includes(NEED_LOGINED_PATHS, pathname)) {
        push('/signin');
      }
    }
  }

  async function redirectForAuth() {
    const a = _.includes(REDIRECT_LOGINED_PATHS, pathname);
    const b = _.includes(NEED_LOGINED_PATHS, pathname);
    if (auth.isLogined && a) push('/account');
    if (!auth.isLogined && b) push('/signin');
  }

  async function signOut() {
    const r = await supabase.signOut();

    setIsLogined(false);
    setAuth({ isLogined: false });

    return r;
  }
  async function signIn({ email, password }: any) {
    const r = await supabase.signIn({ email, password });
    if (r) {
      setIsLogined(true);
      setAuth({ isLogined: true });
    }
  }

  async function signUpAndSave(params: supabase.SignUpAndSave) {
    if (!_.isString(params.email)) {
      console.error('useAuth.signUpAndSave', 'Invalid email');
      return null;
    }

    const user: any = await supabase.getUserByEmail(params.email);

    if (user?.data?.length > 0) {
      console.warn('useAuth.signUpAndSave', user);
      console.warn('useAuth.signUpAndSave', 'Already registered users');
      return { user };
    }

    const r = await supabase.signUpAndSave(params).catch((err) => {
      console.log('useAuth.signUpAndSave', err);
      return null;
    });

    await signIn(params);

    if (r === null) {
      setIsLogined(false);
      setAuth({ isLogined: false });
      return null;
    }

    setIsLogined(true);
    setAuth({ isLogined: true });

    return r;
  }

  async function forgetPassward() {}

  return {
    handleAuth,
    isLogined,
    signOut,
    signUpAndSave,
    forgetPassward,
    signIn,
    redirectForAuth,
  };
};

export default useAuth;
