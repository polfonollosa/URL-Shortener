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
                            <span class="text">Your URL</span>
                            <i class="fi fi-rr-angle-down arrow"></i>
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
                    <li class="">
                        <a href="#">
                            <i class="fi fi-rr-chart-line-up"></i>
                            <span class="text">Your URL</span>
                            <i class="fi fi-rr-angle-down arrow"></i>
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
        gap: 2px;
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

    .arrow {
        transition: transform 0.3s ease;
    }

    .arrow.rotated {
        transform: rotate(-180deg);
    }


</style>

<script>

    import { onMount } from 'svelte';
    import jQuery from 'jquery';

    onMount(() => {
        jQuery('.menu > ul > li').on('click', function () {
            jQuery(this).siblings().removeClass("active")
            jQuery(this).toggleClass('active');
            jQuery(this).find("ul").slideToggle();
            jQuery(this).siblings().find('ul').slideUp();
            jQuery(this).siblings().find('ul').find('li').removeClass('active');
            jQuery(this).find('.arrow').toggleClass('rotated');
        });
    });

</script>