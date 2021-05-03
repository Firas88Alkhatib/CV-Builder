import { Text, View, StyleSheet } from "@react-pdf/renderer";
import expTime from "../Utils";

const styles = StyleSheet.create({
  section: {
    marginVertical: 10,
  },
  subHead: {
    alignSelf: "center",
    paddingVertical: 3,
    fontSize: 10,
    fontWeight: 700,
    margin: 5,
  },
  description: {
    lineHeight: "1.3",
    marginLeft: 20,
    color: "#383838",
    textAlign: "justify",
  },
});

interface InfoSectionProps {
  subject?: string;
  place?: string;
  city?: string;
  startDate?: Date | string | null;
  endDate?: Date | string | null;
  description?: string;
}
const InfoSection = ({ subject, place, city, startDate, endDate, description }: InfoSectionProps) => {
  return (
    <View style={styles.section}>
      <View>
        <Text>{`${subject} ${place && "At"} ${place} ${city && "-"} ${city}`}</Text>
        <View style={styles.subHead} wrap>
          <Text>{(startDate || endDate) && expTime(startDate, endDate)}</Text>
        </View>
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default InfoSection;
