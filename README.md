# Sun Haven E-commerce Store - Frontend

This repository contains the frontend code for the Sun Haven E-commerce Store. It is built using React.js, Redux for state management, and Firebase for deployment.

## Getting Started

To set up the frontend locally, follow these steps:

1. Clone the repository: `git clone https://github.com/aalnamer/SunHavenEcommerce/tree/2b7c48e74cb73fe161a475f2ccbe0f62f5cb300d`
2. Navigate to the `ecommerce-frontend` folder: `cd ecommerce-frontend`
3. Install dependencies: `npm install`
4. Set up environment variables: Create a `.env` file in the root of the `ecommerce-frontend` directory and define the required environment variables. For example:
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id

5. Start the development server: `npm start`

## Deployment

The frontend can be deployed using Firebase hosting. To deploy the frontend:

1. Create a Firebase project (https://firebase.google.com/) if you don't have one.
2. Install the Firebase CLI globally: `npm install -g firebase-tools`
3. Log in to Firebase CLI: `firebase login`
4. Initialize the Firebase project: `firebase init`

- Select the Firebase features you want to set up (e.g., hosting).
- Choose the Firebase project you created earlier.
- Set the public directory to the build folder (usually `build/`).
- Configure as a single-page application (SPA) if prompted.
- Deploy the frontend to Firebase hosting: `firebase deploy`

## Contributing

If you would like to contribute to the frontend of the Sun Haven E-commerce Store, please follow the general guidelines outlined in the repository's CONTRIBUTING.md file.

## License

The Sun Haven E-commerce Store frontend is released under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.

## Contact

If you have any questions, suggestions, or feedback, please contact me at [collaymen.alnamer@gmail.com](mailto:collaymen.alnamer@gmail.com).
