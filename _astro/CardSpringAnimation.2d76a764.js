import{S as m,i as u,s as d,e as _,v as f,c as h,a as y,x as b,d as c,b as o,f as v,z as g,B as x,n as p,D as C}from"./index.da907017.js";import{s as $}from"./index.44562af8.js";function k(r){let t,l,s,a,i;return{c(){t=_("button"),l=f("Clique !"),this.h()},l(e){t=h(e,"BUTTON",{style:!0,class:!0});var n=y(t);l=b(n,"Clique !"),n.forEach(c),this.h()},h(){o(t,"style",s=`transform: translateX(${r[0]}px)`),o(t,"class","card primary svelte-1wk6am3")},m(e,n){v(e,t,n),g(t,l),a||(i=x(t,"click",r[2]),a=!0)},p(e,[n]){n&1&&s!==(s=`transform: translateX(${e[0]}px)`)&&o(t,"style",s)},i:p,o:p,d(e){e&&c(t),a=!1,i()}}}function S(r,t,l){let s,a=$(-300,{stiffness:.03,damping:.1});return C(r,a,e=>l(0,s=e)),[s,a,()=>a.set(-1*s)]}class B extends m{constructor(t){super(),u(this,t,S,k,d,{})}}export{B as default};