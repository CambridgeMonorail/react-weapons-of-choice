import * as React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@rwoc/shadcnui';
import { SparkLine } from '../charts/SparkLine';

/**
 * Props for the NumberAndSecondaryStat component.
 */
export interface NumberAndSecondaryStatProps {
  mainValue: number | string;
  prefix?: string;
  mainLabel?: string;
  reversedLayout?: boolean;
  goal?: {
    current?: number;
    target: number;
    showBar?: boolean;
    label?: string;
  };
  comparison?: {
    baselineValue: number;
    displayMode?: 'absolute' | 'percent' | 'both';
    label?: string;
  };
  trendline?: number[];
  secondaryStats?: Array<{
    value: number | string;
    label: string;
    direction?: 'up' | 'down';
  }>;
  className?: string;
}

/**
 * Utility function to format large numeric values.
 */
const formatValue = (value: number): string => {
  if (value >= 1_000_000_000) {
    return `${(value / 1_000_000_000).toFixed(1)}B`;
  } else if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1)}M`;
  } else if (value >= 1_000) {
    return `${(value / 1_000).toFixed(1)}K`;
  } else {
    return value.toString();
  }
};

/**
 * A component that displays a main value with optional secondary statistics, goal progress, comparison, and trendline.
 */
export const NumberAndSecondaryStat: React.FC<NumberAndSecondaryStatProps> = ({
  mainValue,
  prefix,
  mainLabel,
  reversedLayout = false,
  goal,
  comparison,
  trendline,
  secondaryStats,
  className = '',
}) => {
  //
  // 1. Comparison logic
  //
  const comparisonElement = React.useMemo(() => {
    if (!comparison) return null;
    const { baselineValue, displayMode = 'absolute', label } = comparison;
    const currentValue =
      typeof mainValue === 'number' ? mainValue : parseFloat(`${mainValue}`);
    const diff = currentValue - baselineValue;
    const diffAbsolute = Math.abs(diff);
    const diffPercent =
      baselineValue !== 0 ? ((diff / baselineValue) * 100).toFixed(1) : '∞';

    const isUp = diff > 0;
    const arrow = isUp ? (
      <ArrowUp
        className={`h-4 w-4 ${reversedLayout ? 'text-accent' : 'text-primary'}`}
        data-testid="comparison-arrow-up"
      />
    ) : diff < 0 ? (
      <ArrowDown
        className={`h-4 w-4 ${reversedLayout ? 'text-primary' : 'text-accent'}`}
        data-testid="comparison-arrow-down"
      />
    ) : null;

    const absoluteText = `${isUp ? '+' : diff < 0 ? '-' : ''}${diffAbsolute}`;
    const percentText = `${isUp ? '+' : diff < 0 ? '-' : ''}${diffPercent}%`;

    let displayText = '';
    if (displayMode === 'absolute') {
      displayText = absoluteText;
    } else if (displayMode === 'percent') {
      displayText = percentText;
    } else if (displayMode === 'both') {
      displayText = `${absoluteText} (${percentText})`;
    }

    return (
      <div
        className="flex items-center space-x-2"
        data-testid="comparison-element"
      >
        {arrow}
        <span className="text-sm font-medium">{displayText}</span>
        {label && (
          <span className="text-sm text-muted-foreground">{label}</span>
        )}
      </div>
    );
  }, [comparison, mainValue, reversedLayout]);

  //
  // 2. Goal progress
  //
  const goalElement = React.useMemo(() => {
    if (!goal) return null;
    const { current, target, showBar, label } = goal;
    const goalCurrent =
      current ?? (typeof mainValue === 'number' ? mainValue : 0);
    const percentage = Math.min((goalCurrent / target) * 100, 100);

    return (
      <div className="space-y-1" data-testid="goal-element">
        {label && (
          <div className="text-sm text-muted-foreground">
            {label} (Target: {target})
          </div>
        )}
        {showBar && (
          <div
            className="relative w-full h-2 bg-secondary rounded"
            data-testid="goal-progress-bar-container"
          >
            <div
              className="absolute left-0 top-0 h-2 bg-primary rounded"
              style={{ width: `${percentage}%` }}
              data-testid="goal-progress-bar"
            />
          </div>
        )}
        <div className="text-sm font-medium">
          {goalCurrent} / {target}
        </div>
      </div>
    );
  }, [goal, mainValue]);

  //
  // 3. Trendline (recharts-based sparkline)
  //
  const trendlineElement = React.useMemo(() => {
    if (!trendline || trendline.length === 0) return null;
    return (
      <div className="mt-2 w-full" data-testid="trendline-element">
        <SparkLine data={trendline} strokeColor="#4ade80" height={50} />
      </div>
    );
  }, [trendline]);

  //
  // 4. Secondary stats
  //
  const secondaryStatsElement = React.useMemo(() => {
    if (!secondaryStats || secondaryStats.length === 0) return null;
    return (
      <ul className="space-y-2" data-testid="secondary-stats-element">
        {secondaryStats.map(({ label, value, direction }, index) => {
          let arrow: React.ReactNode = null;
          if (direction === 'up') {
            arrow = (
              <ArrowUp
                className="h-4 w-4 text-primary"
                data-testid={`secondary-arrow-up-${index}`}
              />
            );
          } else if (direction === 'down') {
            arrow = (
              <ArrowDown
                className="h-4 w-4 text-accent"
                data-testid={`secondary-arrow-down-${index}`}
              />
            );
          }

          return (
            <li
              key={index}
              className="flex items-center space-x-2"
              data-testid={`secondary-stat-${index}`}
            >
              {arrow}
              <span className="font-medium">{value}</span>
              <span className="text-sm text-muted-foreground">{label}</span>
            </li>
          );
        })}
      </ul>
    );
  }, [secondaryStats]);

  //
  // 5. Main value and label
  //
  const formattedMainValue =
    typeof mainValue === 'number' ? formatValue(mainValue) : mainValue;

  const mainValueElement = (
    <div className="flex flex-col items-start">
      <div className="flex items-baseline">
        {prefix && (
          <span className="text-3xl" data-testid="main-value-prefix">
            {prefix}
          </span>
        )}
        <div
          className="text-6xl font-bold tracking-tight"
          data-testid="main-value"
        >
          {formattedMainValue}
        </div>
      </div>
      {mainLabel && (
        <div className="mt-1 text-muted-foreground" data-testid="main-label">
          {mainLabel}
        </div>
      )}
    </div>
  );

  return (
    <Card
      className={`flex flex-col ${className}`}
      data-testid="number-and-secondary-stat"
    >
      <CardContent
        className="flex-grow space-y-4 flex flex-col justify-center"
        data-testid="card-content"
      >
        {mainValueElement}
        {comparisonElement}
        {goalElement}
        {trendlineElement}
        {secondaryStatsElement}
      </CardContent>
    </Card>
  );
};
