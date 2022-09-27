import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Header } from 'components/templates/Header';
import { Footer } from 'components/templates/Footer';

type Props = { children: ReactNode };

const Layout: FC<Props> = ({ children, isLogined }: any) => {
  return (
    <>
      <Header />
      <StyledBody>
        <div>{children}</div>
      </StyledBody>
      <Footer />
    </>
  );
};

const StyledBody = styled.div`
  width: 100%;
  min-height: 90vh;
  margin-top: 48px;
  background: #ebebeb;
  background-size: 104%;
`;

export default Layout;
