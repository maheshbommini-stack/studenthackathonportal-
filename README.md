# ⚡ HackArena — Student Hackathon Portal

A responsive web-based platform that helps students discover hackathons, register for events, create teams, add team members, submit projects, and view leaderboard rankings.

---

## 📌 Project Overview

HackArena is a Student Hackathon Portal designed to provide a simple and organized platform for students to participate in hackathons.

The system brings important hackathon activities into one place, including:

- Discovering hackathons
- Searching and filtering hackathons
- Registering for hackathons
- Creating teams
- Adding team members
- Submitting projects
- Tracking participation through a dashboard
- Viewing the leaderboard
- Managing hackathon information through an admin panel

The project is developed as a frontend web application using HTML, CSS, and JavaScript.

---

## 🎯 Objectives

The main objectives of HackArena are:

1. Provide students with an easy-to-use hackathon portal.
2. Help students discover suitable hackathons.
3. Allow students to register for hackathons.
4. Enable students to create and manage teams.
5. Provide a project submission interface.
6. Display participant rankings through a leaderboard.
7. Provide an admin interface for managing portal information.
8. Create a responsive interface that works on desktop, tablet, and mobile devices.

---

## 🚀 Features

### 🏠 Home Page

The homepage provides:

- HackArena branding
- Platform introduction
- Upcoming hackathon information
- Statistics
- Featured hackathons
- "How It Works" section
- Call-to-action section

---

### 🏆 Hackathon Discovery

Students can:

- View available hackathons
- Search hackathons by name
- Filter by category
- Filter by status
- View hackathon details
- Register for a hackathon

Available categories include:

- AI
- Web
- Cybersecurity
- Cloud
- GreenTech

---

### 👤 Student Registration

Students can create an account using:

- Name
- Email
- College
- Password

The registration information is stored locally for demonstration purposes.

---

### 🔐 Student Login

Registered students can log in using:

- Email
- Password

After successful login, the student is redirected to the dashboard.

---

### 📊 Student Dashboard

The dashboard provides an overview of:

- Student profile
- Registered hackathon
- Team information
- Submission status
- Points
- Quick navigation to important sections

---

### 👥 Team Management

Students can:

- Create a team
- Enter a team name
- View the registered hackathon
- Add team members
- View team member details

---

### 📤 Project Submission

Students can submit their project using:

- Project name
- Project description
- Technology stack
- GitHub repository link
- Demo link

The submitted project information is stored locally and the submission status is displayed.

---

### 🏅 Leaderboard

The leaderboard displays participants based on points.

Features include:

- Participant rankings
- Names
- Points
- Dynamic sorting
- Logged-in student's ranking information

---

### 👨‍💼 Admin Dashboard

The admin page provides basic portal management features such as:

- Dashboard statistics
- Adding hackathons
- Viewing hackathon information
- Viewing submissions
- Viewing teams
- Resetting portal data

---

### 📱 Responsive Design

HackArena is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile phones

The interface includes a mobile hamburger navigation menu and responsive layouts.

---

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript

### Storage

- Browser LocalStorage

### Development Environment

- Acode Editor
- Web Browser

---

## 📁 Project Structure

```text
student-hackathon-portal/
│
├── index.html
├── hackathons.html
├── hackathon-details.html
├── dashboard.html
├── team.html
├── submission.html
├── leaderboard.html
├── login.html
├── register.html
├── admin.html
├── README.md
│
├── css/
│   ├── style.css
│   ├── dashboard.css
│   └── responsive.css
│
├── js/
│   ├── main.js
│   ├── hackathons.js
│   ├── dashboard.js
│   └── submission.js
│
└── assets/
    ├── images/
    └── icons/
