
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAkccPS4pT0vV9XUeqN28U3KX-7iIN0k2o",
  authDomain: "movie-now-7a362.firebaseapp.com",
  databaseURL: "https://movie-now-7a362-default-rtdb.firebaseio.com",
  projectId: "movie-now-7a362",
  storageBucket: "movie-now-7a362.appspot.com",
  messagingSenderId: "376731613318",
  appId: "1:376731613318:web:6c18df095e8d3f5eecb907"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default initializeApp;