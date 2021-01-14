(this["webpackJsonpalan-ai-news-app"]=this["webpackJsonpalan-ai-news-app"]||[]).push([[0],{178:function(e,t,a){},256:function(e,t,a){},257:function(e,t,a){},258:function(e,t,a){},259:function(e,t,a){},260:function(e,t,a){},261:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),i=a.n(c),r=a(13),s=a.n(r),o=a(93),l=a(43),d=a(148),j=a.n(d),h=a(149),p=a(150),b="AUTH_LOGIN",u="AUTH_LOGOUT",x="SET_PROFILE",m="RESET_PROFILE",g={token:null,isAuthenticated:!1},O=function(e,t){switch(e=e||g,t.type){case b:return{token:t.payload,isAuthenticated:!0};case u:return{token:null,isAuthenticated:!1};default:return e}},f=a(151),y={email:"",lastName:"",firstName:"",googleId:"",imageUrl:"",name:""},v=function(e,t){switch(e=e||y,t.type){case x:return{email:t.payload.email,lastName:t.payload.familyName,firstName:t.payload.givenName,googleId:t.payload.googleId,imageUrl:t.payload.imageUrl,name:t.payload.name};case m:return Object(f.a)({},y);default:return e}},w=Object(l.combineReducers)({auth:O,profile:v}),N=Object(l.createStore)(w,Object(h.composeWithDevTools)(Object(l.applyMiddleware)(j.a,p.a))),k=a(22),S=a(19),C=a(34),T=a.n(C),A=a(52),I=a(83),D=a(84),_=a(96),E=a(95),L=(a(177),a(292)),q=a(293),H=a(294),P=a(295),M=a(296),R=(a(178),a(115)),G=a.n(R),B="8ccdf61d095842fbba3ffe62c725c144",F="https://newsapi.org/v2",z=function(){var e=Object(A.a)(T.a.mark((function e(){var t,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"sources?apiKey=",e.prev=1,e.next=4,G.a.get("".concat(F,"/").concat("sources?apiKey=").concat(B));case 4:return t=e.sent,a=t.data.sources,e.abrupt("return",a.map((function(e){return e})));case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(A.a)(T.a.mark((function e(t){var a,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.a.get("".concat(F,"/").concat(t.category,"?").concat(t.query,"&pageSize=").concat(t.results,"&apiKey=").concat(B));case 3:return a=e.sent,n=a.data.articles,e.abrupt("return",n.map((function(e){return e})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),J=a(29),K=a(76),W=a.n(K),Y=a(152),V=a.n(Y),Q=a(30),X=a(280),Z=Object(X.a)((function(e){return{footer:Object(Q.a)({textAlign:"center",position:"fixed",left:0,bottom:0,color:"black",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",height:"120px"},e.breakpoints.down("sm"),{display:"none"}),link:{textDecoration:"none",color:"rgba(21, 101, 192)"},image:{marginLeft:20},card:Object(Q.a)({display:"flex",justifyContent:"center",alignItems:"center",width:"50%",padding:"3%",borderRadius:10,color:"white",backgroundColor:"rgba(21, 101, 192)",margin:"0 12px",textAlign:"center",height:"25vmin"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center",width:"100%",height:"initial","&:nth-of-type(1)":{marginBottom:"12px"}}),infoContainer:Object(Q.a)({display:"flex",alignItems:"center",justifyContent:"space-around"},e.breakpoints.down("sm"),{flexDirection:"column"}),logoContainer:Object(Q.a)({padding:"0 5%",display:"flex",justifyContent:"space-around",alignItems:"center",width:"100%"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center"}),alanLogo:Object(Q.a)({height:"27vmin",borderRadius:"15%",padding:"0 5%",margin:"3% 0"},e.breakpoints.down("sm"),{height:"35vmin"})}})),$=a(282),ee=a(283),te=Object(X.a)({container:{padding:"0 5%",width:"100%",margin:0},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",width:"100%",height:"50vh",padding:"7%",borderRadius:10,color:"white"},infoCard:{display:"flex",flexDirection:"column",textAlign:"center"}}),ae=a(97),ne=a(156),ce=a.n(ne),ie=a(157),re=a.n(ie),se=[{color:"#00838f",title:"Latest News",text:"Give me the latest news",id:"Left"},{color:"#1565c0",title:"News by Categories",info:"Business, Entertainment, General, Health, Science, Sports, Technology",text:"Give me the latest Technology news",id:"Right"},{color:"#4527a0",title:"News by Terms",info:"Bitcoin, PlayStation 5, Smartphones, Donald Trump...",text:"What's up with PlayStation 5",id:"Top"},{color:"#283593",title:"News by Sources",info:"CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",text:"Give me the news from CNN",id:"Bottom"}],oe=function(){var e=te(),t=Object(c.useState)(!1),a=Object(J.a)(t,2),i=a[0],r=a[1],s=function(e){e.preventDefault(),r(!i)};return Object(n.jsx)($.a,{in:!0,children:Object(n.jsx)(ee.a,{className:e.container,container:!0,alignitem:"stretch",spacing:3,children:se.map((function(t){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(ee.a,{item:!0,xs:12,sm:6,md:4,lg:3,className:e.infoCard,children:Object(n.jsx)(ce.a,{children:Object(n.jsxs)(re.a,{isFlipped:i,flipDirection:"vertical",children:[Object(n.jsxs)("div",{onMouseOver:s,className:e.card,style:{backgroundColor:t.color,boxShadow:"10px 30px 10px #9E9E9E"},children:[Object(n.jsxs)(ae.a,{variant:"h5",style:{color:"white"},children:[" ",t.title," "]}),t.info?Object(n.jsxs)(ae.a,{variant:"h6",style:{color:"white"},children:[Object(n.jsxs)("strong",{children:[t.title.split(" ")[2],":"]}),Object(n.jsx)("br",{}),t.info]}):null]}),Object(n.jsx)("div",{onMouseOver:s,className:e.card,style:{backgroundColor:t.color,boxShadow:"10px 30px 10px #9E9E9E"},children:Object(n.jsxs)(ae.a,{variant:"h5",style:{color:"white"},children:["Try Saying : ",Object(n.jsx)("br",{})," ",Object(n.jsx)("i",{children:t.text})]})})]})})},t.id)})}))})})},le=Object(X.a)((function(e){return{media:{height:10,paddingTop:"56.25%"},activeCard:{borderBottom:"10px solid #22289a"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderBottom:"10px solid white"}}})),de=a(297),je=a(284),he=a(298),pe=a(285),be=a(286),ue=a(287),xe=a(288),me=a(289),ge=a(290),Oe=a(291),fe=a(88),ye=a.n(fe),ve=a(7),we=function(e){var t=e.article,a=t.description,r=t.publishedAt,s=t.source,o=t.title,l=t.url,d=t.urlToImage,j=e.activeArticle,h=e.i,p=le(),b=Object(c.useState)([]),u=Object(J.a)(b,2),x=u[0],m=u[1];Object(c.useEffect)((function(){window.scroll(0,0),m((function(e){return Array(20).fill().map((function(t,a){return e[a]||Object(c.createRef)()}))}))}),[]),Object(c.useEffect)((function(){var e;h===j&&x[j]&&(e=x[j],window.scroll(0,e.current.offsetTop-30))}),[h,j,x]);var g=i.a.useState(!1),O=Object(J.a)(g,2),f=O[0],y=O[1];return Object(n.jsxs)(de.a,{ref:x[h],className:j===h?p.activeCard:p.card,children:[Object(n.jsx)(je.a,{avatar:Object(n.jsx)(he.a,{"aria-label":"recipe",children:Object(n.jsx)("img",{src:"https://alan.app/voice/images/branding_page/icon/color/alan-logo-icon-color.png",alt:"alan",height:"45px"})}),title:s.name,subheader:new Date(r).toDateString()}),Object(n.jsx)(pe.a,{className:p.media,image:d||"https://media4.s-nbcnews.com/j/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.nbcnews-fp-1200-630.png"}),Object(n.jsx)(be.a,{children:Object(n.jsx)(ae.a,{variant:"body2",color:"textSecondary",component:"p",children:o})}),Object(n.jsxs)(ue.a,{disableSpacing:!0,children:[Object(n.jsxs)(xe.a,{href:l,target:"_blank",children:[Object(n.jsx)(me.a,{size:"small",color:"primary",children:"Read more"}),Object(n.jsx)(ae.a,{variant:"h5",color:"textSecondary",component:"h2",children:h+1})]}),Object(n.jsx)(ge.a,{className:Object(ve.a)(p.expand,Object(Q.a)({},p.expandOpen,f)),onClick:function(){y(!f)},"aria-expanded":f,"aria-label":"show more",children:Object(n.jsx)(ye.a,{})})]}),Object(n.jsx)(Oe.a,{in:f,timeout:"auto",unmountOnExit:!0,children:Object(n.jsx)(be.a,{children:Object(n.jsx)(ae.a,{paragraph:!0,children:a})})})]})},Ne=function(e){var t=e.articles,a=e.activeArticle,c=te();return t.length?Object(n.jsx)($.a,{in:!0,children:Object(n.jsx)(ee.a,{className:c.container,container:!0,alignitem:"stretch",spacing:3,children:t.map((function(e,t){return Object(n.jsx)(ee.a,{item:!0,xs:12,sm:6,md:4,lg:3,style:{display:"flex"},children:Object(n.jsx)(we,{article:e,i:t,activeArticle:a},e.id)},e.id)}))})}):Object(n.jsx)(oe,{})},ke=function(){var e=Object(c.useState)([]),t=Object(J.a)(e,2),a=t[0],i=t[1],r=Object(c.useState)(-1),s=Object(J.a)(r,2),o=s[0],l=s[1],d=Z();return Object(c.useEffect)((function(){W()({key:"ff5b4386f116bd7be69f77cff31107452e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){var t=e.command,a=e.articles,n=e.number;if("newHeadlines"===t)i(a),l(-1);else if("highlight"===t)l((function(e){return e+1}));else if("open"===t){var c=n.length>2?V()(n,{fuzzy:!0}):n,r=a[c-1];c>a.length?W()().playText("Please try that again..."):r?(window.open(r.url,"_blank"),W()().playText("Opening...")):W()().playText("Please try that again...")}}})}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:d.logoContainer,children:Object(n.jsx)(k.b,{to:"/",children:Object(n.jsx)("img",{src:"https://alan.app/voice/images/previews/preview.jpg",className:d.alanLogo,alt:"alan"})})}),Object(n.jsx)(Ne,{articles:a,activeArticle:o})]})},Se=Object(X.a)((function(e){return{media:{height:10,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}})),Ce=function(e){var t=e.article,a=t.description,c=t.publishedAt,r=t.source,s=t.title,o=t.url,l=t.urlToImage,d=e.i,j=Se(),h=i.a.useState(!1),p=Object(J.a)(h,2),b=p[0],u=p[1];return Object(n.jsxs)(de.a,{children:[Object(n.jsx)(je.a,{avatar:Object(n.jsx)(he.a,{"aria-label":"recipe",children:Object(n.jsx)("img",{src:"https://alan.app/voice/images/branding_page/icon/color/alan-logo-icon-color.png",alt:"alan",height:"45px"})}),title:r.name,subheader:new Date(c).toDateString()}),Object(n.jsx)(pe.a,{className:j.media,image:l||"https://media4.s-nbcnews.com/j/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.nbcnews-fp-1200-630.png"}),Object(n.jsx)(be.a,{children:Object(n.jsx)(ae.a,{variant:"body2",color:"textSecondary",component:"p",children:s})}),Object(n.jsxs)(ue.a,{disableSpacing:!0,children:[Object(n.jsxs)(xe.a,{href:o,target:"_blank",children:[Object(n.jsx)(me.a,{size:"small",color:"primary",children:"Read more"}),Object(n.jsx)(ae.a,{variant:"h5",color:"textSecondary",component:"h2",children:d+1})]}),Object(n.jsx)(ge.a,{className:Object(ve.a)(j.expand,Object(Q.a)({},j.expandOpen,b)),onClick:function(){u(!b)},"aria-expanded":b,"aria-label":"show more",children:Object(n.jsx)(ye.a,{})})]}),Object(n.jsx)(Oe.a,{in:b,timeout:"auto",unmountOnExit:!0,children:Object(n.jsx)(be.a,{children:Object(n.jsx)(ae.a,{paragraph:!0,children:a})})})]})},Te=function(e){var t=te(),a=Object(c.useState)([]),i=Object(J.a)(a,2),r=i[0],s=i[1];return Object(c.useEffect)((function(){(function(){var t=Object(A.a)(T.a.mark((function t(){return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=s,t.next=3,U(e);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{style:{fontSize:"30px"},children:e.topHeading}),Object(n.jsx)($.a,{in:!0,children:Object(n.jsx)(ee.a,{className:t.container,container:!0,alignitem:"stretch",spacing:3,children:r.length>1?r.map((function(e,t){return Object(n.jsx)(ee.a,{item:!0,xs:12,sm:6,md:4,lg:3,style:{display:"flex"},children:Object(n.jsx)(Ce,{article:e,i:t},e.id)},e.id)})):"Loading.."})})]})},Ae=function(){return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)("br",{}),Object(n.jsx)("hr",{}),Object(n.jsx)(Te,{category:"top-headlines",query:"country=in",topHeading:"Top News",linkText:"See More Headlines",results:"15"})," ",Object(n.jsx)("hr",{}),Object(n.jsx)(Te,{category:"everything",query:"q=trending india",topHeading:"Trending in India",linkText:"More Indian Trends",results:"12"})," ",Object(n.jsx)("hr",{}),Object(n.jsx)(Te,{category:"everything",query:"q=trending tech",topHeading:"Tech Trends",linkText:"More about Tech",results:"12"})," ",Object(n.jsx)("hr",{})]})},Ie=a(118),De="716102099277-02pdp95dhbk8i9aujb6a6qgssdcvcp5a.apps.googleusercontent.com",_e=function(e){Object(_.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(I.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).googleCallback=function(t){if(t&&t.accessToken){var a={token:t.accessToken,userData:t.profileObj};localStorage.setItem("user",JSON.stringify(a)),e.props.dispatch({type:b,payload:a.token}),e.props.dispatch({type:x,payload:a.userData})}else alert("Sorry, Google signin has failed. Please try again")},e.logout=function(){localStorage.removeItem("user"),e.props.dispatch({type:u}),e.props.dispatch({type:m})},e}return Object(D.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("user"));e&&(this.props.dispatch({type:b,payload:e.token}),this.props.dispatch({type:x,payload:e.userData}))}},{key:"render",value:function(){return console.log(this.props),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{children:Object(n.jsxs)("div",{children:[this.props.auth.isAuthenticated&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(k.b,{to:"/profile",children:this.props.profileName}),Object(n.jsx)(Ie.GoogleLogout,{clientId:De,buttonText:"Logout",onLogoutSuccess:this.logout,style:{height:"12px",background:"rgba(255, 255, 255, 0.2)",margin:"16px"}})]}),!this.props.auth.isAuthenticated&&Object(n.jsx)(Ie.GoogleLogin,{clientId:De,onSuccess:this.googleCallback,onFailure:this.googleCallback,buttonText:"Login",isSignedIn:!0})]})})})}}]),a}(i.a.Component),Ee=Object(o.b)((function(e){return{auth:e.auth,profileName:e.profile.name}}))(_e),Le=L.a.Header,qe=L.a.Sider,He=L.a.Content,Pe=function(e){Object(_.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(I.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={collapsed:!1,sources:[],homePage:!0,query:""},e.toggle=function(){e.setState({collapsed:!e.state.collapsed})},e.Home=function(){e.setState({homePage:!0})},e}return Object(D.a)(a,[{key:"componentDidMount",value:function(){var e=Object(A.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:t=e.sent,this.setState({sources:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadNews",value:function(e){this.setState({homePage:!1,query:e})}},{key:"render",value:function(){var e=this;return Object(n.jsxs)(L.a,{children:[Object(n.jsxs)(qe,{trigger:null,collapsible:!0,collapsed:!this.state.collapsed,children:[Object(n.jsxs)("h2",{className:"logo",children:[" ",this.state.collapsed?Object(n.jsx)(Ee,{}):"G-"]}),Object(n.jsx)(k.b,{to:"/",children:Object(n.jsx)("div",{className:"logo",onClick:this.Home,children:Object(n.jsx)("h2",{children:this.state.collapsed?"Alan Ai News":"A"})})}),Object(n.jsxs)(q.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["-1"],children:[Object(n.jsx)(q.a.Item,{onClick:function(){return e.setState({homePage:!0})},icon:Object(n.jsx)(H.a,{}),children:"Top News"},"-1"),this.state.sources.map((function(t){return Object(n.jsx)(q.a.Item,{onClick:function(){return e.loadNews(t.name)},children:t.name},t.name)}))]})]}),Object(n.jsxs)(L.a,{className:"site-layout",children:[Object(n.jsx)(Le,{className:"site-layout-background",style:{padding:0},children:i.a.createElement(this.state.collapsed?M.a:P.a,{className:"trigger",onClick:this.toggle})}),Object(n.jsx)(He,{className:"site-layout-background",style:{margin:"24px 16px",padding:24,paddingRight:0,minHeight:280},children:Object(n.jsx)(c.Suspense,{fallback:Object(n.jsx)("h1",{style:{fontSize:"30px"},children:"Loading..."}),children:!0===this.state.homePage?Object(n.jsxs)("div",{children:[Object(n.jsx)(ke,{})," ",Object(n.jsx)(Ae,{})]}):Object(n.jsx)(Te,{category:"everything",query:"q="+this.state.query,topHeading:this.state.query,results:"100"})})})]})]})}}]),a}(i.a.Component),Me=(a(256),function(){return Object(n.jsx)("div",{className:"sticky-container",children:Object(n.jsxs)("ul",{className:"sticky",children:[Object(n.jsx)("li",{children:Object(n.jsxs)(k.b,{to:"/",style:{textDecoration:"none"},children:[Object(n.jsx)("img",{width:"25",height:"25",title:"",alt:"",src:"https://alan.app/voice/images/branding_page/icon/color/alan-logo-icon-color.png"}),Object(n.jsx)("p",{id:"current",children:"News AI"})]})}),Object(n.jsxs)("li",{children:[Object(n.jsx)(Ee,{}),Object(n.jsx)("p",{id:"current",children:"login"})]}),Object(n.jsx)("li",{children:Object(n.jsxs)(k.b,{to:"/about",style:{textDecoration:"none"},children:[" ",Object(n.jsx)("img",{width:"25",height:"25",title:"",alt:"",src:"https://fotofab2.herokuapp.com/static/media/group.23117c19.svg"}),Object(n.jsx)("p",{id:"current",children:"About Us"})]})}),Object(n.jsx)("li",{children:Object(n.jsxs)(k.b,{to:"/contact",style:{textDecoration:"none"},children:[" ",Object(n.jsx)("img",{width:"25",height:"25",title:"",alt:"",src:"https://fotofab2.herokuapp.com/static/media/contact.cfe59cd4.svg"}),Object(n.jsx)("p",{id:"current",children:"Contact"})]})}),Object(n.jsx)("li",{children:Object(n.jsxs)(k.b,{to:{pathname:"https://www.facebook.com/Voice-Control-Alan-News-100515255364056"},target:"_blank",style:{textDecoration:"none",color:"white"},children:[Object(n.jsx)("img",{width:"25",height:"25",title:"",alt:"fb",src:"https://i.pinimg.com/originals/30/99/af/3099aff4115ee20f43e3cdad04f59c48.png"}),Object(n.jsx)("p",{children:"Facebook"})]})}),Object(n.jsx)("li",{children:Object(n.jsxs)(k.b,{to:{pathname:"https://twitter.com/control_alan"},target:"_blank",style:{textDecoration:"none",color:"white"},children:[Object(n.jsx)("img",{width:"25",height:"25",title:"",alt:"tw",src:"https://image.flaticon.com/icons/png/512/124/124021.png"}),Object(n.jsx)("p",{children:"Twitter"})]})}),Object(n.jsx)("li",{children:Object(n.jsxs)(k.b,{to:{pathname:"https://in.pinterest.com/pin/777574691911488437/"},target:"_blank",style:{textDecoration:"none",color:"white"},children:[Object(n.jsx)("img",{width:"25",height:"25",title:"",alt:"pin1",src:"https://www.vectorico.com/download/social_media/Pinterest-Icon-Squircle.jpg"}),Object(n.jsx)("p",{children:"Pinterest"})]})}),Object(n.jsx)("li",{children:Object(n.jsxs)(k.b,{to:{pathname:"https://www.linkedin.com/company/71351208/admin/"},target:"_blank",style:{textDecoration:"none",color:"white"},children:[Object(n.jsx)("img",{width:"25",height:"25",title:"",alt:"li",src:"https://cdn5.vectorstock.com/i/1000x1000/99/09/linkedin-social-media-icon-design-template-vector-22339909.jpg"}),Object(n.jsx)("p",{children:"Linkedin"})]})})]})})}),Re=(a(257),function(){return Object(n.jsxs)("div",{className:"container1",children:[Object(n.jsx)("div",{className:"left"}),Object(n.jsxs)("div",{className:"contact__wrap",children:[Object(n.jsx)("h1",{children:"Contact Us"}),Object(n.jsxs)("form",{className:"contact__form",children:[Object(n.jsx)("input",{type:"text",name:"name",placeholder:"NAME",title:"Your name",maxLength:"50",required:!0}),Object(n.jsx)("input",{type:"email",name:"email",placeholder:"EMAIL",title:"Your email",maxLength:"50",required:!0}),Object(n.jsx)("textarea",{type:"text",name:"message",placeholder:"MESSAGE",title:"Your message",maxLength:"550",required:!0}),Object(n.jsx)("input",{id:"con_sub",type:"submit",value:"send message"})]})]})]})}),Ge=(a(258),a(259),function(){return Object(n.jsxs)("div",{className:"head",children:[Object(n.jsx)("div",{className:"center",children:Object(n.jsxs)("div",{className:"property-card",children:[Object(n.jsx)("div",{className:"property-image",children:Object(n.jsx)("div",{className:"property-image-title"})}),Object(n.jsx)("div",{className:"property-description",children:Object(n.jsx)("h5",{children:"Rahul "})})]})}),Object(n.jsx)("div",{className:"center",children:Object(n.jsxs)("div",{className:"property-card",children:[Object(n.jsx)("div",{className:"property-image",children:Object(n.jsx)("div",{className:"property-image-title"})}),Object(n.jsx)("div",{className:"property-description",children:Object(n.jsx)("h5",{children:"Prasad "})})]})})]})}),Be=function(){return Object(n.jsxs)("div",{className:"holder",children:[Object(n.jsx)("div",{className:"about-page",children:Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"login-photo",children:Object(n.jsx)("div",{className:"login-photo-container",children:Object(n.jsx)("div",{className:"info",children:Object(n.jsx)("div",{className:"info-para",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"About App"}),Object(n.jsx)("h1",{children:"Creation Starts Here"}),Object(n.jsx)("p",{children:"Access Country's Most Vibrant News."}),Object(n.jsx)("p",{children:" Make your dailies informative."})]})})})})})})}),Object(n.jsxs)("div",{className:"about-description",children:[Object(n.jsx)("h1",{children:"About Us"}),Object(n.jsx)("p",{children:'"It\'s not wise to violate rules until you know how to observe them."'}),Object(n.jsxs)("div",{className:"about-devs",children:[Object(n.jsx)("h2",{children:"Developers"}),Object(n.jsx)("div",{children:Object(n.jsx)(Ge,{})})]})]})]})},Fe=function(){return Object(n.jsxs)(k.a,{children:[Object(n.jsx)(Me,{}),Object(n.jsx)(S.a,{exact:!0,path:"/",component:Pe}),Object(n.jsx)(S.a,{exact:!0,path:"/contact",component:Re}),Object(n.jsx)(S.a,{exact:!0,path:"/about",component:Be})]})};a(260);s.a.render(Object(n.jsx)(i.a.Fragment,{children:Object(n.jsx)(o.a,{store:N,children:Object(n.jsx)(Fe,{})})}),document.getElementById("root"))}},[[261,1,2]]]);
//# sourceMappingURL=main.4da31803.chunk.js.map