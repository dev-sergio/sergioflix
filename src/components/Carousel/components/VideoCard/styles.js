import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  &:not(:first-child) {
    margin-left: 20px;
  }

`;

VideoCardContainer.Background = styled.div`
  background-image: ${({ url }) => `url(${url})`};
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  position: absolute;
  display: flex;
  align-items: center;
  padding: 16px;

  &:hover,
  &:focus {
    background: rgba(0, 0, 0, 0.7);
    border-bottom: 4px solid var(--white);
  }

  &:hover span {
    opacity: 1;
  }

  @media (max-width: 800px) {
    background: rgba(0, 0, 0, 0.7);

    span {
      opacity: 1;
    }
  }
`;

VideoCardContainer.Title = styled.span`
  font-size: 16pt;
  text-align: center;
  opacity: 0;
  font-weight: 700;

  &:hover {
    opacity: 1;
  }
`;
