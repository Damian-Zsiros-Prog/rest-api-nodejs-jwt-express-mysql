-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-01-2021 a las 02:29:02
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rest-api-paises-nodejs-jwt-mysql`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paises`
--

CREATE TABLE `paises` (
  `id` int(11) NOT NULL,
  `nombre_oficial` varchar(255) NOT NULL,
  `nombre_comun` varchar(255) NOT NULL,
  `link_img` varchar(500) NOT NULL,
  `fechaCreacion` date NOT NULL,
  `capital` varchar(255) NOT NULL,
  `idioma_oficial` varchar(255) NOT NULL,
  `gentilico` varchar(255) NOT NULL,
  `moneda` varchar(255) NOT NULL,
  `continente` varchar(255) NOT NULL,
  `extension` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `paises`
--

INSERT INTO `paises` (`id`, `nombre_oficial`, `nombre_comun`, `link_img`, `fechaCreacion`, `capital`, `idioma_oficial`, `gentilico`, `moneda`, `continente`, `extension`, `createdAt`, `updatedAt`) VALUES
(1, 'Reino de España', 'España', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Bandera_de_Espa%C3%B1a_%28nuevo_dise%C3%B1o%29.svg/1280px-Bandera_de_Espa%C3%B1a_%28nuevo_dise%C3%B1o%29.svg.png', '1978-12-06', 'Madrid', 'Castellano', 'Españoles', 'Euro', 'Europa', '505 370 km²', '2021-01-15 22:38:02', '2021-01-15 22:38:02'),
(4, 'República de Colombia', 'Colombia', 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg', '1810-07-20', 'Bogota D.C', 'Español', 'Colombiano', 'Peso Colombiano', 'America del sur', '1 141 748 km²3​', '2021-01-15 23:21:28', '2021-01-16 01:02:15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `createdAt`) VALUES
(3, 'damian_zsiros', '0303100', '2021-01-16 00:00:46');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `paises`
--
ALTER TABLE `paises`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `paises`
--
ALTER TABLE `paises`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
