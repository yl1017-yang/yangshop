(function(){"use strict";var t={6132:function(t,e,n){var s=n(9242),i=n(3396);function a(t,e,n,s,a,r){const o=(0,i.up)("Header"),c=(0,i.up)("router-view"),l=(0,i.up)("Footer");return(0,i.wg)(),(0,i.iD)("main",null,[(0,i.Wm)(o),(0,i.Wm)(c),(0,i.Wm)(l)])}const r={class:"header"},o={class:"inner"},c={class:"header_content"},l={class:"logo"},u=(0,i.Uk)("YANG"),p=(0,i._)("span",null,"SHOP",-1),d=(0,i.uE)('<div class="util"><a href="#">로그인</a><a href="#">회원가입</a><a href="#">마이페이지</a><a href="#">주문/배송조회</a><a href="#">장바구니</a></div>',1),g={class:"header_gnb"},_=(0,i._)("div",{class:"category"}," 전체상품 ",-1),m={class:"nav"},h=(0,i.Uk)("새거상품"),f=(0,i.Uk)("제일 잘나가"),v=(0,i.Uk)("기획전/이벤트"),b=(0,i.Uk)("선물하숑");function w(t,e,n,s,a,w){const y=(0,i.up)("router-link"),D=(0,i.up)("Search");return(0,i.wg)(),(0,i.iD)("header",r,[(0,i._)("div",o,[(0,i._)("section",c,[(0,i._)("h1",l,[(0,i.Wm)(y,{to:"/yangshop/"},{default:(0,i.w5)((()=>[u,p])),_:1})]),(0,i.Wm)(D,{keyword:n.searchWord},null,8,["keyword"]),d]),(0,i._)("section",g,[_,(0,i._)("nav",m,[(0,i.Wm)(y,{to:"/yangshop/NewProduct"},{default:(0,i.w5)((()=>[h])),_:1}),(0,i.Wm)(y,{to:"/yangshop/BestProduct"},{default:(0,i.w5)((()=>[f])),_:1}),(0,i.Wm)(y,{to:"/yangshop/Event"},{default:(0,i.w5)((()=>[v])),_:1}),(0,i.Wm)(y,{to:"/yangshop/Gift"},{default:(0,i.w5)((()=>[b])),_:1})])])])])}const y={class:"search"},D=(0,i._)("div",{class:"search_inner"},[(0,i._)("input",{type:"text",placeholder:"양샵에 검색해주셔요",maxlength:"30"}),(0,i._)("button",{type:"button",class:"btn_search"},[(0,i._)("span",{class:"blind"},"검색")])],-1),k=[D];function P(t,e,n,s,a,r){return(0,i.wg)(),(0,i.iD)("div",y,k)}var C={name:"App"},$=n(89);const E=(0,$.Z)(C,[["render",P]]);var j=E,z={name:"App",components:{Search:j},props:{searchWord:{type:String,default:null}}};const U=(0,$.Z)(z,[["render",w]]);var A=U;const F={class:"footer"},R=(0,i.uE)('<div class="inner"><section class="footer_content"><p>YANG<span>SHOP</span> VUE 3.0</p><p>https://yl1017-yang.github.io/yangshop/</p><p style="font-size:12px;"> 참고공부<br> https://junyharang.tistory.com/295<br> https://github.com/leeasher/shoppingmall_project/blob/master/client/src/store.js<br> https://jinyisland.kr/post/vuex/<br> https://rintiantta.github.io/jpub-vue/guide/chapter9.html#s52-%EB%84%A4%EC%8A%A4%ED%8A%B8%EB%90%98%EC%96%B4-%EC%9E%88%EB%8A%94-%EB%B3%B5%EC%9E%A1%ED%95%9C-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B0<br> 노드js+게시판 : https://chb2005.tistory.com/36?category=988522 </p></section></div>',1),x=[R];function O(t,e,n,s,a,r){return(0,i.wg)(),(0,i.iD)("section",F,x)}var B={name:"App"};const T=(0,$.Z)(B,[["render",O]]);var L=T,W={name:"App",title:"Main",components:{Header:A,Footer:L},data(){return{}}};const S=(0,$.Z)(W,[["render",a]]);var H=S,Z=n(2483);const Y={class:"container"},q=(0,i._)("div",{class:"inner"},[(0,i._)("section",{class:"content sub_content"}," 404 에러페이지 ")],-1),M=[q];function G(t,e,n,s,a,r){return(0,i.wg)(),(0,i.iD)("section",Y,M)}var I={name:"App",components:{}};const K=(0,$.Z)(I,[["render",G]]);var N=K,V=n(7139);const J={class:"container"},Q={class:"inner"},X={class:"content"},tt={class:"content_iconBanner"},et={class:"icon"},nt=["src"],st={class:"content_bestItem"},it={class:"product_list typeBest"},at=["onClick"],rt={class:"product_img"},ot=["src"],ct={class:"tag"},lt={class:"product_info"},ut={class:"info_title"},pt={class:"info_discount"},dt=(0,i._)("span",{class:"blind"},"할인율",-1),gt=(0,i.Uk)("% "),_t={class:"info_price"},mt=(0,i._)("span",{class:"blind"},"할인가",-1),ht=(0,i.Uk)("원 "),ft={class:"info_del"},vt=(0,i._)("span",{class:"blind"},"정상가",-1),bt={class:"content_longBanner"},wt=(0,i._)("img",{src:"assets/images/main/img-longbanner.jpg",alt:""},null,-1),yt={class:"content_newItem"},Dt=(0,i._)("h2",null,"새거상품",-1),kt={key:0},Pt=(0,i._)("h5",null,"등록된 상품이 없습니다.",-1),Ct=[Pt],$t={class:"product_list type3"},Et=["onClick"],jt={class:"product_img"},zt=["src","alt"],Ut={class:"product_info"},At={class:"info_title"},Ft={class:"info_discount"},Rt=(0,i._)("span",{class:"blind"},"할인율",-1),xt=(0,i.Uk)("% "),Ot={class:"info_price"},Bt=(0,i._)("span",{class:"blind"},"할인가",-1),Tt=(0,i.Uk)("원 "),Lt={class:"info_del"},Wt=(0,i._)("span",{class:"blind"},"정상가",-1);function St(t,e,n,s,a,r){const o=(0,i.up)("swiper-slide"),c=(0,i.up)("swiper"),l=(0,i.up)("bestItem"),u=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("section",J,[(0,i.Wm)(c,(0,i.dG)(a.swipers,{modules:a.modules,class:"mainVisualSwiper",ref:"mySwiper"}),{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(3,(t=>(0,i.Wm)(o,{key:t},{default:(0,i.w5)((()=>[(0,i.Uk)((0,V.zw)(t),1)])),_:2},1024))),64))])),_:1},16,["modules"]),(0,i._)("div",Q,[(0,i._)("section",X,[(0,i._)("div",tt,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.iconBanner,((t,e)=>((0,i.wg)(),(0,i.iD)("a",{href:"#",key:e},[(0,i._)("div",et,[(0,i._)("img",{src:t.icon,alt:""},null,8,nt)]),(0,i._)("span",null,(0,V.zw)(t.title),1)])))),128))]),(0,i._)("div",st,[(0,i.Wm)(l),(0,i._)("ul",it,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.ProductList.slice(0,2),((t,e)=>((0,i.wg)(),(0,i.iD)("li",{class:"product_item",key:e},[(0,i._)("a",{onClick:e=>r.goToDetail(t.id)},[(0,i._)("figure",rt,[(0,i._)("img",{src:t.image,alt:""},null,8,ot)]),(0,i._)("span",ct," 0"+(0,V.zw)(e+1),1),(0,i._)("div",lt,[(0,i._)("span",ut,(0,V.zw)(t.title),1),(0,i._)("span",pt,[dt,(0,i._)("strong",null,(0,V.zw)(t.discount),1),gt]),(0,i._)("span",_t,[mt,(0,i._)("strong",null,(0,V.zw)(r.getCurrencyFormat(t.price)),1),ht]),(0,i._)("del",ft,[vt,(0,i.Uk)(" "+(0,V.zw)(r.getCurrencyFormat(t.priceRegular)),1)])])],8,at)])))),128))])]),(0,i._)("div",bt,[(0,i.Wm)(u,{to:"/yangshop/gift"},{default:(0,i.w5)((()=>[wt])),_:1})]),(0,i._)("div",yt,[Dt,0==r.ProductList?((0,i.wg)(),(0,i.iD)("div",kt,Ct)):(0,i.kq)("",!0),(0,i._)("ul",$t,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.ProductList.slice(0,9),((t,e)=>((0,i.wg)(),(0,i.iD)("li",{class:"product_item",key:e},[(0,i._)("a",{onClick:e=>r.goToDetail(t.id)},[(0,i._)("figure",jt,[(0,i._)("img",{src:t.image,alt:t.title},null,8,zt)]),(0,i._)("div",Ut,[(0,i._)("span",At,(0,V.zw)(t.title),1),(0,i._)("span",Ft,[Rt,(0,i._)("strong",null,(0,V.zw)(t.discount),1),xt]),(0,i._)("span",Ot,[Bt,(0,i._)("strong",null,(0,V.zw)(r.getCurrencyFormat(t.price)),1),Tt]),(0,i._)("del",Lt,[Wt,(0,i.Uk)(" "+(0,V.zw)(r.getCurrencyFormat(t.priceRegular)),1)])])],8,Et)])))),128))])])])])])}var Ht=n(3461),Zt=n(9231);const Yt=(0,i.Uk)(" 오늘 만 특가 "),qt=(0,i._)("span",{class:"bestItem_timer",id:"timer"},null,-1),Mt={class:"special-price__timer",ref:"timer"};function Gt(t,e,n,s,a,r){return(0,i.wg)(),(0,i.iD)("h2",null,[Yt,qt,(0,i._)("span",Mt,null,512)])}var It={name:"App",mounted(){this.setTime()},methods:{setTime(){const t=new Date("2099-12-30T00:00:00").getTime();setInterval((()=>{const e=(new Date).getTime(),n=t-e,s=Math.ceil(n%864e5/36e5),i=Math.ceil(n%36e5/6e4),a=Math.ceil(n%6e4/1e3);document.getElementById("timer").innerHTML=s+" : "+i+" : "+a}),1e3)}}};const Kt=(0,$.Z)(It,[["render",Gt]]);var Nt=Kt;Zt.ZP.use([Zt.pt,Zt.W_,Zt.tl,Zt.s5]);var Vt={name:"App",components:{Swiper:Ht.tq,SwiperSlide:Ht.o5,bestItem:Nt},data(){return{swipers:{slidesPerView:1,spaceBetween:0,centeredSlides:!0,autoplay:{delay:2e3,disableOnInteraction:!1},loop:!0,navigation:!0,pagination:{clickable:!0,type:"fraction"}},modules:[Zt.pt,Zt.tl,Zt.W_,Zt.s5],iconBanner:[{icon:"assets/images/icon/icon-banner-01.svg",title:"맛난과일"},{icon:"assets/images/icon/icon-banner-02.svg",title:"짱편한 간편식"},{icon:"assets/images/icon/icon-banner-03.svg",title:"튼튼 과자/간식"},{icon:"assets/images/icon/icon-banner-04.svg",title:"살찌는 빵"},{icon:"assets/images/icon/icon-banner-05.svg",title:"우유/유제품"},{icon:"assets/images/icon/icon-banner-06.svg",title:"고기짱"},{icon:"assets/images/icon/icon-banner-07.svg",title:"맛없는 샐러드"}]}},computed:{ProductList(){return this.$store.state.ProductList}},methods:{getCurrencyFormat(t){return this.$currencyFormat(t)},goToDetail(t){console.log("goToDetail(id)가 호출되었습니다. 상품 : id 값"+t),this.$router.push(`/yangshop/ProductDetail=${t}`)}},props:{}};const Jt=(0,$.Z)(Vt,[["render",St]]);var Qt=Jt;const Xt={class:"container"},te={class:"inner"},ee={class:"content sub_content"},ne={class:"product_top"},se={class:"detail_img"},ie=["src","alt"],ae={class:"detail_info_wrap"},re={class:"detail_info_header"},oe=(0,i.Uk)("〈"),ce=(0,i._)("span",{class:"blind"},"뒤로가기",-1),le=[oe,ce],ue={class:"detail_info_price"},pe={class:"info_del"},de=(0,i._)("span",{class:"blind"},"정상가",-1),ge={class:"info_price"},_e=(0,i._)("span",{class:"blind"},"할인가",-1),me=(0,i.Uk)("원 "),he={class:"info_discount"},fe=(0,i._)("span",{class:"blind"},"할인율",-1),ve=(0,i.Uk)("% "),be=(0,i._)("div",{class:"detail_info_content"},[(0,i._)("dl",null,[(0,i._)("dt",null,"배송정보"),(0,i._)("dd",null,"무료배송"),(0,i._)("dt",null,"혜택"),(0,i._)("dd",null,"양샵 첫 결제 10% 적립")])],-1),we={class:"detail_info_quantity"},ye={class:"info_quantity_wrap"},De=(0,i.Uk)("-"),ke=(0,i._)("span",{class:"blind"},"빼기",-1),Pe=[De,ke],Ce=(0,i.Uk)("+"),$e=(0,i._)("span",{class:"blind"},"추가",-1),Ee=[Ce,$e],je={class:"info_quantity_price"},ze=(0,i.Uk)("원"),Ue={class:"detail_info_summary"},Ae=(0,i._)("dt",null,"주문금액",-1),Fe=(0,i.Uk)("원"),Re=(0,i._)("footer",{class:"detail_info_footer"},[(0,i._)("button",{type:"button",tabindex:"0",class:"btn_detail_cart"},"장바구니"),(0,i._)("button",{type:"button",tabindex:"0",class:"btn_detail_buy"},"구매하기")],-1),xe={class:"product_content"},Oe={class:"detail_img"},Be=["src","alt"],Te=(0,i._)("p",null,"닭갈비는 막국수와 함께 춘천을 상징하는 대표적인 음식이지요. 커다란 무쇠팬에 달달 볶아낸 매콤달콤한 닭갈비의 맛은 머릿속에 그려질 듯 친근하고 익숙해요. 하지만 손수 그 맛을 구현하기란 쉽지 않지요. 컬리는 가정에서도 간편하게 춘천의 맛을 즐길 수 있도록 미트클레버의 춘천 닭갈비를 준비했습니다. 간장을 베이스로 고춧가루, 물엿 등과 곱게 간 채소로 양념을 만들어 자연스러운 감칠맛이 일품이지요. 신선한 냉장 닭을 사용했기에 잡내가 없고 살코기가 부드럽게 씹힙니다. 입맛을 당기는 붉은 빛깔과 매콤한 맛으로 자꾸만 젓가락질을 하게 돼요. 자작한 양념에 밥을 볶거나 면 사리를 넣어 든든하고 풍성한 상을 차려보세요. ",-1);function Le(t,e,n,a,r,o){return(0,i.wg)(),(0,i.iD)("section",Xt,[(0,i._)("div",te,[(0,i._)("section",ee,[(0,i._)("section",ne,[(0,i._)("figure",se,[(0,i._)("img",{src:o.ProductDetail[t.$route.params.id].image,alt:o.ProductDetail[t.$route.params.id].title},null,8,ie)]),(0,i._)("section",ae,[(0,i._)("header",re,[(0,i._)("h3",null,(0,V.zw)(o.ProductDetail[t.$route.params.id].title),1),(0,i._)("a",{onClick:e[0]||(e[0]=e=>t.$router.go(-1)),class:"btn_back"},le)]),(0,i._)("div",ue,[(0,i._)("del",pe,[de,(0,i.Uk)(" "+(0,V.zw)(o.getCurrencyFormat(o.ProductDetail[t.$route.params.id].priceRegular)),1)]),(0,i._)("span",ge,[_e,(0,i._)("strong",null,(0,V.zw)(o.getCurrencyFormat(o.ProductDetail[t.$route.params.id].price)),1),me]),(0,i._)("span",he,[fe,(0,i._)("strong",null,(0,V.zw)(o.ProductDetail[t.$route.params.id].discount),1),ve])]),be,(0,i._)("div",we,[(0,i._)("div",ye,[(0,i._)("button",{type:"button",tabindex:"0",class:"info_quantity_btn_minus",onClick:e[1]||(e[1]=t=>o.calculatePrice(-1))},Pe),(0,i.wy)((0,i._)("input",{type:"text",class:"info_quantity_number","onUpdate:modelValue":e[2]||(e[2]=t=>r.total=t)},null,512),[[s.nr,r.total]]),(0,i._)("button",{type:"button",tabindex:"0",class:"info_quantity_btn_plus",onClick:e[3]||(e[3]=t=>o.calculatePrice(1))},Ee)]),(0,i._)("span",je,[(0,i._)("em",null,(0,V.zw)(o.getCurrencyFormat(o.ProductDetail[t.$route.params.id].price)),1),ze])]),(0,i._)("div",Ue,[(0,i._)("dl",null,[Ae,(0,i._)("dd",null,[(0,i._)("em",null,(0,V.zw)(o.getCurrencyFormat(r.totalPrice)),1),Fe])])]),Re])]),(0,i._)("section",xe,[(0,i._)("figure",Oe,[(0,i._)("img",{src:o.ProductDetail[t.$route.params.id].image,alt:o.ProductDetail[t.$route.params.id].title},null,8,Be)]),(0,i._)("h4",null,(0,V.zw)(o.ProductDetail[t.$route.params.id].title),1),Te])])])])}var We={name:"App",components:{},props:{id:Number},data(){return{total:1,totalPrice:0}},created(){},methods:{getCurrencyFormat(t){return this.$currencyFormat(t)},calculatePrice(t){let e=this.total+t;e<0&&(e=0),this.total=e,this.totalPrice=this.ProductDetail.price*this.total,console.log(this.$store.state.price)}},computed:{ProductDetail(){return this.$store.state.ProductList}}};const Se=(0,$.Z)(We,[["render",Le]]);var He=Se;const Ze={class:"container"},Ye={class:"inner"},qe={class:"content sub_content"},Me={class:"content"},Ge=(0,i._)("h2",null,"새거상품",-1),Ie={class:"product_list type4"},Ke={key:0,class:"product_item"},Ne=["onClick"],Ve={class:"product_img"},Je=["src","alt"],Qe={class:"product_info"},Xe={class:"info_title"},tn={class:"info_discount"},en=(0,i._)("span",{class:"blind"},"할인율",-1),nn=(0,i.Uk)("% "),sn={class:"info_price"},an=(0,i._)("span",{class:"blind"},"할인가",-1),rn=(0,i.Uk)("원 "),on={class:"info_del"},cn=(0,i._)("span",{class:"blind"},"정상가",-1);function ln(t,e,n,s,a,r){return(0,i.wg)(),(0,i.iD)("section",Ze,[(0,i._)("div",Ye,[(0,i._)("section",qe,[(0,i._)("div",Me,[Ge,(0,i._)("span",null,"총 "+(0,V.zw)(r.ProductList.length)+"개",1),(0,i._)("ul",Ie,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.ProductList,((t,e)=>((0,i.wg)(),(0,i.iD)(i.HY,{key:e},["신상품"==t.state?((0,i.wg)(),(0,i.iD)("li",Ke,[(0,i._)("a",{onClick:e=>r.goToDetail(t.id)},[(0,i._)("figure",Ve,[(0,i._)("img",{src:t.image,alt:t.title},null,8,Je)]),(0,i._)("div",Qe,[(0,i._)("span",Xe,(0,V.zw)(t.title),1),(0,i._)("span",tn,[en,(0,i._)("strong",null,(0,V.zw)(t.discount),1),nn]),(0,i._)("span",sn,[an,(0,i._)("strong",null,(0,V.zw)(r.getCurrencyFormat(t.price)),1),rn]),(0,i._)("del",on,[cn,(0,i.Uk)(" "+(0,V.zw)(r.getCurrencyFormat(t.priceRegular)),1)])])],8,Ne)])):(0,i.kq)("",!0)],64)))),128))])])])])])}var un={name:"App",components:{},computed:{ProductList(){return this.$store.state.ProductList}},methods:{getCurrencyFormat(t){return this.$currencyFormat(t)},goToDetail(t){console.log("goToDetail(id)가 호출되었습니다. 상품 : id 값"+t),this.$router.push(`/yangshop/ProductDetail=${t}`)}}};const pn=(0,$.Z)(un,[["render",ln]]);var dn=pn;const gn={class:"container"},_n={class:"inner"},mn={class:"content sub_content"},hn={class:"content"},fn=(0,i._)("h2",null,"내가 젤 잘나가",-1),vn={class:"product_list type4"},bn={key:0,class:"product_item"},wn=["onClick"],yn={class:"product_img"},Dn=["src","alt"],kn={class:"product_info"},Pn={class:"info_tag_best"},Cn={class:"info_title"},$n={class:"info_discount"},En=(0,i._)("span",{class:"blind"},"할인율",-1),jn=(0,i.Uk)("% "),zn={class:"info_price"},Un=(0,i._)("span",{class:"blind"},"할인가",-1),An=(0,i.Uk)("원 "),Fn={class:"info_del"},Rn=(0,i._)("span",{class:"blind"},"정상가",-1);function xn(t,e,n,s,a,r){return(0,i.wg)(),(0,i.iD)("section",gn,[(0,i._)("div",_n,[(0,i._)("section",mn,[(0,i._)("div",hn,[fn,(0,i._)("span",null,"총 "+(0,V.zw)(a.cnt)+" / "+(0,V.zw)(r.totalCount)+"개",1),(0,i._)("ul",vn,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.ProductList,((t,e)=>((0,i.wg)(),(0,i.iD)(i.HY,{key:e},["베스트상품"==t.state?((0,i.wg)(),(0,i.iD)("li",bn,[(0,i._)("a",{onClick:e=>r.goToDetail(t.id)},[(0,i._)("figure",yn,[(0,i._)("img",{src:t.image,alt:t.title},null,8,Dn)]),(0,i._)("div",kn,[(0,i._)("span",Pn,(0,V.zw)(e),1),(0,i._)("span",Cn,(0,V.zw)(t.title),1),(0,i._)("span",$n,[En,(0,i._)("strong",null,(0,V.zw)(t.discount),1),jn]),(0,i._)("span",zn,[Un,(0,i._)("strong",null,(0,V.zw)(r.getCurrencyFormat(t.price)),1),An]),(0,i._)("del",Fn,[Rn,(0,i.Uk)(" "+(0,V.zw)(r.getCurrencyFormat(t.priceRegular)),1)]),(0,i.Uk)(" "+(0,V.zw)(t.state),1)])],8,wn)])):(0,i.kq)("",!0)],64)))),128))])])])])])}var On={name:"App",data(){return{cnt:0}},computed:{ProductList(){return this.$store.state.ProductList},totalCount(){return 0==this.cnt?1:Math.ceil(this.cnt/10)}},methods:{getCurrencyFormat(t){return this.$currencyFormat(t)},goToDetail(t){console.log("goToDetail(id)가 호출되었습니다. 상품 : id 값"+t),this.$router.push(`/yangshop/ProductDetail=${t}`)}}};const Bn=(0,$.Z)(On,[["render",xn]]);var Tn=Bn;const Ln={class:"container"},Wn={class:"inner"},Sn={class:"content sub_content"},Hn={class:"content_event"},Zn=(0,i._)("h2",null,"기획전/이벤트",-1),Yn={class:"event_list"},qn=["onClick"],Mn={class:"event_img"},Gn=["src"];function In(t,e,n,s,a,r){return(0,i.wg)(),(0,i.iD)("section",Ln,[(0,i._)("div",Wn,[(0,i._)("section",Sn,[(0,i._)("div",Hn,[Zn,(0,i._)("ul",Yn,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.EventList,((t,e)=>((0,i.wg)(),(0,i.iD)("li",{class:"event_item",key:e},[(0,i._)("a",{onClick:e=>r.goToDetail(t.id)},[(0,i._)("figure",Mn,[(0,i._)("img",{src:t.thumb_image,alt:""},null,8,Gn)])],8,qn)])))),128))])])])])])}var Kn={name:"App",components:{},computed:{EventList(){return this.$store.state.EventList}},methods:{goToDetail(t){console.log("goToDetail(id)가 호출되었습니다. 상품 : id 값"+t),this.$router.push(`/yangshop/EventDetail=${t}`)}}};const Nn=(0,$.Z)(Kn,[["render",In]]);var Vn=Nn;const Jn={class:"container"},Qn={class:"inner"},Xn={class:"content sub_content"},ts={class:"content_event"},es={class:"event_detail_info"},ns={class:"event_detail_img"},ss=["src","alt"];function is(t,e,n,s,a,r){return(0,i.wg)(),(0,i.iD)("section",Jn,[(0,i._)("div",Qn,[(0,i._)("section",Xn,[(0,i._)("div",ts,[(0,i._)("section",es,[(0,i._)("h3",null,(0,V.zw)(r.EventDetail[t.$route.params.id].title),1),(0,i._)("span",null,(0,V.zw)(r.EventDetail[t.$route.params.id].date),1)]),(0,i._)("figure",ns,[(0,i._)("img",{src:r.EventDetail[t.$route.params.id].image,alt:r.EventDetail[t.$route.params.id].title},null,8,ss)])])])])])}var as={name:"App",components:{},computed:{EventDetail(){return this.$store.state.EventList}}};const rs=(0,$.Z)(as,[["render",is]]);var os=rs;const cs={class:"container"},ls=(0,i._)("div",{class:"inner"},[(0,i._)("section",{class:"content sub_content"},[(0,i._)("div",{class:"content_gift"},[(0,i._)("h2",null,"선물하숑"),(0,i.Uk)(" 선물해 ")])])],-1),us=[ls];function ps(t,e,n,s,a,r){return(0,i.wg)(),(0,i.iD)("section",cs,us)}var ds={name:"App",components:{}};const gs=(0,$.Z)(ds,[["render",ps]]);var _s=gs;const ms=[{path:"/yangshop",name:Qt,component:Qt},{path:"/yangshop/ProductDetail=:id(\\d+)",name:He,component:He,props:t=>({id:Number(t.params.id)})},{path:"/yangshop/NewProduct",name:dn,component:dn},{path:"/yangshop/BestProduct",name:Tn,component:Tn},{path:"/yangshop/Event",name:Vn,component:Vn},{path:"/yangshop/EventDetail=:id(\\d+)",name:os,component:os},{path:"/yangshop/Gift",name:_s,component:_s},{path:"/:anything(.*)",component:N}],hs=(0,Z.p7)({history:(0,Z.PO)(),routes:ms});var fs=hs,vs={methods:{$base64(t){return new Promise((e=>{var n=new FileReader;n.onload=t=>e(t.target.result),n.readAsDataURL(t)}))},$currencyFormat(t,e="#,###"){if(0==t||null==t)return 0;var n=e.substring(0,1);"$"===n||"₩"===n?e=e.substring(1,e.length):n="";var s=",",i=0,a=".";-1==e.indexOf(".")?s=",":e.indexOf(",")<e.indexOf(".")?(s=",",a=".",i=e.length-e.indexOf(".")-1):(s=".",a=",",i=e.length-e.indexOf(",")-1);for(var r="",o="",c=1,l=0;l<i;l++)c*=10;var u=String(Math.round(parseFloat(t)*c)/c);u.indexOf("-")>-1&&(r="-",u=u.substring(1)),i>0&&"0"==e.substring(e.length-1,e.length)&&(u=String(parseFloat(u).toFixed(i))),i>0&&u.indexOf(".")>-1&&(o=u.substring(u.indexOf(".")),o=o.replace(".",a),u=u.substring(0,u.indexOf(".")));var p=/\D/g;u=u.replace(p,"");var d=/(\d+)(\d{3})/;while(d.test(u))u=u.replace(d,"$1"+s+"$2");return r+n+String(u)+String(o)}}},bs=n(65),ws=[{id:0,title:"워싱톤 생체리(400g내외/10R)",image:"assets/images/main/item-01.jpg",price:5680,priceRegular:6e3,discount:50,state:"일반상품"},{id:1,title:"신선한 고당도 네이블 오렌지(8개/1.5kg내외)",image:"assets/images/main/item-02.jpg",price:1e4,priceRegular:12e3,discount:35,state:"신상품"},{id:2,title:"워싱톤 생체리(400g내외/10R)",image:"assets/images/main/item-03.jpg",price:1e4,priceRegular:12e3,discount:20,state:"일반상품"},{id:3,title:"새콤달콤 오렌지",image:"assets/images/main/item-04.jpg",price:1e4,priceRegular:22e3,discount:30,state:"일반상품"},{id:4,title:"100% 순수한 딸기 2kg",image:"assets/images/main/item-05.jpg",price:8e3,priceRegular:1e4,discount:15,state:"신상품"},{id:5,title:"속이 빨간 자몽 15입(2.1kg내외)",image:"assets/images/main/item-06.jpg",price:15e3,priceRegular:25800,discount:40,state:"신상품"},{id:6,title:"워싱톤 수박주스(400g내외/10R)",image:"assets/images/main/item-07.jpg",price:5680,priceRegular:6e3,discount:50,state:"일반상품"},{id:7,title:"저탄소 GAP 스테비 골드키위 (2kg)",image:"assets/images/main/item-08.jpg",price:15e3,priceRegular:25800,discount:40,state:"신상품"},{id:8,title:"햇살담은 아오리사과 (GAP인증)",image:"assets/images/main/item-09.jpg",price:15e3,priceRegular:25800,discount:40,state:"일반상품"},{id:9,title:"테일러 유기농 프룬 (210g)",image:"assets/images/main/item-10.jpg",price:15e3,priceRegular:25800,discount:40,state:"베스트상품"},{id:10,title:"저탄소 아보카도",image:"assets/images/main/item-11.jpg",price:15e3,priceRegular:25800,discount:40,state:"베스트상품"},{id:11,title:"방울 토마토(GAP)",image:"assets/images/main/item-12.jpg",price:15e3,priceRegular:25800,discount:40,state:"베스트상품"},{id:12,title:"베리콕콕 크랜베리스콘 (55g)",image:"assets/images/main/item-10.jpg",price:15e3,priceRegular:25800,discount:40,state:"신상품"},{id:13,title:"통밀이 들어간 굿!모닝빵",image:"assets/images/main/item-07.jpg",price:5680,priceRegular:6e3,discount:50,state:"일반상품"},{id:14,title:"순두부 그라탕 매콤불닭",image:"assets/images/main/item-08.jpg",price:12e3,priceRegular:15e3,discount:22,state:"신상품"},{id:15,title:"미트칠리토마토 크로엣지피자",image:"assets/images/main/item-09.jpg",price:5e3,priceRegular:5200,discount:40,state:"베스트상품"},{id:16,title:"순두부 그라탕 클램차우더",image:"assets/images/main/item-01.jpg",price:22e3,priceRegular:21200,discount:10,state:"베스트상품"},{id:17,title:"식물성 함박스테이크",image:"assets/images/main/item-04.jpg",price:15e3,priceRegular:14e3,discount:15,state:"신상품"}],ys=[{id:0,title:"내가 제일 잘나가!! 이벤트",thumb_image:"assets/images/event/event-thumb-01.jpg",image:"assets/images/event/event-01.jpg",date:"2002-09-01"},{id:1,title:"무맛 씨.리.얼 이벤트",thumb_image:"assets/images/event/event-thumb-02.jpg",image:"assets/images/event/event-02.jpg",date:"2002-10-01"},{id:2,title:"살찌는 바게트! 이벤트",thumb_image:"assets/images/event/event-thumb-03.jpg",image:"assets/images/event/event-03.jpg",date:"2002-10-01"}];const Ds=(0,bs.MT)({state(){return{ProductList:ws,EventList:ys}}});var ks=Ds;const Ps=(0,s.ri)(H);Ps.use(fs),Ps.mixin(vs),Ps.use(ks),Ps.mount("#app")}},e={};function n(s){var i=e[s];if(void 0!==i)return i.exports;var a=e[s]={exports:{}};return t[s](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,s,i,a){if(!s){var r=1/0;for(u=0;u<t.length;u++){s=t[u][0],i=t[u][1],a=t[u][2];for(var o=!0,c=0;c<s.length;c++)(!1&a||r>=a)&&Object.keys(n.O).every((function(t){return n.O[t](s[c])}))?s.splice(c--,1):(o=!1,a<r&&(r=a));if(o){t.splice(u--,1);var l=i();void 0!==l&&(e=l)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[s,i,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,a,r=s[0],o=s[1],c=s[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(c)var u=c(n)}for(e&&e(s);l<r.length;l++)a=r[l],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},s=self["webpackChunkyangshop"]=self["webpackChunkyangshop"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(6132)}));s=n.O(s)})();
//# sourceMappingURL=app.88efc252.js.map