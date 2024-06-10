<script>
    import { logoutProfessor } from "../lib/firebase.js";

    async function logout() {
        try {
            await logoutProfessor();
            console.log("Logged out");
        } catch (error) {
            console.error("Error logging out: ", error);
        }
    }
</script>

<button on:click={logout}>Logout</button>