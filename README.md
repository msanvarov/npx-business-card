<h1 align="center">Sal's npx Business Card</h1>

<p align="center">
  <a href="https://sal-anvarov.com/" target="blank"><img src="https://www.sal-anvarov.com/assets/logo/logo-lg.png" width="320" alt="Logo" /></a>
</p>

<p align="center">A <b>npx</b> business card built with 💙 and ☕ by Sal Anvarov.
</p>

Table of Contents:

1. [Description](#-description)
2. [Prerequisites](#%EF%B8%8F-prerequisites)
3. [Deployment](#-deployment)
4. [Repository Files and Folders](#-repository-files-and-folders)

### 📚 Description

Preview this by typing in the following command in your terminal:

```bash
npx sal-anvarov
```

This is a npx business card that I created to connect with other developers programmatically.

---

### 🛠️ Prerequisites

#### Non Docker

- Please make sure to have [Node.js](https://nodejs.org/en/download/) (16+) locally by downloading the Javascript runtime via `brew`, `choco`, or `apt-get`.

#### Docker 🐳

- Please make sure to have [Docker Desktop](https://www.docker.com/products/docker-desktop/) operational to quickly compose the required dependencies. Then follow the docker procedure outlined below.

---

### 🚀 Deployment

#### Manual Deployment without Docker

- Clone the repo via `git clone https://github.com/msanvarov/npx-business-card`.

- Navigate to the root directory of repo via `cd npx-business-card`.

- Download dependencies via `npm i` or `yarn`.

- Start the cli app in development mode via `npm run dev`. To start in production mode, run `npm run build` and then `npm start`.

#### Deploying with Docker 🐳

[Open in Docker Dev Environments <img src="https://raw.githubusercontent.com/msanvarov/personal-portfolio/master/assets/open-link.svg" alt="Open in Docker Dev Environments" align="top"/>](https://open.docker.com/dashboard/dev-envs?url=https://github.com/msanvarov/npx-business-card)

- Execute the following command in-app directory:

```bash
# creates and loads the docker container in detached mode with the required configuration
$ docker-compose up -d
```

---

📁 Repository Files and Folders

```text
.
├── LICENSE
├── README.md
├── package-lock.json
├── package.json
├── sal-cv.html
├── src
│   └── index.ts
└── tsconfig.json
```

---

### 🏗️ Progress

|                                                           Branches | Status |
| -----------------------------------------------------------------: | :----- |
|             [main](https://github.com/msanvarov/npx-business-card) | ✅     |
| [feat/\*](https://github.com/msanvarov/npx-business-card/branches) | 🚧     |

---

### 👥 Help

PRs are appreciated, I fully rely on the passion ❤️ of the OS developers.

---

## License

This personal portfolio website is [MIT licensed](LICENSE).

[Author](https://www.sal-anvarov.com)
