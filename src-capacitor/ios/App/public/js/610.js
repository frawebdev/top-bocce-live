"use strict";(self["webpackChunktopbocce_app"]=self["webpackChunktopbocce_app"]||[]).push([[610],{3983:(e,t,i)=>{i.d(t,{Z:()=>$});var s=i(9835),o=i(1957),r=i(6970);const l={class:"carousel-x-padding"},n={key:0,class:"q-ma-lg"},a={class:"q-mb-sm text-white text-bold"},d=(0,s._)("br",null,null,-1),u={class:"view-all-text"},c=(0,s.Uk)(" Guarda tutti "),m={style:{margin:"5% 10% 5% 10%"},class:"text-white text-center"},p=["innerHTML"],y={key:1,class:"q-my-xs text-bold"},h={key:1};function v(e,t,i,v,w,g){const f=(0,s.up)("router-link"),k=(0,s.up)("swiper-slide"),_=(0,s.up)("swiper"),b=(0,s.up)("skeleton-carousel");return(0,s.wg)(),(0,s.iD)("main",l,[i.content?((0,s.wg)(),(0,s.iD)("div",n,[(0,s.Wm)(o.uT,{appear:"","enter-active-class":"animated fadeInUp"},{default:(0,s.w5)((()=>[(0,s._)("h4",a,[(0,s.Uk)((0,r.zw)(i.title)+" ",1),d,(0,s._)("span",u,[(0,s.Wm)(f,{to:{name:"view-all-episodes"},style:{"text-decoration":"none",color:"grey"}},{default:(0,s.w5)((()=>[c])),_:1})])])])),_:1}),(0,s.Wm)(_,{modules:v.modules,"space-between":20,navigation:"",breakpoints:{640:{slidesPerView:3},1200:{slidesPerView:4}}},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.content,(t=>((0,s.wg)(),(0,s.j4)(k,{style:(0,r.j5)(`background-image: url('${t.thumbnail_url}'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));`),class:(0,r.C_)(["carousel-bg-sm",t.video_url?"":"avaliability"]),key:t.id,onClick:i=>e.$router.push({name:"video",params:{id:t.video_url,sport:t.movie_genre[0],name:t.title.rendered}}),onKeyup:e=>g.remoteClick(e,t.video_url,t.movie_genre[0],t.title.rendered)},{default:(0,s.w5)((()=>[(0,s.Wm)(f,{class:"column justify-center focusable link-style",to:{name:"video",params:{id:t.video_url||null,sport:t.movie_genre[0],name:t.title.rendered}}},{default:(0,s.w5)((()=>[(0,s._)("div",m,[t.title.rendered?((0,s.wg)(),(0,s.iD)("h6",{key:0,class:"q-my-xs text-bold",innerHTML:t.title.rendered},null,8,p)):t.title?((0,s.wg)(),(0,s.iD)("h6",y,(0,r.zw)(t.title),1)):(0,s.kq)("",!0)])])),_:2},1032,["to"])])),_:2},1032,["style","class","onClick","onKeyup"])))),128))])),_:1},8,["modules"])])):((0,s.wg)(),(0,s.iD)("div",h,[(0,s.Wm)(b)]))])}var w=i(7847),g=i(5291),f=i(2009);const k={props:["title","content"],components:{Swiper:g.tq,SwiperSlide:g.o5,SkeletonCarousel:f.Z},methods:{remoteClick(e,t,i,s){13===e.keyCode&&(alert(e.keyCode),this.$router.push({name:"video",params:{id:t,sport:i,name:s}}))}},setup(){return{modules:[w.W_,w.tl,w.LW,w.s5]}}};var _=i(1639);const b=(0,_.Z)(k,[["render",v]]),$=b},2009:(e,t,i)=>{i.d(t,{Z:()=>p});var s=i(9835);const o={class:"q-ma-lg"},r={class:"q-gutter-md q-mt-lg"};function l(e,t){const i=(0,s.up)("q-skeleton");return(0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("div",r,[(0,s.Wm)(i,{height:"50px"}),(0,s.Wm)(i,{height:"200px"})])])}var n=i(1639),a=i(7133),d=i(9984),u=i.n(d);const c={},m=(0,n.Z)(c,[["render",l]]),p=m;u()(c,"components",{QSkeleton:a.ZP})},4610:(e,t,i)=>{i.r(t),i.d(t,{default:()=>k});i(702);var s=i(9835),o=i(6970);const r=["controls"],l=["src"],n={key:2,class:"time text-white"};function a(e,t,i,a,d,u){const c=(0,s.up)("q-icon"),m=(0,s.up)("q-page-sticky"),p=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(p,null,{default:(0,s.w5)((()=>[(0,s._)("video",{width:"400",height:"300",style:{width:"100%",height:"100vh"},ref:"videoPlayer",controls:d.screenSize<1500},[d.videoUrl?((0,s.wg)(),(0,s.iD)("source",{key:0,src:d.videoUrl[0].link,type:"video/mp4"},null,8,l)):(0,s.kq)("",!0)],8,r),d.screenSize>1500?((0,s.wg)(),(0,s.j4)(m,{key:0,position:"bottom",offset:[0,35]},{default:(0,s.w5)((()=>[(0,s._)("button",{class:"btn-style focusable q-mx-sm",onClick:t[0]||(t[0]=t=>e.$router.go(-1))},[(0,s.Wm)(c,{name:"close"})]),(0,s._)("button",{class:"player-style focusable q-mx-sm",onClick:t[1]||(t[1]=t=>e.$refs.videoPlayer.currentTime=e.$refs.videoPlayer.currentTime-10)},[(0,s.Wm)(c,{name:"fast_rewind"})]),d.isPlaying?((0,s.wg)(),(0,s.iD)("button",{key:1,class:"player-style focusable q-mx-sm",onClick:t[3]||(t[3]=(...e)=>u.pauseVideo&&u.pauseVideo(...e))},[(0,s.Wm)(c,{name:"pause"})])):((0,s.wg)(),(0,s.iD)("button",{key:0,class:"player-style focusable q-mx-sm",onClick:t[2]||(t[2]=(...e)=>u.playVideo&&u.playVideo(...e))},[(0,s.Wm)(c,{name:"play_arrow"})])),(0,s._)("button",{class:"player-style focusable q-mx-sm",onClick:t[4]||(t[4]=t=>e.$refs.videoPlayer.currentTime=e.$refs.videoPlayer.currentTime+10)},[(0,s.Wm)(c,{name:"fast_forward"})])])),_:1})):((0,s.wg)(),(0,s.j4)(m,{key:1,position:"top-right",offset:[18,18]},{default:(0,s.w5)((()=>[(0,s._)("button",{class:"btn-style focusable q-mx-sm",onClick:t[5]||(t[5]=t=>e.$router.go(-1))},[(0,s.Wm)(c,{name:"close"})])])),_:1})),d.screenSize>1500?((0,s.wg)(),(0,s.iD)("div",n,(0,o.zw)(d.currentVideoTime)+" / "+(0,o.zw)(d.videoDuration),1)):(0,s.kq)("",!0)])),_:1})}var d=i(9981),u=i.n(d),c=i(3983);const m={components:{EpisodesCarousel:c.Z},data(){return{isPlaying:!1,videoUrl:null,likeThis:null,currentVideoTime:"00:00:00",videoDuration:"00:00:00",screenSize:null}},mounted(){this.screenSize=window.innerWidth,window.addEventListener("resize",(()=>{this.screenSize=window.innerWidth})),this.$refs.videoPlayer.onplay=()=>{let e=this.$refs.videoPlayer.duration,t=new Date(1e3*e).toISOString().slice(11,19);this.videoDuration=t},this.$refs.videoPlayer.ontimeupdate=()=>{let e=this.$refs.videoPlayer.currentTime,t=new Date(1e3*e).toISOString().slice(11,19);this.currentVideoTime=t},!this.$route.params.id&&this.$route.params.sport&&this.$router.push("/");const e={headers:{Authorization:"Bearer 1f8cc8e07ec1c276249d1bae95eb697d"}};u().get(`https://api.vimeo.com/videos/${this.$route.params.id}`,e).then((e=>{this.videoUrl=e.data.files.filter((e=>"hd"==e.quality))})),this.$api.get(`/wp/v2/movie?movie_genre=${this.$route.params.sport}`).then((e=>{this.likeThis=e.data}))},methods:{playVideo(){this.isPlaying=!0,this.$refs.videoPlayer.play()},pauseVideo(){this.isPlaying=!1,this.$refs.videoPlayer.pause()}}};var p=i(1639),y=i(9885),h=i(627),v=i(2857),w=i(9984),g=i.n(w);const f=(0,p.Z)(m,[["render",a],["__scopeId","data-v-71fd1856"]]),k=f;g()(m,"components",{QPage:y.Z,QPageSticky:h.Z,QIcon:v.Z})}}]);