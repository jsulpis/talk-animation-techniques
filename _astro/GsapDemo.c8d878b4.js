import{S as O,i as P,s as $,e as o,v as L,w as u,c as n,a as i,x as N,d as r,y as v,b as l,f as U,z as t,B as W,n as Y,o as F}from"./index.da907017.js";import{g as G}from"./index.9e2476f3.js";function H(g){let a,c,x,f,d,e,m,z,p,b,D,A,q,B,_,T,E,C,y,R,I,M,V,X,j;return{c(){a=o("article"),c=o("button"),x=L("Rejouer"),f=u(),d=o("div"),e=o("div"),m=o("div"),z=u(),p=o("div"),b=u(),D=o("div"),A=u(),q=o("div"),B=u(),_=o("div"),T=u(),E=o("div"),C=u(),y=o("div"),R=u(),I=o("div"),M=u(),V=o("div"),this.h()},l(S){a=n(S,"ARTICLE",{class:!0});var h=i(a);c=n(h,"BUTTON",{class:!0});var k=i(c);x=N(k,"Rejouer"),k.forEach(r),f=v(h),d=n(h,"DIV",{id:!0,class:!0});var w=i(d);e=n(w,"DIV",{id:!0,class:!0});var s=i(e);m=n(s,"DIV",{class:!0}),i(m).forEach(r),z=v(s),p=n(s,"DIV",{class:!0}),i(p).forEach(r),b=v(s),D=n(s,"DIV",{class:!0}),i(D).forEach(r),A=v(s),q=n(s,"DIV",{class:!0}),i(q).forEach(r),B=v(s),_=n(s,"DIV",{class:!0}),i(_).forEach(r),T=v(s),E=n(s,"DIV",{class:!0}),i(E).forEach(r),C=v(s),y=n(s,"DIV",{class:!0}),i(y).forEach(r),R=v(s),I=n(s,"DIV",{class:!0}),i(I).forEach(r),M=v(s),V=n(s,"DIV",{class:!0}),i(V).forEach(r),s.forEach(r),w.forEach(r),h.forEach(r),this.h()},h(){l(c,"class","svelte-lxandq"),l(m,"class","svelte-lxandq"),l(p,"class","svelte-lxandq"),l(D,"class","svelte-lxandq"),l(q,"class","svelte-lxandq"),l(_,"class","svelte-lxandq"),l(E,"class","svelte-lxandq"),l(y,"class","svelte-lxandq"),l(I,"class","svelte-lxandq"),l(V,"class","svelte-lxandq"),l(e,"id","trans3DBoxes"),l(e,"class","svelte-lxandq"),l(d,"id","trans3DDemo"),l(d,"class","svelte-lxandq"),l(a,"class","svelte-lxandq")},m(S,h){U(S,a,h),t(a,c),t(c,x),t(a,f),t(a,d),t(d,e),t(e,m),t(e,z),t(e,p),t(e,b),t(e,D),t(e,A),t(e,q),t(e,B),t(e,_),t(e,T),t(e,E),t(e,C),t(e,y),t(e,R),t(e,I),t(e,M),t(e,V),X||(j=W(c,"click",g[0]),X=!0)},p:Y,i:Y,o:Y,d(S){S&&r(a),X=!1,j()}}}function J(g){let a;F(()=>{a=G.timeline({});var x=document.querySelector("#trans3DDemo"),f=document.querySelector("#trans3DBoxes"),d=Array.from(document.querySelectorAll("#trans3DBoxes div"));G.set(f,{transformPerspective:400,transformStyle:"preserve-3d"}),a.fromTo(x,{autoAlpha:0},{autoAlpha:1,immediateRender:!0}).to(f,{rotationY:30,rotationX:20,duration:.3}).add("z","+=0.2"),d.forEach(function(e,m){a.to(e,{z:"random(-100, 100)",duration:.2},"z")}),a.to(f,1,{rotationY:180,z:-180,ease:"power2.easeOut"},"+=0.2").to(f,1,{rotationX:180,z:-10}),d.forEach(function(e,m){a.to(e,{duration:1,z:200,backgroundColor:()=>"#"+Math.floor(Math.random()*16777215).toString(16),rotationX:"random(-360, 600)",rotationY:"random(-360, -600)",autoAlpha:0},"explode")})});function c(){a.progress()===1?a.restart():a.play()}return[c]}class Z extends O{constructor(a){super(),P(this,a,J,H,$,{})}}export{Z as default};
