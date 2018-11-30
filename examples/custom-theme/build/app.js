!function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var e,s=(function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function s(t){if(!t)return!0;if(r(t)&&0===t.length)return!0;if("string"!=typeof t){for(var s in t)if(e(t,s))return!1;return!0}return!1}function n(e){return t.call(e)}var r=Array.isArray||function(e){return"[object Array]"===t.call(e)};function i(t){var e=parseInt(t);return e.toString()===t?e:t}function a(t){t=t||{};var a=function(t){return Object.keys(a).reduce(function(e,s){return"create"===s?e:("function"==typeof a[s]&&(e[s]=a[s].bind(a,t)),e)},{})};function l(s,n){return t.includeInheritedProps||"number"==typeof n&&Array.isArray(s)||e(s,n)}function o(t,e){if(l(t,e))return t[e]}function c(t,e,s,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return c(t,e.split(".").map(i),s,n);var r=e[0],a=o(t,r);return 1===e.length?(void 0!==a&&n||(t[r]=s),a):(void 0===a&&("number"==typeof e[1]?t[r]=[]:t[r]={}),c(t[r],e.slice(1),s,n))}return a.has=function(s,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!s;for(var a=0;a<n.length;a++){var l=i(n[a]);if(!("number"==typeof l&&r(s)&&l<s.length||(t.includeInheritedProps?l in Object(s):e(s,l))))return!1;s=s[l]}return!0},a.ensureExists=function(t,e,s){return c(t,e,s,!0)},a.set=function(t,e,s,n){return c(t,e,s,n)},a.insert=function(t,e,s,n){var i=a.get(t,e);n=~~n,r(i)||(i=[],a.set(t,e,i)),i.splice(n,0,s)},a.empty=function(t,e){var i,o;if(!s(e)&&null!=t&&(i=a.get(t,e))){if("string"==typeof i)return a.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===n(t)}(i))return a.set(t,e,!1);if("number"==typeof i)return a.set(t,e,0);if(r(i))i.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===n(t)}(i))return a.set(t,e,null);for(o in i)l(i,o)&&delete i[o]}}},a.push=function(t,e){var s=a.get(t,e);r(s)||(s=[],a.set(t,e,s)),s.push.apply(s,Array.prototype.slice.call(arguments,2))},a.coalesce=function(t,e,s){for(var n,r=0,i=e.length;r<i;r++)if(void 0!==(n=a.get(t,e[r])))return n;return s},a.get=function(t,e,s){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return s;if("string"==typeof e)return a.get(t,e.split("."),s);var n=i(e[0]),r=o(t,n);return void 0===r?s:1===e.length?r:a.get(t[n],e.slice(1),s)},a.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(s(e))return t;if("string"==typeof e)return a.del(t,e.split("."));var n=i(e[0]);return l(t,n)?1!==e.length?a.del(t[n],e.slice(1)):(r(t)?t.splice(n,1):delete t[n],t):t},a}var l=a();return l.create=a,l.withInheritedProps=a({includeInheritedProps:!0}),l}()}(e={exports:{}},e.exports),e.exports),n=s.get,r=s.set;var i=function(t,e,s,n,r,i,a,l){const o=("function"==typeof s?s.options:s)||{};return o.__file="vue-datatable-cell.vue",o.render||(o.render=t.render,o.staticRenderFns=t.staticRenderFns,o._compiled=!0,r&&(o.functional=!0)),o._scopeId=n,o}({render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",{style:{"text-align":t.column.align}},[t.column.component?s(t.column.component,{tag:"component",attrs:{row:t.row,column:t.column}}):t.column.interpolate?s("span",{domProps:{innerHTML:t._s(t.content)}}):s("span",[t._v(t._s(t.content))])],1)},staticRenderFns:[]},0,{props:{column:[Object,Array],row:[Object,Array]},computed:{content(){return this.column.getRepresentation(this.row)}}},void 0,!1);var a=function(t,e,s,n,r,i,a,l){const o=("function"==typeof s?s.options:s)||{};return o.__file="vue-datatable-header.vue",o.render||(o.render=t.render,o.staticRenderFns=t.staticRenderFns,o._compiled=!0,r&&(o.functional=!0)),o._scopeId=n,o}({render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("th",{class:t.column.headerClass,style:{"text-align":t.column.align}},[t.column.headerComponent?s(t.column.headerComponent,{tag:"component",attrs:{column:t.column}}):s("span",[t._v(t._s(t.column.label))]),t._v(" "),t.column.sortable?s("span",{class:t.classes,on:{click:t.toggleSort}}):t._e()],1)},staticRenderFns:[]},0,{props:{model:{prop:"direction",event:"change"},column:[Object,Array],settings:Object,direction:{type:String,default:null}},computed:{canSort(){return this.column.sortable},is_sorted_ascending(){return"asc"===this.direction},is_sorted_descending(){return"desc"===this.direction},is_sorted(){return this.is_sorted_descending||this.is_sorted_ascending},classes(){var t=this.settings.get("table.sorting.classes"),e=t.canSort;return this.canSort?this.is_sorted?(this.is_sorted_ascending&&(e=e.concat(t.sortAsc)),this.is_sorted_descending&&(e=e.concat(t.sortDesc)),this.joinClasses(e)):(e=e.concat(t.sortNone),this.joinClasses(e)):""}},methods:{joinClasses(t){return this.unique(t).join(" ")},toggleSort(){this.direction&&null!==this.direction?"asc"===this.direction?this.$emit("change","desc",this.column):this.$emit("change",null,this.column):this.$emit("change","asc",this.column)},unique(t){var e={};return t.filter(function(t){return!e.hasOwnProperty(t)&&(e[t]=!0)})}}},void 0,!1);class l{constructor(){this.properties={table:{class:"table table-hover table-striped table-bordered",row:{classes:[""]},sorting:{classes:{canSort:["sort"],sortNone:[""],sortAsc:["sort-asc"],sortDesc:["sort-desc"]}}},pager:{classes:{pager:["pagination","mb-0"],li:"page-item",a:"page-link",selected:"active",disabled:"disabled"},icons:{previous:"&lt;",next:"&gt;"}}}}get(t){return n(this.properties,t)}set(t,e){return r(this.properties,t,e),this}merge(t){return this.properties=this._mergeObjects(this.properties,t),this}_mergeObjects(t,e){for(var s in e)null!==e[s]?"object"!=typeof e[s]?t[s]=e[s]:t[s]=this._mergeObjects(t[s],e[s]):t[s]=e[s];return t}}var o=function(t,e,s,n,r,i,a,l){const o=("function"==typeof s?s.options:s)||{};return o.__file="vue-datatable-pager-button.vue",o.render||(o.render=t.render,o.staticRenderFns=t.staticRenderFns,o._compiled=!0,r&&(o.functional=!0)),o._scopeId=n,o}({render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{class:t.li_classes},[s("a",{class:[t.a_classes,!0===t.prevNext?"px-3 px-md-4":""],attrs:{href:"javascript: void(0);"},on:{click:t.sendClick}},[t._t("default",[t._v(t._s(t.value))])],2)])},staticRenderFns:[]},0,{props:{disabled:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},value:{type:Number,default:null},prevNext:{type:Boolean,default:!1}},computed:{li_classes(){var t=[];return this.settings.get("pager.classes.li")&&t.push(this.settings.get("pager.classes.li")),this.disabled&&t.push(this.settings.get("pager.classes.disabled")),this.selected&&t.push(this.settings.get("pager.classes.selected")),t.join(" ")},a_classes(){var t=[];return this.settings.get("pager.classes.a")&&t.push(this.settings.get("pager.classes.a")),t.join(" ")},settings(){return this.$parent.settings}},methods:{sendClick(){this.disabled||this.$emit("click",this.value)}}},void 0,!1);class c{constructor(t){this.setAlignment(t.align),this.label=t.label||"",this.field=t.field||null,this.representedAs=t.representedAs||null,this.component=t.component||null,this.interpolate=t.interpolate||!1,this.headerComponent=t.headerComponent||null,this.sortable=this.isSortable(t),this.filterable=this.isFilterable(t),this.headerClass=t.headerClass||""}setAlignment(t){return t&&"string"==typeof t?"center"===t.toLowerCase()?(this.align="center",this):"right"===t.toLowerCase()?(this.align="right",this):(this.align="left",this):(this.align="left",this)}isFilterable(t){return!(!1===t.filterable||!t.field&&!t.representedAs||this.component&&!this.representedAs&&!this.field)}isSortable(t){return!(!1===t.sortable||!t.field&&!t.representedAs||this.component&&!this.representedAs&&!this.field)}getRepresentation(t){return this.representedAs&&"function"==typeof this.representedAs?this.representedAs(t):this.component&&this.filterable?this.plain_text_function(t,this):n(t,this.field)}getValue(t){return this.getRepresentation(t)}matches(t,e){return-1!==(""+this.getRepresentation(t)).toLowerCase().indexOf(e.toLowerCase())}}var u=function(t,e,s,n,r,i,a,l){const o=("function"==typeof s?s.options:s)||{};return o.__file="vue-datatable.vue",o.render||(o.render=t.render,o.staticRenderFns=t.staticRenderFns,o._compiled=!0,r&&(o.functional=!0)),o._scopeId=n,o}({render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{class:t.table_class},[s("thead",[s("tr",t._l(t.normalized_columns,function(e,n){return s("datatable-header",{key:n,attrs:{column:e,settings:t.settings,direction:t.getSortDirectionForColumn(e)},on:{change:t.setSortDirectionForColumn}})}))]),t._v(" "),s("tbody",[t._l(t.processed_rows,function(e,n){return t._t("default",[s("tr",{key:n,class:t.getRowClasses(e)},t._l(t.normalized_columns,function(t,n){return s("datatable-cell",{key:n,attrs:{column:t,row:e}})}))],{row:e,columns:t.normalized_columns})}),t._v(" "),0==t.processed_rows.length?s("tr",[s("td",{attrs:{colspan:t.normalized_columns.length}},[t._t("no-results")],2)]):t._e()],2),t._v(" "),t.$slots.footer||t.$scopedSlots.footer?s("tfoot",[t._t("footer",null,{rows:t.processed_rows})],2):t._e()])},staticRenderFns:[]},0,{props:{name:{type:String,default:"default"},columns:[Object,Array],data:[Object,Array,String,Function],filterBy:{type:[String,Array],default:null},rowClasses:{type:[String,Array,Object,Function],default:null}},data:()=>({sort_by:null,sort_dir:null,total_rows:0,page:1,per_page:null,processed_rows:[]}),computed:{rows(){return this.data.slice(0)},settings(){return this.$options.settings},handler(){return this.$options.handler},normalized_columns(){return this.columns.map(function(t){return new c(t)})},table_class(){return this.settings.get("table.class")}},methods:{getSortDirectionForColumn(t){return this.sort_by!==t?null:this.sort_dir},setSortDirectionForColumn(t,e){this.sort_by=e,this.sort_dir=t},processRows(){if("function"==typeof this.data){let t={filter:this.filterBy,sort_by:this.sort_by?this.sort_by.field:null,sort_dir:this.sort_dir,page_length:this.per_page,page_number:this.page};return void this.data(t,function(t,e){this.setRows(t),this.setTotalRowCount(e)}.bind(this))}let t=this.handler.filterHandler(this.rows,this.filterBy,this.normalized_columns),e=this.handler.sortHandler(t,this.sort_by,this.sort_dir),s=this.handler.paginateHandler(e,this.per_page,this.page);this.handler.displayHandler(s,{filtered_data:t,sorted_data:e,paged_data:s},this.setRows,this.setTotalRowCount)},setRows(t){this.processed_rows=t},setTotalRowCount(t){this.total_rows=t},getRowClasses(t){var e=this.rowClasses;return null===e&&(e=this.settings.get("table.row.classes")),"function"==typeof e?e(t):e}},created(){this.$datatables[this.name]=this,this.$root.$emit("table.ready",this.name),this.$watch(function(){return this.data}.bind(this),this.processRows,{deep:!0}),this.$watch("columns",this.processRows),this.$watch(function(){return this.filterBy+this.per_page+this.page+this.sort_by+this.sort_dir}.bind(this),this.processRows),this.processRows()},handler:null,settings:null},void 0,!1);var d=function(t,e,s,n,r,i,a,l){const o=("function"==typeof s?s.options:s)||{};return o.__file="vue-datatable-pager.vue",o.render||(o.render=t.render,o.staticRenderFns=t.staticRenderFns,o._compiled=!0,r&&(o.functional=!0)),o._scopeId=n,o}({render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.show?s("nav",{staticClass:"d-flex align-items-center mb-2"},["abbreviated"===t.type?s("ul",{class:t.pagination_class},[s("datatable-button",{attrs:{disabled:t.page-1<1,value:t.page-1,prevNext:!0},on:{click:t.setPageNum}},[t._v("Prev")]),t._v(" "),t.page-3>=1?s("datatable-button",{attrs:{value:1},on:{click:t.setPageNum}}):t._e(),t._v(" "),t.page-4>=1?s("datatable-button",{attrs:{disabled:""}},[t._v("...")]):t._e(),t._v(" "),t.page-2>=1?s("datatable-button",{attrs:{value:t.page-2},on:{click:t.setPageNum}}):t._e(),t._v(" "),t.page-1>=1?s("datatable-button",{attrs:{value:t.page-1},on:{click:t.setPageNum}}):t._e(),t._v(" "),s("datatable-button",{attrs:{value:t.page,selected:""}}),t._v(" "),t.page+1<=t.total_pages?s("datatable-button",{attrs:{value:t.page+1},on:{click:t.setPageNum}}):t._e(),t._v(" "),t.page+2<=t.total_pages?s("datatable-button",{attrs:{value:t.page+2},on:{click:t.setPageNum}}):t._e(),t._v(" "),t.page+4<=t.total_pages?s("datatable-button",{attrs:{disabled:""}},[t._v("...")]):t._e(),t._v(" "),t.page+3<=t.total_pages?s("datatable-button",{attrs:{value:t.total_pages},on:{click:t.setPageNum}}):t._e(),t._v(" "),s("datatable-button",{attrs:{disabled:t.page+1>t.total_pages,value:t.page+1,prevNext:!0},on:{click:t.setPageNum}},[t._v("Next")])],1):"long"===t.type?s("ul",{class:t.pagination_class},t._l(t.total_pages,function(e){return s("datatable-button",{key:e,attrs:{value:e,selected:e===t.page},on:{click:t.setPageNum}})})):"short"===t.type?s("ul",{class:t.pagination_class},[s("datatable-button",{attrs:{value:t.page,selected:""}})],1):t._e()]):t._e()},staticRenderFns:[]},0,{model:{prop:"page",event:"change"},props:{table:{type:String,default:"default"},type:{type:String,default:"long"},perPage:{type:Number,default:10},page:{type:Number,default:1}},data:()=>({table_instance:null}),computed:{show(){return this.table_instance&&this.total_rows>0},total_rows(){return this.table_instance?this.table_instance.total_rows:0},pagination_class(){return this.settings.get("pager.classes.pager")},disabled_class(){return this.settings.get("pager.classes.disabled")},previous_link_classes(){return this.page-1<1?this.settings.get("pager.classes.disabled"):""},next_link_classes(){return this.page+1>this.total_pages?this.settings.get("pager.classes.disabled"):""},total_pages(){return this.total_rows>0?Math.ceil(this.total_rows/this.perPage):0},previous_icon(){return this.settings.get("pager.icons.previous")},next_icon(){return this.settings.get("pager.icons.next")},settings(){return this.$options.settings}},methods:{setPageNum(t){this.table_instance.page=t,this.table_instance.per_page=this.perPage,this.$emit("change",t)},getClassForPage(t){return this.page==t?this.settings.get("pager.classes.selected"):""}},watch:{total_rows(){this.page>this.total_pages&&this.setPageNum(this.total_pages)},perPage(){var t=this.page;t>this.total_pages&&(t=this.total_pages),this.setPageNum(t)}},created(){if(this.$datatables[this.table])return this.table_instance=this.$datatables[this.table],void(this.table_instance.per_page=this.perPage);this.$root.$on("table.ready",function(t){t===this.table&&(this.table_instance=this.$datatables[this.table],this.table_instance.per_page=this.perPage)}.bind(this))},settings:null},void 0,!1);class h{constructor(){this.filterHandler=this.handleFilter,this.sortHandler=this.handleSort,this.paginateHandler=this.handlePaginate,this.displayHandler=this.handleDisplay}handleFilter(t,e,s){return e?(Array.isArray(e)||(e=[e]),t.filter(function(t){for(var n in e){let i=e[n].split(/\s/),a=!0;for(var r in i)this.rowMatches(t,i[r],s)||(a=!1);if(a)return!0}return!1}.bind(this))):t}rowMatches(t,e,s){for(var n in s)if(s[n].matches(t,e))return!0;return!1}handleSort(t,e,s){return e&&null!==s?t.sort(function(t,n){var r=e.getRepresentation(t),i=e.getRepresentation(n);if(r==i)return 0;var a=r>i?1:-1;return"desc"===s&&(a*=-1),a}):t}handlePaginate(t,e,s){if(!e)return t;s<1&&(s=1);let n=(s-1)*e,r=s*e;return t.slice(n,r)}handleDisplay(t,e,s,n){s(t),n(e.filtered_data.length)}}class p{constructor(t){this.id=t,this.handler=new h,this.settings=new l}getId(){return this.id}setFilterHandler(t){return this.handler.filterHandler=t,this}setSortHandler(t){return this.handler.sortHandler=t,this}setPaginateHandler(t){return this.handler.paginateHandler=t,this}setDisplayHandler(t){return this.handler.displayHandler=t,this}setting(t,e){return void 0===e?this.settings.get(t):(this.settings.set(t,e),this)}mergeSettings(t){return this.settings.merge(t),this}getTableDefinition(){let t=this.clone(u);return t.handler=this.handler,t.settings=this.settings,t.name=this.id,t}getPagerDefinition(){let t=this.clone(d);return t.settings=this.settings,t.name=this.id,t}clone(t){var e;if(null===t||"object"!=typeof t)return t;if(t instanceof Array){e=[];for(var s=0;s<t.length;s++)e[s]=this.clone(t[s]);return e}if(t instanceof Object){for(var n in e={},t)t.hasOwnProperty(n)&&(e[n]=this.clone(t[n]));return e}throw new Error("Unable to copy obj! Its type isn't supported.")}}var g=new class{constructor(){this.table_types=[],this.use_default_type=!0,this.default_table_settings=new l}useDefaultType(t){return this.use_default_type=!!t,this}registerTableType(t,e){let s=new p(t);return this.table_types.push(s),e&&"function"==typeof e&&e(s),this}install(t){for(var e in t.prototype.$datatables={},t.component("datatable-cell",i),t.component("datatable-header",a),t.component("datatable-button",o),this.use_default_type&&this.registerTableType("datatable",function(t){t.mergeSettings(this.default_table_settings.properties)}.bind(this)),this.table_types)this.installTableType(this.table_types[e].getId(),this.table_types[e],t)}installTableType(t,e,s){s.component(t,e.getTableDefinition()),s.component(t+"-pager",e.getPagerDefinition())}};g.useDefaultType(!1).registerTableType("datatable",function(t){t.mergeSettings({table:{class:"hover table-scroll",sorting:{classes:{canSort:["sort"],sortNone:["fa","fa-sort"],sortAsc:["fa","fa-sort-asc"],sortDesc:["fa","fa-sort-desc"]}}},pager:{classes:{pager:"pagination text-center",selected:"current"}}})}),t.use(g),t.config.debug=!0,t.config.devtools=!0,window.vm=new t({el:".grid-container",data:{filter:"",columns:[{label:"id",field:"id"},{label:"Username",field:"user.username"},{label:"First Name",field:"user.first_name"},{label:"Last Name",field:"user.last_name"},{label:"Email",field:"user.email"},{label:"address",representedAs:function(t){return t.address+"<br />"+t.city+", "+t.state},interpolate:!0,sortable:!1,filterable:!1}],rows:window.rows,page:1}})}(Vue);
//# sourceMappingURL=app.js.map
