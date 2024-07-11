
/* Crear tabla */
create table Productos
( id_prod integer unsigned NOT NULL auto_increment,
Nombre varchar(50) not null,
Cant_disponible numeric,
Precio numeric,
Descripcion varchar(150),
Imagen varchar(150),
primary key(id_prod));

/*Insertar productos */
insert into Productos (Nombre, Descripcion, Cant_disponible, Precio, Imagen)
values ("Bicicletero", "Hierro reforsado, para 5 o 10 bicicletas", "2", "18000", "../images/bicicletero.jpg");
 
 insert into Productos (Nombre, Descripcion, Cant_disponible, Precio, Imagen)
values ("Estanterias de Hierro y Madera", "Hierro reforzado con tablones de melamina, precio por metro", "3", "12000", "../images/estanteriahierro.jpg");

insert into Productos (Nombre, Descripcion, Cant_disponible, Precio, Imagen)
values ("Porta maceta", "Hierro reforsado, para maceta de 12cm de diametro", "5", "1500", "../images/portamacetahierro.jpg");

insert into Productos (Nombre, Descripcion, Cant_disponible, Precio, Imagen)
values ("Banqueta", "Hierro reforsado, hilo de yute calidad premium. Reforzadas", "1", "30000", "../images/banqueta.jpg");

insert into Productos (Nombre, Descripcion, Cant_disponible, Precio, Imagen)
values ("Barra plegable para balcón", "Soportes de hierro reforsado, madera barnizada. Medidas: 70cm de largo por 30cm de profundidad", "2", "20000", "../images/barra.jpg");

insert into Productos (Nombre, Descripcion, Cant_disponible, Precio, Imagen)
values ("Difusor para auto", "Adorno en macramé con bolitas de madera. Incluye 1 escencia. Aromas varios sin elección", "8", "4000", "../images/difusorauto.jpg");

insert into Productos (Nombre, Descripcion, Cant_disponible, Precio, Imagen)
values ("Lampara Panal", "Hierro liviano, tejido en macramé. Colores disponibles negro y crudo ", "2", "7000", "../images/lamparapanal.jpg");

insert into Productos (Nombre, Descripcion, Cant_disponible, Precio, Imagen)
values ("Lampara Flor", "Hierro liviano, tejido en macramé. Colores disponibles negro, blanco y crudo ", "4", "7000", "../images/lamparaflor.jpg");

insert into Productos (Nombre, Descripcion, Cant_disponible, Precio, Imagen)
values ("Nidito", "Tejido en macramé, para macetas de 8cm de diametro. No incluye planta. Varios colores disponibles", "12", "2500", "../images/niditotejido.jpg");

insert into Productos (Nombre, Descripcion, Cant_disponible, Precio, Imagen)
values ("Espejo Tejido", "Espejo circular de 18cm con tejido en macramé. Colores disponibles negro, blanco y crudo ", "4", "7000", "../images/espejomandala.jpg");

insert into Productos (Nombre, Descripcion, Cant_disponible, Precio, Imagen)
values ("Set de posavasos", "6 posavasos circulares tejidos en macramé. Colores disponibles blanco y crudo", "4", "7000", "../images/posavasos.jpg");

insert into Productos (Nombre, Descripcion, Cant_disponible, Precio, Imagen)
values ("Souvenir Arcoiris", "Souvenir llavero arcoiris tejido en macramé", "15", "900", "../images/arcoiristejido.jpg");

select *
from productos;

/*Para eliminar la tabla */
drop table productos;