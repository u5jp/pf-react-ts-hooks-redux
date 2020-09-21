import React, { useContext, useEffect } from "react";

import { useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const Profile = ({ className }) => {
  const location = useLocation();
  const [_, rootPath] = location.pathname.split("/");
  useEffect(() => {
    document.title = rootPath;
    window.scrollTo(0, 0);
    return () => {
      document.title = "ReactApp";
    };
  });

  return (
    <motion.div
      animate={{ rotateY: 0, opacity: 1 }}
      initial={{ rotateY: 90, opacity: 0 }}
      exit={{ rotateY: -90, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={className}>
        <h1>Profile</h1>
        <p>
          1994年生まれ、大阪育ち。
          <br />
          立命館大学情報理工学部卒業後、凸版印刷株式会社へ入社。生産管理として、約２年従事。カタログやパンフレットなどの製造工程の管理を担当。
          <br />
          その後アウトソーシングデザイナーへ転職。Webエンジニア/Webデザイナーとして約1年半従事。ランディングページの制作などを担当。
        </p>
        <table>
          <tr>
            <th>在籍</th>
            <th>年度</th>
            <th>概要</th>
          </tr>
          <tr>
            <td>立命館大学</td>
            <td>2013/4-2017/3</td>
            <td>
              情報理工学部情報システム学科にて、ネットワークやセキュリティの知識を主に専攻しました。
            </td>
          </tr>
          <tr>
            <td>凸版印刷</td>
            <td>2017/4-2019/2</td>
            <td>
              パンフレット、カタログなどの生産を主としたA輪転機、B輪転機の生産管理。営業部門、資材部門、技術部門、工場など多くの部門と情報を共有し、製品が顧客の元へ届くまでの全ステップを管理。
            </td>
          </tr>
          <tr>
            <td>アウトソーシングデザイナー</td>
            <td>2019/2-2020/7</td>
            <td>
              HTML/CSS/JavaScriptとそのライブラリを用いたリッチなランディングページの制作を担当
            </td>
          </tr>
        </table>
        <h4>Hobby</h4>
        <p>ダーツ・読書・ランニング</p>
      </div>
    </motion.div>
  );
};

const ProfileStyled = styled(Profile)`
  margin: 50px auto 8%;
  h1 {
    margin-top: 20px;
    font-size: 30px;
    font-weight: bold;
    font-family: "Open Sans", sans-serif;
  }
`;

export default ProfileStyled;
