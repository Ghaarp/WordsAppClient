import React from "react";
import classes from "../styles/footer.module.css";
import { getClass } from "../../utils/cssClasses";

const Footer = ({ className, children }) => {
  return (
    <div className={getClass([className, classes.footerContainer])}>
      <div>Ghaarp 2022</div>
      <div>The words app</div>
    </div>
  );
};

export default Footer;
