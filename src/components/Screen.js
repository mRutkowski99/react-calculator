import styles from "./Screen.module.css";

const Screen = (props) => {
  return (
    <div className={styles.screen}>
      <span>{props.operation}</span>
      <span>{props.value}</span>
    </div>
  );
};

export default Screen;
