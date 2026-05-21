"use client";
import {
  Navbar as HNav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Button,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Link as HLink,
} from "@heroui/react";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { PawPrint } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";
import { useAuth } from "@/lib/auth-context";
import toast from "react-hot-toast";

const links = [
  { href: "/", label: "Home" },
  { href: "/pets", label: "All Pets" },
  { href: "/dashboard/my-requests", label: "My Requests", private: true },
  { href: "/dashboard/add-pet", label: "Add Pet", private: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();

  const onLogout = async () => {
    try {
      await logout();
      toast.success("Logged out");
      router.push("/");
    } catch {
      toast.error("Failed to logout");
    }
  };

  return (
    <HNav
      isMenuOpen={open}
      onMenuOpenChange={setOpen}
      maxWidth="xl"
      isBordered
      classNames={{ base: "bg-background/70 backdrop-blur-md" }}
    >
      <NavbarContent>
        <NavbarMenuToggle className="sm:hidden" aria-label="menu" />
        <NavbarBrand>
          <NextLink href="/" className="flex items-center gap-2">
            <PawPrint className="text-primary" />
            <span className="font-extrabold text-xl tracking-tight">
              Paw<span className="gradient-text">Haven</span>
            </span>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {links.map((l) => {
          if (l.private && !user) return null;
          const active = pathname === l.href;
          return (
            <NavbarItem key={l.href} isActive={active}>
              <HLink as={NextLink} href={l.href} color={active ? "primary" : "foreground"}>
                {l.label}
              </HLink>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem><ThemeSwitcher /></NavbarItem>
        {user ? (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered as="button" className="transition-transform"
                color="primary" size="sm"
                src={user.photoURL || undefined} name={user.name}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2" textValue="profile">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold text-primary">{user.email}</p>
              </DropdownItem>
              <DropdownItem key="dashboard" onPress={() => router.push("/dashboard/my-listings")}>
                Dashboard
              </DropdownItem>
              <DropdownItem key="logout" color="danger" onPress={onLogout}>
                Logout
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <NavbarItem>
            <Button as={NextLink} href="/login" color="primary" variant="shadow">
              Login
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenu>
        {links.map((l) => {
          if (l.private && !user) return null;
          return (
            <NavbarMenuItem key={l.href}>
              <HLink as={NextLink} href={l.href} className="w-full" size="lg" onPress={() => setOpen(false)}>
                {l.label}
              </HLink>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </HNav>
  );
}
