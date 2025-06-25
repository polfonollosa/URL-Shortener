<div class="container">
    <div class="options-panel">
        <p class="close">×</p> <!-- <- Mover aquí la cruz -->

        <div class="head">
            <div class="user-img">
                <img src="/AvatarLogo.jpg" alt=""/>
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
                <input class="night-btn" type="checkbox" id="darkMode" />
            </div>
        </div>

        <div class="option-section logout">
            <p class="section-title">Cuenta</p>
            <div class="option">
                <button class="cerrar">Cerrar sesión</button>
            </div>
        </div>
    </div>
</div>



<style>

    .user-img {
        position: relative;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        overflow: hidden;
        cursor: pointer;
    }

    .edit-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4); /* fondo oscuro semitransparente */
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

    /* Al hacer hover en la imagen, muestra el overlay */
    .user-img:hover .edit-overlay {
        opacity: 1;
    }


    .night-btn:hover{
        background-color: #757575;
    }

    .night-btn{
        cursor: pointer;
    }

    button{
        transition: all 0.3s;
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


    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh; /* Altura total del viewport */
        width: 100%;
    }


    .options-panel {
        position: relative;
        width: 350px;
        height: 500px;
        background-color: #fff;
        border-radius: 30px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        padding: 24px;
        z-index: 999;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .options-panel .head {
        display: flex;
        gap: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #f6f6f6;
    }

    .options-panel .user-img {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        overflow: hidden;
    }

    .options-panel .user-img img {
        width: 100%;
        object-fit: cover;
    }

    .options-panel .user-details .title {
        font-size: 10px;
        font-weight: 500;
        color: #757575;
        text-transform: uppercase;
        margin-bottom: 6px;
    }

    .options-panel .user-details .name {
        font-size: 14px;
        font-weight: 500;
    }

    .options-panel .option-section {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .options-panel .section-title {
        font-size: 11px;
        font-weight: 500;
        color: #757575;
        text-transform: uppercase;
    }

    .options-panel .option {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        color: #555;
    }


    .options-panel .option button {
        background-color: #f6f6f6;
        padding: 6px 12px;
        border-radius: 8px;
        border: none;
        font-size: 13px;
        cursor: pointer;
    }

    /* Solo para el último bloque */
    .logout {
        margin-top: auto;
    }

    .logout button:hover{
        background-color: rgba(222, 16, 16, 0.91);
        color: #fff;
    }

</style>

<script>
    
</script>
