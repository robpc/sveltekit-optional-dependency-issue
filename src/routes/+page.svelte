<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;

	$: canvasInstalled = data.canvasInstalled;
</script>

<h1>Canvas Issue Test</h1>
is canvas installed? {canvasInstalled}
