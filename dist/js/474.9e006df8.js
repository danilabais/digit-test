"use strict";(self["webpackChunkdigit_test"]=self["webpackChunkdigit_test"]||[]).push([[474],{34:function(s,t,e){e.d(t,{Z:function(){return _}});var a=e(252);const i={class:"loader__wrapper"},r=(0,a._)("div",{class:"lds-roller"},[(0,a._)("div"),(0,a._)("div"),(0,a._)("div"),(0,a._)("div"),(0,a._)("div"),(0,a._)("div"),(0,a._)("div"),(0,a._)("div")],-1),n=[r];function o(s,t){return(0,a.wg)(),(0,a.iD)("div",i,n)}var l=e(744);const u={},c=(0,l.Z)(u,[["render",o]]);var _=c},474:function(s,t,e){e.r(t),e.d(t,{default:function(){return ss}});var a=e(252);const i={key:1};function r(s,t,e,r,n,o){const l=(0,a.up)("LoaderIcon"),u=(0,a.up)("UserData"),c=(0,a.up)("UserPosts"),_=(0,a.up)("UserPublication"),d=(0,a.up)("NavigationControl");return(0,a.wg)(),(0,a.iD)(a.HY,null,[o.loading?((0,a.wg)(),(0,a.j4)(l,{key:0})):(0,a.kq)("",!0),o.loading?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(u,{user:n.user},null,8,["user"]),(0,a.Wm)(c,{posts:n.posts},null,8,["posts"]),(0,a.Wm)(_),(0,a.Wm)(d,{onChangePage:o.changePage},null,8,["onChangePage"])]))],64)}var n=e(577);const o={class:"user-data"},l={class:"container"},u={key:0,class:"user-data__wrapper"},c={class:"user-data__name"},_={class:"user-data__info user-data__info--border"},d=(0,a._)("div",{class:"user-data__hr"},null,-1),p=(0,a._)("div",{class:"user-data__hr"},null,-1),v=(0,a._)("div",{class:"user-data__btn-wrap"},[(0,a._)("button",{class:"user-data__message card-profile__link"}," Написать сообщение "),(0,a._)("div",{class:"user-data__hr user-data__hr--white"}),(0,a._)("button",{class:"user-data__suggest card-profile__link"}," Предложить сходить на концерт ")],-1),h={class:"user-data__info user-data__info--space"},g=(0,a._)("div",{class:"user-data__hr"},null,-1),w=(0,a._)("div",{class:"user-data__hr"},null,-1);function m(s,t,e,i,r,m){return(0,a.wg)(),(0,a.iD)("section",o,[(0,a._)("div",l,[e.user?((0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("div",c,(0,n.zw)(e.user.name),1),(0,a._)("ul",_,[(0,a._)("li",null,(0,n.zw)(e.user.address.city),1),d,(0,a._)("li",null,(0,n.zw)(e.user.email),1),p,(0,a._)("li",null,(0,n.zw)(e.user.phone.split(" ")[0]),1),v]),(0,a._)("ul",h,[(0,a._)("li",null,(0,n.zw)(e.user.website),1),g,(0,a._)("li",null,(0,n.zw)(e.user.company.name),1),w,(0,a._)("li",null,(0,n.zw)(e.user.company.bs),1)])])):(0,a.kq)("",!0)])])}var f={props:{user:Object}},b=e(744);const k=(0,b.Z)(f,[["render",m]]);var P=k;const y={key:0,class:"user-posts"},U={class:"container"},D=(0,a._)("h2",{class:"user-posts__title about__title"},"Посты",-1),z={class:"user-posts__wrapper"},$={class:"user-posts__posts-header"},C={class:"user-posts__posts-title"},Z=(0,a._)("span",{class:"user-posts__post-date"}," 12.01.22 ",-1),j={class:"user-posts__text"},W=(0,a.Uk)(" Детальная страница ");function q(s,t,e,i,r,o){const l=(0,a.up)("router-link");return e.posts?((0,a.wg)(),(0,a.iD)("section",y,[(0,a._)("div",U,[D,(0,a._)("div",z,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.posts.slice(0,2),(s=>((0,a.wg)(),(0,a.iD)("div",{class:"user-posts__post",key:s.id},[(0,a._)("div",$,[(0,a._)("h4",C,(0,n.zw)(s.title),1),Z]),(0,a._)("div",j,(0,n.zw)(s.body),1),(0,a.Wm)(l,{to:"/more-info/"+s.id,class:"user-posts__all-posts card-profile__link"},{default:(0,a.w5)((()=>[W])),_:2},1032,["to"])])))),128))])])])):(0,a.kq)("",!0)}var x={props:{posts:Object}};const I=(0,b.Z)(x,[["render",q]]);var F=I;const H={class:"public container"},L=(0,a.uE)('<h2 class="public__title about__title">Публикации</h2><div class="public__wrap"><div class="public__img"></div><div class="public__img"></div><div class="public__img"></div><div class="public__img"></div><div class="public__img"></div><div class="public__img"></div></div>',2),N=[L];function O(s,t){return(0,a.wg)(),(0,a.iD)("section",H,N)}const Y={},E=(0,b.Z)(Y,[["render",O]]);var K=E,A=e(34),B=e(963);const G={class:"navigation container"};function J(s,t,e,i,r,n){return(0,a.wg)(),(0,a.iD)("div",G,[(0,a.wy)((0,a._)("button",{class:"card-profile__link",onClick:t[0]||(t[0]=s=>n.changePage("prev"))}," Предыдущий участник ",512),[[B.F8,1!==+this.$route.params.id]]),(0,a.wy)((0,a._)("button",{class:"navigation__next card-profile__link",onClick:t[1]||(t[1]=s=>n.changePage("next"))}," Следующий участник ",512),[[B.F8,10!==+this.$route.params.id]])])}var M={methods:{changePage(s){this.$emit("changePage",s)}}};const Q=(0,b.Z)(M,[["render",J]]);var R=Q,S=e(669),T=e.n(S),V={mounted(){this.fetchUser(),this.fetchUserPosts()},data(){return{user:null,posts:null,currentPage:+this.$route.params.id}},methods:{async fetchUser(){this.user=(await T().get("https://jsonplaceholder.typicode.com/users/"+this.$route.params.id)).data},async fetchUserPosts(){this.posts=(await T().get("https://jsonplaceholder.typicode.com/posts?userId="+this.$route.params.id)).data},async changePage(s){this.currentPage=this.$route.params.id,"next"==s&&await this.$router.push("/user/"+ ++this.currentPage),"prev"==s&&await this.$router.push("/user/"+--this.currentPage),await this.fetchUserPosts(),await this.fetchUser()}},computed:{loading(){return!this.user&&!this.posts}},components:{UserData:P,UserPosts:F,UserPublication:K,LoaderIcon:A.Z,NavigationControl:R}};const X=(0,b.Z)(V,[["render",r]]);var ss=X}}]);
//# sourceMappingURL=474.9e006df8.js.map