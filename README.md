#  React User Cards App

A clean and responsive React application that displays user profile cards fetched from the Random User API.  
Built with **React** and **Material UI (MUI)** for an elegant and interactive user experience.

---

##  Features

-  Fetches **9 random users** from [randomuser.me](https://randomuser.me)
-  Uses **props** to pass user data (name, email, image)
-  Displays user cards in a **3-column responsive grid**
-  "Mostra dispari" button shows **1 random user** in an odd-numbered position
-  "Refresh" button restores all users
-  "Mostra dispari" is **disabled** when no odd users are available or a single user is selected
-  Beautiful UI built with **Material UI**
-  Built using React Hooks: `useState` and `useEffect`

---

##  Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/react-user-cards-app.git
cd react-user-cards-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the application**

```bash
npm start
```

This will start the app at: [http://localhost:3000](http://localhost:3000)

---

##  Project Structure

```
src/
├── components/
│   └── UserCard.js       # MUI card component for user display
├── App.js                # Main app logic and layout
└── index.js              # React entry point
```

---

##  Screenshot

![User Cards Screenshot](https://via.placeholder.com/800x400?text=User+Cards+Grid+Example)

---

##  Technologies Used

- [React](https://reactjs.org/)
- [Material UI](https://mui.com/)
- [Axios](https://axios-http.com/)
- [Random User API](https://randomuser.me)

---

##  License

This project is for educational/demo purposes only.

---

**Made with love using React & MUI**
