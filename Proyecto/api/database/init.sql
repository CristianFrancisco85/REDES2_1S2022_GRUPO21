DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name varchar(255) NOT NULL,
  img varchar(255) NOT NULL,
  carnet varchar(255) NOT NULL,
  puesto varchar(255) NOT NULL,
  curso varchar(255) NOT NULL,
  description varchar(255) NOT NULL
); 


DROP TABLE IF EXISTS puestos;

CREATE TABLE puestos (
  id SERIAL PRIMARY KEY,
  title varchar(255) NOT NULL,
  description varchar(255) NOT NULL 
); 

DROP TABLE IF EXISTS ecodata;

CREATE TABLE ecodata (
  id SERIAL PRIMARY KEY,
  serie varchar(255) NOT NULL,
  marca INT NOT NULL,
  valor INT NOT NULL
);

INSERT INTO users (name, img, carnet, puesto, curso, description) 
VALUES ('Cristian Meoño', 'https://avatars.githubusercontent.com/u/28421316?v=4', '201801397', 'Admnistrador IT', 'Redes de Computadoras 2', 
'Administrador de la plataforma IT de la empresa');

INSERT INTO users (name, img, carnet, puesto, curso, description) 
VALUES ('Adriana Gomez', 'https://avatars.githubusercontent.com/u/34323077?v=4', '201504236', 'Admnistradora Contable', 'Redes de Computadoras 2', 
'Administrador de la contabilidad de la empresa');

INSERT INTO users (name, img, carnet, puesto, curso, description) 
VALUES ('Carlos Ng', 'https://avatars.githubusercontent.com/u/49575300?v=4', '201801434', 'Admnistrador de Telecomunicaciones', 'Redes de Computadoras 2', 
'Administrador de la plataforma de Telecomunicaciones de la empresa');

INSERT INTO users (name, img, carnet, puesto, curso, description) 
VALUES ('Josue orellana', 'https://avatars.githubusercontent.com/u/55848754?v=4', '201801366', 'Admnistrador Relaciones Publicas', 'Redes de Computadoras 2', 
'Administrador de las relaciones publicas de la empresa');

INSERT INTO puestos (title, description) 
VALUES ('Presidente', 'Encargado de la empresa');

INSERT INTO puestos (title, description)
VALUES ('Vicepresidente', 'Encargado de la empresa');

INSERT INTO puestos (title, description)
VALUES ('Gerente', 'Encargado de la empresa');

INSERT INTO puestos (title, description)
VALUES ('Ministro de Seguridad', 'Encargado de la empresa');

INSERT INTO puestos (title, description)
VALUES ('Ministro de Relaciones Exteriores', 'Encargado de la empresa');

INSERT INTO puestos (title, description)
VALUES ('Ministro de Economia', 'Encargado de la empresa');

INSERT INTO puestos (title, description)
VALUES ('Ministro de Educacion', 'Encargado de la empresa');

INSERT INTO puestos (title, description)
VALUES ('Ministro de Salud', 'Encargado de la empresa');

INSERT INTO puestos (title, description)
VALUES ('Ministro de Trabajo', 'Encargado de la empresa');

INSERT INTO ecodata (serie, marca, valor)
VALUES ('Ingresos', 1,  random() * 100);

INSERT INTO ecodata (serie, marca, valor)
VALUES ('Egresos', 1, random() * 100);

INSERT INTO ecodata (serie, marca, valor)
VALUES ('Ingresos', 2, random() * 100);

INSERT INTO ecodata (serie, marca, valor)
VALUES ('Egresos', 2, random() * 100);

INSERT INTO ecodata (serie, marca, valor)
VALUES ('Ingresos', 3, random() * 100);

INSERT INTO ecodata (serie, marca, valor)
VALUES ('Egresos', 3, random() * 100);

INSERT INTO ecodata (serie, marca, valor)
VALUES ('Ingresos', 4, random() * 100);

INSERT INTO ecodata (serie, marca, valor)
VALUES ('Egresos', 4, random() * 100);

INSERT INTO ecodata (serie, marca, valor)
VALUES ('Ingresos', 5, random() * 100);

INSERT INTO ecodata (serie, marca, valor)
VALUES ('Egresos', 5, random() * 100);

INSERT INTO ecodata (serie, marca, valor)
VALUES ('Ingresos', 6, random() * 100);

INSERT INTO ecodata (serie, marca, valor)
VALUES ('Egresos', 6, random() * 100);

INSERT INTO ecodata (serie, marca, valor)
VALUES ('Ingresos', 7, random() * 100);

INSERT INTO ecodata (serie, marca, valor)
VALUES ('Egresos', 7, random() * 100);

INSERT INTO ecodata (serie, marca, valor)
VALUES ('Ingresos', 8, random() * 100);

INSERT INTO ecodata (serie, marca, valor)
VALUES ('Egresos', 8, random() * 100);

INSERT INTO ecodata (serie, marca, valor)
VALUES ('Ingresos', 9, random() * 100);

INSERT INTO ecodata (serie, marca, valor)
VALUES ('Egresos', 9, random() * 100);

INSERT INTO ecodata (serie, marca, valor)
VALUES ('Ingresos', 10, random() * 100);

INSERT INTO ecodata (serie, marca, valor)
VALUES ('Egresos', 10, random() * 100);