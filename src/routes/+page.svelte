<script>
    let { data } = $props();
</script>

<h1>{data.title}</h1>
<h2>{data.subtitle}</h2>
<p>{@html data.description}</p>
