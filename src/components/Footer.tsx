
import React from "react";
import { MessageSquare, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const email = "hello@gsdat.work";
  const subject = "Website Inquiry";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  const linkedInUrl = "https://www.linkedin.com/company/100624720";

  return (
    <footer className="mt-20 pb-8 text-sm text-gray-600">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© {currentYear} GSD at Work LLC</div>
        <div className="flex items-center flex-wrap gap-4 justify-center">
          <a
            href={mailtoLink}
            className="text-primary hover:text-primary-light transition-colors flex items-center gap-1"
            aria-label="Email Us"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Contact Us</span>
          </a>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-light transition-colors flex items-center gap-1"
            aria-label="Follow us on LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/culstrup/get-stuff-done-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-light transition-colors flex items-center gap-1"
            aria-label="View the Get Stuff Done AI source code on GitHub"
          >
            <Github className="h-4 w-4" />
            <span>Open Source</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
