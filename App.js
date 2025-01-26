import React from "react";
import { SafeAreaView, StatusBar, Platform } from "react-native";
import { GameList } from "./src/components/GameList/GameList";
import { useFetchGames } from "./src/hooks/useFetchGames";
import { styles as mobileStyles } from "./src/components/GameList/styles.mobile";
import { styles as webStyles } from "./src/components/GameList/styles.web";

const styles = Platform.OS === "web" ? webStyles : mobileStyles;

export default function App() {
  const { games, loading, error } = useFetchGames();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <GameList games={games} loading={loading} error={error} />
    </SafeAreaView>
  );
}
