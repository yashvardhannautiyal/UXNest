import {initalizeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBaKAk2LR27dQ2rvuy9iR6RBwwTV4FlGVo",
    authDomain: "uxnest-b6abc.firebaseapp.com",
    projectId: "uxnest-b6abc",
    storageBucket: "uxnest-b6abc.firebasestorage.app",
    messagingSenderId: "227653709957",
    appId: "1:227653709957:web:07fcf081e67b8be23c79ec",
    measurementId: "G-2CLND4Q1WJ"
  };

  export const app = initalizeApp(firebaseConfig);