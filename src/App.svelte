<script lang="ts">
	export let name: string;
</script>

<style lang="scss">
	h1 {
		color: purple;
		span {
			color: red;
		}
	}
</style>

<h1>Hello <span>{name}</span>!</h1>