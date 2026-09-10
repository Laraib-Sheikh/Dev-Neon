import type { Metadata } from "next";
import TagLabel from "@/components/TagLabel";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact — Dev Neon",
  description: "Start a project with Dev Neon.",
};


// headre

export default function ContactPage() {
  return (
    <section className="max-w-wrap mx-auto px-6 pt-20 pb-28 grid md:grid-cols-[0.9fr_1.1fr] gap-16">
      <Reveal>
        <div>
          <TagLabel>contact</TagLabel>
          <h1 className="font-display text-4xl font-semibold max-w-[14ch] leading-[1.1] mb-6">
            Let&apos;s build something great.
          </h1>
          <p className="text-soft leading-relaxed max-w-[42ch] mb-10">
            Tell us what you&apos;re building, what problem you&apos;re solving,
            and where you want to go. We reply within 1–2 business days.
          </p>

          <dl className="space-y-5 text-sm">
            <div>
              <dt className="tag-label mb-1">email</dt>
              <dd>
                <a href="mailto:hello@devneon.com" className="hover:text-green transition-colors">
                  hello@devneon.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="tag-label mb-1">based in</dt>
              <dd>Lahore, Pakistan</dd>
            </div>
            <div>
              <dt className="tag-label mb-1">working hours</dt>
              <dd>Mon–Fri, overlapping US/UK/UAE time zones</dd>
            </div>
          </dl>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="border hairline rounded-xl p-6 sm:p-8 bg-white/80 shadow-sm">
          <ContactForm />
        </div>
      </Reveal>
    </section>
  );
}
