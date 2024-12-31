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
import { StatItem } from '@rwoc/shadcnui-blocks';
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
import { StatsBlock } from '@rwoc/shadcnui-blocks';
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
