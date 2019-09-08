-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.1.37-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win32
-- HeidiSQL Version:             10.1.0.5464
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for sipp
CREATE DATABASE IF NOT EXISTS `sipp` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `sipp`;

-- Dumping structure for table sipp.barang
CREATE TABLE IF NOT EXISTS `barang` (
  `barang_id` int(11) NOT NULL AUTO_INCREMENT,
  `artikel` varchar(50) NOT NULL,
  `nama_barang` varchar(50) NOT NULL,
  `size` varchar(5) NOT NULL,
  `warna` varchar(50) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`barang_id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

-- Dumping data for table sipp.barang: 2 rows
/*!40000 ALTER TABLE `barang` DISABLE KEYS */;
INSERT INTO `barang` (`barang_id`, `artikel`, `nama_barang`, `size`, `warna`, `active`) VALUES
	(13, 'GMS', 'Gamis', 'M', 'Hitam', 1),
	(12, 'KMJ', 'Kemeja', 'XL', 'Biru', 1);
/*!40000 ALTER TABLE `barang` ENABLE KEYS */;

-- Dumping structure for table sipp.barang_type
CREATE TABLE IF NOT EXISTS `barang_type` (
  `barang_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `barang_id` int(11) NOT NULL,
  `type` varchar(50) NOT NULL,
  `harga` float NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`barang_type_id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

-- Dumping data for table sipp.barang_type: 4 rows
/*!40000 ALTER TABLE `barang_type` DISABLE KEYS */;
INSERT INTO `barang_type` (`barang_type_id`, `barang_id`, `type`, `harga`, `active`) VALUES
	(24, 13, 'OB', 200000, 1),
	(23, 13, 'NORMAL', 500000, 1),
	(22, 12, 'OB', 150000, 1),
	(21, 12, 'NORMAL', 400000, 1);
/*!40000 ALTER TABLE `barang_type` ENABLE KEYS */;

-- Dumping structure for table sipp.pemasukan_barang
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
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

-- Dumping data for table sipp.pemasukan_barang: 2 rows
/*!40000 ALTER TABLE `pemasukan_barang` DISABLE KEYS */;
INSERT INTO `pemasukan_barang` (`pemasukan_barang_id`, `barang_type_id`, `place_from`, `place_to`, `jumlah`, `created_by`, `created_at`, `updated_at`, `active`) VALUES
	(14, 23, 3, 1, 9, 2, '2019-07-19 04:28:13', '2019-07-19 04:28:13', 1),
	(13, 23, 3, 1, 40, 2, '2019-07-17 07:25:03', '2019-07-17 07:25:03', 1);
/*!40000 ALTER TABLE `pemasukan_barang` ENABLE KEYS */;

-- Dumping structure for table sipp.penjualan_barang
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
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table sipp.penjualan_barang: 1 rows
/*!40000 ALTER TABLE `penjualan_barang` DISABLE KEYS */;
INSERT INTO `penjualan_barang` (`penjualan_barang_id`, `barang_type_id`, `place_from`, `jumlah`, `created_by`, `created_at`, `updated_at`, `active`) VALUES
	(3, 23, 1, 10, 3, '2019-07-17 07:27:59', '2019-07-17 07:27:59', 1);
/*!40000 ALTER TABLE `penjualan_barang` ENABLE KEYS */;

-- Dumping structure for table sipp.penyusutan_barang
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

-- Dumping data for table sipp.penyusutan_barang: 0 rows
/*!40000 ALTER TABLE `penyusutan_barang` DISABLE KEYS */;
/*!40000 ALTER TABLE `penyusutan_barang` ENABLE KEYS */;

-- Dumping structure for table sipp.place
CREATE TABLE IF NOT EXISTS `place` (
  `place_id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`place_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table sipp.place: 3 rows
/*!40000 ALTER TABLE `place` DISABLE KEYS */;
INSERT INTO `place` (`place_id`, `code`, `name`, `active`) VALUES
	(1, 'P001', 'Tenant JKT', 1),
	(2, 'P002', 'Tenant BDG', 1),
	(3, 'P000', 'Gudang', 1);
/*!40000 ALTER TABLE `place` ENABLE KEYS */;

-- Dumping structure for table sipp.retur_barang
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
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Dumping data for table sipp.retur_barang: 1 rows
/*!40000 ALTER TABLE `retur_barang` DISABLE KEYS */;
INSERT INTO `retur_barang` (`retur_barang_id`, `barang_type_id`, `place_from`, `place_to`, `jumlah`, `created_by`, `created_at`, `updated_at`, `active`) VALUES
	(4, 23, 1, 3, 10, 3, '2019-07-17 07:28:20', '2019-07-17 07:28:20', 1);
/*!40000 ALTER TABLE `retur_barang` ENABLE KEYS */;

-- Dumping structure for table sipp.role
CREATE TABLE IF NOT EXISTS `role` (
  `role_id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(50) NOT NULL,
  `menu` text,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`role_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Dumping data for table sipp.role: 2 rows
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` (`role_id`, `role`, `menu`, `active`) VALUES
	(1, 'Admin', '{  \r\n   "items":[  \r\n      {  \r\n         "name":"Dashboards",\r\n         "url":"/dashboard",\r\n         "icon":"icon-speedometer"\r\n      },\r\n      {  \r\n         "title":true,\r\n         "name":"Data Master",\r\n         "wrapper":{  \r\n            "element":"",\r\n            "attributes":{  \r\n\r\n            }\r\n         },\r\n         "class":""\r\n      },\r\n      {  \r\n         "name":"Users Management",\r\n         "url":"/dataMaster/userManagement",\r\n         "icon":"icon-user"\r\n      },\r\n      {  \r\n         "name":"Tenants Management",\r\n         "url":"/dataMaster/tenantManagement",\r\n         "icon":"icon-screen-desktop"\r\n      },\r\n      {  \r\n         "title":true,\r\n         "name":"Product Management",\r\n         "wrapper":{  \r\n            "element":"",\r\n            "attributes":{  \r\n\r\n            }\r\n         }\r\n      }\r\n   ]\r\n}', 1),
	(2, 'Tenant', '{  \n   "items":[  \n      {  \n         "name":"Dashboards",\n         "url":"/dashboard",\n         "icon":"icon-speedometer"\n      },\n      {  \n         "name":"Product Dashboard",\n         "url":"/dashboardBarang",\n         "icon":"icon-speedometer"\n      },\n      {  \n         "name":"Sales Dashboard",\n         "url":"/dashboardPenjualan",\n         "icon":"icon-speedometer"\n      },\n      {  \n         "title":true,\n         "name":"Data Master",\n         "wrapper":{  \n            "element":"",\n            "attributes":{  \n\n            }\n         },\n         "class":""\n      },\n      {  \n         "name":"Users Management",\n         "url":"/dataMaster/userManagement",\n         "icon":"icon-user"\n      },\n      {  \n         "name":"Tenants Management",\n         "url":"/dataMaster/tenantManagement",\n         "icon":"icon-screen-desktop"\n      },\n      {  \n         "title":true,\n         "name":"Product Management",\n         "wrapper":{  \n            "element":"",\n            "attributes":{  \n\n            }\n         }\n      },\n      {  \n         "name":"Entry",\n         "url":"/Entry",\n         "icon":"icon-action-redo"\n      },\n      {  \n         "name":"Depreciation",\n         "url":"/Depreciation",\n         "icon":"icon-arrow-down"\n      },\n      {  \n         "name":"Retur",\n         "url":"/Retur",\n         "icon":"icon-action-undo"\n      },\n      {  \n         "name":"Selling",\n         "url":"/Selling",\n         "icon":"icon-basket"\n      },\n      {  \n         "divider":true\n      },\n      {  \n         "title":true,\n         "name":"Report"\n      },\n      {  \n         "name":"Product Report",\n         "url":"/pages",\n         "icon":"icon-book-open",\n         "children":[  \n            {  \n               "name":"Entry",\n               "url":"/report/Entry",\n               "icon":"icon-action-redo"\n            },\n            {  \n               "name":"Depreciation",\n               "url":"/report/Depreciation",\n               "icon":"icon-arrow-down"\n            },\n            {  \n               "name":"Retur",\n               "url":"/report/Retur",\n               "icon":"icon-action-undo"\n            },\n            {  \n               "name":"Selling",\n               "url":"/report/Selling",\n               "icon":"icon-basket"\n            }\n         ]\n      }\n   ]\n}', 1);
/*!40000 ALTER TABLE `role` ENABLE KEYS */;

-- Dumping structure for table sipp.stok
CREATE TABLE IF NOT EXISTS `stok` (
  `stok_id` int(11) NOT NULL AUTO_INCREMENT,
  `place_id` int(11) NOT NULL,
  `barang_type_id` int(11) NOT NULL,
  `jumlah` float NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`stok_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Dumping data for table sipp.stok: 1 rows
/*!40000 ALTER TABLE `stok` DISABLE KEYS */;
INSERT INTO `stok` (`stok_id`, `place_id`, `barang_type_id`, `jumlah`, `created_at`, `updated_at`, `active`) VALUES
	(5, 1, 23, 29, '2019-07-17 07:25:03', '2019-07-19 04:28:13', 1);
/*!40000 ALTER TABLE `stok` ENABLE KEYS */;

-- Dumping structure for table sipp.user
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

-- Dumping data for table sipp.user: ~3 rows (approximately)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`user_id`, `place_id`, `role_id`, `fullname`, `username`, `hashpass`, `active`) VALUES
	(1, 1, 1, 'Rian', 'rian', '$2a$10$p4gbCeSORlNUZ6B58OXeEO6NZEdoD1eI4YURDt028rI4fRZFB6i4u', 1),
	(2, 1, 2, 'Rian', 'rian-t', '$2a$10$p4gbCeSORlNUZ6B58OXeEO6NZEdoD1eI4YURDt028rI4fRZFB6i4u', 1),
	(3, 2, 2, 'Malik', 'malik-t', '$2a$10$K.iiA379TG4SAaaECTMR3uATG5PQKlSIFQaz6CTAC07CJafxtzNsu', 1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
