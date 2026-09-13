<div align="center">

# Dev Stack Builder

**Build your perfect development stack, one technology at a time.**

Browse, compare, and handpick technologies across categories to assemble your ideal dev stack — all in a sleek, modern interface.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5-5A0EF8?style=flat-square&logo=daisyui&logoColor=white)](https://daisyui.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

</div>

---

## About

Dev Stack Builder is a single-page application that lets developers visually curate their tech stack. Pick one tool per category — databases, frameworks, hosting, and more — and watch your personalized stack build itself in a sticky sidebar. Whether you're bootstrapping a new project or just exploring options, this app makes the decision process fast and fun.

## Key Features

### Smart Selection System
Browse 15+ technologies with rich details — icons, ratings, difficulty levels, and category badges. One pick per category keeps your stack balanced and conflict-free.

### Skeleton Loading Experience
No more blank screens. Animated skeleton cards mirror the real layout while data loads, giving users instant visual feedback and a polished feel from the first millisecond.

### Real-Time Stack Sidebar
Your selected technologies live in a sticky sidebar that updates instantly. Add, remove, or clear your entire stack — every action is confirmed with a clean toast notification.

## Tech Stack

<div align="center">

| Layer | Tool |
|:-----:|:----:|
| UI | React 19 |
| Bundler | Vite 8 |
| Styling | Tailwind CSS 4 |
| Components | DaisyUI 5 |
| Notifications | React Toastify |

</div>

## Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/dev-stack-builder.git

# Install dependencies
cd dev-stack-builder
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── TechCard.jsx
│   ├── SkeletonCard.jsx
│   ├── YourStack.jsx
│   ├── StackItem.jsx
│   └── Footer.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## React Concepts & Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax extension that lets you write HTML-like code directly inside JavaScript files. It simplifies React UI development by keeping layout structure and component logic together in one place. Build tools compile JSX down into regular `React.createElement()` JavaScript function calls.

### 2. What is the difference between props and state?

Props are read-only data passed down from a parent component to configure a child component. State is internal data managed within a component that can change over time based on user actions. Changing state triggers a re-render of the component, whereas props cannot be modified directly by the receiving child.

### 3. What does the useState hook do, and where did you use it in this project?

The `useState` hook adds local state variables to functional components so React can track dynamic data. It returns the current state value along with a function to update that state and trigger a UI re-render. It is used to store values like array lists, active tabs, form inputs, or modal toggle states.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

The `useEffect` hook lets functional components perform side effects like fetching data, modifying the DOM, or setting timers. It is needed for loading JSON data because data fetching is an asynchronous operation that must run after the component mounts. Without useEffect, fetching data directly inside the component body would cause infinite re-render loops.

### 5. Why does every item in a .map() list need a unique key prop?

A unique key prop helps React efficiently identify which items in a list have changed, been added, or been removed during re-renders. It allows React's diffing algorithm to optimize DOM updates instead of re-rendering the entire list. Without unique keys, React can misorder elements or lose track of individual item states.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering in React means displaying different UI components or elements based on specific logical conditions (using `&&`, ternary operators, or `if` statements). For example, showing an empty state message when a stack list is empty:

```jsx
{items.length === 0 && <p>No items found.</p>}
```

It ensures users see relevant interface feedback depending on the current application state.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Data flows top-down from parent to child by passing variables or state directly as props. To send data back, the parent passes a callback function as a prop to the child component. The child then executes that callback function and passes its internal data back up as arguments.

---

<div align="center">

**[Profile](https://github.com/rahatlab)**

</div>
