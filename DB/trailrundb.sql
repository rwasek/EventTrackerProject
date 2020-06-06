-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema trailrundb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `trailrundb` ;

-- -----------------------------------------------------
-- Schema trailrundb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `trailrundb` DEFAULT CHARACTER SET utf8 ;
USE `trailrundb` ;

-- -----------------------------------------------------
-- Table `address`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `address` ;

CREATE TABLE IF NOT EXISTS `address` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `street_address` VARCHAR(100) NOT NULL,
  `city` VARCHAR(85) NOT NULL,
  `state_province` VARCHAR(60) NOT NULL,
  `postal_code` VARCHAR(15) NOT NULL,
  `country` VARCHAR(56) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trail_run`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `trail_run` ;

CREATE TABLE IF NOT EXISTS `trail_run` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `address_id` INT NULL,
  `trail_name` VARCHAR(100) NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  `date` VARCHAR(45) NOT NULL,
  `total_time` VARCHAR(15) NOT NULL,
  `distance` DECIMAL(5,2) NOT NULL,
  `average_pace` VARCHAR(15) NULL,
  `best_pace` VARCHAR(15) NULL,
  `elevation_gain` SMALLINT NULL,
  `max_heart_rate` SMALLINT NULL,
  `average_heart_rate` SMALLINT NULL,
  `description` VARCHAR(500) NULL,
  `trail_type` ENUM("LIGHT", "MODERATE", "RUGGED") NULL,
  `active` TINYINT NOT NULL DEFAULT 1,
  `trailwidget_src` VARCHAR(500) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_trail_run_address_idx` (`address_id` ASC),
  CONSTRAINT `fk_trail_run_address`
    FOREIGN KEY (`address_id`)
    REFERENCES `address` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS trailrunner@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'trailrunner'@'localhost' IDENTIFIED BY 'trailrunner';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'trailrunner'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `trail_run`
-- -----------------------------------------------------
START TRANSACTION;
USE `trailrundb`;
INSERT INTO `trail_run` (`id`, `address_id`, `trail_name`, `location`, `date`, `total_time`, `distance`, `average_pace`, `best_pace`, `elevation_gain`, `max_heart_rate`, `average_heart_rate`, `description`, `trail_type`, `active`, `trailwidget_src`) VALUES (1, NULL, 'Matthews Winters Lollipop', 'Golden, CO', '4/6/2020', '1:15:08', 6.63, '11:10', '6:56', 1188, 177, 155, 'Slight rolling hills with one major steep ascent/descent. Red clay trail, a favorite of rattlesnakes. Not a place to wear headphones in the Spring/Summer!', 'MODERATE', 1, NULL);
INSERT INTO `trail_run` (`id`, `address_id`, `trail_name`, `location`, `date`, `total_time`, `distance`, `average_pace`, `best_pace`, `elevation_gain`, `max_heart_rate`, `average_heart_rate`, `description`, `trail_type`, `active`, `trailwidget_src`) VALUES (2, NULL, 'Apex', 'Golden, CO', '5/10/2020', '1:26:51', 7.07, '12:17', '6:41', 1581, 189, 159, 'Favorite local trail, lots of great hills, first 3 miles are straight up hill.  Enchanted forest section is beautiful dense pine forests, the trail is soft and covered in pine needles that smell fresh in the summer.', 'RUGGED', 1, NULL);
INSERT INTO `trail_run` (`id`, `address_id`, `trail_name`, `location`, `date`, `total_time`, `distance`, `average_pace`, `best_pace`, `elevation_gain`, `max_heart_rate`, `average_heart_rate`, `description`, `trail_type`, `active`, `trailwidget_src`) VALUES (3, NULL, 'Bear Creek Greenbelt', 'Lakewood, CO', '5/15/2020', '29:15', 3.83, '7:39', '6:41', 105, 191, 171, 'Flat trail, great for training with low drop/minimalist footwear', 'LIGHT', 1, NULL);
INSERT INTO `trail_run` (`id`, `address_id`, `trail_name`, `location`, `date`, `total_time`, `distance`, `average_pace`, `best_pace`, `elevation_gain`, `max_heart_rate`, `average_heart_rate`, `description`, `trail_type`, `active`, `trailwidget_src`) VALUES (4, NULL, 'Mt Falcon - East Side', 'Morrison, CO', '6/1/2020', '1:30:29', 5.41, '16:44', '8:19', 1391, 192, 142, 'Steep ascent/descent out and back. Need supportive footwear. Some sections of shade.', 'RUGGED', 1, NULL);
INSERT INTO `trail_run` (`id`, `address_id`, `trail_name`, `location`, `date`, `total_time`, `distance`, `average_pace`, `best_pace`, `elevation_gain`, `max_heart_rate`, `average_heart_rate`, `description`, `trail_type`, `active`, `trailwidget_src`) VALUES (5, NULL, 'Moab Half Trail Marathon', 'Moab, UT', '11/4/2017', '2:20:18', 13.61, '10:19', '5:44', 1611, 197, 166, 'Gorgeous trail through the desert of Moab, have to cross a waist deep river at mile 11, lots of gain/descent. Some sections are all on slickrock; need grippy and supportive footwear.  Finished 7th in my age bracket for men (21-29)', 'RUGGED', 1, NULL);
INSERT INTO `trail_run` (`id`, `address_id`, `trail_name`, `location`, `date`, `total_time`, `distance`, `average_pace`, `best_pace`, `elevation_gain`, `max_heart_rate`, `average_heart_rate`, `description`, `trail_type`, `active`, `trailwidget_src`) VALUES (6, NULL, 'Bear Creek Lake Park Trail System', 'Lakewood, CO', '7/08/2018', '2:45:19', 12.68, '11:42', '6:10', 1096, 203, 170, 'Ran from my doorstep into Bear Creek Lake park, all the way into Morrison and scrambled to the top of a steep hill on the left side right before you enter town.', 'MODERATE', 1, NULL);

COMMIT;

