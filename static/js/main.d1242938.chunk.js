(this.webpackJsonpmywebsite=this.webpackJsonpmywebsite||[]).push([[0],{187:function(e,t,a){e.exports=a(288)},192:function(e,t,a){},288:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),o=a.n(l),c=(a(192),a(193),a(76)),i=a(78),s=a(15),m=a(8),u=a(77),d=a.n(u),p=function(e){var t=r.a.createElement(s.a,{icon:m.b,size:"lg"});return r.a.createElement("nav",{className:"nav"},r.a.createElement("img",{className:"my-photo",src:d.a}),r.a.createElement(i.a,{className:"icon",style:{position:"absolute",left:"250px",top:"50vh"}},t),r.a.createElement("div",{className:"nav-content"},r.a.createElement("ul",{className:"nav-items"},e.items.map((function(e){return r.a.createElement("li",{className:"nav-item",key:e.name},r.a.createElement(c.Link,{activeClass:"active",to:e.name,spy:!1,smooth:!0,offset:0,duration:500},e.label))})))))},v=function(e){e.title;var t=e.dark,a=e.id,n=e.content;return r.a.createElement("div",{className:"section".concat(t?" section-dark":""," section-").concat(a)},r.a.createElement("div",{className:"section-content section-content-".concat(a),id:a},n))},E=a(82),h=function(){return r.a.createElement("div",{className:"home"},r.a.createElement("h1",null,"I'm Karolis \u0160arskus"),"Junior"," ",r.a.createElement(E.a,{className:"typical",steps:["Front-End developer",1e3,"Back-End developer",1e3,"Full-Stack developer",1e3],loop:1/0,wrapper:"b"}))},b=function(){return r.a.createElement("div",{className:"basic-info"},r.a.createElement("h3",{className:"section-item-header"},"Basic Information"),r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Name"),r.a.createElement("td",null,"Karolis \u0160arskus")),r.a.createElement("tr",null,r.a.createElement("td",null,"Email"),r.a.createElement("td",null,"k.krivicius@gmail.com")),r.a.createElement("tr",null,r.a.createElement("td",null,"Phone"),r.a.createElement("td",null,"+37060907803")),r.a.createElement("tr",null,r.a.createElement("td",null,"Date of birth"),r.a.createElement("td",null,"18 Sep 1997")),r.a.createElement("tr",null,r.a.createElement("td",null,"Address"),r.a.createElement("td",null,"Pavilnio sod\u0173 6-oji g. 10")),r.a.createElement("tr",null,r.a.createElement("td",null,"Nationality"),r.a.createElement("td",null,"Lithuanian")))))},f=function(e){return r.a.createElement("div",null,r.a.createElement("h3",{className:"section-item-header"},"Professional profile"),r.a.createElement("div",{className:"content"},r.a.createElement("p",null,e.text),r.a.createElement("button",{className:"btn btn-dark btn-lg",onClick:function(){alert("Sorry, not implemented yet.")}},"Download"),r.a.createElement("button",{className:"btn btn-dark btn-lg",onClick:function(){return window.scrollTo({top:9999,behavior:"smooth"})}},"Hire me")))},y=function(){var e=[{label:"Sports",icon:m.h},{label:"Board games",icon:m.c},{label:"Travel",icon:m.g},{label:"Reading",icon:m.a},{label:"Video games",icon:m.e}];return r.a.createElement("div",null,r.a.createElement("h3",{className:"section-item-header"},"My interests"),r.a.createElement("div",{className:"icons"},e.map((function(e){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("h5",null,e.label),r.a.createElement(s.a,{icon:e.icon,size:"2x",style:{marginLeft:"0.5em"}}))}))))},g=a(21);function k(e,t){var a;switch(t){case"left":a="translate(-".concat(4,"%, 0%)");break;case"right":a="translate(".concat(4,"%, 0%)");break;case"bottom":a="translate(0%, ".concat(4,"%)");break;default:return"Cannot assign value to transform variable"}return{opacity:e?1:0,transform:e?"translate(0%, 0%)":a,transition:"opacity 250ms ease-in, transform 400ms ease-in"}}var N={threshold:.75,rootMargin:"0px 0px -50px 0px",triggerOnce:!0};function w(e,t,a){return r.a.createElement(g.a,N,(function(n){var l=n.inView,o=n.ref;n.entry;return r.a.createElement("div",{className:a,ref:o,style:k(l,t)},e)}))}var x=function(){return r.a.createElement("div",{className:"about"},r.a.createElement("h2",{className:"section-header"},"About me!"),r.a.createElement("div",{className:"content"},w(r.a.createElement(b,null),"left","basic-info"),w(r.a.createElement(f,{text:"Looking for a junior Front-End/Back-End/Full-Stack job or internship position."}),"right","cv"),w(r.a.createElement(y,null),"bottom","interests")))},C=a(52),P=a(290),A=function(e){var t=e.skills;return r.a.createElement(P.a,{bordered:!0,responsive:"md",className:"my-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Level"),r.a.createElement("th",null,"Type"))),r.a.createElement("tbody",{className:"table-body"},t.map((function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("td",{className:"table-name"},e.name),r.a.createElement("td",{className:"table-level"},e.level),r.a.createElement("td",{className:"table-type"},e.type))}))))},S=a(53),D=function(e){var t=e.totalCount,a=e.currentPage,n=e.pageSize,l=e.onPageChange,o=[];if(t>n)for(var c=function(e){o.push(r.a.createElement(S.a.Item,{className:"bg-dark",key:e,active:e===a,onClick:function(){l(e)}},e))},i=1;i<Math.ceil(t/n)+1;i++)c(i);return r.a.createElement(S.a,{className:""},o)},I=a(80),O=a.n(I);var j=[{name:"JavaScript",level:"Advanced",type:"Development"},{name:"C++",level:"Intermediate",type:"Development"},{name:"C",level:"Intermediate",type:"Development"},{name:"VBA",level:"Intermediate",type:"Development"},{name:"HTML",level:"Advanced",type:"Development"},{name:"CSS/SASS",level:"Intermediate",type:"Development"},{name:"React",level:"Advanced",type:"Development"},{name:"Node.js",level:"Intermediate",type:"Development"},{name:"MongoDB",level:"Intermediate",type:"Development"},{name:"Lithuanian",level:"Professional",type:"Personal"},{name:"English",level:"Advanced",type:"Personal"},{name:"Driving license B category",level:"-",type:"Personal"},{name:"Driving license A1 category",level:"-",type:"Personal"},{name:"Autoacad",level:"Advanced",type:"Other"},{name:"Inventor",level:"Advanced",type:"Other"},{name:"Fusion",level:"Advanced",type:"Other"},{name:"WoodWop",level:"Professional",type:"Other"},{name:"Inventor CAM",level:"Advanced",type:"Other"},{name:"Aspire",level:"Advanced",type:"Other"},{name:"Cura",level:"Advanced",type:"Other"},{name:"Word",level:"Advanced",type:"Other"},{name:"Excel",level:"Advanced",type:"Other"},{name:"PowerPoint",level:"Advanced",type:"Other"}];var J=[{name:"Development",_id:1},{name:"Personal",_id:2},{name:"Other",_id:3}];function B(){return J}var M=function(e){var t=e.currentType,a=e.onTypeChange,n=e.onPageChange,l=e.types,o=e.textProperty,c=e.valueProperty;return r.a.createElement("ul",{className:"list-group"},l.map((function(e){return r.a.createElement("button",{onClick:function(){n(1),a(e)},className:e===t?" list-group-item list-group-item-dark list-group-item-action active":" list-group-item list-group-item list-group-item-action",key:e[c]},e[o])})))};M.defaultProps={textProperty:"name",valueProperty:"_id"};var L=M,V=function(){var e=Object(n.useState)(1),t=Object(C.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(B()[0]),c=Object(C.a)(o,2),i=c[0],s=c[1],m=function(e,t){var a=j,n=e,r=a,l=(r=r.filter((function(e){return e.type===t.name}))).length;return r=function(e,t,a){var n=(t-1)*a;return O()(e).slice(n).take(a).value()}(r,n,7),{totalCount:l,skills:r}}(a,i),u=m.totalCount,d=m.skills;return r.a.createElement("div",{className:"skills"},r.a.createElement("h2",{className:"section-header"},"Skills."),w(r.a.createElement(L,{currentType:i,onTypeChange:s,onPageChange:l,types:B()}),"left","test"),w(r.a.createElement("div",null,r.a.createElement(A,{skills:d}),r.a.createElement(D,{currentPage:a,pageSize:7,totalCount:u,onPageChange:l})),"right","test"))};var T=function(e){var t=e.position,a=e.company,n=e.workDuration,l=e.text,o=e.bubblePosition;return r.a.createElement("div",{className:"experience-bubble speech-bubble-".concat(o)},r.a.createElement("h5",null,t),r.a.createElement("h6",null,a),r.a.createElement("p",null,n),r.a.createElement("p",null,l))},W=[{position:"Furniture maker",company:'UAB "MetaWood"',workDuration:"Jun 2017 - Sep 2017",text:"Making furniture. First Job after high school."},{position:"Parcel distribution operator",company:'UAB "VENIPAK"',workDuration:"Sep 2017 - Jan 2017",text:"Nothing special, moving boxes from one place to another."},{position:"Work on the farm",company:"UK Boston farmers :D",workDuration:"May 2018 - Feb 2018",text:"Worked for farmers in United Kingdom, picked flowers, planted beetroots.\n    Went there to get experience in another country and for money."},{position:"Mechanism operator",company:'AB "Vilniaus baldai"',workDuration:"June 2018 - Dec 2018",text:"I was responsible for packaging. Had to coordinate 4-5 people team.\n    Quit because for lack of perspectives"},{position:"Passenger carrier (taxi driver)",company:"Individual activity",workDuration:"Jan 2019 - May 2019",text:"Started to work as passenger carrier because of flexible work hours\n    (easier to coordiante with studies). Quit because I got a better proposal."},{position:"Cnc machine programmer",company:'UAB "MetaWood"',workDuration:"June 2019 - May 2020",text:"I wrote programs for cnc machines, so operators could make wooden details faster.\n    Learned a lot there, started programming in JS in this company, \n    because I wanted and I did wrote a postprocessor to convert Inventor CAM to G code.\n    Quit because of COVID-19 pandeminc, there is hard time for this company, could get recommendation."},{position:"Production master",company:'UAB "LogoEra"',workDuration:"June 2020 - July 2020",text:"Responsible for production. Quit because of lack perspectives and I want to work in a company\n    which allows my brain to work and gives some challenges"}];var F=function(){var e=W.reverse(),t="left";return r.a.createElement("div",{className:"experience"},r.a.createElement("h2",{className:"section-header"},"Experience."),e.map((function(e){var a=t;return t="left"===t?"right":"left",r.a.createElement(g.a,Object.assign({key:e.position},N),(function(t){var n=t.inView,l=t.ref;t.entry;return r.a.createElement("div",{ref:l,style:k(n,a)},r.a.createElement(T,{position:e.position,company:e.company,workDuration:e.workDuration,text:e.text,bubblePosition:a}))}))})))},z=function(e){var t=e.school,a=e.graduation,n=e.comment,l=e.bubblePosition,o=e.subject;return r.a.createElement("div",{className:"education-bubble speech-bubble-".concat(l," ").concat(o)},r.a.createElement("h5",null,t),r.a.createElement("h6",null,a),r.a.createElement("p",null,n))},U=[{school:"Jono Basanavi\u010diaus gimnazija.",graduation:"Sep 2013 - Jun 2017",comment:"High school."},{school:"Vilniaus Gedimino Technikos Universitetas",graduation:"Sep 2018 - Dec 2018",comment:"Computer science, quit because i had some reasons. Cost a lot e.t.c..."},{school:"Vilniaus Kolegija",graduation:"Sep 2019 - Present",comment:"Currently 2nd course. Computer science. Academic vacation 2019-2020. Since Sep 2020 Session schedule."},{school:"Code with Mosh",graduation:"Jul 2020 - Jul 2020",subject:"Javascript-OOP",comment:"Javascript OOP analysis."},{school:"Udemy",graduation:"Jul 2020 - Aug 2020",subject:"Algorithms-and-data-structures",comment:"Algorithms and data structures. I did this course earlier, just skipped some unnecessary and repetetive sections."}];var G=function(){var e=U,t="left";return r.a.createElement("div",{className:"education"},r.a.createElement("h2",{className:"section-header"},"Education."),e.map((function(e){var a=t;return t="left"===t?"right":"left",r.a.createElement(g.a,Object.assign({key:e.school},N),(function(t){var n=t.inView,l=t.ref;t.entry;return r.a.createElement("div",{ref:l,style:k(n,a)},r.a.createElement(z,{school:e.school,graduation:e.graduation,comment:e.comment,bubblePosition:a,subject:e.subject}))}))})))},K=a(292),H=a(291),Q=function(){return r.a.createElement(K.a,null,r.a.createElement(K.a.Group,{controlId:"Name"},r.a.createElement(K.a.Label,null,"Name"),r.a.createElement(K.a.Control,{placeholder:"Enter your or company name"})),r.a.createElement(K.a.Group,{controlId:"formGroupEmail"},r.a.createElement(K.a.Label,null,"Email address"),r.a.createElement(K.a.Control,{type:"email",placeholder:"Enter email"})),r.a.createElement(K.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(K.a.Label,null,"Example textarea"),r.a.createElement(K.a.Control,{as:"textarea",rows:"5"})),r.a.createElement(H.a,{variant:"dark",type:"submit"},"Submit"))},_=a(81),R=function(){var e=r.a.createElement(s.a,{icon:m.f,size:"2x"}),t=r.a.createElement(s.a,{icon:m.d,size:"2x"}),a=r.a.createElement(s.a,{icon:_.a,size:"2x"});return r.a.createElement("div",null,r.a.createElement("div",{className:"address"},r.a.createElement("h3",null,"Address"),r.a.createElement("div",{className:"content"},r.a.createElement("p",null,"Lietuva, Vilnius, Pavilnio sod\u0173 6-oji g. 10"))),r.a.createElement("div",{className:"contacts"},r.a.createElement("h3",null,"Contacts"),r.a.createElement("div",{className:"content"},r.a.createElement("p",null,t," k.krivicius@gmail.com"),r.a.createElement("p",null,e," + 370 609 07 803"))),r.a.createElement("div",{className:"social"},r.a.createElement("h3",null,"Social"),r.a.createElement("div",{className:"content"},a)))},q=[{name:"home",label:"Home",dark:!1,content:h},{name:"about",label:"About me",dark:!0,content:x},{name:"skills",label:"Skills",dark:!1,content:V},{name:"experience",label:"Experience",dark:!0,content:F},{name:"education",label:"Education",dark:!1,content:G},{name:"contact",label:"Contact",dark:!0,content:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("h2",{className:"section-header"},"Contact me!"),w(r.a.createElement(Q,null),"left","form"),w(r.a.createElement(R,null),"right","info"))}}],$=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,{items:q}),r.a.createElement("div",{className:"Sections"},q.map((function(e){return r.a.createElement(v,{title:e.label,dark:e.dark,key:e.name,id:e.name,content:r.a.createElement(e.content,null)})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},77:function(e,t,a){e.exports=a.p+"static/media/myPhoto.3ce4dffb.jpg"}},[[187,1,2]]]);
//# sourceMappingURL=main.d1242938.chunk.js.map