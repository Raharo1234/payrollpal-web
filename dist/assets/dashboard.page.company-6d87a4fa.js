import{r as l,j as e,l as c,s as j,R as d,F as i,f as b,a as u}from"./index-aadf72d3.js";import{u as p,C as f}from"./CompanyDashboardContext-726eb159.js";import{_ as g}from"./react-apexcharts.min-3e023644.js";import{C as y}from"./ConfirmationDeleteModal-aa14269f.js";import"./companyAction-04ef37b4.js";import"./index-4cabefca.js";import"./warning-113e5435.js";const C=()=>{const[s,a]=l.useState({chart:{id:"basic-bar"},xaxis:{categories:[1991,1992,1993,1994,1995,1996,1997,1998]},colors:["#a4a6b3"],stroke:{show:!0,curve:"smooth",lineCap:"butt",colors:void 0,width:1,dashArray:0},markers:{size:4},title:{text:"Résumé du nombre de jours travaillés",align:"left",margin:10,offsetX:0,offsetY:0,floating:!1,style:{fontSize:"14px",fontWeight:"bold",fontFamily:"Multer",color:"#263238"}},subtitle:{text:"Mars 2020",align:"left",margin:10,offsetX:0,offsetY:20,floating:!1,style:{fontSize:"12px",fontWeight:"normal",fontFamily:"Multer",color:"#9699a2"}},responsive:[{breakpoint:void 0,options:{}}]}),[n,t]=l.useState([{name:"series-1",data:[30,40,45,50,49,60,70,91]}]);return e.jsx("div",{className:"content-table",children:e.jsx(g,{options:s,series:n,type:"line",style:{width:"100%"},height:300})})},v=()=>{const s=c(),{companyData:a}=p(),{nbrFreelancer:n,nrbDayValidity:t}=a;return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"justify-space-between",children:[e.jsxs("div",{className:"card",style:{maxWidth:"initial"},children:[e.jsx("p",{className:"p-h3 text-center",children:"Nombre des Freelances"}),e.jsx("p",{className:"p-indicateur-primary text-center",style:{color:"black",fontFamily:"Multer"},children:n})]}),e.jsxs("div",{className:"card",style:{maxWidth:"initial"},children:[e.jsx("p",{className:"p-h3-secondary",children:"Jours à valider"}),e.jsxs("div",{className:"row-btn-2",children:[e.jsx("p",{className:"p-indicateur-secondary",children:t}),e.jsx("button",{className:"btn-secondary",onClick:()=>s("/Validation%20des%20jours"),children:"valider les jours"})]})]})]})})},N=j.div`
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
`,F=({data:s,deleteOnePlacementInThisEntreprise:a})=>{const[n,t]=d.useState(!1),r=async k=>{try{const o=s.Freelance.id,m=s.entreprise.id;await a(m,o)}catch(o){throw o}},h=()=>{t(!0)},x=()=>{t(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs("tr",{children:[e.jsxs("td",{style:{textAlign:"start"},children:[s.Freelance.nom," ",s.Freelance.prenom]}),e.jsx("td",{children:s.tjm}),e.jsx("td",{children:s.Freelance.tel}),e.jsx("td",{children:e.jsx("div",{className:s.Freelance.poste==="FullStack"?"fullStack-class":s.Freelance.poste==="Backend"?"backend-class":"frontend-class",children:s.Freelance.poste})}),e.jsxs("td",{className:"content-btn-action",children:[e.jsx("button",{onClick:h,children:e.jsx(i,{icon:b})}),e.jsx("button",{children:e.jsx(i,{icon:u})})]})]},s.id),e.jsx(y,{isOpen:n,onRequestClose:x,onDelete:r})]})},D=()=>{const s=c(),{companyData:a,deleteOnePlacementInThisEntreprise:n}=p(),{freelances:t}=a;return e.jsx(N,{children:e.jsxs("div",{className:"content-table",children:[e.jsxs("div",{className:"justify-space-between",children:[e.jsx("p",{className:"p-title-table",children:"Listes des Freelanceurs"}),e.jsx("p",{className:"p-a",onClick:()=>s("/Freelances"),children:"Voir tous"})]}),e.jsx("div",{className:"table-container",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{textAlign:"start"},children:"Nom et prénom"}),e.jsx("th",{children:"TJM en euros"}),e.jsx("th",{children:"Téléphone"}),e.jsx("th",{children:"intitulé de poste"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:t.slice(0,10).length>0?t.map(r=>e.jsx(d.Fragment,{children:e.jsx(F,{data:r,deleteOnePlacementInThisEntreprise:n},r.id)},r._id)):e.jsx("tr",{children:e.jsx("td",{colSpan:5,children:e.jsx("p",{className:"p-h3 text-center",style:{fontSize:"0.85rem"},children:"Aucune donner disponible"})})})})]})})]})})},R=()=>e.jsx(f,{children:e.jsxs("div",{className:"column",children:[e.jsx(v,{}),e.jsx(C,{}),e.jsx(D,{})]})});export{R as default};
