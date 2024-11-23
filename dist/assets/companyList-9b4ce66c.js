import{s as w,r as R,R as m,j as e,u as M,C as L,F as N,f as P,b as _,c as k}from"./index-aadf72d3.js";import{U as O,g as U,C as I,h as T,i as V,u as $,j as Z,k as q}from"./adminAction-db5a0ba1.js";import{C as z}from"./ConfirmationDeleteModal-aa14269f.js";import{M as S}from"./index-4cabefca.js";import"./warning-113e5435.js";const B=w.div`
	td {
		text-align: end;
	}
	th {
		text-align: end;
	}
	.valide-class {
		display: inline;
		text-align: center;
		background-color: rgb(128 200 95);
		color: rgb(255 255 255);
		border-radius: 8px;
		font-weight: 700;
		padding: 5px 20px;
	}
	.inValide-class {
		display: inline;
		text-align: center;
		background-color: rgb(255 249 240);
		color: rgb(253 142 10);
		font-weight: 700;
		border-radius: 8px;
		padding: 5px 20px;
	}
	.content-btn-action {
		display: flex;
		flex-direction: row;
		justify-content: end;
		gap: 12px;
	}
	.freelance-class {
		text-align: center;
		background-color: rgb(128 200 95);
		color: rgb(255 255 255);
		border-radius: 8px;
		font-weight: 700;
		padding: 2px 2px;
	}
	.company-class {
		text-align: center;
		background-color: rgb(255 249 240);
		color: rgb(253 142 10);
		font-weight: 700;
		border-radius: 8px;
		padding: 2px 2px;
	}
	button {
		font-size: 1rem;
		color: #8b8585;
		border: 1px solid #eaeaea;
		border-radius: 8px;
		padding: 10px;
		background-color: white;
	}
`,Y=(s,t)=>{switch(t.type){case T:const a=s.companyList.filter(n=>n._id!==t.payload.userId);return{...s,companyList:a,nbrCompany:s.nbrCompany-1};case I:return{...s,companyList:[...s.companyList,t.payload.result],nbrCompany:s.nbrCompany+1};case U:return{...s,companyList:t.payload.result,nbrCompany:t.payload.result.length};case O:const o=s.companyList.map(n=>n._id===t.payload.user._id?t.payload.user:n);return{...s,companyList:o};default:return s}},W={companyList:[],nbrCompany:0},E=R.createContext(),H=({children:s})=>{const[t,a]=R.useReducer(Y,W);return m.useEffect(()=>{V(a)},[]),e.jsx(E.Provider,{value:{data:t,updateUserCompany:(o,n)=>$(a,o,n),deleteUserCompany:(o,n)=>Z(a,o,n),createNewCompany:o=>q(a,o)},children:s})},v=()=>R.useContext(E);S.setAppElement("#root");const f=[{label:"Étape 1",fields:["raisonSocial","adresseDeLEntreprise","numeroDIdentificationFiscal"]},{label:"Information Representant",fields:["nomDuRepresentant","prenomDuRepresentant","emailDuRepresentant","telRepresentant","adresseDuRepresentant"]}],G=({isOpen:s,onRequestClose:t,item:a})=>{const{updateUserCompany:o}=v(),[n,p]=m.useState(0),[i,u]=m.useState(!1),{control:d,handleSubmit:j,formState:{errors:h,isValid:c},trigger:b}=M({mode:"onChange"}),y={raisonSocial:"raisonSocial",adresseDeLEntreprise:"adresseEntreprise",numeroDIdentificationFiscal:"numeroIdentificationFiscale",nomDuRepresentant:"nomRepresentant",prenomDuRepresentant:"prenomRepresentant",emailDuRepresentant:"emailRepresentant",telRepresentant:"telRepresentant",adresseDuRepresentant:"adresseRepresentant"},A=async()=>{n+1<=f.length&&await b(f[n].fields)&&p(x=>x+1)},r=()=>{n>0&&p(n-1)},g=async l=>{const x={};try{u(!0);for(const C in l)y[C]?x[y[C]]=l[C]:x[C]=l[C];await o(a._id,x),u(!1)}catch(C){console.log(C)}t()};return e.jsxs(S,{isOpen:s,onRequestClose:t,contentLabel:"Confirmation d'acceptation",className:"modal",children:[e.jsx("p",{className:"p-h1",children:"Modification"}),e.jsx("p",{className:"p-h3 text-center",children:"Modifier vos informations"}),e.jsxs("form",{onSubmit:j(g),children:[f[n].fields.map(l=>e.jsxs("div",{className:"auth-input-container",children:[e.jsx("p",{className:`p-label ${h[l]?"p-error":""}`,children:l.replace(/([A-Z])/g," $1").trim()}),e.jsx(L,{name:l,control:d,defaultValue:a[y[l]]||"",rules:{required:"Ce champ est requis",...l==="emailDuRepresentant"&&{pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"Ce champ doit être une adresse e-mail valide"}},...l.includes("motDePasse")&&{minLength:8,validate:isPasswordValid},...l==="confirmationDeMotDePasse"&&{validate:isPasswordMatch}},render:({field:x})=>e.jsxs(e.Fragment,{children:[e.jsx("input",{type:x.type||"text",className:`input ${h[l]?"input-error":""}`,...x}),h[l]&&e.jsx("span",{className:"p-error",children:h[l].message})]})})]},l)),e.jsx("button",{type:"button",onClick:n===f.length-1?j(g):A,className:"btn-secondary",children:i?e.jsx(e.Fragment,{children:"Changement ..."}):e.jsx(e.Fragment,{children:n===f.length-1?"Modifier":"Continuer"})}),e.jsx("button",{type:"button",className:"btn-primary",onClick:r,children:"Retour"})]})]})},F=({item:s})=>{const{deleteUserCompany:t}=v(),[a,o]=m.useState(!1),[n,p]=m.useState(!1),i=()=>{p(!0)},u=()=>{p(!1)},d=()=>{o(!0)},j=()=>{o(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"start"},children:s.raisonSocial}),e.jsxs("td",{children:[s.representantNom," ",s.representantPrenom]}),e.jsx("td",{children:s.representantEmail}),e.jsx("td",{children:e.jsx("div",{className:s.isEmailConfirmed?"valide-class":"unValide-class",children:s.isEmailConfirmed?"validé":"non validé"})}),e.jsxs("td",{className:"content-btn-action",children:[e.jsx("button",{onClick:d,children:e.jsx(N,{icon:P})}),e.jsx("button",{onClick:i,children:e.jsx(N,{icon:_})})]})]},s._id),e.jsx(z,{isOpen:a,onRequestClose:j,onDelete:()=>t(s._id,s.roles)}),e.jsx(G,{isOpen:n,onRequestClose:u,item:s})]})},J=()=>{const{data:s}=v(),{companyList:t}=s,[a,o]=R.useState(""),[n,p]=R.useState([]);return e.jsx(B,{children:e.jsxs("div",{className:"content-table",children:[e.jsx("div",{className:"row",style:{justifyContent:"space-between",gap:"2%"},children:e.jsx("p",{className:"p-h3",children:"Listes de toutes les entreprises"})}),e.jsx("div",{className:"table-container",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{textAlign:"start"},children:"Raison sociale"}),e.jsx("th",{children:"Nom et Prénom"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:a===""?t.length!==0?t.map(i=>e.jsx(m.Fragment,{children:e.jsx(F,{item:i},i._id)},i._id)):e.jsx("tr",{children:e.jsx("td",{colSpan:5,children:e.jsx("p",{className:"p-h3 text-center",style:{fontSize:"0.85rem"},children:"Aucune donnée disponible"})})}):n.length>0?n.map(i=>e.jsx(F,{item:i},i._id)):e.jsx("td",{colspan:5,children:e.jsx("p",{className:"p-h3 text-center",style:{fontSize:"0.85rem"},children:"Aucune entreprise trouvée."})})})]})})]})})};S.setAppElement("#root");const D=[{label:"Étape 1",fields:["raisonSocial","adresseDeLEntreprise","numeroDIdentificationFiscal"]},{label:"Information Representant",fields:["nomDuRepresentant","prenomDuRepresentant","emailDuRepresentant","téléphoneDuRepresentant","adresseDuRepresentant"]}],K=({isOpen:s,onRequestClose:t,onSubmit:a,isLoading:o})=>{const[n,p]=m.useState(0);m.useState("");const{control:i,handleSubmit:u,formState:{errors:d,isValid:j},trigger:h,getValues:c}=M({mode:"onChange"}),b=async()=>{n+1<=D.length&&await h(D[n].fields)&&p(g=>g+1)},y=()=>{n>0&&p(n-1)},A=r=>{a(r),t()};return e.jsx(S,{isOpen:s,onRequestClose:t,contentLabel:"Confirmation d'acceptation",className:"modal",children:e.jsxs("div",{className:"column",children:[e.jsxs("div",{className:"column",children:[e.jsx("p",{className:"p-h2",children:"Inscription Entreprise Simplifiée"}),e.jsx("p",{className:"p-h3 text-center",style:{color:"rgb(73 73 78)"},children:"Un processus d'inscription rapide pour lancer votre aventure professionnelle sans tracas."})]}),e.jsxs("form",{onSubmit:u(A),children:[D[n].fields.map(r=>e.jsxs("div",{className:"auth-input-container",children:[e.jsx("p",{className:`p-label ${d[r]?"p-error":""}`,children:r.replace(/([A-Z])/g," $1").trim()}),e.jsx(L,{name:r,control:i,rules:{required:"Ce champ est requis",...r==="emailDuRepresentant"&&{pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"Ce champ doit être une adresse e-mail valide"}},...r.includes("motDePasse")&&{minLength:8,validate:isPasswordValid},...r==="confirmationDeMotDePasse"&&{validate:isPasswordMatch}},render:({field:g})=>e.jsxs(e.Fragment,{children:[e.jsx("input",{type:r==="motDePasse"||r==="confirmationDeMotDePasse"?"password":r==="dateDeNaissance"?"date":"text",className:`input ${d[r]?"input-error":""}`,...g}),d[r]&&e.jsx("span",{className:"p-error",children:d[r].message})]})})]},r)),e.jsxs("div",{className:"column",style:{marginTop:"20px"},children:[e.jsx("button",{type:"button",onClick:n===D.length-1?u(a):b,className:"btn-secondary",children:o?e.jsx(e.Fragment,{children:"Changement ..."}):e.jsx(e.Fragment,{children:n===D.length-1?"S'inscrire":"Continuer"})}),e.jsx("button",{type:"button",className:"btn-primary",onClick:y,children:"Retour"})]})]})]})})},Q=()=>{const{data:s,createNewCompany:t}=v(),{nbrCompany:a}=s,[o,n]=m.useState(!1),[p,i]=m.useState(!1),u=c=>({raisonSocial:c.raisonSocial||"",adresseEntreprise:c.adresseDeLEntreprise||"",numeroIdentificationFiscale:c.numeroDIdentificationFiscal||"",nomRepresentant:c.nomDuRepresentant||"",prenomRepresentant:c.prenomDuRepresentant||"",emailRepresentant:c.emailDuRepresentant||"",telRepresentant:c.téléphoneDuRepresentant||"",adresseRepresentant:c.adresseDuRepresentant||""}),d=async c=>{const b=u(c);try{n(!0),await t(b),n(!1),i(!1)}catch(y){n(!1),console.log(y)}},j=()=>{i(!0)},h=()=>{i(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"justify-space-between",style:{alignItems:"stretch"},children:[e.jsxs("div",{className:"card",style:{backgroundColor:"rgb(255 249 240)",maxWidth:"initial"},children:[e.jsxs("p",{className:"p-h3",style:{color:"#ff8a00"},children:[e.jsx(N,{icon:k})," À connaître"]}),e.jsx("p",{className:"p",children:"Boostez votre entreprise avec FreelPay : des talents freelance, des solutions professionnelles"})]}),e.jsxs("div",{className:"card",style:{maxWidth:"initial"},children:[e.jsx("p",{className:"p-h3-secondary",children:"Nombre des entreprise"}),e.jsxs("div",{className:"row-btn-2",children:[e.jsx("p",{className:"p-indicateur-secondary",children:a}),e.jsx("button",{className:"btn-secondary",onClick:j,children:"Creer un entreprise"})]})]})]}),e.jsx(K,{isLoading:o,isOpen:p,onRequestClose:h,onSubmit:d})]})},ae=()=>e.jsx(H,{children:e.jsxs("div",{className:"column",children:[e.jsx(Q,{}),e.jsx(J,{})]})});export{ae as default};
