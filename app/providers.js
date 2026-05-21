"use client";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/lib/auth-context";
import { useRouter } from "next/navigation";

export function Providers({ children }) {
  const router = useRouter();
  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="light"
        themes={["light", "dark", "ocean", "sunset", "forest"]}
      >
        <AuthProvider>
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "hsl(var(--heroui-content1))",
                color: "hsl(var(--heroui-foreground))",
                border: "1px solid hsl(var(--heroui-divider))",
              },
            }}
          />
          {children}
        </AuthProvider>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
