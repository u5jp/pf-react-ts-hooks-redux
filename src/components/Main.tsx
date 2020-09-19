import React, { useContext, useEffect } from "react";
import IntroductionCard from "./IntroductionCard";
import AppContext from "../contexts/AppContext";

import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";

const Main = ({ className }) => {
  const value: any = useContext(AppContext);
  // const [title, setTitle] = useState("(制作中)about me");
  const title = "(制作中)about me";
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = "ReactApp";
    };
  }, []);

  const [ref1, inView1] = useInView({});
  const [ref2, inView2] = useInView({});
  const [ref3, inView3] = useInView({});

  return (
    <motion.div
      animate={{ rotateY: 0, opacity: 1 }}
      initial={{ rotateY: 90, opacity: 0 }}
      exit={{ rotateY: -90, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={className}>
        <div className={`${className}_aboutMe`}>
          <View inView={inView1} ref={ref1}>
            <h1>{title}</h1>
            <h2>市橋 優悟</h2>
            <p>Yugo Ichihashi</p>
          </View>
          <View inView={inView2} ref={ref2}>
            <p>
              グローバルスポーツブランドのWeb制作・運用業務に取り組んでおりました。ディレクターや顧客と連携し、HTML/CSS/JavaScriptとそのライブラリを用いたリッチなランディングページの制作を行うのが主な業務です。フロントエンド・Webデザインの技術への関心が強かったことや生産管理の経験によるコミュニケーションや管理の姿勢が評価され、技術リーダーとしてチームを牽引しておりました。React.jsやVue.jsなどのモダン技術を用いた開発に興味を持ち独学を始めたことをきっかけに転職活動を行なっております。
            </p>
          </View>
        </div>
        <View
          className={`${className}_introductionCards`}
          inView={inView3}
          ref={ref3}
        >
          {value.stateProvided.introductions.map((introduction, index) => (
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
  margin: 0 auto;
  transition: 2s;
  /* opacity: 0; */
  opacity: ${(props) => props.inView && `1`};
  &_aboutMe {
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
  }
  &_introductionCards {
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
  }
`;

export default MainStyled;
