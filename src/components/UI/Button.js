import styles from "./Button.module.css";

const Button = (props) => {
  const btnStyles = props.specialStyle
    ? `${styles.btn} ${styles[props.specialStyle]}`
    : `${styles.btn}`;

  const clickHandler = () => {
    props.onClick(props.config);
  };

  return (
    <button style={props.style} className={btnStyles} onClick={clickHandler}>
      {props.config.val}
    </button>
  );
};

export default Button;
