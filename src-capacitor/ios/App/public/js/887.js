"use strict";(self["webpackChunktopbocce_app"]=self["webpackChunktopbocce_app"]||[]).push([[887],{8936:(e,s,a)=>{a.r(s),a.d(s,{default:()=>u});var t=a(9835);function p(e,s,a,p,n,o){const i=(0,t.up)("sport-banner"),d=(0,t.up)("episodes-grid"),g=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(g,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,{title:"Stagioni"}),(0,t.Wm)(d,{episodes:n.episodes,pages:n.episodesPages,onChangePage:o.getNPage},null,8,["episodes","pages","onChangePage"])])),_:1})}var n=a(6583),o=a(2035);const i={components:{SportBanner:n.Z,EpisodesGrid:o.Z},data(){return{episodes:null,episodesPages:0,filteredEpisodes:null}},async mounted(){this.episodes=await this.$api.get("/wp/v2/movie_genre").then((e=>(this.episodesPages=parseInt(e.headers["x-wp-totalpages"]),e.data))).catch((e=>console.log(e)))},methods:{async getNPage(e){this.episodes=null,this.episodes=await this.$api.get(`/wp/v2/movie_genre?page=${e}`).then((e=>e.data))}}};var d=a(1639),g=a(9885),r=a(9984),l=a.n(r);const c=(0,d.Z)(i,[["render",p]]),u=c;l()(i,"components",{QPage:g.Z})}}]);