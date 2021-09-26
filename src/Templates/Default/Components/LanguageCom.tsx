import Language from "../../../Types/Language";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  outerBar: {
    backgroundColor: "#47B68E",
    width: "100%",
    marginBottom: 10,
  },
  innerBar: {
    border: 2,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
  main: { lineHeight: "1.3" },
  head: { alignSelf: "center", fontSize: 14, fontWeight: 700 },
});
const LanguageCom = ({ Languages }: { Languages: Language[] }) => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={styles.head}>{"Languages"}</Text>
      <View>
        {Languages.map((Language, index) => (
          <View key={index} style={styles.main}>
            <Text>{Language.name}</Text>
            <View style={styles.outerBar}>
              <View style={[styles.innerBar, { width: `${Language.value! * 25}%` }]}></View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
export default LanguageCom;
