import React, { useContext, useEffect } from "react";

import { useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import AppContext from "../contexts/AppContext";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Profile = ({ className }) => {
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
        context.isIPhone ? { x: 500, opacity: 1 } : { rotateY: 90, opacity: 1 }
      }
      exit={
        context.isIPhone
          ? { x: -500, opacity: 1 }
          : { rotateY: -90, opacity: 1 }
      }
      transition={{ duration: 0.5 }}
    >
      <div className={className}>
        <h1>Profile</h1>
        <p className={`${className}_dsc`}>
          1994年生まれ、大阪育ち。
          <br />
          立命館大学情報理工学部卒業後、凸版印刷株式会社へ入社。
          <br />
          生産管理として、約２年従事。カタログやパンフレットなどの製造工程の管理を担当。
          <br />
          その後アウトソーシングデザイナーへ転職。
          <br />
          Webエンジニア/Webデザイナーとして約1年半従事。ランディングページの制作などを担当。
        </p>
        <div className={`${className}_timeLine`}>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#990000", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #990000" }}
              date="2013 - 2017"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                立命館大学情報理工学部
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Ritsumei University
                <br />
                College of Information Science and Engineering
              </h4>
              <p className={`${className}_timeLine_dsc`}>
                情報システム学科にて、
                <br />
                セキュリティやネットワーク、
                <br />
                そしてコンピュータの仕組みなどについて学習。
                <br />
                研究室ではSwiftアプリを開発し実験を行う。
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#0068b5", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #0068b5" }}
              date="2017 - 2019"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                凸版印刷株式会社
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Toppan Printing Co., Ltd.
              </h4>
              <p className={`${className}_timeLine_dsc`}>
                パンフレット、カタログなどの生産管理。
                <br />
                営業部門、資材部門、技術部門、工場など
                <br />
                多くの部門と情報を共有し、
                <br />
                製品が顧客の元へ届くまでの全ステップを管理。
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#e6c54a", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #e6c54a" }}
              date="2019 - 2020"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                株式会社アウトソーシングデザイナー
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Outsoursing Designer Co.LTD
              </h4>
              <p className={`${className}_timeLine_dsc`}>
                HTML/CSS/JavaScriptとライブラリを用いた
                <br />
                リッチなランディングページの制作を担当。
                <br />
                グローバルスポーツブランドのコンテンツ制作や
                <br />
                ECサイトの運用や自社教材開発などに従事
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
        <div className={`${className}_hobby`}>
          <h2>hobbies</h2>
          <ul>
            <li>
              <img src={`${process.env.PUBLIC_URL}/icons/darts.jpg`} />
              <p>ダーツ</p>
            </li>
            <li>
              <img src={`${process.env.PUBLIC_URL}/icons/read.jpg`} />
              <p>読書</p>
            </li>
            <li>
              <img src={`${process.env.PUBLIC_URL}/icons/running.jpg`} />
              <p>ランニング</p>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const ProfileStyled = styled(Profile)`
  max-width: 1000px;
  margin: 50px auto 100px;
  padding: 0 50px;
  h1 {
    margin-top: 20px;
    font-size: 30px;
    font-weight: bold;
    font-family: "Open Sans", sans-serif;
  }
  &_dsc {
    margin-top: 20px;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.025em;
  }
  &_timeLine {
    text-align: left;
    margin-top: 50px;
    &_dsc {
      font-size: 14px !important;
    }
  }
  &_hobby {
    margin-top: 50px;
    h2 {
      font-size: 26px;
      font-weight: bold;
      font-family: "Open Sans", sans-serif;
    }
    ul {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      li {
        position: relative;
        width: calc(100% / 3);
        min-width: 300px;
        margin: 10px;
        &:before {
          content: "";
          display: block;
          padding-top: 100%;
        }
        img {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          margin: auto;
          object-fit: cover;
        }
        p {
          position: absolute;
          transform: translate(50%, 50%);
          right: 50%;
          bottom: 50%;
          font-size: 25px;
          font-weight: bold;
          text-shadow: 4px 4px 10px #000;
        }
      }
    }
  }
`;

export default ProfileStyled;
