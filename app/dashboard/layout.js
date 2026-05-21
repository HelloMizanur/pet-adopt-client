"use client";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { PlusCircle, ListChecks, Inbox } from "lucide-react";
import ProtectedRoute from "@/components/ProtectedRoute";

const links = [
  { href: "/dashboard/my-listings", label: "My Listings", icon: ListChecks },
  { href: "/dashboard/add-pet", label: "Add Pet", icon: PlusCircle },
  { href: "/dashboard/my-requests", label: "My Requests", icon: Inbox },
];

export default function DashboardLayout({ children }) {
  const path = usePathname();
  return (
    <ProtectedRoute>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 grid md:grid-cols-[240px_1fr] gap-8">
        <aside className="md:sticky md:top-20 self-start">
          <div className="rounded-2xl bg-content1 border border-divider/40 p-4">
            <h3 className="font-bold mb-4 px-2">Dashboard</h3>
            <nav className="flex md:flex-col gap-1">
              {links.map((l) => {
                const active = path === l.href || path.startsWith(l.href + "/");
                return (
                  <NextLink key={l.href} href={l.href}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition
                      ${active ? "bg-primary text-primary-foreground" : "hover:bg-content2"}`}>
                    <l.icon size={16}/> {l.label}
                  </NextLink>
                );
              })}
            </nav>
          </div>
        </aside>
        <section>{children}</section>
      </div>
    </ProtectedRoute>
  );
}
