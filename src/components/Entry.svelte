<!-- <svelte:options customElement="entry-label"/> -->

<script>

    export let heading;
    export let content;
    export let link = undefined;

    $: heading = heading.toUpperCase();
    $: content = content.toUpperCase();

</script>

<p><strong>{heading.toUpperCase()}:</strong>
    {#if link}
        <a href={link}>{content.toUpperCase()}</a>
    {:else}
        {content}
    {/if}
</p>

<div class="tooltip plus">
    <i class="far fa-question-circle"></i>
    MORE INFO
    <span class="tooltiptext plus"> Here you would put additional info that will displayed on mouse hover</span>
</div>

<style>

#id { font-size: 40px;}
strong {
    background-color: yellow;
}
div {
    background-color: red;
}
.tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
}
.tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}



.far {
margin-right: 5px;
color: #00F;
 padding: 7px;
}
</style>