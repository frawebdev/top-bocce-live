"use strict";(self["webpackChunktopbocce_app"]=self["webpackChunktopbocce_app"]||[]).push([[113],{5113:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var n=a(9835);function s(e,t,a,s,i,o){const r=(0,n.up)("season-banner"),l=(0,n.up)("q-skeleton"),u=(0,n.up)("episodes-carousel"),p=(0,n.up)("skeleton-carousel"),c=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(c,null,{default:(0,n.w5)((()=>[i.SeasonsContainer?((0,n.wg)(),(0,n.j4)(r,{key:0,image:e.thumbnail_url,title:i.name},null,8,["image","title"])):((0,n.wg)(),(0,n.j4)(l,{key:1,height:"250px"})),i.episodes?((0,n.wg)(),(0,n.j4)(u,{key:2,title:"Gli episodi",content:i.episodes},null,8,["content"])):((0,n.wg)(),(0,n.j4)(p,{key:3,class:"q-mt-xl"}))])),_:1})}var i=a(6970),o=a(1957);const r={class:"text-left text-white q-pa-md"},l={class:"banner-text"};function u(e,t,a,s,u,p){return(0,n.wg)(),(0,n.iD)("div",{class:"banner column flex-center",style:(0,i.j5)(`background-image: url(${a.image}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));`)},[(0,n._)("div",r,[(0,n.Wm)(o.uT,{appear:"","enter-active-class":"animated fadeInUp"},{default:(0,n.w5)((()=>[(0,n._)("h4",l,(0,i.zw)(a.title),1)])),_:1})])],4)}const p={props:["image","title","excerpt"]};var c=a(1639);const m=(0,c.Z)(p,[["render",u],["__scopeId","data-v-bb383fb4"]]),d=m;var h=a(5756),g=a(2009);const b={data(){return{SeasonsContainer:null,seasonsNames:[],selectedSeason:null,episodes:null,name:null,thumbnail:null}},components:{SeasonBanner:d,EpisodesCarousel:h.Z,SkeletonCarousel:g.Z},async mounted(){this.name=this.$route.params.name,this.thumbnail_url=this.$route.params.image,this.$route.params.name&&this.$route.params.image||this.$router.push("/"),this.SeasonsContainer=await this.$api.get(`/fib/v1/movie?movie_genre=${this.$route.params.id}`).then((e=>e.data));const e=this.SeasonsContainer.join();this.$api.get(`/wp/v2/movie?include=${e}`).then((e=>{this.episodes=e.data}))}};var v=a(9885),w=a(7133),k=a(9984),f=a.n(k);const $=(0,c.Z)(b,[["render",s]]),_=$;f()(b,"components",{QPage:v.Z,QSkeleton:w.ZP})}}]);