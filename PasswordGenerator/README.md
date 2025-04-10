# Password Generator

This is a React-based password generator application that allows users to create secure passwords with customizable options such as length, inclusion of numbers, and special characters. The generated password can also be copied to the clipboard with a single click.

## Features

- **Dynamic Password Generation**: Generate passwords of customizable lengths.
- **Customizable Options**:
  - Include numbers in the password.
  - Include special characters in the password.
- **Copy to Clipboard**: Easily copy the generated password to the clipboard.
- **Responsive Design**: The application is styled using Tailwind CSS for a clean and responsive layout.

## Project Structure
PasswordGenerator/ ├── public/ │ └── index.html ├── src/ │ ├── App.css │ ├── App.jsx │ ├── index.css │ └── main.jsx ├── .gitignore ├── package.json ├── README.md └── vite.config.js


## React Concepts Used
This project demonstrates the following React concepts:

- **State Management (useState):**
Used to manage the state of the password, length, and toggle options (numbers and special characters).

- **Side Effects (useEffect):**
Automatically generates a new password whenever the length or toggle options are updated.

- **Memoization (useCallback):**
Used to memoize the<vscode_annotation details='%5B%7B%22title%22%3A%22hardcoded-credentials%22%2C%22description%22%3A%22Embedding%20credentials%20in%20source%20code%20risks%20unauthorized%20access%22%7D%5D'> </vscode_annotation>PasswordGenerator function and the copyPasswordToClipboard function to optimize performance and avoid unnecessary re-renders.

- **Refs (useRef):**
Used to reference the password input field for copying the password to the clipboard.

- **Event Handling:**
Handles user interactions such as clicking buttons, toggling checkboxes, and adjusting the range slider.

- **Conditional Rendering:**
Dynamically updates the password based on user-selected options.

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd PasswordGenerator

### Usage

- **Adjust Password Length:** Use the range slider to set the desired password length (between 6 and 20 characters).

- **Toggle Options:** Check the "Numbers" checkbox to include numbers in the password.
Check the "Character" checkbox to include special characters in the password.

- **Generate Password:** The password is generated automatically when you adjust the options or length.

- **Copy Password:** Click the "Copy" button to copy the generated password to the clipboard.


### Technologies Used
- **React:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for styling.
- **Vite:** A fast build tool and development server.