delete from screening_data where id = $1;


select *
from screening_data
WHERE user_id = $2
ORDER BY date_of_screening DESC;


-- date_of_screening, waist_Cirumference, triglyceride, cholesterol, blood_pressure_systolic, blood_sugar 