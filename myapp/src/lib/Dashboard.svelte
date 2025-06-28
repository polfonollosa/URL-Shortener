<script>
    let showAdvanced = false;
    let passwordOption = 'no';

    function toggleAdvanced() {
        showAdvanced = !showAdvanced;
    }
</script>


<div class="dashboard">
    <div class="header">

    </div>

    <div class="usefull">
        <h2>Link Shortener</h2>

        <section class="input-section">
            <div class="main-controls">
                <input class="input-first" />
                <button>Cortar</button>
            </div>

            <div class="advanced-wrapper">
                {#if showAdvanced}
                    <div class="addit-op">
                        <select bind:value={passwordOption}>
                            <option value="yes">Con contraseña</option>
                            <option value="no">Sin contraseña</option>
                        </select>
                        {#if passwordOption === 'yes'}
                            <input type="password" placeholder="Contraseña" />
                        {/if}
                    </div>
                {/if}
                <p class="more-opt" on:click={toggleAdvanced}>More Options</p>
            </div>
        </section>

        <section class="results">
            <!-- Mostrar resultados aquí -->
        </section>
    </div>
</div>


<style>

    .dashboard {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .header {
        width: 100vw;
        height: 7vh;
        background-color: #ff4c4c;
    }

    .usefull {
        width: 100vw;
        height: 93vh;
        background-color: #f3f3f3;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-left: 50px;
    }

    .input-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1px;
    }

    /* Input y botón principales */
    .main-controls {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }

    .main-controls button{
        font-weight: bold;
    }

    .input-first {
        height: 10vh;
        width: 57vw;
        border-radius: 8px;
        font-size: 24px;
        padding-inline: 35px;
    }

    .usefull button {
        height: 10vh;
        width: 15vw;
        background-color: #ff4c4c;
        border: none;
        border-radius: 8px;
        opacity: 0.5;
        cursor: pointer;
        color: #ffffff;
        font-size: 15px;
        transition: opacity 0.3s;
        z-index: 9;
    }

    .usefull button:hover {
        opacity: 1;
    }

    /* Opciones avanzadas */
    .advanced-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin-top: 20px;
    }

    .addit-op {
        display: flex;
        gap: 20px;
        align-items: center;
        width: 100%;
        padding-right: 10px;
    }

    .addit-op select,
    .addit-op input {
        padding: 10px;
        font-size: 14px;
        border-radius: 8px;
        border: 1px solid #ccc;
        width: 36vw;
        height: 6vh;
    }

    /* Botón para mostrar opciones */
    .more-opt {
        color: #ff4c3c;
        cursor: pointer;
        font-weight: bold;
        user-select: none;
        padding-right: 1000px;
    }

    .more-opt:hover {
        color: #900fdc;
    }

    /* Resultados (placeholder para el futuro) */
    .results {
        margin-top: 40px;
    }

</style>