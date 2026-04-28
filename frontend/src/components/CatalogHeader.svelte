<script>
    export let kicker;
    export let heading;
    export let onRefresh;
</script>

<div class="catalog-header">
    <div>
        <p class="section-kicker">{kicker}</p>
        <h2>{heading}</h2>
    </div>
    <button class="refresh-button" on:click={onRefresh}>Refresh</button>
</div>
