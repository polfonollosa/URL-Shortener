<!-- +page.svelte -->
<script>
    import SideBar from '$lib/SideBar.svelte';
    import OptionsWindow from '$lib/OptionsWindow.svelte';
    import Dashboard from "$lib/Dashboard.svelte";

    let showOptions = false;
</script>

<!-- UI superpuesta -->
<div class="floating-ui">
    <SideBar on:openSettings={() => showOptions = true} />
    <OptionsWindow visible={showOptions} on:close={() => showOptions = false} />
</div>

<!-- Contenido principal -->
<div class="main-content">
    <Dashboard />
</div>

<style>
    .floating-ui {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none; /* deja pasar clics si necesario */
        z-index: 999;
    }

    .floating-ui :global(*) {
        pointer-events: auto; /* solo sus hijos pueden recibir eventos */
    }

    .main-content {
        height: 100vh;
    }
</style>
