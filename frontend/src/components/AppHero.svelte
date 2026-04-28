<script>
    import { getClassicPath, NAV_LINKS } from '../lib/app-shell.js';

    export let appMode;
    export let currentPage;
    export let onLogout;

    const modeLabels = {
        admin: 'Admin Workspace',
        seller: 'Seller Workspace',
        buyer: 'Buyer Workspace'
    };

    $: navLinks = NAV_LINKS[appMode] || NAV_LINKS.buyer;
    $: classicPath = getClassicPath(appMode, currentPage);
</script>

<section class="hero">
    <div>
        <p class="eyebrow">{modeLabels[appMode] || modeLabels.buyer}</p>
        <h1>Random Access Market</h1>
    </div>

    <div class="hero-actions">
        {#each navLinks as link}
            <a href={link.href} class="action-link">{link.label}</a>
        {/each}
        <a href={classicPath} class="action-link secondary">Classic UI</a>
        <button class="action-link logout-button" on:click={onLogout}>Log Out</button>
    </div>
</section>
