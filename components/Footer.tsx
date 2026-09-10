import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-green-deep text-paper mt-32">
      <div className="max-w-wrap mx-auto px-6 py-16">
        <div className="grid md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.png" alt="Dev Neon" width={28} height={28} className="rounded-[6px]" />
              <span className="font-display font-semibold">Dev Neon</span>
            </div>
            <p className="text-sm text-paper/65 max-w-[28ch] leading-relaxed">
              Software. Designed for Growth. SaaS, web, mobile, and AI products for teams worldwide.
            </p>
          </div>

          <div>
            <p className="tag-label text-rust mb-3">&lt;sitemap&gt;</p>
            <ul className="space-y-2.5 text-sm text-paper/80">
              <li><Link href="/services" className="hover:text-paper">Services</Link></li>
              <li><Link href="/work" className="hover:text-paper">Work</Link></li>
              <li><Link href="/about" className="hover:text-paper">About</Link></li>
              <li><Link href="/contact" className="hover:text-paper">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="tag-label text-rust mb-3">&lt;contact&gt;</p>
            <ul className="space-y-2.5 text-sm text-paper/80">
              <li>hello@devneon.com</li>
              <li>Lahore, Pakistan</li>
            </ul>
          </div>

          <div>
            <p className="tag-label text-rust mb-3">&lt;stack&gt;</p>
            <p className="text-sm text-paper/80 leading-relaxed">
              React · Next.js · Node.js · Django · React Native · PostgreSQL
            </p>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-paper/15 flex flex-col sm:flex-row gap-3 justify-between text-xs text-paper/55">
          <span>© {new Date().getFullYear()} Dev Neon. All rights reserved.</span>
          <span className="font-mono">&lt;/devneon&gt;</span>
        </div>
      </div>
    </footer>
  );
}
