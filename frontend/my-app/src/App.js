import logo from './logo.svg';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// import { } from 'firebase/<service>';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase';
// import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'




// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL7zUJBdvey_51mfA2_pJzNIMF1ybk98o",
  authDomain: "website1-6fb11.firebaseapp.com",
  projectId: "website1-6fb11",
  storageBucket: "website1-6fb11.appspot.com",
  messagingSenderId: "952535001528",
  appId: "1:952535001528:web:61171d05e5fa87c8c2474d",
  measurementId: "G-TMZ9PDV94S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Initialize the FirebaseUI Widget using Firebase.
let ui = new firebaseui.auth.AuthUI(firebase.auth());

// https://firebase.google.com/docs/auth/web/firebaseui?authuser=0#email_address_and_password
ui.start('#firebaseui-auth-container', {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Other config options...
});

// ProviderId: {
//   readonly FACEBOOK: "facebook.com";
//   readonly GITHUB: "github.com";
//   readonly GOOGLE: "google.com";
//   readonly PASSWORD: "password";
//   readonly PHONE: "phone";
//   readonly TWITTER: "twitter.com";
// }


// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}


// below

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
