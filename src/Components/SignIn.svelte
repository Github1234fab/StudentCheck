<script>
    import { loginProfessor } from "../lib/firebase.js";
    import { onMount } from "svelte";

    let email = '';
    let password = '';

    async function login() {
        try {
            const user = await loginProfessor(email, password);
            console.log("Logged in as: ", user);
        } catch (error) {
            console.error("Error logging in: ", error);
        }
    }
</script>

<div>
    <h2>Sign In</h2>
    <input type="email" placeholder="Email" bind:value={email} />
    <input type="password" placeholder="Password" bind:value={password} />
    <button on:click={login}>Login</button>
</div>