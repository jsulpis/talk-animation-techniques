import{S as P,i as V,s as j,e as f,v as k,w as T,c as m,a as b,x as E,d as c,y as O,b as i,f as x,z as s,B,n as I,C as F,D as H}from"./index.da907017.js";import{t as J}from"./index.44562af8.js";import{c as K}from"./index.226ea5b1.js";function L(r){let t,o,p,l,u,y,N,_,U,v,d,S,g,h,$,A,n,w,C;return{c(){t=f("div"),o=f("button"),p=k("0"),l=T(),u=f("button"),y=k("25"),N=T(),_=f("button"),U=k("50"),v=T(),d=f("button"),S=k("75"),g=T(),h=f("button"),$=k("100"),A=T(),n=f("progress"),this.h()},l(a){t=m(a,"DIV",{class:!0});var e=b(t);o=m(e,"BUTTON",{class:!0});var D=b(o);p=E(D,"0"),D.forEach(c),l=O(e),u=m(e,"BUTTON",{class:!0});var R=b(u);y=E(R,"25"),R.forEach(c),N=O(e),_=m(e,"BUTTON",{class:!0});var q=b(_);U=E(q,"50"),q.forEach(c),v=O(e),d=m(e,"BUTTON",{class:!0});var z=b(d);S=E(z,"75"),z.forEach(c),g=O(e),h=m(e,"BUTTON",{class:!0});var G=b(h);$=E(G,"100"),G.forEach(c),e.forEach(c),A=O(a),n=m(a,"PROGRESS",{min:!0,max:!0,class:!0}),b(n).forEach(c),this.h()},h(){i(o,"class","svelte-1ni6a9d"),i(u,"class","svelte-1ni6a9d"),i(_,"class","svelte-1ni6a9d"),i(d,"class","svelte-1ni6a9d"),i(h,"class","svelte-1ni6a9d"),i(t,"class","container"),i(n,"min","0"),i(n,"max","100"),n.value=r[0],i(n,"class","svelte-1ni6a9d")},m(a,e){x(a,t,e),s(t,o),s(o,p),s(t,l),s(t,u),s(u,y),s(t,N),s(t,_),s(_,U),s(t,v),s(t,d),s(d,S),s(t,g),s(t,h),s(h,$),x(a,A,e),x(a,n,e),w||(C=[B(o,"click",r[2]),B(u,"click",r[3]),B(_,"click",r[4]),B(d,"click",r[5]),B(h,"click",r[6])],w=!0)},p(a,[e]){e&1&&(n.value=a[0])},i:I,o:I,d(a){a&&c(t),a&&c(A),a&&c(n),w=!1,F(C)}}}function M(r,t,o){let p;const l=J(25,{duration:800,easing:K});return H(r,l,v=>o(0,p=v)),[p,l,()=>l.set(0),()=>l.set(25),()=>l.set(50),()=>l.set(75),()=>l.set(100)]}class Y extends P{constructor(t){super(),V(this,t,M,L,j,{})}}export{Y as default};