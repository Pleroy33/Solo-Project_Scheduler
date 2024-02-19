-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

---create table employees to store all employees for app
CREATE TABLE "employees" (
	"id" serial primary key,
	"first_name" text,
	"last_name" text,
	"notes" text,
	"user_id" integer 
)
---create table weeks for schedule reference 
CREATE TABLE "weeks" (
	"id" serial PRIMARY KEY,
	"start_week" DATE NOT NULL,
	"user_id" INTEGER
	)

INSERT INTO "weeks"("start_week", "user_id")
VALUES ('2024-02-11', 2)
---create table days and insert each weekday name
CREATE TABLE "days" (
	"id" serial PRIMARY KEY,
	"weekday" VARCHAR (10)NOT NULL
);

INSERT INTO "days"("weekday")

VALUES ('Sunday'),
		('Monday'),
		('Tuesday'),
		('Wednesday'),
		('Thursday'),
		('Friday'),
		('Saturday');
		
----create table schedules 	
CREATE TABLE "schedules" (
	"id" serial PRIMARY KEY,
	"week_id" INTEGER NOT NULL,
	"day_id"INTEGER NOT NULL,
	"employee_id" INTEGER NOT NULL,
	"start_time" VARCHAR NOT NULL,
	"end_time" VARCHAR NOT NULL,
	"user_id" INTEGER NOT NULL
);
	



---post query to add new employee

insert into "employees" ("first_name", "last_name", "notes")

VALUES ('Paul', 'LeRoy','Dad')






----get query to select fields for each week schedule for render
SELECT s.id, d.id, w.start_week, d.weekday, e.first_name, start_time, end_time
      FROM "schedules" s
      JOIN "weeks" w ON w.id = s.week_id
      JOIN "days" d ON s.day_id = d.id
      JOIN "employees" e ON s.employee_id = e.id
      WHERE s.week_id = 200
      ORDER BY d.id ASC;
  
