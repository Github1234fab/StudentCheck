<script>
        let tab = [];



                let names = [
                { studentName: "Abdel" },
                { studentName: "Gregory" },
                { studentName: "Georges" },
                { studentName: "Mishka" },
                { studentName: "Mira" },
                { studentName: "Eberskin" },
        ];
    
        function isChecked(e) {
                //récupération du nom de l'élève
                let studentName = e.target.parentNode.textContent.trim();
                //condition pour savoir si l'élève est coché ou non et pousser son nom dans le tableau tab
                if (e.target.checked) {
                        console.log(studentName + " est présent");
                        tab.push(studentName);
                        console.log(tab);
                } else {
                        console.log(studentName + " est absent");
                        //récupération de l'index de l'élève dans le tableau tab
                        const studentIndex = tab.indexOf(studentName);
                        //suppression de l'élève du tableau tab
                        if (studentIndex !== -1) {
                                tab.splice(studentIndex, 1);
                        }
                         tab = tab; 
                        console.log(tab);
                }
        }
        $: studentsChecked = tab.join(', ');
</script>

<div class="container">
        <h1>Nom du prof</h1>
        <div class="grid">
                <div class="week">Semaine 38</div>
                <div class="wrapper-students">
                        {#each names as student}
                                <div class="students">
                                        {student.studentName}
                                        <input type="checkbox" class="check" on:change={isChecked} />
                                </div>
                        {/each}
                </div>
        </div>
</div>
<div>{tab.join(', ')}</div>

<style>
        .container {
                display: flex;
                flex-direction: column;
        }

        .grid {
                display: grid;
                grid-template-columns: repeat(10, 1fr);
                grid-template-rows: repeat(auto);
                border: solid 1px grey;
        }

        .wrapper-students {
                display: flex;
                flex-direction: column;
                grid-column: 1;
                grid-row: auto;
        }
        .students {
                border: 1px solid grey;
                min-width: 200px;
                display: flex;
                justify-content: space-between;
                padding: 10px;
        }
        .week {
                border: 1px solid grey;
                min-width: 200px;
                display: flex;
                justify-content: space-between;
                padding: 10px;
                background-color: brown;
                color: white;
        }
</style>
