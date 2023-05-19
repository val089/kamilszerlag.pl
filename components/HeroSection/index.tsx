import Lottie from 'lottie-react';
import { GithubIcon } from '@app/assets/icons/GithubIcon';
import { LinkedinIcon } from '../../assets/icons/LinkedinIcon';
import classes from './HeroSection.module.scss';
import laptopLottie from './laptopLottie.json';
// import Image from 'next/image';
// import MyImg from '../../assets/images/me.png';

export const HeroSection = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.hero_wrap}>
        <div className={classes.hero_about_me}>
          <h3 className={classes.hero_greetings}>{`Hi, I'm Kamil`}</h3>
          <h1 className={classes.hero_main_title}>
            <strong>FRONTEND DEVELOPER</strong>
          </h1>
          <h2 className={classes.hero_second_title}>
            <strong>WITH SOME DESIGN SKILLS</strong>
          </h2>
          <p className={classes.hero_description}>
            Have some project idea and in need of a developer? Would like to do a collab or have a
            job offer? Do not hesitate to contact me.
          </p>
          {/* <div className={classes.hero_btn_container} style={{ display: 'flex' }}>
            <a className={classes.hero_btn} href="#contact-section">
              Contact me
            </a>
          </div> */}
          <div className={classes.hero_social}>
            <a
              className={classes.hero_social_link}
              href="https://github.com/val089"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className={classes.hero_icon} />
            </a>
            <a
              className={classes.hero_social_link}
              href="https://www.linkedin.com/in/kamil-szerlag/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className={classes.hero_icon} />
            </a>
          </div>
        </div>

        <div className={classes.hero_photo_container}>
          <Lottie animationData={laptopLottie} loop={true} autoplay={true} />;
        </div>
      </div>
    </section>
  );
};
