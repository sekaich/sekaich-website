import { NextApiRequest, NextApiResponse } from 'next';
import { getClient } from 'services/utils/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const supabase = getClient();

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    console.log('NOT ALLOW', req.method);
    return res.status(405).end(`Method Not Allowed: ${req.method}`);
  } else {
    return supabase.auth.api.setAuthCookie(req, res);
  }
}
