import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

export default ({ onPress, text, size, theme, orient }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (orient === "portrait") {
    buttonStyles.push(styles.buttonPort);
    if (size === "doublePort") {
      buttonStyles.push(styles.buttonDoublePort);
    }
  } else if (orient === "landscape") {
    buttonStyles.push(styles.buttonLand);
    if (size === "doubleLand") {
      buttonStyles.push(styles.buttonDoubleLand);
    }
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

const screen = Dimensions.get("window");
const buttonWidthPort = screen.width / 4;
const buttonWidthLand = screen.width / 8;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333333",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: buttonWidthPort,
    margin: 5,
  },
  text: {
    color: "#fff",
    fontSize: 30,
  },
  textSecondary: {
    color: "#060606",
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6",
  },
  buttonAccent: {
    backgroundColor: "#ffc107",
  },
  buttonPort: {
    height: buttonWidthPort - 10,
  },
  buttonDoublePort: {
    backgroundColor: "red",
    width: buttonWidthPort * 2 - 10,
    flex: 0,
  },
  buttonLand: {
    height: buttonWidthLand - 10,
  },
  buttonDoubleLand: {
    backgroundColor: "red",
    width: buttonWidthLand * 8 - 35,
    flex: 0,
  },
});
