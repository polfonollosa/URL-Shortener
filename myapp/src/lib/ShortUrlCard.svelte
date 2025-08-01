<script>
    export let originalUrl;
    export let shortUrl;
    export let date;
    export let qrUrl;
</script>

<div class="row">
    <div class="cell">https://www.youtube.com/watch?v=B3Sjnfuvwv0</div>
    <div class="cell"><a href={shortUrl} target="_blank">https://www.mixamo.com/#/?page=1&type=Motion%2CMotionPack</a></div>
    <div class="cell">17-12-2006</div>
    <div class="cell"><img src={qrUrl} alt="QR code" /></div>
</div>

<style>
    .row {
        display: flex;
        align-items: center;
        padding: 8px 12px;
        border-bottom: 1px solid #ddd;
        height: 80px;
        box-sizing: border-box;
        gap: 50px;
    }

    .cell {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-right: 12px;
        width: 200px;
    }

    .cell img {
        width: 50px;
        height: 50px;
    }

    a {
        color: #4f4f4f;
        text-decoration: none;
    }
</style>
