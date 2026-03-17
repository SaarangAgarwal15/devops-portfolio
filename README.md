# DevOps Portfolio Website

**Student Name:** Saarang Agarwal
**Course:** CSE3253 DevOps
**Semester:** VI (2025–2026)
**Project Type:** Containerization & CI/CD Pipeline
**Repository:** devops-portfolio

---

## Project Overview

This project demonstrates the implementation of DevOps practices through the deployment of a personal portfolio website using containerization and automated CI pipelines.

The portfolio website is developed using a modern frontend stack and is containerized using Docker. A Continuous Integration (CI) pipeline is implemented using GitHub Actions to automatically build and verify the project whenever code changes are pushed to the repository.

---

## Objectives

* Demonstrate containerization using Docker
* Implement a CI pipeline using GitHub Actions
* Automate project build verification
* Deploy a static production build using Nginx
* Maintain structured DevOps project workflow using Git

---

## Technology Stack

### Frontend

* React
* Vite
* Tailwind CSS
* TypeScript

### DevOps Tools

* Git
* GitHub
* Docker
* GitHub Actions
* Nginx

---

## Project Architecture

Developer pushes code to GitHub →
GitHub Actions pipeline runs →
Dependencies installed →
Frontend project built →
Docker image created →
Application served via Nginx container

---

## Repository Structure

```
project-root
│
├── src/                 Application source code
├── public/              Static assets
├── dist/                Production build
│
├── Dockerfile           Container configuration
├── .dockerignore        Files ignored during Docker build
│
├── .github/
│   └── workflows/
│       └── docker-build.yml   CI pipeline configuration
│
├── package.json
├── package-lock.json
└── vite.config.ts
```

---

## Docker Containerization

The application is deployed using Docker with Nginx serving the built static files.

### Build Docker Image

```
docker build -t portfolio .
```

### Run Container

```
docker run -p 8080:80 portfolio
```

### Access Application

```
http://localhost:8080
```

---

## CI/CD Pipeline

A CI pipeline is configured using GitHub Actions.

The workflow performs the following steps:

1. Checkout repository code
2. Install Node.js dependencies
3. Build the Vite application
4. Build the Docker image

The pipeline automatically runs whenever code is pushed to the **main branch**.

Pipeline file location:

```
.github/workflows/docker-build.yml
```

---

## Installation (Local Development)

Clone the repository:

```
git clone https://github.com/SaarangAgarwal15/devops-portfolio.git
cd devops-portfolio
```

Install dependencies:

```
npm install
```

Run development server:

```
npm run dev
```

Build production version:

```
npm run build
```

---

## Key DevOps Concepts Implemented

* Containerization using Docker
* Static application deployment using Nginx
* Continuous Integration using GitHub Actions
* Version control using Git
* Automated build verification

---

## Future Improvements

* Add automated Docker image publishing to Docker Hub
* Implement full Continuous Deployment pipeline
* Deploy container to a cloud environment
* Add monitoring and logging tools

---

## Author

**Saarang Agarwal**
Computer Science Undergraduate
Manipal University Jaipur
