SET FOREIGN_KEY_CHECKS=0;

CREATE TABLE `retur_barang` (
	`retur_barang_id` INT NOT NULL AUTO_INCREMENT,
	`barang_type_id` INT NOT NULL,
	`place_from` INT NOT NULL,
	`place_to` INT NOT NULL,
	`jumlah` INT NOT NULL,
	`date_created` DATETIME NOT NULL,
	`date_modified` DATETIME NOT NULL,
	`created_by` INT NOT NULL,
    `active` TINYINT(1) NOT NULL DEFAULT '1',
	PRIMARY KEY (`retur_barang_id`)
)
COLLATE='latin1_swedish_ci'
;

CREATE TABLE `pemasukan_barang` (
	`pemasukan_barang_id` INT NOT NULL AUTO_INCREMENT,
	`barang_type_id` INT NOT NULL,
	`place_from` INT NOT NULL,
	`place_to` INT NOT NULL,
	`jumlah` INT NOT NULL,
	`date_created` DATETIME NOT NULL,
	`date_modified` DATETIME NOT NULL,
	`created_by` INT NOT NULL,
    `active` TINYINT(1) NOT NULL DEFAULT '1',
	PRIMARY KEY (`pemasukan_barang_id`)
)
COLLATE='latin1_swedish_ci'
;

CREATE TABLE `penjualan_barang` (
	`penjualan_barang_id` INT NOT NULL AUTO_INCREMENT,
	`barang_type_id` INT NOT NULL,
	`place_from` INT NOT NULL,
	`place_to` INT NOT NULL,
	`jumlah` INT NOT NULL,
	`date_created` DATETIME NOT NULL,
	`date_modified` DATETIME NOT NULL,
	`created_by` INT NOT NULL,
    `active` TINYINT(1) NOT NULL DEFAULT '1',
	PRIMARY KEY (`penjualan_barang_id`)
)
COLLATE='latin1_swedish_ci'
;

CREATE TABLE `penyusutan_barang` (
	`penyusutan_barang_id` INT NOT NULL AUTO_INCREMENT,
	`barang_type_id` INT NOT NULL,
	`place_from` INT NOT NULL,
	`place_to` INT NOT NULL,
	`jumlah` INT NOT NULL,
	`date_created` DATETIME NOT NULL,
	`date_modified` DATETIME NOT NULL,
	`created_by` INT NOT NULL,
    `active` TINYINT(1) NOT NULL DEFAULT '1',
	PRIMARY KEY (`penyusutan_barang_id`)
)
COLLATE='latin1_swedish_ci'
;

CREATE TABLE `barang_type` (
	`barang_type_id` INT NOT NULL AUTO_INCREMENT,
	`barang_id` INT NOT NULL,
	`type` VARCHAR(50) NOT NULL,
	`harga` FLOAT NOT NULL,
    `active` TINYINT(1) NOT NULL DEFAULT '1',
	PRIMARY KEY (`barang_type_id`)
)
COLLATE='latin1_swedish_ci'
;

CREATE TABLE `stok` (
	`stok_id` INT NOT NULL AUTO_INCREMENT,
	`place_id` INT NOT NULL,
	`barang_type_id` INT NOT NULL,
	`jumlah` FLOAT NOT NULL,
    `active` TINYINT(1) NOT NULL DEFAULT '1',
	PRIMARY KEY (`stok_id`)
)
COLLATE='latin1_swedish_ci'
;

CREATE TABLE `barang` (
	`barang_id` INT NOT NULL AUTO_INCREMENT,
	`artikel` VARCHAR(50) NOT NULL,
	`nama_barang` VARCHAR(50) NOT NULL,
	`size` VARCHAR(5) NOT NULL,
	`warna` VARCHAR(50) NOT NULL,
    `active` TINYINT(1) NOT NULL DEFAULT '1',
	PRIMARY KEY (`barang_id`)
)
COLLATE='latin1_swedish_ci'
;

CREATE TABLE `place` (
	`place_id` INT NOT NULL AUTO_INCREMENT,
	`code` VARCHAR(50) NOT NULL,
	`name` VARCHAR(50) NOT NULL,
    `active` TINYINT(1) NOT NULL DEFAULT '1',
	PRIMARY KEY (`place_id`)
)
COLLATE='latin1_swedish_ci'
;

CREATE TABLE `user` (
	`user_id` INT NOT NULL AUTO_INCREMENT,
	`place_id` INT NOT NULL,
	`role_id` INT NOT NULL,
	`username` VARCHAR(50) NOT NULL,
	`hashpass` TEXT NOT NULL,
    `active` TINYINT(1) NOT NULL DEFAULT '1',
	PRIMARY KEY (`user_id`)
)
COLLATE='latin1_swedish_ci'
;

CREATE TABLE `role` (
	`role_id` INT NOT NULL AUTO_INCREMENT,
	`role` VARCHAR(50) NOT NULL,
	`menu` TEXT NULL,
    `active` TINYINT(1) NOT NULL DEFAULT '1',
	PRIMARY KEY (`role_id`)
)
COLLATE='latin1_swedish_ci'
;


ALTER TABLE `retur_barang` ENGINE=InnoDB;
ALTER TABLE `pemasukan_barang` ENGINE=InnoDB;
ALTER TABLE `penjualan_barang` ENGINE=InnoDB;
ALTER TABLE `penyusutan_barang` ENGINE=InnoDB;
ALTER TABLE `barang` ENGINE=InnoDB;
ALTER TABLE `barang_type` ENGINE=InnoDB;
ALTER TABLE `stok` ENGINE=InnoDB;
ALTER TABLE `user` ENGINE=InnoDB;

/* ALTER TABLE `retur_barang`
	ADD CONSTRAINT `rb_barang_type_id` FOREIGN KEY (`barang_type_id`) REFERENCES `barang_type` (`barang_type_id`) ON UPDATE CASCADE,
	ADD CONSTRAINT `rb_place_from` FOREIGN KEY (`place_from`) REFERENCES `place` (`place_id`) ON UPDATE CASCADE,
	ADD CONSTRAINT `rb_place_to` FOREIGN KEY (`place_to`) REFERENCES `place` (`place_id`) ON UPDATE CASCADE,
	ADD CONSTRAINT `rb_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`user_id`) ON UPDATE CASCADE;

ALTER TABLE `pemasukan_barang`
	ADD CONSTRAINT `pm_barang_type_id` FOREIGN KEY (`barang_type_id`) REFERENCES `barang_type` (`barang_type_id`) ON UPDATE CASCADE,
	ADD CONSTRAINT `pm_place_from` FOREIGN KEY (`place_from`) REFERENCES `place` (`place_id`) ON UPDATE CASCADE,
	ADD CONSTRAINT `pm_place_to` FOREIGN KEY (`place_to`) REFERENCES `place` (`place_id`) ON UPDATE CASCADE,
	ADD CONSTRAINT `pm_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`user_id`) ON UPDATE CASCADE;

ALTER TABLE `penjualan_barang`
	ADD CONSTRAINT `pj_barang_type_id` FOREIGN KEY (`barang_type_id`) REFERENCES `barang_type` (`barang_type_id`) ON UPDATE CASCADE,
	ADD CONSTRAINT `pj_place_from` FOREIGN KEY (`place_from`) REFERENCES `place` (`place_id`) ON UPDATE CASCADE,
	ADD CONSTRAINT `pj_place_to` FOREIGN KEY (`place_to`) REFERENCES `place` (`place_id`) ON UPDATE CASCADE,
	ADD CONSTRAINT `pj_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`user_id`) ON UPDATE CASCADE;

ALTER TABLE `penyusutan_barang`
	ADD CONSTRAINT `py_barang_type_id` FOREIGN KEY (`barang_type_id`) REFERENCES `barang_type` (`barang_type_id`) ON UPDATE CASCADE,
	ADD CONSTRAINT `py_place_from` FOREIGN KEY (`place_from`) REFERENCES `place` (`place_id`) ON UPDATE CASCADE,
	ADD CONSTRAINT `py_place_to` FOREIGN KEY (`place_to`) REFERENCES `place` (`place_id`) ON UPDATE CASCADE,
	ADD CONSTRAINT `py_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`user_id`) ON UPDATE CASCADE;

ALTER TABLE `barang_type`
	ADD CONSTRAINT `bt_barang_id` FOREIGN KEY (`barang_id`) REFERENCES `barang` (`barang_id`) ON UPDATE CASCADE;

ALTER TABLE `stok`
	ADD CONSTRAINT `st_barang_type_id` FOREIGN KEY (`barang_type_id`) REFERENCES `barang_type` (`barang_type_id`) ON UPDATE CASCADE;

ALTER TABLE `barang`
	ADD CONSTRAINT `br_place_id` FOREIGN KEY (`place_id`) REFERENCES `place` (`place_id`) ON UPDATE CASCADE;

ALTER TABLE `user`
	ADD CONSTRAINT `us_place_id` FOREIGN KEY (`place_id`) REFERENCES `place` (`place_id`) ON UPDATE CASCADE,
	ADD CONSTRAINT `us_role_id` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`) ON UPDATE CASCADE; */

SET FOREIGN_KEY_CHECKS=1;