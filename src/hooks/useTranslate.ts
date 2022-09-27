import * as _ from 'lodash';
import { useRouter } from 'next/router';
import { DICT } from '../locale/DICT';

function getLangDict(lang: 'ja' | 'en') {
  let obj: any = {};
  _.each(DICT, (d, key) => {
    obj[key] = d[lang];
  });
  return obj;
}

const useTranslate = () => {
  const { locale } = useRouter();
  return locale === 'ja' ? getLangDict('ja') : getLangDict('en');
};

export default useTranslate;
