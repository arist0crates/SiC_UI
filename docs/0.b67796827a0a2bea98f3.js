(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{G8AK:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=function(){},i=u("pMnS"),e=u("ZYCi"),a=u("Ip0R"),r=u("IA05"),c=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),s=t.Ra({encapsulation:0,styles:[[""]],data:{}});function d(l){return t.lb(0,[(l()(),t.Ta(0,0,null,null,10,"a",[["class","list-group-item clearfix"],["routerLinkActive","active"],["style","cursor: pointer;"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.cb(l,1).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&o),o},null,null)),t.Sa(1,671744,[[2,4]],0,e.m,[e.k,e.a,a.g],{routerLink:[0,"routerLink"]},null),t.db(2,1),t.Sa(3,1720320,null,2,e.l,[e.k,t.l,t.G,t.i],{routerLinkActive:[0,"routerLinkActive"]},null),t.hb(603979776,1,{links:1}),t.hb(603979776,2,{linksWithHrefs:1}),(l()(),t.Ta(6,0,null,null,4,"div",[["class","pull-left"]],null,null,null,null,null)),(l()(),t.Ta(7,0,null,null,1,"h4",[["class","list-group-item-heading"]],null,null,null,null,null)),(l()(),t.jb(8,null,["",""])),(l()(),t.Ta(9,0,null,null,1,"p",[["class","list-group-item-text"]],null,null,null,null,null)),(l()(),t.jb(10,null,["",""]))],function(l,n){l(n,1,0,l(n,2,0,n.component.product.productId)),l(n,3,0,"active")},function(l,n){var u=n.component;l(n,0,0,t.cb(n,1).target,t.cb(n,1).href),l(n,8,0,u.product.name),l(n,10,0,u.product.productId)})}var p=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),b=t.Ra({encapsulation:0,styles:[[""]],data:{}});function h(l){return t.lb(0,[(l()(),t.Ta(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.jb(-1,null,["Please select a Product!"]))],null,null)}var m=u("QJ7G"),g=function(){function l(l,n,u){this.productService=l,this.router=n,this.route=u}return l.prototype.ngOnInit=function(){var l=this;this.route.params.subscribe(function(){l.productService.getProducts().then(function(n){l.products=n,console.log(l.products)})}),this.subscription=this.productService.productsChanged.subscribe(function(n){l.products=n}),this.productService.getProducts().then(function(n){l.products=n,console.log("lalalalal"+l.products)})},l.prototype.onNewProduct=function(){this.router.navigate(["new"],{relativeTo:this.route})},l.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},l}(),v=t.Ra({encapsulation:0,styles:[[""]],data:{}});function f(l){return t.lb(0,[(l()(),t.Ta(0,0,null,null,1,"app-product-item",[],null,null,null,d,s)),t.Sa(1,114688,null,0,c,[],{product:[0,"product"],index:[1,"index"]},null)],function(l,n){l(n,1,0,n.context.$implicit,n.context.index)},null)}function T(l){return t.lb(0,[(l()(),t.Ta(0,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Ta(1,0,null,null,2,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),t.Ta(2,0,null,null,1,"button",[["class","btn btn-success"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onNewProduct()&&t),t},null,null)),(l()(),t.jb(-1,null,["New Product"])),(l()(),t.Ta(4,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Ta(5,0,null,null,2,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),t.Ta(6,0,null,null,1,"app-product-start",[],null,null,null,h,b)),t.Sa(7,114688,null,0,p,[],null,null),(l()(),t.Ta(8,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t.Ta(9,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Ta(10,0,null,null,2,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),t.Ka(16777216,null,null,1,null,f)),t.Sa(12,278528,null,0,a.h,[t.S,t.P,t.v],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,7,0),l(n,12,0,u.products)},null)}var y=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),S=t.Ra({encapsulation:0,styles:[[""]],data:{}});function x(l){return t.lb(0,[(l()(),t.Ta(0,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Ta(1,0,null,null,2,"div",[["class","col-md-5"]],null,null,null,null,null)),(l()(),t.Ta(2,0,null,null,1,"app-product-list",[],null,null,null,T,v)),t.Sa(3,245760,null,0,g,[m.a,e.k,e.a],null,null),(l()(),t.Ta(4,0,null,null,2,"div",[["class","col-md-7"]],null,null,null,null,null)),(l()(),t.Ta(5,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t.Sa(6,212992,null,0,e.o,[e.b,t.S,t.k,[8,null],t.i],null,null)],function(l,n){l(n,3,0),l(n,6,0)},null)}var w=t.Pa("app-products",y,function(l){return t.lb(0,[(l()(),t.Ta(0,0,null,null,1,"app-products",[],null,null,null,x,S)),t.Sa(1,114688,null,0,y,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),C=u("gIcY"),P=function(){function l(l,n,u){this.route=l,this.productService=n,this.router=u,this.editMode=!1}return l.prototype.ngOnInit=function(){var l=this;this.route.params.subscribe(function(n){l.id=+n.id,l.editMode=null!=n.id,l.initForm()}),this.getCategories()},l.prototype.onSubmit=function(){new r.a(this.productForm.value.productId,this.productForm.value.name,this.productForm.value.possibleMaterialFinishes,this.productForm.value.products,this.productForm.value.dimensions,this.productForm.value.category),this.editMode?this.productService.updateProduct(this.id,this.productForm.value):this.productService.addProduct(this.productForm.value),this.onCancel()},l.prototype.onAddProduct=function(){this.productForm.get("products").push(new C.g({name:new C.e(null,C.t.required)}))},l.prototype.onDeleteProduct=function(l){this.productForm.get("products").removeAt(l)},l.prototype.onCancel=function(){this.router.navigate(["../"],{relativeTo:this.route})},l.prototype.getControls=function(){return this.productForm.get("products"),this.productForm.get("possibleMaterialFinishes").controls},l.prototype.initForm=function(){var l,n,u,t,o,i,e,a,r=this;if(this.editMode){if(this.productService.getProduct(this.id).then(function(l){r.product=l,console.log(r.product)}),n=this.product.name,l=this.product.productId,u=this.product.dimensions.minHeight,t=this.product.dimensions.maxHeight,o=this.product.dimensions.minDepth,i=this.product.dimensions.maxDepth,e=this.product.dimensions.minWidth,a=this.product.dimensions.maxWidth,this.product.products)for(var c=0,s=this.product.products;c<s.length;c++){var d=s[c];(void 0).push(d)}if(this.product.possibleMaterialFinishes)for(var p=0,b=this.product.possibleMaterialFinishes;p<b.length;p++){var h=b[p];(void 0).push(h)}}this.productForm=new C.g({productId:new C.e(l,C.t.required),name:new C.e(n,C.t.required),productPossibleMaterialFinishes:new C.e(void 0,C.t.required),products:new C.e(void 0,C.t.required),productDimensionminHeight:new C.e(u,C.t.required),productDimensionmaxHeight:new C.e(t,C.t.required),productDimensionminDepth:new C.e(o,C.t.required),productDimensionmaxDepth:new C.e(i,C.t.required),productDimensionminWidth:new C.e(e,C.t.required),productDimensionmaxWidth:new C.e(a,C.t.required),productCategory:new C.e(void 0,C.t.required)})},l.prototype.getCategories=function(){var l=this;this.productService.getCategory().then(function(n){l.lcategory=n,console.log(l.lcategory)})},l}(),j=t.Ra({encapsulation:0,styles:[["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]],data:{}});function F(l){return t.lb(0,[(l()(),t.Ta(0,0,null,null,3,"option",[],null,null,null,null,null)),t.Sa(1,147456,null,0,C.q,[t.l,t.G,[8,null]],{value:[0,"value"]},null),t.Sa(2,147456,null,0,C.z,[t.l,t.G,[8,null]],{value:[0,"value"]},null),(l()(),t.jb(3,null,["",""]))],function(l,n){l(n,1,0,n.context.$implicit),l(n,2,0,n.context.$implicit)},function(l,n){l(n,3,0,n.context.$implicit.name)})}function k(l){return t.lb(0,[(l()(),t.Ta(0,0,null,null,38,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Ta(1,0,null,null,37,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),t.Ta(2,0,null,null,36,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var o=!0,i=l.component;return"submit"===n&&(o=!1!==t.cb(l,4).onSubmit(u)&&o),"reset"===n&&(o=!1!==t.cb(l,4).onReset()&&o),"ngSubmit"===n&&(o=!1!==i.onSubmit()&&o),o},null,null)),t.Sa(3,16384,null,0,C.w,[],null,null),t.Sa(4,540672,null,0,C.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.gb(2048,null,C.b,null,[C.h]),t.Sa(6,16384,null,0,C.n,[[4,C.b]],null,null),(l()(),t.Ta(7,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Ta(8,0,null,null,4,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),t.Ta(9,0,null,null,1,"button",[["class","btn btn-success"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),t.jb(-1,null,["Save"])),(l()(),t.Ta(11,0,null,null,1,"button",[["class","btn btn-danger"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onCancel()&&t),t},null,null)),(l()(),t.jb(-1,null,["Cancel"])),(l()(),t.Ta(13,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Ta(14,0,null,null,9,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),t.Ta(15,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.Ta(16,0,null,null,1,"label",[["for","name"]],null,null,null,null,null)),(l()(),t.jb(-1,null,["Name"])),(l()(),t.Ta(18,0,null,null,5,"input",[["class","form-control"],["formControlName","name"],["id","name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.cb(l,19)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.cb(l,19).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.cb(l,19)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.cb(l,19)._compositionEnd(u.target.value)&&o),o},null,null)),t.Sa(19,16384,null,0,C.c,[t.G,t.l,[2,C.a]],null,null),t.gb(1024,null,C.k,function(l){return[l]},[C.c]),t.Sa(21,671744,null,0,C.f,[[3,C.b],[8,null],[8,null],[6,C.k],[2,C.y]],{name:[0,"name"]},null),t.gb(2048,null,C.l,null,[C.f]),t.Sa(23,16384,null,0,C.m,[[4,C.l]],null,null),(l()(),t.Ta(24,0,null,null,14,"div",[],null,null,null,null,null)),(l()(),t.Ta(25,0,null,null,1,"label",[["for","Child-Category"]],null,null,null,null,null)),(l()(),t.jb(-1,null,["Child-Category"])),(l()(),t.Ta(27,0,null,null,5,"input",[["class","form-control"],["formControlName","name"],["id","category-child"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.cb(l,28)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.cb(l,28).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.cb(l,28)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.cb(l,28)._compositionEnd(u.target.value)&&o),o},null,null)),t.Sa(28,16384,null,0,C.c,[t.G,t.l,[2,C.a]],null,null),t.gb(1024,null,C.k,function(l){return[l]},[C.c]),t.Sa(30,671744,null,0,C.f,[[3,C.b],[8,null],[8,null],[6,C.k],[2,C.y]],{name:[0,"name"]},null),t.gb(2048,null,C.l,null,[C.f]),t.Sa(32,16384,null,0,C.m,[[4,C.l]],null,null),(l()(),t.Ta(33,0,null,null,1,"label",[["for","Father-Category"]],null,null,null,null,null)),(l()(),t.jb(-1,null,["Father-Category"])),(l()(),t.Ta(35,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Ta(36,0,[["state_id",1]],null,2,"select",[["id","state_id"]],null,null,null,null,null)),(l()(),t.Ka(16777216,null,null,1,null,F)),t.Sa(38,278528,null,0,a.h,[t.S,t.P,t.v],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,4,0,u.productForm),l(n,21,0,"name"),l(n,30,0,"name"),l(n,38,0,u.lcategory)},function(l,n){var u=n.component;l(n,2,0,t.cb(n,6).ngClassUntouched,t.cb(n,6).ngClassTouched,t.cb(n,6).ngClassPristine,t.cb(n,6).ngClassDirty,t.cb(n,6).ngClassValid,t.cb(n,6).ngClassInvalid,t.cb(n,6).ngClassPending),l(n,9,0,!u.productForm.valid),l(n,18,0,t.cb(n,23).ngClassUntouched,t.cb(n,23).ngClassTouched,t.cb(n,23).ngClassPristine,t.cb(n,23).ngClassDirty,t.cb(n,23).ngClassValid,t.cb(n,23).ngClassInvalid,t.cb(n,23).ngClassPending),l(n,27,0,t.cb(n,32).ngClassUntouched,t.cb(n,32).ngClassTouched,t.cb(n,32).ngClassPristine,t.cb(n,32).ngClassDirty,t.cb(n,32).ngClassValid,t.cb(n,32).ngClassInvalid,t.cb(n,32).ngClassPending)})}var M=t.Pa("app-product-edit",P,function(l){return t.lb(0,[(l()(),t.Ta(0,0,null,null,1,"app-product-edit",[],null,null,null,k,j)),t.Sa(1,114688,null,0,P,[e.a,m.a,e.k],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),D=u("3V6w"),O=function(){function l(l,n,u){this.productService=l,this.route=n,this.router=u}return l.prototype.ngOnInit=function(){var l=this;this.route.params.subscribe(function(n){l.id=+n.id,l.productService.getProduct(l.id).then(function(n){l.product=n,l.subproducts=n.products,console.log(l.subproducts),console.log(l.product)})})},l.prototype.onAddToShoppingList=function(){this.productService.addProductToShoppingList(this.product)},l.prototype.onEditProduct=function(){this.router.navigate(["edit"],{relativeTo:this.route}),this.router.navigate(["../",this.id,"edit"],{relativeTo:this.route})},l.prototype.onDeleteProduct=function(){this.productService.deleteProduct(this.id),this.router.navigate(["/products"])},l}(),I=t.Ra({encapsulation:0,styles:[[""]],data:{}});function q(l){return t.lb(0,[(l()(),t.Ta(0,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),t.Ta(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.jb(2,null,["",""])),(l()(),t.Ta(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.jb(4,null,["",""])),(l()(),t.Ta(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.jb(6,null,["",""]))],null,function(l,n){l(n,2,0,n.context.index+1),l(n,4,0,n.context.$implicit.material.name),l(n,6,0,n.context.$implicit.name)})}function A(l){return t.lb(0,[(l()(),t.Ta(0,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),t.Ta(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.jb(2,null,["",""])),(l()(),t.Ta(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.jb(4,null,["",""]))],null,function(l,n){l(n,2,0,n.context.index+1),l(n,4,0,n.context.$implicit.name)})}function L(l){return t.lb(0,[(l()(),t.Ta(0,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Ta(1,0,null,null,2,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),t.Ta(2,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.jb(3,null,["",""])),(l()(),t.Ta(4,0,null,null,16,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Ta(5,0,null,null,15,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),t.Ta(6,0,null,null,14,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Ta(7,0,null,null,13,"div",[["class","col-sm-5 form-group"]],null,null,null,null,null)),(l()(),t.Ta(8,0,null,null,1,"label",[["for","product"]],null,null,null,null,null)),(l()(),t.jb(-1,null,["Possible Material Finishes"])),(l()(),t.Ta(10,0,null,null,10,"table",[["class","table"]],null,null,null,null,null)),(l()(),t.Ta(11,0,null,null,9,"tbody",[],null,null,null,null,null)),(l()(),t.Ta(12,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),t.Ta(13,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.jb(-1,null,["#"])),(l()(),t.Ta(15,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.jb(-1,null,["Material"])),(l()(),t.Ta(17,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.jb(-1,null,["Finish"])),(l()(),t.Ka(16777216,null,null,1,null,q)),t.Sa(20,278528,null,0,a.h,[t.S,t.P,t.v],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Ta(21,0,null,null,62,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Ta(22,0,null,null,61,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),t.Ta(23,0,null,null,31,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Ta(24,0,null,null,30,"div",[["class","col-sm-5 form-group"]],null,null,null,null,null)),(l()(),t.Ta(25,0,null,null,1,"label",[["for","product"]],null,null,null,null,null)),(l()(),t.jb(-1,null,["Product Dimensions"])),(l()(),t.Ta(27,0,null,null,27,"table",[["class","table"]],null,null,null,null,null)),(l()(),t.Ta(28,0,null,null,26,"tbody",[],null,null,null,null,null)),(l()(),t.Ta(29,0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),t.Ta(30,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.jb(-1,null,["Minimal Height"])),(l()(),t.Ta(32,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.jb(-1,null,["Maximal Height"])),(l()(),t.Ta(34,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.jb(-1,null,["Minimal Depth"])),(l()(),t.Ta(36,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.jb(-1,null,["Maximal Depth"])),(l()(),t.Ta(38,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.jb(-1,null,["Minimal Width"])),(l()(),t.Ta(40,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.jb(-1,null,["Maximal Width"])),(l()(),t.Ta(42,0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),t.Ta(43,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.jb(44,null,["",""])),(l()(),t.Ta(45,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.jb(46,null,["",""])),(l()(),t.Ta(47,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.jb(48,null,["",""])),(l()(),t.Ta(49,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.jb(50,null,["",""])),(l()(),t.Ta(51,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.jb(52,null,["",""])),(l()(),t.Ta(53,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.jb(54,null,["",""])),(l()(),t.Ta(55,0,null,null,14,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Ta(56,0,null,null,13,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),t.Ta(57,0,null,null,12,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Ta(58,0,null,null,11,"div",[["class","col-sm-5 form-group"]],null,null,null,null,null)),(l()(),t.Ta(59,0,null,null,1,"label",[["for","product"]],null,null,null,null,null)),(l()(),t.jb(-1,null,["Contained Products"])),(l()(),t.Ta(61,0,null,null,8,"table",[["class","table"]],null,null,null,null,null)),(l()(),t.Ta(62,0,null,null,7,"tbody",[],null,null,null,null,null)),(l()(),t.Ta(63,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),t.Ta(64,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.jb(-1,null,["#"])),(l()(),t.Ta(66,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.jb(-1,null,["Product"])),(l()(),t.Ka(16777216,null,null,1,null,A)),t.Sa(69,278528,null,0,a.h,[t.S,t.P,t.v],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Ta(70,0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Ta(71,0,null,null,12,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),t.Ta(72,0,null,null,11,"div",[["appDropdown",""],["class","btn-group"]],[[2,"open",null]],[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.cb(l,73).toggleOpen()&&o),o},null,null)),t.Sa(73,16384,null,0,D.a,[],null,null),(l()(),t.Ta(74,0,null,null,2,"button",[["class","btn btn-primary dropdown-toggle"],["type","button"]],null,null,null,null,null)),(l()(),t.jb(-1,null,[" Manage Product "])),(l()(),t.Ta(76,0,null,null,0,"span",[["class","caret"]],null,null,null,null,null)),(l()(),t.Ta(77,0,null,null,6,"ul",[["class","dropdown-menu"]],null,null,null,null,null)),(l()(),t.Ta(78,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),t.Ta(79,0,null,null,1,"a",[["style","cursor: pointer;"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onAddToShoppingList()&&t),t},null,null)),(l()(),t.jb(-1,null,["To Shopping List"])),(l()(),t.Ta(81,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),t.Ta(82,0,null,null,1,"a",[["style","cursor: pointer;"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onAddToShoppingList()&&t),t},null,null)),(l()(),t.jb(-1,null,["Edit Product"]))],function(l,n){var u=n.component;l(n,20,0,u.product.possibleMaterialFinishes),l(n,69,0,u.subproducts)},function(l,n){var u=n.component;l(n,3,0,u.product.name),l(n,44,0,u.product.dimensions.minHeight),l(n,46,0,u.product.dimensions.maxHeight),l(n,48,0,u.product.dimensions.minDepth),l(n,50,0,u.product.dimensions.maxDepth),l(n,52,0,u.product.dimensions.minWidth),l(n,54,0,u.product.dimensions.maxWidth),l(n,72,0,t.cb(n,73).isOpen)})}var _=t.Pa("app-product-detail",O,function(l){return t.lb(0,[(l()(),t.Ta(0,0,null,null,1,"app-product-detail",[],null,null,null,L,I)),t.Sa(1,114688,null,0,O,[m.a,e.a,e.k],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),G=u("OTVi"),H=u("qXBG"),W=function(){},K=u("PCNd");u.d(n,"ProductsModuleNgFactory",function(){return N});var N=t.Qa(o,[],function(l){return t.ab([t.bb(512,t.k,t.Fa,[[8,[i.a,w,M,_]],[3,t.k],t.A]),t.bb(4608,a.k,a.j,[t.x,[2,a.r]]),t.bb(4608,C.d,C.d,[]),t.bb(4608,C.x,C.x,[]),t.bb(4608,G.a,G.a,[H.a]),t.bb(1073742336,a.b,a.b,[]),t.bb(1073742336,C.u,C.u,[]),t.bb(1073742336,C.r,C.r,[]),t.bb(1073742336,e.n,e.n,[[2,e.t],[2,e.k]]),t.bb(1073742336,W,W,[]),t.bb(1073742336,K.a,K.a,[]),t.bb(1073742336,o,o,[]),t.bb(1024,e.i,function(){return[[{path:"",component:y,children:[{path:"new",component:P,canActivate:[G.a]},{path:":id",component:O},{path:":id/edit",component:P,canActivate:[G.a]}]}]]},[])])})}}]);