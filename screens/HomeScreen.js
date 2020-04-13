import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import { BoxValue } from "../components/StyledText";
import moment from "moment";

export default function HomeScreen() {
  const [data, setData] = React.useState(null);

  console.log(data);

  React.useEffect(() => {
    if (!data) {
      axios
        .get("https://covid19.mathdro.id/api/countries/indonesia")
        .then(function (response) {
          setData(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Kasus Persebaran COVID-19</Text>
          <Text style={styles.subTitle}>di Indonesia</Text>
        </View>

        <View style={styles.contentWrapper}>
          <View tyle={styles.case}>
            <BoxValue
              condiiton="positif"
              value={data && data.confirmed.value}
              index="Posiif"
            />
            <BoxValue
              condiiton="sembuh"
              value={data && data.recovered.value}
              index="Sembuh"
            />
            <BoxValue
              condiiton="meninggal"
              value={data && data.deaths.value}
              index="Meninggal"
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          Pembaruan terakhir : {moment(data && data.lastUpdate).format("LL")}
        </Text>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  titleWrapper: {
    marginHorizontal: 32,
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: "600",
    color: "#000",
    fontFamily: "poppins-semibold",
  },
  subTitle: {
    fontSize: 14,
    color: "#C3C3C3",
    marginTop: 8,
  },
  case: {
    width: "auto",
  },
  contentWrapper: {
    display: "flex",
    flex: 2,
    flexDirection: "row",
    marginTop: 30,
    marginHorizontal: 32,
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  contentContainer: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  tabBarInfoContainer: {
    position: "absolute",
    paddingVertical: 10,
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 12,
    color: "#C3C3C3",
    textAlign: "center",
    fontFamily: "poppins-regular",
    fontStyle: "italic",
    fontWeight: "400",
  },
});
