import{r as i,j as e,M as n,a,d,B as c}from"./index-72c0ec7f.js";import{T as m}from"./TermsServiceText-b7a6553a.js";const b=()=>{const[t,o]=i.useState(!0),[s,r]=i.useState(!1);return e(n,{isOpen:t,onClose:!1,children:a(d,{className:"age-verification-disclaimer-modal",title:"Terms",color:"#fff500",footer:a("div",{className:"age-verification-disclaimer-modal__actions",children:[e(c,{className:"btn--light-green btn--full",disabled:!s,onClick:()=>{o(!1)},children:"I confirm, I'm over 18."}),e(c,{className:"btn--warning btn--full",onClick:()=>{window.location.href="https://www.mrdapps.com"},children:"Exit"})]}),children:[e(m,{}),a("div",{className:"age-verification-disclaimer-modal__terms-checkbox-wrapper",children:[e("input",{className:"age-verification-disclaimer-modal__terms-checkbox",type:"checkbox",onChange:l=>{r(l.target.checked)},checked:s}),e("label",{htmlFor:"termsCheckbox",children:"I've understood the terms."})]})]})})};export{b as default};