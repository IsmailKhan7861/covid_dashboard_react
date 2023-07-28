import styles from "./Button.module.css";

const Button = ({ className, children }) => {
  const classes = `${styles.button} ${className}`;
  return <div className={classes}>{children}</div>;
};

export default Button;
