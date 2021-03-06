import styled from 'styled-components';

export const BannerModuleStyles = styled.section`
  height: ${props => (props.compressed ? '300px' : '100vh')};
  position: relative;
  padding: 30px var(--borderSpacing);

  .container {
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
  }

  .banner__image {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
  }

  .banner__content {
    position: relative;
    z-index: 2;
    min-height: ${props => (props.compressed ? '100px' : '33vh')};
    width: 100%;

    @media (min-width: 768px) {
      width: 66vw;
      padding-left: ${props => (props.compressed ? '100px' : null)};
    }

    h1,
    .price {
      margin-top: 0;
      margin-bottom: 10px;
      font-weight: 700;
      font-size: var(--bannerTitle);
      letter-spacing: -1px;
      margin-bottom: 30px;
    }

    h2 {
      margin-top: 0;
      margin-bottom: 30px;
      font-weight: 600;
      font-size: var(--bannerSubTitle);
      letter-spacing: -0.5px;
    }

    button {
      width: 45px;
      height: 45px;
      background-color: transparent;
      border: none;
      color: var(--primary);
      cursor: pointer;
      font-size: 32px;
      display: flex;
      margin-top: 30px;
    }
  }
`;
