import type { NextPage } from 'next';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';

interface SelectLanguageProps {
  lang: string;
}

const SelectLanguage: NextPage<SelectLanguageProps> = ({ lang }) => {
  const ja = lang === 'en' ? 'Japanese' : '日本語';
  const router = useRouter();

  const onChange = (e: any) => {
    if (e?.target?.value === 'en') {
      router.push('/en');
    } else {
      router.push('/');
    }
  };

  return (
    <div>
      <Form.Select aria-label="Select Language" value={lang} onChange={onChange}>
        <option value="ja">{ja}</option>
        <option value="en">English</option>
      </Form.Select>
    </div>
  );
};

export default SelectLanguage;
