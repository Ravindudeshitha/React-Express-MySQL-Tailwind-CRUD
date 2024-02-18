-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 18, 2024 at 11:29 AM
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
-- Database: `crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `fullName` varchar(300) NOT NULL,
  `phoneNumber` varchar(12) NOT NULL,
  `password` varchar(300) NOT NULL,
  `userType` varchar(100) NOT NULL,
  `email` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `fullName`, `phoneNumber`, `password`, `userType`, `email`) VALUES
(22, 'Test Name 1', '+91548765231', 'zxcvbnm,', 'user', 'testemail@email.com'),
(23, 'Test Name 2', '+91548655231', 'qqaswed', 'admin', 'adminemail@email.com'),
(24, 'John Smith', '555-123-4567', 'SecurePass123', 'user', 'john.smith@email.com'),
(25, 'Sarah Johnson', '555-987-6543', 'P@ssw0rd2024', 'admin', 'sarah.johnson@email.com'),
(26, 'Michael Chang', '555-567-8901', 'ChangPass456', 'user', 'michael.chang@email.com'),
(27, 'David Martinez', '555-876-5432', 'Mart1nez!Pass', 'helper', 'david.martinez@email.com'),
(28, 'Emily Davis', '555-321-0987', 'DavisE!567', 'helper', 'emily.davis@email.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
