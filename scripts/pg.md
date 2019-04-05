heroku pg:info --app myrmecolog-api
heroku pg:diagnose --app myrmecolog-api

heroku pg:ps
heroku pg:kill <process_id>
heroku pg:killall

heroku pg:psql postgresql-deep-42149 --app myrmecolog-api
