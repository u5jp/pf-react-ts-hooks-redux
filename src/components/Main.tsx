import React, { useContext, useEffect } from "react";
import IntroductionCard from "./IntroductionCard";
import AppContext from "../contexts/AppContext";

import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";

const Main = ({ className }) => {
  const context: any = useContext(AppContext);
  console.log(context);
  // const [title, setTitle] = useState("(制作中)about me");
  const title = "ABOUT ME";
  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
    return () => {
      document.title = "ReactApp";
    };
  }, []);

  const [ref1, inView1] = useInView({});
  const [ref2, inView2] = useInView({});
  const [ref3, inView3] = useInView({});

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
        <div className={`${className}_aboutMe`}>
          <View inView={inView1} ref={ref1} className={`${className}_title`}>
            <h1>{title}</h1>
            <h2>市橋 優悟</h2>
            <p>Yugo Ichihashi</p>
          </View>
          <View inView={inView2} ref={ref2} className={`${className}_dsc`}>
            <p>
              グローバルスポーツブランドのWeb制作・運用業務に取り組んでおりました。
              <br />
              ディレクターや顧客と連携し、HTML/CSS/JavaScriptとそのライブラリを用いた
              <br />
              リッチなランディングページの制作を行うのが主な業務です。
              <br />
              フロントエンド・Webデザインの技術への関心が強かったことや
              <br />
              生産管理の経験によるコミュニケーションや管理の姿勢が評価され、
              <br />
              技術リーダーとしてチームを牽引しておりました。
              <br />
              React.jsやVue.jsなどのモダン技術を用いた開発に興味を持ち
              <br />
              独学を始めたことをきっかけに転職活動を行なっております。
            </p>
          </View>
        </div>
        <View
          className={`${className}_introductionCards`}
          inView={inView3}
          ref={ref3}
        >
          {context.stateProvided.introductions.map((introduction, index) => (
            <IntroductionCard key={index} introduction={introduction} />
          ))}
        </View>
      </div>
    </motion.div>
  );
};

const View = styled.div`
  opacity: 0;
  transition: 2s;
  opacity: ${(props) => props.inView && `1`};
`;

const MainStyled = styled(Main)`
  max-width: 1000px;
  margin: 50px auto 0;
  padding-bottom: 8%;
  transition: 2s;
  pointer-events: none;
  opacity: ${(props) => props.inView && `1`};
  &_title {
    h1 {
      margin-top: 20px;
      font-size: 50px;
      font-weight: bold;
      font-family: "Open Sans", sans-serif;
    }
    h2 {
      margin-top: 30px;
      font-size: 20px;
    }
    p {
      margin-top: 5px;
      font-size: 20px;
    }
  }
  &_dsc {
    margin-top: 50px;
    font-size: 16px;
    line-height: 2.3;
    letter-spacing: 0.025em;
  }
  &_introductionCards {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    pointer-events: auto;
  }
`;

export default MainStyled;
