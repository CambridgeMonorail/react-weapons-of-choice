import React, { useEffect, useState } from 'react';

const baseColors = [
  { bg: 'bg-background', fg: 'text-foreground', label: 'Background' },
  { bg: 'bg-foreground', fg: 'text-background', label: 'Foreground' },
  { bg: 'bg-card', fg: 'text-card-foreground', label: 'Card' },
  { bg: 'bg-card-foreground', fg: 'text-card', label: 'Card Foreground' },
  { bg: 'bg-popover', fg: 'text-popover-foreground', label: 'Popover' },
  { bg: 'bg-popover-foreground', fg: 'text-popover', label: 'Popover Foreground' },
  { bg: 'bg-primary', fg: 'text-primary-foreground', label: 'Primary' },
  { bg: 'bg-primary-foreground', fg: 'text-primary', label: 'Primary Foreground' },
  { bg: 'bg-secondary', fg: 'text-secondary-foreground', label: 'Secondary' },
  { bg: 'bg-secondary-foreground', fg: 'text-secondary', label: 'Secondary Foreground' },
  { bg: 'bg-muted', fg: 'text-muted-foreground', label: 'Muted' },
  { bg: 'bg-muted-foreground', fg: 'text-muted', label: 'Muted Foreground' },
  { bg: 'bg-accent', fg: 'text-accent-foreground', label: 'Accent' },
  { bg: 'bg-accent-foreground', fg: 'text-accent', label: 'Accent Foreground' },
  { bg: 'bg-destructive', fg: 'text-destructive-foreground', label: 'Destructive' },
  { bg: 'bg-destructive-foreground', fg: 'text-destructive', label: 'Destructive Foreground' },
  { bg: 'bg-border', fg: 'text-foreground', label: 'Border' },
  { bg: 'bg-input', fg: 'text-foreground', label: 'Input' },
  { bg: 'bg-ring', fg: 'text-foreground', label: 'Ring' },
  { bg: 'bg-radius', fg: 'text-foreground', label: 'Radius' },
  { bg: 'bg-chart-1', fg: 'text-foreground', label: 'Chart 1' },
  { bg: 'bg-chart-2', fg: 'text-foreground', label: 'Chart 2' },
  { bg: 'bg-chart-3', fg: 'text-foreground', label: 'Chart 3' },
  { bg: 'bg-chart-4', fg: 'text-foreground', label: 'Chart 4' },
  { bg: 'bg-chart-5', fg: 'text-foreground', label: 'Chart 5' },
  { bg: 'bg-sidebar-background', fg: 'text-sidebar-foreground', label: 'Sidebar Background' },
  { bg: 'bg-sidebar-foreground', fg: 'text-sidebar-background', label: 'Sidebar Foreground' },
  { bg: 'bg-sidebar-primary', fg: 'text-sidebar-primary-foreground', label: 'Sidebar Primary' },
  { bg: 'bg-sidebar-primary-foreground', fg: 'text-sidebar-primary', label: 'Sidebar Primary Foreground' },
  { bg: 'bg-sidebar-accent', fg: 'text-sidebar-accent-foreground', label: 'Sidebar Accent' },
  { bg: 'bg-sidebar-accent-foreground', fg: 'text-sidebar-accent', label: 'Sidebar Accent Foreground' },
  { bg: 'bg-sidebar-border', fg: 'text-foreground', label: 'Sidebar Border' },
  { bg: 'bg-sidebar-ring', fg: 'text-foreground', label: 'Sidebar Ring' },
];

const getComputedColor = (className: string, root: HTMLElement) => {
  const tempDiv = document.createElement("div");
  tempDiv.className = className;
  root.appendChild(tempDiv);
  const color = window.getComputedStyle(tempDiv).color;
  root.removeChild(tempDiv);
  return color;
};

const rgbToHex = (rgb: string): string => {
  const result = rgb.match(/\d+/g);
  if (!result) return rgb;
  const [r, g, b] = result.map(Number);
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
};

const hexToRgb = (hex: string): [number, number, number] | null => {
  const match = hex.match(/^rgba?\((\d+), (\d+), (\d+).*\)$/);
  return match ? [+match[1], +match[2], +match[3]] as [number, number, number] : null;
};

const getRelativeLuminance = (rgb: [number, number, number]) => {
  const [r, g, b] = rgb.map((v) => {
    const normalized = v / 255;
    return normalized <= 0.03928 ? normalized / 12.92 : Math.pow((normalized + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const calculateContrast = (lum1: number, lum2: number) => {
  const brighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (brighter + 0.05) / (darker + 0.05);
};

const checkContrast = (contrast: number) => {
  return {
    largeText: contrast >= 3,
    normalText: contrast >= 4.5,
    enhanced: contrast >= 7,
  };
};

const ColorPalettePage = () => {
  const [contrastRatios, setContrastRatios] = useState<Record<string, number>>({});
  const [contrastChecks, setContrastChecks] = useState<Record<string, ReturnType<typeof checkContrast>>>({});
  const [colorHexes, setColorHexes] = useState<Record<string, { bg: string, fg: string }>>({});

  useEffect(() => {
    const root = document.body;
    const ratios: Record<string, number> = {};
    const checks: Record<string, ReturnType<typeof checkContrast>> = {};
    const hexes: Record<string, { bg: string, fg: string }> = {};
    baseColors.forEach(({ bg, fg, label }) => {
      const bgColor = getComputedColor(bg, root);
      const fgColor = getComputedColor(fg, root);
      const bgRgb = hexToRgb(bgColor);
      const fgRgb = hexToRgb(fgColor);

      if (bgRgb && fgRgb) {
        const bgLuminance = getRelativeLuminance(bgRgb);
        const fgLuminance = getRelativeLuminance(fgRgb);
        const contrast = calculateContrast(bgLuminance, fgLuminance);
        ratios[label] = contrast;
        checks[label] = checkContrast(contrast);
        hexes[label] = { bg: rgbToHex(bgColor), fg: rgbToHex(fgColor) };
      }
    });
    setContrastRatios(ratios);
    setContrastChecks(checks);
    setColorHexes(hexes);
  }, []);

  return (
    <div className="p-6 m-4 space-y-6 bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-4 text-primary">Color Palette</h1>
      <h2 className="text-2xl font-semibold mb-2 text-secondary">Base Colors</h2>
      <p className="mb-4 ">
        Use the switcher in the header bar to see the dark theme colors.
      </p>
      <p className="mb-4 ">
        According to WCAG guidelines, the minimum contrast ratio should be:
        <ul className="list-disc list-inside">
          <li>3:1 for large text (18pt and larger, or 14pt and bold)</li>
          <li>4.5:1 for normal text</li>
          <li>7:1 for enhanced readability</li>
        </ul>
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {baseColors.map(({ bg, fg, label }) => (
          <div key={label} className={`p-4 ${bg} ${fg} rounded-lg`}>
            <div>{label}</div>
            <div>
              Contrast:{" "}
              {contrastRatios[label]
                ? contrastRatios[label].toFixed(2)
                : "Calculating..."}
            </div>
            <div className="text-xs italic">
              <div>
                Large Text:{" "}
                {contrastChecks[label]?.largeText ? "Pass" : "Fail"}
              </div>
              <div>
                Normal Text:{" "}
                {contrastChecks[label]?.normalText ? "Pass" : "Fail"}
              </div>
              <div>
                Enhanced Readability:{" "}
                {contrastChecks[label]?.enhanced ? "Pass" : "Fail"}
              </div>
            </div>
            <div className="text-xs">
              <div>Background: {colorHexes[label]?.bg}</div>
              <div>Foreground: {colorHexes[label]?.fg}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { ColorPalettePage };