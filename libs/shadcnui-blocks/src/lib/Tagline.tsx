import { FC } from 'react';

interface TaglineProps {
  /**
   * The text content of the tagline.
   */
  text: string;
  /**
   * Additional Tailwind CSS classes for custom styling.
   */
  className?: string;
  /**
   * Inline styles for the tagline.
   */
  style?: React.CSSProperties;
  /**
   * Unique identifier for the tagline element.
   */
  id?: string;
  /**
   * Custom data-testid attribute for testing purposes.
   */
  dataTestId?: string;
}

/**
 * Tagline component to display a prominent message or slogan.
 * 
 * This component is typically used in landing pages or headers to
 * highlight key messages or slogans. It supports custom styling
 * through Tailwind CSS classes and inline styles.
 */
const Tagline: FC<TaglineProps> = ({ text, className, style, id, dataTestId }) => {
  return (
    <div
      id={id}
      className={`text-center text-2xl font-bold text-primary py-6 bg-background w-full ${className}`}
      style={style}
      data-testid={dataTestId}
    >
      {text}
    </div>
  );
};

export { Tagline };
