import{s as v,u as y,j as e,C as p,L as q,k as g,R as N,q as S}from"./index-aadf72d3.js";import{M as b}from"./index-4cabefca.js";import"./warning-113e5435.js";const C=v.div`
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
`,w=v.div`
	.inline-component-form {
		display: flex;
		justify-content: space-between;
		flexwrap: wrap;
		gap: 10px;
	}
	.column-content-form {
		flex: 1 1 48%;
		display: flex;
		flex-direction: column;
		justify-content: start;
	}
	.input-inline {
		width: 100%;
	}
	.no-height {
		height: 0;
		margin-top: 0;
	}
	@media (min-width: 768px) {
		.input-inline {
			width: 85%;
		}
	}
`;b.setAppElement("#root");const k=({errorRequest:i,isLoading:l,isOpen:h,onRequestClose:c,onSubmit:n,user:r})=>{const{control:t,handleSubmit:m,formState:{errors:s,isValid:j},reset:x,getValues:u}=y({mode:"onChange"}),o=()=>{const a=u();n(a)},d=()=>{x(),c()};return e.jsx(b,{isOpen:h,onRequestClose:c,contentLabel:"Confirmation d'acceptation",className:"modal",children:e.jsxs(w,{children:[e.jsx("p",{className:"p-h1",children:"Profil"}),e.jsx("p",{className:"p-h3 text-center",children:"Editer mon profile"}),i&&e.jsx("p",{className:"text-center p-label p-error",children:i}),e.jsxs("form",{onSubmit:m(o),children:[e.jsxs("div",{className:"inline-component-form",children:[e.jsxs("div",{className:"column-content-form",children:[e.jsx("p",{className:`p-label ${s.nom?"p-error":""}`,children:"Nom"}),e.jsx(p,{name:"nom",control:t,defaultValue:r.nom,render:({field:a})=>e.jsx("input",{className:"input input-inline",...a}),rules:{required:"Le nom est requis."}}),s.nom&&e.jsx("p",{className:"p-error no-height",children:s.nom.message})]}),e.jsxs("div",{className:"column-content-form",children:[e.jsx("p",{className:`p-label ${s.prenom?"p-error":""}`,children:"Prenom"}),e.jsx(p,{name:"prenom",control:t,defaultValue:r.prenom,render:({field:a})=>e.jsx("input",{className:"input input-inline",...a}),rules:{required:"prenom is required"}}),s.prenom&&e.jsx("p",{className:"p-error no-height",children:s.prenom.message})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"p-label",children:"Email"}),e.jsx(p,{name:"email",control:t,defaultValue:r.email,render:({field:a})=>e.jsx("input",{className:"input",...a}),rules:{required:"Email is required",pattern:{value:/^\S+@\S+$/i,message:"Cet email n'est pas valid."}}}),s.email&&e.jsx("p",{className:"p-error no-height",children:s.email.message})]}),e.jsxs("div",{className:"column-content-form",children:[e.jsx("p",{className:`p-label ${s.adresse?"p-error":""}`,children:"Adresse"}),e.jsx(p,{name:"adresse",control:t,defaultValue:r.adresse,render:({field:a})=>e.jsx("input",{className:"input input-inline",...a}),rules:{required:"L'adresse est requis."}}),s.adresse&&e.jsx("p",{className:"p-error no-height",children:s.adresse.message})]}),e.jsxs("div",{className:"inline-component-form",children:[e.jsxs("div",{className:"column-content-form",children:[e.jsx("p",{className:`p-label ${s.codePostal?"p-error":""}`,children:"Code postal"}),e.jsx(p,{name:"codePostal",control:t,defaultValue:r.codePostal,render:({field:a})=>e.jsx("input",{className:"input input-inline",...a}),rules:{required:"Le code postal est requis."}}),s.codePostal&&e.jsx("p",{className:"p-error no-height",children:s.codePostal.message})]}),e.jsxs("div",{className:"column-content-form",children:[e.jsx("p",{className:`p-label ${s.ville?"p-error":""}`,children:"Ville"}),e.jsx(p,{name:"ville",control:t,defaultValue:r.ville,render:({field:a})=>e.jsx("input",{className:"input input-inline",...a}),rules:{required:"Le nom du  ville est requis."}}),s.ville&&e.jsx("p",{className:"p-error no-height",children:s.ville.message})]})]}),e.jsxs("div",{className:"justify-space-between",style:{marginTop:"15px"},children:[e.jsx("button",{onClick:o,className:"btn-secondary",disabled:!j,children:l?e.jsx("img",{src:q,alt:"chargement...",style:{width:"40px"}}):"Valider"}),e.jsx("button",{onClick:d,className:"btn-primary",children:"Annuler"})]})]})]})})},P=()=>{const{data:i,updatedUserFreelancer:l}=g(),[h,c]=N.useState(!1),[n,r]=N.useState(!1),[t,m]=N.useState(""),{infosUsers:s}=i,j=()=>{c(!0)},x=()=>{c(!1)},u=async o=>{var d;try{r(!0),m("");const a={...s},f=s._id;Object.assign(a,o),await l(f,a),x()}catch(a){m(((d=a.response)==null?void 0:d.data.message)||"Une erreur s'est produite.")}finally{r(!1)}};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"justify-space-between",children:[e.jsx("p",{className:"p-h2 text-black-start",children:"Profil"}),e.jsx("button",{className:"btn-secondary",style:{width:"auto"},onClick:j,children:"Edit"})]}),e.jsxs("div",{className:"column",style:{marginTop:"1rem"},children:[e.jsxs("div",{children:[e.jsx("p",{className:"p-h3",children:"Nom et prenom"}),e.jsxs("p",{className:"p text-black-start",children:[s.nom," ",s.prenom]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"p-h3",children:"Email"}),e.jsx("p",{className:"p text-black-start",children:s.email})]}),e.jsxs("div",{children:[e.jsx("p",{className:"p-h3",children:"Adresse"}),e.jsx("p",{className:"p text-black-start",children:s.adresse})]}),e.jsxs("div",{children:[e.jsx("p",{className:"p-h3",children:"Code postal"}),e.jsx("p",{className:"p text-black-start",children:s.codePostal})]}),e.jsxs("div",{children:[e.jsx("p",{className:"p-h3",children:"Ville"}),e.jsx("p",{className:"p text-black-start",children:s.ville})]})]})]}),e.jsx(k,{isOpen:h,onRequestClose:x,errorRequest:t,isLoading:n,onSubmit:u,user:s})]})};b.setAppElement("#root");const V=({isOpen:i,onRequestClose:l,onSubmit:h,errorRequest:c,infosUsers:n,isLoading:r})=>{const{control:t,handleSubmit:m,formState:{errors:s,isValid:j},reset:x,getValues:u}=y({mode:"onChange"}),o=()=>{const a=u();h(a)},d=()=>{x(),l()};return e.jsxs(b,{isOpen:i,onRequestClose:l,contentLabel:"Confirmation d'acceptation",className:"modal",children:[e.jsx("p",{className:"p-h1",children:"Information Bancaires"}),e.jsx("p",{className:"p-h3 text-center",children:"Editer mon information bancaire"}),c&&e.jsx("p",{className:"text-center p-label p-error",children:c}),e.jsxs("form",{onSubmit:m(o),children:[e.jsxs("div",{children:[e.jsx("p",{className:`p-label ${s.iban?"p-error":""}`,children:"IBAN"}),e.jsx(p,{name:"iban",control:t,defaultValue:n.iban,render:({field:a})=>e.jsx("input",{className:"input",...a}),rules:{required:"La code IBAN est requis."}}),s.iban&&e.jsx("p",{className:"p-error",children:s.iban.message})]}),e.jsxs("div",{children:[e.jsx("p",{className:`p-label ${s.bic?"p-error":""}`,children:"BIC"}),e.jsx(p,{name:"bic",control:t,defaultValue:n.bic,render:({field:a})=>e.jsx("input",{className:"input",...a}),rules:{required:"La code BIC est requis."}}),s.bic&&e.jsx("p",{className:"p-error",children:s.bic.message})]}),e.jsxs("div",{children:[e.jsx("p",{className:`p-label ${s.banque?"p-error":""}`,children:"Nom du banque"}),e.jsx(p,{name:"banque",control:t,defaultValue:n.banque,render:({field:a})=>e.jsx("input",{className:"input",...a}),rules:{required:"Le nom du banque est requis."}}),s.banque&&e.jsx("p",{className:"p-error",children:s.banque.message})]}),e.jsxs("div",{className:"justify-space-between",style:{marginTop:"15px"},children:[e.jsx("button",{onClick:o,className:"btn-secondary",disabled:!j,children:r?e.jsx("img",{src:q,alt:"chargement...",style:{width:"40px"}}):"Valider"}),e.jsx("button",{onClick:d,className:"btn-primary",children:"Annuler"})]})]})]})},F=()=>{const[i,l]=N.useState(!1),{data:h,updatedUserFreelancer:c}=g(),{infosUsers:n}=h,[r,t]=N.useState(!1),[m,s]=N.useState(""),j=async o=>{var d;try{t(!0),s(!1);const a={...n},f=n._id;Object.assign(n,o),await c(f,a),u()}catch(a){console.log(a),s(((d=a.response)==null?void 0:d.data.message)||"Une erreur s'est produite.")}finally{t(!1)}},x=()=>{l(!0)},u=()=>{l(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card",children:[" ",e.jsxs("div",{className:"justify-space-between",children:[e.jsx("p",{className:"p-h2 text-black-start",children:"Information Bancaires"}),e.jsx("button",{className:"btn-secondary",style:{width:"auto"},onClick:x,children:"Edit"})]}),e.jsxs("div",{className:"column",style:{marginTop:"1rem"},children:[e.jsxs("div",{children:[e.jsx("p",{className:"p-h3",children:"IBAN"}),e.jsx("p",{className:"p text-black-start",children:n.iban})]}),e.jsxs("div",{children:[e.jsx("p",{className:"p-h3",children:"BIG"}),e.jsx("p",{className:"p text-black-start",children:n.bic})]}),e.jsxs("div",{children:[e.jsx("p",{className:"p-h3",children:"Nom du banque"}),e.jsx("p",{className:"p text-black-start",children:n.banque})]})]})]}),e.jsx(V,{isOpen:i,onRequestClose:u,errorRequest:m,infosUsers:n,isLoading:r,onSubmit:j})]})},L=()=>{const{data:i}=g(),{infosUsers:l}=i;return e.jsxs("div",{className:"card",children:[" ",e.jsx("div",{className:"justify-space-between",children:e.jsx("p",{className:"p-h2 text-black-start",children:"Justificatifs"})}),e.jsxs("div",{className:"column",style:{marginTop:"1rem"},children:[e.jsxs("div",{children:[e.jsx("p",{className:"p-h3",children:"Pièce d'identité"}),e.jsx("p",{className:"p text-black-start",children:"Fichier uploadé le 13 septembre 2022"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[e.jsx("img",{src:S.api_url_backend+"/cin/"+l.cin,style:{width:"100px",height:"50px",borderRadius:"8px",objectFit:"cover"},alt:"CIN/Passport"}),e.jsx("p",{className:"p-a",children:"Voir tous"})]})]})]})},B=()=>e.jsx(C,{children:e.jsxs("div",{className:"row",children:[e.jsx(P,{}),e.jsx(F,{}),e.jsx(L,{})]})}),A=()=>e.jsx("div",{className:"column",children:e.jsx(B,{})});export{A as default};
