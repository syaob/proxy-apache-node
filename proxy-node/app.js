// Importer le module Express.js
const express = require('express');

// Créer une instance de l'application Express
const app = express();

// Définir une route pour la racine de l'URL qui renvoie "Hello World!"
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Port sur lequel l'application écoutera les requêtes entrantes
const port = 3000;

// Démarrer le serveur et écouter les connexions sur le port spécifié
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

