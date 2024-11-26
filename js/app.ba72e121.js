(function(){"use strict";var e={3216:function(e,n,t){var s=t(3751),o=t(641);const r={id:"appdesign"};function a(e,n,t,s,a,i){const l=(0,o.g2)("TempApp"),c=(0,o.g2)("ChatGPT");return(0,o.uX)(),(0,o.CE)("div",r,[(0,o.bF)(l,{msg:"SWJTU International Student competition Project"}),(0,o.bF)(c)])}var i=t(33);const l={class:"hello"};function c(e,n,t,s,r,a){return(0,o.uX)(),(0,o.CE)("div",l,[(0,o.Lk)("h1",null,(0,i.v_)(t.msg),1)])}var u={name:"TempApp",props:{msg:String}},p=t(6262);const h=(0,p.A)(u,[["render",c],["__scopeId","data-v-541102ac"]]);var d=h;const g={class:"input-container"},m=["disabled"],f=["disabled"],v={class:"chat-container"},y={class:"chat-messages",ref:"messageContainer"},b={class:"message-content"};function C(e,n,t,r,a,l){return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("div",g,[(0,o.bo)((0,o.Lk)("textarea",{"onUpdate:modelValue":n[0]||(n[0]=e=>a.userInput=e),onKeyup:n[1]||(n[1]=(0,s.jR)(((...e)=>l.sendMessage&&l.sendMessage(...e)),["enter"])),placeholder:"Choose your topic to get a lesson..",disabled:a.loading},null,40,m),[[s.Jo,a.userInput]]),(0,o.Lk)("button",{onClick:n[2]||(n[2]=(...e)=>l.sendMessage&&l.sendMessage(...e)),disabled:a.loading},(0,i.v_)(a.loading?"Sending...":"Send"),9,f)]),(0,o.Lk)("div",v,[(0,o.Lk)("div",y,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.messages,((e,n)=>((0,o.uX)(),(0,o.CE)("div",{key:n,class:(0,i.C4)(["message",e.role])},[(0,o.Lk)("div",b,(0,i.v_)(e.content),1)],2)))),128))],512)])],64)}t(4114);var T=t(4335),k={name:"ChatGPT",data(){return{messages:[],userInput:"",loading:!1,apiKey:"sk-ASNY7Zgcmc66oV07WigiFoxlY3u8a1VgC9mRqXhr9XMFg4W1",apiUrl:"https://api.chatanywhere.tech/v1/chat/completions"}},methods:{getSystemMessage(e){const n=e.toLowerCase();return`You are a Chinese language teacher. Create a comprehensive Chinese language lesson plan for "${n}" following this format:\n\n        PART 1 - STORY:\n        - Create a simple story about "${n}" in chinese \n        - Use only HSK Level 3 or lower vocabulary\n        - Use basic "${n}"vocabulary\n        - Include common "${n}"expressions\n        - Format all Chinese with: Chinese characters(pinyin) - English meaning\n\n        PART 2 - COMPREHENSION QUESTIONS:\n        - Create 5 multiple-choice questions based on the story\n        - Each question should have 4 options (A, B, C, D)\n        - Mark the correct answers\n        - Questions should test understanding of both language and content\n        PART 3 - FILL IN THE GAPS:\n        - Create 5 sentences from the story with missing words\n        - Provide a word bank with all missing words\n        - Format gaps as _____ \n        - Include both Chinese characters and pinyin for word bank\n        PART 4 - VOCABULARY LIST:\n        - List all key vocabulary from the story\n        - Format: Chinese(pinyin) - English meaning\n        Keep all content simple and beginner-friendly.`},async sendMessage(e){if(("Enter"!==e.key||!e.shiftKey)&&("keyup"===e.type&&e.preventDefault(),this.userInput.trim()&&!this.loading)){this.messages.push({role:"user",content:this.userInput.trim()}),console.log(this.userInput),this.loading=!0;try{const e=await T.A.post(this.apiUrl,{model:"gpt-3.5-turbo",messages:[{role:"system",content:this.getSystemMessage(this.userInput)},...this.messages]},{headers:{Authorization:`Bearer ${this.apiKey}`,"Content-Type":"application/json"}});this.messages.push({role:"assistant",content:e.data.choices[0].message.content})}catch(n){console.error("Error:",n),this.messages.push({role:"assistant",content:"Sorry, I encountered an error. Please try again."})}finally{this.loading=!1,this.$nextTick((()=>{this.scrollToBottom()}))}this.userInput=""}},scrollToBottom(){const e=this.$refs.messageContainer;e.scrollTop=e.scrollHeight}}};const w=(0,p.A)(k,[["render",C],["__scopeId","data-v-0e348665"]]);var S=w,I={name:"app_gpt_api",components:{TempApp:d,ChatGPT:S}};const _=(0,p.A)(I,[["render",a]]);var O=_;(0,s.Ef)(O).mount("#gpt")}},n={};function t(s){var o=n[s];if(void 0!==o)return o.exports;var r=n[s]={exports:{}};return e[s].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(n,s,o,r){if(!s){var a=1/0;for(u=0;u<e.length;u++){s=e[u][0],o=e[u][1],r=e[u][2];for(var i=!0,l=0;l<s.length;l++)(!1&r||a>=r)&&Object.keys(t.O).every((function(e){return t.O[e](s[l])}))?s.splice(l--,1):(i=!1,r<a&&(a=r));if(i){e.splice(u--,1);var c=o();void 0!==c&&(n=c)}}return n}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[s,o,r]}}(),function(){t.d=function(e,n){for(var s in n)t.o(n,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,s){var o,r,a=s[0],i=s[1],l=s[2],c=0;if(a.some((function(n){return 0!==e[n]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(l)var u=l(t)}for(n&&n(s);c<a.length;c++)r=a[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(u)},s=self["webpackChunkvue_brain_lending"]=self["webpackChunkvue_brain_lending"]||[];s.forEach(n.bind(null,0)),s.push=n.bind(null,s.push.bind(s))}();var s=t.O(void 0,[504],(function(){return t(3216)}));s=t.O(s)})();
//# sourceMappingURL=app.ba72e121.js.map