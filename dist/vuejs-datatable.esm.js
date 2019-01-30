import{get,set}from"object-path";var script={props:{column:[Object,Array],row:[Object,Array]},computed:{content(){return this.column.getRepresentation(this.row)}}};const __vue_script__=script;var __vue_render__=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("td",{style:{"text-align":e.column.align}},[e.column.component?s(e.column.component,{tag:"component",attrs:{row:e.row,column:e.column}}):e.column.interpolate?s("span",{domProps:{innerHTML:e._s(e.content)}}):s("span",[e._v(e._s(e.content))])],1)},__vue_staticRenderFns__=[];const __vue_inject_styles__=void 0,__vue_scope_id__=void 0,__vue_module_identifier__=void 0,__vue_is_functional_template__=!1;function __vue_normalize__(e,t,s,n,a,i,r,o){const l=("function"==typeof s?s.options:s)||{};return l.__file="vue-datatable-cell.vue",l.render||(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,a&&(l.functional=!0)),l._scopeId=n,l}var VueDatatableCell=__vue_normalize__({render:__vue_render__,staticRenderFns:__vue_staticRenderFns__},void 0,__vue_script__,void 0,!1,void 0,void 0,void 0),script$1={props:{model:{prop:"direction",event:"change"},column:[Object,Array],settings:Object,direction:{type:String,default:null}},computed:{canSort(){return this.column.sortable},is_sorted_ascending(){return"asc"===this.direction},is_sorted_descending(){return"desc"===this.direction},is_sorted(){return this.is_sorted_descending||this.is_sorted_ascending},classes(){var e=this.settings.get("table.sorting.classes"),t=e.canSort;return this.canSort?this.is_sorted?(this.is_sorted_ascending&&(t=t.concat(e.sortAsc)),this.is_sorted_descending&&(t=t.concat(e.sortDesc)),this.joinClasses(t)):(t=t.concat(e.sortNone),this.joinClasses(t)):""}},methods:{joinClasses(e){return this.unique(e).join(" ")},toggleSort(e){e&&(this.direction&&null!==this.direction?"asc"===this.direction?this.$emit("change","desc",this.column):this.$emit("change",null,this.column):this.$emit("change","asc",this.column))},unique(e){var t={};return e.filter(function(e){return!t.hasOwnProperty(e)&&(t[e]=!0)})}}};const __vue_script__$1=script$1;var __vue_render__$1=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("th",{class:[e.column.headerClass,e.column.sortable?"sortable":""],style:{"text-align":e.column.align},on:{click:function(t){e.toggleSort(e.column.sortable)}}},[e.column.headerComponent?s(e.column.headerComponent,{tag:"component",attrs:{column:e.column}}):s("span",[e._v(e._s(e.column.label))]),e._v(" "),e.column.sortable?s("span",{class:e.classes}):e._e()],1)},__vue_staticRenderFns__$1=[];const __vue_inject_styles__$1=void 0,__vue_scope_id__$1=void 0,__vue_module_identifier__$1=void 0,__vue_is_functional_template__$1=!1;function __vue_normalize__$1(e,t,s,n,a,i,r,o){const l=("function"==typeof s?s.options:s)||{};return l.__file="vue-datatable-header.vue",l.render||(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,a&&(l.functional=!0)),l._scopeId=n,l}var VueDatatableHeader=__vue_normalize__$1({render:__vue_render__$1,staticRenderFns:__vue_staticRenderFns__$1},void 0,__vue_script__$1,void 0,!1,void 0,void 0,void 0);class Settings{constructor(){this.properties={table:{class:"table table-hover table-striped table-bordered",row:{classes:[""]},sorting:{classes:{canSort:["sort"],sortNone:[""],sortAsc:["sort-asc"],sortDesc:["sort-desc"]}}},pager:{classes:{pager:["pagination","mb-0"],li:"page-item",a:"page-link",selected:"active",disabled:"disabled"},icons:{previous:"&lt;",next:"&gt;"}}}}get(e){return get(this.properties,e)}set(e,t){return set(this.properties,e,t),this}merge(e){return this.properties=this._mergeObjects(this.properties,e),this}_mergeObjects(e,t){for(var s in t)null!==t[s]?"object"!=typeof t[s]?e[s]=t[s]:e[s]=this._mergeObjects(e[s],t[s]):e[s]=t[s];return e}}var script$2={props:{disabled:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},value:{type:Number,default:null},prevNext:{type:Boolean,default:!1}},computed:{li_classes(){var e=[];return this.settings.get("pager.classes.li")&&e.push(this.settings.get("pager.classes.li")),this.disabled&&e.push(this.settings.get("pager.classes.disabled")),this.selected&&e.push(this.settings.get("pager.classes.selected")),e.join(" ")},a_classes(){var e=[];return this.settings.get("pager.classes.a")&&e.push(this.settings.get("pager.classes.a")),e.join(" ")},settings(){return this.$parent.settings}},methods:{sendClick(){this.disabled||this.$emit("click",this.value)}}};const __vue_script__$2=script$2;var __vue_render__$2=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",{class:e.li_classes},[s("a",{class:[e.a_classes,!0===e.prevNext?"px-3 px-md-4":""],attrs:{href:"javascript: void(0);"},on:{click:e.sendClick}},[e._t("default",[e._v(e._s(e.value))])],2)])},__vue_staticRenderFns__$2=[];const __vue_inject_styles__$2=void 0,__vue_scope_id__$2=void 0,__vue_module_identifier__$2=void 0,__vue_is_functional_template__$2=!1;function __vue_normalize__$2(e,t,s,n,a,i,r,o){const l=("function"==typeof s?s.options:s)||{};return l.__file="vue-datatable-pager-button.vue",l.render||(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,a&&(l.functional=!0)),l._scopeId=n,l}var VueDatatablePagerButton=__vue_normalize__$2({render:__vue_render__$2,staticRenderFns:__vue_staticRenderFns__$2},void 0,__vue_script__$2,void 0,!1,void 0,void 0,void 0);class Column{constructor(e){this.setAlignment(e.align),this.label=e.label||"",this.field=e.field||null,this.representedAs=e.representedAs||null,this.component=e.component||null,this.interpolate=e.interpolate||!1,this.headerComponent=e.headerComponent||null,this.sortable=this.isSortable(e),this.filterable=this.isFilterable(e),this.headerClass=e.headerClass||""}setAlignment(e){return e&&"string"==typeof e?"center"===e.toLowerCase()?(this.align="center",this):"right"===e.toLowerCase()?(this.align="right",this):(this.align="left",this):(this.align="left",this)}isFilterable(e){return!1!==e.filterable&&(!(!e.field&&!e.representedAs)&&!(this.component&&!this.representedAs&&!this.field))}isSortable(e){return!1!==e.sortable&&(!(!e.field&&!e.representedAs)&&!(this.component&&!this.representedAs&&!this.field))}getRepresentation(e){return this.representedAs&&"function"==typeof this.representedAs?this.representedAs(e):this.component&&this.filterable?this.plain_text_function(e,this):get(e,this.field)}getValue(e){return this.getRepresentation(e)}matches(e,t){return-1!==(""+this.getRepresentation(e)).toLowerCase().indexOf(t.toLowerCase())}}var script$3={props:{name:{type:String,default:"default"},columns:[Object,Array],data:[Object,Array,String,Function],filterBy:{type:[String,Array],default:null},rowClasses:{type:[String,Array,Object,Function],default:null}},data:()=>({sort_by:null,sort_dir:null,total_rows:0,page:1,per_page:null,processed_rows:[],selected_rows:[]}),computed:{rows(){return this.data.slice(0)},settings(){return this.$options.settings},handler(){return this.$options.handler},normalized_columns(){return this.columns.map(function(e){return new Column(e)})},table_class(){return this.settings.get("table.class")}},methods:{getSortDirectionForColumn(e){return this.sort_by!==e?null:this.sort_dir},setSortDirectionForColumn(e,t){this.sort_by=t,this.sort_dir=e},processRows(){if("function"==typeof this.data){let e={filter:this.filterBy,sort_by:this.sort_by?this.sort_by.field:null,sort_dir:this.sort_dir,page_length:this.per_page,page_number:this.page};this.data(e,function(e,t){this.setRows(e),this.setTotalRowCount(t)}.bind(this));return}let e=this.handler.filterHandler(this.rows,this.filterBy,this.normalized_columns),t=this.handler.sortHandler(e,this.sort_by,this.sort_dir),s=this.handler.paginateHandler(t,this.per_page,this.page);this.handler.displayHandler(s,{filtered_data:e,sorted_data:t,paged_data:s},this.setRows,this.setTotalRowCount)},setRows(e){this.processed_rows=e},setTotalRowCount(e){this.total_rows=e},getRowClasses(e){var t=this.rowClasses;return null===t&&(t=this.settings.get("table.row.classes")),"function"==typeof t?t(e):t}},created(){this.$datatables[this.name]=this,this.$root.$emit("table.ready",this.name),this.$watch(function(){return this.data}.bind(this),this.processRows,{deep:!0}),this.$watch("columns",this.processRows),this.$watch(function(){return this.filterBy+this.per_page+this.page+this.sort_by+this.sort_dir}.bind(this),this.processRows),this.processRows()},handler:null,settings:null};const __vue_script__$3=script$3;var __vue_render__$3=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",{class:e.table_class},[s("thead",[s("tr",e._l(e.normalized_columns,function(t,n){return s("datatable-header",{key:n,attrs:{column:t,settings:e.settings,direction:e.getSortDirectionForColumn(t)},on:{change:e.setSortDirectionForColumn}})}))]),e._v(" "),s("tbody",[e._l(e.processed_rows,function(t,n){return e._t("default",[s("tr",{key:n,class:e.getRowClasses(t)},e._l(e.normalized_columns,function(e,n){return s("datatable-cell",{key:n,attrs:{column:e,row:t}})}))],{row:t,columns:e.normalized_columns})}),e._v(" "),0==e.processed_rows.length?s("tr",[s("td",{attrs:{colspan:e.normalized_columns.length}},[e._t("no-results")],2)]):e._e()],2),e._v(" "),e.$slots.footer||e.$scopedSlots.footer?s("tfoot",[e._t("footer",null,{rows:e.processed_rows})],2):e._e()])},__vue_staticRenderFns__$3=[];const __vue_inject_styles__$3=void 0,__vue_scope_id__$3=void 0,__vue_module_identifier__$3=void 0,__vue_is_functional_template__$3=!1;function __vue_normalize__$3(e,t,s,n,a,i,r,o){const l=("function"==typeof s?s.options:s)||{};return l.__file="vue-datatable.vue",l.render||(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,a&&(l.functional=!0)),l._scopeId=n,l}var VueDatatable=__vue_normalize__$3({render:__vue_render__$3,staticRenderFns:__vue_staticRenderFns__$3},void 0,__vue_script__$3,void 0,!1,void 0,void 0,void 0),script$4={model:{prop:"page",event:"change"},props:{table:{type:String,default:"default"},type:{type:String,default:"long"},perPage:{type:Number,default:10},page:{type:Number,default:1}},data:()=>({table_instance:null}),computed:{show(){return this.table_instance&&this.total_rows>0},total_rows(){return this.table_instance?this.table_instance.total_rows:0},pagination_class(){return this.settings.get("pager.classes.pager")},disabled_class(){return this.settings.get("pager.classes.disabled")},previous_link_classes(){return this.page-1<1?this.settings.get("pager.classes.disabled"):""},next_link_classes(){return this.page+1>this.total_pages?this.settings.get("pager.classes.disabled"):""},total_pages(){return this.total_rows>0?Math.ceil(this.total_rows/this.perPage):0},previous_icon(){return this.settings.get("pager.icons.previous")},next_icon(){return this.settings.get("pager.icons.next")},settings(){return this.$options.settings}},methods:{setPageNum(e){this.table_instance.page=e,this.table_instance.per_page=this.perPage,this.$emit("change",e)},getClassForPage(e){return this.page==e?this.settings.get("pager.classes.selected"):""}},watch:{total_rows(){this.page>this.total_pages&&this.setPageNum(this.total_pages)},perPage(){var e=this.page;e>this.total_pages&&(e=this.total_pages),this.setPageNum(e)}},created(){if(this.$datatables[this.table])return this.table_instance=this.$datatables[this.table],void(this.table_instance.per_page=this.perPage);this.$root.$on("table.ready",function(e){e===this.table&&(this.table_instance=this.$datatables[this.table],this.table_instance.per_page=this.perPage)}.bind(this))},settings:null};const __vue_script__$4=script$4;var __vue_render__$4=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.show?s("nav",{staticClass:"d-flex align-items-center mb-2"},["abbreviated"===e.type?s("ul",{class:e.pagination_class},[s("datatable-button",{attrs:{disabled:e.page-1<1,value:e.page-1,prevNext:!0},on:{click:e.setPageNum}}),e._v(" "),e.page-3>=1?s("datatable-button",{attrs:{value:1},on:{click:e.setPageNum}}):e._e(),e._v(" "),e.page-4>=1?s("datatable-button",{attrs:{disabled:""}},[e._v("...")]):e._e(),e._v(" "),e.page-2>=1?s("datatable-button",{attrs:{value:e.page-2},on:{click:e.setPageNum}}):e._e(),e._v(" "),e.page-1>=1?s("datatable-button",{attrs:{value:e.page-1},on:{click:e.setPageNum}}):e._e(),e._v(" "),s("datatable-button",{attrs:{value:e.page,selected:""}}),e._v(" "),e.page+1<=e.total_pages?s("datatable-button",{attrs:{value:e.page+1},on:{click:e.setPageNum}}):e._e(),e._v(" "),e.page+2<=e.total_pages?s("datatable-button",{attrs:{value:e.page+2},on:{click:e.setPageNum}}):e._e(),e._v(" "),e.page+4<=e.total_pages?s("datatable-button",{attrs:{disabled:""}},[e._v("...")]):e._e(),e._v(" "),e.page+3<=e.total_pages?s("datatable-button",{attrs:{value:e.total_pages},on:{click:e.setPageNum}}):e._e(),e._v(" "),s("datatable-button",{attrs:{disabled:e.page+1>e.total_pages,value:e.page+1,prevNext:!0},on:{click:e.setPageNum}})],1):"long"===e.type?s("ul",{class:e.pagination_class},e._l(e.total_pages,function(t){return s("datatable-button",{key:t,attrs:{value:t,selected:t===e.page},on:{click:e.setPageNum}})})):"short"===e.type?s("ul",{class:e.pagination_class},[s("datatable-button",{attrs:{value:e.page,selected:""}})],1):e._e()]):e._e()},__vue_staticRenderFns__$4=[];const __vue_inject_styles__$4=void 0,__vue_scope_id__$4=void 0,__vue_module_identifier__$4=void 0,__vue_is_functional_template__$4=!1;function __vue_normalize__$4(e,t,s,n,a,i,r,o){const l=("function"==typeof s?s.options:s)||{};return l.__file="vue-datatable-pager.vue",l.render||(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,a&&(l.functional=!0)),l._scopeId=n,l}var VueDatatablePager=__vue_normalize__$4({render:__vue_render__$4,staticRenderFns:__vue_staticRenderFns__$4},void 0,__vue_script__$4,void 0,!1,void 0,void 0,void 0);class Handler{constructor(){this.filterHandler=this.handleFilter,this.sortHandler=this.handleSort,this.paginateHandler=this.handlePaginate,this.displayHandler=this.handleDisplay}handleFilter(e,t,s){return t?(Array.isArray(t)||(t=[t]),e.filter(function(e){for(var n in t){let i=t[n].split(/\s/),r=!0;for(var a in i)this.rowMatches(e,i[a],s)||(r=!1);if(r)return!0}return!1}.bind(this))):e}rowMatches(e,t,s){for(var n in s)if(s[n].matches(e,t))return!0;return!1}handleSort(e,t,s){return t&&null!==s?e.sort(function(e,n){var a=t.getRepresentation(e),i=t.getRepresentation(n);if(a==i)return 0;var r=a>i?1:-1;return"desc"===s&&(r*=-1),r}):e}handlePaginate(e,t,s){if(!t)return e;s<1&&(s=1);let n=(s-1)*t,a=s*t;return e.slice(n,a)}handleDisplay(e,t,s,n){s(e),n(t.filtered_data.length)}}class TableType{constructor(e){this.id=e,this.handler=new Handler,this.settings=new Settings}getId(){return this.id}setFilterHandler(e){return this.handler.filterHandler=e,this}setSortHandler(e){return this.handler.sortHandler=e,this}setPaginateHandler(e){return this.handler.paginateHandler=e,this}setDisplayHandler(e){return this.handler.displayHandler=e,this}setting(e,t){return void 0===t?this.settings.get(e):(this.settings.set(e,t),this)}mergeSettings(e){return this.settings.merge(e),this}getTableDefinition(){let e=this.clone(VueDatatable);return e.handler=this.handler,e.settings=this.settings,e.name=this.id,e}getPagerDefinition(){let e=this.clone(VueDatatablePager);return e.settings=this.settings,e.name=this.id,e}clone(e){var t;if(null===e||"object"!=typeof e)return e;if(e instanceof Array){t=[];for(var s=0;s<e.length;s++)t[s]=this.clone(e[s]);return t}if(e instanceof Object){for(var n in t={},e)e.hasOwnProperty(n)&&(t[n]=this.clone(e[n]));return t}throw new Error("Unable to copy obj! Its type isn't supported.")}}class DatatableFactory{constructor(){this.table_types=[],this.use_default_type=!0,this.default_table_settings=new Settings}useDefaultType(e){return this.use_default_type=!!e,this}registerTableType(e,t){let s=new TableType(e);return this.table_types.push(s),t&&"function"==typeof t&&t(s),this}install(e){for(var t in e.prototype.$datatables={},e.component("datatable-cell",VueDatatableCell),e.component("datatable-header",VueDatatableHeader),e.component("datatable-button",VueDatatablePagerButton),this.use_default_type&&this.registerTableType("datatable",function(e){e.mergeSettings(this.default_table_settings.properties)}.bind(this)),this.table_types)this.installTableType(this.table_types[t].getId(),this.table_types[t],e)}installTableType(e,t,s){s.component(e,t.getTableDefinition()),s.component(e+"-pager",t.getPagerDefinition())}}var index=new DatatableFactory;export default index;
//# sourceMappingURL=vuejs-datatable.esm.js.map
