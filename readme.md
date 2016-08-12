To Run Project

1. Make sure you have NodeJS installed
2. Navigate to root directory (i.e the project folder) in terminal or any unix shell.
	[ used cd for change directory, and ls to show directory contents]

3. Make sure sequelize command line interface is installed with unix command:
    npm install -g sequelize-cli

4. Install all project dependencies by running the command:
	npm install
	
4. Change directory into api folder and run the command:
	sequelize db:migrate

5. Start server by running
	node server.js

	or from root directory

	node api/server.js

6. Load data by going to the following url in browser
	
	http://localhost:8080/api/init

7. Load project by going to:
	http://localhost:8080

