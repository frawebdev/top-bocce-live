"use strict";(self["webpackChunktopbocce_app"]=self["webpackChunktopbocce_app"]||[]).push([[64],{6583:(e,t,l)=>{l.d(t,{Z:()=>u});var i=l(9835),s=l(6970),a=l(1957);const n={class:"banner-text"};function r(e,t,l,r,o,d){return(0,i.wg)(),(0,i.iD)("div",{class:"banner flex flex-center text-white",style:(0,s.j5)("background-image: url('https://www.topbocce.live/wp-content/uploads/2022/05/BANNER-1-1024x576-1.png'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)); background-position: center; background-size: cover; background-blend-mode: overlay;")},[(0,i.Wm)(a.uT,{appear:"","enter-active-class":"animated fadeInUp"},{default:(0,i.w5)((()=>[(0,i._)("h4",n,(0,s.zw)(l.title),1)])),_:1})],4)}const o={props:["title"]};var d=l(1639);const c=(0,d.Z)(o,[["render",r],["__scopeId","data-v-168db60c"]]),u=c},5756:(e,t,l)=>{l.d(t,{Z:()=>f});var i=l(9835),s=l(1957),a=l(6970);const n={class:"carousel-x-padding"},r={key:0,class:"q-ma-lg"},o={class:"q-mb-sm text-white text-bold fadeInAnimation"},d=(0,i._)("br",null,null,-1),c={class:"view-all-text"},u=(0,i.Uk)(" Guarda tutti "),m={style:{margin:"5% 10% 5% 10%"},class:"text-white text-center"},p=["innerHTML"],g={key:1,class:"q-my-xs text-bold"},v={key:1};function w(e,t,l,w,h,_){const b=(0,i.up)("router-link"),k=(0,i.up)("swiper-slide"),x=(0,i.up)("swiper"),y=(0,i.up)("skeleton-carousel");return(0,i.wg)(),(0,i.iD)("main",n,[l.content?((0,i.wg)(),(0,i.iD)("div",r,[(0,i.Wm)(s.uT,{appear:"","enter-active-class":"animated fadeInUp"},{default:(0,i.w5)((()=>[(0,i._)("h4",o,[(0,i.Uk)((0,a.zw)(l.title)+" ",1),d,(0,i._)("span",c,[(0,i.Wm)(b,{to:{name:"view-all-episodes"},style:{"text-decoration":"none",color:"grey"}},{default:(0,i.w5)((()=>[u])),_:1})])])])),_:1}),(0,i.Wm)(x,{class:"fadeInAnimation",modules:w.modules,"space-between":20,navigation:_.showNav,breakpoints:{0:{slidesPerView:1.1},640:{slidesPerView:3},1200:{slidesPerView:4}}},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.content,(e=>((0,i.wg)(),(0,i.j4)(k,{style:(0,a.j5)(`background-image: url('${e.thumbnail_url}'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));`),class:(0,a.C_)(["carousel-bg-sm",e.video_url||e.embed_url?"":"avaliability"]),key:e.id,onClick:t=>_.redirectTo(e)},{default:(0,i.w5)((()=>[(0,i.Wm)(b,{class:"column justify-center focusable link-style",to:{name:"video",params:{id:e.video_url||null,name:e.title.rendered,views:e.views}}},{default:(0,i.w5)((()=>[(0,i._)("div",m,[e.title.rendered?((0,i.wg)(),(0,i.iD)("h6",{key:0,class:"q-my-xs text-bold",innerHTML:e.title.rendered},null,8,p)):e.title?((0,i.wg)(),(0,i.iD)("h6",g,(0,a.zw)(e.title),1)):(0,i.kq)("",!0)])])),_:2},1032,["to"])])),_:2},1032,["style","class","onClick"])))),128))])),_:1},8,["modules","navigation","breakpoints"])])):((0,i.wg)(),(0,i.iD)("div",v,[(0,i.Wm)(y)]))])}var h=l(7847),_=l(5291),b=l(2009);const k={props:["title","content"],components:{Swiper:_.tq,SwiperSlide:_.o5,SkeletonCarousel:b.Z},methods:{redirectTo(e){e.video_url&&!e.embed_url?this.$router.push({name:"video",params:{id:e.video_url,name:e.title.rendered,movie_id:e.id,views:e.views}}):e.embed_url&&this.$router.push({name:"video",params:{id:e.embed_url,name:e.title.rendered,movie_id:e.id,views:e.views}})}},computed:{showNav(){return!(window.innerWidth<=600)&&(window.innerWidth>600||void 0)}},setup(){return{modules:[h.W_,h.tl,h.LW,h.s5]}}};var x=l(1639);const y=(0,x.Z)(k,[["render",w]]),f=y},2009:(e,t,l)=>{l.d(t,{Z:()=>p});var i=l(9835);const s={class:"q-ma-lg"},a={class:"q-gutter-md q-mt-lg"};function n(e,t){const l=(0,i.up)("q-skeleton");return(0,i.wg)(),(0,i.iD)("div",s,[(0,i._)("div",a,[(0,i.Wm)(l,{height:"50px"}),(0,i.Wm)(l,{height:"200px"})])])}var r=l(1639),o=l(7133),d=l(9984),c=l.n(d);const u={},m=(0,r.Z)(u,[["render",n]]),p=m;c()(u,"components",{QSkeleton:o.ZP})},9724:(e,t,l)=>{l.d(t,{Z:()=>Q});var i=l(9835),s=l(6970);const a={class:"q-ma-md"},n={key:0,class:"q-pa-md flex flex-center"},r={key:1,class:"row q-col-gutter-md"},o={class:"absolute-bottom column justify-center",style:{height:"100%"}},d={key:0},c=["innerHTML"],u={key:1},m={class:"text-h5 text-center"},p={key:2,class:"text-center text-grey"},g={key:3,class:"text-center live-now text-bold"},v=(0,i._)("button",null,[(0,i._)("p",null,"LIVE ORA")],-1),w=[v],h={key:4,class:"text-center"},_=(0,i.Uk)(" Programmato per 01/01/22"),b=(0,i._)("br",null,null,-1),k=(0,i.Uk)(" Alle 12:00 "),x=[_,b,k],y={key:2,class:"row q-col-gutter-md"},f={class:"col-12 col-sm-6 col-md-4"},q={class:"col-12 col-sm-6 col-md-4"},W={class:"col-12 col-sm-6 col-md-4"},D={class:"col-12 col-sm-6 col-md-4"},P={class:"col-12 col-sm-6 col-md-4"},Z={class:"col-12 col-sm-6 col-md-4"},T={class:"col-12 col-sm-6 col-md-4"},V={class:"col-12 col-sm-6 col-md-4"},C={key:3,class:"q-pa-md flex flex-center"};function j(e,t,l,v,_,b){const k=(0,i.up)("q-pagination"),j=(0,i.up)("q-img"),U=(0,i.up)("q-card"),I=(0,i.up)("q-skeleton");return(0,i.wg)(),(0,i.iD)("div",a,[l.pages>0?((0,i.wg)(),(0,i.iD)("div",n,[(0,i.Wm)(k,{modelValue:_.currentPage,"onUpdate:modelValue":t[0]||(t[0]=e=>_.currentPage=e),max:l.pages,input:"","input-class":"text-white"},null,8,["modelValue","max"])])):(0,i.kq)("",!0),l.episodes?((0,i.wg)(),(0,i.iD)("div",r,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.episodes,(e=>((0,i.wg)(),(0,i.j4)(U,{class:"my-card col-12 col-sm-6 col-md-4 bg-transparent",key:e.id,onClick:t=>b.redirectTo(e)},{default:(0,i.w5)((()=>[e.thumbnail_url?((0,i.wg)(),(0,i.j4)(j,{key:0,src:e.thumbnail_url,class:"bg-grey"},{default:(0,i.w5)((()=>[(0,i._)("div",o,[(0,i._)("div",null,[e.title?((0,i.wg)(),(0,i.iD)("div",d,[(0,i._)("div",{class:"text-h5 text-center",innerHTML:e.title.rendered},null,8,c)])):(0,i.kq)("",!0),e.name?((0,i.wg)(),(0,i.iD)("div",u,[(0,i._)("div",m,(0,s.zw)(e.name),1)])):(0,i.kq)("",!0),e.video_url||e.name||null!==e.is_live?1===e.is_live?((0,i.wg)(),(0,i.iD)("div",g,w)):0===e.is_live?((0,i.wg)(),(0,i.iD)("div",h,x)):(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",p," Non disponibile "))])])])),_:2},1032,["src"])):(0,i.kq)("",!0)])),_:2},1032,["onClick"])))),128))])):((0,i.wg)(),(0,i.iD)("div",y,[(0,i._)("div",f,[(0,i.Wm)(I,{height:"200px"})]),(0,i._)("div",q,[(0,i.Wm)(I,{height:"200px"})]),(0,i._)("div",W,[(0,i.Wm)(I,{height:"200px"})]),(0,i._)("div",D,[(0,i.Wm)(I,{height:"200px"})]),(0,i._)("div",P,[(0,i.Wm)(I,{height:"200px"})]),(0,i._)("div",Z,[(0,i.Wm)(I,{height:"200px"})]),(0,i._)("div",T,[(0,i.Wm)(I,{height:"200px"})]),(0,i._)("div",V,[(0,i.Wm)(I,{height:"200px"})])])),l.pages>0?((0,i.wg)(),(0,i.iD)("div",C,[(0,i.Wm)(k,{modelValue:_.currentPage,"onUpdate:modelValue":t[1]||(t[1]=e=>_.currentPage=e),max:l.pages,input:"","input-class":"text-white"},null,8,["modelValue","max"])])):(0,i.kq)("",!0)])}const U={props:{episodes:{type:Object,default:null},pages:{type:Number,default:1}},data(){return{currentPage:1,events:null}},methods:{redirectTo(e){e.taxonomy?this.$router.push({name:"season",params:{id:e.slug,name:e.name,image:e.thumbnail_url}}):e.video_url&&!e.embed_url?this.$router.push({name:"video",params:{id:e.video_url,name:e.title.rendered,movie_id:e.id,views:e.views}}):e.embed_url&&this.$router.push({name:"video",params:{id:e.embed_url,name:e.title.rendered,movie_id:e.id,views:e.views}})}},watch:{currentPage:function(e,t){this.$emit("changePage",e)}}};var I=l(1639),$=l(996),H=l(4458),L=l(335),N=l(7133),S=l(9984),z=l.n(S);const A=(0,I.Z)(U,[["render",j]]),Q=A;z()(U,"components",{QPagination:$.Z,QCard:H.Z,QImg:L.Z,QSkeleton:N.ZP})}}]);