"use strict";(self["webpackChunktopbocce_app"]=self["webpackChunktopbocce_app"]||[]).push([[920],{1529:(e,t,i)=>{i.d(t,{Z:()=>$});var s=i(9835),a=i(1957),o=i(6970);const r={class:"carousel-x-padding"},l={key:0,class:"q-ma-lg"},n={class:"q-mb-sm text-white text-bold"},d=(0,s._)("br",null,null,-1),u={class:"text-subtitle2"},c=(0,s.Uk)(" Guarda tutti "),m={style:{margin:"5% 10% 5% 10%"},class:"text-white text-center"},p=["innerHTML"],y={key:1,class:"q-my-xs text-bold"},h={key:1};function v(e,t,i,v,g,w){const f=(0,s.up)("router-link"),k=(0,s.up)("swiper-slide"),b=(0,s.up)("swiper"),_=(0,s.up)("skeleton-carousel");return(0,s.wg)(),(0,s.iD)("main",r,[i.content?((0,s.wg)(),(0,s.iD)("div",l,[(0,s.Wm)(a.uT,{appear:"","enter-active-class":"animated fadeInUp"},{default:(0,s.w5)((()=>[(0,s._)("h4",n,[(0,s.Uk)((0,o.zw)(i.title)+" ",1),d,(0,s._)("span",u,[(0,s.Wm)(f,{to:{name:"view-all-episodes"},style:{"text-decoration":"none",color:"grey"}},{default:(0,s.w5)((()=>[c])),_:1})])])])),_:1}),(0,s.Wm)(b,{modules:v.modules,"space-between":20,navigation:"",breakpoints:{640:{slidesPerView:3},1200:{slidesPerView:4}}},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.content,(t=>((0,s.wg)(),(0,s.j4)(k,{style:(0,o.j5)(`background-image: url('${t.thumbnail_url}'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));`),class:(0,o.C_)(["carousel-bg-sm",t.video_url?"":"avaliability"]),key:t.id,onClick:i=>e.$router.push({name:"video",params:{id:t.video_url,sport:t.movie_genre[0],name:t.title.rendered}})},{default:(0,s.w5)((()=>[(0,s.Wm)(f,{class:"column justify-center focusable link-style",to:{name:"video",params:{id:t.video_url||null,sport:t.movie_genre[0],name:t.title.rendered}}},{default:(0,s.w5)((()=>[(0,s._)("div",m,[t.title.rendered?((0,s.wg)(),(0,s.iD)("h6",{key:0,class:"q-my-xs text-bold",innerHTML:t.title.rendered},null,8,p)):t.title?((0,s.wg)(),(0,s.iD)("h6",y,(0,o.zw)(t.title),1)):(0,s.kq)("",!0)])])),_:2},1032,["to"])])),_:2},1032,["style","class","onClick"])))),128))])),_:1},8,["modules"])])):((0,s.wg)(),(0,s.iD)("div",h,[(0,s.Wm)(_)]))])}var g=i(7847),w=i(5291),f=i(2009);const k={props:["title","content"],components:{Swiper:w.tq,SwiperSlide:w.o5,SkeletonCarousel:f.Z},setup(){return{modules:[g.W_,g.tl,g.LW,g.s5]}}};var b=i(1639);const _=(0,b.Z)(k,[["render",v]]),$=_},2009:(e,t,i)=>{i.d(t,{Z:()=>p});var s=i(9835);const a={class:"q-ma-lg"},o={class:"q-gutter-md q-mt-lg"};function r(e,t){const i=(0,s.up)("q-skeleton");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("div",o,[(0,s.Wm)(i,{height:"50px"}),(0,s.Wm)(i,{height:"200px"})])])}var l=i(1639),n=i(7133),d=i(9984),u=i.n(d);const c={},m=(0,l.Z)(c,[["render",r]]),p=m;u()(c,"components",{QSkeleton:n.ZP})},8920:(e,t,i)=>{i.r(t),i.d(t,{default:()=>k});i(702);var s=i(9835),a=i(6970);const o={width:"400",height:"300",style:{width:"100%",height:"100vh"},ref:"videoPlayer"},r=["src"],l={class:"time text-white"};function n(e,t,i,n,d,u){const c=(0,s.up)("q-icon"),m=(0,s.up)("q-page-sticky"),p=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(p,null,{default:(0,s.w5)((()=>[(0,s._)("video",o,[d.videoUrl?((0,s.wg)(),(0,s.iD)("source",{key:0,src:d.videoUrl[0].link,type:"video/mp4"},null,8,r)):(0,s.kq)("",!0)],512),(0,s.Wm)(m,{position:"bottom",offset:[0,35]},{default:(0,s.w5)((()=>[(0,s._)("button",{class:"btn-style focusable q-mx-sm",onClick:t[0]||(t[0]=t=>e.$router.go(-1))},[(0,s.Wm)(c,{name:"close"})]),(0,s._)("button",{class:"player-style focusable q-mx-sm",onClick:t[1]||(t[1]=t=>e.$refs.videoPlayer.currentTime=e.$refs.videoPlayer.currentTime-10)},[(0,s.Wm)(c,{name:"fast_rewind"})]),d.isPlaying?((0,s.wg)(),(0,s.iD)("button",{key:1,class:"player-style focusable q-mx-sm",onClick:t[3]||(t[3]=(...e)=>u.pauseVideo&&u.pauseVideo(...e))},[(0,s.Wm)(c,{name:"pause"})])):((0,s.wg)(),(0,s.iD)("button",{key:0,class:"player-style focusable q-mx-sm",onClick:t[2]||(t[2]=(...e)=>u.playVideo&&u.playVideo(...e))},[(0,s.Wm)(c,{name:"play_arrow"})])),(0,s._)("button",{class:"player-style focusable q-mx-sm",onClick:t[4]||(t[4]=t=>e.$refs.videoPlayer.currentTime=e.$refs.videoPlayer.currentTime+10)},[(0,s.Wm)(c,{name:"fast_forward"})])])),_:1}),(0,s._)("div",l,(0,a.zw)(d.currentVideoTime)+" / "+(0,a.zw)(d.videoDuration),1)])),_:1})}var d=i(9981),u=i.n(d),c=i(1529);const m={components:{EpisodesCarousel:c.Z},data(){return{isPlaying:!1,videoUrl:null,likeThis:null,currentVideoTime:"00:00:00",videoDuration:"00:00:00"}},mounted(){this.$refs.videoPlayer.onplay=()=>{let e=this.$refs.videoPlayer.duration,t=new Date(1e3*e).toISOString().slice(11,19);this.videoDuration=t},this.$refs.videoPlayer.ontimeupdate=()=>{let e=this.$refs.videoPlayer.currentTime,t=new Date(1e3*e).toISOString().slice(11,19);this.currentVideoTime=t},!this.$route.params.id&&this.$route.params.sport&&this.$router.push("/");const e={headers:{Authorization:"Bearer 1f8cc8e07ec1c276249d1bae95eb697d"}};u().get(`https://fast-peak-73010.herokuapp.com/https://api.vimeo.com/videos/${this.$route.params.id}`,e).then((e=>{this.videoUrl=e.data.files.filter((e=>"hd"==e.quality))})),this.$api.get(`/wp/v2/movie?movie_genre=${this.$route.params.sport}`).then((e=>{this.likeThis=e.data}))},methods:{playVideo(){this.isPlaying=!0,this.$refs.videoPlayer.play()},pauseVideo(){this.isPlaying=!1,this.$refs.videoPlayer.pause()}}};var p=i(1639),y=i(9885),h=i(627),v=i(2857),g=i(9984),w=i.n(g);const f=(0,p.Z)(m,[["render",n],["__scopeId","data-v-04d72aae"]]),k=f;w()(m,"components",{QPage:y.Z,QPageSticky:h.Z,QIcon:v.Z})}}]);