update screening_data set  
waist_circumference = $1, 
cholesterol =$2, 
blood_pressure_systolic =$5, 
blood_pressure_diastolic =$4, 
triglyceride =$3, 
blood_sugar =$6
where user_id = $7 AND id = $8;

select *
from screening_data
WHERE user_id = $7
ORDER BY date_of_screening DESC, id DESC;