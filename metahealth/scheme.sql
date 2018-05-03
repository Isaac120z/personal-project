CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    authid VARCHAR(50),
    name VARCHAR(50)
);


-- CREATE TABLE screening_data (
--     id SERIAL PRIMARY KEY,
--     userid INTEGER,
--     gender varchar(10),
--     date_of_screening date,
--     triglyceride float(3),
--     cholesterol float(3),
--     blood_pressure_systolic float(3),
--     blood_pressure_diastolic float(3),
--     blood_sugar float(3),
--     FOREIGN KEY (authid) REFERENCES users(id)
-- );

CREATE TABLE screening_data
(
    id SERIAL PRIMARY KEY,
    gender varchar(10),
    date_of_screening DATE NOT NULL DEFAULT CURRENT_DATE,
    waist_Circumference float(5),
    triglyceride float(3),
    cholesterol float(3),
    blood_pressure_systolic float(3),
    blood_pressure_diastolic float(3),
    blood_sugar float(3),
    user_id FOREIGN Key REFERENCES users (id)
);

create table admin
(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    isAdmin varchar(10)
);

