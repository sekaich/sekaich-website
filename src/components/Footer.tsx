import type { NextPage } from 'next';

const Header: NextPage<any> = ({ lang }) => {
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
