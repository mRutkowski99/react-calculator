import styles from "./Keypad.module.css";

import Button from "./UI/Button";

const Keypad = () => {
  return (
    <section className={styles.keyboard}>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button specialStyle="btn--secondary">DEL</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>+</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>-</Button>
      <Button>.</Button>
      <Button>0</Button>
      <Button>/</Button>
      <Button>x</Button>
      <Button
        style={{ gridColumn: "1 / span 2" }}
        specialStyle="btn--secondary"
      >
        RESET
      </Button>
      <Button style={{ gridColumn: "3 / -1" }} specialStyle="btn--tertiary">
        =
      </Button>
    </section>
  );
};

export default Keypad;
