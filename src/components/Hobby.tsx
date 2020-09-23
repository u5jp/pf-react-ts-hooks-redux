import React from "react";

import styled from "styled-components";
import media from "styled-media-query";

const Hobby = ({ className }) => {
  return (
    <div className={className}>
      <h2>Hobbies</h2>
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
  );
};

const HobbyStyled = styled(Hobby)`
  margin-top: 50px;
  h2 {
    font-size: 26px;
    font-weight: bold;
    font-family: "Open Sans", sans-serif;
    ${media.greaterThan("medium")`
      font-size: 28px;
    `}
  }
  ul {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    li {
      position: relative;
      width: calc(100% / 3 - 20px);
      margin: 10px;
      ${media.lessThan("medium")`
        min-width: 250px;
      `}
      &:before {
        content: "";
        display: block;
        padding-top: 100%;
        ${media.lessThan("medium")`
          padding-top: 50%;
        `}
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
        font-size: 20px;
        font-weight: bold;
        text-shadow: 4px 4px 10px #000;
        margin-left: -50%;
        ${media.greaterThan("medium")`
          font-size: 22px;
        `}
      }
    }
  }
`;

export default HobbyStyled;
