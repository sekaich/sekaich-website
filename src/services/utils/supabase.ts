import * as _ from 'lodash';
import { createClient } from '@supabase/supabase-js';

const TABLES = {
  USERS: 'users',
};

const url: any = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anon: any = process.env.NEXT_PUBLIC_SUPABASE_ANON;

export const supabase = createClient(url, anon, {
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
});

export function getClient() {
  return supabase;
}

export async function signIn({ email, password }: any) {
  const { user, error } = await supabase.auth.signIn({ email, password });
  return { user, error };
}

export async function signInWithRefreshToken(refreshToken: string) {
  const { user, error } = await supabase.auth.signIn({
    refreshToken,
  });
  return { user, error };
}

export async function signUp({ email, password }: any) {
  const { user, error } = await supabase.auth.signUp({ email, password });
  return { user, error };
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

export async function getMembershipPlans() {
  const { data, error } = await supabase.from('membership_plans').select();

  if (error) {
    return error;
  } else {
    return data;
  }
}

export async function getUserById(userAuthId: string) {
  const { data, error } = await supabase
    .from(TABLES.USERS)
    .select()
    .eq('auth_uid', userAuthId)
    .single();

  if (error) return error;
  else return data;
}

export async function getUserByEmail(email: string) {
  const { data, error } = await supabase.from(TABLES.USERS).select().eq('email', email);

  return { data, error };
}

export async function getUser() {
  const user: any = supabase.auth.user();

  const { data, error } = await getUserById(user.id);

  return { data, user, error };
}

interface SaveUser {
  auth_uid: string;
  email: string;
  first_name: any;
  last_name: any;
}

export async function saveUser(params: SaveUser) {
  if (params.auth_uid) {
    const { data, error } = await supabase
      .from(TABLES.USERS)
      .insert([params], { returning: 'minimal' });

    return { data, error };
  } else {
    return null;
  }
}

export interface SignUpAndSave {
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
  first_name: FormDataEntryValue | null;
  last_name: FormDataEntryValue | null;
}

export async function signUpAndSave({
  email,
  password,
  first_name,
  last_name,
}: SignUpAndSave) {
  if (!_.isString(email) || !_.isString(password)) {
    return { user: null, error: 'Email or Password is invalid', updateResult: null };
  }

  const { user, error }: any = await supabase.auth.signUp({ email, password });

  if (error) {
    console.error('signUpAndSave', [error, user]);
    return { user, error, updateResult: null };
  }

  if (user?.id) {
    console.log('Before SaveUser', user);

    const updateResult = await saveUser({
      auth_uid: user?.id,
      email: email,
      first_name,
      last_name,
    });

    console.log('saveUser', { user, error, updateResult });

    return { user, error, updateResult };
  }

  return { user, error, updateResult: null };
}

export function onAuthStateChange(callback: any = () => {}) {
  return supabase.auth.onAuthStateChange((event, currentSession) => {
    fetch('/api/auth', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'same-origin',
      body: JSON.stringify({ event, session: currentSession }),
    }).then((res) => res.json());

    console.log('onAuthStateChange', event);

    callback(event, currentSession);
  });
}
