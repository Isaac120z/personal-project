select *
from screening_data
WHERE user_id = $1
ORDER BY date_of_screening DESC;


