# App.css

```jsx
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.layout {
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
}

.add-form {
  background-color: #f9f6e3;
  border-radius: 12px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;
}

.add-form, .input-group {
  align-items: center;
  display: flex;
  gap: 20px;
}

.add-button {
  background-color: #8455c5;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  height: 40px;
  width: 140px;
}

.form-label {
  font-size: 16px;
  font-weight: 700;
}

.add-input {
  border: none;
  border-radius: 12px;
  height: 40px;
  padding: 0 12px;
  width: 240px;
}

.list-container {
  padding: 0 24px;
}

h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

.list-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.todo-container {
  border: 4px solid #8455c5;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 270px;
}

.button-set {
  display: flex;
  gap: 10px;
  margin-top: 24px;
}

.todo-delete-button {
  background-color: #fff;
  border: 2px solid red;
}

.todo-complete-button {
  background-color: #fff;
  border: 2px solid green;
}

.button {
  border: none;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
}

.todo-delete-button {
  background-color: #fff;
  border: 2px solid red;
}

.todo-complete-button {
  background-color: #fff;
  border: 2px solid green;
}
```
