# React Authentication and Dashboard Application

This project is a React application that includes authentication functionality and a dashboard feature. It utilizes `React Router` for routing, `Bootstrap` for styling, and includes multiple pages for different user actions like login, registration, email verification, password changes, and more.

## Features
- **Login Page:** Allows users to log in to their account.
- **Register Page:** Enables users to create a new account.
- **Email Verification:** Handles email verification for new accounts or password resets.
- **Change Password:** Allows users to reset or update their password.
- **Dashboard:** Displays the main content after successful authentication.
- **OTP Confirmation:** Provides an interface for confirming a one-time password (OTP).
- **404 Page:** Displays a "File not found" message for unknown routes.

---

## Login Page
- **Description:** The login page provides a form where users can enter their registered email and password to access their accounts.
- **Features:**
  - Input fields for email and password.
  - Validation for empty fields or incorrect input formats.
  - Integration with an authentication API to verify user credentials.
  - Error messages displayed for invalid login attempts.
- **Path:** `/`

## Register Page
- **Description:** The registration page allows new users to create an account.
- **Features:**
  - Form with input fields for user details such as name, email, password, and confirm password.
  - Password validation rules (e.g., minimum length, special characters, etc.).
  - API integration to create a new user in the database.
  - Success and error feedback messages.
- **Path:** `/register`

## Email Verification Page
- **Description:** A dedicated page for verifying the user's email address.
- **Features:**
  - Users enter a unique verification code sent to their registered email.
  - Real-time validation for OTP input format.
  - Integration with an API to verify the code.
  - Option to resend the verification email if the user did not receive it.
- **Path:** `/emailVerification`

## Change Password Page
- **Description:** Enables users to update their account password, either during a password reset flow or after logging in.
- **Features:**
  - Input fields for the current password, new password, and confirmation of the new password.
  - Validation rules for strong passwords and matching confirmation passwords.
  - API integration to update the password in the database.
  - Error handling for invalid or expired reset requests.
- **Path:** `/changePassword`

## Dashboard
- **Description:** The main page users access after successful login, showcasing application features and user-specific content.
- **Features:**
  - Displays personalized content such as user information, statistics, or navigation to other app functionalities.
  - Accessible only to authenticated users.
  - Includes logout functionality to end the user session.
  - Responsive design for mobile and desktop views.
- **Path:** `/dashboard`

## OTP Confirmation Page
- **Description:** Provides a user interface for confirming a one-time password (OTP) during sensitive operations like account recovery or multi-factor authentication.
- **Features:**
  - Input field for entering the OTP.
  - Real-time OTP validation and feedback.
  - API call to verify the OTP and proceed with the next step in the flow.
  - Option to request a new OTP if needed.
- **Path:** `/conformotp`
