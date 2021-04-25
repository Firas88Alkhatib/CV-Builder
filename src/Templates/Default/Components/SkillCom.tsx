import Skill from "../../../Types/Skill";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  skillOuterBar: {
    backgroundColor: "#47B68E",
    width: "100%",
    marginBottom: 10,
  },
  skillInnerBar: {
    border: 2,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
  main: { lineHeight: "1.3" },
  head: { alignSelf: "center", fontSize: 14, fontWeight: 700 },
});
const SkillCom = ({ skills }: { skills: Skill[] }) => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={styles.head}>{"Skills"}</Text>
      <View>
        {skills.map((skill, index) => (
          <View key={index} style={styles.main}>
            <Text>{skill.name}</Text>
            <View style={styles.skillOuterBar}>
              <View style={[styles.skillInnerBar, { width: `${skill.value! * 25}%` }]}></View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
export default SkillCom;
