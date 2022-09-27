import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import useTranslate from 'hooks/useTranslate';

export default function Copyright(props: any) {
  const t = useTranslate();

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        {t.TITLE_EN}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
