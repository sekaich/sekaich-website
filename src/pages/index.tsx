import { useEffect } from 'react';
import Base from 'components/templates/Base';
import Top from 'components/molecules/lp/Top';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useAuth from 'hooks/useAuth';
import { userState, AuthState } from 'services/recoil/user';
import { useRecoilValue } from 'recoil';

export default function Page(props: any) {
  const { isLogined } = useAuth(props.auth.user);
  const user = useRecoilValue(userState);
  const auth = useRecoilValue(AuthState);

  useEffect(() => {
    console.log('Index', [user, auth]);
  }, []);

  return (
    <Base>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <div
              style={{ backgroundColor: 'white', padding: '20px', margin: '10px 0px' }}>
              <Top />
            </div>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Box>
    </Base>
  );
}
