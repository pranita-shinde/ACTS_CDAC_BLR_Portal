🚀 ACTS CDAC Bangalore Portal
A full-stack web application designed to manage academic and administrative workflows for ACTS CDAC Bangalore. This project demonstrates a scalable architecture with a structured backend and modular frontend.

💻 Frontend
React.js
HTML, CSS, JavaScript
Axios (API integration)

⚙️ Backend
Java + Spring Boot
REST APIs
Layered Architecture (Controller → Service → Repository)
Custom Exception Handling

🏗️ Project Structure

ACTS_CDAC_BLR_Portal/
│
├── frontend/ # React application
│
├── backend/
│ └── cdac_portal/
│ └── src/main/java/com/cdac/portal/
│ ├── controller/ # API endpoints (Login, Student, Role)
│ ├── service/ # Business logic
│ ├── repository/ # Database interaction
│ ├── model/ # Entity classes
│ ├── exception/ # Custom exception handling
│ └── CdacPortalApplication.java
│
└── README.md


🔥 Key Features
•	User Authentication (Login Module)
•	Role-based access handling
•	Student management system
•	Clean and scalable backend architecture
•	Custom exception handling:
	Duplicate entry handling
	User not found scenarios


⚙️ Backend Architecture Flow
Client Request
     ↓
Controller → Service → Repository → Database
     ↓
 Exception Handling (if any)
     ↓
Response (JSON)


▶️ How to Run
Backend (Spring Boot)

cd backend/cdac_portal
mvn spring-boot:run

Frontend (React)

cd frontend
npm install
npm start

👩‍💻 Author
Pranita Shinde
