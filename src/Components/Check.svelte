<!-- <script>
        export let weekNumber;

        let tab = [];
        let names = [
                { studentName: "Abdel" },
                { studentName: "Gregory" },
                { studentName: "Georgio" },
                { studentName: "Mishka" },
                { studentName: "Mira" },
                { studentName: "Eliot" },
                { studentName: "Matt" },
                { studentName: "Maria" },
                { studentName: "Evret" },
                { studentName: "Maïa" },
                { studentName: "Malo" },
                 { studentName: "Mirabel" },
                { studentName: "Elea" },
                { studentName: "Anderson" },
                { studentName: "Lilian" },
                { studentName: "Charly" },
                { studentName: "Orliane" },
                { studentName: "Arnold" },
        ];

        function isChecked(e) {
                //récupération du nom de l'élève
                let studentName = e.target.parentNode.textContent.trim();
                //condition pour savoir si l'élève est coché ou non et pousser son nom dans le tableau tab
                if (e.target.checked) {
                        console.log(studentName + " est présent");
                        tab.push(studentName);
                        tab = [...tab];
                        console.log(tab);
                } else {
                        console.log(studentName + " est absent");
                        //récupération de l'index de l'élève dans le tableau tab
                        const studentIndex = tab.indexOf(studentName);
                        //suppression de l'élève du tableau tab
                        if (studentIndex !== -1) {
                                tab.splice(studentIndex, 1);
                        }
                        console.log(tab);
                        tab = [...tab];
                }
        }
</script>

<div class="container">
        <div class="grid">
                <div class="week">{weekNumber}</div>
                <div class="wrapper-students">
                        {#each names as student}
                                <div class="students">
                                        {student.studentName}
                                        <input type="checkbox" class="check" on:change={isChecked} />
                                </div>
                        {/each}
                </div>
                <div class="wrapper-studentWritten">
                        <p>Les élèves présents cette semaine:</p>
                        <p class="tabItemsWritten">
                                &nbsp;
                                {#each tab as item}
                                        {item}, &nbsp;
                                {/each}
                        </p>
                </div>
        </div>
</div>

<style>
        .container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-top: 50px;
                height: 100%;
        }

        .grid {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                margin-bottom: 50px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.297);
                border-radius: 20px;
                background-color: rgb(214, 213, 213);
                padding: 10px;
                height: 100%;
                width: 90%;
        }

        .wrapper-students {
                display: flex;
                flex-direction: column;
                margin-top: -20px;
                gap: 10px;
                margin-top: 130px;
                width: 60%;
        }
        .students {
                border: 1px solid rgb(214, 213, 213);
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 30px;
                padding: 14px;
                border-radius: 10px;
                font-size: 1.2rem;
                border: rgb(236, 236, 236) solid 3px;
        }
        .week {
                position: absolute;
                display: flex;
                top: 30px;
                left: 30px;
                align-items: center;
                justify-content: center;
                border: 1px solid grey;
                padding: 30px;
                background-color: brown;
                color: white;
                max-width: 50px;
                max-height: 50px;
                border-radius: 10px;
                box-shadow: inset 0px 0px 5px 1px rgb(0, 0, 0);
                font-weight: 900;
        }
        .wrapper-studentWritten {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 20px;
                margin-top: 50px;
                margin-bottom: 30px;
                width: 100%;
        }
        .tabItemsWritten {
                display: flex;
                align-items: center;
                justify-content:flex-start;
                color: rgb(21, 91, 212);
                font-weight: 700;
                background-color: white;
                box-shadow: inset 0px 0px 10px 2px rgba(0, 0, 0, 0.297);
                border-radius: 10px;
                max-height: 600px;
                width: 90%;
                padding: 15px;
                font-size: 1.2rem;
        }
        .check {
                height: 40px;
                width: 40px;
                background-color: white;
                color: blue;
        }
        p{
                font-size: 1.1rem;
                font-weight: 700;
        }

       
</style> -->




<script>
    import { onMount } from "svelte";
    import { getAllProfessors } from "../lib/firestore.js";
    import { writable } from 'svelte/store';

    export let weekNumber;

    let tab = [];
    let names = writable([]); // Créez un store pour stocker les noms des étudiants

    onMount(async () => {
        try {
            const students = await getAllProfessors();
            console.log("Student Names: ", students); // Vérifiez les noms des étudiants dans la console
            names.set(students); // Stockez les noms des étudiants dans le store
        } catch (error) {
            console.error("Error fetching student names: ", error);
        }
    });

    function isChecked(e) {
        //récupération du nom de l'élève
        let studentName = e.target.parentNode.textContent.trim();
        //condition pour savoir si l'élève est coché ou non et pousser son nom dans le tableau tab
        if (e.target.checked) {
            console.log(studentName + " est présent");
            tab.push(studentName);
            tab = [...tab];
            console.log(tab);
        } else {
            console.log(studentName + " est absent");
            //récupération de l'index de l'élève dans le tableau tab
            const studentIndex = tab.indexOf(studentName);
            //suppression de l'élève du tableau tab
            if (studentIndex !== -1) {
                tab.splice(studentIndex, 1);
            }
            console.log(tab);
            tab = [...tab];
        }
    }
</script>

<div class="container">
    <div class="grid">
        <div class="week">{weekNumber}</div>
        <div class="wrapper-students">
            {#if $names.length > 0}
                {#each $names as student}
                    <div class="students">
                        {student.studentName}
                        <input type="checkbox" class="check" on:change={isChecked} />
                    </div>
                {/each}
            {:else}
                <p>Loading...</p>
            {/if}
        </div>
        <div class="wrapper-studentWritten">
            <p>Les élèves présents cette semaine:</p>
            <p class="tabItemsWritten">
                &nbsp;
                {#each tab as item}
                    {item}, &nbsp;
                {/each}
            </p>
        </div>
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
        height: 100%;
    }

    .grid {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 50px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.297);
        border-radius: 20px;
        background-color: rgb(214, 213, 213);
        padding: 10px;
        height: 100%;
        width: 90%;
    }

    .wrapper-students {
        display: flex;
        flex-direction: column;
        margin-top: -20px;
        gap: 10px;
        margin-top: 130px;
        width: 60%;
    }

    .students {
        border: 1px solid rgb(214, 213, 213);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
        padding: 14px;
        border-radius: 10px;
        font-size: 1.2rem;
        border: rgb(236, 236, 236) solid 3px;
    }

    .week {
        position: absolute;
        display: flex;
        top: 30px;
        left: 30px;
        align-items: center;
        justify-content: center;
        border: 1px solid grey;
        padding: 30px;
        background-color: brown;
        color: white;
        max-width: 50px;
        max-height: 50px;
        border-radius: 10px;
        box-shadow: inset 0px 0px 5px 1px rgb(0, 0, 0);
        font-weight: 900;
    }

    .wrapper-studentWritten {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        margin-top: 50px;
        margin-bottom: 30px;
        width: 100%;
    }

    .tabItemsWritten {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: rgb(21, 91, 212);
        font-weight: 700;
        background-color: white;
        box-shadow: inset 0px 0px 10px 2px rgba(0, 0, 0, 0.297);
        border-radius: 10px;
        max-height: 600px;
        width: 90%;
        padding: 15px;
        font-size: 1.2rem;
    }

    .check {
        height: 40px;
        width: 40px;
        background-color: white;
        color: blue;
    }

    p {
        font-size: 1.1rem;
        font-weight: 700;
    }
</style>
