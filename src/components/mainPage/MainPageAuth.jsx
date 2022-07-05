import React, { useContext } from "react";
import classes from "./styles/main.module.css";
import MainPageButton from "./MainPageButton";
import imgCreate from "../../assets/button/plus32.png";
import imgList from "../../assets/button/list32.png";
import imgTest from "../../assets/button/test32.png";
import { useNavigate } from "react-router-dom";
import { CREATE_ROUTE } from "../../utils/consts";
import { Context } from "../../index";

const MainPageAuth = () => {
  const { translationResult } = useContext(Context);

  const navigate = useNavigate();

  const createNewCard = () => {
    if (!translationResult) return;
    translationResult.reset();
    navigate(CREATE_ROUTE);
  };

  return (
    <div className={classes.mainPageAuth}>
      <h1>Теперь вы можете:</h1>
      <div className={classes.buttonContainer}>
        <MainPageButton imgSource={imgCreate} onClick={createNewCard}>
          <h5>Создать карточку</h5>
        </MainPageButton>
        <MainPageButton imgSource={imgList}>
          <h5>Просмотреть карточки</h5>
        </MainPageButton>
        <MainPageButton imgSource={imgTest}>
          <h5>
            Пройти
            <br />
            тест
          </h5>
        </MainPageButton>
      </div>
    </div>
  );
};

export default MainPageAuth;
