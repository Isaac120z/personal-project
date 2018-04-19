INSERT INTO screening_data (
    gender,
    date_of_screening,
    waist_Circumference, 
    triglyceride,
    cholesterol,
    blood_pressure_systolic,
    blood_pressure_diastolic,
    blood_sugar,
    user_id
    ) VALUES ($2, $3, $4, $5, $6, $7, $8, $9, $1);
-- JOIN users on screening_data.authid = users.id
-- Where screening_data.authid = users.id ;



