import type { NextPage } from 'next';
import SelectLanguage from './SelectLanguage';

const Header: NextPage<any> = ({ lang }) => {
  const styles = {
    logo: {
      fontSize: '32px',
      fontFamily: 'initial',
      fontWeight: 'bold',
      color: 'darkblue',
    },
  };

  return (
    <footer className="footer">
      <div className="inner"></div>
      <div className="copyright">
        <p className="copyright_text">
          Copyright &copy; 2022 Sekai Channel All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Header;
