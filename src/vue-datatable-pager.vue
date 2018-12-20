<style></style>

<template>
	<nav v-if="show" class="d-flex align-items-center mb-2">
		<ul v-if="type === 'abbreviated'" :class="pagination_class">
			<datatable-button :disabled="page - 1 < 1" :value="page - 1" @click="setPageNum" :prevNext="true">
				<svg class="d-block d-md-none" aria-label="Previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 13" width="6" height="20"><rect width="100%" height="100%" fill="none"/><g class="currentLayer"><path fill="#231815" d="M5.7 13h-.4L.7 8.2c-.5-.5-.7-1-.7-1.8s.3-1.3.7-1.8L5.3.1c.2-.2.5-.2.7 0s.2.5 0 .7L1.4 5.4C.8 6 .8 7 1.4 7.5L6 12.1c.2.2.2.5 0 .7 0 .2-.2.2-.3.2z"/></g></svg>
				<span class="d-none d-md-block">Prev</div>
			</datatable-button>
			<datatable-button v-if="page - 3 >= 1" :value="1" @click="setPageNum"></datatable-button>
			<datatable-button v-if="page - 4 >= 1" disabled>...</datatable-button>

			<datatable-button v-if="page - 2 >= 1" :value="page - 2" @click="setPageNum"></datatable-button>
			<datatable-button v-if="page - 1 >= 1" :value="page - 1" @click="setPageNum"></datatable-button>

			<datatable-button :value="page" selected></datatable-button>

			<datatable-button v-if="page + 1 <= total_pages" :value="page + 1" @click="setPageNum"></datatable-button>
			<datatable-button v-if="page + 2 <= total_pages" :value="page + 2" @click="setPageNum"></datatable-button>

			<datatable-button v-if="page + 4 <= total_pages" disabled>...</datatable-button>
			<datatable-button v-if="page + 3 <= total_pages" :value="total_pages" @click="setPageNum"></datatable-button>
			<datatable-button :disabled="page + 1 > total_pages" :value="page + 1" @click="setPageNum" :prevNext="true">
				<svg class="d-block d-md-none" aria-label="Next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 13" width="6" height="20"><rect width="100%" height="100%" fill="none"/><g class="currentLayer"><path fill="#231815" d="M.5 13l-.4-.1a.5.5 0 0 1 0-.7l4.6-4.6c.6-.6.6-1.5 0-2.1L.1.9C0 .7 0 .4.1.2s.5-.2.7 0l4.6 4.6c.5.5.7 1 .7 1.8s-.3 1.3-.7 1.8L.8 13H.5z"/></g></svg>
				<span class="d-none d-md-block">Next</div>
			</datatable-button>
		</ul>
		<ul v-else-if="type === 'long'" :class="pagination_class">
			<datatable-button v-for="i in total_pages" :key="i" :value="i" @click="setPageNum" :selected="i === page"></datatable-button>
		</ul>
		<ul v-else-if="type === 'short'" :class="pagination_class">
			<datatable-button :value="page" selected></datatable-button>
		</ul>
	</nav>
</template>

<script>
export default {
	model: {
		prop: 'page',
		event: 'change'
	},
	props: {
		table: {
			type: String,
			default: 'default'
		},
		type: {
			type: String,
			default: 'long'
		},
		perPage: {
			type: Number,
			default: 10
		},
		page: {
			type: Number,
			default: 1
		}
	},
	data: () => ({
		table_instance: null,
	}),
	computed: {
		show(){
			return this.table_instance && this.total_rows > 0;
		},
		total_rows(){
			if(this.table_instance){
				return this.table_instance.total_rows;
			}

			return 0;
		},
		pagination_class(){
			return this.settings.get('pager.classes.pager');
		},
		disabled_class(){
			return this.settings.get('pager.classes.disabled');
		},
		previous_link_classes(){
			if(this.page - 1 < 1){
				return this.settings.get('pager.classes.disabled');
			}

			return '';
		},
		next_link_classes(){
			if(this.page + 1 > this.total_pages){
				return this.settings.get('pager.classes.disabled');
			}

			return '';
		},
		total_pages(){
			if(!(this.total_rows > 0)){
				return 0;
			}

			return Math.ceil(this.total_rows / this.perPage);
		},
		previous_icon(){
			return this.settings.get('pager.icons.previous');
		},
		next_icon(){
			return this.settings.get('pager.icons.next');
		},
		settings(){
			return this.$options.settings;
		},
	},
	methods: {
		setPageNum(number){
			this.table_instance.page = number;
			this.table_instance.per_page = this.perPage;

			this.$emit('change', number);
		},
		getClassForPage(number){
			if(this.page == number){
				return this.settings.get('pager.classes.selected');
			}

			return '';
		}
	},
	watch: {
		total_rows(){
			if(this.page > this.total_pages){
				this.setPageNum(this.total_pages);
			}
		},
		perPage(){
			var page = this.page;

			if(page > this.total_pages){
				page = this.total_pages
			}

			this.setPageNum(page);
		}
	},
	created(){
		if(this.$datatables[this.table]){
			this.table_instance = this.$datatables[this.table];
			this.table_instance.per_page = this.perPage;
			return;
		}

		this.$root.$on('table.ready', function(table_name){
			if(table_name === this.table){
				this.table_instance = this.$datatables[this.table];
				this.table_instance.per_page = this.perPage;
			}
		}.bind(this));
	},
	settings: null
}
</script>
