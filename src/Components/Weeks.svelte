<script>
        import Check from "../Components/Check.svelte";
        let weeks = [
                { week: 38 },
                { week: 39 },
                { week: 40 },
                { week: 41 },
                { week: 42 },
                { week: 43 },
                { week: 44 },
                { week: 45 },
        ];
        // let teacherName = [
        // { teacherName: "Dupond"},
        // ];
</script>

<div class="container">
{#each weeks as week}
        <Check weekNumber={week.week} />
{/each}

</div>

<style>

.container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 20px;
}
</style>
