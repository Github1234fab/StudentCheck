<!-- <script>
    import { onMount } from "svelte";
    import { getAllProfessors } from "../lib/firestore.js";

    let professors = []; // Initialise une variable pour stocker les données des professeurs
    let loading = true; // Indicateur de chargement

    let students = [];
    console.log(students)

    onMount(async () => {
        try {
            const professorList = await getAllProfessors();
            console.log("Professors in component: ", professorList); // Debugging log
            professors = professorList; // Stockez les données des professeurs dans la variable
          students.push(professorList)
        } catch (error) {
            console.error("Error fetching data: ", error);
        } finally {
            loading = false; // Désactive l'indicateur de chargement
        }
    });
</script>

<h1>Professors</h1>
{#if loading}
    <p>Loading...</p>
{:else}
    {#each professors as professor}
        <div class="professor">
            <p>Nom: {professor.id}</p>
            <p>Étudiants: {professor.students.join(', ')}</p>
        </div>
    {/each}
{/if}

<style>
    .professor {
        margin-bottom: 20px;
    }
</style> -->


<script>
        import "../lib/firestore.js";
</script>