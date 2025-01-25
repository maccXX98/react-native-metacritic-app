import axios from "axios";
// eslint-disable-next-line import/no-unresolved
import { PROXY_URL } from "@env";

export async function getLatestGames() {
  try {
    const response = await axios.get(`${PROXY_URL}/api/games`);
    return response.data.map((game) => ({
      slug: game.id.toString(),
      title: game.title,
      description: game.short_description,
      releaseDate: game.release_date,
      image: game.thumbnail,
      genre: game.genre,
      platform: game.platform,
      publisher: game.publisher,
      developer: game.developer,
      gameUrl: game.game_url,
      profileUrl: game.freetogame_profile_url,
    }));
  } catch (error) {
    console.error("Error fetching games:", error);
    throw new Error("Failed to load games");
  }
}

export async function getGameDetails(slug) {
  try {
    const response = await axios.get(`${PROXY_URL}/api/game/${slug}`);
    const game = response.data;
    return {
      slug: game.id.toString(),
      title: game.title,
      description: game.description,
      releaseDate: game.release_date,
      image: game.thumbnail,
      genre: game.genre,
      platform: game.platform,
      publisher: game.publisher,
      developer: game.developer,
      gameUrl: game.game_url,
      profileUrl: game.freetogame_profile_url,
      minimumRequirements: game.minimum_system_requirements || {},
      screenshots:
        game.screenshots?.map((screenshot) => screenshot.image) || [],
    };
  } catch (error) {
    console.error("Error fetching game details:", error);
    throw new Error("Failed to load game details");
  }
}
