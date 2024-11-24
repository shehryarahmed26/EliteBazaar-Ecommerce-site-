  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword   } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyC5j96ma9t1uBI1cJh3nxwoD1vvTWgH_RM",
    authDomain: "elite-bazaar.firebaseapp.com",
    projectId: "elite-bazaar",
    storageBucket: "elite-bazaar.firebasestorage.app",
    messagingSenderId: "888610546436",
    appId: "1:888610546436:web:fe7b1e340e2564cbb2e651"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider();
export {
    app,
    auth,
    provider,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword

}