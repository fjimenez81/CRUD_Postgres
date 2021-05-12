CREATE DATABASE project1;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

INSERT INTO users (name, email, password)
	VALUES	('perro', 'perro@terra.es', 'perropass'),
			('gato', 'gato@terra.es', 'gatopass');

        