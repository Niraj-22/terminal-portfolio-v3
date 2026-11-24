import { Mail, Phone, Github, Linkedin, FileText } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "niraj22chordia@gmail.com",
    href: "mailto:niraj22chordia@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9422571198",
    href: "tel:+919422571198",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Niraj-22",
    href: "https://github.com/Niraj-22",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Niraj Chordia",
    href: "https://www.linkedin.com/in/niraj-c-683170247",
  },
];

const resumeLinks = [
  { label: "Full-stack résumé", href: "/Niraj_Chordia_Resume (1).pdf" },
  { label: "Agentic AI résumé", href: "/Niraj_Chordia_Resume_Agentic.pdf" },
  { label: "Engineering résumé", href: "/Niraj_Chordia_Resume_FullStack.pdf" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 terminal-glow">
          <span className="text-secondary">./</span>contact
        </h2>

        <p className="text-lg text-muted-foreground mb-12">
          💬 Let's connect! Open to opportunities and collaborations.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {contactLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <link.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{link.label}</h3>
                  <p className="text-sm text-muted-foreground break-all">
                    {link.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" /> Download résumé
          </h3>
          <div className="flex flex-wrap gap-3">
            {resumeLinks.map((resume) => (
              <a
                key={resume.label}
                href={resume.href}
                download
                className="px-5 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
              >
                {resume.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
