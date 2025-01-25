export default function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env", // Especifica el archivo .env que quieres usar
          safe: false, // Si es true, requiere que todas las variables estén definidas
          allowUndefined: true, // Permite variables no definidas
        },
      ],
    ],
  };
}
