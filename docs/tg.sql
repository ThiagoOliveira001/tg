-- Database generated with pgModeler (PostgreSQL Database Modeler).
-- pgModeler  version: 0.9.0
-- PostgreSQL version: 9.6
-- Project Site: pgmodeler.com.br
-- Model Author: ---


-- Database creation must be done outside an multicommand file.
-- These commands were put in this file only for convenience.
-- -- object: tg | type: DATABASE --
-- -- DROP DATABASE IF EXISTS tg;
-- CREATE DATABASE tg
-- ;
-- -- ddl-end --
-- 

-- object: public.usuario | type: TABLE --
-- DROP TABLE IF EXISTS public.usuario CASCADE;
CREATE TABLE public.usuario(
	id serial NOT NULL,
	cpfcnpj varchar(14) NOT NULL,
	email varchar(250) NOT NULL,
	nomerazaosocial varchar(100) NOT NULL,
	sobrenomefantasia varchar(100) NOT NULL,
	senha varchar(250) NOT NULL,
	datanascimentoconstituicao date NOT NULL,
	tipopessoa char(1) NOT NULL,
	rginscricaoestadual varchar(20),
	CONSTRAINT pk_usuario PRIMARY KEY (id),
	CONSTRAINT uq_usuario_cnpj UNIQUE (cpfcnpj),
	CONSTRAINT uq_usuario_email UNIQUE (email)

);
-- ddl-end --
ALTER TABLE public.usuario OWNER TO postgres;
-- ddl-end --

-- object: public.endereco | type: TABLE --
-- DROP TABLE IF EXISTS public.endereco CASCADE;
CREATE TABLE public.endereco(
	id serial NOT NULL,
	idusuario integer NOT NULL,
	cep varchar(8) NOT NULL,
	logradouro varchar(100) NOT NULL,
	numero varchar(8) NOT NULL,
	bairro varchar(50) NOT NULL,
	cidade varchar(50) NOT NULL,
	estado char(2) NOT NULL,
	CONSTRAINT pk_endereco PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public.endereco OWNER TO postgres;
-- ddl-end --

-- object: public.telefone | type: TABLE --
-- DROP TABLE IF EXISTS public.telefone CASCADE;
CREATE TABLE public.telefone(
	id serial NOT NULL,
	idusuario integer NOT NULL,
	ddd smallint NOT NULL,
	numero varchar(9) NOT NULL,
	contato varchar(100) NOT NULL,
	CONSTRAINT pk_telefone PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public.telefone OWNER TO postgres;
-- ddl-end --

-- object: public.hardware | type: TABLE --
-- DROP TABLE IF EXISTS public.hardware CASCADE;
CREATE TABLE public.hardware(
	id serial NOT NULL,
	idusuario integer NOT NULL,
	modelo varchar(50) NOT NULL,
	mac varchar(20) NOT NULL,
	CONSTRAINT pk_hardware PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public.hardware OWNER TO postgres;
-- ddl-end --

-- object: public.consumo | type: TABLE --
-- DROP TABLE IF EXISTS public.consumo CASCADE;
CREATE TABLE public.consumo(
	id serial NOT NULL,
	idhardware integer NOT NULL,
	data timestamp NOT NULL,
	valor decimal(8,2) NOT NULL,
	CONSTRAINT pk_consumo PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public.consumo OWNER TO postgres;
-- ddl-end --

-- object: fk_endereco_usuario | type: CONSTRAINT --
-- ALTER TABLE public.endereco DROP CONSTRAINT IF EXISTS fk_endereco_usuario CASCADE;
ALTER TABLE public.endereco ADD CONSTRAINT fk_endereco_usuario FOREIGN KEY (idusuario)
REFERENCES public.usuario (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: fk_telefone_usuario | type: CONSTRAINT --
-- ALTER TABLE public.telefone DROP CONSTRAINT IF EXISTS fk_telefone_usuario CASCADE;
ALTER TABLE public.telefone ADD CONSTRAINT fk_telefone_usuario FOREIGN KEY (idusuario)
REFERENCES public.usuario (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: fk_hardware_usuario | type: CONSTRAINT --
-- ALTER TABLE public.hardware DROP CONSTRAINT IF EXISTS fk_hardware_usuario CASCADE;
ALTER TABLE public.hardware ADD CONSTRAINT fk_hardware_usuario FOREIGN KEY (idusuario)
REFERENCES public.usuario (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: fk_consumo_hardware | type: CONSTRAINT --
-- ALTER TABLE public.consumo DROP CONSTRAINT IF EXISTS fk_consumo_hardware CASCADE;
ALTER TABLE public.consumo ADD CONSTRAINT fk_consumo_hardware FOREIGN KEY (idhardware)
REFERENCES public.hardware (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --


