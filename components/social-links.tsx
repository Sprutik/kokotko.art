import { Linkedin, Mail, Twitter } from "lucide-react";

export default function SocialLinks() {
  const socialLinks = [
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/marta_kokotko" },
    { name: "Mail", icon: Mail, url: "mailto: martakokotko1@gmail.com" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/marta-kokotko " },
  ];

  return (
    <div className="container mx-auto px-4 my-8">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <hr className="border-t border-gray-300 dark:border-gray-700" />
        <div className="flex items-center justify-center space-x-4">
          {socialLinks.map((link, index) => (
            <div key={link.name} className="flex items-center">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-200"
              >
                <link.icon className="w-6 h-6" />
                <span className="sr-only">{link.name}</span>
              </a>
              {index < socialLinks.length - 1 && <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-4" />}
            </div>
          ))}
        </div>
        <hr className="border-t border-gray-300 dark:border-gray-700" />
      </div>
    </div>
  );
}
