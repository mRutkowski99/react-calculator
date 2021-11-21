import { useReducer } from "react";

import Keypad from "./components/Keypad";
import Screen from "./components/Screen";

const initialState = {
  firstValue: "",
  secondValue: "",
  operation: "",
  display: 0,
};

const reducerFn = (state, action) => {
  if (action.type === "UPDATE_FIRST") {
    if (state.firstValue === "0" && action.value === "0") return state;

    return {
      firstValue: state.firstValue + action.value,
      secondValue: state.secondValue,
      operation: state.operation,
      display: state.firstValue + action.value,
    };
  }

  if (action.type === "UPDATE_OPERATION") {
    return {
      firstValue: state.firstValue,
      secondValue: state.secondValue,
      operation: action.value,
      display: state.display,
    };
  }

  if (action.type === "UPDATE_SECOND") {
    if (state.secondValue === "0" && action.value === "0") return state;

    return {
      firstValue: state.firstValue,
      secondValue: state.secondValue + action.value,
      operation: state.operation,
      display: state.secondValue + action.value,
    };
  }

  if (action.type === "CALCULATE") {
    let result;
    if (state.operation === "+")
      result = +state.firstValue + +state.secondValue;
    if (state.operation === "-")
      result = +state.firstValue - +state.secondValue;
    if (state.operation === "x")
      result = +state.firstValue * +state.secondValue;
    if (state.operation === "/")
      result = +state.firstValue / +state.secondValue;

    return {
      firstValue: result.toString(),
      secondValue: "",
      operation: action.value ? action.value : "",
      display: result.toString(),
    };
  }

  if (action.type === "DELETE") {
    if (state.firstValue === state.display) {
      return {
        firstValue:
          state.firstValue.length > 1 ? state.firstValue.slice(0, -1) : "0",
        secondValue: state.secondValue,
        operation: state.operation,
        display: state.display.length > 1 ? state.display.slice(0, -1) : "0",
      };
    } else {
      return {
        firstValue: state.firstValue,
        secondValue:
          state.secondValue.length > 1 ? state.secondValue.slice(0, -1) : "0",
        operation: state.operation,
        display: state.display.length > 1 ? state.display.slice(0, -1) : "0",
      };
    }
  }

  if (action.type === "RESET") {
    return initialState;
  }

  return state;
};

function App() {
  const [calculator, dispatchCalculator] = useReducer(reducerFn, initialState);

  const keypadClickHandler = (config) => {
    if (config.type === "number" && !calculator.operation) {
      dispatchCalculator({ type: "UPDATE_FIRST", value: config.val });
    }

    if (config.type === "number" && calculator.operation) {
      dispatchCalculator({ type: "UPDATE_SECOND", value: config.val });
    }

    if (config.type === "operation" && !calculator.secondValue) {
      dispatchCalculator({ type: "UPDATE_OPERATION", value: config.val });
    }

    if (config.type === "operation" && calculator.secondValue) {
      dispatchCalculator({ type: "CALCULATE", value: config.val });
    }

    if (config.val === "=") {
      dispatchCalculator({ type: "CALCULATE" });
    }

    if (config.val === "DEL") {
      dispatchCalculator({ type: "DELETE" });
    }

    if (config.val === "RESET") {
      dispatchCalculator({ type: "RESET" });
    }
  };

  console.log(calculator);

  return (
    <>
      <Screen operation={calculator.operation} value={calculator.display} />
      <Keypad onClick={keypadClickHandler} />
    </>
  );
}

export default App;
