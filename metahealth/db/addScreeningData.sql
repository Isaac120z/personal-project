INSERT INTO screening_data (gender,date_of_screening, triglyceride,cholesterol,blood_pressure_systolic,blood_pressure_diastolic,blood_sugar) VALUES ($1, $2, $3, $4, $5, $6);
-- JOIN users on screening_data.authid = users.id
-- Where screening_data.authid = users.id ;



