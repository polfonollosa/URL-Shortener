<div class="dashboard">
    <div class="header">

    </div>
    <div class="usefull">
        <h2> Link Shortener </h2>
        <section class="input-section">
            <input>
            <button>
                <a> Cortar </a>
            </button>
        </section>
    </div>

</div>

<style>

    .dashboard{
        width: 100vw;
        height: 100vh
    }

    .header{
        width: 100vw;
        height: 7vh;
        background-color: #ff4c4c;
    }

    .usefull{
        width: 100vw;
        height: 93vh;
        background-color: #f3f3f3;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .usefull input{
        height: 8vh;
        width: 55vw;
        border-radius: 8px;
    }

    .usefull button{
        height: 8vh;
        width: 15vw;
        background-color: #ff4c4c;
        border-style: none;
        border-radius: 8px;
        opacity: 50%;
        cursor: pointer;
    }

    .usefull button a{
        color: #ffffff;
        font-size: 15px;
    }

    .usefull button:hover  {
        opacity: 100%;
    }





</style>