This is a web application built using React and MongoDB to help hospitals efficiently manage and deliver meals to patients. The main goal is to keep track of which meals are delivered to each patient and to generate personalized meal plans based on the dietary requirements provided by doctors.

What This Project Does

Generates meal plans for each patient—morning, afternoon, and evening—based on their medical condition and doctor's recommendations.

Tracks food delivery to make sure patients receive the right meals at the right time.

Allows doctors to specify dietary restrictions (like diabetic-friendly, low sodium, high-protein, etc.).

Keeps logs of all deliveries and meal plans for easy reference.

Tech Stack

Frontend: React.js

Backend: Node.js + Express

Database: MongoDB

Getting Started

1. Clone the Repository
git clone https://github.com/yourusername/hospital-food-delivery.git
cd hospital-food-delivery

2. Set Up the Backend
cd server
npm install

3)Add a .env file inside the server folder:
MONGO_URI=your_mongodb_connection_string
PORT=5000

4) Set Up the Frontend
cd ../client
npm install

5) Run the App
Start the backend:
cd ../server
npm start

6)Start the frontend:
cd ../client
npm start

Future Plans
Here are a few ideas we’d love to add in the future:
Notifications for missed or delayed meals
Login system with roles for doctors, kitchen staff, and admins
Mobile-friendly layout
Meal analytics (most prescribed diets, delivery efficiency, etc.)
Integration with hospital record systems
