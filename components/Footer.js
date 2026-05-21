import NextLink from "next/link";
import { PawPrint, Mail, Phone, Github, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-divider/40 bg-content1/40 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <PawPrint className="text-primary" />
            <span className="font-extrabold text-xl">PawHaven</span>
          </div>
          <p className="text-sm text-foreground/70">
            Connecting loving homes with pets in need of one. Adopt, don't shop.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><NextLink href="/" className="hover:text-primary">Home</NextLink></li>
            <li><NextLink href="/pets" className="hover:text-primary">All Pets</NextLink></li>
            <li><NextLink href="/dashboard/add-pet" className="hover:text-primary">List a Pet</NextLink></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Mail size={14}/> hello@pawhaven.app</li>
            <li className="flex items-center gap-2"><Phone size={14}/> +1 (555) 010-0123</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Follow</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="GitHub" className="hover:text-primary"><Github size={18}/></a>
            <a href="#" aria-label="Twitter" className="hover:text-primary"><Twitter size={18}/></a>
            <a href="#" aria-label="Instagram" className="hover:text-primary"><Instagram size={18}/></a>
          </div>
        </div>
      </div>
      <div className="border-t border-divider/40 py-4 text-center text-xs text-foreground/60">
        © {new Date().getFullYear()} PawHaven. All rights reserved.
      </div>
    </footer>
  );
}
