import classes from './Title.module.scss';

type TitleProps = {
  title: string;
};

export const Title = ({ title }: TitleProps) => {
  return (
    <section className={classes.section_header}>
      <h2 className={classes.section_header_title}>{title}</h2>
      <hr className={classes.section_header_line} />
    </section>
  );
};
