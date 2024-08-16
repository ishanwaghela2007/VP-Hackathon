import { Typography } from "@material-tailwind/react";
 
const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];
 
const currentYear = new Date().getFullYear();
 
export function Footer() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h5" className="mb-6">
            Stay Connected
          </Typography>
          {LINKS.map((link, index) => (
            <div key={index} className="mb-6">
              <Typography variant="h6" className="mb-4">
                {link.title}
              </Typography>
              <ul>
                {link.items.map((item, idx) => (
                  <li key={idx}>
                    <Typography
                      as="a"
                      href="#"
                      color="blue-gray"
                      className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-blue-gray-50 py-6 text-center">
          <Typography color="blue-gray" className="font-normal">
            © {currentYear} Your Company. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
