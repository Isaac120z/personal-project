select *
from screening_data
    join admin on admin.user_id = screening_data.user_id
where admin.isadmin = true;