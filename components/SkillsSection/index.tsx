import { CssIcon } from '../../assets/icons/CssIcon';
import { GitIcon } from '../../assets/icons/GitIcon';
import { HtmlIcon } from '../../assets/icons/HtmlIcon';
import { JavaScriptIcon } from '../../assets/icons/JavaScriptIcon';
import { NextJsIcon } from '../../assets/icons/NextJsIcon';
import { PlanetIcon } from '../../assets/icons/PlentIcon';
import { ReactIcon } from '../../assets/icons/ReactIcon';
import { ReduxIcon } from '../../assets/icons/ReduxIcon';
import { ScssIcon } from '../../assets/icons/ScssIcon';
import { TypeScriptIcon } from '../../assets/icons/TypeScriptIcon';
import { Title } from '../Title';
import Lottie from 'lottie-react';
import astronaut from './astronautLottie.json';
import classes from './SkillsSection.module.scss';

// https://icon-sets.iconify.design/logos/typescript-icon/
// https://www.npmjs.com/package/lottie-react

export const SkillsSection = () => {
  return (
    <section className={`${classes.skills} ${classes.section}`} id="skills-section">
      <Title title="My skills" />

      <div className={classes.skills_container}>
        <div className={classes.skills_item}>
          <section className={classes.skills_techs}>
            <div className={classes.skills_description}>
              <PlanetIcon className={classes.skills_planet} />
              <p className={classes.skills_text}>
                Tools and technologies which I use for developing
              </p>
            </div>

            <div className={classes.skills_icons_list}>
              <div className={classes.skills_icon_item}>
                <HtmlIcon className={classes.skills_icon} />
                <p>HTML 5</p>
              </div>
              <div className={classes.skills_icon_item}>
                <JavaScriptIcon className={classes.skills_icon} />
                <p>JavaScript</p>
              </div>
              <div className={classes.skills_icon_item}>
                <CssIcon className={classes.skills_icon} />
                <p>CSS 3</p>
              </div>
              <div className={classes.skills_icon_item}>
                <ScssIcon className={classes.skills_icon} />
                <p>SCSS</p>
              </div>
              <div className={classes.skills_icon_item}>
                <ReactIcon className={classes.skills_icon} />
                <p>React</p>
              </div>
              <div className={classes.skills_icon_item}>
                <TypeScriptIcon className={classes.skills_icon} />
                <p>TypeScript</p>
              </div>
              <div className={classes.skills_icon_item}>
                <ReduxIcon className={classes.skills_icon} />
                <p>Redux/Redux Toolkit</p>
              </div>
              <div className={classes.skills_icon_item}>
                <NextJsIcon className={classes.skills_icon} />
                <p>Next.js</p>
              </div>
              <div className={classes.skills_icon_item}>
                <GitIcon className={classes.skills_icon} />
                <p>Git</p>
              </div>
            </div>
          </section>

          {/* <section className={classes.skills_design}> */}
          {/* <div className={classes.skills_description}> */}
          {/* <PlanetIcon className={classes.skills_planet} /> */}
          {/* <p className={classes.skills_text}>Tools for building layouts and sketchs</p> */}
          {/* </div> */}
          {/* <div className={classes.skills_icons_list}>icons</div> */}
          {/* </section> */}
        </div>
        {/* <div className={classes.skills_lottie}>
          <Lottie animationData={astronaut} loop={true} autoplay={true} />;
        </div> */}
      </div>
    </section>
  );
};
