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
import useTranslate from 'hooks/useTranslate';
import Copyright from 'components/molecules/common/Copyright';
import { signUp } from 'services/utils/supabase';
const theme = createTheme();

export default function SignUp() {
  const t = useTranslate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {t.SIGN_UP_TITLE}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Grid
              container
              spacing={2}
              sx={{ paddingTop: '20px', paddingBottom: '10px' }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label={t.FIRST_NAME}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label={t.LAST_NAME}
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
            </Grid>

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
            <FormControlLabel
              control={<Checkbox value="agree" color="primary" />}
              label={t.CHECK_BOX_AGREE_POLICY}
            />
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label={t.CHECK_BOX_ALLOW_EMAIL}
            />

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              {t.SIGN_UP}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/corporation/terms_conditions" variant="body2">
                  {t.AGREE_POLICY}
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signin" variant="body2">
                  {t.HAVE_ACCOUNT}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
