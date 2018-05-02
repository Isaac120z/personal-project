select name
from screening_data
    join users ON users.id = screening_data.user_id
where user.id = $1
limit 1;