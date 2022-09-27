import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Header } from 'components/templates/Header';
import { SideMenu } from 'components/templates/SideMenu';
import { Footer } from 'components/templates/Footer';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <StyledBody>
        <div>
          <SideMenu />
          {children}
        </div>
      </StyledBody>
      <Footer />
    </>
  );
};

const StyledBody = styled.div`
  width: 100%;
  height: calc(100%);
  background: url(/assets/images/background-tile.svg) #e8e8e8 no-repeat;
  background-size: 104%;
  > div {
    display: flex;
    margin: auto;
    width: inherit;
    max-width: 1280px;
  }
`
