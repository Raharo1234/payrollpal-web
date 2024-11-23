import{j as a,R as c,s as F,r as y,k as O}from"./index-aadf72d3.js";import{M as u}from"./index-4cabefca.js";import{R as P,V as L,F as T,f as S,v as J,r as U}from"./companyAction-04ef37b4.js";import{N as Y}from"./NotData-00cec7df.js";import"./warning-113e5435.js";u.setAppElement("#root");const B=({isOpen:n,onRequestClose:e,onRefusing:t})=>{const r=()=>{t(),e()};return a.jsxs(u,{isOpen:n,onRequestClose:e,contentLabel:"Confirmation de refus",className:"modal",children:[a.jsx("h2",{children:"Confirmer la refus"}),a.jsx("p",{children:"Êtes-vous sûr de vouloir refuser cet élément ?"}),a.jsxs("div",{className:"justify-space-between",children:[a.jsx("button",{onClick:r,className:"btn-secondary",children:"refuser"}),a.jsx("button",{onClick:e,className:"btn-primary",children:"Annuler"})]})]})};u.setAppElement("#root");const I=({isOpen:n,onRequestClose:e,onValidation:t})=>{const r=()=>{t(),e()};return a.jsxs(u,{isOpen:n,onRequestClose:e,contentLabel:"Confirmation de validation",className:"modal",children:[a.jsx("h2",{children:"Confirmer la validation"}),a.jsx("p",{children:"Êtes-vous sûr de vouloir valider cet élément ?"}),a.jsxs("div",{className:"justify-space-between",children:[a.jsx("button",{onClick:r,className:"btn-secondary",children:"Valider"}),a.jsx("button",{onClick:e,className:"btn-primary",children:"Annuler"})]})]})},z=({key:n,item:e,validationDayDump:t,refusDayDump:r})=>{var h,f,D,j,b,g,V,v;const o=(h=e._doc)==null?void 0:h._id,i=(f=e._doc)==null?void 0:f.idPlacement,[l,s]=c.useState(!1),[d,m]=c.useState(!1),_=()=>{s(!0)},N=()=>{s(!1)},w=async()=>{try{await r(o,i)}catch(p){console.log(p)}},M=async()=>{try{await t(o,i)}catch(p){console.log(p)}},A=()=>{m(!0)},R=()=>{m(!1)},x=(D=e._doc)==null?void 0:D.isValid,k=new Date((j=e._doc)==null?void 0:j.createdAt),E=["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"][k.getMonth()];return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"card",children:[a.jsxs("div",{style:{marginBottom:"1rem"},children:[a.jsx("p",{className:"p-h3 text-center",style:{color:"black"},children:(b=e.freelanceDetails)==null?void 0:b.nom}),a.jsx("p",{className:"p-h3 text-center",children:(g=e.freelanceDetails)==null?void 0:g.prenom})]}),a.jsxs("p",{children:["Mois: ",E]}),a.jsxs("p",{children:["Nb de jours : ",(V=e._doc)==null?void 0:V.nbrDeJours]}),a.jsxs("p",{children:["Total à régler : ",(v=e._doc)==null?void 0:v.TotalARegler," Arriary"]}),x==="waiting"?a.jsxs("div",{className:"justify-space-between",style:{marginTop:"1rem"},children:[a.jsx("button",{className:"btn-secondary",style:{flex:1},onClick:A,children:"Valider les jours"}),a.jsx("button",{className:"btn-primary",style:{flex:1},onClick:_,children:"Refuser les jours"})]}):x==="valid"?a.jsx("div",{style:{marginTop:"1rem"},children:a.jsx("button",{className:"btn-secondary",style:{width:"48%",backgroundColor:"rgb(128 200 95)"},children:"jours validé"})}):a.jsx("div",{style:{marginTop:"1rem"},children:a.jsx("button",{className:"btn-secondary",style:{width:"48%",backgroundColor:"#fff9f0",color:"#fd9821"},children:"jours réfusés"})})]},n),a.jsx(B,{isOpen:l,onRequestClose:N,onRefusing:w}),a.jsx(I,{isOpen:d,onRequestClose:R,onValidation:M})]})},H=F.div`
	.row {
		display: flex;
		justify-content: start;
		align-items: stretch;
		flex-wrap: wrap;
		gap: 12px;
	}

	.card {
		box-sizing: border-box;
		padding: 20px;
		min-width: 250px;
		max-width: initial;
		width: 32%;
		flex: unset;
		background-color: white;
		border-radius: 8px;
		align-self: stretch;
		border: 1px solid #eaeaea;
	}

	@media screen and (max-width: 768px) {
		.card {
			width: 48%; /* Deux cartes par ligne sur une tablette */
		}
	}

	/* Media query pour les téléphones */
	@media screen and (max-width: 480px) {
		.card {
			width: 100%; /* Une carte par ligne sur un téléphone */
		}
	}
`,G=(n,e)=>{switch(e.type){case T:let t=0;return e.payload.map(s=>{var d;t=t+((d=s._doc)==null?void 0:d.nbrDeJours)}),{...n,dayValidity:e.payload,nrbDayValidity:t};case L:const o=n.dayValidity.map(s=>s._doc._id===e.payload._id?{...s,_doc:{...s._doc,isValid:"valid"}}:s);return{...n,dayValidity:o};case P:const l=n.dayValidity.map(s=>s._doc._id===e.payload._id?{...s,_doc:{...s._doc,isValid:"notValid"}}:s);return{...n,dayValidity:l};default:return n}},K={dayValidity:[],nrbDayValidity:0},C=y.createContext(),Q=({children:n})=>{const{data:e}=O(),{infosUsers:t}=e,r=t==null?void 0:t._id,[o,i]=y.useReducer(G,K);return c.useEffect(()=>{S(i,r)},[]),a.jsx(C.Provider,{value:{dayDumpData:o,validationDayDump:(l,s)=>J(i,l,s),refusDayDump:(l,s)=>U(i,l,s)},children:n})},W=()=>y.useContext(C),X=()=>{const{dayDumpData:n,validationDayDump:e,refusDayDump:t}=W(),{dayValidity:r}=n;return a.jsx(H,{children:a.jsx("div",{className:"row",children:r.length>0?r==null?void 0:r.map(o=>a.jsx(c.Fragment,{children:a.jsx(z,{item:o,validationDayDump:e,refusDayDump:t},o._id)},o._id)):a.jsx(Y,{})})})},na=()=>a.jsx(a.Fragment,{children:a.jsx(Q,{children:a.jsx("div",{className:"column",children:a.jsx(X,{})})})});export{na as default};
