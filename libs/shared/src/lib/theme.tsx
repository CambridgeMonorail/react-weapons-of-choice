import { createContext, useContext, FC, ReactNode } from 'react';

interface Theme {
  colors: {
    background: string;
    foreground: string;
    primary: string;
    primaryForeground: string;
    secondary: string;
    muted: string;
    accent: string;
  };
}

const theme: Theme = {
  colors: {
    background: 'bg-background',
    foreground: 'text-foreground',
    primary: 'primary',
    primaryForeground: 'primary-foreground',
    secondary: 'secondary',
    muted: 'muted',
    accent: 'accent',
  },
};

const ThemeContext = createContext<Theme | undefined>(undefined);

/**
 * ThemeProvider component to provide theme variables to the application.
 * Wrap your application or specific parts of it with this provider to access theme variables.
 *
 * @param {ReactNode} children - The child components that will have access to the theme.
 * @returns {JSX.Element} The ThemeProvider component.
 */
export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Custom hook to access theme variables.
 * Use this hook within your components to get the current theme values.
 *
 * @returns {Theme} The current theme object.
 * @throws Will throw an error if used outside of a ThemeProvider.
 */
export const useTheme = (): Theme => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};