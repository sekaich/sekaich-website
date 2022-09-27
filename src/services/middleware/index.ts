import { authSupabase } from './auth';

export async function startMiddleware(req: any, res: any) {
  const user = authSupabase(req);

  if (!user) {
    console.log('Please login.');

    return {
      props: { user: null },
      redirect: { destination: '/', permanent: false },
    };
  }

  const props = {
    user,
  };

  return props;
}
