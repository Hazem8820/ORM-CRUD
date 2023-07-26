-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 28, 2023 at 10:36 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `thirdsql`
--

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`id`, `title`, `description`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, 'Going to gym', 'I\'m going to gym tomorrow inshallah alone I hope I found someone to go with me ', 20, '2023-06-28 21:27:39', '2023-06-28 21:27:39'),
(2, 'Doing my homework\r\n', 'tonight I\'m gonna do my homework alone it\'s pretty sad cuz no one is sharing this with me ', 19, '2023-06-28 21:31:38', '2023-06-28 21:31:38'),
(3, 'Running tomorrow', 'I\'m gonna run tomorrow alone cuz it is better to do everything you want alone', 17, '2023-06-28 21:32:42', '2023-06-28 21:32:42'),
(12, 'Going to pray', 'everyone must pray because without it you are useless', 20, '2023-06-28 20:30:35', '2023-06-28 20:33:44'),
(15, 'Going to pray', 'everyone must pray because without it you are useless', 20, '2023-06-28 20:35:10', '2023-06-28 20:35:10');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `age`, `createdAt`, `updatedAt`) VALUES
(17, 'khaloda', 'khaled@gmail.com', '222', 67, '2023-06-28 17:50:48', '2023-06-28 20:35:52'),
(18, 'omar', 'omar@gmail.com', '521654', 40, '2023-06-28 18:39:01', '2023-06-28 18:39:01'),
(19, 'sara', 'sara@gmail.com', '151351', 23, '2023-06-28 18:39:14', '2023-06-28 18:39:14'),
(20, 'nada', 'nada@gmail.com', '3215153', 21, '2023-06-28 18:39:24', '2023-06-28 18:39:24'),
(21, 'mariem', 'mariem@gmail.com', '68564681', 26, '2023-06-28 20:21:33', '2023-06-28 20:21:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `notes_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
