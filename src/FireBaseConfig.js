// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCb_EpSBw63XWcwoyijzqnURFwPMW28lEA",
    authDomain: "test-count-921c9.firebaseapp.com",
    projectId: "test-count-921c9",
    storageBucket: "test-count-921c9.appspot.com",
    messagingSenderId: "527002428137",
    appId: "1:527002428137:web:774151ef9bcd42c54b4678",
    measurementId: "G-CVJVR01N0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export default FireBaseConfig;
const db = getFirestore(app);
export { db };