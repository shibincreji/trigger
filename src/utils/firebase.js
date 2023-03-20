import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyCLxJnU4OHr37ejAmN1O9hux0yBDMBb6uc",
	authDomain: "devfest2021-jakarta.firebaseapp.com",
	databaseURL: "https://devfest2021-jakarta-default-rtdb.firebaseio.com",
	projectId: "devfest2021-jakarta",
	storageBucket: "devfest2021-jakarta.appspot.com",
	messagingSenderId: "212888531167",
	appId: "1:212888531167:web:d1139b97dfaca13a94f96a",
	measurementId: "G-Y29SGXZT5J",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const FIREBASE = { app, analytics };
