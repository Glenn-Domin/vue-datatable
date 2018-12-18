<style></style>

<template>
  <component :is="expand.component" :row="row"></component>
</template>

<script>
export default {
	props: {
		row: [Object, Array]
  }
}
</script>
