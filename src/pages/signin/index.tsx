import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useTranslate from '../../hooks/useTranslate';
import Base from 'components/templates/Base';
import useAuth from 'hooks/useAuth';

export default function SignIn(props: any) {
  const t = useTranslate();
  const { signIn, isLogined } = useAuth(props.auth.user);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get('email');
    const password = data.get('password');

    const r = await signIn({ email, password });

    console.log({ email, password, r });
  };

  return (
    <Base>
      <ThemeProvider theme={createTheme()}>
        <Container component="main" maxWidth="xs" style={{ paddingTop: '40px' }}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'white',
              padding: '20px 20px 30px 20px',
              boxShadow: '1px 1px 10px 4px gainsboro',
            }}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {t.SIGN_IN}
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                placeholder="xxx@example.com"
                required
                fullWidth
                id="email"
                label={t.EMAIL}
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label={t.PASSWORD}
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={t.REMEMBER_PW}
            /> */}
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                {t.SIGN_IN}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/signin/forget" variant="body2">
                    {t.FORGET_PW}
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {t.DONT_HAVE_ACCOUNT}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Base>
  );
}
