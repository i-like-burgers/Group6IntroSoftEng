<script>
    export let adminAuditLogs = [];
    export let formatActionType;
    export let formatDate;
</script>

{#if adminAuditLogs.length === 0}
    <div class="state-card">No audit log entries yet.</div>
{:else}
    <div class="panel admin-box">
        <div class="admin-panel-header">
            <div>
                <p class="section-kicker">Recent actions</p>
                <h3>Recorded system activity</h3>
            </div>
        </div>

        <div class="admin-audit-list">
            {#each adminAuditLogs as log}
                <article class="admin-audit-row">
                    <p class="seller admin-audit-when">{formatDate(log.createdAt)}</p>
                    <p class="admin-audit-user">{log.username}</p>
                    <p class="admin-audit-action">{formatActionType(log.actionType)}</p>
                    <p class="admin-audit-details">{log.details}</p>
                </article>
            {/each}
        </div>
    </div>
{/if}
