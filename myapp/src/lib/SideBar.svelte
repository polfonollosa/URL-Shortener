<div class="container">
    <div class="sidebar">
        <div class="head">
            <div class="user-img">
                <img src="/AvatarLogo.jpg" alt=""/>
            </div>
            <div class="user-details">
                <p class="title">web developer</p>
                <p class="name">John Mazon</p>
            </div>
        </div>
    </div>
</div>

<style>

    @import url(https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900);


    .container{
        width: 256px;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .sidebar{
        width: 256px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        padding: 24px;
        border-radius: 30px;
    }

    .sidebar .head{
        display: flex;
        gap: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #f6f6f6;
    }

    .user-img{
        width: 44px;
        height: 44px;
        border-radius: 50%;
        overflow: hidden;
    }

    .user-img img{
        width: 100%;
        object-fit: cover;
    }

    .user-details .title{
        font-size: 10px;
        font-weight: 500;
        color: #757575;
        text-transform: uppercase;
    }

    .user-details .name{
        font-size: 14px;
        font-weight: 500;
    }

</style>