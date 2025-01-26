import { baseStyles } from "./styles.base";

export const styles = {
  container: {
    ...baseStyles.container,
    minHeight: "100vh",
  },
  loadingContainer: {
    ...baseStyles.loadingContainer,
    minHeight: "100vh",
  },
  listContent: {
    ...baseStyles.listContent,
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  header: {
    ...baseStyles.header,
    fontSize: "2.5rem",
    margin: "2rem 0",
  },
  card: {
    ...baseStyles.card,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.2s, box-shadow 0.2s",
    ":hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 6px 8px rgba(0, 0, 0, 0.4)",
    },
  },
  image: {
    ...baseStyles.image,
    height: "auto",
    aspectRatio: "16/9",
    objectFit: "cover",
  },
  cardContent: {
    ...baseStyles.cardContent,
    padding: "1.5rem",
  },
  titleContainer: {
    ...baseStyles.titleContainer,
  },
  title: {
    ...baseStyles.title,
    fontSize: "1.4rem",
    lineHeight: "1.6rem",
  },
  platform: {
    ...baseStyles.platform,
    fontSize: "0.9rem",
    display: "inline-block",
    verticalAlign: "middle",
  },
  genreContainer: {
    ...baseStyles.genreContainer,
    display: "inline-block",
  },
  genre: {
    ...baseStyles.genre,
    fontSize: "0.85rem",
  },
  description: {
    ...baseStyles.description,
    fontSize: "1rem",
    lineHeight: "1.6rem",
  },
  footer: {
    ...baseStyles.footer,
  },
  releaseDate: {
    ...baseStyles.releaseDate,
    fontSize: "0.9rem",
  },
  developer: {
    ...baseStyles.developer,
    fontSize: "0.9rem",
  },
  errorText: {
    ...baseStyles.errorText,
    fontSize: "1.5rem",
  },
};
