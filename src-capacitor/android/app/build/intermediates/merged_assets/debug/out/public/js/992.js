"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[992],{4392:(e,t,s)=>{s.d(t,{Z:()=>p});var a=s(8613),o=s(5304),i=s(5339);const n={class:"banner-text"};function l(e,t,s,l,c,d){return(0,a.wg)(),(0,a.iD)("div",{class:"banner flex flex-center text-white",style:(0,o.j5)("background-image: url('https://www.topbocce.live/wp-content/uploads/2022/05/BANNER-1-1024x576-1.png'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)); background-position: center; background-size: cover; background-blend-mode: overlay;")},[(0,a.Wm)(i.uT,{appear:"","enter-active-class":"animated fadeInUp"},{default:(0,a.w5)((()=>[(0,a._)("h4",n,(0,o.zw)(s.title),1)])),_:1})],4)}const c={props:["title"]};var d=s(2815);const r=(0,d.Z)(c,[["render",l],["__scopeId","data-v-168db60c"]]),p=r},996:(e,t,s)=>{s.d(t,{Z:()=>Q});var a=s(8613),o=s(5304);const i={class:"q-ma-md"},n={class:"q-pa-md flex flex-center"},l={key:0,class:"row q-col-gutter-md"},c={class:"absolute-bottom column justify-center",style:{height:"100%"}},d={key:0},r=["innerHTML"],p={key:1},m={class:"text-h6 text-center"},u={key:2,class:"text-center text-grey"},g={key:1,class:"row q-col-gutter-md"},h={class:"col-12 col-sm-6 col-md-4"},v={class:"col-12 col-sm-6 col-md-4"},w={class:"col-12 col-sm-6 col-md-4"},_={class:"col-12 col-sm-6 col-md-4"},x={class:"col-12 col-sm-6 col-md-4"},b={class:"col-12 col-sm-6 col-md-4"},k={class:"col-12 col-sm-6 col-md-4"},f={class:"col-12 col-sm-6 col-md-4"};function y(e,t,s,y,P,W){const q=(0,a.up)("q-pagination"),Z=(0,a.up)("q-img"),C=(0,a.up)("q-card"),D=(0,a.up)("q-skeleton");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",n,[(0,a.Wm)(q,{modelValue:P.currentPage,"onUpdate:modelValue":t[0]||(t[0]=e=>P.currentPage=e),max:s.pages,input:"","input-class":"text-white"},null,8,["modelValue","max"])]),s.episodes?((0,a.wg)(),(0,a.iD)("div",l,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.episodes,(e=>((0,a.wg)(),(0,a.j4)(C,{class:"my-card col-12 col-sm-6 col-md-4 bg-transparent",key:e.id,onClick:t=>W.redirectTo(e)},{default:(0,a.w5)((()=>[(0,a.Wm)(Z,{src:e.thumbnail_url,class:(0,o.C_)(["bg-grey",e.video_url||e.name?"":"avaliability"])},{default:(0,a.w5)((()=>[(0,a._)("div",c,[(0,a._)("div",null,[e.title?((0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("div",{class:"text-h6 text-center",innerHTML:e.title.rendered},null,8,r)])):(0,a.kq)("",!0),e.name?((0,a.wg)(),(0,a.iD)("div",p,[(0,a._)("div",m,(0,o.zw)(e.name),1)])):(0,a.kq)("",!0),e.video_url||e.name?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",u," Non disponibile "))])])])),_:2},1032,["src","class"])])),_:2},1032,["onClick"])))),128))])):((0,a.wg)(),(0,a.iD)("div",g,[(0,a._)("div",h,[(0,a.Wm)(D,{height:"200px"})]),(0,a._)("div",v,[(0,a.Wm)(D,{height:"200px"})]),(0,a._)("div",w,[(0,a.Wm)(D,{height:"200px"})]),(0,a._)("div",_,[(0,a.Wm)(D,{height:"200px"})]),(0,a._)("div",x,[(0,a.Wm)(D,{height:"200px"})]),(0,a._)("div",b,[(0,a.Wm)(D,{height:"200px"})]),(0,a._)("div",k,[(0,a.Wm)(D,{height:"200px"})]),(0,a._)("div",f,[(0,a.Wm)(D,{height:"200px"})])]))])}const P={props:{episodes:{type:Object,default:null},pages:{type:Number,default:1}},data(){return{currentPage:1}},methods:{redirectTo(e){e.taxonomy?this.$router.push({name:"season",params:{id:e.slug,name:e.name,image:e.thumbnail_url}}):e.video_url&&this.$router.push({name:"video",params:{id:e.video_url,sport:e.episode_sport,name:e.title.rendered}})}},watch:{currentPage:function(e,t){this.$emit("changePage",e)}}};var W=s(2815),q=s(3466),Z=s(7960),C=s(85),D=s(7443),N=s(8150),$=s.n(N);const j=(0,W.Z)(P,[["render",y]]),Q=j;$()(P,"components",{QPagination:q.Z,QCard:Z.Z,QImg:C.Z,QSkeleton:D.ZP})},6992:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var a=s(8613);function o(e,t,s,o,i,n){const l=(0,a.up)("sport-banner"),c=(0,a.up)("episodes-grid"),d=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(l,{title:"Episodi"}),(0,a.Wm)(c,{episodes:i.episodes,pages:i.episodesPages,onChangePage:n.getNPage},null,8,["episodes","pages","onChangePage"])])),_:1})}var i=s(4392),n=s(996);const l={components:{SportBanner:i.Z,EpisodesGrid:n.Z},data(){return{episodes:{},episodesPages:0,filteredEpisodes:{}}},async mounted(){this.episodes=await this.$api.get("/wp/v2/movie").then((e=>(this.episodesPages=parseInt(e.headers["x-wp-totalpages"]),e.data))).catch((e=>console.log(e)))},methods:{async getNPage(e){this.episodes=null,this.episodes=await this.$api.get(`/wp/v2/movie?page=${e}`).then((e=>e.data))}}};var c=s(2815),d=s(6611),r=s(8150),p=s.n(r);const m=(0,c.Z)(l,[["render",o]]),u=m;p()(l,"components",{QPage:d.Z})}}]);