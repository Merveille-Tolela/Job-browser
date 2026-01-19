# React Job Browser

A simple **Job Browser application** built with **React** and **React Router v6**.

Users can:
- View job listings
- View job details
- Add a new job
- Edit an existing job
- Delete a job

This project focuses on learning **React Router loaders**, CRUD operations, and controlled forms.

---

## 🚀 Features

- Job listing page
- Job details page
- Add / Edit / Delete jobs
- React Router loaders for data fetching
- Toast notifications
- Tailwind CSS styling

---

## 🛠 Tech Stack

- React
- React Router v6 (Data API)
- Fetch API
- React Toastify
- Tailwind CSS

---

## 🧭 Routes

| Route | Description |
|------|------------|
| `/` | Home page |
| `/jobs` | All jobs |
| `/jobs/:id` | Job details |
| `/add-job` | Add job |
| `/edit-job/:id` | Edit job |

---

## 📦 Data Loading (Loaders)

Job data is fetched **before the page renders** using React Router loaders.

```js
const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/job/${params.id}`);
  return res.json();
};
