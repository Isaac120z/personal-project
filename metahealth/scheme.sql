CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    authid VARCHAR(50),
    name VARCHAR(50)
);


CREATE TABLE screening_data (
    id SERIAL PRIMARY KEY,
    authid INTEGER,
    gender varchar(10),
    date_of_screening date,
    triglyceride float(3),
    cholesterol float(3),
    blood_pressure_systolic float(3),
    blood_pressure_diastolic float(3),
    blood_sugar float(3),
    FOREIGN KEY (authid) REFERENCES users(id)
)