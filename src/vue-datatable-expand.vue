<style></style>

<template>
  <tr v-if="expand">
    <td colspan="100%">
      <component :is="expand.component" :row="row"></component>
    </td>
  </tr>
</template>

<script>
export default {
	props: {
		row: [Object, Array]
	}
}
</script>
