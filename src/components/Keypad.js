import styles from "./Keypad.module.css";

import Button from "./UI/Button";

const Keypad = (props) => {
  return (
    <div className={styles.keypad}>
      <Button config={{ type: "number", val: "7" }} onClick={props.onClick} />

      <Button config={{ type: "number", val: "8" }} onClick={props.onClick} />

      <Button config={{ type: "number", val: "9" }} onClick={props.onClick} />

      <Button
        specialStyle="btn--secondary"
        config={{ type: "action", val: "DEL" }}
        onClick={props.onClick}
      />

      <Button config={{ type: "number", val: "4" }} onClick={props.onClick} />

      <Button config={{ type: "number", val: "5" }} onClick={props.onClick} />

      <Button config={{ type: "number", val: "6" }} onClick={props.onClick} />

      <Button
        config={{ type: "operation", val: "+" }}
        onClick={props.onClick}
      />

      <Button config={{ type: "number", val: "1" }} onClick={props.onClick} />

      <Button config={{ type: "number", val: "2" }} onClick={props.onClick} />

      <Button config={{ type: "number", val: "3" }} onClick={props.onClick} />

      <Button
        config={{ type: "operation", val: "-" }}
        onClick={props.onClick}
      />

      <Button config={{ type: "number", val: "." }} onClick={props.onClick} />

      <Button config={{ type: "number", val: "0" }} onClick={props.onClick} />

      <Button
        config={{ type: "operation", val: "/" }}
        onClick={props.onClick}
      />

      <Button
        config={{ type: "operation", val: "x" }}
        onClick={props.onClick}
      />

      <Button
        config={{ type: "action", val: "RESET" }}
        onClick={props.onClick}
        style={{ gridColumn: "1 / span 2" }}
        specialStyle="btn--secondary"
      />

      <Button
        config={{ type: "action", val: "=" }}
        onClick={props.onClick}
        style={{ gridColumn: "3 / -1" }}
        specialStyle="btn--tertiary"
      />
    </div>
  );
};

export default Keypad;
