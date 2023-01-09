##### Clone The project
git clone https://github.com/cent-21/crud-adonisjs-test.git
##### Install dependances
npm i
##### Database
Create simple MySQL database and connect it to the project in .env file, set those variables MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_DB_NAME=todo if it's different
##### Run the project
node ace serve --watch
##### See the simple crud
Rest API route config <a href="http://127.0.0.1:3333/api/todos">http://127.0.0.1:3333/api/todos</a>
##### Run the test
node ace test functional
