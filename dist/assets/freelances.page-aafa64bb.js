import{s as h,R as c,j as e,F as o,f as j,a as m}from"./index-aadf72d3.js";import{u as b,C as u}from"./CompanyDashboardContext-726eb159.js";import{C as g}from"./ConfirmationDeleteModal-aa14269f.js";import"./companyAction-04ef37b4.js";import"./index-4cabefca.js";import"./warning-113e5435.js";const f=h.div`
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
	.frontend-class {
		display: inline;
		text-align: center;
		background-color: rgb(128 200 95);
		color: rgb(255 255 255);
		border-radius: 8px;
		font-weight: 700;
		padding: 5px 20px;
	}
	.backend-class {
		display: inline;
		text-align: center;
		background-color: #3650fb;
		color: rgb(255 255 255);
		border-radius: 8px;
		font-weight: 700;
		padding: 5px 20px;
	}
	.fullStack-class {
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
`,F=({data:n,deleteOnePlacementInThisEntreprise:r})=>{const[s,t]=c.useState(!1),a=async C=>{const p=n.Freelance.id,x=n.entreprise.id;try{await r(x,p)}catch(l){throw console.log(l),l}},i=()=>{t(!0)},d=()=>{t(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs("tr",{children:[e.jsxs("td",{style:{textAlign:"start"},children:[n.Freelance.nom," ",n.Freelance.prenom]}),e.jsx("td",{children:n.tjm}),e.jsx("td",{children:n.Freelance.tel}),e.jsxs("td",{children:[" ",e.jsx("div",{className:n.Freelance.poste==="FullStack"?"fullStack-class":n.Freelance.poste==="Backend"?"backend-class":"frontend-class",children:n.Freelance.poste})]}),e.jsxs("td",{className:"content-btn-action",children:[e.jsx("button",{onClick:i,children:e.jsx(o,{icon:j})}),e.jsx("button",{children:e.jsx(o,{icon:m})})]})]},n.id),e.jsx(g,{isOpen:s,onRequestClose:d,onDelete:a})]})},y=()=>{const{companyData:n,deleteOnePlacementInThisEntreprise:r}=b(),{freelances:s}=n;return e.jsx(f,{children:e.jsxs("div",{className:"content-table",children:[e.jsx("div",{className:"justify-space-between",children:e.jsx("p",{className:"p-title-table",children:"Listes des Freelanceurs"})}),e.jsx("div",{className:"table-container",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{textAlign:"start"},children:"Nom et prénom"}),e.jsx("th",{children:"TJM en euros"}),e.jsx("th",{children:"Téléphone"}),e.jsx("th",{children:"intitulé de poste"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:s.length>0?s.map(t=>e.jsx(c.Fragment,{children:e.jsx(F,{data:t,deleteOnePlacementInThisEntreprise:r},t.id)},t._id)):e.jsx("tr",{children:e.jsx("td",{colSpan:5,children:e.jsx("p",{className:"p-h3 text-center",style:{fontSize:"0.85rem"},children:"Aucune donner disponible"})})})})]})})]})})},v=()=>e.jsx(u,{children:e.jsx(y,{})});export{v as default};
