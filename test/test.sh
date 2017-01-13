# API TEST

# test GET on /api/bugs: returns array of bugs
curl  localhost:3000/api/bugs

# Test POST to create a new bug and return it.
curl -X POST -H 'Content-Type: application/json' -d '{"status" : "New","priority" : " P3","owner" : "Uknown","title" : "nouveau bug"}' http://localhost:3000/api/bugs
