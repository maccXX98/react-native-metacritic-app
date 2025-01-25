import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  header: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "800",
    marginVertical: 20,
    fontFamily: "Helvetica",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 12,
    marginBottom: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardContent: {
    padding: 16,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFFFFF",
    flex: 1,
  },
  platform: {
    fontSize: 14,
    color: "#4CAF50",
    backgroundColor: "#2D2D2D",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  genreContainer: {
    alignSelf: "flex-start",
    backgroundColor: "#3F51B5",
    borderRadius: 4,
    marginBottom: 12,
  },
  genre: {
    fontSize: 12,
    color: "#FFFFFF",
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  description: {
    fontSize: 14,
    color: "#BDBDBD",
    lineHeight: 20,
    marginBottom: 12,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  releaseDate: {
    fontSize: 12,
    color: "#757575",
    fontStyle: "italic",
  },
  developer: {
    fontSize: 12,
    color: "#4CAF50",
    fontWeight: "600",
  },
  errorText: {
    color: "#FF5252",
    fontSize: 18,
    textAlign: "center",
    padding: 20,
  },
});
