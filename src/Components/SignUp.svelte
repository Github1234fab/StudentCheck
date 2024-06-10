<script>
    import { registerProfessor } from "../lib/firebase.js";

    let email = '';
    let password = '';
     let professorId = ''; // Le nom du professeur ou l'ID du document
    let errorMessage = '';

    async function register() {
        try {
            const user = await registerProfessor(email, password);
            console.log("Registered as: ", user);
        } catch (error) {
            console.error("Error registering: ", error);
        }
    }
</script>

<div>
    <h2>Sign Up</h2>
    <input type="email" placeholder="Email" bind:value={email} />
    <input type="password" placeholder="Password" bind:value={password} />
    <button on:click={register}>Register</button>
</div>
