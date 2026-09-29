import Link from "next/link";
import { Logo } from "@/components/icons/Logo";
import { SearchInput } from "@/components/ui/SearchInput";

const linkColumns = [
  {
    heading: "Development",
    links: ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  },
  {
    heading: "Marketing",
    links: ["Photography", "Finance", "Sport"],
  },
  {
    heading: "",
    links: ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
  },
];

export function Footer() {
  return (
    <footer className="border-t-2 border-brand-pink bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 border-b border-zinc-200 pb-12 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <Logo textClassName="text-zinc-900" />
            <p className="mt-4 text-sm text-zinc-500">
              Stay Up to date with our latest features and releases by
              joining our newsletter.
            </p>
            <SearchInput
              type="email"
              placeholder="Enter your email"
              buttonLabel="Search"
              className="mt-4"
            />
            <p className="mt-3 text-xs text-zinc-400">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {linkColumns.map((col, i) => (
              <div key={i}>
                {col.heading && (
                  <h3 className="mb-3 text-sm font-semibold text-zinc-900">
                    {col.heading}
                  </h3>
                )}
                <ul className={`space-y-2 ${!col.heading ? "mt-7" : ""}`}>
                  {col.links.map((label) => (
                    <li key={label}>
                      <Link
                        href="#"
                        className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-zinc-900">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-zinc-900">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-zinc-900">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
