<script>
	import { Icon, Search } from 'svelte-hero-icons';
</script>

<div class="flex flex-row">
	<input type="text" class="border-solid border-2 border-emerald-900 rounded-l" />
	<button class="border-solid border-2 border-l-0 border-emerald-900 bg-emerald-400 rounded-r"
		><Icon src={Search} size="16" /></button
	>
</div>
