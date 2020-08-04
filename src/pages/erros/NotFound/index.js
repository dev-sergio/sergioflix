import React from 'react';
import styled, { keyframes } from 'styled-components';
// import { Link } from 'react-router-dom';
import Menu from '../../../components/Menu';

const eye = keyframes`
0%,
  30%,
  55%,
  90%,
  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  10%,
  25% {
    -webkit-transform: translate(0, 20px);
    transform: translate(0, 20px);
  }
  65% {
    -webkit-transform: translate(-20px, 0);
    transform: translate(-20px, 0);
  }
  80% {
    -webkit-transform: translate(20px, 0);
    transform: translate(20px, 0);
  }
`;

const shvr = keyframes`
  0% {
    -webkit-transform: translate(1px, 1em);
    transform: translate(1px, 1em);
  }
  50% {
    -webkit-transform: translate(0, 1em);
    transform: translate(0, 1em);
  }
  100% {
    -webkit-transform: translate(-1px, 1em);
    transform: translate(-1px, 1em);
  }
`;

const Body = styled.body`
  margin-top: 100px;
  text-align: center;
  color: #fff;
&::before {
  content: "404";
  font-size: 80px;
  font-weight: 800;
  display: block;
  margin-bottom: 10px;
}
&::after {
  content: "Página não encontrada amigx";
}
`;

const Meta = styled.meta`
  position: relative;
  display: inline-block;
  background: #fff;
  width: 75px;
  height: 80px;
  border-radius: 50% 50% 50% 50%/45px 45px 45% 45%;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  &::after{
    content: "";
  position: absolute;
  border-bottom: 2px solid #fff;
  width: 70px;
  height: 50px;
  left: 0px;
  bottom: -10px;
  border-radius: 50%;
  }
  &::before {
  bottom: auto;
  top: -100px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  left: 0;
}
&:nth-of-type(2) {
  float: right;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
&:nth-of-type(2)::after {
  left: 5px;
}
&:nth-of-type(3) {
  display: none;
}
`;

const Head = styled.head`
  display: block;
  position: relative;
  width: 200px;
  margin: 10% auto 0;
  -webkit-animation: ${shvr} 0.2s infinite;
  animation: ${shvr} 0.2s infinite;
  &::after{
    content: "";
  width: 20px;
  height: 20px;
  background: #000;
  position: absolute;
  top: 30px;
  left: 25px;
  border-radius: 50%;
  box-shadow: 125px 0 0 #000;
  -webkit-animation: ${eye} 2.5s infinite;
  animation: ${eye} 2.5s infinite;
  }
`;

const Html = styled.html`
  background: #000;
  height: 93.4vh;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
`;

function NotFound() {
  return (
    <>
      <Menu />
      <Html>
        <Head>
          <Meta />
          <Meta />
          <Body />
        </Head>
      </Html>
    </>
  );
}

export default NotFound;
