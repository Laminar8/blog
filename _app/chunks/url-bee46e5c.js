import{S as k,i as w,s as x,e as u,t as d,k as C,c as b,a as _,h as g,m as A,d as p,b as v,g as I,G as l,n as f}from"./index-ec910556.js";const h=s=>{const e=s.split(" ");for(let t=0;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);return e.join(" ")},S=(s,e)=>s.replaceAll("	".repeat(e),""),D={_2022:{_07:{_14:{tag:["Blog","Information"],title:h("5 Reasons to start my blog"),lastUpdate:"2022/08/21",status:["Published"],image:{src:"https://user-images.githubusercontent.com/52372569/184529071-3d88e019-0a4c-48c5-8245-3ef0cc3ea8cd.png",alt:"Woman Jogging"}}},_08:{_23:{tag:["Blog","Information","Svelte","SCSS"],title:h("Time spent completing the first post: 1 Month"),lastUpdate:"2022/08/31",status:["Published"],image:{src:"https://user-images.githubusercontent.com/52372569/186199281-0358ffca-d144-431d-a152-82ea4691e343.png",alt:"SP, Brasil"},codeHighlight:{scss:[{fileName:"app.scss",body:S(`:root {
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
							}`,7)},{fileName:"tag.svelte",body:S(`.tag {
									.content {
										color: var(--color-white);
										background-color: var(--color-blue);
										border-radius: 1rem;
									}
								}`,8)}]}}},_09:{_01:{tag:["Slack","AWS","RDS"],title:h("Subscribe to Amazon RDS notification with Slack"),lastUpdate:"2022/09/01",status:["In progress"],image:{src:"https://user-images.githubusercontent.com/52372569/186199281-0358ffca-d144-431d-a152-82ea4691e343.png",alt:"SP, Brasil"}}}}},y=new Date().getFullYear();function P(s){let e,t,c,i,o,n;return{c(){e=u("div"),t=d("\xA9 Copyright "),c=d(y),i=C(),o=u("span"),n=d("Laminar"),this.h()},l(r){e=b(r,"DIV",{class:!0});var a=_(e);t=g(a,"\xA9 Copyright "),c=g(a,y),i=A(a),o=b(a,"SPAN",{class:!0});var m=_(o);n=g(m,"Laminar"),m.forEach(p),a.forEach(p),this.h()},h(){v(o,"class","color svelte-59dbvb"),v(e,"class","footer svelte-59dbvb")},m(r,a){I(r,e,a),l(e,t),l(e,c),l(e,i),l(e,o),l(o,n)},p:f,i:f,o:f,d(r){r&&p(e)}}}class U extends k{constructor(e){super(),w(this,e,null,P,x,{})}}const F="/blog";export{U as F,D as i,F as u};
