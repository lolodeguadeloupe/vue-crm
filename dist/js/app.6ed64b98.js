(function(e){function t(t){for(var i,n,l=t[0],o=t[1],c=t[2],u=0,v=[];u<l.length;u++)n=l[u],r[n]&&v.push(r[n][0]),r[n]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);d&&d(t);while(v.length)v.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],i=!0,l=1;l<a.length;l++){var o=a[l];0!==r[o]&&(i=!1)}i&&(s.splice(t--,1),e=n(n.s=a[0]))}return e}var i={},r={app:0},s=[];function n(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=i,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=o;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("744f"),a("6c7b"),a("7514"),a("20d6"),a("1c4c"),a("6762"),a("cadf"),a("e804"),a("55dd"),a("d04f"),a("c8ce"),a("217b"),a("7f7f"),a("f400"),a("7f25"),a("536b"),a("d9ab"),a("f9ab"),a("32d7"),a("25c9"),a("9f3c"),a("042e"),a("c7c6"),a("f4ff"),a("049f"),a("7872"),a("a69f"),a("0b21"),a("6c1a"),a("c7c62"),a("84b4"),a("c5f6"),a("2e37"),a("fca0"),a("7cdf"),a("ee1d"),a("b1b1"),a("87f3"),a("9278"),a("5df2"),a("04ff"),a("f751"),a("4504"),a("fee7"),a("ffc1"),a("0d6d"),a("9986"),a("8e6e"),a("25db"),a("e4f7"),a("b9a1"),a("64d5"),a("9aea"),a("db97"),a("66c8"),a("57f0"),a("165b"),a("456d"),a("cf6a"),a("fd24"),a("8615"),a("551c"),a("097d"),a("df1b"),a("2397"),a("88ca"),a("ba16"),a("d185"),a("ebde"),a("2d34"),a("f6b3"),a("2251"),a("c698"),a("a19f"),a("9253"),a("9275"),a("3b2b"),a("3846"),a("4917"),a("a481"),a("28a5"),a("386d"),a("6b54"),a("4f7f"),a("8a81"),a("ac4d"),a("8449"),a("9c86"),a("fa83"),a("48c0"),a("a032"),a("aef6"),a("d263"),a("6c37"),a("9ec8"),a("5695"),a("2fdb"),a("d0b0"),a("b54a"),a("f576"),a("ed50"),a("788d"),a("14b9"),a("f386"),a("f559"),a("1448"),a("673e"),a("242a"),a("c66f"),a("b05c"),a("34ef"),a("6aa2"),a("15ac"),a("af56"),a("b6e4"),a("9c29"),a("63d9"),a("4dda"),a("10ad"),a("c02b"),a("4795"),a("130f"),a("ac6a"),a("96cf");var i=a("2b0e"),r=a("ce5b"),s=a.n(r);a("bf40");i["default"].use(s.a,{});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("NavBar"),a("router-view")],1)},l=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-toolbar-side-icon"),a("v-toolbar-title",{staticClass:"white--text"},[e._v("Kappa Insurance")]),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{flat:"",to:"/"}},[e._v("Main")]),a("v-btn",{attrs:{flat:"",to:"/newcustomer"}},[e._v("Add Customer")]),a("v-btn",{attrs:{flat:"",to:"/tasks"}},[e._v("Tasks")]),a("v-btn",{attrs:{flat:"",to:"/logout"}},[e._v("Logout")])],1)],1)},c=[],d=a("2877"),u={},v=Object(d["a"])(u,o,c,!1,null,null,null);v.options.__file="NavBar.vue";var m=v.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-form",[a("v-container",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-layout",{attrs:{"justify-center":"",row:""}},[a("v-flex",{attrs:{xs6:"",md3:""}},[a("v-text-field",{attrs:{rules:e.userNameRules,counter:12,label:"*Username",required:""},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1),a("v-flex",{attrs:{xs6:"",md3:""}},[a("v-text-field",{attrs:{rules:e.passwordRules,counter:12,label:"*password",type:"password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1)],1),a("v-btn",{attrs:{color:"success"},on:{click:function(t){e.login()}}},[e._v("Login")])],1)},p=[],b={data:function(){return{valid:!1,userName:"",password:"",userNameRules:[function(e){return!!e||"Username required"},function(e){return e.length<=18||"Username must be less than 18 characters"}],passwordRules:[function(e){return!!e||"Password required"},function(e){return e.length<=18||":Password must be less than 18 characters"}]}},methods:{login:function(){this.userName,this.password;axios.post("api/submit",this.$data.payload).then(function(e){console.log(e)}).catch(function(e){console.log(e)})}}},h=b,x=Object(d["a"])(h,f,p,!1,null,null,null);x.options.__file="Login.vue";var y=x.exports,_={name:"App",components:{NavBar:m,Login:y}},g=_,k=Object(d["a"])(g,n,l,!1,null,null,null);k.options.__file="App.vue";var w=k.exports,N=a("2f62");i["default"].use(N["a"]);var C=new N["a"].Store({state:{},mutations:{},actions:{}}),I=a("8c4f"),$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-stepper",{attrs:{"non-linear":""},model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}},[a("v-stepper-header",[a("v-stepper-step",{attrs:{editable:"",step:"1"}},[e._v("Drivers")]),a("v-divider"),a("v-stepper-step",{attrs:{editable:"",step:"2"}},[e._v("Vehicles")]),a("v-divider"),a("v-stepper-step",{attrs:{editable:"",step:"3"}},[e._v("Discounts")])],1),a("v-stepper-items",[a("v-stepper-content",{staticClass:"mt-0 pt-1",attrs:{step:"1"}},[a("v-card",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("DriverTabs",{staticClass:"mb-0 pt-0"})],1)],1),a("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.e1=2},submit:e.validate}},[e._v("\n                Continue\n            ")]),a("v-btn",{attrs:{flat:""}},[e._v("Cancel")])],1),a("v-stepper-content",{staticClass:"mt-0 pt-1",attrs:{step:"2"}},[a("v-card",{staticClass:"mb-0"}),a("VehicleTabs",{staticClass:"mb-0 pt-0"}),a("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.e1=1}}},[e._v("\n                Back\n            ")]),a("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.e1=3}}},[e._v("\n                Continue\n            ")])],1),a("v-stepper-content",{staticClass:"mt-0 pt-1",attrs:{step:"3"}},[a("v-card",{staticClass:"mb-0"}),a("Discounts",{staticClass:"mb-0 pt-0"}),a("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.e1=2}}},[e._v("\n                Back\n            ")]),a("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.submit()}}},[e._v("\n                Submit\n            ")]),a("v-btn",{attrs:{flat:""}},[e._v("Cancel")])],1)],1)],1)},D=[],S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-tabs",{attrs:{slot:"extension",color:"blue"},slot:"extension",model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("v-tabs-slider",{attrs:{color:"yellow"}}),a("v-tab",[e._v(" Primary ")]),e._l(e.drivers,function(t){return a("v-tab",{key:t},[e._v("\n            "+e._s(t)+"\n        ")])}),a("v-btn",{on:{click:e.addDriver}},[e._v(" Add Driver ")]),a("v-btn",{on:{click:e.remDriver}},[e._v(" Remove Driver ")])],2),a("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("v-tab-item",[a("v-card",{attrs:{flat:""}},[a("DriverPrimary",{attrs:{title:"Primary Driver"}})],1)],1),e._l(e.drivers,function(e){return a("v-tab-item",{key:e},[a("v-card",{attrs:{flat:""}},[a("DriverSecondary",{attrs:{title:e}})],1)],1)})],2)],1)},j=[],O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-form",[a("v-layout",{attrs:{row:"","justify-center":""}},[a("h2",[e._v(" "+e._s(e.title)+" ")])]),a("Names",{on:{details:e.makeDriver}}),a("Contact",{on:{details:e.makeDriver}}),a("Details",{attrs:{driverRelation:"Self"},on:{details:e.makeDriver}}),a("Address",{on:{details:e.makeDriver}}),a("Accidents",{on:{details:e.makeDriver}})],1)},E=[],T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-layout",{attrs:{"justify-center":"",row:""}},[a("v-flex",{attrs:{xs6:"",md3:""}},[a("v-text-field",{attrs:{rules:e.firstNameRules,counter:12,label:"*First Name",required:""},model:{value:e.firstName,callback:function(t){e.firstName=t},expression:"firstName"}})],1),a("v-flex",{attrs:{xs6:"",md3:""}},[a("v-text-field",{attrs:{rules:e.lastNameRules,counter:12,label:"*Last Name",required:""},model:{value:e.lastName,callback:function(t){e.lastName=t},expression:"lastName"}})],1)],1)],1)},M=[],V={data:function(){return{valid:!0,firstName:"",lastName:"",firstNameRules:[function(e){return!!e||"First Name required"},function(e){return e.length<=12||"First Name must be less than 12 characters"}],lastNameRules:[function(e){return!!e||"Last Name required"},function(e){return e.length<=12||":Last Name must be less than 12 characters"}]}},created:function(){var e=this;Event.$on("get-drivers",function(){var t={firstName:e.$data.firstName,lastName:e.$data.lastName};e.$emit("details",t)})}},P=V,A=Object(d["a"])(P,T,M,!1,null,null,null);A.options.__file="Names.vue";var R=A.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-layout",{attrs:{"justify-center":"",row:""}},[a("v-flex",{attrs:{xs6:"",md3:""}},[a("v-text-field",{attrs:{mask:"phone",rules:e.phoneRules,counter:10,label:"*Cell Phone","validate-on-blur":"",required:""},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),a("v-flex",{attrs:{xs6:"",md3:""}},[a("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail","validate-on-blur":"",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1)],1)},q=[],z=a("a322"),F={data:function(){var e;return e={valid:!0,phone:"",email:"",phoneRules:[function(e){return!!e||"Cell Phone is requiered"},function(e){return 10==e.length||"Phone must be 10 characters"}]},Object(z["a"])(e,"email",""),Object(z["a"])(e,"emailRules",[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+/.test(e)||"E-mail must be valid"}]),e},created:function(){var e=this;Event.$on("get-drivers",function(){var t={phone:e.$data.phone,email:e.$data.email};e.$emit("details",t)})}},B=F,W=Object(d["a"])(B,L,q,!1,null,null,null);W.options.__file="Contact.vue";var J=W.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-layout",{attrs:{"justify-center":"",row:""}},[a("v-flex",{attrs:{xs6:"",md3:""}},[a("v-radio-group",{attrs:{mandatory:!0},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}},[a("v-radio",{attrs:{label:"Male",value:"Male",color:"primary"}}),a("v-radio",{attrs:{label:"Female",value:"Female",color:"primary"}})],1)],1),a("v-flex",{attrs:{xs6:"",md3:""}},[a("v-radio-group",{attrs:{mandatory:!0,disabled:"Spouse"==e.relation},model:{value:e.marritalStatus,callback:function(t){e.marritalStatus=t},expression:"marritalStatus"}},[a("v-radio",{attrs:{label:"Single",value:"Single",color:"primary"}}),a("v-radio",{attrs:{label:"Married/ Common Law",value:"Married",color:"primary"},on:{change:e.isMarried}})],1)],1)],1),a("v-layout",{attrs:{"justify-center":"",row:""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-text-field",{attrs:{label:"Occupation"},model:{value:e.occupation,callback:function(t){e.occupation=t},expression:"occupation"}})],1)],1),a("v-layout",{attrs:{"justify-center":"",row:""}},[a("v-flex",{attrs:{xs6:"",md3:""}},[a("v-menu",{ref:"date",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.dob,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},on:{"update:returnValue":function(t){e.dob=t}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},[a("v-text-field",{attrs:{slot:"activator",label:"Date of Birth","prepend-icon":"event",readonly:"",requiered:""},slot:"activator",model:{value:e.dob,callback:function(t){e.dob=t},expression:"dob"}}),a("v-date-picker",{on:{input:function(t){e.$refs.date.save(e.dob)}},model:{value:e.dob,callback:function(t){e.dob=t},expression:"dob"}})],1)],1),a("v-flex",{attrs:{xs6:"",md3:""}},[a("v-select",{attrs:{items:e.relations,standard:"",label:"Relation to Primary Driver",disabled:"Self"==e.relation||"Spouse"==e.relation},model:{value:e.relation,callback:function(t){e.relation=t},expression:"relation"}})],1)],1),a("v-layout",{attrs:{"justify-center":"",row:""}},[a("v-flex",{attrs:{xs6:"",md3:""}},[a("v-select",{attrs:{items:e.IdTypes,standard:"",label:"Form of ID"},model:{value:e.idType,callback:function(t){e.idType=t},expression:"idType"}})],1),a("v-flex",{attrs:{xs6:"",md3:""}},[a("v-text-field",{attrs:{counter:15,label:"ID Number"},model:{value:e.idNumber,callback:function(t){e.idNumber=t},expression:"idNumber"}})],1)],1)],1)},Y=[],G={data:function(){return{valid:!0,gender:"",marritalStatus:"",occupation:"",date:!1,dob:null,relation:"",idType:"Texas DL",idNumber:"",IdTypes:["Texas DL","Texas ID","Out of State","Passport","Matricula","International DL","No ID"],relations:[{text:"Sibling",value:"Sibling"},{text:"Parent",value:"Parent"},{text:"Child",value:"Child"},{text:"Other",value:"Other"},{text:"Self",value:"Self",disabled:!0},{text:"Spouse",value:"Spouse",disabled:!0}]}},props:["driverRelation"],methods:{isMarried:function(){"Self"==this.relation&&Event.$emit("add-spouse")}},created:function(){var e=this;this.relation=this.driverRelation,Event.$on("get-drivers",function(){var t={gender:e.$data.gender,marritalStatus:e.$data.marritalStatus,occupation:e.$data.occupation,dob:e.$data.dob,relation:e.$data.relation,idType:e.$data.idType,idNumber:e.$data.idNumber};e.$emit("details",t)})},beforeMount:function(){"Spouse"==this.relation&&(this.marritalStatus="Married")}},H=G,K=Object(d["a"])(H,U,Y,!1,null,null,null);K.options.__file="Details.vue";var Z=K.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-layout",{attrs:{"justify-center":"",row:""}},[a("v-flex",{attrs:{xs6:"",md3:""}},[a("v-text-field",{attrs:{label:"Street Address",requiered:""},model:{value:e.street,callback:function(t){e.street=t},expression:"street"}})],1),a("v-flex",{attrs:{xs6:"",md3:""}},[a("v-text-field",{attrs:{label:"City",requiered:""},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}})],1)],1),a("v-layout",{attrs:{"justify-center":"",row:""}},[a("v-flex",{attrs:{xs6:"",md3:""}},[a("v-select",{attrs:{items:e.states,auto:"","hide-details":"",label:"State","single-line":""},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}})],1),a("v-flex",{attrs:{xs6:"",md3:""}},[a("v-text-field",{attrs:{label:"Zip Code",requiered:""},model:{value:e.zipCode,callback:function(t){e.zipCode=e._n(t)},expression:"zipCode"}})],1)],1)],1)},X=[],ee={data:function(){return{valid:!0,street:"",city:"Houston",state:"Texas",zipCode:null,states:["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]}},created:function(){var e=this;Event.$on("get-drivers",function(){var t={street:e.$data.street,city:e.$data.city,state:e.$data.state,zip:e.$data.zipCode};e.$emit("details",t)})}},te=ee,ae=Object(d["a"])(te,Q,X,!1,null,null,null);ae.options.__file="Address.vue";var ie=ae.exports,re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-layout",{attrs:{row:"","justify-center":""}},[a("h2",[e._v(" Tickets or Accidents in the past 5 years?")])]),a("v-layout",{attrs:{row:"","justify-center":""}},[a("h3",[e._v("Please be honest, your driving record will be verified.")])]),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-flex",{attrs:{"offset-md1":"",xs6:"",md4:""}},[a("div",[a("v-btn",{attrs:{flat:""},on:{click:function(t){e.subtract("ticketCount")}}},[a("v-icon",{attrs:{small:""}},[e._v("remove")])],1),e._v("\n                Tickets: "+e._s(e.ticketCount)+"\n                "),a("v-btn",{attrs:{flat:""},on:{click:function(t){e.sum("ticketCount")}}},[a("v-icon",{attrs:{small:"",right:""}},[e._v("add")])],1)],1)]),a("v-flex",{attrs:{xs6:"",md4:""}},[a("div",[a("v-btn",{attrs:{flat:""},on:{click:function(t){e.subtract("accidentCount")}}},[a("v-icon",{attrs:{small:""}},[e._v("remove")])],1),e._v("\n                    Accidents: "+e._s(e.accidentCount)+"\n                "),a("v-btn",{attrs:{flat:""},on:{click:function(t){e.sum("accidentCount")}}},[a("v-icon",{attrs:{small:"",right:""}},[e._v("add")])],1)],1)])],1)],1)},se=[],ne={data:function(){return{valid:!0,ticketCount:0,accidentCount:0}},methods:{sum:function(e){console.log(e+" "+this[e]),e=this[e]<5?this[e]++:this[e]},subtract:function(e){console.log(e+" "+this[e]),e=this[e]>0?this[e]--:this[e]}},created:function(){var e=this;Event.$on("get-drivers",function(){var t={tickets:e.$data.ticketCount,accidents:e.$data.accidentCount};e.$emit("details",t)})}},le=ne,oe=Object(d["a"])(le,re,se,!1,null,null,null);oe.options.__file="Accidents.vue";var ce=oe.exports,de={components:{Names:R,Contact:J,Details:Z,Address:ie,Accidents:ce},data:function(){return{driver:{}}},props:["title"],methods:{makeDriver:function(e){this.driver=Object.assign(this.driver,e)}},created:function(){var e=this;Event.$on("get-drivers",function(){Event.$emit("driver",e.driver)})}},ue=de,ve=Object(d["a"])(ue,O,E,!1,null,null,null);ve.options.__file="DriverPrimary.vue";var me=ve.exports,fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-form",[a("v-layout",{attrs:{row:"","justify-center":""}},[a("h2",[e._v(" "+e._s(e.title)+" ")])]),a("Names",{on:{details:e.makeDriver}}),a("Details",{attrs:{driverRelation:e.title},on:{details:e.makeDriver}}),a("Accidents",{on:{details:e.makeDriver}})],1)},pe=[],be={components:{Names:R,Details:Z,Accidents:ce},data:function(){return{driver:{}}},props:["title"],methods:{makeDriver:function(e){this.driver=Object.assign(this.driver,e)}},created:function(){var e=this;Event.$on("get-drivers",function(){Event.$emit("driver",e.driver)})}},he=be,xe=Object(d["a"])(he,fe,pe,!1,null,null,null);xe.options.__file="DriverSecondary.vue";var ye=xe.exports,_e={name:"Tabs",components:{DriverPrimary:me,DriverSecondary:ye},data:function(){return{tab:null,driverCnt:1,drivers:[]}},methods:{addDriver:function(){this.driverCnt++,this.drivers.push("Driver "+this.driverCnt);var e=parseInt(this.tab);this.tab=e<this.driverCnt?e+1:0},remDriver:function(){this.driverCnt>1&&this.driverCnt--,this.drivers.pop();var e=parseInt(this.tab);this.tab=e>1?e-1:0},addSpouse:function(){this.drivers.includes("Spouse")||0!=this.tab||(this.driverCnt++,this.drivers.splice(0,0,"Spouse"))}},created:function(){var e=this;Event.$on("add-spouse",function(){e.addSpouse()})}},ge=_e,ke=Object(d["a"])(ge,S,j,!1,null,null,null);ke.options.__file="DriverTabs.vue";var we=ke.exports,Ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-tabs",{attrs:{slot:"extension",color:"blue"},slot:"extension",model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("v-tabs-slider",{attrs:{color:"yellow"}}),a("v-tab",[e._v(" Vehicle 1 ")]),e._l(e.vehicles,function(t){return a("v-tab",{key:t},[e._v("\n            "+e._s(t)+"\n        ")])}),a("v-btn",{on:{click:e.addVehicle}},[e._v(" Add Vehicle ")]),a("v-btn",{on:{click:e.remVehicle}},[e._v(" Remove Vehicle ")])],2),a("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("v-tab-item",[a("v-card",{attrs:{flat:""}},[a("Vehicle",{attrs:{title:"Vehicle 1"}})],1)],1),e._l(e.vehicles,function(e){return a("v-tab-item",{key:e},[a("v-card",{attrs:{flat:""}},[a("Vehicle",{attrs:{title:e}})],1)],1)})],2)],1)},Ce=[],Ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-layout",{attrs:{row:"","justify-center":""}},[a("h2",[e._v(" "+e._s(e.title))])]),a("v-layout",{attrs:{row:"","justify-center":""}},[a("h3",[e._v("What vehicle are we insureing today?")])]),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-flex",{attrs:{"offset-md2":"",xs8:"",md2:""}},[a("v-text-field",{attrs:{rules:e.vinRules,counter:17,label:"*VIN",required:"","validate-on-blur":""},model:{value:e.vin,callback:function(t){e.vin=t},expression:"vin"}})],1),a("v-flex",{attrs:{xs4:"",md3:""}},[a("div",[a("v-btn",{attrs:{color:"primary"},on:{click:e.verifyVin}},[e._v(" VERIFY VIN ")])],1)])],1),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-flex",{attrs:{xs4:"",md1:""}},[a("v-text-field",{attrs:{counter:4,label:"Year"},model:{value:e.year,callback:function(t){e.year=t},expression:"year"}})],1),a("v-flex",{attrs:{xs4:"",md1:""}},[a("v-text-field",{attrs:{label:"Make"},model:{value:e.make,callback:function(t){e.make=t},expression:"make"}})],1),a("v-flex",{attrs:{xs4:"",md1:""}},[a("v-text-field",{attrs:{label:"Model"},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)],1),a("v-layout",{attrs:{row:"","justify-center":""}},[a("h2",[e._v(" Coverage")])]),a("v-layout",{attrs:{row:"","justify-center":""}},[a("h3",[e._v("What coverage would you like?")])]),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-flex",{attrs:{xs8:"",md3:""}},[a("v-select",{attrs:{items:e.coverages,standard:"",label:"Desired coverage:"},model:{value:e.coverage,callback:function(t){e.coverage=t},expression:"coverage"}})],1),a("v-flex",{attrs:{xs4:"",md2:""}},["full"===this.coverage?a("v-select",{attrs:{items:e.deductibles,standard:"",label:"Deductible:"},model:{value:e.deductible,callback:function(t){e.deductible=t},expression:"deductible"}}):e._e()],1)],1),a("v-layout",{attrs:{row:"","justify-center":""}},[a("h2",[e._v(" Additional Coverage:")])]),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-flex",{attrs:{"offset-md2":"",xs6:"",md3:""}},["full"===this.coverage?a("v-checkbox",{attrs:{label:"Personal Injury Protection (PIP)",value:"pip",color:"primary"},model:{value:e.supplemental,callback:function(t){e.supplemental=t},expression:"supplemental"}}):e._e(),a("v-checkbox",{attrs:{label:"Uninsured Motorist",value:"um",color:"primary"},model:{value:e.supplemental,callback:function(t){e.supplemental=t},expression:"supplemental"}})],1),a("v-flex",{attrs:{xs6:"",md3:""}},["full"===this.coverage?a("v-checkbox",{attrs:{label:"Rental",value:"rental",color:"primary"},model:{value:e.supplemental,callback:function(t){e.supplemental=t},expression:"supplemental"}}):e._e(),"full"===this.coverage?a("v-checkbox",{attrs:{label:"Towing",value:"towing",color:"primary"},model:{value:e.supplemental,callback:function(t){e.supplemental=t},expression:"supplemental"}}):e._e()],1)],1)],1)},$e=[],De={data:function(){return{valid:!1,vin:"",year:null,make:"",model:"",vinRules:[function(e){return!!e||"VIN required"},function(e){return 17==e.length||"VIN must be exactly 17 characters"}],coverages:[{text:"liability only",value:"liability"},{text:"Comprehensive/ Collision (Full Coverage)",value:"full"}],coverage:"",deductibles:[{text:"None",value:"0",disabled:!0},{text:"$500.00",value:"500.00"},{text:"$1,000.00",value:"1000.00"}],deductible:0,supplemental:[]}},props:["title"],methods:{verifyVin:function(){var e=this,t=this.vin;axios.post("https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVINValuesBatch/","data=".concat(t,"&format=json"),{headers:{"content-type":"application/x-www-form-urlencoded"}}).then(function(t){var a=t.data.Results[0];console.log(a),e.year=a.ModelYear,e.make=a.Make,e.model=a.Model}).catch(function(e){console.log(e)})}},created:function(){var e=this;Event.$on("get-drivers",function(){var t={vin:e.$data.vin,year:e.$data.year,make:e.$data.make,model:e.$data.model,coverage:e.$data.coverage,deductible:e.$data.deductible,supplemental:e.$data.supplemental};Event.$emit("vehicle",t)})}},Se=De,je=Object(d["a"])(Se,Ie,$e,!1,null,null,null);je.options.__file="Vehicle.vue";var Oe=je.exports,Ee={name:"Tabs",components:{Vehicle:Oe},data:function(){return{tab:null,vehicleCnt:1,vehicles:[]}},methods:{addVehicle:function(){this.vehicleCnt++,this.vehicles.push("Vehicle "+this.vehicleCnt);var e=parseInt(this.tab);this.tab=e<this.vehicleCnt?e+1:0},remVehicle:function(){this.vehicleCnt>1&&this.vehicleCnt--,this.vehicles.pop();var e=parseInt(this.tab);this.tab=e>1?e-1:0}}},Te=Ee,Me=Object(d["a"])(Te,Ne,Ce,!1,null,null,null);Me.options.__file="VehicleTabs.vue";var Ve=Me.exports,Pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-layout",{attrs:{row:"","justify-center":""}},[a("h2",[e._v(" Discounts")])]),a("v-layout",{attrs:{row:"","justify-center":""}},[a("h3",[e._v("Lets see what discounts you qualify for")])]),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-flex",{attrs:{xs6:""}},[a("v-switch",{attrs:{label:"Are you a home owner: "+e.homeOwner.toString(),color:"primary"},model:{value:e.homeOwner,callback:function(t){e.homeOwner=t},expression:"homeOwner"}}),a("v-switch",{attrs:{label:"Are you currently insured (personal/commercial auto): "+e.pop.toString(),color:"primary"},model:{value:e.pop,callback:function(t){e.pop=t},expression:"pop"}})],1)],1),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-flex",{attrs:{xs6:"",md3:""}},[a("v-select",{attrs:{items:e.popLengths,standard:"",label:"Length of coverage without lapse:"},model:{value:e.popLength,callback:function(t){e.popLength=t},expression:"popLength"}})],1),a("v-flex",{attrs:{xs6:"",md3:""}},[a("v-text-field",{attrs:{label:"With who (Geico, Progressive, All State, etc...)"},model:{value:e.popCarrier,callback:function(t){e.popCarrier=t},expression:"popCarrier"}})],1)],1)],1)},Ae=[],Re={data:function(){return{valid:!0,homeOwner:!1,pop:!1,popLengths:["Less than 6 months","6 to 11 months","12 months or longer"],popLength:"",popCarrier:""}},created:function(){var e=this;Event.$on("driver",function(){var t={homeOwner:e.$data.homeOwner,pop:e.$data.pop,popLength:e.$data.popLength,popCarrier:e.$data.popCarrier};Event.$emit("discounts",t)})}},Le=Re,qe=Object(d["a"])(Le,Pe,Ae,!1,null,null,null);qe.options.__file="Discounts.vue";var ze=qe.exports,Fe={components:{DriverTabs:we,VehicleTabs:Ve,Discounts:ze},data:function(){return{valid:!0,e1:0,payload:{}}},methods:{validate:function(){this.$refs.form.validate()&&alert("Valid!")},submit:function(){this.payload={drivers:[],vehicles:[]},Event.$emit("get-drivers"),console.log(this.payload),axios.post("api/submit",this.$data.payload).then(function(e){console.log(e)}).catch(function(e){console.log(e)})}},created:function(){var e=this;Event.$on("driver",function(t){e.payload.drivers.push(t)}),Event.$on("vehicle",function(t){e.payload.vehicles.push(t)}),Event.$on("discounts",function(t){e.payload.drivers.forEach(function(e){"Self"===e.relation&&(e=Object.assign(e,t))})})}},Be=Fe,We=Object(d["a"])(Be,$,D,!1,null,null,null);We.options.__file="Stepper.vue";var Je=We.exports,Ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[e._v("Customers")]),a("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-btn",{staticClass:"mb-2",attrs:{slot:"activator",color:"primary",dark:""},slot:"activator"},[e._v("New Customer")]),a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"First name"},model:{value:e.editedItem.firstName,callback:function(t){e.$set(e.editedItem,"firstName",t)},expression:"editedItem.firstName"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"Last Name"},model:{value:e.editedItem.lastName,callback:function(t){e.$set(e.editedItem,"lastName",t)},expression:"editedItem.lastName"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"Phone"},model:{value:e.editedItem.phone,callback:function(t){e.$set(e.editedItem,"phone",t)},expression:"editedItem.phone"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"carrier"},model:{value:e.editedItem.carrier,callback:function(t){e.$set(e.editedItem,"carrier",t)},expression:"editedItem.carrier"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"policyNo"},model:{value:e.editedItem.policyNo,callback:function(t){e.$set(e.editedItem,"policyNo",t)},expression:"editedItem.policyNo"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"inceptionDate"},model:{value:e.editedItem.inceptionDate,callback:function(t){e.$set(e.editedItem,"inceptionDate",t)},expression:"editedItem.inceptionDate"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"payDay"},model:{value:e.editedItem.payDay,callback:function(t){e.$set(e.editedItem,"payDay",t)},expression:"editedItem.payDay"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"policyStatus"},model:{value:e.editedItem.policyStatus,callback:function(t){e.$set(e.editedItem,"policyStatus",t)},expression:"editedItem.policyStatus"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"pendingItems"},model:{value:e.editedItem.pendingItems,callback:function(t){e.$set(e.editedItem,"pendingItems",t)},expression:"editedItem.pendingItems"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"notes"},model:{value:e.editedItem.notes,callback:function(t){e.$set(e.editedItem,"notes",t)},expression:"editedItem.notes"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"agent"},model:{value:e.editedItem.agent,callback:function(t){e.$set(e.editedItem,"agent",t)},expression:"editedItem.agent"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(t){return e.close(t)}}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(t){return e.save(t)}}},[e._v("Save")])],1)],1)],1)],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.customers,"hide-actions":""},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",[e._v(e._s(t.item.firstName))]),a("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.lastName))]),a("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.phone))]),a("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.carrier))]),a("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.policyNo))]),a("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.inceptionDate))]),a("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.payDay))]),a("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.policyStatus))]),a("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.pendingItems))]),a("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.notes))]),a("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.agent))]),a("td",{staticClass:"justify-center layout px-0"},[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){e.editItem(t.item)}}},[e._v("\n                    edit\n                ")]),a("v-icon",{attrs:{small:""},on:{click:function(a){e.deleteItem(t.item)}}},[e._v("\n                    delete\n                ")])],1)]}}])},[a("template",{slot:"no-data"},[a("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v("Reset")])],1)],2)],1)},Ye=[],Ge=a("bc3a"),He=a.n(Ge),Ke={data:function(){return{dialog:!1,headers:[{text:"First Name",align:"left",sortable:!1,value:"firstNamelastName"},{text:"last Name",value:"lastName"},{text:"phone",value:"phone"},{text:"carrier",value:"carrier"},{text:"policyNo",value:"policyNo"},{text:"inceptionDate",value:"inceptionDate"},{text:"payDay",value:"payDay"},{text:"policyStatus",value:"policyStatus"},{text:"pendingItems",value:"pendingItems"},{text:"notes",value:"notes"},{text:"agent",value:"agent"},{text:"Actions",value:"firstName",sortable:!1}],customerData:[],customers:[],editedIndex:-1,editedItem:{firstName:"",lastName:"",phone:0,carrier:"",policyNo:"",inceptionDate:"",payDay:"",policyStatus:"",pendingItems:[],notes:[],agent:""},defaultItem:{firstName:"",lastName:"",phone:0,carrier:"",policyNo:"",inceptionDate:"",payDay:"",policyStatus:"",pendingItems:[],notes:[],agent:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Customer":"Edit Customer"}},watch:{dialog:function(e){e||this.close()}},methods:{initialize:function(){var e=this;this.customerData.map(function(t){"Self"==t.relation&&e.customers.push({firstName:t.customer.first_name,lastName:t.customer.last_name,phone:JSON.parse(t.customer.contact).phone,carrier:t.policy.carrier,policyNo:t.policy.policy_id,inceptionDate:t.policy.createdAt,payDay:"15",policyStatus:t.policy.status,pendingItems:"",notes:"",agent:t.policy.agent})})},editItem:function(e){this.editedIndex=this.customers.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){var t=this.customers.indexOf(e);confirm("Are you sure you want to delete this customer?")&&this.customers.splice(t,1)},close:function(){var e=this;this.dialog=!1,setTimeout(function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1},300)},save:function(){this.editedIndex>-1?Object.assign(this.customers[this.editedIndex],this.editedItem):this.customers.push(this.editedItem),this.close()},getCustomers:function(){}},created:function(){var e=this;He.a.get("api/customerlist").then(function(t){var a=JSON.parse(t.data[0]);JSON.parse(t.data[1]);e.customerData=a,console.log(a)}).catch(function(e){console.log(e)}),this.initialize()},mounted:function(){}},Ze=Ke,Qe=Object(d["a"])(Ze,Ue,Ye,!1,null,null,null);Qe.options.__file="CustomerTable.vue";var Xe=Qe.exports;i["default"].use(I["a"]);var et=[{path:"/",component:Xe},{path:"/newcustomer",component:Je}],tt=new I["a"]({routes:et});i["default"].config.productionTip=!1,window.Event=new i["default"],window.axios=He.a,new i["default"]({store:C,router:tt,render:function(e){return e(w)}}).$mount("#app")}});
//# sourceMappingURL=app.6ed64b98.js.map