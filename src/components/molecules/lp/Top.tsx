import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import * as _ from 'lodash';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';

export default function CustomerList(): JSX.Element {
  const [stocks, setStocks] = useState([]);
  const [day, setDay] = useState([]);
  const [count, setCount] = useState(0);

  const BASE_URL = 'https://rsjp-t7svawcxta-an.a.run.app';
  // const BASE_URL = 'http://127.0.0.1:3000';
  const LATEST = '/search/get_latest_stocks';

  const axios = Axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    timeout: 30000,
  });

  const initFetchStocks = async () => {
    const res: any = await axios.post(LATEST, {});
    const list: any = _.sortBy(res.data.list, 'rs_rank');
    setStocks(list);
    setDay(res.data.date);
    setCount(res.data.count);
  };

  useEffect(() => {
    initFetchStocks();
  }, []);

  return (
    <>
      <div style={{ padding: 10, maxWidth: '100%' }}>
        <section>
          <h3> RS日本版とは</h3>

          <p>RS日本版 とは、ミネルヴィニの成長株投資 に出てくる RS の日本版です。</p>
          <p>
            RS 日本株は、日本全ての銘柄を比べ、上昇と下落の強さを比べます。一般的には、RS.
            70以上が強い銘柄とされます。
          </p>
          <p>
            RS を見ることで、相対的に上昇しているか、値下がりが少ないか
            を見れます。急上昇する株にはRS が高い、特に 70以上という特徴があります。
          </p>
          <p>
            RS は Investment Business Daily
            が作った指標です。公式の計算式は、発表しておりません。
          </p>
          <p>RS日本株 は、公式RSを参考に、KABURANK が独自に計算した指標です。</p>
        </section>

        <section>
          <h3> RSの優位性 と 成長株投資</h3>

          <p>
            RSはなぜ効果があるのか、RS からは何が読み取れるのか。を解説していきます。RS
            は、繰り返しになりますが、株価の上昇と下落の幅を比べ、ランキングしたものです。
          </p>

          <p>先導株の特徴として、以下が挙げられます。</p>

          <p>
            本サイトは全体的に、成長株投資をすることの手助けとなることを目的にしています。
            このサイトを使い、時間を節約してもらいたい。船頭株を見つけてもらいたいと思っています。
          </p>
        </section>

        <section>
          <h3>
            利用例 日本版RS | {day ? day : <CircularProgress />} | 全{count}銘柄
          </h3>
          <TableContainer component={Paper} style={{ maxHeight: '300px' }}>
            <Table sx={{ minWidth: 800 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">RS</TableCell>
                  <TableCell align="center">シンボル</TableCell>
                  <TableCell align="left">銘柄名</TableCell>
                  <TableCell align="left">市場</TableCell>
                  <TableCell align="right">始値</TableCell>
                  <TableCell align="right">終値</TableCell>
                  <TableCell align="right">高値</TableCell>
                  <TableCell align="right">安値</TableCell>
                  <TableCell align="right">出来高</TableCell>
                  <TableCell align="right">RSスコア</TableCell>
                  <TableCell align="right">RSランク</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {stocks.map((row: any) => (
                  <TableRow
                    key={row.symbol}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="center">{row.rs}</TableCell>
                    <TableCell component="th" scope="row">
                      {row.symbol}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <a
                        target="_blink"
                        href={`https://www.buffett-code.com/company/${row.symbol}/stockprice`}>
                        {row.name}
                      </a>
                    </TableCell>
                    <TableCell align="left">{row.market_class}</TableCell>
                    <TableCell align="right">{row.open}</TableCell>
                    <TableCell align="right">{row.close}</TableCell>
                    <TableCell align="right">{row.high}</TableCell>
                    <TableCell align="right">{row.low}</TableCell>
                    <TableCell align="right">{row.volume}</TableCell>

                    <TableCell align="right">{row.rs_base_score}</TableCell>
                    <TableCell align="right">{row.rs_rank}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </section>
        <section>
          <h3>カブランクで出来ること</h3>
        </section>

        <section>
          <h3>機能一覧</h3>

          <h5>デモアカウント (RS 50以下のみのデータのみ閲覧可能)</h5>
          <ul>
            <li>料金: 無料 </li>
            <li>RS 日本版 の閲覧 </li>
            <li>RS 上昇銘柄</li>
            <li>四半期移動平均上昇銘柄</li>
            <li>出来高パターンシグナル</li>
            <li>個別銘柄-株価チャートのみ</li>
          </ul>

          <h5>メンバーシップ (全銘柄解放)</h5>
          <ul>
            <li>料金: 10,000円 (税込)</li>
            <li>RS 日本版 の閲覧 (全て)</li>
            <li>RS 上昇銘柄</li>
            <li>四半期移動平均上昇銘柄</li>
            <li>出来高パターンシグナル</li>
            <li>個別銘柄-全機能</li>
          </ul>

          <h5>個別銘柄機能</h5>
          <ul>
            <li>株価チャート</li>
            <li>RSチャート</li>
            <li>出来高チャート</li>
            <li>移動平均線</li>
            <li>基本情報・指標</li>
            <li>サイトリンク</li>
          </ul>

          <h5>機能解説</h5>
          <p>
            KABURANKでは、他サイトで分析できる内容については、機能を省いており、当サイトだけの機能に集中しています。
            そのため、重要である
            チャートパターン、出来高とチャート、ファンダメンタル分析、材料分析、市場分析、業界分析などは、他サイトで行っていただくことを想定しています。
            KABURANKでスクリーニングをし、銘柄を発見。RS付きのエクセルダウンロード、銘柄のRS分析をしてもらうことを主眼に置いています。
          </p>
        </section>

        <section>
          <h3>料金について</h3>
        </section>

        <section>
          <h3>よくある質問</h3>
        </section>
      </div>
    </>
  );
}
