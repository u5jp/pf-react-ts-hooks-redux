import React, { useContext } from "react";
import IntroductionCard from "./IntroductionCard";
import AppContext from "../contexts/AppContext";

import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";

const MainPage = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  transition: 2s;
  opacity: 0;
  opacity: ${(props) => props.inView && `1`};
`;

const AboutMe = styled.div`
  margin-top: 50px;
  h1 {
    margin-top: 20px;
    font-size: 30px;
    font-weight: bold;
    font-family: "Open Sans", sans-serif;
  }
  h2 {
    margin-top: 20px;
    font-size: 20px;
  }
`;

const IntroductionUl = styled.ul`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
`;
const Main = () => {
  const value: any = useContext(AppContext);

  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
    // rootMargin: '-50px 0px',
  });

  return (
    <motion.div
      animate={{
        rotateY: 0,
        // x: 0,
        opacity: 1,
      }}
      initial={{
        rotateY: 90,
        // x: 500,
        opacity: 0,
      }}
      exit={{
        rotateY: -90,
        // x: -500,
        opacity: 0,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <MainPage inView={inView} ref={ref}>
        <AboutMe>
          <div>
            <h1>(制作中)about me</h1>
            <h2>市橋 優悟</h2>
            <p>Yugo Ichihashi</p>
          </div>
          <div>
            <p>
              グローバルスポーツブランドのWeb制作・運用業務に取り組んでおりました。ディレクターや顧客と連携し、HTML/CSS/JavaScriptとそのライブラリを用いたリッチなランディングページの制作を行うのが主な業務です。フロントエンド・Webデザインの技術への関心が強かったことや生産管理の経験によるコミュニケーションや管理の姿勢が評価され、技術リーダーとしてチームを牽引しておりました。React.jsやVue.jsなどのモダン技術を用いた開発に興味を持ち独学を始めたことをきっかけに転職活動を行なっております。
            </p>
          </div>
        </AboutMe>
        <IntroductionUl>
          {value.stateProvided.introductions.map((introduction, index) => (
            <IntroductionCard key={index} introduction={introduction} />
          ))}
        </IntroductionUl>
      </MainPage>
    </motion.div>
  );
};

export default Main;
