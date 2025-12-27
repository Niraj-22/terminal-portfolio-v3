const COMMANDS = {
  help: () => `Available Commands:
  /about        - Learn about me
  /skills       - View technical skills
  /experience   - See work experience
  /projects     - View my projects
  /education    - Education details
  /contact      - Contact information
  /clear        - Clear terminal`,

  about: () => `Full Stack Developer | Pune, India
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Results-driven Full Stack Developer with 1.5+ years of experience designing 
and deploying scalable web applications. Expertise in React.js, TypeScript, 
Python, and Node.js with proven track record optimizing performance, 
integrating third-party APIs, and mentoring teams.

📍 Location: Pune, Maharashtra, India
🎓 Education: B.E. Computer Science (CGPA: 9.05) - Trinity Academy of Engineering`,

  skills: () => `FRONTEND TECHNOLOGIES
  ▓▓▓▓▓▓▓▓▓░ React.js
  ▓▓▓▓▓▓▓▓▓░ TypeScript
  ▓▓▓▓▓▓▓▓░░ Tailwind CSS
  ▓▓▓▓▓▓▓░░░ Redux

BACKEND TECHNOLOGIES
  ▓▓▓▓▓▓▓▓▓░ Node.js
  ▓▓▓▓▓▓▓▓░░ Python
  ▓▓▓▓▓▓▓░░░ Express.js

DATABASES
  ▓▓▓▓▓▓▓▓▓░ MongoDB
  ▓▓▓▓▓▓▓▓▓░ Snowflake
  ▓▓▓▓▓▓▓▓░░ MySQL, PostgreSQL

TOOLS & PLATFORMS
  Docker | Git | AWS | Linux | CI/CD | Agile/Scrum`,

  experience: () => `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[JUL 2024 - PRESENT] Software Engineer @ DViO Digital
📌 Hybrid Role

Key Achievements:
  ✓ Architected Martech Analytics Dashboard integrating 20+ third-party 
    connectors (Google Ads, Meta Ads, Snowflake)
  ✓ Migrated legacy Vue.js frontend to React Router v7
  ✓ Implemented Anthropic AI API for automated insights
  ✓ Enhanced SSR performance by 40% | Platform adoption ↑ 25%
  ✓ Streamlined operational costs by 90%
  ✓ Product awarded 3+ industry recognition awards

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[JAN 2024 - FEB 2024] Full Stack Developer Trainee @ O2h Technology
📌 Ahmedabad

Key Achievements:
  ✓ Developed full-stack resource management platform (MERN stack)
  ✓ Enhanced page speed by 30% | Reduced bounce rates by 15%`,

  projects: () => `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📁 PROJECT 1: ClientConnect
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔗 GitHub: https://github.com/Niraj-22/clientconnect

Description:
Customer segmentation platform leveraging RFM analysis and K-Means 
clustering (96.3% accuracy) for targeted marketing campaigns.

Tech Stack: React.js | Python | Machine Learning | Data Analytics
Metrics: 35% faster backend response times

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📁 PROJECT 2: Marketing Analytics Platform
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔗 DViO Digital | Currently Live

Description:
Full-stack solution integrating 20+ data connectors with optimized ETL 
pipelines. Delivers unified multi-channel campaign analytics for faster 
stakeholder decision-making.

Tech Stack: React.js | Python | Node.js | Snowflake | Airbyte
Impact: 3+ industry awards | 90% cost reduction`,

  education: () => `🎓 BACHELOR OF ENGINEERING IN COMPUTER SCIENCE
   Trinity Academy of Engineering, Pune
   Graduation: 2024
   CGPA: 9.05/10.0

Key Highlights:
  ✓ Consistent academic excellence
  ✓ Focus on full-stack development and data analytics
  ✓ Hands-on experience with modern web technologies`,

  contact: () => `📧 Email: niraj22chordia@gmail.com
📱 Phone: +91-9422571198

🌐 SOCIAL PROFILES
  ├─ GitHub: https://github.com/Niraj-22
  ├─ LinkedIn: https://www.linkedin.com/in/niraj-c-683170247
  ├─ Portfolio: https://niraj-chordia.vercel.app
  └─ Email: niraj22chordia@gmail.com

💬 Let's connect! Open to opportunities and collaborations.`,

  // resume: () => `📄 DOWNLOAD RESUME
  //  Your resume is ready for download!

  //  [DOWNLOAD PDF] ↓

  //  Alternatively, view online:
  //  https://niraj-chordia.vercel.app/resume`,

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
