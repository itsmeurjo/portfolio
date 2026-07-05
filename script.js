const projects = {

    calendar:{
    title:"Calendar Management",
    image:"images/calendar.png",
    need:"The client needed an organized calendar to manage meetings, appointments, deadlines, and daily schedules.",
    solution:"I organized appointments, created reminders, managed recurring events, and maintained a well-structured calendar to improve productivity.",
    value:"Improved scheduling efficiency, reduced missed appointments, and maintained an organized workflow."

},

    email:{
    title:"Email Communication",
    image:"images/email.png",
    need:"The client needed professional and timely email communication to respond to inquiries and provide updates.",
    solution:"I drafted, organized, and responded to emails professionally while maintaining a clear and courteous tone.",
    value:"Maintained professional communication, improved response time, and ensured consistent client updates."
},

    dataentry:{
    title:"Data Entry",
    image:"images/dataentry.png",
    need:"The client needed accurate and organized records for daily operations.",
    solution:"I entered, reviewed, and organized data accurately using Microsoft Excel and Google Sheets.",
    value:"Delivered accurate records, minimized data errors, and kept information organized."
},

    file:{
    title:"File Management",
    image:"images/filemanagement.png",
    need:"The client needed a well-organized digital filing system.",
    solution:"I organized folders, applied consistent file naming, and maintained accurate records for easy access.",
    value:"Created a structured filing system that made documents easier to locate and manage."
},


    minutes:{
    title:"Minutes of Meeting",
    image:"images/minutes.png",
    need:"The client needed detailed meeting documentation.",
    solution:"I documented discussions, action items, decisions, and deadlines in a professional format.",
    value:"Provided clear meeting documentation with organized action items and deadlines."
},

    billing:{
    title:"Billing Management",
    image:"images/billing.png",
    need:"The client needed efficient billing and payment monitoring.",
    solution:"I managed invoices, Statements of Account, payment tracking, and billing records accurately.",
    value:"Improved billing accuracy, organized payment records, and supported efficient financial tracking."
},

};

const modal = new bootstrap.Modal(document.getElementById("portfolioModal"));

document.querySelectorAll(".view-project").forEach(button => {

    button.addEventListener("click", function () {

        const project = projects[this.dataset.project];

        if (!project) return;

        document.getElementById("modalTitle").textContent = project.title;
        document.getElementById("modalImage").src = project.image;
        document.getElementById("modalImage").alt = project.title;
        document.getElementById("clientNeed").textContent = project.need;
        document.getElementById("mySolution").textContent = project.solution;
        document.getElementById("valueDelivered").textContent = project.value;

        modal.show();

    });

});
const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});
/*=========================
BILLING MODAL
=========================*/

const billingContent = document.getElementById("billingContent");

const billingTabs = document.querySelectorAll(".billing-tab");

const billingData = {

overview:`

<div class="overview-cards">

    <div class="overview-card">

        <span>Project</span>

        <h4>Portfolio Project</h4>

    </div>

    <div class="overview-card">

        <span>Platform</span>

        <h4>Google Sheets</h4>

    </div>

    <div class="overview-card">

        <span>Role</span>

        <h4>Administrative VA</h4>

    </div>

    <div class="overview-card">

        <span>Category</span>

        <h4>Billing System</h4>

    </div>

</div>

<div class="overview-section">

    <h2>📌 Project Overview</h2>

    <p>

        This Billing Management System was developed to streamline billing operations,
        invoice preparation, Statement of Account generation, payment monitoring,
        and financial reporting. The system demonstrates my ability to organize
        financial records, automate repetitive tasks, and maintain accurate billing
        workflows for improved productivity.

    </p>

    <hr>

    <h3>🎯 Objective</h3>

    <p>

        To create an efficient billing workflow that minimizes manual work,
        improves billing accuracy, and provides organized financial records
        for better business operations.

    </p>

    <hr>

    <h3>👤 My Role</h3>

    <div class="tech-stack">

        <span>Administrative Virtual Assistant</span>

        <span>Accounts Receivable</span>

        <span>Billing Specialist</span>

    </div>

</div>

`,

tools:`

<h3>Tools & Technologies</h3>

<div class="tool-group">

    <h4><i class="fa-solid fa-layer-group"></i> Development Platform</h4>

    <div class="tool-tags">

        <span>Google Sheets</span>
        <span>Google Apps Script</span>

    </div>

</div>

<div class="tool-group">

    <h4><i class="fa-solid fa-code"></i> Front-End</h4>

    <div class="tool-tags">

        <span>HTML5</span>
        <span>CSS3</span>
        <span>JavaScript</span>

    </div>

</div>

`,

results:`

<h3>Project Impact</h3>

<div class="case-study">

    <div class="case-card">

        <div class="case-icon">
            <i class="fa-solid fa-triangle-exclamation"></i>
        </div>

        <h4>Challenge</h4>

        <p>
            Manual billing processes made invoice preparation,
            payment monitoring, and Statement of Account generation
            time-consuming and difficult to organize.
        </p>

    </div>

    <div class="case-card">

        <div class="case-icon">
            <i class="fa-solid fa-lightbulb"></i>
        </div>

        <h4>Solution</h4>

        <p>
            Developed a Billing Management System that streamlines
            invoice preparation, SOA generation, payment tracking,
            reporting, and document organization.
        </p>

    </div>

    <div class="case-card full-width">

        <div class="case-icon">
            <i class="fa-solid fa-chart-line"></i>
        </div>

        <h4>Results Delivered</h4>

        <div class="result-tags">

            <span>✔ Organized Billing Workflow</span>

            <span>✔ Faster Invoice Preparation</span>

            <span>✔ Accurate Statement of Account</span>

            <span>✔ Simplified Payment Monitoring</span>

            <span>✔ Better Financial Record Management</span>

            <span>✔ Professional Reports</span>

        </div>

    </div>

</div>

`,

features:`

<div class="feature-layout">

    <div class="feature-menu">

        <button class="feature-btn active"
                data-image="dashboard.png"
                data-title="Dashboard"
                data-desc="Provides a complete overview of invoices, payment status, overdue accounts, and billing summaries.">

            <span>📊</span> Dashboard

        </button>

        <button class="feature-btn"
                data-image="searchinvoice.png"
                data-title="Search Invoice"
                data-desc="Allows quick searching and filtering of invoice records for faster client management.">

            <span>🔍</span> Search Invoice

        </button>

        <button class="feature-btn"
                data-image="invoice.png"
                data-title="Invoice"
                data-desc="Generates professional invoices with complete billing information and automatic computations.">

           <span>🧾</span> Invoice

        </button>

        <button class="feature-btn"
                data-image="sendinvoice.png"
                data-title="Send Invoice"
                data-desc="Demonstrates how invoices are sent professionally to clients through email.">

            <span>📧</span> Send Invoice

        </button>

        <button class="feature-btn"
                data-image="selectservice.png"
                data-title="Select Service"
                data-desc="Displays service selection before generating invoices.">

            <span>📋</span> Select Service

        </button>

        <button class="feature-btn"
                data-image="soa.png"
                data-title="Statement of Account"
                data-desc="Creates an organized Statement of Account for client billing.">

            <span>📄</span> Statement of Account

        </button>

        <button class="feature-btn"
                data-image="sendsoa.png"
                data-title="Send SOA"
                data-desc="Shows the process of sending Statements of Account to clients.">

            <span>📨</span> Send SOA

        </button>

        <button class="feature-btn"
                data-image="soapdf.png"
                data-title="SOA PDF"
                data-desc="Exports the Statement of Account into a printable PDF.">

           <span>📑</span> SOA PDF

        </button>

        <button class="feature-btn"
                data-image="report.png"
                data-title="Reports"
                data-desc="Displays billing reports for payment monitoring and financial analysis.">

           <span>📈</span> Reports

        </button>

    </div>

    <div class="feature-preview">

    <div class="browser-frame">

        <div class="browser-top">

            <div class="browser-dots">

                <span class="red"></span>

                <span class="yellow"></span>

                <span class="green"></span>

            </div>

            <div class="browser-address">

                Billing Management System

            </div>

        </div>

        <img
            id="featureImage"
            src="images/dashboard.png"
            alt="Billing System">

    </div>

    <h3 id="featureTitle">

        Dashboard

    </h3>

    <p id="featureDescription">

        Provides a complete overview of invoices, payment status,
        overdue accounts, and billing summaries.

    </p>

</div>

`,

};

billingContent.innerHTML = billingData.overview;

billingTabs.forEach(tab=>{

tab.addEventListener("click",()=>{

billingTabs.forEach(btn=>btn.classList.remove("active"));

tab.classList.add("active");

billingContent.innerHTML = billingData[tab.dataset.tab];

});

});

/*=========================
FEATURE VIEWER
=========================*/

document.addEventListener("click", function(e){

    if(!e.target.classList.contains("billing-tab")) return;

    if(e.target.dataset.tab !== "features") return;

    setTimeout(initFeatureViewer,10);

});

function initFeatureViewer(){

    const buttons=document.querySelectorAll(".feature-btn");

    const image=document.getElementById("featureImage");

    const title=document.getElementById("featureTitle");

    const description=document.getElementById("featureDescription");

    if(!buttons.length) return;

    buttons.forEach(button=>{

        button.addEventListener("click",()=>{

            buttons.forEach(btn=>btn.classList.remove("active"));

            button.classList.add("active");

            image.src="images/"+button.dataset.image;

            title.textContent=button.dataset.title;

            description.textContent=button.dataset.desc;

        });

    });

}
/*=========================
ACTIVE NAVIGATION
=========================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
/*=========================
SCROLL TO TOP
=========================*/

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        scrollBtn.classList.add("show");

    }else{

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});