const COMMANDS = {
  help: () => `Available Commands:
  /about        - Learn about me
  /skills       - View technical skills
  /experience   - See work experience
  /projects     - View my projects
  /education    - Education details
  /resume       - View résumé options
  /contact      - Contact information
  /clear        - Clear terminal`,

  about: () => `FULL STACK ENGINEER | AI, VOICE AI & RAG SYSTEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Full-stack engineer with 2+ years of experience shipping production systems
end to end, from React/Next.js frontends to Node.js and FastAPI services on AWS.

Team lead owning architecture, code reviews, sprint delivery and engineering
execution for multi-tenant AI and voice platforms serving 1,000+ calls/day.

📍 Location: Pune, Maharashtra, India
🎓 Education: B.E. Computer Science (CGPA: 9.05/10.0)
🏫 Trinity Academy of Engineering, Pune`,

  skills: () => `FRONTEND
  ▓▓▓▓▓▓▓▓▓░ React.js / Next.js
  ▓▓▓▓▓▓▓▓▓░ TypeScript / JavaScript
  ▓▓▓▓▓▓▓▓░░ Tailwind CSS
  ▓▓▓▓▓▓▓▓░░ Redux / Zustand / TanStack Query

BACKEND & SYSTEMS
  ▓▓▓▓▓▓▓▓▓░ Node.js / Express.js
  ▓▓▓▓▓▓▓▓░░ Python / FastAPI
  ▓▓▓▓▓▓▓▓░░ REST / GraphQL / Microservices
  ▓▓▓▓▓▓▓▓░░ JWT / RBAC / Multi-tenancy

AI, VOICE & RAG
  ▓▓▓▓▓▓▓▓▓░ LLM Applications / AI Agents
  ▓▓▓▓▓▓▓▓░░ RAG / LangChain / Qdrant
  ▓▓▓▓▓▓▓▓░░ LiveKit / WebRTC / SIP / Twilio
  ▓▓▓▓▓▓▓▓░░ OpenAI / Claude / Gemini

DATABASES & CLOUD
  ▓▓▓▓▓▓▓▓▓░ PostgreSQL / MongoDB
  ▓▓▓▓▓▓▓▓░░ Redis / Snowflake / Prisma
  ▓▓▓▓▓▓▓▓░░ AWS / Docker / Nginx
  ▓▓▓▓▓▓▓░░░ Terraform / CloudWatch / Playwright`,

  experience: () => `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[FEB 2026 - PRESENT] Full Stack Developer (Team Lead) @ Vsynergize AI
📌 Pune, India

Key Achievements:
  ✓ Lead engineering across AI Faculty and AngelTel
  ✓ Own architecture, sprint planning, delegation and code reviews
  ✓ Built AngelTel, handling 1,000+ calls/day
  ✓ Engineered LiveKit, Twilio and SIP voice pipelines
  ✓ Implemented JWT, RBAC and tenant isolation across 100+ campaigns
  ✓ Built a 24/7 Qdrant-backed RAG student doubt-resolution chatbot
  ✓ Led the AI Faculty demo that secured a major institution partnership

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[JUL 2024 - JAN 2026] Software Development Engineer I @ DViO Digital
📌 Pune / Hybrid

Key Achievements:
  ✓ Delivered an award-winning Martech Analytics Dashboard
  ✓ Integrated 20+ APIs including Google Ads, Meta Ads and Snowflake
  ✓ Integrated Anthropic Claude, lifting engagement by 35%
  ✓ Improved Core Web Vitals by 40% and adoption by 25%
  ✓ Cut operational costs by 90% through custom ETL automation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[JAN 2024 - MAR 2024] Full Stack Developer Intern @ O2h Technology
📌 Ahmedabad, India

Key Achievements:
  ✓ Built a full-stack resource management platform with the MERN stack
  ✓ Improved performance by 30% using Redis and React lazy loading
  ✓ Reduced bounce rates by 15%`,

  projects: () => `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📁 PROJECT 1: AngelTel — AI Voice Call-Center Platform
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Description:
Multi-tenant voice AI platform with real-time streaming, interruption
handling, noise cancellation and orchestration across STT, TTS and LLM providers.

Tech Stack: React | Node.js | FastAPI | PostgreSQL | LiveKit | Twilio | SIP
Metrics: 1,000+ calls/day | 100+ concurrent campaigns

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📁 PROJECT 2: AI Faculty — RAG Education Platform
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Description:
A 24/7 student doubt-resolution chatbot grounded in syllabus content.

Tech Stack: React | Node.js | FastAPI | Qdrant | RAG | LLMs
Impact: Curriculum-accurate answers without human intervention

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📁 PROJECT 3: ClientConnect — Customer Segmentation
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔗 GitHub: https://github.com/Niraj-22/clientconnect

Description:
RFM and K-Means clustering platform for data-driven campaign targeting.

Tech Stack: React.js | Node.js | MongoDB | Python | scikit-learn
Metrics: 35% faster responses | JWT authentication | RBAC`,

  education: () => `🎓 BACHELOR OF ENGINEERING IN COMPUTER SCIENCE
   Trinity Academy of Engineering, Pune
   June 2020 – May 2024
   CGPA: 9.05/10.0

Key Highlights:
  ✓ Strong full-stack development foundation
  ✓ Artificial intelligence and data analytics experience
  ✓ Production-focused software engineering`,

  resume: () => `📄 AVAILABLE RÉSUMÉS

  /Niraj_Chordia_Resume (1).pdf
  Full-stack, AI systems and voice infrastructure

  /Niraj_Chordia_Resume_Agentic.pdf
  Agentic AI, voice AI and RAG systems

  /Niraj_Chordia_Resume_FullStack.pdf
  Full-stack engineering and scalable cloud systems`,

  contact: () => `📧 Email: niraj22chordia@gmail.com
📱 Phone: +91-9422571198

🌐 SOCIAL PROFILES
  ├─ GitHub: https://github.com/Niraj-22
  ├─ LinkedIn: https://www.linkedin.com/in/niraj-c-683170247
  └─ Portfolio: https://niraj-chordia.vercel.app

💬 Open to full-stack, AI systems and engineering leadership opportunities.`,

  clear: () => "CLEAR_SCREEN",
};

export function processCommand(input: string): string {
  const command = input.trim().toLowerCase().replace(/^\//, "");

  if (command === "clear") {
    return "CLEAR_SCREEN";
  }

  if (command in COMMANDS) {
    return COMMANDS[command as keyof typeof COMMANDS]();
  }

  return `Command not found: ${command}. Type /help for available commands.`;
}
