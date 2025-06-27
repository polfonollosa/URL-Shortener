<script>
    import { darkMode } from '$lib';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let sidebarActive = false;
    let expandedMenuIndex = null;
    let selectedMenuIndex = null;

    let menus = [
        {
            title: "Main",
            items: [
                { label: "Dashboard", icon: "fi fi-rr-home", link: "#" },
                { label: "Urls", icon: "fi fi-rr-file", link: "#" },
                { label: "Schedules", icon: "fi fi-rr-calendar", link: "#" },
                {
                    label: "Statistics",
                    icon: "fi fi-rr-chart-line-up",
                    link: "#",
                    subItems: [
                        { label: "Share", link: "#" },
                        { label: "Tops", link: "#" }
                    ]
                }
            ]
        },
        {
            title: "Settings",
            items: [
                { label: "Settings", icon: "fi fi-rr-settings", link: "#" }
            ]
        },
        {
            title: "Account",
            items: [
                { label: "Help", icon: "fi fi-rr-question", link: "#" },
                { label: "Logout", icon: "fi fi-rr-exit", link: "#" }
            ]
        }
    ];

    function toggleSidebar() {
        sidebarActive = !sidebarActive;
    }

    function toggleMenu(index, hasSubItems) {
        if (selectedMenuIndex === index) {
            // Si ya está seleccionado, deseleccionamos
            selectedMenuIndex = null;
            expandedMenuIndex = null;
            return;
        }

        if (hasSubItems) {
            expandedMenuIndex = index;
        } else {
            expandedMenuIndex = null;
        }

        selectedMenuIndex = index;
    }


    function selectSubItem() {
        expandedMenuIndex = null;
        selectedMenuIndex = null;
    }

    function handleMenuClick(item) {
        if (item.label === 'Settings') {
            dispatch('openSettings'); // 👈 Emite evento al padre
        }
    }
</script>

<div class="container">
    <div class={`sidebar ${$darkMode ? 'night' : ''} ${sidebarActive ? 'active' : ''}`}>
        <div class="menu-btn" on:click={toggleSidebar}>
            <i class="fi fi-rr-angle-left"></i>
        </div>

        <div class="head">
            <div class="user-img">
                <img src="/AvatarLogo.jpg" alt="" />
            </div>
            <div class="user-details">
                <p class="title">web developer</p>
                <p class="name">John Mazon</p>
            </div>
        </div>

        <div class="nav">
            {#each menus.slice(0, 2) as menu, i}
                <div class="menu">
                    <p class="title">{sidebarActive && menu.title.length > 4 ? menu.title.slice(0, 4) : menu.title}</p>
                    <ul>
                        {#each menu.items as item, j}
                            <li class={(selectedMenuIndex === `${i}-${j}`) ? 'active' : ''}>
                                <a
                                        href={item.link}
                                        on:click|preventDefault={() => {
										toggleMenu(`${i}-${j}`, !!item.subItems);
										handleMenuClick(item);
									}}
                                >
                                    <i class={item.icon}></i>
                                    <span class="text">{item.label}</span>
                                    {#if item.subItems}
                                        <i class="fi fi-rr-angle-down" style={`transform: rotate(${expandedMenuIndex === `${i}-${j}` ? '180deg' : '0deg'})`}></i>
                                    {/if}
                                </a>
                                {#if item.subItems}
                                    <ul class="sub-menu" style="display: {expandedMenuIndex === `${i}-${j}` ? 'block' : 'none'}">
                                        {#each item.subItems as subItem}
                                            <li>
                                                <a href={subItem.link} on:click|preventDefault={selectSubItem}>
                                                    <span class="text">{subItem.label}</span>
                                                </a>
                                            </li>
                                        {/each}
                                    </ul>
                                {/if}
                            </li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>

        <div class="account-menu">
            {#each menus.slice(2) as menu, i}
                <div class="menu">
                    <p class="title">{sidebarActive && menu.title.length > 4 ? menu.title.slice(0, 4) : menu.title}</p>
                    <ul>
                        {#each menu.items as item, j}
                            <li class={(selectedMenuIndex === `2-${j}`) ? 'active' : ''}>
                                <a href={item.link} on:click|preventDefault={() => toggleMenu(`2-${j}`, !!item.subItems)}>
                                    <i class={item.icon}></i>
                                    <span class="text">{item.label}</span>
                                </a>
                            </li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>

    @import url(https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900);

    .nav {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .account-menu {
        margin-top: auto; /* Esto empuja el Account hacia abajo */
    }

    .sidebar.night {
        background-color: #1c1c1c;
        color: white;
    }


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

    .menu .titol{
        font-size: 11px;
        font-weight: 500;
        color: #757575;
        text-transform: uppercase;

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

    .sidebar.active .title {
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

    .sidebar.night {
        background-color: #1c1c1c;
    }

    .sidebar.night .menu-btn {
        background-color: #2a2a2a;
        border-color: #3a3a3a;
        color: #ccc;
    }

    .sidebar.night .menu-btn:hover i {
        color: #fff;
    }

    .sidebar.night .head {
        border-bottom: 1px solid #2f2f2f;
    }

    .sidebar.night .user-details .title,
    .sidebar.night .menu .title,
    .sidebar.night .menu .titol,
    .sidebar.night .menu ul li a {
        color: #ccc;
    }

    .sidebar.night .user-details .name {
        color: #f2f2f2;
    }

    .sidebar.night .menu ul li > a:hover,
    .sidebar.night .menu ul li.active > a {
        background-color: #2f2f2f;
        color: #fff;
    }

    .sidebar.night .menu .sub-menu {
        background-color: #2a2a2a;
        border-color: #3a3a3a;
        box-shadow: 0px 10px 8px rgba(0, 0, 0, 0.4);
    }

    .sidebar.night .sidebar.active .menu > ul > li > a .text,
    .sidebar.night .sidebar.active .menu > ul > li > a .text::after {
        background-color: #000;

    }

    .sidebar.night .menu ul li > a .text {
        color: #eee;
    }


</style>

