import React from "react";

import styled from "styled-components";
import media from "styled-media-query";

import { ReactComponent as University } from "../images/university.svg";
import { ReactComponent as Business } from "../images/business.svg";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type Props = {
  className: string;
};

const TimeLine: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#990000", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #990000" }}
          date="2013 - 2016"
          iconStyle={{ background: "#990000", color: "#fff" }}
          icon={<University />}
        >
          <h3 className="vertical-timeline-element-title">
            立命館大学情報理工学部
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Ritsumeikan University
            <br />
            College of Information Science and Engineering
          </h4>
          <p className={`${className}_dsc`}>
            情報システム学科にて、セキュリティやネットワーク、そしてコンピュータの仕組みなどについて学習。研究室ではSwift言語を使って協調作業支援アプリの開発と実験を行う。
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#0068b5", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #0068b5" }}
          date="2017 - 2018"
          iconStyle={{ background: "#0068b5", color: "#fff" }}
          icon={<Business />}
        >
          <h3 className="vertical-timeline-element-title">凸版印刷株式会社</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Toppan Printing Co., Ltd.
          </h4>
          <p className={`${className}_timeLine_dsc`}>
            パンフレット、カタログなどの生産管理。営業部門、資材部門、技術部門、工場など多くの部門と情報を共有し、製品が顧客の元へ届くまでの全ステップを管理。
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#e6c54a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #e6c54a" }}
          date="2019 - 2020"
          iconStyle={{ background: "#e6c54a", color: "#fff" }}
          icon={<Business />}
        >
          <h3 className="vertical-timeline-element-title">
            株式会社アウトソーシングデザイナー
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Outsoursing Designer Co.LTD
          </h4>
          <p className={`${className}_timeLine_dsc`}>
            HTML/CSS/JavaScriptとライブラリを用いたリッチなランディングページの制作を担当。グローバルスポーツブランドのコンテンツ制作やECサイトの運用や自社教材開発などに従事
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

const TimeLineStyled = styled(TimeLine)`
  text-align: left;
  margin-top: 50px;
  &_dsc {
    font-size: 14px !important;
  }
`;

export default TimeLineStyled;
