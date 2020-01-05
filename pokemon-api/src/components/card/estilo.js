import styled from "styled-components";

export const Cards = styled.div`
  position: relative;
  width: 80%;
  height: auto;
  margin: 40px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .card {
    position: relative;
    width: calc(100% / 6 - 20px);
    min-width: 150px;
    margin-top: 20px;
    margin-right: 20px;
    padding: 20px 10px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    transition: all 0.3s linear;
    box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);

    &:hover {
      transition: all 0.3s linear;
      transform: scale(1.3);
      z-index: 999;
    }
  }

  .header-img {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);

    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }

  .number {
    margin-top: 10px;
    padding: 5px 20px;
    border-radius: 20px;
    background: #e5dcdc;

    h3 {
      font-size: 12px;
      margin: 0px;
    }
  }

  .body-card {
    margin: 20px 0px;
    h3 {
      margin: 0px;
      text-transform: uppercase;
    }
  }
  .tipo {
    h3 {
      margin: 0px;
      font-size: 14px;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 90%;

    .card {
      width: calc(100% / 5 - 20px);
    }
  }

  @media screen and (max-width: 425px) {
    width: 90%;
    justify-content: center;

    .card {
      width: calc(100% / 5 - 20px);
    }
  }
`;
