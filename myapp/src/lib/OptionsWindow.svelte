<script>
    import { darkMode } from '$lib';
    import { createEventDispatcher } from 'svelte';

    export let visible = true;
    const dispatch = createEventDispatcher();

    function closePanel() {
        dispatch('close');
    }

    function logout() {
        console.log('Cerrar sesión');
    }
</script>

{#if visible}
    <div class="container">
        <div class:options-panel={true} class:night={$darkMode}>
            <p class="close" on:click={closePanel}>×</p>

            <div class="head">
                <div class="user-img">
                    <img src="/AvatarLogo.jpg" alt="" />
                    <div class="edit-overlay">
                        <span class="edit-icon">✏️</span>
                    </div>
                </div>
                <div class="user-details">
                    <p class="title">Opciones</p>
                    <p class="name">John Mazon</p>
                </div>
            </div>

            <div class="option-section">
                <p class="section-title">Apariencia</p>
                <div class="option">
                    <label for="darkMode">🌙 Modo noche</label>
                    <input
                            class="night-btn"
                            type="checkbox"
                            id="darkMode"
                            bind:checked={$darkMode}
                    />
                </div>
            </div>

            <div class="option-section logout">
                <p class="section-title">Cuenta</p>
                <div class="option">
                    <button class="cerrar" on:click={logout}>Cerrar sesión</button>
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 210px;
        height: 100vh;
        width: 100%;
    }

    .options-panel {
        position: relative;
        width: 350px;
        height: 500px;
        background-color: #fff;
        border-radius: 30px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        padding: 24px;
        z-index: 999;
        display: flex;
        flex-direction: column;
        gap: 16px;
        color: #000;
        transition: background-color 0.3s, color 0.3s;
    }

    .options-panel.night {
        background-color: #1e1e1e;
        color: #eee;
    }

    .options-panel .head {
        display: flex;
        gap: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #f6f6f6;
    }

    .options-panel .user-img {
        position: relative;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        overflow: hidden;
        cursor: pointer;
    }

    .options-panel .user-img img {
        width: 100%;
        object-fit: cover;
    }

    .edit-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .edit-icon {
        color: white;
        font-size: 16px;
        pointer-events: none;
    }

    .user-img:hover .edit-overlay {
        opacity: 1;
    }

    .user-details .title {
        font-size: 10px;
        font-weight: 500;
        color: #757575;
        text-transform: uppercase;
        margin-bottom: 6px;
    }

    .user-details .name {
        font-size: 14px;
        font-weight: 500;
    }

    .options-panel.night .user-details .title,
    .options-panel.night .user-details .name,
    .options-panel.night .section-title,
    .options-panel.night .option {
        color: #ccc;
    }

    .option-section {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .section-title {
        font-size: 11px;
        font-weight: 500;
        color: #757575;
        text-transform: uppercase;
    }

    .option {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        color: #555;
    }

    .options-panel.night .option button {
        background-color: #333;
        color: #eee;
    }

    .option button {
        background-color: #f6f6f6;
        padding: 6px 12px;
        border-radius: 8px;
        border: none;
        font-size: 13px;
        cursor: pointer;
        transition: all 0.3s;
    }

    .logout {
        margin-top: auto;
    }

    .logout button:hover {
        background-color: rgba(222, 16, 16, 0.91);
        color: #fff;
    }

    .options-panel.night .option button:hover {
        background-color: #ff4c4c;
        color: #fff;
    }

    .close {
        position: absolute;
        top: 20px;
        right: 24px;
        font-size: 20px;
        font-weight: bold;
        color: #999;
        cursor: pointer;
        transition: color 0.2s ease;
    }

    .close:hover {
        color: #333;
    }

    .night-btn {
        cursor: pointer;
        accent-color: #000;
    }

    .options-panel.night .night-btn {
        accent-color: #fff;
    }
</style>
