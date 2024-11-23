import{r as j,R as c,j as e,s as A,F as b,f as F,a as D}from"./index-aadf72d3.js";import{D as R,S as _,F as U,a as g,b as L,f as T,c as S,d as v,s as O,e as I}from"./adminAction-db5a0ba1.js";import{C as w}from"./ConfirmationDeleteModal-aa14269f.js";import"./index-4cabefca.js";import"./warning-113e5435.js";const M=(s,n)=>{var a,o,t,i,d;switch(n.type){case L:const l=(a=n.payload)==null?void 0:a.filter(r=>r.roles==="ROLES_FREELANCE"),f=n.payload.filter(r=>r.roles==="ROLES_COMPANY");return{...s,notTouchUsersdata:n.payload,allUsers:n.payload,nbrFreelance:l.length,nbrCompany:f.length};case g:const E=(o=s.notTouchUsersdata)==null?void 0:o.filter(r=>r.roles==="ROLES_FREELANCE");return{...s,allUsers:E||[]};case U:const N=(t=s.notTouchUsersdata)==null?void 0:t.filter(r=>r.roles==="ROLES_COMPANY");return{...s,allUsers:N};case _:return{...s,allUsers:s.notTouchUsersdata};case R:const{userId:u,userRoles:p}=n.payload;let m=s.nbrCompany,x=s.nbrFreelance;p==="ROLES_FREELANCE"?x=x-1:m=m-1;const y=(i=s.notTouchUsersdata)==null?void 0:i.filter(r=>r._id!==u&&r.roles===p),C=(d=s.allUsers)==null?void 0:d.filter(r=>r._id!==u&&r.roles===p);return{...s,allUsers:C,notTouchUsersdata:y,nbrCompany:m,nbrFreelance:x};default:return s}},P={notTouchUsersdata:[],allUsers:[],nbrFreelance:0,nbrCompany:0},h=j.createContext(),k=({children:s})=>{const[n,a]=j.useReducer(M,P);return c.useEffect(()=>{T(a)},[]),e.jsx(h.Provider,{value:{data:n,filterDataInFreelance:()=>S(a),filterDataInCompany:()=>v(a),seeAllData:()=>O(a),deleteUser:(o,t)=>I(a,o,t)},children:s})},Y=()=>{const{data:s,filterDataInFreelance:n,filterDataInCompany:a}=c.useContext(h);return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"justify-space-between",children:[e.jsxs("div",{className:"card",style:{maxWidth:"initial"},children:[e.jsx("p",{className:"p-h3",children:"Nombre des Freelances"}),e.jsxs("div",{className:"row-btn-2",children:[e.jsx("p",{className:"p-indicateur-primary",children:s.nbrFreelance}),e.jsx("button",{className:"btn-primary",onClick:n,children:"Filtrer le tableau"})]})]}),e.jsxs("div",{className:"card",style:{maxWidth:"initial"},children:[e.jsx("p",{className:"p-h3-secondary",children:"Nombre des entreprises"}),e.jsxs("div",{className:"row-btn-2",children:[e.jsx("p",{className:"p-indicateur-secondary",children:s.nbrCompany}),e.jsx("button",{className:"btn-secondary",onClick:a,children:"Filtrer le tableau"})]})]})]})})},z=A.div`
	td {
		text-align: end;
	}
	th {
		text-align: end;
	}
	.content-btn-action {
		display: flex;
		flex-direction: row;
		justify-content: end;
		gap: 12px;
	}
	.freelance-class {
		display: inline;
		text-align: center;
		background-color: rgb(128 200 95);
		color: rgb(255 255 255);
		border-radius: 8px;
		font-weight: 700;
		padding: 5px 20px;
	}
	.company-class {
		display: inline;
		text-align: center;
		background-color: rgb(255 249 240);
		color: rgb(253 142 10);
		font-weight: 700;
		border-radius: 8px;
		padding: 5px 20px;
	}
	button {
		font-size: 1rem;
		color: #8b8585;
		border: 1px solid #eaeaea;
		border-radius: 8px;
		padding: 10px;
		background-color: white !important;
	}
`,W=({data:s,openDeleteModalOpen:n})=>e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"start"},children:s.nom?s.nom:s.representantNom}),e.jsx("td",{children:s.prenom?s.prenom:s.representantPrenom}),e.jsx("td",{children:s.email?s.email:s.representantEmail}),e.jsx("td",{children:e.jsx("div",{className:s.roles==="ROLES_FREELANCE"?"freelance-class":"company-class",children:s.roles==="ROLES_FREELANCE"?"Freelance":"Company"})}),e.jsxs("td",{className:"content-btn-action",children:[e.jsx("button",{onClick:n,children:e.jsx(b,{icon:F})}),e.jsx("button",{children:e.jsx(b,{icon:D})})]})]},s.id),$=()=>{const{data:s,seeAllData:n,deleteUser:a}=c.useContext(h),[o,t]=c.useState(!1),i=()=>{t(!0)},d=()=>{t(!1)};return e.jsx(z,{children:e.jsxs("div",{className:"content-table",children:[e.jsxs("div",{className:"justify-space-between",children:[e.jsx("p",{className:"p-title-table",children:"Listes de toutes les utilisateurs"}),e.jsx("p",{className:"p-a",onClick:n,children:"Voir tous"})]}),e.jsx("div",{className:"table-container",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{name:"Nom",style:{textAlign:"start"},children:"Nom"}),e.jsx("th",{name:"Prénom",children:"Prénom"}),e.jsx("th",{name:"Email",children:"Email"}),e.jsx("th",{name:"Rôles",children:"Rôles"}),e.jsx("th",{name:"Actions",children:"Actions"})]})}),e.jsx("tbody",{children:s.allUsers.length>0?s.allUsers.map(l=>e.jsxs(c.Fragment,{children:[e.jsx(W,{data:l,openDeleteModalOpen:i},`table_${l._id}`),e.jsx(w,{isOpen:o,onRequestClose:d,onDelete:()=>a(l._id,l.roles)},`modal_${l._id}`)]},l._id)):e.jsx("tr",{children:e.jsx("td",{colSpan:5,children:e.jsx("p",{className:"p-h3 text-center",style:{fontSize:"0.85rem"},children:"Aucune donnée disponible"})})})})]})})]})})},J=()=>e.jsx(k,{children:e.jsxs("div",{className:"column",children:[e.jsx(Y,{}),e.jsx($,{})]})});export{J as default};
