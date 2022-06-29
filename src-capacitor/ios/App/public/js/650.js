"use strict";(self["webpackChunktopbocce_app"]=self["webpackChunktopbocce_app"]||[]).push([[650],{5650:(e,i,r)=>{r.r(i),r.d(i,{default:()=>x});r(702);var o=r(9835),t=r(6970);const s=["src"],a={key:4,class:"time text-white"};function n(e,i,r,n,l,u){const d=(0,o.up)("q-icon"),c=(0,o.up)("q-toolbar"),m=(0,o.up)("q-header"),p=(0,o.up)("FromVimeoLink"),y=(0,o.up)("FromVimeoIframe"),f=(0,o.up)("q-page-sticky"),h=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(h,{class:"column flex-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{style:{"background-color":"transparent"}},{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o._)("button",{class:"video-back-btn q-mx-sm",onClick:i[0]||(i[0]=i=>e.$router.go(-1))},[(0,o.Wm)(d,{name:"arrow_back"})])])),_:1})])),_:1}),Array.isArray(l.videoUrl)?((0,o.wg)(),(0,o.j4)(p,{key:0,url:l.videoUrl[0].link},null,8,["url"])):l.videoUrl&&l.videoUrl.includes("vimeo")?((0,o.wg)(),(0,o.j4)(y,{key:1,url:e.$route.params.id},null,8,["url"])):l.videoUrl&&l.videoUrl.includes("youtube")?((0,o.wg)(),(0,o.iD)("iframe",{key:2,src:e.$route.params.id,frameborder:"0",allowfullscreen:"",class:"fadeInAnimation video-position"},null,8,s)):(0,o.kq)("",!0),l.screenSize>1500?((0,o.wg)(),(0,o.j4)(f,{key:3,position:"bottom",style:{"z-index":"2"},offset:[0,35]},{default:(0,o.w5)((()=>[(0,o._)("button",{class:"btn-style focusable q-mx-sm",onClick:i[1]||(i[1]=i=>e.$router.go(-1))},[(0,o.Wm)(d,{name:"close"})]),(0,o._)("button",{class:"player-style focusable q-mx-sm",onClick:i[2]||(i[2]=i=>e.$refs.videoPlayer.currentTime=e.$refs.videoPlayer.currentTime-10)},[(0,o.Wm)(d,{name:"fast_rewind"})]),l.isPlaying?((0,o.wg)(),(0,o.iD)("button",{key:1,class:"player-style focusable q-mx-sm",onClick:i[4]||(i[4]=(...e)=>u.pauseVideo&&u.pauseVideo(...e))},[(0,o.Wm)(d,{name:"pause"})])):((0,o.wg)(),(0,o.iD)("button",{key:0,class:"player-style focusable q-mx-sm",onClick:i[3]||(i[3]=(...i)=>e.playVideo&&e.playVideo(...i))},[(0,o.Wm)(d,{name:"play_arrow"})])),(0,o._)("button",{class:"player-style focusable q-mx-sm",onClick:i[5]||(i[5]=i=>e.$refs.videoPlayer.currentTime=e.$refs.videoPlayer.currentTime+10)},[(0,o.Wm)(d,{name:"fast_forward"})])])),_:1})):(0,o.kq)("",!0),l.screenSize>1500?((0,o.wg)(),(0,o.iD)("div",a,(0,t.zw)(l.currentVideoTime)+" / "+(0,t.zw)(l.videoDuration),1)):(0,o.kq)("",!0)])),_:1})}var l=r(9981),u=r.n(l),d=r(6143);const c=["controls"],m=["src"];function p(e,i,r,t,s,a){return(0,o.wg)(),(0,o.iD)("video",{class:"fadeInAnimation video-position",width:"400",height:"300",ref:"videoPlayer",controls:r.screenSize<1500},[(0,o._)("source",{src:r.url,type:"video/mp4"},null,8,m)],8,c)}const y={props:{url:{type:String,required:!0},screenSize:{type:Number,default:0}}};var f=r(1639);const h=(0,f.Z)(y,[["render",p]]),v=h,w=["src"];function b(e,i,r,t,s,a){return(0,o.wg)(),(0,o.iD)("iframe",{class:"video-responsive-item fadeInAnimation video-position",src:r.url,width:"640",height:"360",frameborder:"0",allow:"autoplay; fullscreen;",allowfullscreen:""},null,8,w)}const k={props:{url:{type:String||Boolean,required:!0}}},g=(0,f.Z)(k,[["render",b]]),$=g;r(5088);const P={components:{EpisodesCarousel:d.Z,FromVimeoLink:v,FromVimeoIframe:$},data(){return{isPlaying:!1,videoUrl:null,currentVideoTime:"00:00:00",videoDuration:"00:00:00",screenSize:null}},mounted(){this.screenSize=window.innerWidth,window.addEventListener("resize",(()=>{this.screenSize=window.innerWidth})),this.$refs.VideoPlayer&&(this.$refs.videoPlayer.onplay=()=>{let e=this.$refs.videoPlayer.duration,i=new Date(1e3*e).toISOString().slice(11,19);this.videoDuration=i},this.$refs.videoPlayer.ontimeupdate=()=>{let e=this.$refs.videoPlayer.currentTime,i=new Date(1e3*e).toISOString().slice(11,19);this.currentVideoTime=i}),!this.$route.params.id&&this.$route.params.sport&&this.$router.push("/");const e={headers:{Authorization:"Bearer 1f8cc8e07ec1c276249d1bae95eb697d"}};!this.$route.params.id||this.$route.params.id.includes("vimeo")||this.$route.params.id.includes("youtube")||this.$route.params.id.includes("watch")?this.videoUrl=this.$route.params.id:u().get(`https://fast-peak-73010.herokuapp.com/https://api.vimeo.com/videos/${this.$route.params.id}`,e).then((e=>{this.videoUrl=e.data.files.filter((e=>"hd"==e.quality))}))},methods:{YTEvent(){console.log("event")},playYTVideo(){this.isPlaying=!0,this.$refs.videoPlayer.play()},pauseVideo(){this.isPlaying=!1,this.$refs.videoPlayer.pause()}}};var q=r(9885),_=r(6602),S=r(1663),V=r(2857),z=r(627),D=r(9984),T=r.n(D);const W=(0,f.Z)(P,[["render",n],["__scopeId","data-v-60f3a4aa"]]),x=W;T()(P,"components",{QPage:q.Z,QHeader:_.Z,QToolbar:S.Z,QIcon:V.Z,QPageSticky:z.Z})}}]);