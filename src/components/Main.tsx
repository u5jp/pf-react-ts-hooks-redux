import React, { useContext, useEffect } from "react";
import IntroductionCard from "./IntroductionCard";
import AppContext from "../contexts/AppContext";

import styled from "styled-components";
import media from "styled-media-query";

import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  className: string;
};

const Main: React.FC<Props> = ({ className }) => {
  const context: any = useContext(AppContext);
  console.log(context);
  // const [title, setTitle] = useState("(制作中)about me");
  const title = "About Me";
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
        <div className={`${className}_aboutMe`}>
          <View inView={inView1} ref={ref1} className={`${className}_title`}>
            <h1>{title}</h1>
            <h2>市橋 優悟</h2>
            <p>Yugo Ichihashi</p>
          </View>
          <View inView={inView2} ref={ref2} className={`${className}_dsc`}>
            <p>
              グローバルスポーツブランドの
              <br className="displayNone_PC" />
              Web制作・運用業務に 取り組んでおりました。
              <br />
              ディレクターや顧客と連携し、
              <br className="displayNone_PC" />
              HTML/CSS/JavaScriptとそのライブラリを
              <br className="displayNone_PC" />
              用いた
              <br className="displayNone_SP" />
              リッチなランディングページの制作を
              <br className="displayNone_PC" />
              行うのが主な業務です。
              <br />
              フロントエンド・Webデザインの技術への
              <br className="displayNone_PC" />
              関心が強かったことや
              <br />
              生産管理の経験によるコミュニケーションや
              <br className="displayNone_PC" />
              管理の姿勢が評価され、
              <br />
              技術リーダーとしてチームを牽引しておりました。
              <br />
              React.jsやVue.jsなどのモダン技術を
              <br className="displayNone_PC" />
              用いた開発に興味を持ち
              <br />
              独学を始めたことをきっかけに
              <br className="displayNone_PC" />
              転職活動を行なっております。
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
  margin: 40px auto 80px;
  padding: 0 20px;
  transition: 2s;
  pointer-events: none;
  opacity: ${(props) => props.inView && `1`};
  ${media.greaterThan("medium")`
    margin: 50px auto 100px;
    padding: 0 50px;
  `}
  &_title {
    h1 {
      margin-top: 15px;
      font-size: 40px;
      font-weight: bold;
      font-family: "Open Sans", sans-serif;
      ${media.greaterThan("medium")`
        margin-top: 20px;
        font-size: 50px;
      `}
    }
    h2 {
      margin-top: 25px;
      font-size: 18px;
      ${media.greaterThan("medium")`
        margin-top: 30px;
        font-size: 20px;
      `}
    }
    p {
      margin-top: 5px;
      font-size: 18px;
      ${media.greaterThan("medium")`
        margin-top: 5px;
        font-size: 20px;
      `}
    }
  }
  &_dsc {
    margin-top: 30px;
    font-size: 14px;
    line-height: 2.3;
    letter-spacing: 0.025em;
    ${media.greaterThan("medium")`
      margin-top: 40px;
      font-size: 16px;
    `}
  }
  &_introductionCards {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    pointer-events: auto;
    ${media.greaterThan("medium")`
      margin-top: 40px;
    `}
  }
`;

export default MainStyled;
