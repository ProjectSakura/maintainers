import React from 'react';
import { Link } from 'react-router-dom';
import style from './footer.module.css';
import image from './sakura_footer.svg';

const Footer = () => (
  <>
    <footer className={style.footer}>
      <div className={style['info-span']}>
        <img src={image} alt="img" height="60px" width="260px" className={style['footer-img']} />
        <p>Project Sakura is a fully free and Opensource Custom ROM built around LineageOS.</p>
      </div>
      <ul className={style['footer-nav']}>
        <li className={style['nav-item']}>
          <h2 className={style['nav-title']}>NAVIGATION</h2>

          <ul className={style['nav-ul']}>
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

        <li className={style['nav-item']}>
          <h2 className={style['nav-title']}>
            Sponsored by
          </h2>
          <ul ul className={style['nav-ul']}>
            <li>
              <p>
                <a href="https://xsl.tel">
                  <img src="https://projectsakura.xyz/image/spon-white.png" alt="sponsor logo" />
                </a>
              </p>
            </li>
          </ul>
          <h2 className={style['nav-title']}>SOCIAL</h2>
          <ul className={style['nav-ul']}>
            <li><p>Be sure to give us a follow on: </p></li>
          </ul>
          <div className={`col ${style.col}`}>
            <ul className={style.social}>
              <li>
                <a
                  href="https://telegram.me/ProjectSakura"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-telegram fa-2x" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/ProjectSakura_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter fa-2x" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ProjectSakura"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github fa-2x" />
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </footer>
  </>
);
export default Footer;
