export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null,
};

export const handleNumber = (value, state) => {
  if (state.currentValue === "0") {
    return { ...state, currentValue: `${value}` };
  }

  return {
    ...state,
    currentValue: `${state.currentValue}${value}`,
  };
};

const handleEqual = (state) => {
  const { currentValue, previousValue, operator } = state;

  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const resetState = { operator: null, previousValue: null };

  switch (operator) {
    case "+":
      return {
        currentValue: `${previous + current}`,
        ...resetState,
      };
    case "-":
      return {
        currentValue: `${previous - current}`,
        ...resetState,
      };
    case "*":
      return {
        currentValue: `${previous * current}`,
        ...resetState,
      };
    case "/":
      return {
        currentValue: `${previous / current}`,
        ...resetState,
      };
    case "^":
      return {
        currentValue: `${Math.pow(previous, current)}`,
        ...resetState,
      };
    default:
      return state;
  }
};

const calculator = (type, value, state) => {
  switch (type) {
    case "number":
      return handleNumber(value, state);
    case "clear":
      return initialState;
    case "posneg":
      return {
        ...state,
        currentValue: `${parseFloat(state.currentValue) * -1}`,
      };
    case "percentage":
      return {
        ...state,
        currentValue: `${parseFloat(state.currentValue) * 0.01}`,
      };
    case "sqrt":
      return {
        ...state,
        currentValue: `${parseFloat(Math.sqrt(state.currentValue))}`,
      };
    case "square":
      return {
        ...state,
        currentValue: `${parseFloat(state.currentValue * state.currentValue)}`,
      };
    case "cube":
      return {
        ...state,
        currentValue: `${parseFloat(
          state.currentValue * state.currentValue * state.currentValue
        )}`,
      };
    case "eulpow":
      return {
        ...state,
        currentValue: `${parseFloat(Math.pow(Math.E, state.currentValue))}`,
      };
    case "sin":
      return {
        ...state,
        currentValue: `${parseFloat(Math.sin(state.currentValue))}`,
      };
    case "sinh":
      return {
        ...state,
        currentValue: `${parseFloat(Math.sinh(state.currentValue))}`,
      };
    case "cos":
      return {
        ...state,
        currentValue: `${parseFloat(Math.cos(state.currentValue))}`,
      };
    case "cosh":
      return {
        ...state,
        currentValue: `${parseFloat(Math.cosh(state.currentValue))}`,
      };
    case "tan":
      return {
        ...state,
        currentValue: `${parseFloat(Math.tan(state.currentValue))}`,
      };
    case "tanh":
      return {
        ...state,
        currentValue: `${parseFloat(Math.tanh(state.currentValue))}`,
      };
    case "abs":
      return {
        ...state,
        currentValue: `${parseFloat(Math.abs(state.currentValue))}`,
      };
    case "operator":
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: "0",
      };
    case "equal":
      return handleEqual(state);
    default:
      return state;
  }
};

export default calculator;
