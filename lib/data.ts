export type Project = { name: string; url: string; cat: string; desc?: string };
const P = (name: string, url: string, cat: string, desc?: string): Project => ({ name, url, cat, desc });

export const projects: Project[] = [
  P("Universal Sports Lab", "https://www.universalsportslab.uk/", "Web Apps", "Digital sports platform (freelance, UK) with personalized experiences, online ordering of sports gear and an admin control panel."),
  P("Lemara Commercial", "https://lemara-commercial.vercel.app/", "Real Estate Website", "Property listing app for a California firm with role-based dashboards, client inquiries and admin control. Built with React."),
  P("Adilocsss", "https://adilocsss.vercel.app/", "Web Apps", "Appointment booking and services platform (freelance, UK) with an admin panel for orders, users and full content editing. React, Node.js, Supabase, Express."),
  P("Real Estate Agency", "https://websitedemos.net/real-estate-agency-04/", "Real Estate Website", "Property platform showcasing listings, projects and services with responsive layouts and interactive sections."),
  P("Rumluh", "https://rumluh.com/", "Shopify Stores"),
  P("CTC Ground USA", "https://ctcgroundusa.com/", "Business Websites"),
  P("Le Bijou", "https://www.lebijou.pk/", "Shopify Stores"),
  P("Outright LLC", "https://outrightllc.com/", "Business Websites"),
  P("Premier Lubricants", "https://premierlubricants.ae/", "Business Websites"),
  P("Joshua Ellis", "https://joshuaellis.com/", "Shopify Stores"),
  P("Audley Travel", "https://www.audleytravel.com/", "Business Websites"),
  P("Saba Asghar", "https://sabaasghar.com/", "Shopify Stores"),
  P("NZ Motors", "https://nzmotorsltd.co.nz/", "WooCommerce Websites", "Automotive marketplace for vehicle listings, search, filtering, financing and customer enquiries."),
  P("Vision Goal", "https://visiongoal.ch/", "Agency Websites"),
  P("The World Travel Guy", "https://theworldtravelguy.com/", "Business Websites"),
  P("Gatundus", "https://gatundus.com/", "Business Websites"),
  P("Brand Motion", "https://www.brandmotion.com/", "WooCommerce Websites", "Corporate website showcasing company services, products and brand information with reusable UI components."),
  P("SLMC", "https://slmc.ch/", "Agency Websites"),
  P("Travel Talk Tours", "https://www.traveltalktours.com/", "Business Websites"),
  P("Safaa World", "https://safaaworld.com/", "Shopify Stores"),
  P("7 Perfumes", "https://7perfumes.pk/", "Shopify Stores"),
  P("Asraderm", "https://www.asraderm.pk/", "Shopify Stores"),
  P("Bow Bridge LLC", "https://bow-bridgellc.com/", "Business Websites"),
  P("Cubix", "https://www.cubix.co/", "Agency Websites", "Software solutions platform showcasing technology services, products and industry solutions with reusable, responsive components."),
  P("Purity Spa Med", "https://purityspamed.com/", "Business Websites"),
  P("Let's Talk About LGSOC", "https://letstalkaboutlgsoc-hcp.com/", "Business Websites"),
  P("On The Go Tours", "https://www.onthegotours.com/", "Business Websites"),
  P("Lead4s", "https://lead4s.com/", "Landing Pages"),
  P("GCP Pak", "https://gcppak.com/", "Business Websites"),
  P("Trusted AI Solutions", "https://trytrusted.com/our-mission-ai-solutions/", "Agency Websites"),
  P("MG Motor Australia", "https://newzs.mgmotor.com.au/", "WooCommerce Websites"),
  P("Wyzant", "https://www.wyzant.com/", "Business Websites"),
  P("Benjamin One", "https://www.benjaminone.com/", "WooCommerce Websites"),
  P("Pactec Enclosures", "https://www.pactecenclosures.com/", "WooCommerce Websites"),
  P("USA Study", "https://usa.study/", "Education Websites"),
  P("Sania Maskatiya", "https://pk.saniamaskatiya.com/", "Shopify Stores"),
  P("HB Fusion", "https://hbfusion.com/", "Business Websites"),
  P("Ace One Solutions", "https://aceonesolutions.com/", "Business Websites"),
  P("Outright Jobs", "https://www.outrightjobs.com/", "Call Center Websites"),
  P("CV Distribution", "https://www.cvdistribution.ae/", "Business Websites"),
  P("HSEN TPS", "https://hsentps.com/", "Business Websites"),
  P("Opal BPO", "https://opalbpo.com/", "BPO Websites"),
  P("Effectus Software", "https://www.effectussoftware.com/", "Agency Websites"),
  P("Limelight", "https://www.limelight.pk/", "Shopify Stores", "Fashion e-commerce platform with large product catalogs, collections, search, filtering and online shopping."),
  P("Worldwide Serpent", "https://www.worldwideserpent.com/", "Business Websites"),
];

export const categories = ["All", ...Array.from(new Set(projects.map((p) => p.cat))).sort()];

export const services = [
  { t: "Web App Development", d: "Scalable MERN-stack and Next.js web applications, dashboards and portals built for production.", img: "01" },
  { t: "AI Solutions", d: "AI-assisted features, chatbots and automation workflows integrated into your product.", img: "02" },
  { t: "SaaS Products", d: "From MVP to multi-tenant SaaS: auth, billing, admin panels and APIs.", img: "03" },
  { t: "CRM & ERP Systems", d: "Custom CRM and ERP software to manage customers, sales, inventory, HR and operations in one place.", img: "04" },
];

export const orbits = [
  ["01", "Innovate", "Turn ideas into clear, buildable product plans."],
  ["02", "Build", "Ship clean, tested code with architecture first."],
  ["03", "Accelerate", "Launch fast with a 30-day MVP path."],
  ["04", "Sustain", "Maintain, monitor and grow what we launch."],
];

export const stack: Record<string, string[]> = {
  Frontend: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Redux", "Elementor"],
  Backend: ["Node.js", "Express", "REST APIs", "PHP"],
  Database: ["MongoDB", "MySQL", "PostgreSQL"],
  CMS: ["WordPress", "Shopify", "WooCommerce"],
  Tools: ["Git", "GitHub", "Docker", "Vercel"],
};

export const socials = [
  ["LinkedIn", "https://www.linkedin.com/in/atifalideveloper/"],
  ["GitHub", "https://github.com/Atifkhan7"],
  ["Fiverr", "https://www.fiverr.com/s/xXevq5Z"],
  ["Instagram", "https://www.instagram.com/iamatifwebdeveloper/"],
  ["TikTok", "https://www.tiktok.com/@atifaliwebdeveloper"],
  ["Facebook", "https://www.facebook.com/profile.php?id=61552752110151"],
  ["WhatsApp", "https://wa.me/923425850147"],
];

export const shotSlugs = new Set(["7-perfumes", "ace-one-solutions", "adilocsss", "asraderm", "audley-travel", "benjamin-one", "bow-bridge-llc", "brand-motion", "ctc-ground-usa", "cubix", "cv-distribution", "effectus-software", "gatundus", "gcp-pak", "hb-fusion", "hsen-tps", "joshua-ellis", "le-bijou", "lead4s", "lemara-commercial", "let-s-talk-about-lgsoc", "limelight", "mg-motor-australia", "nz-motors", "on-the-go-tours", "opal-bpo", "outright-jobs", "outright-llc", "pactec-enclosures", "premier-lubricants", "purity-spa-med", "real-estate-agency", "rumluh", "saba-asghar", "safaa-world", "sania-maskatiya", "slmc", "the-world-travel-guy", "travel-talk-tours", "trusted-ai-solutions", "universal-sports-lab", "usa-study", "vision-goal", "worldwide-serpent", "wyzant"]);
export const slugify = (n: string) => n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// Sites that currently do not load for any visitor (domain gone/expired/parked, 404, or hijacked).
// They are shown as "Offline" and are not linked. Remove a name here once its site is fixed.
export const offline = new Set([
  "Outright Quotes", "Merlin Delivery", "Xemen Real Estate", "Fakhar-e-Karachi", "Flare Pixel", "Devia", "Aurify International",
  "Absolute Mutual Solutions", "Three Percent Pakistan", "Better Medical Alert", "Medicare Quote Advice", "Medicare Quote Plus",
  "Logic Stream Media", "Outright Coworking", "Mobile Wound Experts", "Quran For U", "Chic N Zip", "Papscon",
]);
