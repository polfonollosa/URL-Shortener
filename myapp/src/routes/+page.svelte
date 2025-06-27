<script>
    import SideBar from '$lib/SideBar.svelte';
    import OptionsWindow from '$lib/OptionsWindow.svelte';
    import ThreeScene from "$lib/ThreeScene.svelte";
    import Dashboard from "$lib/Dashboard.svelte";

    let showOptions = false;
</script>

<div class="layout">
    <SideBar on:openSettings={() => showOptions = true} />
    <OptionsWindow visible={showOptions} on:close={() => showOptions = false} />
</div>
<Dashboard></Dashboard>


<style>
    .layout {
        position: fixed;
        display: flex;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
    }
</style>
