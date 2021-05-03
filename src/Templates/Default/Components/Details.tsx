import { Link, Text, View, StyleSheet } from "@react-pdf/renderer";
import Language from "../../../Types/Language";
import ILink from "../../../Types/link";
import PersonalDetails from "../../../Types/PersonalDetails";
import Skill from "../../../Types/Skill";
import LanguageCom from "./LangaugeCom";
import SkillCom from "./SkillCom";

const styles = StyleSheet.create({
  name: {
    fontSize: "2.5vw",
    // fontFamily: "abhayalibre",
  },
  personalDetails: {
    paddingHorizontal: 30,
    flex: 30,
    fontSize: 10,
    color: "white",
    lineHeight: 2,
  },
  birth: {
    color: "#808080",
    fontSize: 8,
    alignSelf: "center",
  },
  details: {
    alignSelf: "center",
    fontSize: 14,
    fontWeight: 700,
  },
  head: { alignSelf: "center", fontSize: 14, fontWeight: 700 },
});

interface DetailsProps {
  personalDetails: PersonalDetails;
  skills: Skill[];
  links: ILink[];
  languages: Language[];
  color: string;
}
const Details = ({ personalDetails, skills, links, languages, color }: DetailsProps) => {
  return (
    <View style={{ ...styles.personalDetails, backgroundColor: color }}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.name}>{`${personalDetails?.firstName} ${personalDetails?.lastName}`}</Text>
        <Text>{personalDetails.jobTitle}</Text>
        <View style={{ width: "80%", marginBottom: 10, height: 1, backgroundColor: "white" }}></View>
      </View>
      <Text style={styles.details}>
        {Object.entries((({ firstName, lastName, jobTitle, ...rest }) => rest)(personalDetails)).filter(([k, v]) => !!v)
          .length !== 0 && "Details"}
      </Text>
      <Text>{personalDetails.address}</Text>
      <Text>{`${personalDetails.city}${personalDetails.city && personalDetails.postalCode && ", "}${personalDetails.postalCode
        }`}</Text>
      <Text>{personalDetails.country}</Text>
      <Text>{personalDetails.phoneNumber}</Text>
      <Text>{personalDetails.email}</Text>
      <Text style={styles.birth}>{personalDetails.dateOfBirth && "DATE OF BIRTH"}</Text>
      <Text>{personalDetails.dateOfBirth}</Text>
      {skills.length !== 0 && <SkillCom skills={skills} />}
      {languages.length !== 0 && <LanguageCom Languages={languages} />}
      <View>
        <Text style={styles.head}>{links.length !== 0 && "Links"}</Text>
        {links.map((link, index) => (
          <Link key={index} src={link.link}>
            {link.name}
          </Link>
        ))}
      </View>
    </View>
  );
};

export default Details;
