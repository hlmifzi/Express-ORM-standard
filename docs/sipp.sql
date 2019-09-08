-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 17, 2019 at 02:50 AM
-- Server version: 5.7.23
-- PHP Version: 5.6.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sipp`
--

-- --------------------------------------------------------

--
-- Table structure for table `barang`
--

DROP TABLE IF EXISTS `barang`;
CREATE TABLE IF NOT EXISTS `barang` (
  `barang_id` int(11) NOT NULL AUTO_INCREMENT,
  `artikel` varchar(50) NOT NULL,
  `nama_barang` varchar(50) NOT NULL,
  `size` varchar(5) NOT NULL,
  `warna` varchar(50) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`barang_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `barang`
--

INSERT INTO `barang` (`barang_id`, `artikel`, `nama_barang`, `size`, `warna`, `active`) VALUES
(1, 'ART001', 'Baju1', 'L', 'Mderah', 0),
(2, 'ART002', 'Baju2', 'L', 'Merah', 0),
(3, 'ART003', 'Baju3', 'L', 'Hijau', 0),
(4, '', '', '', '', 0),
(5, 'Testss', 'Df', 'XL', 'Green', 0),
(6, 'Test', 'qwe', 'xc', 'xc', 0),
(7, 'Ltest', 'qweqwess', 'L', 'Mderah', 0),
(8, 'asdf', '44444444444444sdf', 'sd', 'sdf', 0);

-- --------------------------------------------------------

--
-- Table structure for table `barang_type`
--

DROP TABLE IF EXISTS `barang_type`;
CREATE TABLE IF NOT EXISTS `barang_type` (
  `barang_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `barang_id` int(11) NOT NULL,
  `type` varchar(50) NOT NULL,
  `harga` float NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`barang_type_id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `barang_type`
--

INSERT INTO `barang_type` (`barang_type_id`, `barang_id`, `type`, `harga`, `active`) VALUES
(1, 1, 'NORMAL', 70000, 1),
(2, 1, 'OB', 20000, 1),
(3, 2, 'NORMAL', 10000, 1),
(4, 2, 'OB', 20000, 1),
(5, 3, 'NORMAL', 10000, 1),
(6, 3, 'OB', 20000, 1),
(7, 5, 'NORMAL', 808080, 1),
(8, 5, 'OB', 90090900, 1),
(9, 6, 'NORMAL', 123, 1),
(10, 6, 'OB', 123, 1),
(11, 7, 'NORMAL', 70000, 1),
(12, 7, 'OB', 20000, 1),
(13, 8, 'NORMAL', 23, 1),
(14, 8, 'OB', 234, 1);

-- --------------------------------------------------------

--
-- Table structure for table `pemasukan_barang`
--

DROP TABLE IF EXISTS `pemasukan_barang`;
CREATE TABLE IF NOT EXISTS `pemasukan_barang` (
  `pemasukan_barang_id` int(11) NOT NULL AUTO_INCREMENT,
  `barang_type_id` int(11) NOT NULL,
  `place_from` int(11) NOT NULL,
  `place_to` int(11) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`pemasukan_barang_id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pemasukan_barang`
--

INSERT INTO `pemasukan_barang` (`pemasukan_barang_id`, `barang_type_id`, `place_from`, `place_to`, `jumlah`, `created_by`, `created_at`, `updated_at`, `active`) VALUES
(1, 1, 1, 2, 10, 1, '2019-06-23 02:37:45', '2019-06-23 02:37:47', 1),
(2, 1, 1, 1, 1, 1, '2019-06-29 14:40:23', '2019-06-29 14:40:23', 1),
(3, 1, 1, 1, 1, 1, '2019-06-29 15:08:45', '2019-06-29 15:08:45', 1),
(4, 1, 1, 1, 1, 1, '2019-06-29 15:08:50', '2019-06-29 15:08:50', 1),
(5, 2, 1, 2, 1, 1, '2019-06-29 15:09:02', '2019-06-29 15:09:02', 1),
(6, 1, 1, 2, 1, 1, '2019-06-29 15:11:45', '2019-06-29 15:11:45', 1),
(7, 1, 1, 2, 1, 1, '2019-06-29 15:13:53', '2019-06-29 15:13:53', 1),
(8, 1, 1, 2, 1, 1, '2019-06-29 15:16:27', '2019-06-29 15:16:27', 1),
(9, 1, 1, 2, 1, 1, '2019-06-29 15:19:04', '2019-06-29 15:19:04', 1),
(10, 1, 1, 2, 1, 1, '2019-06-29 15:19:36', '2019-06-29 15:19:36', 1);

-- --------------------------------------------------------

--
-- Table structure for table `penjualan_barang`
--

DROP TABLE IF EXISTS `penjualan_barang`;
CREATE TABLE IF NOT EXISTS `penjualan_barang` (
  `penjualan_barang_id` int(11) NOT NULL AUTO_INCREMENT,
  `barang_type_id` int(11) NOT NULL,
  `place_from` int(11) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`penjualan_barang_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `penjualan_barang`
--

INSERT INTO `penjualan_barang` (`penjualan_barang_id`, `barang_type_id`, `place_from`, `jumlah`, `created_by`, `created_at`, `updated_at`, `active`) VALUES
(1, 1, 1, 11, 1, '2019-06-22 14:25:27', '2019-06-23 14:25:28', 1),
(2, 2, 2, 1, 1, '2019-06-29 15:45:35', '2019-06-29 15:45:35', 1);

-- --------------------------------------------------------

--
-- Table structure for table `penyusutan_barang`
--

DROP TABLE IF EXISTS `penyusutan_barang`;
CREATE TABLE IF NOT EXISTS `penyusutan_barang` (
  `penyusutan_barang_id` int(11) NOT NULL AUTO_INCREMENT,
  `barang_type_id` int(11) NOT NULL,
  `place_from` int(11) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`penyusutan_barang_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `penyusutan_barang`
--

INSERT INTO `penyusutan_barang` (`penyusutan_barang_id`, `barang_type_id`, `place_from`, `jumlah`, `created_by`, `created_at`, `updated_at`, `active`) VALUES
(1, 1, 1, 1, 1, '2019-06-23 14:25:40', '2019-06-23 14:25:41', 1);

-- --------------------------------------------------------

--
-- Table structure for table `place`
--

DROP TABLE IF EXISTS `place`;
CREATE TABLE IF NOT EXISTS `place` (
  `place_id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`place_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `place`
--

INSERT INTO `place` (`place_id`, `code`, `name`, `active`) VALUES
(1, 'P001', 'Semarang', 1),
(2, 'P002', 'Bogor', 1),
(3, 'Test', 'Delete', 0);

-- --------------------------------------------------------

--
-- Table structure for table `retur_barang`
--

DROP TABLE IF EXISTS `retur_barang`;
CREATE TABLE IF NOT EXISTS `retur_barang` (
  `retur_barang_id` int(11) NOT NULL AUTO_INCREMENT,
  `barang_type_id` int(11) NOT NULL,
  `place_from` int(11) NOT NULL,
  `place_to` int(11) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`retur_barang_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `retur_barang`
--

INSERT INTO `retur_barang` (`retur_barang_id`, `barang_type_id`, `place_from`, `place_to`, `jumlah`, `created_by`, `created_at`, `updated_at`, `active`) VALUES
(1, 1, 1, 2, 1, 0, '2019-06-23 14:25:56', '2019-06-23 14:25:57', 1),
(2, 1, 1, 2, 1, 1, '2019-06-29 15:27:47', '2019-06-29 15:27:47', 1);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
CREATE TABLE IF NOT EXISTS `role` (
  `role_id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(50) NOT NULL,
  `menu` text,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`role_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`role_id`, `role`, `menu`, `active`) VALUES
(1, 'Admin', '{  \n   \"items\":[  \n      {  \n         \"name\":\"Dashboards\",\n         \"url\":\"/dashboard\",\n         \"icon\":\"icon-speedometer\"\n      },\n      {  \n         \"name\":\"Product Dashboard\",\n         \"url\":\"/dashboardBarang\",\n         \"icon\":\"icon-speedometer\"\n      },\n      {  \n         \"name\":\"Sales Dashboard\",\n         \"url\":\"/dashboardPenjualan\",\n         \"icon\":\"icon-speedometer\"\n      },\n      {  \n         \"title\":true,\n         \"name\":\"Data Master\",\n         \"wrapper\":{  \n            \"element\":\"\",\n            \"attributes\":{  \n\n            }\n         },\n         \"class\":\"\"\n      },\n      {  \n         \"name\":\"Users Management\",\n         \"url\":\"/dataMaster/userManagement\",\n         \"icon\":\"icon-user\"\n      },\n      {  \n         \"name\":\"Tenants Management\",\n         \"url\":\"/dataMaster/tenantManagement\",\n         \"icon\":\"icon-screen-desktop\"\n      },\n      {  \n         \"title\":true,\n         \"name\":\"Product Management\",\n         \"wrapper\":{  \n            \"element\":\"\",\n            \"attributes\":{  \n\n            }\n         }\n      },\n      {  \n         \"name\":\"Entry\",\n         \"url\":\"/Entry\",\n         \"icon\":\"icon-action-redo\"\n      },\n      {  \n         \"name\":\"Depreciation\",\n         \"url\":\"/Depreciation\",\n         \"icon\":\"icon-arrow-down\"\n      },\n      {  \n         \"name\":\"Retur\",\n         \"url\":\"/Retur\",\n         \"icon\":\"icon-action-undo\"\n      },\n      {  \n         \"name\":\"Selling\",\n         \"url\":\"/Selling\",\n         \"icon\":\"icon-basket\"\n      },\n      {  \n         \"divider\":true\n      },\n      {  \n         \"title\":true,\n         \"name\":\"Report\"\n      },\n      {  \n         \"name\":\"Product Report\",\n         \"url\":\"/pages\",\n         \"icon\":\"icon-book-open\",\n         \"children\":[  \n            {  \n               \"name\":\"Entry\",\n               \"url\":\"/report/Entry\",\n               \"icon\":\"icon-action-redo\"\n            },\n            {  \n               \"name\":\"Depreciation\",\n               \"url\":\"/report/Depreciation\",\n               \"icon\":\"icon-arrow-down\"\n            },\n            {  \n               \"name\":\"Retur\",\n               \"url\":\"/report/Retur\",\n               \"icon\":\"icon-action-undo\"\n            },\n            {  \n               \"name\":\"Selling\",\n               \"url\":\"/report/Selling\",\n               \"icon\":\"icon-basket\"\n            }\n         ]\n      }\n   ]\n}', 1),
(2, 'Tenant', '{  \n   \"items\":[  \n      {  \n         \"name\":\"Dashboards\",\n         \"url\":\"/dashboard\",\n         \"icon\":\"icon-speedometer\"\n      },\n      {  \n         \"name\":\"Product Dashboard\",\n         \"url\":\"/dashboardBarang\",\n         \"icon\":\"icon-speedometer\"\n      },\n      {  \n         \"name\":\"Sales Dashboard\",\n         \"url\":\"/dashboardPenjualan\",\n         \"icon\":\"icon-speedometer\"\n      },\n      {  \n         \"title\":true,\n         \"name\":\"Data Master\",\n         \"wrapper\":{  \n            \"element\":\"\",\n            \"attributes\":{  \n\n            }\n         },\n         \"class\":\"\"\n      },\n      {  \n         \"name\":\"Users Management\",\n         \"url\":\"/dataMaster/userManagement\",\n         \"icon\":\"icon-user\"\n      },\n      {  \n         \"name\":\"Tenants Management\",\n         \"url\":\"/dataMaster/tenantManagement\",\n         \"icon\":\"icon-screen-desktop\"\n      },\n      {  \n         \"title\":true,\n         \"name\":\"Product Management\",\n         \"wrapper\":{  \n            \"element\":\"\",\n            \"attributes\":{  \n\n            }\n         }\n      },\n      {  \n         \"name\":\"Entry\",\n         \"url\":\"/Entry\",\n         \"icon\":\"icon-action-redo\"\n      },\n      {  \n         \"name\":\"Depreciation\",\n         \"url\":\"/Depreciation\",\n         \"icon\":\"icon-arrow-down\"\n      },\n      {  \n         \"name\":\"Retur\",\n         \"url\":\"/Retur\",\n         \"icon\":\"icon-action-undo\"\n      },\n      {  \n         \"name\":\"Selling\",\n         \"url\":\"/Selling\",\n         \"icon\":\"icon-basket\"\n      },\n      {  \n         \"divider\":true\n      },\n      {  \n         \"title\":true,\n         \"name\":\"Report\"\n      },\n      {  \n         \"name\":\"Product Report\",\n         \"url\":\"/pages\",\n         \"icon\":\"icon-book-open\",\n         \"children\":[  \n            {  \n               \"name\":\"Entry\",\n               \"url\":\"/report/Entry\",\n               \"icon\":\"icon-action-redo\"\n            },\n            {  \n               \"name\":\"Depreciation\",\n               \"url\":\"/report/Depreciation\",\n               \"icon\":\"icon-arrow-down\"\n            },\n            {  \n               \"name\":\"Retur\",\n               \"url\":\"/report/Retur\",\n               \"icon\":\"icon-action-undo\"\n            },\n            {  \n               \"name\":\"Selling\",\n               \"url\":\"/report/Selling\",\n               \"icon\":\"icon-basket\"\n            }\n         ]\n      }\n   ]\n}', 1);

-- --------------------------------------------------------

--
-- Table structure for table `stok`
--

DROP TABLE IF EXISTS `stok`;
CREATE TABLE IF NOT EXISTS `stok` (
  `stok_id` int(11) NOT NULL AUTO_INCREMENT,
  `place_id` int(11) NOT NULL,
  `barang_type_id` int(11) NOT NULL,
  `jumlah` float NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`stok_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stok`
--

INSERT INTO `stok` (`stok_id`, `place_id`, `barang_type_id`, `jumlah`, `created_at`, `updated_at`, `active`) VALUES
(1, 1, 1, -17, '2019-06-29 15:19:36', '2019-06-29 17:34:00', 1),
(2, 1, 2, 25, '2019-06-29 15:19:36', '2019-06-29 17:34:00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `place_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `fullname` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `hashpass` text NOT NULL,
  `active` int(1) DEFAULT '1',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `place_id`, `role_id`, `fullname`, `username`, `hashpass`, `active`) VALUES
(1, 1, 1, 'Rian', 'rian', '$2a$10$p4gbCeSORlNUZ6B58OXeEO6NZEdoD1eI4YURDt028rI4fRZFB6i4u', 1),
(2, 1, 2, 'Rian', 'rian-t', '$2a$10$p4gbCeSORlNUZ6B58OXeEO6NZEdoD1eI4YURDt028rI4fRZFB6i4u', 1),
(3, 1, 2, 'User Tenant 2', 'User Tenant 2', '$2a$10$K.iiA379TG4SAaaECTMR3uATG5PQKlSIFQaz6CTAC07CJafxtzNsu', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
