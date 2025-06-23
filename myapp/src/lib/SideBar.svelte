<div class="container">
    <div class="sidebar active">
        <div class="menu-btn">
            <i class="fi fi-rr-angle-left"></i>
        </div>
        <div class="head">
            <div class="user-img">
                <img src="/AvatarLogo.jpg" alt=""/>
            </div>
            <div class="user-details">
                <p class="title">web developer</p>
                <p class="name">John Mazon</p>
            </div>
        </div>
        <div class="nav">
            <div class="menu">
                <p class="title">Main</p>
                <ul>
                    <li class="">
                        <a href="#">
                            <i class="fi fi-rr-home"></i>
                            <span class="text">Dashboard</span>
                        </a>
                    </li>
                    <li class="">
                        <a href="#">
                            <i class="fi fi-rr-user"></i>
                            <span class="text">YourURL</span>
                            <i class="fi fi-rr-angle-down "></i>
                        </a>
                        <ul class="sub-menu">
                            <li>
                                <a href="#">
                                    <span class="text">Urls</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="text">Statistics</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="active">
                        <a href="#">
                            <i class="fi fi-rr-file"></i>
                            <span class="text">Urls</span>
                        </a>
                    </li>
                    <li class="">
                        <a href="#">
                            <i class="fi fi-rr-calendar"></i>
                            <span class="text">Schedules</span>
                        </a>
                    </li>
                    <li class="active">
                        <a href="#">
                            <i class="fi fi-rr-chart-line-up"></i>
                            <span class="text">Statistics</span>
                            <i class="fi fi-rr-angle-down"></i>
                        </a>
                        <ul class="sub-menu">
                            <li>
                                <a href="#">
                                    <span class="text">Share</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="text">Tops</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="menu">
                <p class="title">Settings</p>
                <ul>
                    <li class="">
                        <a href="#">
                            <i class="fi fi-rr-settings"></i>
                            <span class="text">Settings</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="menu">
            <p class="title">Account</p>
            <ul>
                <li>
                    <a href="#">
                        <i class="fi fi-rr-question "></i>
                        <span class="text">Help</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fi fi-rr-exit"></i>
                        <span class="text">Logout</span>
                    </a>
                </li>
            </ul>
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
        position: relative;
        width: 256px;
        height: 100vh;
        display: flex;
        gap: 2px;
        flex-direction: column;
        background-color: #fff;
        padding: 24px;
        border-radius: 30px;
        transition: all 0.3s;
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
        margin-bottom: 6px;
    }

    .user-details .name{
        font-size: 14px;
        font-weight: 500;
    }

    .menu .title{
        font-size: 11px;
        font-weight: 500;
        color: #757575;
        text-transform: uppercase;

    }

    .menu ul li{
        position:relative;
        list-style: none;
        margin-bottom: 8px;
    }

    .menu ul{
        margin-top:8px
    }

    .menu ul li a{
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
        font-weight: 500;
        color: #757575;
        text-decoration: none;
        padding: 12px 8px;
        border-radius: 8px;

    }

    .menu ul li > a:hover,
    .menu ul li.active > a{
        color: #000;
        background-color: #f6f6f6;
    }

    .menu ul li.active fi.fi-rr-angle-down{
        transform: rotate(180deg);
    }

    .menu ul li .fi.fi-rr-home{
        font-size: 15px;
    }

    .menu ul li .fi.fi-rr-angle-down{
        padding-top: 3px;
        font-size: 15px;
    }


    .fi.fi-rr-chart-line-up{
        font-size: 15px;
    }

    .menu ul li .text{
        flex: 1;
    }

    .fi.fi-rr-user{
        font-size: 15px;
    }

    .menu .sub-menu{
        display: none;
        margin-left: 20px;
        padding-left: 20px;
        padding-top: 0px;
        border-left: 1px solid #f6f6f6
    }

    .menu .sub-menu li a{
        padding: 10px 8px;
        font-size: 13px;
    }

    .active .fi.fi-rr-angle-down{
        transform: rotate(180deg);
    }
    .menu:not(last-child){
        padding-bottom: 5px;
        margin-bottom: 5px;
        border-bottom: 2px solid #f6f6f6;
    }

    .menu:not(last-child) .fi.fi-rr-settings{
        font-size: 15px;
    }

    .nav{
        flex: 1;
    }

    .menu-btn{
        position: absolute;
        right: -14px;
        top: 3.5%;
        width: 28px;
        height: 28px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #757575;
        border: 3px solid #f6f6f6;
        cursor: pointer;
        background-color: #fff;
    }

    .menu-btn:hover i{
        color: #000;
    }

    .menu-btn i{
        transition: all 0.3s;
    }


    .sidebar.active{
        width: 80px;
    }
    .sidebar.active .menu-btn i{
        transform: rotate(180deg);
    }

    .sidebar.active .user-details{
        display: none;
    }

    .sidebar.active .nav .menu .title {
        text-align: center;
    }

    .sidebar.active .menu ul li .fi.fi-rr-angle-down{
        display: none;
    }

    .sidebar.active .menu > ul > li > a{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .sidebar.active .menu > ul > li > a .text{
        position: absolute;
        left: 70px;
        top: 50%;
        transform: translateY(-50%);
        padding: 10px;
        border-radius: 4px;
        color: #fff;
        background-color: #000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s;
    }

    .sidebar.active .menu > ul > li > a .text::after{
        content: "";
        position: absolute;
        left: -5px;
        top: 20%;
        width: 20px;
        height: 20px;
        border-radius: 2px;
        background-color: #000;
        transform: rotate(450deg);
        z-index: -1;
    }

    .sidebar.active .menu > ul > li > a:hover .text{
        left: 50px;
        opacity: 1;
        visibility: visible;
    }

    .sidebar.active .menu .sub-menu{
        position: absolute;
        top: 0px;
        left: 20px;
        border-radius:20px;
        padding: 10px 20px;
        border: 1px solid #f6f6f6;
        background-color: #fff;
        box-shadow: 0px 10px 8px rgba(0,0,0,0.1);
    }



</style>

<script>

    import { onMount } from 'svelte';
    import jQuery from 'jquery';

    onMount(() => {
        jQuery('.menu > ul > li').on('click', function () {
            jQuery(this).siblings().removeClass("active")
            jQuery(this).toggleClass("active");
            jQuery(this).find("ul").slideToggle();
            jQuery(this).siblings().find("ul").slideUp();
            jQuery(this).siblings().find("active").find("li").removeClass("active");
        });
    });

    onMount(() => {
        jQuery(".menu-btn").on('click', function () {
            jQuery(".sidebar").toggleClass("active");
        });
    });

</script>