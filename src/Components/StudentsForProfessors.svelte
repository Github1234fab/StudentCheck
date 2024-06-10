<script>
    import { onMount } from "svelte";
    import { getProfessorStudents, auth } from "../lib/firebase.js";
    import { writable } from 'svelte/store';
    import SignIn from "./SignIn.svelte";
    import SignUp from "./SignUp.svelte";
    import Logout from "./Logout.svelte";

    let students = writable([]);
    let isAuthenticated = writable(false);

    auth.onAuthStateChanged((user) => {
        if (user) {
            isAuthenticated.set(true);
            loadStudents();
        } else {
            isAuthenticated.set(false);
        }
    });

    async function loadStudents() {
        try {
            const studentNames = await getProfessorStudents();
            students.set(studentNames);
        } catch (error) {
            console.error("Error fetching student names: ", error);
        }
    }
</script>

{#if $isAuthenticated}
    <Logout />
    <div>
        <h2>Students</h2>
        {#each $students as student}
            <p>{student}</p>
        {/each}
    </div>
{:else}
    <SignIn />
    <SignUp />
{/if}
