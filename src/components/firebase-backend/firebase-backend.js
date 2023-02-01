import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBeUtvdu5QP4Vm0t2ceDuOx8FH2H_h97kw",
    authDomain: "login-page-project-1.firebaseapp.com",
    projectId: "login-page-project-1",
    storageBucket: "login-page-project-1.appspot.com",
    messagingSenderId: "795678123888",
    appId: "1:795678123888:web:681969afcd1bfb882311b5",
    measurementId: "G-C2GDL98GQW"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

