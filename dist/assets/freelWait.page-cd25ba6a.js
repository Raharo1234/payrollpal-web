import{s as E,r as m,R as i,j as e}from"./index-aadf72d3.js";import{l as C,V as v,m as A,n as N,v as y,o as w}from"./adminAction-db5a0ba1.js";import{C as F}from"./ConfirmationDeleteModal-aa14269f.js";import{M as x}from"./index-4cabefca.js";import{N as _}from"./NotData-00cec7df.js";import"./warning-113e5435.js";const g=E.div`
	.row {
		display: flex;
		justify-content: space-between;
		align-items: stretch;
		flex-wrap: wrap;
		gap: 20px;
	}
	.card {
		box-sizing: border-box;
		padding: 20px;
		min-width: 250px;
		max-width: initial !important;
		width: 48%;
		flex: unset !important;
		background-color: white;
		border-radius: 8px;
		align-self: stretch;
		border: 1px solid #eaeaeaea;
	}
	@media (max-width: 1200px) {
		.row {
			flex-direction: inherit;
		}
		.card {
			width: 100%;
		}
	}
`,M=(t,a)=>{switch(a.type){case A:return{...t,...a.payload.result};case v:return Object.values(t).filter(r=>r._id!==a.payload);case C:return Object.values(t).filter(r=>r._id!==a.payload);default:return t}},R=[],u=m.createContext(),W=({children:t})=>{const[a,n]=m.useReducer(M,R);return i.useEffect(()=>{N(n)},[]),e.jsx(u.Provider,{value:{freelanceData:a,validateFreelance:s=>y(n,s),deleteFreelanceWait:s=>w(n,s)},children:t})};x.setAppElement("#root");const L=({isOpen:t,onRequestClose:a,onAccept:n})=>{const s=()=>{n(),a()};return e.jsx(x,{isOpen:t,onRequestClose:a,contentLabel:"Confirmation d'acceptation",className:"modal",children:e.jsxs("div",{className:"column",style:{padding:"10px 0px"},children:[e.jsx("p",{className:"p-h2",children:"Confirmer la validation"}),e.jsx("p",{className:"p-h3 text-center",style:{color:"rgb(73 73 78)"},children:"Êtes-vous sûr de vouloir accepter cet élément ?"}),e.jsxs("div",{className:"justify-space-between",children:[e.jsx("button",{onClick:s,className:"btn-secondary",children:"Confirmer"}),e.jsx("button",{onClick:a,className:"btn-primary",children:"Annuler"})]})]})})},O=({data:t,openAcceptModal:a,closeAcceptModal:n,openDeleteModal:s,closeDeleteModal:o,isDeleteModalOpen:d,isAcceptModalOpen:r,onValidation:l,onDelete:p})=>e.jsxs("div",{className:"card",children:[e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsxs("p",{className:"p-h3 text-center",style:{color:"black"},children:[t.prenom," ",t.nom]}),e.jsxs("p",{className:"p-h3 text-center",children:[t.prenom," ",t.nom]})]}),e.jsxs("p",{children:["Nom : ",t.nom]}),e.jsxs("p",{children:["Prenom : ",t.prenom]}),e.jsxs("p",{children:["Email : ",t.email]}),e.jsxs("div",{className:"justify-space-between",style:{marginTop:"1rem"},children:[e.jsx("button",{className:"btn-secondary",onClick:a,children:"Accept"}),e.jsx("button",{className:"btn-primary",onClick:s,children:"Refuser"})]}),e.jsx(L,{isOpen:r,onRequestClose:n,onAccept:()=>l(t._id)}),e.jsx(F,{isOpen:d,onRequestClose:o,onDelete:()=>p(t._id)})]},t._id),U=()=>{const[t,a]=i.useState(!1),[n,s]=i.useState(!1),{freelanceData:o,validateFreelance:d,deleteFreelanceWait:r}=i.useContext(u),l=Object.values(o),p=async c=>{await d(c)},h=async c=>{await r(c)},f=()=>{a(!0)},j=()=>{a(!1)},D=()=>{s(!0)},b=()=>{s(!1)};return e.jsx(g,{children:e.jsx("div",{className:"row",children:l.length>0?l==null?void 0:l.map(c=>e.jsx(i.Fragment,{children:e.jsx(O,{data:c,openAcceptModal:f,closeAcceptModal:j,openDeleteModal:D,closeDeleteModal:b,isDeleteModalOpen:n,isAcceptModalOpen:t,onValidation:p,onDelete:h})},c._id)):e.jsx(_,{})})})},z=()=>e.jsx(W,{children:e.jsx(U,{})});export{z as default};
