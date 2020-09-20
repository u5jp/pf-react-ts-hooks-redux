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
        <h3>TimeLine</h3>
        <ul>
          <li>
            <span>2013/04</span> <span>立命館大学情報理工学部入学</span>
          </li>
          <li>
            <span>2017/03</span> <span>立命館大学情報理工学部卒業</span>
          </li>
          <li>2017/04 凸版印刷入社</li>
          <li>2019/02 凸版印刷退社</li>
        </ul>
        <h4>Hobby</h4>
        <p>ダーツ・読書・ランニング</p>
        <Link to={"/"}>戻る</Link>
      </div>
    </motion.div>
  );
};

const ProfileStyled = styled(Profile)`
  margin-top: 50px;
  h1 {
    margin-top: 20px;
    font-size: 30px;
    font-weight: bold;
    font-family: "Open Sans", sans-serif;
  }
`;

export default ProfileStyled;
