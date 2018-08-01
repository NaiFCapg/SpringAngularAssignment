
./Register contains the spring api server project, can be run by spring tool suit (eclipse)

./Register-ui contains the angular front-end project, can be run by node command "npm start", and is depend on api server

./workspace is the workspace path for sts (eclipse)

please make sure mysql is installed and has a admin user with root/root credential in it.

Project Hightlight:
When submitting new user to the MySQL database, create date and time is automatically logged in the database as well
Has validate protection on both Angular and Spring side
User information can be searched by their names, this logic is implemented in the front-end
the province select box is dynamically updated from MySQL server
