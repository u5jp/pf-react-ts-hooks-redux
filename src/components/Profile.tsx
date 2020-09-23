import React, { useContext, useEffect } from "react";

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { useInView } from "react-intersection-observer";

import styled from "styled-components";
import media from "styled-media-query";

import { AnimatePresence, motion } from "framer-motion";
import AppContext from "../contexts/AppContext";

import TimeLine from "./TimeLine";
import Hobby from "./Hobby";

type Props = {
  className: string;
};

const Profile: React.FC<Props> = ({ className }) => {
  const context: any = useContext(AppContext);
  const location = useLocation();
  const [_, rootPath] = location.pathname.split("/");

  useEffect(() => {
    document.title = rootPath;
    window.scrollTo(0, 0);
    return () => {
      document.title = "ReactApp";
    };
  }, []);

  return (
    <motion.div
      animate={
        context.isIPhone ? { x: 0, opacity: 1 } : { rotateY: 0, opacity: 1 }
      }
      initial={
        context.isIPhone ? { x: 500, opacity: 0 } : { rotateY: 90, opacity: 0 }
      }
      exit={
        context.isIPhone
          ? { x: -500, opacity: 0 }
          : { rotateY: -90, opacity: 0 }
      }
      transition={{ duration: 0.5 }}
    >
      <div className={className}>
        <h1>Profile</h1>
        <p className={`${className}_dsc`}>
          1994年生まれ、大阪育ち。
          <br />
          立命館大学情報理工学部卒業後、
          <br className="displayNone_PC" />
          凸版印刷株式会社へ入社。
          <br />
          生産管理として、約２年従事。
          <br className="displayNone_PC" />
          カタログやパンフレットなどの
          <br className="displayNone_PC" />
          製造工程の管理を担当。
          <br />
          その後アウトソーシングデザイナーへ転職。
          <br />
          Webエンジニア/Webデザイナーとして
          <br className="displayNone_PC" />
          約1年半従事。ランディングページの
          <br className="displayNone_PC" />
          制作などを担当。
        </p>
        <TimeLine />
        <Hobby />
      </div>
    </motion.div>
  );
};

const ProfileStyled = styled(Profile)`
  max-width: 1000px;
  margin: 40px auto 100px;
  padding: 0 20px;
  ${media.greaterThan("medium")`
    margin: 50px auto 120px;
    padding: 0 50px;
  `}
  h1 {
    margin-top: 15px;
    font-size: 30px;
    font-weight: bold;
    font-family: "Open Sans", sans-serif;
    ${media.greaterThan("medium")`
      margin-top: 20px;
      font-size: 36px;
    `}
  }
  &_dsc {
    margin-top: 15px;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: 0.025em;
    ${media.greaterThan("medium")`
      margin-top: 20px;
      font-size: 16px;
    `}
  }
`;

export default ProfileStyled;
