import { GithubIcon } from '../../assets/icons/GithubIcon';
import { LinkedinIcon } from '../../assets/icons/LinkedinIcon';
import classes from './Footer.module.scss';
import menuClasses from '../Header/Menu/Menu.module.scss';

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer_item}>
        {/* <a className="footer__download-btn" href="kamil-szerlag-cv-en.pdf" download>
          Download Resume
        </a> */}
      </div>
      <div className={`${classes.footer_item} ${classes.footer_item_column}`}>
        <nav className={`${menuClasses.menu} ${classes.footer_menu}`}>
          <ul className={menuClasses.menu_item_list}>
            <li className={menuClasses.menu_item}>
              <a className={`${menuClasses.menu_link} home-section`} href="#home-section">
                Home
              </a>
            </li>
            <li className={menuClasses.menu_item}>
              <a className={`${menuClasses.menu_link} skills-section`} href="#skills-section">
                Skills
              </a>
            </li>
            <li className={menuClasses.menu_item}>
              <a className={`${menuClasses.menu_link} portfolio-section`} href="#portfolio-section">
                Portfolio
              </a>
            </li>
            {/* <li className={menuClasses.menu_item}>
              <a className={`${menuClasses.menu_link} contact-section`} href="#contact-section">
                Contact
              </a>
            </li> */}
          </ul>
        </nav>
        <p className={classes.footer_cpryt}>&copy; 2021 Kamil Szerląg. All rights reserved</p>
      </div>

      <div className={`${classes.footer_item} ${classes.footer_item_social}`}>
        <a
          className={classes.footer_social_link}
          href="https://github.com/val089"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className={classes.footer_icon} />
        </a>
        <a
          className={classes.footer_social_link}
          href="https://www.linkedin.com/in/kamil-szerlag/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon className={classes.footer_icon} />
        </a>
      </div>
    </footer>
  );
};
