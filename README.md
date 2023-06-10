Express Shopping List
This is a simple JSON API application built using Express.js to store a shopping list. The application uses an array to store shopping items, where each item is a JavaScript object with the keys name and price. Please note that the shopping list will be cleared each time the server restarts, as it is stored in memory.

Installation
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/your-username/express-shopping-list.git
Navigate to the project directory:

bash
Copy code
cd express-shopping-list
Install the dependencies by running the following command:

bash
Copy code
npm install
Usage
To start the Express server and run the application, use the following command:

bash
Copy code
npm start
The server will start on http://localhost:3000.

Routes
The application provides the following routes:

GET /items: Returns a list of shopping items.

Example response:

json
Copy code
[
  {"name": "popsicle", "price": 1.45},
  {"name": "cheerios", "price": 3.40}
]
POST /items: Adds a new item to the shopping list.

Example request body:

json
Copy code
{"name": "popsicle", "price": 1.45}
Example response:

json
Copy code
{"added": {"name": "popsicle", "price": 1.45}}
GET /items/:name: Retrieves a single item's name and price.

Example response:

json
Copy code
{"name": "popsicle", "price": 1.45}
PATCH /items/:name: Modifies a single item's name and/or price.

Example request body:

json
Copy code
{"name": "new popsicle", "price": 2.45}
Example response:

json
Copy code
{"updated": {"name": "new popsicle", "price": 2.45}}
DELETE /items/:name: Deletes a specific item from the shopping list.

Example response:

json
Copy code
{"message": "Deleted"}
Please note that :name in the routes should be replaced with the actual name of the item.

License
This project is licensed under the MIT License.
