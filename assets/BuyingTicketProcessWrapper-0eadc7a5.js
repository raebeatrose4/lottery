import{p as f,j as e,r as s,A as M,C as D,T as F,u as R,a as n,d as P,B as T,f as j,e as H,g as L,o as q,b as W,h as $,F as A,i as Y,k as z,s as O,l as Q,H as U}from"./index-72c0ec7f.js";import{M as C}from"./MrdAmount-ce3543c6.js";import{_ as J}from"./index-29a9401b.js";const S=({style:t})=>e("div",{children:e("hr",{className:t==="dashed"?"divider dashed":"divider solid"})});S.propTypes={style:f.oneOf(["solid","dashed"])};S.defaultProps={style:"solid"};const E=({ticketAmount:t,handleTicketAmountChange:c,handleNextStep:i})=>{const{selectedReefSigner:a}=s.useContext(M),{lotteryContract:d,reefContract:l}=s.useContext(D),{totalTicketCost:r,setTotalTicketCost:g}=s.useContext(F),[y,p]=s.useState("0 MRDs");s.useEffect(()=>{l&&a&&(async()=>{const v=await l.balanceOf(a.evmAddress);p(Number(j(v,18)).toFixed(6)+" MRDs")})()},[l,a]);const{setSelectedTicketsAmount:N}=R(),h=11,_=2,w=s.useMemo(()=>r===0?r:h*t-r,[r]),m=()=>{N(t),i()};s.useEffect(()=>{d&&(async()=>{g(await H(d,t))})()},[t]);const b=[],k=Math.min(t,4);for(let o=0;o<k;o++){const v=o*5;b.push(e("div",{style:{transform:`rotate(${v}deg)`},children:e("img",{className:"step-1-ticket-quantity__ticket-icon",width:60,src:"../img/lottery-ticket.svg",alt:"Ticket"})},o))}return n(P,{className:"step-1-ticket-quantity__ticket-sale",footer:t>0?e(T,{onClick:m,className:"btn--secondary btn--full",children:r==0?"Can't buy 100+ Tickets":"Generate Your Tickets"}):null,children:[e("h2",{children:"How many tickets do you want?"}),n("div",{className:"step-1-ticket-quantity__ticket-sale-form",children:[n("div",{className:"step-1-ticket-quantity__ticket-sale-input-field-wrapper",children:[e("div",{className:"step-1-ticket-quantity__icon-wrapper",children:b}),e("input",{className:"step-1-ticket-quantity__ticket-amount-input",name:"step-1-ticket-quantity__ticket-amount",placeholder:"1",type:"number",value:t,onChange:c})]}),n("div",{className:"step-1-ticket-quantity__ticket-prize-wrapper",children:[e("div",{className:"step-1-ticket-quantity__icon-wrapper",children:e("img",{className:"drop-shadow drop-shadow--round",width:40,src:"../img/mrd-token.svg",alt:"Mrd token"})}),e("span",{className:"step-1-ticket-quantity__ticket-price-in-mrd",children:`~${h}`})]})]}),n("div",{className:"step-1-ticket-quantity__signer-mrd-balance",children:["MRD Balance:",e("span",{children:e(C,{amount:y,prefix:""})})]}),n("dl",{className:"step-1-ticket-quantity__ticket-purchase-details",children:[n("div",{className:"row",children:[e("dt",{children:"Ticket Price"}),e("dd",{children:e(C,{amount:t?h*t:h,prefix:"~"})})]}),n("div",{className:"row",children:[e("dt",{children:`${_}% Bulk Discount`}),e("dd",{children:e(C,{amount:w,prefix:"~"})})]})]}),e(S,{style:"dashed"}),e("dl",{className:"step-1-ticket-quantity__ticket-total-costs",children:n("div",{className:"row",children:[e("dt",{children:"Total Cost:"}),e("dd",{children:e(C,{amount:r,prefix:"~"})})]})})]})};E.propTypes={ticketAmount:f.number.isRequired,handleTicketAmountChange:f.func.isRequired,handleNextStep:f.func.isRequired};const K=async(t,c,i)=>{try{const a=await t.approve(c,L((i+1e3).toString(),18));return q.notify.success("Approved MRDs tokens successfully!"),a}catch(a){return console.log(a),q.notify.danger("Encountered an error in approving MRDs tokens!"),0}},I=({handleNextStep:t,handlePrevStep:c})=>{const i=s.useContext(M),[a,d]=s.useState([]),[l,r]=s.useState(10),{updateTicketsBought:g,selectedTicketsAmount:y,totalTicketCost:p}=R(),N=s.useContext(W),{reefContract:h,lotteryContract:_}=s.useContext(D),[w,m]=s.useState("Confirm And Purchase"),[b,k]=s.useState(!1);s.useEffect(()=>{o()},[]);const o=()=>{const x=$(y);d(x)};return n(P,{className:"step-2-ticket-number-gen__ticket-sale",footer:n(A,{children:[e(T,{onClick:()=>{o(),r(2)},className:"btn--light-green btn--full",children:"Regenerate Tickets"}),e(T,{onClick:async()=>{if(m("Approving REEFs"),k(!0),(await K(h,_.address,p)).hash){m("Approved MRDs"),k(!1);const u=[];a.forEach(G=>{u.push(G.number+1e6)}),m("Buying Tickets"),k(!0);const B=await Y(_);(await z(_,B,u)).hash&&(g(a.length),O(i.selectedReefSigner.evmAddress,u,i.userRns,"",B.toString(),N,p),console.log(i.selectedReefSigner.evmAddress,u,i.userRns,"",B.toString(),N,p),t(),m("Purchased"),k(!1))}else console.log("approve transaction failed")},className:"btn btn--primary btn--full",loading:b,children:w}),e(T,{onClick:()=>{c()},className:"btn--secondary btn--full",children:"Back"})]}),children:[e("h2",{children:"Your generated tickets."}),e("p",{className:"muted",children:"Numbers are randomized without duplicates."}),e("ul",{className:"step-2-ticket-number-gen__ticket-list",children:a.map((x,u)=>n("li",{className:"step-2-ticket-number-gen__ticket",children:[e("span",{className:"step-2-ticket-number-gen__ticket-index",children:`#${u+1}`}),e("div",{className:"step-2-ticket-number-gen__ticket-digits-wrapper",children:e("div",{className:"step-2-ticket-number-gen__ticket-digits-generated",children:e(J,{height:30,width:40,color:"black",duration:l,play:!0,perspective:1400,numbers:String(x.number).split("").reverse().join("")})})})]},u))}),e(S,{style:"dashed"}),e("dl",{className:"step-2-ticket-number-gen__ticket-total-costs",children:n("div",{className:"row",children:[e("dt",{children:"Total Cost:"}),e("dd",{children:e(C,{amount:p,prefix:"~"})})]})})]})};I.propTypes={handleNextStep:f.func.isRequired,handlePrevStep:f.func.isRequired};const V=()=>{const{ticketsBought:t}=R(),{toggleModal:c}=s.useContext(Q);return n(P,{className:"step-3-ticket-purchase-confirmation__ticket-sale",footer:e(A,{children:e(T,{className:"btn--primary btn--full",onClick:c,children:"Back to Home"})}),children:[e(U,{title:"Confirmed",color:"#58f78b"}),n("h2",{children:["Thank you for purchasing ",t," tickets!"]}),e("p",{className:"muted",children:"Congratulations! Your tickets have been successfully credited. Good luck! We hope one of your tickets wins!"})]})},ne=()=>{const[t,c]=s.useState(1),[i,a]=s.useState(1),d=g=>{const{value:y}=g.target;a(parseInt(y))},l=()=>{c(t+1)},r=()=>{c(t-1)};switch(t){case 1:return e(E,{ticketAmount:i,handleTicketAmountChange:d,handleNextStep:l});case 2:return e(I,{ticketAmount:i,handleTicketAmountChange:d,handleNextStep:l,handlePrevStep:r});case 3:return e(V,{});default:return null}};export{ne as default};