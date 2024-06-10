import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, updateDoc, arrayUnion, collection, getDocs } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
        apiKey: "AIzaSyDClwFuKIl2mVTJmhLZo8NWwF-ijpX_vMg",
        authDomain: "studentcheck-26daa.firebaseapp.com",
        projectId: "studentcheck-26daa",
        storageBucket: "studentcheck-26daa.appspot.com",
        messagingSenderId: "803499355888",
        appId: "1:803499355888:web:a35bf33ac00f5f516fdc35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
console.log(db);

export { db, doc, getDoc, updateDoc, arrayUnion, collection, getDocs };
export { auth };
    
    

// Fonction pour l'inscription
export async function registerProfessor(email, password) {
        try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                return userCredential.user;
        } catch (error) {
                throw error;
        }
}


// Fonction pour la connexion
export async function loginProfessor(email, password) {
        try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                return userCredential.user;
        } catch (error) {
                throw error;
        }
}

// Fonction pour la déconnexion
export async function logoutProfessor() {
        try {
                await signOut(auth);
        } catch (error) {
                throw error;
        }
}

// Fonction pour obtenir les étudiants d'un professeur connecté
export async function getProfessorStudents() {
        const user = auth.currentUser;
        console.log(user);
        if (user) {
                const professorDoc = await getDoc(doc(db, "Professeurs", user.uid));
                if (professorDoc.exists()) {
                        return professorDoc.data().students;
                } else {
                        throw new Error("No such document!");
                }
        } else {
                throw new Error("User not authenticated");
        }
}
