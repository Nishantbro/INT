"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Typewriter from "@/components/ui/Typewriter";
import Link from "next/link";
import {
  Briefcase,
  FolderOpen,
  Users,
  Video,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Zap,
  Shield,
  Clock,
  Award,
  ChevronRight,
  Play,
  GraduationCap,
  Heart,
  MessageCircle,
  Share2,
  Globe,
} from "lucide-react";

// --- Data ---
const stats = [
  { value: "5,000+", label: "Students", icon: Users },
  { value: "200+", label: "Internships", icon: Briefcase },
  { value: "150+", label: "Projects", icon: FolderOpen },
  { value: "50+", label: "Consultants", icon: Star },
];

const features = [
  {
    icon: Briefcase,
    title: "Real Internships",
    desc: "Get hands-on experience with curated internships from top companies. Remote, onsite, or hybrid - you choose.",
    color: "#000000",
  },
  {
    icon: FolderOpen,
    title: "Ready-Made Projects",
    desc: "Buy production-ready projects for your portfolio, college submissions, or to learn new technologies.",
    color: "#000000",
  },
  {
    icon: Users,
    title: "Expert Consultations",
    desc: "Book 1-on-1 sessions with industry experts for career guidance, interview prep, and mentorship.",
    color: "#000000",
  },
  {
    icon: Video,
    title: "Reels & Tips",
    desc: "Watch short video reels from consultants - career tips, tech tutorials, and industry insights. Like Instagram, but for learning!",
    color: "#000000",
  },
];

const internships = [
  {
    title: "Frontend Developer Intern",
    company: "TechCorp India",
    type: "Remote",
    duration: "3 months",
    stipend: "₹349/only",
    skills: ["React", "TypeScript", "Tailwind"],
    rating: "4.8",
    students: "300+ Live",
  },
  {
    title: "Data Science Intern",
    company: "DataMinds AI",
    type: "Hybrid",
    duration: "6 months",
    stipend: "₹449/only",
    skills: ["Python", "ML", "Pandas"],
    rating: "4.9",
    students: "500+ Live",
  },
  {
    title: "UI/UX Design Intern",
    company: "DesignHub",
    type: "Remote",
    duration: "2 months",
    stipend: "₹549/only",
    skills: ["Figma", "Adobe XD", "Research"],
    rating: "4.7",
    students: "250+ Live",
  },
];

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    price: "₹499",
    tech: ["React", "Node.js", "MongoDB"],
    downloads: "1.2k+",
    rating: "4.8",
  },
  {
    title: "AI Chatbot System",
    category: "Machine Learning",
    price: "₹799",
    tech: ["Python", "TensorFlow", "Flask"],
    downloads: "850+",
    rating: "4.9",
  },
  {
    title: "Hospital Management System",
    category: "Full Stack",
    price: "₹599",
    tech: ["Java", "Spring Boot", "MySQL"],
    downloads: "400+",
    rating: "4.7",
  },
];

const consultants = [
  {
    name: "Dr. Arun Sharma",
    expertise: "Career Guidance",
    rating: 4.9,
    sessions: 240,
    rate: "₹500/hr",
  },
  {
    name: "Priya Mehta",
    expertise: "Resume Building",
    rating: 4.8,
    sessions: 180,
    rate: "₹400/hr",
  },
  {
    name: "Rahul Verma",
    expertise: "Tech Interviews",
    rating: 4.7,
    sessions: 310,
    rate: "₹600/hr",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Create Account",
    desc: "Sign up as a Student or Consultant in under 60 seconds.",
    icon: Zap,
  },
  {
    step: "02",
    title: "Explore & Choose",
    desc: "Browse internships, projects, and consultants that match your goals.",
    icon: TrendingUp,
  },
  {
    step: "03",
    title: "Pay & Access",
    desc: "Secure payment via Razorpay. Instant access to your purchase.",
    icon: Shield,
  },
  {
    step: "04",
    title: "Grow Your Career",
    desc: "Start your internship, download projects, or connect with experts.",
    icon: Award,
  },
];

const trendingReels = [
  { id: 1, consultant: "Dr. Arun Sharma", expertise: "Career Guidance", title: "5 Tips to Ace Any Interview", likes: "1.2K", views: "5.2K" },
  { id: 2, consultant: "Priya Mehta", expertise: "Resume Building", title: "Resume Mistakes That Cost You Jobs", likes: "980", views: "3.8K" },
  { id: 3, consultant: "Rahul Verma", expertise: "Tech Interviews", title: "DSA Roadmap for Beginners", likes: "2.1K", views: "8.1K" },
];

const DOMAINS = [
  "Generative AI",
  "AI & Machine Learning",
  "Data Science & Business Analytics",
  "Project Management",
  "Cyber Security",
  "Software Development",
] as const;

type DomainType = typeof DOMAINS[number];

interface InternshipProfile {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  companyLogo: string;
  domain: DomainType;
  company: string;
  type: string;
  duration: string;
  stipend: string;
  skills: string[];
  rating: string;
  students: string;
}

interface InternshipData {
  [key: string]: InternshipProfile[];
}

const internshipData: InternshipData = {
  "Generative AI": [
    {
      id: "gen-1",
      title: "Generative AI Intern",
      description: "Work on cutting-edge AI models and LLM applications",
      imageUrl: "/internships/gen-ai.jpg",
      companyLogo: "/logos/openai.svg",
      domain: "Generative AI",
      company: "AI Labs India",
      type: "Remote",
      duration: "6 months",
      stipend: "₹549/only",
      skills: ["Python", "LangChain", "LLMs"],
      rating: "4.9",
      students: "400+ Live",
    },
    {
      id: "gen-2",
      title: "LLM Developer Intern",
      description: "Build and fine-tune large language models",
      imageUrl: "/internships/llm.jpg",
      companyLogo: "/logos/anthropic.svg",
      domain: "Generative AI",
      company: "TechNova",
      type: "Hybrid",
      duration: "4 months",
      stipend: "₹649/only",
      skills: ["PyTorch", "Transformers", "HuggingFace"],
      rating: "4.8",
      students: "280+ Live",
    },
    {
      id: "gen-3",
      title: "AI Content Developer",
      description: "Create AI-powered content solutions",
      imageUrl: "/internships/content-ai.jpg",
      companyLogo: "/logos/content.svg",
      domain: "Generative AI",
      company: "ContentAI",
      type: "Remote",
      duration: "3 months",
      stipend: "₹449/only",
      skills: ["NLP", "ChatGPT API", "Python"],
      rating: "4.7",
      students: "350+ Live",
    },
    {
      id: "gen-4",
      title: "Prompt Engineer Intern",
      description: "Design and optimize prompts for AI models",
      imageUrl: "/internships/prompt.jpg",
      companyLogo: "/logos/anthropic.svg",
      domain: "Generative AI",
      company: "PromptPro",
      type: "Remote",
      duration: "2 months",
      stipend: "₹349/only",
      skills: ["AI", "NLP", "Creative Writing"],
      rating: "4.6",
      students: "200+ Live",
    },
    {
      id: "gen-5",
      title: "AI Research Intern",
      description: "Contribute to AI research papers and projects",
      imageUrl: "/internships/research.jpg",
      companyLogo: "/logos/google.svg",
      domain: "Generative AI",
      company: "ResearchHub",
      type: "On-site",
      duration: "6 months",
      stipend: "₹749/only",
      skills: ["Research", "Python", "TensorFlow"],
      rating: "4.9",
      students: "150+ Live",
    },
    {
      id: "gen-6",
      title: "Multimedia AI Intern",
      description: "Build AI solutions for image and video generation",
      imageUrl: "/internships/multimedia.jpg",
      companyLogo: "/logos/meta.svg",
      domain: "Generative AI",
      company: "MediaAI Labs",
      type: "Hybrid",
      duration: "4 months",
      stipend: "₹549/only",
      skills: ["Stable Diffusion", "Computer Vision", "Python"],
      rating: "4.8",
      students: "220+ Live",
    },
  ],
  "AI & Machine Learning": [
    {
      id: "ml-1",
      title: "ML Engineer Intern",
      description: "Build and deploy machine learning models",
      imageUrl: "/internships/ml.jpg",
      companyLogo: "/logos/google.svg",
      domain: "AI & Machine Learning",
      company: "DataMinds AI",
      type: "Remote",
      duration: "6 months",
      stipend: "₹549/only",
      skills: ["Python", "TensorFlow", "Scikit-learn"],
      rating: "4.9",
      students: "500+ Live",
    },
    {
      id: "ml-2",
      title: "Data Science Intern",
      description: "Analyze data and build predictive models",
      imageUrl: "/internships/data-science.jpg",
      companyLogo: "/logos/ibm.svg",
      domain: "AI & Machine Learning",
      company: "Analytics Corp",
      type: "Hybrid",
      duration: "4 months",
      stipend: "₹449/only",
      skills: ["Python", "Pandas", "SQL"],
      rating: "4.8",
      students: "450+ Live",
    },
    {
      id: "ml-3",
      title: "Deep Learning Intern",
      description: "Work on neural networks and deep learning",
      imageUrl: "/internships/deep-learning.jpg",
      companyLogo: "/logos/nvidia.svg",
      domain: "AI & Machine Learning",
      company: "DeepTech",
      type: "On-site",
      duration: "6 months",
      stipend: "₹649/only",
      skills: ["PyTorch", "Keras", "CNN"],
      rating: "4.9",
      students: "300+ Live",
    },
    {
      id: "ml-4",
      title: "Computer Vision Intern",
      description: "Develop image recognition systems",
      imageUrl: "/internships/cv.jpg",
      companyLogo: "/logos/meta.svg",
      domain: "AI & Machine Learning",
      company: "VisionAI",
      type: "Remote",
      duration: "4 months",
      stipend: "₹549/only",
      skills: ["OpenCV", "YOLO", "Python"],
      rating: "4.7",
      students: "250+ Live",
    },
    {
      id: "ml-5",
      title: "NLP Engineer Intern",
      description: "Build natural language processing solutions",
      imageUrl: "/internships/nlp.jpg",
      companyLogo: "/logos/openai.svg",
      domain: "AI & Machine Learning",
      company: "TextAI Labs",
      type: "Hybrid",
      duration: "5 months",
      stipend: "₹599/only",
      skills: ["NLTK", "Spacy", "Transformers"],
      rating: "4.8",
      students: "180+ Live",
    },
    {
      id: "ml-6",
      title: "MLOps Intern",
      description: "Deploy and manage ML models in production",
      imageUrl: "/internships/mlops.jpg",
      companyLogo: "/logos/aws.svg",
      domain: "AI & Machine Learning",
      company: "CloudML",
      type: "Remote",
      duration: "3 months",
      stipend: "₹449/only",
      skills: ["Docker", "Kubernetes", "MLflow"],
      rating: "4.6",
      students: "150+ Live",
    },
  ],
  "Data Science & Business Analytics": [
    {
      id: "ds-1",
      title: "Data Analyst Intern",
      description: "Analyze business data and create insights",
      imageUrl: "/internships/data-analyst.jpg",
      companyLogo: "/logos/amazon.svg",
      domain: "Data Science & Business Analytics",
      company: "DataPro",
      type: "Remote",
      duration: "3 months",
      stipend: "₹349/only",
      skills: ["Excel", "SQL", "Tableau"],
      rating: "4.8",
      students: "600+ Live",
    },
    {
      id: "ds-2",
      title: "Business Analyst Intern",
      description: "Support business decisions with data insights",
      imageUrl: "/internships/business-analyst.jpg",
      companyLogo: "/logos/deloitte.svg",
      domain: "Data Science & Business Analytics",
      company: "BizInsights",
      type: "Hybrid",
      duration: "4 months",
      stipend: "₹449/only",
      skills: ["Excel", "Power BI", "Python"],
      rating: "4.7",
      students: "400+ Live",
    },
    {
      id: "ds-3",
      title: "Data Visualization Intern",
      description: "Create interactive dashboards and reports",
      imageUrl: "/internships/viz.jpg",
      companyLogo: "/logos/tableau.svg",
      domain: "Data Science & Business Analytics",
      company: "VizTech",
      type: "Remote",
      duration: "3 months",
      stipend: "₹349/only",
      skills: ["Tableau", "Power BI", "D3.js"],
      rating: "4.8",
      students: "300+ Live",
    },
    {
      id: "ds-4",
      title: "Analytics Associate",
      description: "Support analytics projects and research",
      imageUrl: "/internships/analytics.jpg",
      companyLogo: "/logos/mckinsey.svg",
      domain: "Data Science & Business Analytics",
      company: "AnalyticWorld",
      type: "On-site",
      duration: "6 months",
      stipend: "₹549/only",
      skills: ["R", "Statistics", "SQL"],
      rating: "4.9",
      students: "200+ Live",
    },
    {
      id: "ds-5",
      title: "BI Developer Intern",
      description: "Build business intelligence solutions",
      imageUrl: "/internships/bi.jpg",
      companyLogo: "/logos/microsoft.svg",
      domain: "Data Science & Business Analytics",
      company: "BIDevelopers",
      type: "Hybrid",
      duration: "4 months",
      stipend: "₹449/only",
      skills: ["Power BI", "SSRS", "SQL"],
      rating: "4.7",
      students: "280+ Live",
    },
    {
      id: "ds-6",
      title: "Marketing Analyst Intern",
      description: "Analyze marketing campaigns and performance",
      imageUrl: "/internships/marketing-analyst.jpg",
      companyLogo: "/logos/google.svg",
      domain: "Data Science & Business Analytics",
      company: "MarketMetrics",
      type: "Remote",
      duration: "3 months",
      stipend: "₹349/only",
      skills: ["Google Analytics", "Excel", "Python"],
      rating: "4.6",
      students: "350+ Live",
    },
  ],
  "Project Management": [
    {
      id: "pm-1",
      title: "Project Coordinator Intern",
      description: "Assist in project planning and execution",
      imageUrl: "/internships/project-coord.jpg",
      companyLogo: "/logos/atlassian.svg",
      domain: "Project Management",
      company: "ProManage",
      type: "Hybrid",
      duration: "4 months",
      stipend: "₹349/only",
      skills: ["Jira", "Agile", "Communication"],
      rating: "4.7",
      students: "300+ Live",
    },
    {
      id: "pm-2",
      title: "Agile Coach Intern",
      description: "Support agile practices and ceremonies",
      imageUrl: "/internships/agile.jpg",
      companyLogo: "/logos/scaled-agile.svg",
      domain: "Project Management",
      company: "AgileFlow",
      type: "Remote",
      duration: "3 months",
      stipend: "₹449/only",
      skills: ["Scrum", "Kanban", "Jira"],
      rating: "4.8",
      students: "200+ Live",
    },
    {
      id: "pm-3",
      title: "Program Manager Intern",
      description: "Coordinate multiple projects simultaneously",
      imageUrl: "/internships/program.jpg",
      companyLogo: "/logos/microsoft.svg",
      domain: "Project Management",
      company: "GlobalTech",
      type: "On-site",
      duration: "6 months",
      stipend: "₹549/only",
      skills: ["MS Project", "Leadership", "Planning"],
      rating: "4.9",
      students: "150+ Live",
    },
    {
      id: "pm-4",
      title: "Product Owner Intern",
      description: "Define product requirements and priorities",
      imageUrl: "/internships/product-owner.jpg",
      companyLogo: "/logos/slack.svg",
      domain: "Project Management",
      company: "ProductHub",
      type: "Hybrid",
      duration: "4 months",
      stipend: "₹449/only",
      skills: ["Backlog Management", "User Stories", "Agile"],
      rating: "4.8",
      students: "180+ Live",
    },
    {
      id: "pm-5",
      title: "Scrum Master Intern",
      description: "Facilitate Scrum ceremonies and remove blockers",
      imageUrl: "/internships/scrum.jpg",
      companyLogo: "/logos/atlassian.svg",
      domain: "Project Management",
      company: "ScrumMasters Inc",
      type: "Remote",
      duration: "3 months",
      stipend: "₹399/only",
      skills: ["Scrum", "Facilitation", "Conflict Resolution"],
      rating: "4.7",
      students: "220+ Live",
    },
    {
      id: "pm-6",
      title: "PMO Analyst Intern",
      description: "Support PMO operations and governance",
      imageUrl: "/internships/pmo.jpg",
      companyLogo: "/logos/pwc.svg",
      domain: "Project Management",
      company: "PMOGlobal",
      type: "On-site",
      duration: "5 months",
      stipend: "₹449/only",
      skills: ["Risk Management", "Stakeholder Management", "Excel"],
      rating: "4.6",
      students: "120+ Live",
    },
  ],
  "Cyber Security": [
    {
      id: "cs-1",
      title: "Security Analyst Intern",
      description: "Monitor and analyze security threats",
      imageUrl: "/internships/security-analyst.jpg",
      companyLogo: "/logos/cisco.svg",
      domain: "Cyber Security",
      company: "SecureNet",
      type: "On-site",
      duration: "6 months",
      stipend: "₹549/only",
      skills: ["SIEM", "Firewalls", "Networking"],
      rating: "4.8",
      students: "250+ Live",
    },
    {
      id: "cs-2",
      title: "Penetration Tester Intern",
      description: "Identify vulnerabilities in systems",
      imageUrl: "/internships/pentest.jpg",
      companyLogo: "/logos/rapid7.svg",
      domain: "Cyber Security",
      company: "PenTestPro",
      type: "Hybrid",
      duration: "4 months",
      stipend: "₹649/only",
      skills: ["Kali Linux", "Burp Suite", "OWASP"],
      rating: "4.9",
      students: "180+ Live",
    },
    {
      id: "cs-3",
      title: "SOC Analyst Intern",
      description: "Work in Security Operations Center",
      imageUrl: "/internships/soc.jpg",
      companyLogo: "/logos/ibm.svg",
      domain: "Cyber Security",
      company: "SOCGlobal",
      type: "On-site",
      duration: "3 months",
      stipend: "₹449/only",
      skills: ["Splunk", "Log Analysis", "Incident Response"],
      rating: "4.7",
      students: "200+ Live",
    },
    {
      id: "cs-4",
      title: "Network Security Intern",
      description: "Protect network infrastructure",
      imageUrl: "/internships/network-sec.jpg",
      companyLogo: "/logos/fortinet.svg",
      domain: "Cyber Security",
      company: "NetSecure",
      type: "Remote",
      duration: "4 months",
      stipend: "₹449/only",
      skills: ["VPN", "IDS/IPS", "Cisco"],
      rating: "4.8",
      students: "150+ Live",
    },
    {
      id: "cs-5",
      title: "Cloud Security Intern",
      description: "Secure cloud environments and services",
      imageUrl: "/internships/cloud-sec.jpg",
      companyLogo: "/logos/aws.svg",
      domain: "Cyber Security",
      company: "CloudSecure",
      type: "Hybrid",
      duration: "5 months",
      stipend: "₹549/only",
      skills: ["AWS", "IAM", "CloudTrail"],
      rating: "4.8",
      students: "220+ Live",
    },
    {
      id: "cs-6",
      title: "Compliance Analyst Intern",
      description: "Ensure regulatory compliance and audits",
      imageUrl: "/internships/compliance.jpg",
      companyLogo: "/logos/deloitte.svg",
      domain: "Cyber Security",
      company: "CompliancePro",
      type: "On-site",
      duration: "4 months",
      stipend: "₹399/only",
      skills: ["ISO 27001", "GDPR", "Risk Assessment"],
      rating: "4.6",
      students: "100+ Live",
    },
  ],
  "Software Development": [
    {
      id: "sd-1",
      title: "Frontend Developer Intern",
      description: "Build responsive web interfaces",
      imageUrl: "/internships/frontend.jpg",
      companyLogo: "/logos/meta.svg",
      domain: "Software Development",
      company: "TechCorp India",
      type: "Remote",
      duration: "3 months",
      stipend: "₹349/only",
      skills: ["React", "TypeScript", "Tailwind"],
      rating: "4.8",
      students: "300+ Live",
    },
    {
      id: "sd-2",
      title: "Backend Developer Intern",
      description: "Develop server-side applications",
      imageUrl: "/internships/backend.jpg",
      companyLogo: "/logos/google.svg",
      domain: "Software Development",
      company: "ServerTech",
      type: "Hybrid",
      duration: "6 months",
      stipend: "₹449/only",
      skills: ["Node.js", "Express", "MongoDB"],
      rating: "4.9",
      students: "450+ Live",
    },
    {
      id: "sd-3",
      title: "Full Stack Developer Intern",
      description: "Work on end-to-end application development",
      imageUrl: "/internships/fullstack.jpg",
      companyLogo: "/logos/amazon.svg",
      domain: "Software Development",
      company: "StackBuilders",
      type: "Remote",
      duration: "6 months",
      stipend: "₹549/only",
      skills: ["React", "Node.js", "PostgreSQL"],
      rating: "4.9",
      students: "400+ Live",
    },
    {
      id: "sd-4",
      title: "Mobile Developer Intern",
      description: "Build iOS and Android applications",
      imageUrl: "/internships/mobile.jpg",
      companyLogo: "/logos/flipkart.svg",
      domain: "Software Development",
      company: "AppWorks",
      type: "Hybrid",
      duration: "4 months",
      stipend: "₹449/only",
      skills: ["React Native", "Flutter", "Firebase"],
      rating: "4.7",
      students: "280+ Live",
    },
    {
      id: "sd-5",
      title: "DevOps Engineer Intern",
      description: "Automate deployment and infrastructure",
      imageUrl: "/internships/devops.jpg",
      companyLogo: "/logos/aws.svg",
      domain: "Software Development",
      company: "CloudOps",
      type: "Remote",
      duration: "4 months",
      stipend: "₹449/only",
      skills: ["Docker", "Kubernetes", "CI/CD"],
      rating: "4.8",
      students: "200+ Live",
    },
    {
      id: "sd-6",
      title: "QA Engineer Intern",
      description: "Test and ensure software quality",
      imageUrl: "/internships/qa.jpg",
      companyLogo: "/logos/atlassian.svg",
      domain: "Software Development",
      company: "QualityFirst",
      type: "Hybrid",
      duration: "3 months",
      stipend: "₹349/only",
      skills: ["Selenium", "Jest", "Manual Testing"],
      rating: "4.7",
      students: "250+ Live",
    },
  ],
};

// --- Page ---
export default function HomePage() {
  const [activeDomain, setActiveDomain] = useState<DomainType>("AI & Machine Learning");
  const [isAnimating, setIsAnimating] = useState(false);

  const currentInternships = internshipData[activeDomain] || [];

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [activeDomain]);

  return (
    <>
      <Navbar />

      {/* ============ HERO ============ */}
      <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left pt-6 lg:pt-0">
              <h1 className="text-3xl sm:text-5xl md:text-[64px] text-black font-extrabold leading-[1.1] sm:leading-[1.08] tracking-tight mb-5">
                Accelerate Your <br className="hidden sm:block" />
                Career With <br className="hidden sm:block" />
                <Typewriter text="Inturnship" />
              </h1>
              
              <h2 className="text-xl sm:text-[22px] text-gray-800 font-bold mb-6 tracking-tight">
                The Launchpad for Ambitious Students
              </h2>

              <div className="w-16 h-[3px] bg-black mx-auto lg:mx-0 mb-8"></div>
              
              <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
                Bridge the gap between academic learning and industry success. Access high-value projects, secure top-tier internships, and get mentored by elite experts to fast-track your professional journey.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-10">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-yellow-400" />
                  <span className="text-[13px] font-medium text-gray-600">Get Skilled</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span className="text-[13px] font-medium text-gray-600">Get Experienced</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-pink-400" />
                  <span className="text-[13px] font-medium text-gray-600">Get Hired</span>
                </div>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
              <img 
                src="/books.png" 
                alt="Students learning and building careers" 
                className="object-contain w-full max-w-lg lg:max-w-[650px] relative z-10 drop-shadow-sm"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ============ ALUMNI ============ */}
      <section className="py-12 sm:py-16 bg-white border-t border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tighter mb-4">
            Our Alumni <span className="text-black/70">Works At</span>
          </h2>
        </div>
        
        {/* Outer wrapper to obscure edges with white gradients */}
        <div className="relative flex flex-col gap-8 sm:gap-10">
          <div className="absolute inset-y-0 left-0 w-20 sm:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 sm:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          
          {/* Row 1: Right to Left */}
          <div className="marquee-container">
            <div className="animate-marquee-rtl flex items-center gap-10 sm:gap-14">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-10 sm:gap-14">
                  {[
                    "accenture.svg",
                    "blinkit-logo.png",
                    "deloitte.svg",
                    "google.png",
                    "ibm.svg",
                    "meta.svg",
                    "bharti.png",
                    "blackrock.png",
                    "google-pay.svg",
                    "hcltech.svg"
                  ].map((logo, idx) => (
                    <div key={`${i}-${idx}`} className="w-[160px] sm:w-[220px] h-[80px] sm:h-[110px] bg-white border border-gray-100/50 rounded-2xl flex items-center justify-center p-5 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-500 shrink-0 group">
                      <img src={`/${logo}`} alt={logo.split('.')[0]} className="max-w-full max-h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Left to Right */}
          <div className="marquee-container">
            <div className="animate-marquee-ltr flex items-center gap-10 sm:gap-14">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-10 sm:gap-14">
                  {[
                    "paytm.svg",
                    "spotify-logo.svg",
                    "tata-consultancy.svg",
                    "uber.svg",
                    "wipro.svg",
                    "oracle.svg",
                    "samsung.svg",
                    "swiggy-logo.svg",
                    "zomato.svg"
                  ].map((logo, idx) => (
                    <div key={`${i}-${idx}`} className="w-[160px] sm:w-[220px] h-[80px] sm:h-[110px] bg-white border border-gray-100/50 rounded-2xl flex items-center justify-center p-5 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-500 shrink-0 group">
                      <img src={`/${logo}`} alt={logo.split('.')[0]} className="max-w-full max-h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CERTIFIED ============ */}
      <section className="py-16 sm:py-24 bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-black tracking-tighter mb-5">
            We are <span className="text-black/70">Proudly Certified</span> by
          </h2>
          <p className="text-gray-500 text-base sm:text-[17px] leading-relaxed mb-12 sm:mb-16 max-w-3xl mx-auto font-medium">
            We're thrilled to announce that Inturnship has been certified for its outstanding educational offerings, assuring professionals and students of our commitment to excellence.
          </p>
          <div className="flex justify-center items-center px-4 w-full">
            <img 
              src="/Certified.svg" 
              alt="Government Certifications" 
              className="w-full max-w-2xl sm:max-w-4xl md:max-w-5xl h-auto object-contain drop-shadow-sm" 
            />
          </div>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section id="features" className="py-20 sm:py-28 relative bg-gray-50 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 sm:mb-16">

            <h2 className="text-3xl sm:text-4xl font-black text-black mb-4 tracking-tighter">
              Everything You Need to <span className="text-black/70">Succeed</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-medium">
              From internships to projects to expert guidance - we've got your entire career journey covered.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white border border-black/5 p-6 sm:p-7 group hover:border-black/30 transition-all duration-300 hover:-translate-y-2 flex flex-col shadow-sm hover:shadow-md"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 bg-gray-50 border border-black/5"
                >
                  <f.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold text-black mb-2 tracking-tight">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1 font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="py-20 sm:py-28 bg-white border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 sm:mb-16">

            <h2 className="text-3xl sm:text-4xl font-black text-black mb-4 tracking-tighter">
              Get Started in <span className="text-black/70">4 Simple Steps</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {howItWorks.map((item, index) => (
              <div key={item.step} className="relative">
                {/* Connector line (desktop only) */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-black/10 z-20" />
                )}
                <div className="bg-gray-50 border border-black/5 p-6 sm:p-7 text-center group hover:border-black/30 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col items-center shadow-sm hover:shadow-md">
                  <div className="text-5xl font-black text-black/5 mb-2 select-none tracking-tighter">
                    {item.step}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mx-auto mb-4 border border-black/5 group-hover:border-black/20 transition-colors shadow-sm">
                    <item.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INTERNSHIPS ============ */}
      <section id="internships" className="py-20 sm:py-32 bg-white border-t border-black/5 relative">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-12 sm:mb-16 gap-6 text-center sm:text-left">
            <div className="space-y-2 flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-2">
                <div className="w-8 h-1 bg-black rounded-full" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/50">Experience Matters</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-[0.9]">
                Trending <span className="text-black/60">Internships</span>
              </h2>
            </div>
            <Link
              href="/signup/student"
              className="px-6 py-3 rounded-xl bg-black text-white text-xs font-black hover:bg-black/80 transition-all uppercase tracking-widest flex items-center gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0"
            >
              All Internships <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Simplilearn-style Side Navigation Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Sidebar - Domain Navigation */}
            <div className="lg:col-span-3">
              {/* Desktop: Vertical list */}
              <nav className="hidden lg:flex flex-col gap-3 sticky top-8" role="navigation" aria-label="Internship domains">
                {DOMAINS.map((domain) => (
                  <button
                    key={domain}
                    onClick={() => setActiveDomain(domain)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveDomain(domain);
                      }
                    }}
                    tabIndex={0}
                    role="menuitem"
                    aria-selected={activeDomain === domain}
                    className={`
                      w-full text-left px-5 py-4 rounded-xl font-bold text-sm tracking-tight transition-all duration-300
                      ${activeDomain === domain 
                        ? 'bg-black text-white shadow-lg scale-105' 
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:shadow-md hover:scale-[1.02] border border-gray-100'
                      }
                    `}
                  >
                    {domain}
                  </button>
                ))}
              </nav>

              {/* Mobile: Horizontal scroll category picker */}
              <nav className="lg:hidden flex overflow-x-auto gap-3 pb-4 -mx-4 px-4 scrollbar-hide" role="navigation" aria-label="Internship domains mobile">
                {DOMAINS.map((domain) => (
                  <button
                    key={domain}
                    onClick={() => setActiveDomain(domain)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveDomain(domain);
                      }
                    }}
                    tabIndex={0}
                    role="menuitem"
                    aria-selected={activeDomain === domain}
                    className={`
                      shrink-0 px-5 py-3 rounded-full font-bold text-xs tracking-tight transition-all duration-300 whitespace-nowrap
                      ${activeDomain === domain 
                        ? 'bg-black text-white shadow-lg' 
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-100'
                      }
                    `}
                  >
                    {domain}
                  </button>
                ))}
              </nav>
            </div>

            {/* Content Area - Cards Grid */}
            <div className="lg:col-span-9">
              <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ${isAnimating ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                {currentInternships.map((item, index) => (
                  <div
                    key={item.id}
                    className="group bg-white rounded-3xl overflow-hidden border border-black/[0.03] premium-card-shadow transition-all duration-500 hover:-translate-y-3 flex flex-col h-full animate-card"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Image with company logo overlay */}
                    <div className="aspect-[16/9] w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                      <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 absolute bottom-3 right-3 border border-gray-100">
                        <img 
                          src={item.companyLogo} 
                          alt={`${item.company} logo`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                      {/* Internship badge */}
                      <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-black/10">
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">{item.type}</span>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                      {/* Metadata Row */}
                      <div className="flex items-center gap-3 mb-4 text-[11px] font-black text-black/40 uppercase tracking-widest border-b border-black/[0.03] pb-3">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-black" /> {item.duration}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-black" /> {item.students}
                        </div>
                        <div className="flex items-center gap-1.5 ml-auto text-black">
                          <Star className="w-3.5 h-3.5 fill-black" /> {item.rating}
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-black text-black mb-2 tracking-tight leading-tight group-hover:text-black/70 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400 font-bold mb-4 line-clamp-2">{item.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                        {item.skills.map((s) => (
                          <span
                            key={s}
                            className="px-2.5 py-1 rounded-lg bg-gray-50 text-gray-500 text-[9px] font-black border border-black/[0.03] uppercase tracking-wider group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-black/[0.03]">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em] mb-0.5">Stipend</span>
                          <span className="text-base font-black text-black tracking-tight">{item.stipend}</span>
                        </div>
                        <Link
                          href="/signup/student"
                          className="group/btn flex items-center gap-2 text-xs font-black text-black uppercase tracking-widest hover:gap-3 transition-all duration-300"
                        >
                          Explore <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty state */}
              {currentInternships.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-400 font-medium">No internships found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROJECTS ============ */}
      <section id="projects" className="py-20 sm:py-32 bg-gray-50 border-t border-black/5 relative">
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-12 sm:mb-16 gap-6 text-center sm:text-left">
            <div className="space-y-2 flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-2">
                <div className="w-8 h-1 bg-black rounded-full" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/50">Build Your Portfolio</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-[0.9]">
                Popular <span className="text-black/60">Projects</span>
              </h2>
            </div>
            <Link
              href="/signup/student"
              className="px-6 py-3 rounded-xl bg-white border border-black/5 text-black text-xs font-black hover:bg-black hover:text-white transition-all uppercase tracking-widest flex items-center gap-2 shadow-sm hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              All Projects <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {projects.map((item) => (
              <div
                key={item.title}
                className="group bg-white rounded-3xl overflow-hidden border border-black/[0.03] premium-card-shadow transition-all duration-500 hover:-translate-y-3 flex flex-col h-full"
              >
                {/* Image Placeholder */}
                <div className="aspect-[16/9] w-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <FolderOpen className="w-12 h-12 text-black/5 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">{item.category}</span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  {/* Metadata Row */}
                  <div className="flex items-center gap-4 mb-6 text-[11px] font-black text-black/40 uppercase tracking-widest border-b border-black/[0.03] pb-4">
                    <div className="flex items-center gap-1.5">
                      <ArrowRight className="w-3.5 h-3.5 text-black rotate-[-45deg]" /> {item.downloads}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-black" /> {item.tech.length} Tech
                    </div>
                    <div className="flex items-center gap-1.5 ml-auto text-black">
                      <Star className="w-3.5 h-3.5 fill-black" /> {item.rating}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-black mb-2 tracking-tight leading-tight group-hover:text-black/70 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-bold mb-6">{item.category}</p>

                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {item.tech.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1.5 rounded-lg bg-gray-50 text-gray-500 text-[10px] font-black border border-black/[0.03] uppercase tracking-wider group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-black/[0.03]">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em] mb-0.5">Full Code</span>
                      <span className="text-lg font-black text-black tracking-tight">{item.price}</span>
                    </div>
                    <Link
                      href="/signup/student"
                      className="px-5 py-2.5 rounded-xl bg-black text-white text-[10px] font-black uppercase tracking-widest hover:bg-black/80 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONSULTANTS ============ */}
      <section id="consultants" className="py-20 sm:py-28 bg-white border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-12 sm:mb-16 gap-6 text-center sm:text-left">
            <div className="space-y-2 flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-2">
                <div className="w-8 h-1 bg-black rounded-full" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/50">Expert Guidance</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-[0.9]">
                Top <span className="text-black/60">Consultants</span>
              </h2>
            </div>
            <Link
              href="/signup/student"
              className="px-6 py-3 rounded-xl bg-white border border-black/5 text-black text-xs font-black hover:bg-black hover:text-white transition-all uppercase tracking-widest flex items-center gap-2 shadow-sm hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              All Experts <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {consultants.map((c) => (
              <div
                key={c.name}
                className="group bg-white rounded-3xl overflow-hidden border border-black/[0.03] premium-card-shadow transition-all duration-500 hover:-translate-y-3 flex flex-col items-center p-8 sm:p-10 text-center relative"
              >
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -z-0 opacity-50" />
                
                <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-gray-900 to-black mb-6 flex items-center justify-center text-2xl font-black text-white shadow-2xl border-4 border-white group-hover:scale-110 transition-transform duration-500">
                  {c.name.split(" ").map((n) => n[0]).join("")}
                </div>
                
                <h3 className="relative z-10 text-xl sm:text-2xl font-black text-black mb-1 tracking-tight">{c.name}</h3>
                <p className="relative z-10 text-sm text-gray-400 font-bold mb-6 uppercase tracking-widest text-[10px]">Expert in {c.expertise}</p>
                
                <div className="relative z-10 flex items-center justify-center gap-4 text-[11px] font-black text-black/40 uppercase tracking-widest mb-8 border-y border-black/[0.03] py-4 w-full">
                  <span className="flex items-center gap-1.5 text-black">
                    <Star className="w-4 h-4 fill-black" /> {c.rating}
                  </span>
                  <div className="w-1 h-1 rounded-full bg-black/10" />
                  <span>{c.sessions} Sessions</span>
                </div>

                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between w-full gap-5 pt-2">
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em] mb-0.5 whitespace-nowrap">Session Rate</span>
                    <span className="text-xl font-black text-black tracking-tight">{c.rate}</span>
                  </div>
                  <Link 
                    href="/signup/student" 
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-black text-white text-[10px] font-black uppercase tracking-widest hover:bg-black/80 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LATEST REELS ============ */}
      <section className="py-20 sm:py-28 bg-white border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 mb-12 sm:mb-16 text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-black text-black mb-4 tracking-tighter">
                Watch Career <span className="text-black/70">Reels</span>
              </h2>
              <p className="text-gray-500 text-base sm:text-lg font-medium">
                Short, powerful videos from industry experts. Like Instagram, but for your career growth.
              </p>
            </div>
            <Link href="/signup/student" className="group flex items-center gap-2 text-black font-black uppercase tracking-widest text-sm hover:text-gray-600 transition-colors">
              View All Reels <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {trendingReels.map((reel) => (
              <div key={reel.id} className="reel-card group cursor-pointer relative bg-black shadow-2xl">
                {/* Video Placeholder */}
                <div className="absolute inset-0 bg-[#0d0d0d] flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110 border border-white/10">
                    <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                  </div>
                </div>

                {/* Right Side Actions Preview */}
                <div className="absolute right-4 bottom-32 flex flex-col items-center gap-5 z-20">
                  <div className="flex flex-col items-center gap-1">
                    <Heart className="w-7 h-7 text-white" />
                    <span className="text-[10px] text-white font-bold">{reel.likes}</span>
                  </div>
                  <MessageCircle className="w-6 h-6 text-white" />
                  <Share2 className="w-6 h-6 text-white" />
                </div>

                {/* Info Overlay */}
                <div className="reel-overlay p-6 pt-24 bg-gradient-to-t from-black via-black/70 to-transparent">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black text-xs font-black shrink-0">
                      {reel.consultant.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-xs font-black text-white tracking-tight">{reel.consultant}</p>
                      <p className="text-[9px] text-white/50 font-bold uppercase tracking-widest">{reel.expertise}</p>
                    </div>
                  </div>
                  <p className="text-sm text-white font-bold mb-6 line-clamp-2 leading-snug">{reel.title}</p>
                  
                  <Link href="/signup/student" className="w-full py-3 rounded-xl bg-white text-black text-[10px] font-black text-center uppercase tracking-widest hover:bg-gray-200 transition-all shadow-lg flex items-center justify-center gap-2">
                    Start Learning <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-20 sm:py-28 bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gray-50 border border-black/10 rounded-2xl shadow-sm">
            <div className="p-8 sm:p-12 md:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-black text-black mb-4 tracking-tighter">
                Ready to Build Your Future?
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed font-medium">
                Join thousands of students who are already leveling up their careers with
                Inturnship. It's free to sign up!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link href="/signup/student" className="btn-primary bg-black text-white hover:bg-gray-800 text-base !py-3.5 !px-8 w-full sm:w-auto justify-center font-bold tracking-wide">
                  Sign Up as Student <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/signup/consultant" className="btn-secondary bg-white text-black border border-black/10 hover:border-black/30 hover:bg-gray-50 text-base !py-3.5 !px-8 w-full sm:w-auto justify-center font-bold tracking-wide">
                  Join as Consultant
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
