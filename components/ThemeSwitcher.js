"use client";
import { useTheme } from "next-themes";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import { Palette } from "lucide-react";
import { useEffect, useState } from "react";

const THEMES = [
  { key: "light", label: "Light" },
  { key: "dark", label: "Dark" },
  { key: "ocean", label: "Ocean" },
  { key: "sunset", label: "Sunset" },
  { key: "forest", label: "Forest" },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <Button isIconOnly variant="light" aria-label="Theme"><Palette size={18} /></Button>;
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly variant="flat" aria-label="Change theme">
          <Palette size={18} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Theme" selectedKeys={new Set([theme])} selectionMode="single"
        onSelectionChange={(keys) => setTheme(Array.from(keys)[0])}>
        {THEMES.map((t) => (
          <DropdownItem key={t.key}>{t.label}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
