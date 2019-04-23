CREATE SCHEMA `emr` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE `users` (
  `userid` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `pwhash` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lastlogin` datetime DEFAULT NULL,
  `status` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`userid`),
  UNIQUE KEY `userid_UNIQUE` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


CREATE TABLE `staff` (
  `staffid` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `firstname` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lastname` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `home_phone` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `role` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_created` datetime DEFAULT NULL,
  `dated_updated` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_by` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `work_phone` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mobile_phone` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address1` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address2` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `city` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `county` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `zip` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`staffid`),
  CONSTRAINT `staff_ibfk_1` FOREIGN KEY (`staffid`) REFERENCES `users` (`userid`) ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `patient` (
  `patientid` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `salutation` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `firstname` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `lastname` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `dob` date NOT NULL,
  `gender` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `occupation` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `emailid` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone_work` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone_home` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone_mobile` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `next_of_kin` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `nok_phone` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `address1` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `address2` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `City` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `State` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `Zip` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `date_created` datetime DEFAULT NULL,
  `date_updated` datetime DEFAULT NULL,
  `created_by` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`patientid`),
  UNIQUE KEY `patientid_UNIQUE` (`patientid`),
  CONSTRAINT `patient_ibfk_1` FOREIGN KEY (`patientid`) REFERENCES `users` (`userid`) ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `doctors` (
  `doctorid` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `firstname` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `lastname` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `specialization` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `contactno` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `Description` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL,
  `created_by` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `alt_contact` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`doctorid`),
  CONSTRAINT `doctors_ibfk_1` FOREIGN KEY (`doctorid`) REFERENCES `users` (`userid`) ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `patient_referral` (
  `patientid` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `medical_practitioner` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `dental_practitioner` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `referred_by` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address1` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address2` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `city` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `county` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ZIP` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_created` datetime DEFAULT NULL,
  `date_updated` datetime DEFAULT NULL,
  `created_by` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`patientid`),
  CONSTRAINT `patient_referral_ibfk_1` FOREIGN KEY (`patientid`) REFERENCES `patient` (`patientid`) ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `insurance` (
  `patientid` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `provider` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `memberid` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `primary` tinyint(4) NOT NULL,
  `date_created` datetime NOT NULL,
  `date_modified` datetime NOT NULL,
  `created_by` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`patientid`),
  CONSTRAINT `insurance_ibfk_1` FOREIGN KEY (`patientid`) REFERENCES `patient` (`patientid`) ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `appointment` (
  `appointmentid` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `patientid` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `doctorid` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `appdt` date NOT NULL,
  `apptime` time NOT NULL,
  `notes` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `appstatus` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL,
  `created_by` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`appointmentid`),
  KEY `appointment_ibfk_1` (`patientid`),
  KEY `appointment_ibfk_2` (`doctorid`),
  CONSTRAINT `appointment_ibfk_1` FOREIGN KEY (`patientid`) REFERENCES `patient` (`patientid`) ON UPDATE NO ACTION,
  CONSTRAINT `appointment_ibfk_2` FOREIGN KEY (`doctorid`) REFERENCES `doctors` (`doctorid`) ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `patient_history` (
  `patientid` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `appointmentid` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `visit_dt` date NOT NULL,
  `vist_time` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `visit_status` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `notes` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL,
  `created_by` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`patientid`,`appointmentid`),
  KEY `patient_history_ibfk_2` (`appointmentid`),
  CONSTRAINT `patient_history_ibfk_1` FOREIGN KEY (`patientid`) REFERENCES `patient` (`patientid`) ON UPDATE NO ACTION,
  CONSTRAINT `patient_history_ibfk_2` FOREIGN KEY (`appointmentid`) REFERENCES `appointment` (`appointmentid`) ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `billing` (
  `receiptid` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `patientid` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `appointmentid` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `billingamt` decimal(13,2) NOT NULL DEFAULT '0.00',
  `status` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `due_dt` date DEFAULT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL,
  `created_by` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`receiptid`),
  KEY `billing_ibfk_1` (`patientid`),
  KEY `billing_ibfk_2` (`appointmentid`),
  CONSTRAINT `billing_ibfk_1` FOREIGN KEY (`patientid`) REFERENCES `patient` (`patientid`) ON UPDATE NO ACTION,
  CONSTRAINT `billing_ibfk_2` FOREIGN KEY (`appointmentid`) REFERENCES `appointment` (`appointmentid`) ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

