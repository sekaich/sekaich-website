import React, { useEffect, useState } from 'react';
import * as _ from 'lodash';
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
import useAuth from 'hooks/useAuth';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Base from 'components/templates/Base';

const schema = yup.object({
  email: yup
    .string()
    .required('必須項目です')
    .email('メールアドレスの形式が正しくありません'),
  password: yup
    .string()
    .required('8文字以上必要です')
    .min(8, '8文字以上必要です')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&].*$/,
      'パスワードには、英数字・大文字・小文字・特殊文字が必要です',
    ),
  firstName: yup.string().required('必須項目です'),
  lastName: yup.string().required('必須項目です'),
  agree: yup.boolean().oneOf([true], 'チェックが必要です'),
  allowExtraEmails: yup.boolean().oneOf([true], 'チェックが必要です'),
});

interface SignUpForm {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  agree: boolean;
  allowExtraEmails: boolean;
}

export default function SignUp(props: any) {
  const t = useTranslate();
  const { signUpAndSave, isLogined } = useAuth(props.auth.user);

  // https://dev.classmethod.jp/articles/mui-v5-rhf-v7/

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignUpForm>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  useEffect(() => {
    console.log({ isLogined });
  }, [isLogined]);

  const onSubmit: SubmitHandler<SignUpForm> = (data) => {
    signUpAndSave({
      email: data.email,
      password: data.password,
      first_name: data.firstName,
      last_name: data.lastName,
    });

    console.log('onSubmit', data);
  };

  return (
    <Base>
      <ThemeProvider theme={createTheme()}>
        <Container component="main" maxWidth="xs" style={{ padding: '30px' }}>
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
              {t.SIGN_UP_TITLE}
            </Typography>

            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Grid
                container
                spacing={2}
                sx={{ paddingTop: '20px', paddingBottom: '10px' }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label={t.LAST_NAME}
                    {...register('lastName')}
                    error={'lastName' in errors}
                    helperText={errors.lastName?.message}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    required
                    fullWidth
                    label={t.FIRST_NAME}
                    autoFocus
                    {...register('firstName')}
                    error={'firstName' in errors}
                    helperText={errors.firstName?.message}
                  />
                </Grid>
              </Grid>

              <TextField
                margin="normal"
                placeholder="xxx@example.com"
                required
                fullWidth
                label={t.EMAIL}
                autoComplete="email"
                autoFocus
                {...register('email')}
                error={'email' in errors}
                helperText={errors.email?.message}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label={t.PASSWORD}
                type="password"
                autoComplete="current-password"
                {...register('password')}
                error={'password' in errors}
                helperText={errors.password?.message}
              />
              <FormControlLabel
                control={<Checkbox {...register('agree')} color="primary" />}
                label={t.CHECK_BOX_AGREE_POLICY}
              />
              <FormControlLabel
                control={<Checkbox {...register('allowExtraEmails')} color="primary" />}
                label={t.CHECK_BOX_ALLOW_EMAIL}
              />
              <Button
                onClick={handleSubmit(onSubmit)}
                fullWidth
                variant="contained"
                disabled={!isValid}
                sx={{ mt: 3, mb: 2 }}>
                {t.SIGN_UP}
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link href="/info/terms_conditions" variant="body2">
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
        </Container>
      </ThemeProvider>
    </Base>
  );
}
