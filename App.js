import React, { Component, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import Button from "./components/Button";
import Row from "./components/Row";
import calculator, { initialState } from "./util/calculator";

const App = () => {
  const [appState, setAppState] = useState(initialState);
  const { height, width } = useWindowDimensions();
  const isLandscape = width > height;

  const HandleTap = (type, value) => {
    setAppState((state) => calculator(type, value, state));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.value}>
        {parseFloat(appState.currentValue).toLocaleString()}
      </Text>

      <View>
        {/* Landscape View */}
        {isLandscape && (
          <View>
            <Row>
              <Button
                text="C"
                theme="secondary"
                orient="landscape"
                onPress={() => HandleTap("clear")}
              />

              <Button
                text="+/-"
                theme="secondary"
                orient="landscape"
                onPress={() => HandleTap("posneg")}
              />

              <Button
                text="%"
                theme="secondary"
                orient="landscape"
                onPress={() => HandleTap("percentage")}
              />

              <Button
                text="/"
                theme="accent"
                orient="landscape"
                onPress={() => HandleTap("operator", "/")}
              />
            </Row>

            <Row>
              <Button
                text="7"
                orient="landscape"
                onPress={() => HandleTap("number", 7)}
              />
              <Button
                text="8"
                orient="landscape"
                onPress={() => HandleTap("number", 8)}
              />
              <Button
                text="9"
                orient="landscape"
                onPress={() => HandleTap("number", 9)}
              />
              <Button
                text="X"
                theme="accent"
                orient="landscape"
                onPress={() => HandleTap("operator", "*")}
              />
            </Row>

            <Row>
              <Button
                text="4"
                orient="landscape"
                onPress={() => HandleTap("number", 4)}
              />
              <Button
                text="5"
                orient="landscape"
                onPress={() => HandleTap("number", 5)}
              />
              <Button
                text="6"
                orient="landscape"
                onPress={() => HandleTap("number", 6)}
              />
              <Button
                text="-"
                theme="accent"
                orient="landscape"
                onPress={() => HandleTap("operator", "-")}
              />
            </Row>

            <Row>
              <Button
                text="1"
                orient="landscape"
                onPress={() => HandleTap("number", 1)}
              />
              <Button
                text="2"
                orient="landscape"
                onPress={() => HandleTap("number", 2)}
              />
              <Button
                text="3"
                orient="landscape"
                onPress={() => HandleTap("number", 3)}
              />
              <Button
                text="+"
                theme="accent"
                orient="landscape"
                onPress={() => HandleTap("operator", "+")}
              />
            </Row>

            <Row>
              <Button
                text="0"
                orient="landscape"
                onPress={() => HandleTap("number", 0)}
              />
              <Button
                text="."
                orient="landscape"
                onPress={() => HandleTap("number", ".")}
              />
              <Button
                text="="
                theme="primary"
                size="doubleLand"
                orient="landscape"
                onPress={() => HandleTap("equal", "=")}
              />
            </Row>
          </View>
        )}
        {/* Portrait View */}
        {!isLandscape && (
          <View>
            <Row>
              <Button
                text="C"
                theme="secondary"
                orient="portrait"
                onPress={() => HandleTap("clear")}
              />

              <Button
                text="+/-"
                theme="secondary"
                orient="portrait"
                onPress={() => HandleTap("posneg")}
              />

              <Button
                text="%"
                theme="secondary"
                orient="portrait"
                onPress={() => HandleTap("percentage")}
              />

              <Button
                text="/"
                theme="accent"
                orient="portrait"
                onPress={() => HandleTap("operator", "/")}
              />
            </Row>

            <Row>
              <Button
                text="7"
                orient="portrait"
                onPress={() => HandleTap("number", 7)}
              />
              <Button
                text="8"
                orient="portrait"
                onPress={() => HandleTap("number", 8)}
              />
              <Button
                text="9"
                orient="portrait"
                onPress={() => HandleTap("number", 9)}
              />
              <Button
                text="X"
                theme="accent"
                orient="portrait"
                onPress={() => HandleTap("operator", "*")}
              />
            </Row>

            <Row>
              <Button
                text="4"
                orient="portrait"
                onPress={() => HandleTap("number", 4)}
              />
              <Button
                text="5"
                orient="portrait"
                onPress={() => HandleTap("number", 5)}
              />
              <Button
                text="6"
                orient="portrait"
                onPress={() => HandleTap("number", 6)}
              />
              <Button
                text="-"
                theme="accent"
                orient="portrait"
                onPress={() => HandleTap("operator", "-")}
              />
            </Row>

            <Row>
              <Button
                text="1"
                orient="portrait"
                onPress={() => HandleTap("number", 1)}
              />
              <Button
                text="2"
                orient="portrait"
                onPress={() => HandleTap("number", 2)}
              />
              <Button
                text="3"
                orient="portrait"
                onPress={() => HandleTap("number", 3)}
              />
              <Button
                text="+"
                theme="accent"
                orient="portrait"
                onPress={() => HandleTap("operator", "+")}
              />
            </Row>

            <Row>
              <Button
                text="0"
                orient="portrait"
                onPress={() => HandleTap("number", 0)}
              />
              <Button
                text="."
                orient="portrait"
                onPress={() => HandleTap("number", ".")}
              />
              <Button
                text="="
                theme="primaryPort"
                size="doublePort"
                orient="portrait"
                onPress={() => HandleTap("equal", "=")}
              />
            </Row>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "flex-end",
  },
  value: {
    color: "#fff",
    fontSize: 42,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});

export default App;

// import React, { useState } from "react";
// import {
//   View,
//   StyleSheet,
//   Text,
//   useWindowDimensions,
//   Button,
// } from "react-native";

// const App = () => {
//   const { height, width, scale, fontScale } = useWindowDimensions();
//   const [a, setA] = useState(0);
//   console.log(a);
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Window Dimension Data</Text>
//       <Text>Height: {height}</Text>
//       <Text>Width: {width}</Text>
//       <Text>Font scale: {fontScale}</Text>
//       <Text>Pixel ratio: {scale}</Text>
//       <Button title={a.toString()} onPress={() => setA(a + 1)} />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   header: {
//     fontSize: 20,
//     marginBottom: 12,
//   },
// });

// export default App;
