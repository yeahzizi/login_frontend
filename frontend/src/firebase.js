// import { initializeApp } from 'firebase/app';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// const firebaseConfig = {
// 	apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
// 	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// 	databaseURL: process.env.REACT_APP_FIREMASE_DATABASEURL,
// 	projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
// 	storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
// 	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
// 	appId: process.env.REACT_APP_FIREBASE_APPID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth();

// export function login() {
// 	createUserWithEmailAndPassword(auth)
// 		.then((userCredential) => {
// 			// Signed in
// 			const user = userCredential.user;

// 			console.log(user);
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 			const errorCode = error.code;
// 			const errorMessage = error.message;
// 			// ..
// 		});
// }
