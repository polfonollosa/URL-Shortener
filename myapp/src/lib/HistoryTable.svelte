<script>
    import ShortUrlCard from './ShortUrlCard.svelte';

    let shortUrls = [
        {
            originalUrl: "https://www.google.com",
            shortUrl: "https://sho.rt/abc123",
            date: new Date().toLocaleDateString(),
            qrUrl: "/qr_example.png"
        },
        // puedes ir agregando más para probar
    ];

    // en producción, usarías `onMount` + `fetch()` aquí para obtener datos reales
</script>

<div class="table-container">
    {#each shortUrls as item}
        <ShortUrlCard
                originalUrl={item.originalUrl}
                shortUrl={item.shortUrl}
                date={item.date}
                qrUrl={item.qrUrl}
        />
        <ShortUrlCard
                originalUrl={item.originalUrl}
                shortUrl={item.shortUrl}
                date={item.date}
                qrUrl={item.qrUrl}
        />
        <ShortUrlCard
                originalUrl={item.originalUrl}
                shortUrl={item.shortUrl}
                date={item.date}
                qrUrl={item.qrUrl}
        />
        <ShortUrlCard
                originalUrl={item.originalUrl}
                shortUrl={item.shortUrl}
                date={item.date}
                qrUrl={item.qrUrl}
        />
        <ShortUrlCard
                originalUrl={item.originalUrl}
                shortUrl={item.shortUrl}
                date={item.date}
                qrUrl={item.qrUrl}
        />
        <ShortUrlCard
                originalUrl={item.originalUrl}
                shortUrl={item.shortUrl}
                date={item.date}
                qrUrl={item.qrUrl}
        />
    {/each}
</div>

<style>
    .table-container {
        width: 75vw;
        height: 50vh;
        overflow-y: auto;
        border: 2px solid #4f4f4f;
        padding: 10px;
        border-radius: 8px;
        background-color: #f9f9f9;
    }
</style>
