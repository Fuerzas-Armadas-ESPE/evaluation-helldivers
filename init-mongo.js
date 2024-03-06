// init-mongo.js

// Cambiar a la base de datos que deseas utilizar
db = db.getSiblingDB('mydatabase');


// Crear las colecciones
db.createCollection("cursos");
db.createCollection("temas");

use(mydatabase)