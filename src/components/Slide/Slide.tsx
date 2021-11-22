import { ArrowRight } from "react-feather";
import classes from "./slide.module.css";

type Children = { children: React.ReactNode; style?: React.CSSProperties };

export function Slide({ children, style }: Children) {
  return (
    <div style={style} className={`${classes.slide} shadow-right`}>
      {children}
    </div>
  );
}

export function Title({ children, style }: Children) {
  return (
    <h2 style={style} className={classes.title}>
      {children}
    </h2>
  );
}

export function Text({ children, style }: Children) {
  return (
    <p style={style} className={classes.text}>
      {children}
    </p>
  );
}

export function LargeText({ children, style }: Children) {
  return (
    <p style={style} className={classes.large_text}>
      {children}
    </p>
  );
}

export function Heading({ children, style }: Children) {
  return (
    <h3 style={style} className={classes.heading}>
      {children}
    </h3>
  );
}

type BulletListProps = Children & { ordered?: boolean };

export function List({ children, style, ordered = false }: BulletListProps) {
  const Comp = ordered ? "ol" : "ul";

  return (
    <Comp style={style} className={classes.bullet_list}>
      {children}
    </Comp>
  );
}

type LinkProps = React.LinkHTMLAttributes<HTMLAnchorElement>;

export function Link({ children, ...props }: LinkProps) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <a className={classes.link} {...props}>
        {children}
      </a>
      <ArrowRight style={{ marginBottom: "-2px" }} />
    </div>
  );
}
