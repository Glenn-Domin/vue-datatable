<style></style>

<template>
  <component :is="column.component" :row="row"></component>
</template>

<script>
export default {
	props: {
		column: [Object, Array],
		row: [Object, Array]
  }
}
</script>
