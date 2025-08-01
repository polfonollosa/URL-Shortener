<script>
    import { darkMode } from '$lib';

    let showAdvanced = false;
    let passwordOption = 'no';
    let hasResult = false;

    let palette = {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#7c7c7c',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#262626',
    }

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


        <section class="input-section">
            <h2 class="shorturl">Link Shortener</h2>
            <div class="main-controls">
                <input class="input-first" />
                <button class="cortar" on:click={toggleResult}>Cortar</button>
            </div>

            <div class="advanced-wrapper">
                {#if showAdvanced}
                    <div class="addit-op">
                        <select class="select" bind:value={passwordOption}>
                            <option class="contra" value="yes">Con contraseña</option>
                            <option class="no-contra" value="no" style="border: none">Sin contraseña</option>
                        </select>
                        {#if passwordOption === 'yes'}
                            <input type="password" placeholder="Contraseña" />
                        {:else}
                            <div style="width: 24vw;"></div> <!-- espacio reservado -->
                        {/if}
                    </div>
                {/if}
                <div class="moreoptions">
                    <p class="more-opt" on:click={toggleAdvanced}>More Options</p>
                    <span class="fi fi-rr-settings"></span>
                </div>

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

    .select{
        border: none;
    }

    .moreoptions{
        display: flex;
        justify-content: center;
        gap: 5px;
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .moreoptions span{
        padding-bottom: 10px;
    }

    .contra{
        padding-left: 100px;
        border: none;
    }

    .copy-group {
        display: flex;
        gap: 10px;
    }

    .results-input{
        border-radius: 8px;
        font-size: 16px;
        padding-inline: 20px;
        border: 2px dashed white;
        height: 7vh;
        width: 50vw;
    }

    .results {
        background-color: #900fdc;
        width: 75vw;
        min-height: 30vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        border: 2px dashed #4f4f4f;
        border-radius: 12px;
        gap: 20px;
        box-sizing: border-box;
        height: 25vh;
    }



    .results-content {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 85%;
    }

    .shorturl{
        font-size: 64px;
        padding-bottom: 48px;
        font-family: "Notable", sans-serif;
        font-weight: 400;
        font-style: normal;
    }


    .compartir {
        width: 20vw;
        height: 5.5vh;
        background-color: #4f4f4f;
        color: #fff;
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
        width: 10vw;
        padding: 0 25px;
        background-color: #4f4f4f;
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
        display: flex;
        flex-direction: column;
    }

    .header {
        width: 100vw;
        height: 7vh;
        background-color: #f3f3f3;
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
        gap: 10px;
    }

    .input-first {
        height: 10vh;
        width: 57vw;
        border-radius: 8px;
        font-size: 24px;
        padding-inline: 35px;
        border: none;
    }

    .usefull .cortar {
        height: 10vh;
        width: 15vw;
        background-color: #4f4f4f;
        border: none;
        border-radius: 8px;
        opacity: 1;
        cursor: pointer;
        color: #ffffff;
        font-size: 24px;
        transition: opacity 0.3s;
        z-index: 9;
        font-weight: bold;
    }

    .usefull button:hover {
        opacity: 0.5;
    }

    /* Opciones avanzadas */
    .advanced-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start; /* mantiene todo a la izquierda */
        justify-content: flex-start;
        width: 100%; /* mismo ancho que .addit-op */
        min-height: 100px; /* reserva espacio aunque no se vea .addit-op */
        gap: 10px;
        margin-top: 20px;
    }


    .addit-op {
        display: flex;
        gap: 20px;
        align-items: center;
        width: 75%;
        padding-right: 5px;
    }

    .addit-op input{
        padding: 10px;
        font-size: 14px;
        border-radius: 8px;
        border: none;
        width: 32vw;
        height: 6vh;
    }

    .addit-op select
     {
        padding: 10px;
        font-size: 14px;
        border-radius: 8px;
        border: none;
        width: 10vw;
        height: 6vh;
        cursor: pointer;
    }

    /* Botón para mostrar opciones */
    .more-opt {
        cursor: pointer;
        font-weight: bold;
        user-select: none;
        transition: all 0.3s    ;
        padding-left: 10px;
    }



    .moreoptions:hover {
        color: #7c7c7c;
    }

    /* Resultados (placeholder para el futuro) */
    .results {
        margin-top: 40px;
        background-color: #f3f3f3;
        width: 75vw;
        height: 25vh;
    }

    .table{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 215px;
        padding-top: 100px;
    }

</style>