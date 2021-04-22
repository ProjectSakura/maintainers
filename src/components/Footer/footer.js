import React from "react";
import { Link } from "react-router-dom";
import style from "./footer.module.css";
import image from "./sakura_footer.svg";

const Footer = () => {
  return (
    <>
      <footer className={style["footer"]}>
        <div className={style["info-span"]}>
        <img src={image} alt="img" height="60px" width="260px" className={style["footer-img"]}/>
        <p>Project Sakura is a fully free and Opensource Custom ROM built around LineageOS.</p>
        </div>
        <ul className={style["footer-nav"]}>
          <li className={style["nav-item"]}>
            <h2 className={style["nav-title"]}>NAVIGATION</h2>

            <ul className={style["nav-ul"]}>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/blog.html">Blog</Link>
              </li>

              <li>
                <Link to="/download.html">Download Now</Link>
              </li>

              <li>
                <Link to="/stats.html">Stats</Link>
              </li>
            </ul>
          </li>

          <li className={style["nav-item"]}>
            <h2 className={style["nav-title"]}>SOCIAL</h2>
            <ul className={style["nav-ul"]}>
              <li><p>Be sure to give us a follow on: </p></li>
            </ul>
            <div className={`col ${style["col"]}`}>
              <ul className={style["social"]}>
                <li>
                  <a
                    href="https://telegram.me/ProjectSakura"
                    target="_blank"
                    rel="noopener noreferrer"
                  ><i class="fa fa-telegram fa-2x"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/ProjectSakura_"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <i class="fa fa-twitter fa-2x"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/ProjectSakura"
                    target="_blank"
                    rel="noopener noreferrer"
                  ><i class="fa fa-github fa-2x"></i>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className={style["footer-dash"]}>
          <div className={style["footer-text"]}> 
            <p>
              <b style={{color:"white"}}>Made with <i class="fa fa-heart" style={{ color: "#DB3328" }}></i> by
              Team Sakura</b>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer
