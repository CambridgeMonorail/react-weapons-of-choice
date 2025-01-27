# shadcnui-blocks

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test shadcnui-blocks` to execute the unit tests via [Vitest](https://vitest.dev/).

## Components

### StatItem

The `StatItem` component encapsulates individual statistic elements, including an icon, value, title, and description.

#### Props

- `icon`: ReactNode - The icon to display.
- `value`: string | number - The value of the statistic.
- `title`: string - The title of the statistic.
- `description`: string - The description of the statistic.

#### Usage

```tsx
import { StatItem } from '@erisfy/shadcnui-blocks';
import { FaUser } from 'react-icons/fa';

<StatItem
  icon={<FaUser className="text-primary" />}
  value="1,234"
  title="Users"
  description="Number of active users"
/>
```

### StatsBlock

The `StatsBlock` component aggregates multiple `StatItem` components into a cohesive block.

#### Props

- `stats`: StatItemProps[] - An array of statistic data to dynamically generate `StatItem` components.

#### Usage

```tsx
import { StatsBlock } from '@erisfy/shadcnui-blocks';
import { FaUser, FaChartLine, FaDollarSign } from 'react-icons/fa';

const stats = [
  {
    icon: <FaUser className="text-primary" />,
    value: '1,234',
    title: 'Users',
    description: 'Number of active users',
  },
  {
    icon: <FaChartLine className="text-primary" />,
    value: '567',
    title: 'Sessions',
    description: 'Number of sessions today',
  },
  {
    icon: <FaDollarSign className="text-primary" />,
    value: '$12,345',
    title: 'Revenue',
    description: 'Total revenue this month',
  },
];

<StatsBlock stats={stats} />
```

### NumberAndSecondaryStat

The `NumberAndSecondaryStat` component displays a main value, optional label, secondary stats, goals, comparison, and trendline.

#### Props

- `mainValue`: number | string - The main value to display.
- `prefix?`: string - An optional prefix for the main value.
- `mainLabel?`: string - An optional label or description beneath the main value.
- `reversedLayout?`: boolean - Whether to reverse the layout of the main value and label.
- `goal?`: object - An optional goal object with properties:
  - `current?`: number - The current value towards the goal.
  - `target`: number - The target value for the goal.
  - `showBar?`: boolean - Whether to show a progress bar for the goal.
  - `label?`: string - An optional label for the goal.
- `comparison?`: object - An optional comparison object with properties:
  - `baselineValue`: number - The baseline value for comparison.
  - `displayMode?`: "absolute" | "percent" | "both" - The display mode for the comparison.
  - `label?`: string - An optional label for the comparison.
- `trendline?`: number[] - An optional array of numbers for the trendline.
- `secondaryStats?`: Array<object> - An optional array of secondary stats with properties:
  - `value`: number | string - The value of the secondary stat.
  - `label`: string - The label for the secondary stat.
  - `direction?`: "up" | "down" - An optional direction indicator for the secondary stat.
- `className?`: string - An optional class name for the component.

#### Usage

```tsx
import { NumberAndSecondaryStat } from '@erisfy/shadcnui-blocks';

<NumberAndSecondaryStat
  mainValue={1234}
  prefix="$"
  mainLabel="Revenue"
  reversedLayout={false}
  goal={{ current: 1234, target: 2000, showBar: true, label: 'Goal' }}
  comparison={{ baselineValue: 1000, displayMode: 'both', label: 'Compared to last month' }}
  trendline={[100, 200, 300, 400, 500]}
  secondaryStats={[
    { value: 200, label: 'New Customers', direction: 'up' },
    { value: 50, label: 'Churned Customers', direction: 'down' },
  ]}
  className=""
/>
```
