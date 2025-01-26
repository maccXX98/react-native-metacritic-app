import { StyleSheet } from "react-native";
import { baseStyles } from "./styles.base";

export const styles = StyleSheet.create({
  container: {
    ...baseStyles.container,
    flex: 1,
  },
  loadingContainer: {
    ...baseStyles.loadingContainer,
    flex: 1,
  },
  listContent: {
    ...baseStyles.listContent,
    paddingHorizontal: 16,
  },
  header: {
    ...baseStyles.header,
    fontSize: 28,
    marginVertical: 20,
  },
  card: {
    ...baseStyles.card,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    ...baseStyles.image,
    height: 200,
  },
  cardContent: {
    ...baseStyles.cardContent,
  },
  titleContainer: {
    ...baseStyles.titleContainer,
  },
  title: {
    ...baseStyles.title,
    fontSize: 20,
  },
  platform: {
    ...baseStyles.platform,
    fontSize: 14,
  },
  genreContainer: {
    ...baseStyles.genreContainer,
  },
  genre: {
    ...baseStyles.genre,
    fontSize: 12,
  },
  description: {
    ...baseStyles.description,
    fontSize: 14,
  },
  footer: {
    ...baseStyles.footer,
  },
  releaseDate: {
    ...baseStyles.releaseDate,
    fontSize: 12,
  },
  developer: {
    ...baseStyles.developer,
    fontSize: 12,
  },
  errorText: {
    ...baseStyles.errorText,
    fontSize: 18,
  },
});
