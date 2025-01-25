import React from "react";
import { FlatList, View, Text, ActivityIndicator } from "react-native";
import { AnimatedGameCard } from "./GameCard";
import { styles } from "./styles";

export const GameList = ({ games, loading, error }) => {
  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <FlatList
      data={games}
      keyExtractor={(item) => item.slug}
      contentContainerStyle={styles.listContent}
      ListHeaderComponent={<ListHeader />}
      renderItem={({ item, index }) => (
        <AnimatedGameCard game={item} index={index} />
      )}
    />
  );
};

const ListHeader = () => <Text style={styles.header}>Latest Games</Text>;

const LoadingIndicator = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" color="#4CAF50" />
  </View>
);

const ErrorMessage = ({ error }) => (
  <View style={styles.container}>
    <Text style={styles.errorText}>{error}</Text>
  </View>
);
