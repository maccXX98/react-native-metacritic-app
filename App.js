import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { GameList } from "./src/components/GameList/GameList";
import { useFetchGames } from "./src/hooks/useFetchGames";
import { styles } from "./src/components/GameList/styles";

export default function App() {
  const { games, loading, error } = useFetchGames();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <GameList games={games} loading={loading} error={error} />
    </SafeAreaView>
  );
}
