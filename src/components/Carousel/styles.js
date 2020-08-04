import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 22pt;
  line-height: 1;
  margin-bottom: 0;
  margin-top: 15px;
  display: inline-block;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    font-size: 20pt;
    padding: 6px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  scrollbar-width: none;

  &::-webkit-scrollbar{
    display: none;
  }
  
  li {
    margin-right: 10px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
  overflow: hidden;
`;
