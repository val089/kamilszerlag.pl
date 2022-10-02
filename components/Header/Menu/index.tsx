import { useMediaQuery } from '../../../hooks/useMediaQuery';
import classes from './Menu.module.scss';
import { GithubIcon } from '../../../assets/icons/GithubIcon';
import { LinkedinIcon } from '../../../assets/icons/LinkedinIcon';

export const linksData = [
  {
    label: 'Home',
    to: '#home-section',
  },
  {
    label: 'Skills',
    to: '#skills-section',
  },
  {
    label: 'Portfolio',
    to: '#portfolio-section',
  },
  // {
  //   label: 'Contact',
  //   to: '#contact-section',
  // },
];

type MenuProps = {
  opened: boolean;
};

export const Menu = ({ opened }: MenuProps) => {
  const isMobile = useMediaQuery('(max-width: 800px)');

  return (
    <nav className={`${classes.menu} ${isMobile && opened ? classes.menu_opened : ''}`}>
      <ul className={classes.menu_item_list}>
        {linksData.map((link) => (
          <li className={classes.menu_item} key={link.label}>
            <a className={`${classes.menu_link} home-section`} href={link.to}>
              {link.label}
            </a>
          </li>
        ))}

        <li className={`${classes.menu_item} ${classes.menu_item_social}`}>
          <a
            className={`${classes.menu_link} ${classes.menu_link_social}`}
            href="https://github.com/val089"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className={classes.menu_icon} />
          </a>
          <a
            className={`${classes.menu_link} ${classes.menu_link_social}`}
            href="https://www.linkedin.com/in/kamil-szerlag/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className={classes.menu_icon} />
          </a>
        </li>
      </ul>
    </nav>
  );
};
