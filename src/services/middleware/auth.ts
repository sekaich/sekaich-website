import { getClient } from 'services/utils/supabase';

export async function authSupabase(req: any) {
  const supabase = getClient();
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) return null;
  return user;
}

export async function authServerSideSupabase(req: any) {
  const supabase = getClient();
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) return null;
  return user;
}
