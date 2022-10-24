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
  const G_FORM_URL = 'https://forms.gle/6d2dT5484Jj2mnye6';

  return (
    <header className="header">
      <div className="header_inner">
        <h1 className="logo">
          <a style={styles.logo} href="/">
            SKCH
          </a>
        </h1>
        <nav className="navi">
          <ul className="navi_list"></ul>
        </nav>
        <div style={{ paddingRight: '20px' }}>
          <SelectLanguage lang={lang} />
        </div>
        <a className="header_contact" target="_blank" href={G_FORM_URL}>
          {lang === 'ja' ? 'お問い合わせ' : 'Ccontact'}
        </a>
      </div>
    </header>
  );
};

export default Header;
