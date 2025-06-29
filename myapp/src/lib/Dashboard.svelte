<script>
    let showAdvanced = false;
    let passwordOption = 'no';
    let hasResult = false;

    function toggleAdvanced() {
        showAdvanced = !showAdvanced;
    }

    function toggleResult(){
        hasResult = !hasResult;
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
                <button class="cortar" on:click={toggleResult}>Cortar</button>
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
        {#if hasResult}
            <section class="results">
                <div class="results-content">
                    <div class="copy-group">
                        <input class="results-input" />
                        <button class="copiar">Copiar</button>
                    </div>
                    <div class="share-group">
                        <button class="compartir">Compartir</button>
                    </div>
                </div>

                <div class="results-img"></div>
            </section>
        {/if}
    </div>
</div>


<style>

    .copy-group {
        display: flex;
        gap: 15px;
        align-items: stretch; /* <- asegura igual altura vertical */
    }

    .results-input,
    .copiar {
        height: 6vh;
        border-radius: 8px;
        font-size: 16px;
        padding-inline: 20px;
        border: none;
    }

    .copiar{
        opacity: 70%;
    }

    .results {
        margin-top: 40px;
        background-color: #900fdc;
        width: 75vw;
        min-height: 30vh; /* asegura espacio mínimo */
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        border: 2px dashed white;
        border-radius: 12px;
        gap: 20px;
        box-sizing: border-box;
    }



    .results-content {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 85%;
    }

    .copy-group {
        display: flex;
        gap: 15px;
    }

    .results-input {
        height: 6vh;
        width: 50vw;
        border-radius: 8px;
        font-size: 16px;
        padding-inline: 20px;
        border: none;
    }

    .main-controls .copiar{
        height: 10px;
    }

    .copiar {
        width: 10vw;
        height: 2vh;
        background-color: #ff4c4c;
        color: white;
        border: none;
        border-radius: 8px;
        font-weight: bold;
        cursor: pointer;
    }

    .compartir {
        width: 20vw;
        height: 5.5vh;
        background-color: #ffffff;
        color: #900fdc;
        border: none;
        border-radius: 8px;
        font-weight: bold;
        cursor: pointer;
    }

    .results-img {
        height: 95%; /* menor que 100% para reducir altura */
        width: 15%;
        background-image: url("/descarga.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        align-self: center; /* para centrar verticalmente dentro del padre flex */
    }

    /* Botón copiar */
    .copiar {
        height: 7vh;
        padding: 0 25px;
        background-color: #ff4c4c;
        color: white;
        border: none;
        border-radius: 8px;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .copiar:hover {
        opacity: 100%;
    }


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

    .main-controls .cortar{
        font-weight: bold;
    }

    .input-first {
        height: 10vh;
        width: 57vw;
        border-radius: 8px;
        font-size: 24px;
        padding-inline: 35px;
    }

    .usefull .cortar {
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
        transition: all 0.3s    ;
    }

    .more-opt:hover {
        color: #900fdc;
    }

    /* Resultados (placeholder para el futuro) */
    .results {
        margin-top: 40px;
        background-color: #900fdc;
        width: 75vw;
        height: 25vh;
    }

</style>