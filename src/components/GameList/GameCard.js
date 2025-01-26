import React, { useEffect, useRef } from "react";
import { View, Image, Text, Animated, Platform } from "react-native";
import { styles as mobileStyles } from "./styles.mobile";
import { styles as webStyles } from "./styles.web";

const styles = Platform.OS === "web" ? webStyles : mobileStyles;

export const GameCard = ({ game }) => (
  <View style={styles.card}>
    <Image
      style={styles.image}
      source={{ uri: game.image }}
      resizeMode="cover"
    />
    <View style={styles.cardContent}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{game.title}</Text>
        <Text style={styles.platform}>{game.platform}</Text>
      </View>

      <View style={styles.genreContainer}>
        <Text style={styles.genre}>{game.genre}</Text>
      </View>

      <Text style={styles.description} numberOfLines={3}>
        {game.description}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.releaseDate}>{game.releaseDate}</Text>
        <Text style={styles.developer}>{game.developer}</Text>
      </View>
    </View>
  </View>
);

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}
