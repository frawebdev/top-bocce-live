"use strict";(self["webpackChunktopbocce_app"]=self["webpackChunktopbocce_app"]||[]).push([[32],{32:(e,t,s)=>{s.r(t),s.d(t,{default:()=>he});var n=s(9835);function i(e,t,s,i,l,a){const o=(0,n.up)("main-carousel"),r=(0,n.up)("episodes-carousel"),d=(0,n.up)("seasons-carousel"),u=(0,n.up)("main-banner"),c=(0,n.up)("sport-carousel"),p=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(o,{content:e.featuredEpisodes},null,8,["content"]),(0,n.Wm)(r,{title:"Gli ultimi episodi",content:e.lastEpisodes},null,8,["content"]),(0,n.Wm)(d,{title:"Le ultime stagioni",content:e.lastSeasons},null,8,["content"]),(0,n.Wm)(u,{content:e.mainBanner},null,8,["content"]),(0,n.Wm)(c,{title:"Gli sport",sports:e.sports},null,8,["sports"]),(0,n.Wm)(c,{title:"Le rubriche",sports:e.shows},null,8,["sports"])])),_:1})}var l=s(6970);const a=e=>((0,n.dD)("data-v-3e948427"),e=e(),(0,n.Cn)(),e),o={class:"carousel-x-padding"},r={key:0,class:"q-ma-none"},d={class:"column justify-center col-12 col-md-6"},u={style:{margin:"5% 10% 5% 10%"},class:"text-white"},c=["innerHTML"],p={key:1,class:"q-ma-xs text-bold slideUpAnimation"},m=(0,n.Uk)(" Vai al video "),w={key:3},g=a((()=>(0,n._)("div",{class:"col"},null,-1))),h={key:1};function v(e,t,s,i,a,v){const b=(0,n.up)("q-icon"),k=(0,n.up)("q-btn"),_=(0,n.up)("swiper-slide"),y=(0,n.up)("swiper"),f=(0,n.up)("q-skeleton");return(0,n.wg)(),(0,n.iD)("main",o,[s.content?((0,n.wg)(),(0,n.iD)("div",r,[(0,n.Wm)(y,{modules:i.modules,"space-between":20,navigation:"",slidesPerView:1,class:"fadeInAnimation"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.content,(e=>((0,n.wg)(),(0,n.j4)(_,{style:(0,l.j5)(`background-image: url('${e.thumbnail_url}'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));`),key:e.id,class:"row carousel-bg"},{default:(0,n.w5)((()=>[(0,n._)("div",d,[(0,n._)("div",u,[e.title.rendered?((0,n.wg)(),(0,n.iD)("h6",{key:0,class:"q-my-sm text-bold title q-mx-none slideUpAnimation",innerHTML:e.title.rendered},null,8,c)):e.title?((0,n.wg)(),(0,n.iD)("h6",p,(0,l.zw)(e.title),1)):(0,n.kq)("",!0),e.video_url?((0,n.wg)(),(0,n.j4)(k,{key:2,style:{"background-color":"#0074a5","border-radius":"0",border:"1px solid white slideUpAnimation"},class:"q-mt-md q-mx-sm",onClick:t=>v.redirectTo(e)},{default:(0,n.w5)((()=>[m,(0,n.Wm)(b,{name:"play_arrow"})])),_:2},1032,["onClick"])):((0,n.wg)(),(0,n.iD)("p",w," Non Disponibile "))])]),g])),_:2},1032,["style"])))),128))])),_:1},8,["modules"])])):((0,n.wg)(),(0,n.iD)("div",h,[(0,n.Wm)(f,{width:"100%",height:"60vh"})]))])}var b=s(7847),k=s(5291),_=s(2009);const y={props:["title","content"],components:{Swiper:k.tq,SwiperSlide:k.o5,SkeletonCarousel:_.Z},methods:{redirectTo(e){e.video_url&&!e.embed_url?this.$router.push({name:"video",params:{id:e.video_url,name:e.title.rendered}}):e.embed_url&&this.$router.push({name:"video",params:{id:e.embed_url,name:e.title.rendered}})}},setup(){return{modules:[b.W_,b.tl,b.LW,b.s5]}}};var f=s(1639),x=s(9379),q=s(2857),W=s(7133),S=s(9984),D=s.n(S);const Z=(0,f.Z)(y,[["render",v],["__scopeId","data-v-3e948427"]]),j=Z;D()(y,"components",{QBtn:x.Z,QIcon:q.Z,QSkeleton:W.ZP});var z=s(6143);const C={class:"carousel-x-padding"},I={key:0,class:"q-ma-lg"},A={class:"q-mb-sm text-white text-bold fadeInAnimation"},$=(0,n._)("br",null,null,-1),N={class:"view-all-text"},P=(0,n.Uk)(" Guarda tutti "),Q={style:{margin:"5px 13px"}},E={class:"q-ma-xs text-bold"},B={key:1};function L(e,t,s,i,a,o){const r=(0,n.up)("router-link"),d=(0,n.up)("swiper-slide"),u=(0,n.up)("swiper"),c=(0,n.up)("skeleton-carousel");return(0,n.wg)(),(0,n.iD)("main",C,[s.content?((0,n.wg)(),(0,n.iD)("div",I,[(0,n._)("h4",A,[(0,n.Uk)((0,l.zw)(s.title)+" ",1),$,(0,n._)("span",N,[(0,n.Wm)(r,{to:{name:"view-all-seasons"},style:{"text-decoration":"none",color:"grey"}},{default:(0,n.w5)((()=>[P])),_:1})])]),(0,n.Wm)(u,{class:"fadeInAnimation",modules:i.modules,"space-between":20,navigation:o.showNav,breakpoints:{0:{slidesPerView:1.1},640:{slidesPerView:3},1200:{slidesPerView:4}}},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.content,(e=>((0,n.wg)(),(0,n.j4)(d,{style:(0,l.j5)(`background-image: url('${e.thumbnail_url}'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));`),class:"carousel-bg-sm",key:e.id},{default:(0,n.w5)((()=>[(0,n.Wm)(r,{to:{name:"season",params:{id:e.slug,name:e.name,image:e.thumbnail_url}},class:"column justify-center text-white text-center focusable link-style"},{default:(0,n.w5)((()=>[(0,n._)("div",Q,[(0,n._)("h6",E,(0,l.zw)(e.name),1)])])),_:2},1032,["to"])])),_:2},1032,["style"])))),128))])),_:1},8,["modules","navigation","breakpoints"])])):((0,n.wg)(),(0,n.iD)("div",B,[(0,n.Wm)(c)]))])}const U={props:["title","content"],components:{Swiper:k.tq,SwiperSlide:k.o5,SkeletonCarousel:_.Z},computed:{showNav(){return!(window.innerWidth<=600)&&(window.innerWidth>600||void 0)}},setup(){return{modules:[b.W_,b.tl,b.LW,b.s5]}}},V=(0,f.Z)(U,[["render",L]]),H=V,M={class:"carousel-x-padding"},K={key:0,class:"q-ma-lg"},T={class:"q-mb-sm text-white text-bold fadeInAnimation"},Y={style:{margin:"0 13px 0 13px"}},G={class:"q-ma-xs text-bold title-size text-center"},R={key:1};function F(e,t,s,i,a,o){const r=(0,n.up)("router-link"),d=(0,n.up)("swiper-slide"),u=(0,n.up)("swiper"),c=(0,n.up)("skeleton-carousel");return(0,n.wg)(),(0,n.iD)("div",M,[s.sports?((0,n.wg)(),(0,n.iD)("div",K,[(0,n._)("h4",T,(0,l.zw)(s.title),1),(0,n.Wm)(u,{class:"fadeInAnimation",modules:i.modules,"space-between":20,slidesPerView:1.1,navigation:o.showNav},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.sports,(e=>((0,n.wg)(),(0,n.j4)(d,{key:e.id,style:(0,l.j5)(`background-image: url('${e.thumbnail_url}'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));`),class:"carousel-sport"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,{to:{name:"sport",params:{id:e.id},props:{name:e.name}},class:"column justify-center text-white focusable",style:{height:"100%",width:"100%","text-decoration":"none"}},{default:(0,n.w5)((()=>[(0,n._)("div",Y,[(0,n._)("h6",G,(0,l.zw)(e.name),1)])])),_:2},1032,["to"])])),_:2},1032,["style"])))),128))])),_:1},8,["modules","slidesPerView","navigation"])])):((0,n.wg)(),(0,n.iD)("div",R,[(0,n.Wm)(c)]))])}const J={props:["title","sports"],components:{Swiper:k.tq,SwiperSlide:k.o5,SkeletonCarousel:_.Z},setup(){return{modules:[b.W_,b.tl,b.LW,b.s5]}},computed:{slidesMin(){let e;return e=this.sports&&this.sports.length>3?4:this.sports&&2==this.sports.length?2:3,e},slidesMax(){let e=3;return this.sports&&this.sports.length<=2&&(e=2),e},showNav(){return!(window.innerWidth<=600)&&(window.innerWidth>600||void 0)}}},O=(0,f.Z)(J,[["render",F],["__scopeId","data-v-6005874b"]]),X=O,ee={class:"text-left text-white q-pa-md row",style:{width:"100%",height:"100%"}},te={class:"col column justify-center items-center"},se={class:"text-left"},ne=(0,n.Uk)(" Vai ai live "),ie={key:1},le={key:0,class:"col column flex-center q-pr-md"};function ae(e,t,s,i,a,o){const r=(0,n.up)("q-img"),d=(0,n.up)("q-item"),u=(0,n.up)("q-list"),c=(0,n.up)("q-icon"),p=(0,n.up)("q-btn"),m=(0,n.up)("q-skeleton");return(0,n.wg)(),(0,n.iD)("div",null,[s.content?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"banner q-mt-xl column flex-center carousel-bg fadeInAnimation",style:(0,l.j5)("background-image: url('https://www.topbocce.live/wp-content/uploads/2022/05/BANNER-1-1024x576-1.png'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));")},[(0,n._)("div",ee,[(0,n._)("div",te,[(0,n._)("div",se,[(0,n.Wm)(r,{width:"300px",src:"https://www.topbocce.live/wp-content/uploads/2022/06/live.png",class:"q-mb-xl"}),(0,n.Wm)(u,{separator:"",dark:"",class:"q-mb-lg"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.content,(e=>((0,n.wg)(),(0,n.j4)(d,{key:e.id,style:{"font-size":"1.3rem"}},{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(e.title.rendered),1)])),_:2},1024)))),128))])),_:1}),s.content.length>0?((0,n.wg)(),(0,n.j4)(p,{key:0,class:"base-btn q-py-sm q-px-lg",style:{"font-size":"1.1rem"},to:{name:"live-page"}},{default:(0,n.w5)((()=>[ne,(0,n.Wm)(c,{name:"play_arrow"})])),_:1})):((0,n.wg)(),(0,n.iD)("div",ie,"Nessun evento disponibile al momento"))])]),a.screenSize>600?((0,n.wg)(),(0,n.iD)("div",le,[(0,n.Wm)(r,{src:"https://www.topbocce.live/wp-content/uploads/2022/05/BANNER-1-1024x576-1.png"})])):(0,n.kq)("",!0)])],4)):((0,n.wg)(),(0,n.j4)(m,{key:1,width:"100%",height:"40vh",class:"banner"}))])}const oe={data(){return{screenSize:null}},props:["content"],components:{SkeletonCarousel:_.Z},mounted(){console.log(this.content),this.screenSize=window.innerWidth,window.onresize=()=>{this.screenSize=window.innerWidth}}};var re=s(335),de=s(3246),ue=s(490);const ce=(0,f.Z)(oe,[["render",ae]]),pe=ce;D()(oe,"components",{QImg:re.Z,QList:de.Z,QItem:ue.Z,QBtn:x.Z,QIcon:q.Z,QSkeleton:W.ZP});const me=(0,n.aZ)({name:"IndexPage",components:{MainCarousel:j,EpisodesCarousel:z.Z,SeasonsCarousel:H,SportCarousel:X,SkeletonCarousel:_.Z,MainBanner:pe},data(){return{lastEpisodes:null,lastSeasons:null,featuredEpisodes:null,mainBanner:null,sports:null,shows:null}},async mounted(){this.featuredEpisodes=await this.$api.get("/wp/v2/movie?per_page=3").then((e=>e.data)),this.lastEpisodes=await this.$api.get("/wp/v2/movie?orderby=date").then((e=>e.data)),this.lastSeasons=await this.$api.get("/wp/v2/movie_genre").then((e=>e.data)),this.mainBanner=await this.$api.get("/wp/v2/video").then((e=>e.data)),this.sports=await this.$api.get("/wp/v2/movie_tag?include=197,216").then((e=>e.data)),this.shows=await this.$api.get("/wp/v2/movie_tag?include=229,224").then((e=>e.data))}});var we=s(9885);const ge=(0,f.Z)(me,[["render",i]]),he=ge;D()(me,"components",{QPage:we.Z})}}]);