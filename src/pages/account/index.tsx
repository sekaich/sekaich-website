import React, { useEffect, useState } from 'react';
import useAuth from 'hooks/useAuth';
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
import useTranslate from 'hooks/useTranslate';
import Copyright from 'components/molecules/common/Copyright';
import { useRouter } from 'next/router';
import Base from 'components/templates/Base';

export default function Account(props: any) {
  const t = useTranslate();
  const router = useRouter();
  const { isLogined } = useAuth(props.auth.user);

  useEffect(() => {
    console.log('IS', isLogined);
  }, [isLogined]);

  return (
    <Base>
      <Container component="main" maxWidth="xs" style={{ paddingTop: '40px' }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {JSON.stringify(props?.auth)}
            {isLogined}
          </Typography>
        </Box>
      </Container>
    </Base>
  );
}
