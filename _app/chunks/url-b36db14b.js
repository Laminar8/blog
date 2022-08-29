import{S,i as w,s as x,e as m,t as d,k as C,c as u,a as b,h as g,m as I,d as p,b as _,g as A,G as l,n as f}from"./index-ec910556.js";const v=s=>{const e=s.split(" ");for(let t=0;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);return e.join(" ")},y=(s,e)=>s.replaceAll("	".repeat(e),""),L={_2022:{_07:{_14:{tag:["Blog","Information"],title:v("5 Reasons to start my blog"),lastUpdate:"2022/08/21",status:["Published"],image:{src:"https://user-images.githubusercontent.com/52372569/184529071-3d88e019-0a4c-48c5-8245-3ef0cc3ea8cd.png",alt:"Woman Jogging"}}},_08:{_23:{tag:["Blog","Information","Svelte","HTML","CSS"],title:v("Time spent completing the first post: 1 Month"),lastUpdate:"2022/08/29",status:["In progress"],image:{src:"https://user-images.githubusercontent.com/52372569/186199281-0358ffca-d144-431d-a152-82ea4691e343.png",alt:"SP, Brasil"},codeHighlight:{scss:[{fileName:"app.scss",body:y(`:root {
								// Color
								--color-dark: #1f1f1f;
								--color-dark-bright: #8e8e8e;
								--color-white: #f1f1f1;
								--color-white-dark: #e1e1e1;
								--color-red: #df7861;
								--color-red-dark: #f47c7c;
								--color-yellow: #ffb562;
								--color-yellow-bright: #f8e6d1;
								--color-green: #adcf9f;
								--color-green-dark: #94b49f;
								--color-blue: #607eaa;
								--color-blue-dark: #06113c;
							}`,7)},{fileName:"tag.svelte",body:y(`.tag {
									.content {
										color: var(--color-white);
										background-color: var(--color-blue);
										border-radius: 1rem;
									}
								}`,8)}]}}}}},k=new Date().getFullYear();function B(s){let e,t,c,n,o,i;return{c(){e=m("div"),t=d("\xA9 Copyright "),c=d(k),n=C(),o=m("span"),i=d("Laminar"),this.h()},l(r){e=u(r,"DIV",{class:!0});var a=b(e);t=g(a,"\xA9 Copyright "),c=g(a,k),n=I(a),o=u(a,"SPAN",{class:!0});var h=b(o);i=g(h,"Laminar"),h.forEach(p),a.forEach(p),this.h()},h(){_(o,"class","color svelte-59dbvb"),_(e,"class","footer svelte-59dbvb")},m(r,a){A(r,e,a),l(e,t),l(e,c),l(e,n),l(e,o),l(o,i)},p:f,i:f,o:f,d(r){r&&p(e)}}}class N extends S{constructor(e){super(),w(this,e,null,B,x,{})}}const P="/blog";export{N as F,L as i,P as u};
