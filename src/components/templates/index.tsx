import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { SideMenu } from 'components/templates/SideMenu';
import { LeftSideMenu } from 'components/templates/LeftSideMenu';
import Base from 'components/templates/Base';

type Props = { children: ReactNode };

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Base>
        <StyledBody>
          <div>
            <LeftSideMenu />
            {children}
            <SideMenu />
          </div>
        </StyledBody>
      </Base>
    </>
  );
};

const StyledBody = styled.div`
  width: 100%;
  height: calc(100% - 69px);
  min-height: 88vh;
  background: url(/assets/images/background-tile.svg) #e8e8e8 no-repeat;
  background-size: 104%;
  > div {
    display: flex;
    margin: auto;
    width: inherit;
    max-width: 100%;
  }
`;
