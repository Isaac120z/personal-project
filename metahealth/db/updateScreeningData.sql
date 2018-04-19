update screening_data set 
date_of_screening = $1, 
waist_circumference = $2, 
cholesterol =$3, 
blood_pressure_systolic =$4, 
blood_pressure_diastolic =$5, 
triglyceride =$6, 
blood_sugar =$7
where user_id = $9 AND id = $10