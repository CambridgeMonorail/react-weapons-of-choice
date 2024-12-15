import { FC } from 'react';

interface TaglineProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  dataTestId?: string;
}

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
