import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const a=document.querySelector(".feedback-form"),r=document.querySelector("input"),m=document.querySelector("textarea");document.querySelector("button");const l="feedback-form-state";let e={email:"",message:""};a.addEventListener("input",t=>{e[t.target.name]=t.target.value.trim(),localStorage.setItem(l,JSON.stringify(e))});let o=localStorage.getItem(l);o&&(e=JSON.parse(o),r.value=e.email,m.value=e.message);a.addEventListener("submit",t=>{t.preventDefault(),e.email===""||e.message===""?alert("Fill please all fields"):(console.log(e),localStorage.removeItem(l),a.reset(),e={email:"",message:""})});
//# sourceMappingURL=2-form.js.map
