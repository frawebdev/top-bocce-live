"use strict";(self["webpackChunktopbocce_app"]=self["webpackChunktopbocce_app"]||[]).push([[743],{857:(e,s,a)=>{a.r(s),a.d(s,{default:()=>u});var t=a(9835);function p(e,s,a,p,o,i){const n=(0,t.up)("sport-banner"),d=(0,t.up)("episodes-grid"),g=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(g,null,{default:(0,t.w5)((()=>[(0,t.Wm)(n,{title:"Episodi"}),(0,t.Wm)(d,{episodes:o.episodes,pages:o.episodesPages,onChangePage:i.getNPage},null,8,["episodes","pages","onChangePage"])])),_:1})}var o=a(6583),i=a(2975);const n={components:{SportBanner:o.Z,EpisodesGrid:i.Z},data(){return{episodes:{},episodesPages:0,filteredEpisodes:{}}},async mounted(){this.episodes=await this.$api.get("/wp/v2/movie").then((e=>(this.episodesPages=parseInt(e.headers["x-wp-totalpages"]),e.data))).catch((e=>console.log(e)))},methods:{async getNPage(e){this.episodes=null,this.episodes=await this.$api.get(`/wp/v2/movie?page=${e}`).then((e=>e.data))}}};var d=a(1639),g=a(9885),r=a(9984),c=a.n(r);const h=(0,d.Z)(n,[["render",p]]),u=h;c()(n,"components",{QPage:g.Z})}}]);