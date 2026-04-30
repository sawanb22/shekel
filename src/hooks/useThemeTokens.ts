"use client";

import { useMemo } from "react";
import { useTheme } from "next-themes";
import { colors, radiuses, typography } from "@/tokens/design-tokens";
import { colorsDark } from "@/tokens/design-tokens-dark";

export function useThemeTokens() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return useMemo(
    () => ({
      colors: isDark ? colorsDark : colors,
      typography,
      radiuses,
      isDark,
    }),
    [isDark]
  );
}
