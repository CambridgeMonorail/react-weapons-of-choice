import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  cn,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@erisfy/shadcnui';
import React, { useEffect, useState } from 'react';

interface ColorPair {
  bg: string;
  fg: string;
  name: string;
}

interface SingleColor {
  class: string;
  name: string;
}

interface ColorHex {
  bg: string;
  fg: string;
}

const colorPairs: ColorPair[] = [
  { bg: 'bg-background', fg: 'text-foreground', name: 'Background' },
  { bg: 'bg-card', fg: 'text-card-foreground', name: 'Card' },
  { bg: 'bg-popover', fg: 'text-popover-foreground', name: 'Popover' },
  { bg: 'bg-primary', fg: 'text-primary-foreground', name: 'Primary' },
  { bg: 'bg-secondary', fg: 'text-secondary-foreground', name: 'Secondary' },
  { bg: 'bg-muted', fg: 'text-muted-foreground', name: 'Muted' },
  { bg: 'bg-accent', fg: 'text-accent-foreground', name: 'Accent' },
  {
    bg: 'bg-destructive',
    fg: 'text-destructive-foreground',
    name: 'Destructive',
  },
  {
    bg: 'bg-[hsl(var(--sidebar-background))]',
    fg: 'text-[hsl(var(--sidebar-foreground))]',
    name: 'Sidebar',
  },
  {
    bg: 'bg-[hsl(var(--sidebar-primary))]',
    fg: 'text-[hsl(var(--sidebar-primary-foreground))]',
    name: 'Sidebar Primary',
  },
  {
    bg: 'bg-[hsl(var(--sidebar-accent))]',
    fg: 'text-[hsl(var(--sidebar-accent-foreground))]',
    name: 'Sidebar Accent',
  },
];

const singleColors: SingleColor[] = [
  { class: 'border-border', name: 'Border' },
  { class: 'bg-input', name: 'Input' },
  { class: 'ring-ring', name: 'Ring' },
  { class: 'bg-[hsl(var(--chart-1))]', name: 'Chart 1' },
  { class: 'bg-[hsl(var(--chart-2))]', name: 'Chart 2' },
  { class: 'bg-[hsl(var(--chart-3))]', name: 'Chart 3' },
  { class: 'bg-[hsl(var(--chart-4))]', name: 'Chart 4' },
  { class: 'bg-[hsl(var(--chart-5))]', name: 'Chart 5' },
  { class: 'border-[hsl(var(--sidebar-border))]', name: 'Sidebar Border' },
  { class: 'ring-[hsl(var(--sidebar-ring))]', name: 'Sidebar Ring' },
];

const getComputedColor = (
  className: string,
  root: HTMLElement,
  property: 'color' | 'backgroundColor'
): string => {
  const tempDiv = document.createElement('div');
  tempDiv.className = className;
  root.appendChild(tempDiv);
  const color = window.getComputedStyle(tempDiv)[property];
  root.removeChild(tempDiv);
  return color;
};

const rgbToHex = (rgb: string): string => {
  const result = rgb.match(/\d+/g);
  if (!result) return rgb;
  const [r, g, b] = result.map(Number);
  return `#${((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)
    .toUpperCase()}`;
};

const hexToRgb = (hex: string): [number, number, number] | null => {
  const match = hex.match(/^rgba?\((\d+), (\d+), (\d+).*\)$/);
  return match
    ? ([+match[1], +match[2], +match[3]] as [number, number, number])
    : null;
};

const getRelativeLuminance = (rgb: [number, number, number]): number => {
  const [r, g, b] = rgb.map((v) => {
    const normalized = v / 255;
    return normalized <= 0.03928
      ? normalized / 12.92
      : Math.pow((normalized + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const calculateContrast = (lum1: number, lum2: number): number => {
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

const ColorBlock = ({
  bgClass,
  fgClass,
  name,
  contrast,
  checks,
  hexes,
}: {
  bgClass: string;
  fgClass: string;
  name: string;
  contrast?: number;
  checks?: ReturnType<typeof checkContrast>;
  hexes?: ColorHex;
}) => (
  <Card className={cn('overflow-hidden', bgClass)}>
    <CardHeader className="p-4">
      <CardTitle className={cn('text-lg', fgClass)}>{name}</CardTitle>
    </CardHeader>
    <CardContent className={cn('p-4 pt-0', fgClass)}>
      <p className="text-sm">
        Contrast: {contrast ? contrast.toFixed(2) : 'N/A'}
      </p>
      <p className="text-xs italic">
        <div>Large Text: {checks?.largeText ? 'Pass' : 'Fail'}</div>
        <div>Normal Text: {checks?.normalText ? 'Pass' : 'Fail'}</div>
        <div>Enhanced Readability: {checks?.enhanced ? 'Pass' : 'Fail'}</div>
      </p>
      <p className="text-xs">
        <div>Background: {hexes?.bg}</div>
        <div>Foreground: {hexes?.fg}</div>
      </p>
    </CardContent>
  </Card>
);

const ColorCircle = ({
  colorClass,
  name,
}: {
  colorClass: string;
  name: string;
}) => (
  <div className="flex flex-col items-center">
    <div
      className={cn(
        'w-16 h-16 rounded-full shadow-md',
        colorClass,
        colorClass.startsWith('border-') ? 'border-4' : '',
        colorClass.startsWith('ring-') ? 'ring-4' : ''
      )}
    />
    <span className="mt-2 text-sm text-center">{name}</span>
  </div>
);

const ColorPalettePage: React.FC = () => {
  const [contrastRatios, setContrastRatios] = useState<Record<string, number>>(
    {}
  );
  const [contrastChecks, setContrastChecks] = useState<
    Record<string, ReturnType<typeof checkContrast>>
  >({});
  const [colorHexes, setColorHexes] = useState<Record<string, ColorHex>>({});

  useEffect(() => {
    const root = document.body;
    const ratios: Record<string, number> = {};
    const checks: Record<string, ReturnType<typeof checkContrast>> = {};
    const hexes: Record<string, ColorHex> = {};
    colorPairs.forEach(({ bg, fg, name }) => {
      const bgColor = getComputedColor(bg, root, 'backgroundColor');
      const fgColor = getComputedColor(fg, root, 'color');
      const bgHex = rgbToHex(bgColor);
      const fgHex = rgbToHex(fgColor);
      const bgRgb = hexToRgb(bgColor);
      const fgRgb = hexToRgb(fgColor);

      console.log(`Processing ${name}`);
      console.log(`Background color: ${bgColor}, Foreground color: ${fgColor}`);
      console.log(`Background hex: ${bgHex}, Foreground hex: ${fgHex}`);

      if (bgRgb && fgRgb) {
        const bgLuminance = getRelativeLuminance(bgRgb);
        const fgLuminance = getRelativeLuminance(fgRgb);
        const contrast = calculateContrast(bgLuminance, fgLuminance);
        console.log(`Contrast ratio for ${name}: ${contrast}`);
        ratios[name] = contrast;
        checks[name] = checkContrast(contrast);
        hexes[name] = { bg: bgHex, fg: fgHex };
      }
    });
    setContrastRatios(ratios);
    setContrastChecks(checks);
    setColorHexes(hexes);
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8">Theme Color Demonstration</h1>

      <Tabs defaultValue="pairs" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="pairs">Background-Foreground Pairs</TabsTrigger>
          <TabsTrigger value="single">Additional Colors</TabsTrigger>
        </TabsList>
        <TabsContent value="pairs">
          <h2 className="text-2xl font-semibold mb-4">Accessibility Matters</h2>
          <div className="mb-4">
            Choosing the right color combinations is crucial for ensuring your
            application is accessible to all users. This demonstration evaluates
            ShadCN UI theme colors against WCAG contrast standards, helping you
            identify areas that might need adjustments for better readability.
          </div>
          <h2 className="text-2xl font-semibold mb-4">
            What is WCAG Contrast?
          </h2>
          <div className="mb-4">
            <ul className="list-disc list-inside">
              <li>3:1 for large text (18pt or larger, or 14pt and bold).</li>
              <li>4.5:1 for normal text.</li>
              <li>
                7:1 for enhanced readability, especially for users with visual
                impairments.
              </li>
            </ul>
            If a color pair fails the guidelines, consider adjusting your theme
            to make your content more inclusive.
          </div>
          <h2 className="text-2xl font-semibold mb-4">
            Color Pair Definitions
          </h2>
          <div className="mb-4">
            Each color swatch on this page represents a specific combination of
            background and foreground colors from the shadcn/ui theme. These
            combinations are used in different UI elements, such as buttons,
            cards, and text blocks.
          </div>
          <h2 className="text-2xl font-semibold mb-4">
            Why Contrast is Important
          </h2>
          <div className="mb-4">
            Low contrast ratios can make content difficult to read, particularly
            for users with vision impairments or in low-light conditions. By
            understanding the contrast levels of your theme colors, you can:
            <ul className="list-disc list-inside">
              <li>Improve readability and user experience.</li>
              <li>Ensure compliance with accessibility standards.</li>
              <li>Create an interface that is functional and beautiful.</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colorPairs.map(({ bg, fg, name }) => (
              <ColorBlock
                key={name}
                bgClass={bg}
                fgClass={fg}
                name={name}
                contrast={contrastRatios[name]}
                checks={contrastChecks[name]}
                hexes={colorHexes[name]}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="single">
          <Card>
            <CardHeader>
              <CardTitle>Additional Theme Colors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {singleColors.map(({ class: colorClass, name }) => (
                  <ColorCircle key={name} colorClass={colorClass} name={name} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export { ColorPalettePage };
