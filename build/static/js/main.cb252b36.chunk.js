(this["webpackJsonpplant-tracking-app"]=this["webpackJsonpplant-tracking-app"]||[]).push([[0],{146:function(e,t,i){},147:function(e,t,i){},148:function(e,t,i){},149:function(e,t,i){},150:function(e,t,i){},151:function(e,t,i){"use strict";i.r(t);var s,a,c,n,l=i(0),d=i(2),r=i.n(d),o=i(13),m=i.n(o),j=i(51),u=i(8),h=i.p+"static/media/landingPage.7f6f6a1d.jpg",b=(i(77),function(){return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"landingPageContainer",children:[Object(l.jsx)("a",{href:"/search",className:"CTA button is-large is-primary is-outlined",children:Object(l.jsx)("p",{children:"Time to Get Planting"})}),Object(l.jsx)("img",{"data-testid":"backgroundImg",className:"backgroundImg",alt:"backgroundImg",src:h})]})})}),v=i(71),p=i(5),x=i(33),O=i.n(x),g=i(34),f=i.n(g),N=i(18);!function(e){e.low="low",e.normal="normal",e.high="high"}(s||(s={})),function(e){e.fullSun="full sun",e.partSunPartShade="part sun part shade",e.brightLight="bight light",e.shade="shade",e.dark="dark"}(a||(a={})),function(e){e.never="never",e.oncePerDay="once per day",e.oncePerWeek="once per week"}(c||(c={})),function(e){e.easy="easy",e.meduim="meduim",e.hard="hard"}(n||(n={}));var w="collection",y="no name provided";function S(){var e=[],t=window.sessionStorage.getItem(w);return null!==t&&(e=JSON.parse(t)),e}var P,k=[{id:0,scientificName:"strelitzia reginae",commonName:["giant white birds of paradise"],humidityLevel:s.normal,minTemp:65,maxTemp:80,misting:c.oncePerWeek,difficultyLevel:n.meduim,img:"https://cdn.shopify.com/s/files/1/0013/3529/6118/products/Wythe-40-2970.040-WH_Bird-of-Paradise-14.jpg?v=1604354745",waterSchedule:4,lightRequirements:[a.fullSun,a.partSunPartShade]},{id:1,scientificName:"ravenea rivularis",commonName:["majesty palm"],humidityLevel:s.high,lightRequirements:[a.partSunPartShade,a.shade],minTemp:65,maxTemp:80,misting:c.oncePerWeek,difficultyLevel:n.meduim,img:"https://i.ebayimg.com/images/g/hUkAAOSwhQJdA339/s-l640.png",waterSchedule:4},{id:2,scientificName:"dracaena trifasciata",commonName:["snake plant","sansevieria","mother-in-laws"],humidityLevel:s.low,lightRequirements:[a.shade,a.brightLight],minTemp:65,maxTemp:85,misting:c.oncePerWeek,difficultyLevel:n.easy,img:"https://cdn.shopify.com/s/files/1/0260/3037/4957/products/medium-plant-snake-white-pot_800x.jpg?v=1597702214",waterSchedule:14},{id:3,scientificName:"ficus lyrata",commonName:["fiddle leaf fig"],humidityLevel:s.high,lightRequirements:[a.partSunPartShade,a.brightLight],minTemp:65,maxTemp:75,misting:c.oncePerWeek,difficultyLevel:n.meduim,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSR6seHxhgA9CGL89YnsxIWBofi2mYrd4H0fMTi-hyzv0hW7RCIH3JxljgNn54V-3M7pdafok&usqp=CAc",waterSchedule:4},{id:4,scientificName:"chlorophytum comosum",commonName:["spider plant"],humidityLevel:s.normal,lightRequirements:[a.partSunPartShade,a.brightLight],minTemp:60,maxTemp:80,misting:c.oncePerWeek,difficultyLevel:n.easy,img:"https://www.mydomaine.com/thmb/jESW-X0scQYLt72ILH4-MJR55LU=/1370x1661/filters:no_upscale():max_bytes(150000):strip_icc()/bloomscape-product-spider-plant-stone-2-aadf20d628e04c988ba462c9b47a2abc.jpg",waterSchedule:7},{id:5,scientificName:"aloe barbadensis miller",commonName:["aloe vera"],humidityLevel:s.low,lightRequirements:[a.fullSun,a.partSunPartShade],minTemp:50,maxTemp:85,misting:c.never,difficultyLevel:n.easy,img:"https://www.trees.com/sites/default/files/field/image/Aloe-vera-in-pot.jpg",waterSchedule:21},{id:6,scientificName:"crassula ovata",commonName:["jade"],humidityLevel:s.low,lightRequirements:[a.fullSun,a.partSunPartShade],minTemp:55,maxTemp:75,misting:c.never,difficultyLevel:n.easy,img:"https://www.trees.com/sites/default/files/field/image/jade-plant_0.jpg",waterSchedule:24},{id:7,scientificName:"hedera helix",commonName:["english ivy","common ivy"],humidityLevel:s.high,lightRequirements:[a.shade,a.partSunPartShade],minTemp:50,maxTemp:65,misting:c.oncePerWeek,difficultyLevel:n.meduim,img:"https://netrinoimages.s3.eu-west-2.amazonaws.com/2018/03/23/504292/274593/hedera_helix_wonder_long_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2876893_o.jpg",waterSchedule:4},{id:8,scientificName:"scindapsus pictus",commonName:["silvery ann pothos","satin pothos"],humidityLevel:s.normal,lightRequirements:[a.shade,a.partSunPartShade],minTemp:65,maxTemp:85,misting:c.oncePerWeek,difficultyLevel:n.easy,img:"https://cdn.shopify.com/s/files/1/1637/3125/products/FoliaCollective-Scindapsus-pictus-argreyus-6in-detail-web_1200x1800.jpg?v=1584981419",waterSchedule:8},{id:9,scientificName:"ficus elastica",commonName:["rubber plant","rubber bush","rubber tree"],humidityLevel:s.normal,lightRequirements:[a.partSunPartShade],minTemp:50,maxTemp:85,misting:c.oncePerWeek,difficultyLevel:n.easy,img:"https://cdn.shopify.com/s/files/1/0260/3037/4957/products/medium-plant-ficus-white-pot_720x@2x.jpg?v=1596316900",waterSchedule:21},{id:10,scientificName:"sedum morganianum",commonName:["burro's tail","donkey's tail"],humidityLevel:s.low,lightRequirements:[a.partSunPartShade],minTemp:65,maxTemp:75,misting:c.never,difficultyLevel:n.easy,img:"https://img.crocdn.co.uk/images/products2/pl/20/00/03/44/pl2000034457.jpg?width=940&height=940",waterSchedule:21},{id:11,scientificName:"mammillaria crinita",commonName:["mexican pincushion cactus"],humidityLevel:s.low,lightRequirements:[a.fullSun,a.partSunPartShade],minTemp:50,maxTemp:75,misting:c.never,difficultyLevel:n.easy,img:"https://i.ebayimg.com/images/g/0lsAAOSwTQtaGIEU/s-l400.jpg",waterSchedule:40},{id:12,scientificName:"haworthia fasciata",commonName:["zebra plant"],humidityLevel:s.low,lightRequirements:[a.fullSun,a.partSunPartShade],minTemp:65,maxTemp:80,misting:c.never,difficultyLevel:n.meduim,img:"https://cdn.shopify.com/s/files/1/0350/5665/products/5N8A7534_web_c0f3f5cc-d3d0-46f5-9d99-9079daadceab_600x600.jpg?v=1575498364",waterSchedule:21},{id:13,scientificName:"agave ovatifolia",commonName:["whale\u2019s tongue agave"],humidityLevel:s.low,lightRequirements:[a.fullSun,a.partSunPartShade],misting:c.never,difficultyLevel:n.easy,img:"https://e54055a024bc6fb58d47-f7df714a3b816a175961a96ef2278d84.ssl.cf2.rackcdn.com/14425-Agave-Ovatifolia--Frosty-Blue.jpg",waterSchedule:21},{id:14,scientificName:"parodia magnifica",commonName:["ball cactus"],humidityLevel:s.low,lightRequirements:[a.fullSun],minTemp:40,maxTemp:85,misting:c.never,difficultyLevel:n.easy,img:"https://i.pinimg.com/originals/6d/41/6c/6d416ca3ba039ed00d4a5140930eb080.jpg",waterSchedule:21},{id:15,scientificName:"epipremnum aureum",commonName:["golden pothos"],humidityLevel:s.normal,lightRequirements:[a.shade],minTemp:70,maxTemp:90,misting:c.oncePerWeek,difficultyLevel:n.easy,img:"https://www.almanac.com/sites/default/files/image_nodes/pothos_usmee_ss-crop.jpg",waterSchedule:7}],A=Object(d.createContext)({selectedPlant:void 0,setSelectedPlant:function(e){return console.warn("no setSelectedPlant context provider")},isModalOpen:!1,setModalOpen:function(e){return console.warn("modal no context provider")},searchResults:k,setSearchResults:function(e){return console.warn("no search context provider")}}),L=function(){return Object(d.useContext)(A)};function C(){return Object.values(P)}function T(e){return void 0!==e?e.charAt(0).toUpperCase()+e.slice(1):""}!function(e){e.north="north",e.northEast="north east",e.northWest="north west",e.west="west",e.east="east",e.south="south",e.southEast="south east"}(P||(P={}));i(57),i(58),i(59),i(78);var R=function(){var e=Object(d.useState)(y),t=Object(p.a)(e,2),i=t[0],s=t[1],a=r.a.useState(!1),c=Object(p.a)(a,2),n=c[0],o=c[1],m=r.a.useState(!1),j=Object(p.a)(m,2),u=j[0],h=j[1],b=r.a.useState(void 0),v=Object(p.a)(b,2),x=v[0],g=v[1],P=r.a.useState(new Date),k=Object(p.a)(P,2),A=k[0],R=k[1],I=L().selectedPlant,M=L(),D=M.isModalOpen,B=M.setModalOpen,H=function(){B(!D)},J=null===I||void 0===I?void 0:I.commonName[0];return Object(l.jsxs)("div",{"data-testid":"plantInspector",className:"modal is-active ",children:[Object(l.jsx)("div",{className:"modal-background",onClick:H}),Object(l.jsx)("div",{className:"modal-card",children:Object(l.jsxs)("section",{className:"modal-card-body",children:[Object(l.jsxs)("header",{className:"modal-card-head",children:[Object(l.jsx)("p",{"data-testid":"header",className:"modal-card-title",children:T(J)}),Object(l.jsx)("button",{"data-testid":"closeBtn",className:"delete","aria-label":"close",onClick:H})]}),Object(l.jsxs)("div",{className:"tile is-ancestor",children:[Object(l.jsx)(N.a,{}),Object(l.jsx)("div",{className:"tile is-parent",children:Object(l.jsx)("img",{className:"plantImg","data-testid":"plantInspectImg",src:null===I||void 0===I?void 0:I.img,alt:""})}),Object(l.jsx)("div",{className:"tile is-vertical is-8",children:Object(l.jsx)("div",{className:"tile",children:Object(l.jsx)("div",{className:"tile is-parent ",children:Object(l.jsxs)("article",{className:"tile is-child ",children:[Object(l.jsx)("div",{className:"tile",children:Object(l.jsx)("div",{className:" tile is-parent",children:Object(l.jsxs)("strong",{"data-testid":"plantName",className:"tile content",children:["Add ",T(J)," to your collection"]})})}),Object(l.jsxs)("div",{className:"tile ",children:[Object(l.jsxs)("div",{className:"tile is-parent is-vertical",children:[Object(l.jsx)("div",{className:"tile",children:"Last watered on:"}),Object(l.jsx)(f.a,{className:"input is-success",placeholderText:"Date Last Watered",selected:A,onChange:function(e){return R(e)}})]}),Object(l.jsxs)("div",{className:"tile is-parent is-vertical dropdownContainer",children:[Object(l.jsx)("div",{className:"tile",children:"Direction:"}),Object(l.jsx)(O.a,{onChange:function(e){g(e.value)},className:"directionFacingDropdown",options:C(),placeholder:"Direction Facing"})]})]}),Object(l.jsxs)("div",{className:"tile is-parent is-vertical",children:[Object(l.jsx)("div",{className:"field",children:Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{onChange:function(e){return function(e){if(e.target.value){var t=e.target.value;s(t)}else s(y)}(e)},className:"input is-success",type:"text",placeholder:"Name this plant"})})}),Object(l.jsxs)("label",{className:"tile is-child checkbox",children:[Object(l.jsx)("input",{type:"checkbox",onChange:function(){h(!u)}}),"Located in a window seal?"]}),Object(l.jsxs)("label",{className:"tile is-child checkbox",children:[Object(l.jsx)("input",{type:"checkbox",onChange:function(){o(!n)}}),"Located under a grow light?"]})]}),Object(l.jsx)("div",{className:"tile is-parent",children:Object(l.jsx)("button",{"data-testid":"addPlantButton",className:"tile is-child button is-primary",onClick:function(){var e={name:i,id:I.id,directionFacing:x,inWindowSeal:u,growLight:n,lastWaterDate:A},t=S();t.push(e),window.sessionStorage.setItem(w,JSON.stringify(t)),N.b.success("Plant has been added!",{position:"top-center"})},children:"Add"})})]})})})})]}),Object(l.jsx)("div",{className:"tile is-ancestor",children:Object(l.jsx)("div",{className:"tile is-parent",children:Object(l.jsxs)("article",{className:"tile is-child ",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("strong",{children:"Scientific Name: "}),null===I||void 0===I?void 0:I.scientificName]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("strong",{children:"Ideal Temperature Range: "}),null===I||void 0===I?void 0:I.minTemp," - ",null===I||void 0===I?void 0:I.maxTemp]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("strong",{children:"Misting Requirement: "}),null===I||void 0===I?void 0:I.misting]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("strong",{children:"Difficulty: "}),Object(l.jsx)("div",{className:"tag is-success is-small is-rounded",children:null===I||void 0===I?void 0:I.difficultyLevel})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("strong",{children:"Humidity Level:"}),Object(l.jsx)("div",{className:"tag is-success is-small is-rounded",children:null===I||void 0===I?void 0:I.humidityLevel})]}),void 0===(null===I||void 0===I?void 0:I.lightRequirements)?void 0:Object(l.jsxs)("div",{className:"tags",children:[Object(l.jsx)("strong",{children:" Light Requirements:"}),null===I||void 0===I?void 0:I.lightRequirements.map((function(e){return Object(l.jsx)("div",{className:"tag is-success is-small is-rounded ",children:e},e)}))]})]})})})]})})]})},I=i(30),M=i.n(I),D=i(69),B=i.n(D),H=function(){var e=L().setSearchResults,t=B.a.debounce((function(t){if(t.target.value){for(var i=t.target.value.toLowerCase(),s=[],a=0;a<k.length;a++)for(var c=k[a],n=0;n<c.commonName.length;n++){if(c.commonName[n].toLowerCase().includes(i)){s.push(c);break}}e(s)}else e(k)}),300);return Object(l.jsx)("div",{"data-testid":"searchComp",className:"field",children:Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-testid":"searchInput",className:"input is-primary is-rounded",type:"text",name:"search",placeholder:"Search..",onChange:function(e){t(e)}})})})},J=function(e){var t=Object(d.useState)(!1),i=Object(p.a)(t,2),s=i[0],a=i[1],c=Object(u.e)();function n(){c.push("/collections")}return Object(l.jsxs)("nav",{className:"navbar","data-testid":"navBar",children:[Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)("a",{className:"navbar-item",href:"/search",children:Object(l.jsx)("img",{className:"logoImg",alt:"Logo",src:"data:image/png;base64,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"})}),Object(l.jsxs)("div",{className:M()("navbar-burger","".concat(s?"is-active":"")),onClick:function(){a(!s)},children:[Object(l.jsxs)("div",{className:"",children:[Object(l.jsx)("span",{}),Object(l.jsx)("span",{}),Object(l.jsx)("span",{})]}),Object(l.jsx)("div",{className:M()("".concat(s?"is-active":""),"navbar-menu","has-dropdown"),children:Object(l.jsxs)("div",{className:"navbar-dropdown",children:[Object(l.jsx)("a",{href:"/search",className:"navbar-item",children:"Home"}),Object(l.jsx)("a",{className:"navbar-item",href:"/collections",children:"Collections"}),Object(l.jsx)("a",{className:"navbar-item",href:"/",children:"Sign Out"})]})})]})]}),Object(l.jsx)("div",{className:"navbar-menu",children:Object(l.jsxs)("div",{className:"navbar-end",children:[e.search?Object(l.jsx)(H,{}):null,Object(l.jsx)("div",{className:"",children:Object(l.jsxs)("div",{className:"buttons",children:[!0===e.search?Object(l.jsx)("a",{href:"/collections",className:" navbar-item button is-primary",onClick:n,children:Object(l.jsx)("strong",{children:"Collections"})}):Object(l.jsx)("a",{href:"/search",className:" navbar-item button is-primary",onClick:n,children:Object(l.jsx)("strong",{children:"Search Page"})}),Object(l.jsx)("a",{href:"/",className:"navbar-item button is-primary",onClick:function(){c.push("/")},children:Object(l.jsx)("strong",{children:"Sign Out"})})]})})]})})]})},q=(i(146),function(){return Object(l.jsx)("div",{className:"plantsUnavailable",children:"No plants available. Please try altering your search."})}),F=(i(147),function(e){var t=e.id,i=void 0===t?0:t,d=(e.scientificName,e.commonName),r=void 0===d?["",""]:d,o=e.humidityLevel,m=void 0===o?s.normal:o,j=e.lightRequirements,u=void 0===j?a.partSunPartShade:j,h=(e.minTemp,e.maxTemp,e.misting),b=(void 0===h&&c.never,e.difficultyLevel),v=void 0===b?n.meduim:b,p=e.img,x=void 0===p?"":p,O=(e.waterSchedule,L()),g=O.setModalOpen,f=O.setSelectedPlant;return Object(l.jsxs)("div",{"data-testid":"plantCardComponent",className:"plantCardContainer box ",onClick:function(){g(!0),f(e)},children:[Object(l.jsx)("div",{className:"plantCardDetails",children:Object(l.jsx)("img",{src:x,className:"plantImage media-content",alt:"plant"})}),Object(l.jsx)("div",{className:"plantCommonName",children:T(r[0])}),Object(l.jsxs)("div",{className:"tags ",children:[Object(l.jsx)("div",{className:"light tag is-primary is-success is-rounded",children:u[0]}),Object(l.jsx)("div",{className:"difficultyLevel tag is-primary is-success is-rounded",children:v}),Object(l.jsx)("div",{className:"humidity tag is-primary is-success is-rounded",children:m})]})]},i)}),W=(i(148),function(){return Object(l.jsx)("div",{"data-testid":"loadingComponent",className:"loader-wrapper",children:Object(l.jsx)("div",{className:"loader is-loading",children:"loading..."})})}),E=(i(149),function(){var e=r.a.useState(!0),t=Object(p.a)(e,2),i=t[0],s=t[1],a=r.a.useState(!1),c=Object(p.a)(a,2),n=c[0],o=c[1],m=Object(d.useState)(k),j=Object(p.a)(m,2),u=j[0],h=j[1],b=Object(d.useState)(void 0),x=Object(p.a)(b,2),O=x[0],g=x[1];return window.onload=function(){s(!i)},Object(l.jsx)(A.Provider,{value:{searchResults:u,setSearchResults:h,isModalOpen:n,setModalOpen:o,selectedPlant:O,setSelectedPlant:g},children:i?Object(l.jsx)(W,{}):Object(l.jsxs)("div",{className:"",children:[n?Object(l.jsx)(R,{}):void 0,Object(l.jsx)(J,{search:!0}),Object(l.jsx)("div",{className:"resultsContainer",children:Object(l.jsx)("div",{className:"featuredPlantsHeader",children:"Featured Plants"})}),Object(l.jsx)("div",{className:"cardsContainer",children:0===u.length?Object(l.jsx)(q,{}):u.map((function(e){return Object(l.jsx)(F,Object(v.a)({},e),e.id)}))})]})})}),Y=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,158)).then((function(t){var i=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,n=t.getTTFB;i(e),s(e),a(e),c(e),n(e)}))},X=Object(d.createContext)({index:void 0,setIndex:function(e){return console.warn("no setIndex context provider")},deletedPlant:void 0,setDeletedPlant:function(e){return console.warn("no setDeletedPlant context provider")},selectedPlant:void 0,setSelectedPlant:function(e){return console.warn("no setSelectedPlant context provider")},isModalOpen:!1,setModalOpen:function(e){return console.warn("modal no context provider")}}),U=function(){return Object(d.useContext)(X)},Q=function(){var e,t=U(),i=t.index,s=t.setIndex,a=t.isModalOpen,c=t.setModalOpen,n=t.selectedPlant,d=r.a.useState(y),o=Object(p.a)(d,2),m=o[0],j=o[1],u=r.a.useState(null===n||void 0===n?void 0:n.growLight),h=Object(p.a)(u,2),b=h[0],v=h[1],x=r.a.useState(null===n||void 0===n?void 0:n.inWindowSeal),g=Object(p.a)(x,2),P=g[0],A=g[1],L=r.a.useState(null===n||void 0===n?void 0:n.directionFacing),T=Object(p.a)(L,2),R=T[0],I=T[1],M=r.a.useState(new Date(null===n||void 0===n||null===(e=n.lastWaterDate)||void 0===e?void 0:e.valueOf())),D=Object(p.a)(M,2),B=D[0],H=D[1],J=function(){s(void 0),c(!a)};return Object(l.jsxs)("div",{className:"modal is-active","data-testid":"collectionInspector",children:[Object(l.jsx)("div",{className:"modal-background",onClick:J}),void 0!==n?Object(l.jsx)("div",{className:"modal-card",children:Object(l.jsxs)("section",{className:"modal-card-body",children:[Object(l.jsxs)("header",{className:"modal-card-head",children:[Object(l.jsx)("p",{className:"modal-card-title"}),Object(l.jsx)("button",{className:"delete","aria-label":"close",onClick:J})]}),Object(l.jsxs)("div",{className:"tile is-ancestor",children:[Object(l.jsx)(N.a,{}),Object(l.jsx)("div",{className:"tile is-parent",children:Object(l.jsx)("img",{className:"plantImg",src:k[n.id].img,alt:""})}),Object(l.jsx)("div",{className:"tile is-vertical is-8",children:Object(l.jsx)("div",{className:"tile",children:Object(l.jsx)("div",{className:"tile is-parent ",children:Object(l.jsxs)("article",{className:"tile is-child ",children:[Object(l.jsx)("div",{className:"tile",children:Object(l.jsx)("div",{className:" tile is-parent",children:Object(l.jsxs)("strong",{className:"tile content",children:["Update ",n.name]})})}),Object(l.jsxs)("div",{className:"tile ",children:[Object(l.jsxs)("div",{className:"tile is-parent is-vertical",children:[Object(l.jsx)("div",{className:"tile",children:"Last watered on:"}),Object(l.jsx)(f.a,{className:"input is-success",placeholderText:"Date Last Watered",selected:B,onChange:function(e){return H(e)}})]}),Object(l.jsxs)("div",{className:"tile is-parent is-vertical dropdownContainer",children:[Object(l.jsx)("div",{className:"tile",children:"Direction:"}),Object(l.jsx)(O.a,{onChange:function(e){I(e.value)},className:"directionFacingDropdown",options:C(),placeholder:R})]})]}),Object(l.jsxs)("div",{className:"tile is-parent is-vertical",children:[Object(l.jsx)("div",{className:"field",children:Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{onChange:function(e){return function(e){var t=e.target.value;j(t)}(e)},className:"input is-success",type:"text",placeholder:"Would you like to rename "+n.name+" ?"})})}),Object(l.jsxs)("label",{className:"tile is-child checkbox",children:[Object(l.jsx)("input",{checked:P,type:"checkbox",onChange:function(){A(!P)}}),"Located in a window seal?"]}),Object(l.jsxs)("label",{className:"tile is-child checkbox",children:[Object(l.jsx)("input",{checked:b,type:"checkbox",onChange:function(){v(!b)}}),"Located under a grow light?"]})]}),Object(l.jsx)("div",{className:"tile level is-parent",children:Object(l.jsx)("button",{"data-testid":"UpdatePlantButton",className:"content is-child button  is-primary ",onClick:function(){var e={name:m,id:null===n||void 0===n?void 0:n.id,directionFacing:R,inWindowSeal:P,growLight:b,lastWaterDate:B},t=S();t[i]=e,window.sessionStorage.setItem(w,JSON.stringify(t)),N.b.success("Plant has been updated!",{position:"top-center"})},children:"Update"})})]})})})})]})]})}):null]})},z=(i(150),function(e){var t,i=U(),s=i.index,a=i.setModalOpen,c=i.setSelectedPlant,n=i.setDeletedPlant,d=i.selectedPlant,r=i.setIndex,o=e.userPlant,m=o.id,j=k[o.id];return Object(l.jsx)("div",{"data-testid":"CollectionBox",className:"container",children:Object(l.jsx)("div",{className:"box content",children:Object(l.jsxs)("div",{className:"level",children:[Object(l.jsx)("div",{className:" tile is-vertical level-left",children:Object(l.jsxs)("div",{className:" tile level-item firstTile",children:[Object(l.jsx)("div",{className:"tile content ",children:Object(l.jsx)("strong",{children:T(k[m].commonName[0])})}),Object(l.jsx)("img",{className:"tile image ",alt:e.userPlant.name,src:k[m].img})]})}),Object(l.jsxs)("div",{className:"tile is-veritcal tags plantDataContainer",children:[Object(l.jsxs)("div",{"data-testid":"scienceName",children:[Object(l.jsx)("strong",{children:"Scientific Name: "}),T(j.scientificName)]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("strong",{children:"Ideal Temperature Range: "}),j.minTemp," - ",j.maxTemp]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("strong",{children:"Misting Requirement: "}),j.misting]}),Object(l.jsxs)("div",{className:"",children:[Object(l.jsx)("strong",{children:"Light Requirements:"}),function(){var e,t=null===(e=k[m])||void 0===e?void 0:e.lightRequirements;return void 0===t?void 0:t.map((function(e){return Object(l.jsx)("div",{className:"tag is-success is-small is-rounded ",children:e},e)}))}()]}),Object(l.jsxs)("div",{className:"",children:[Object(l.jsx)("strong",{children:"Difficult to Grow:"}),Object(l.jsx)("div",{className:"tag is-success is-small is-rounded ",children:j.difficultyLevel})]}),Object(l.jsxs)("div",{className:"",children:[Object(l.jsx)("strong",{children:"Humidity:"}),Object(l.jsx)("div",{className:"tag is-success is-small is-rounded ",children:j.humidityLevel})]})]}),Object(l.jsxs)("div",{className:"tile  is-vertical",children:[Object(l.jsxs)("div",{className:"tile is-child",children:[Object(l.jsx)("strong",{children:"Nickname: "}),T(o.name)]}),Object(l.jsxs)("div",{className:"tile is-child",children:[Object(l.jsx)("strong",{children:"Under growlight: "}),o.growLight?Object(l.jsxs)("div",{className:"buttons has-addons ",children:[Object(l.jsx)("div",{className:"button is-small is-success is-selected noHover",children:"Yes"}),Object(l.jsx)("div",{className:"button is-small noHover ",children:"No"})]}):Object(l.jsxs)("div",{className:"buttons has-addons ",children:[Object(l.jsx)("div",{className:"button is-small noHover",children:"Yes"}),Object(l.jsx)("div",{className:"button  is-success is-selected is-small noHover",children:"No"})]})]}),Object(l.jsxs)("div",{className:"tile is-child",children:[Object(l.jsx)("strong",{children:"Direction facing: "}),function(){var e=o.directionFacing;return void 0===e?Object(l.jsx)("div",{className:"tag is-danger is-rounded",children:" unknown "}):Object(l.jsxs)("div",{className:"tag is-success is-rounded",children:[" ",e]})}()]}),Object(l.jsxs)("div",{className:"tile is-child",children:[Object(l.jsx)("strong",{children:"In a window seal: "}),o.inWindowSeal?Object(l.jsxs)("div",{className:"buttons has-addons",children:[Object(l.jsx)("button",{className:"button is-small is-success is-selected noHover",children:"Yes"}),Object(l.jsx)("button",{className:"button is-small noHover",children:"No"})]}):Object(l.jsxs)("div",{className:"buttons has-addons ",children:[Object(l.jsx)("button",{className:"button is-small noHover",children:"Yes"}),Object(l.jsx)("button",{className:"button is-success is-selected is-small noHover",children:"No"})]})]}),Object(l.jsxs)("div",{"data-testid":"lastWaterDate",className:"tile is-child",children:[Object(l.jsx)("strong",{children:"Last watered on: "}),new Date(null===(t=o.lastWaterDate)||void 0===t?void 0:t.valueOf()).toLocaleDateString()]}),Object(l.jsx)("div",{className:"tile is-child"})]}),Object(l.jsx)("div",{className:"tile level",children:Object(l.jsxs)("div",{className:" tile level-right",children:[Object(l.jsx)("button",{"data-testid":"edit",className:"button level-item  is-success is-outlined is-small ",onClick:function(){r(null===d||void 0===d?void 0:d.id),r(e.userPlantindex),c(o),a(!0)},children:"edit"}),Object(l.jsx)("button",{"data-testid":"deletePlant",className:"button level-item  is-danger is-small",onClick:function(){r(null===d||void 0===d?void 0:d.id);var e=S();e.splice(s,1),window.sessionStorage.setItem(w,JSON.stringify(e)),n(o),N.b.success("Plant has been deleted!",{position:"top-center"})},children:"delete"})]})})]})})})}),K=function(){var e=Object(d.useState)(void 0),t=Object(p.a)(e,2),i=t[0],s=t[1],a=r.a.useState(!0),c=Object(p.a)(a,2),n=c[0],o=c[1],m=Object(d.useState)(!1),j=Object(p.a)(m,2),u=j[0],h=j[1],b=Object(d.useState)(void 0),v=Object(p.a)(b,2),x=v[0],O=v[1],g=Object(d.useState)(void 0),f=Object(p.a)(g,2),w=f[0],y=f[1],P=S();return window.onload=function(){o(!n)},n?Object(l.jsx)(W,{}):Object(l.jsx)(X.Provider,{value:{index:i,setIndex:s,deletedPlant:w,setDeletedPlant:y,isModalOpen:u,setModalOpen:h,selectedPlant:x,setSelectedPlant:O},children:Object(l.jsxs)("div",{"data-testid":"userCollectionsOutterContainer",children:[Object(l.jsx)(N.a,{}),u?Object(l.jsx)(Q,{}):void 0,Object(l.jsx)(J,{search:!1}),Object(l.jsx)("div",{className:"resultsContainer",children:Object(l.jsx)("div",{className:"featuredPlantsHeader",children:"Your Collection"})}),Object(l.jsx)("div",{"data-testid":"userCollectionItemsTernary",children:P.length>0?P.map((function(e,t){return Object(l.jsx)(z,{userPlant:e,userPlantindex:t},t)})):Object(l.jsx)("div",{"data-testid":"noPlantsAvailable",className:"noCollectionAvaiable",children:"Looks like you have not added any plants to your collection yet."})})]})})};i(66);Y();var G=function(){return Object(l.jsxs)(j.a,{children:[Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("header",{className:"App-header",children:Object(l.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap",rel:"stylesheet"})})}),Object(l.jsx)(u.a,{path:"/search",component:E}),Object(l.jsx)(u.a,{exact:!0,path:"/",component:b}),Object(l.jsx)(u.a,{exact:!0,path:"/collections",component:K})]})};m.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(G,{})}),document.getElementById("root"))},66:function(e,t,i){},77:function(e,t,i){},78:function(e,t,i){}},[[151,1,2]]]);
//# sourceMappingURL=main.cb252b36.chunk.js.map