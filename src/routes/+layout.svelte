<script lang="ts">
	import type { PageData } from './$types';
	import '../app.css';

	import picOfMe from '/pic_of_me.jpg';
	import email from '/email.png';
	import github from '/github.png';
	import linkedin from '/linkedin.png';
	import twitter from '/twitter.png';

	export let data: PageData;
</script>

<header class="navbar bg-neutral text-neutral-content flex-col h-28 lg:h-16 lg:flex-row">
	<div class="navbar-start p-2  justify-center lg:p-0 lg:justify-start">
		<a href="/" class="btn btn-ghost normal-case">
			<img alt="Michael Archer" class="rounded-full w-8" src={picOfMe} />
			<h1 class="font-bold text-xl pl-2">Michael Archer</h1>
		</a>
	</div>
	<div class="navbar-center">
		<div class="tabs">
			{#each data.tabs as tab, i}
				<a href={tab.link} class={`tab tab-bordered ${data.activeIndex === i && 'tab-active'}`}>
					<span>{tab.name}</span>
				</a>
			{/each}
		</div>
	</div>
	<div class="navbar-end" />
</header>

<main class="flex-1">
	<slot />
</main>

<footer class="navbar bg-neutral text-neutral-content h-16">
	<div class="navbar-start" />
	<div class="navbar-center">
		<a class="btn btn-ghost" href="mailto:mikearche@gmail.com">
			<img class="w-8" alt="gmail logo" src={email} />
		</a>
		<a class="btn btn-ghost invert" href="https://github.com/mikearche" target="_blank">
			<img class="w-8" alt="github logo" src={github} />
		</a>
		<a class="btn btn-ghost" href="https://linkedin.com/in/mikearche" target="_blank">
			<img class="w-8" alt="linkedin logo" src={linkedin} />
		</a>
		<a class="btn btn-ghost" href="https://twitter.com/mikearche" target="_blank">
			<img class="w-8" alt="linkedin logo" src={twitter} />
		</a>
	</div>
	<div class="navbar-end" />
</footer>
