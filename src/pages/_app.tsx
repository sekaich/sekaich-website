import type { ReactElement, ReactNode } from 'react';
import { useEffect } from 'react';
import type { NextPage, GetServerSidePropsContext } from 'next';
import type { AppProps } from 'next/app';
import App from 'next/app';
import { RecoilRoot } from 'recoil';
import { StylesProvider } from '@mui/styles';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import CssBaseline from '@mui/material/CssBaseline';
import theme from 'styles/theme';
import smoothscroll from 'smoothscroll-polyfill';
import { getClient } from 'services/utils/supabase';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    const jssStyles: Element | null = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  const getLayout = Component.getLayout ?? ((page) => page);

  process.browser && smoothscroll.polyfill();

  return getLayout(
    <>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDateFns} locale="ja">
              <RecoilRoot>
                <CssBaseline />
                <Component {...pageProps} />
              </RecoilRoot>
            </LocalizationProvider>
          </StyledThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </>,
  );
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps: any = await App.getInitialProps(appContext);
  const req = appContext.ctx.req;
  const res = appContext.ctx.res;

  const supabase = getClient();
  const auth: any = await supabase.auth.api.getUserByCookie(req, res);
  if (auth?.user) {
    const { data, error } = await supabase
      .from('users')
      .select()
      .eq('auth_uid', auth.user.id);

    console.log({ data, error });
  }
  appProps.pageProps.auth = auth;

  return { ...appProps };
};

export default MyApp;
