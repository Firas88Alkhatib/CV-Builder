import { Font, Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import ApplicationState from "../../Types/ApplicationState";
import InfoSection from "./Components/InfoSection";
import Details from "./Components/Details";

//register font
// Font.register({
//   family: "abhayalibre",
//   fontWeight: "bold",
//   src: "http://fonts.gstatic.com/s/merriweather/v15/RFda8w1V0eDZheqfcyQ4EInF5uFdDttMLvmWuJdhhgs.ttf",
// });
// Font.register({
//   family: "noto-serif",
//   fontWeight: "bold",
//   src: "fonts/noto-serif.ttf",
// });
Font.registerHyphenationCallback((word) => [word]);
// Create styles
const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 35,
    paddingBottom: 30,
  },
  section: {
    marginVertical: 10,
  },
  infos: {
    flex: 70,
    backgroundColor: "#ffffff ",
    fontSize: 12,
    paddingHorizontal: 35,
  },
  head: {
    fontSize: 17,
    marginBottom: 5,
    fontWeight: "bold",
  },

  description: {
    lineHeight: "1.3",
    marginLeft: 10,
    color: "#383838",
    textAlign: "justify",
  },
  footer: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    fontSize: 12,
    bottom: 0,
    left: 0,
    right: 0,
    height: 31,
  },
  header: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    fontSize: 12,
    top: 0,
    left: 0,
    right: 0,
    height: 36,
  },
});

const PDFTemplate = ({ state, color }: { color: string; state: ApplicationState }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        {state.personalDetails && (
          <Details
            color={color}
            languages={state.languages}
            personalDetails={state.personalDetails}
            skills={state.skills}
            links={state.links}
          ></Details>
        )}
        <View style={styles.infos}>
          <View style={styles.section}>
            <Text style={styles.head}>{state.personalDetails.about && "Profile"}</Text>
            <Text style={styles.description}>{state.personalDetails.about}</Text>
          </View>
          <View>
            <Text style={styles.head}>{state.employmentHistory.length !== 0 && "Employment History"}</Text>
            <View style={{ marginBottom: 30 }}>
              {state.employmentHistory.map((item, index) => (
                <InfoSection
                  key={index}
                  subject={item.jobTitle}
                  place={item.employer}
                  city={item.city}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  description={item.description}
                />
              ))}
            </View>
          </View>
          <View>
            <Text style={styles.head}>{state.educations.length !== 0 && "Education"}</Text>
            <View>
              {state.educations.map((item, index) => (
                <InfoSection
                  key={index}
                  subject={item.degree}
                  place={item.school}
                  city={item.city}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  description={item.description}
                />
              ))}
            </View>
          </View>
        </View>
        <View style={styles.header} fixed>
          <View style={{ flex: 30, paddingHorizontal: 30.5, backgroundColor: color, height: "100%" }}></View>
          <View style={{ flex: 70, paddingHorizontal: 36, backgroundColor: "#ffffff", height: "100%" }}></View>
        </View>
        <View style={styles.footer} fixed>
          <View style={{ flex: 30, paddingHorizontal: 30.5, backgroundColor: color, height: "100%" }}></View>
          <View style={{ flex: 70, paddingHorizontal: 36, backgroundColor: "#ffffff", height: "100%" }}></View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFTemplate;
