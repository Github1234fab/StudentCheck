// firestore.js
import { db } from "./firebase.js";
import { collection, getDocs } from "firebase/firestore";

export async function getAllProfessors() {
        try {
                const professorCollection = collection(db, "Professeurs");
                const professorSnapshot = await getDocs(professorCollection);
                const professorList = professorSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                console.log("Professors: ", professorList);

                // Extraire les noms des étudiants
                const studentNames = professorList.flatMap((professor) => professor.students.map((student) => ({ studentName: student })));
                return studentNames;
        } catch (error) {
                console.error("Error fetching professors: ", error);
                return [];
        }
}

// Fonction pour récupérer les étudiants d'un professeur
// export async function getProfessorById(Id) {
//         const professorRef = doc(db, "Professeurs", Id);
//         console.log(professorRef);
//         const professorSnap = await getDoc(professorRef);

//         if (professorSnap.exists()) {
//                 // return professorSnap.data();
//                 console.log(professorSnap.data());
//         } else {
//                 console.log("No such document!");
//                 return null;
//         }
// }

// getProfessorById("Cucchetti");
// getProfessorById("Silvestri");

// // Fonction pour ajouter un élève à un professeur
// export async function addStudentToProfessor(professorId, studentName) {
//         try {
//                 const professorRef = doc(db, "professors", professorId);
//                 await updateDoc(professorRef, {
//                         students: arrayUnion(studentName),
//                 });
//                 console.log("Student added to professor");
//         } catch (e) {
//                 console.error("Error adding student: ", e);
//         }
// }
