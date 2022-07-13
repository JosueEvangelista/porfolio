#create database porfolio;
use porfolio;

create table tbl_visit(
	id_visit bigint primary key AUTO_INCREMENT,
	date_visit datetime not null comment 'Guarda la fecha en que se visito la pagina'
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 collate=utf8mb4_general_ci;

create table tbl_contact(
	id_contact bigint primary key AUTO_INCREMENT,
	name varchar(50) not null comment 'Guardara el nombre de la persona que quiera contactarme',
	mail_contact varchar(50) not null unique comment 'Guardara el correo de la persona que quiera contactarme',
	date_contact datetime not null comment 'Guardara la fecha en que se guardo el contacto'
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 collate=utf8mb4_general_ci;

create table tbl_messages(
	id_message bigint primary key AUTO_INCREMENT,
	message mediumtext not null comment 'Guardara el mensaje de la persona que quiera contactarme',
	date_message datetime not null comment 'Guardara la fecha en que se envio el mensaje',
	id_contact bigint not null comment 'Llave foranea a tabla contactos'
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 collate=utf8mb4_general_ci;

create table tbl_parameters(
	id_parameters int primary key,
	parameter varchar(50) unique not null comment 'Guardara el nombre del parametro',
	parameter_value varchar(50) not null comment 'Guardara el valor del parametro',
	date_creation datetime not null comment 'Guardara la fecha en que se creo el parametro',
	description varchar(100) not null comment 'Guardara una descripción de lo que hace el parametro'
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 collate=utf8mb4_general_ci;

create table tbl_actions(
	id_action int primary key,
	action varchar(10) not null comment 'Guardara el nombre de la accion'
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 collate=utf8mb4_general_ci;

create table tbl_logs_errors(
	id_log bigint primary key AUTO_INCREMENT,
  	description varchar(255) not null comment 'Guardara la descripcion del error',
  	date_log datetime not null comment 'Guardara la fecha del error',  	
  	id_action int not null comment 'Llave foranea tabla actions'
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 collate=utf8mb4_general_ci;

/*-----------------Llenado de tablas---------------------------*/

insert into tbl_parameters (id_parameters, parameter, parameter_value, date_creation, description)
values  (1, 'max_characters_name', '50', now(), 'Tendra la cantidad maxima de caracteres del nombre'),
		(2, 'max_characters_mail', '50', now(), 'Tendra la cantidad maxima de caracteres del correo'),
		(3, 'max_charactes_message', '16777215', now(), 'Tendra la cantidad maxima de caracteres del mensaje'),
		(4, 'receiving_mail', 'jnstreel@hotmail.com', now(), 'Tendra el correo donde se recibiran los mensajes'),
		(5, 'receiving_mail_copy', 'jnstreel@gmail.com', now(), 'Tendra el correo donde se enviara una copia de los mensajes'),
		(6, 'port_SMTP', '465', now(), 'Tendra el puerto SMTP para el envio de correos'),
		(7, 'server_SMTP', 'smtp.gmail.com', now(), 'Tendra el servidor SMTP para le envio de correos'),
		(8, 'mail_send', 'jnstreel@gmail.com', now(), 'Tendra el correo de donde se enviaran los mensajes SMTP al correo'),
		(9, 'pass_mail_send', 'x', now(), 'Tendra la contraseña del correo de donde se enviaran los mensajes SMTP al correo');
		
select * from tbl_parameters;

/*--------------------- Foreign key ----------------------*/

#Llave foranea tabla likes
ALTER TABLE tbl_messages ADD CONSTRAINT fkmessages_contact FOREIGN KEY(id_contact) REFERENCES tbl_contact(id_contact);

#Llave foranea tabla logs
ALTER TABLE tbl_logs_errors ADD CONSTRAINT fklogs_action FOREIGN KEY(id_action) REFERENCES tbl_actions(id_action);

/*------------------- Procedimientos almacenados ------------------------*/

#Procedimiento para la validacion de la longitud de los campos name, mail, message
create procedure sp_params_contact()
begin
	select parameter_value from tbl_parameters
	where id_parameters = 1 or id_parameters = 2 or id_parameters = 3;
end

#Procedimiento para guardar los mensajes y contactos
create procedure sp_insert_contact(in p_name varchar(50), in p_mail varchar(50), in p_message mediumtext)
begin
	declare idContact bigint;
	set idContact = 0;

	select id_contact into idContact from tbl_contact where mail_contact = p_mail;

	if (idContact = 0) then
		start transaction; 
		
			insert into tbl_contact (name, mail_contact, date_contact)
			values (p_name, p_mail, now());
		
			insert into tbl_messages (message, date_message, id_contact)
			values (p_message, now(), LAST_INSERT_ID());
		
		commit;
	else
		insert into tbl_messages (message, date_message, id_contact)
		values (p_message, now(), idContact);
	end if;
end

call sp_insert_contact ('josue', 'prueba', 'prueba')












		
		