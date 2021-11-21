import styles from "./Button.module.css";

const Button = (props) => {
  const btnStyles = props.specialStyle
    ? `${styles.btn} ${styles[props.specialStyle]}`
    : `${styles.btn}`;

  return (
    <button style={props.style} className={btnStyles} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
