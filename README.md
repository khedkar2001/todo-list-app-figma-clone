📝 To-Do List App (Local Storage)


📌 Project Overview

This project is a To-Do List application built using HTML, CSS, and JavaScript, styled to match the provided Figma design.
All tasks are managed using Local Storage, so they persist even after refreshing the page.

🎨 Features

Add Tasks → Input task name, deadline, and priority (High, Medium, Low).

Today’s Tasks → Automatically lists tasks due today.

Future Tasks → Displays tasks with upcoming deadlines or incomplete tasks with past deadlines.

Completed Tasks → Shows tasks marked as completed.

Mark as Complete / Incomplete → Toggle task status using the ✅ button.

Delete Tasks → Remove tasks with the 🗑 button.

Persistent Storage → All data is stored in browser Local Storage.

🛠 Tech Stack

HTML5 – structure

CSS3 – styling (based on Figma design)

JavaScript (ES6) – functionality & Local Storage management

🚀 Setup & Usage

Download / Clone the project:

git clone 

or unzip the provided folder.

Open in Browser
Simply open index.html in your preferred browser.

Start Adding Tasks

Enter task name, deadline, and priority.

Click Add Item.

Manage tasks using complete/delete buttons.

📌 Local Storage Format

Tasks are stored as an array of objects in Local Storage:

[
  {
    "name": "Task Name",
    "date": "2025-08-22",
    "priority": "High",
    "completed": false
  }
]
