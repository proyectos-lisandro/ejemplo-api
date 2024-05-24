-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-05-2024 a las 01:32:20
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ejercicio`
--
CREATE DATABASE IF NOT EXISTS `ejercicio` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `ejercicio`;

DELIMITER $$
--
-- Procedimientos
--
DROP PROCEDURE IF EXISTS `sp_agregar_usuario`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_agregar_usuario` (IN `_nombre` VARCHAR(100))   BEGIN 
INSERT INTO usuario(nombre)
VALUES (_nombre);
END$$

DROP PROCEDURE IF EXISTS `sp_eliminar_usuario`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_eliminar_usuario` (IN `_idusuario` INT)   BEGIN
DELETE  FROM usuario WHERE idusuario = _idusuario;
END$$

DROP PROCEDURE IF EXISTS `sp_listar_usuarios`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_listar_usuarios` ()   BEGIN 
SELECT idusuario, nombre FROM usuario;
END$$

DROP PROCEDURE IF EXISTS `sp_modificar_usuario`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_modificar_usuario` (IN `_idusuario` INT(10), IN `_nombre` VARCHAR(100))   BEGIN
UPDATE usuario
SET nombre = _nombre
WHERE idusuario = _idusuario;
END$$

DROP PROCEDURE IF EXISTS `sp_mostrar_usuario`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_mostrar_usuario` (IN `_idusuario` INT)   BEGIN
SELECT nombre FROM usuario WHERE idusuario = _idusuario;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `idusuario` int(10) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idusuario`, `nombre`) VALUES
(9, 'fisica'),
(10, 'omar'),
(11, 'examen'),
(12, 'fe'),
(13, 'fs');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
