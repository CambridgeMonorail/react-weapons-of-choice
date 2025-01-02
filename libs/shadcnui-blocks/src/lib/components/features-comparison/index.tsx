import { FC } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@rwoc/shadcnui';
import { Check, X } from 'lucide-react';

/**
 * Interface representing the data structure for feature comparison.
 */
interface FeatureComparisonData {
  feature: string;
  basic: boolean;
  pro: boolean;
  enterprise: boolean;
}

/**
 * Props for the FeaturesComparison component.
 */
interface FeaturesComparisonProps {
  data: FeatureComparisonData[];
}

/**
 * FeaturesComparison component.
 * 
 * This component renders a comparison table for different features across various tiers (Basic, Pro, Enterprise).
 * 
 * @param {FeaturesComparisonProps} props - The props for the component.
 * @param {FeatureComparisonData[]} props.data - The data for the feature comparison.
 * 
 * @example
 * ```tsx
 * const data = [
 *   { feature: 'Feature 1', basic: true, pro: true, enterprise: true },
 *   { feature: 'Feature 2', basic: false, pro: true, enterprise: true },
 *   { feature: 'Feature 3', basic: false, pro: false, enterprise: true },
 * ];
 * 
 * <FeaturesComparison data={data} />
 * ```
 */
export const FeaturesComparison: FC<FeaturesComparisonProps> = ({ data }) => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4 text-primary">Comparison Table</h2>
      <div className="overflow-x-auto">
        <Table className="min-w-full bg-background text-foreground" role="table">
          <TableHeader>
            <TableRow>
              <TableHead className="text-left">Feature</TableHead>
              <TableHead className="text-center">Basic</TableHead>
              <TableHead className="text-center">Pro</TableHead>
              <TableHead className="text-center">Enterprise</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index} className="border-b border-muted">
                <TableCell>{item.feature}</TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    {item.basic ? <Check className="text-green-600" aria-label="Basic includes feature" /> : <X className="text-red-500" aria-label="Basic does not include feature" />}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    {item.pro ? <Check className="text-green-600" aria-label="Pro includes feature" /> : <X className="text-red-500" aria-label="Pro does not include feature" />}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    {item.enterprise ? <Check className="text-green-600" aria-label="Enterprise includes feature" /> : <X className="text-red-500" aria-label="Enterprise does not include feature" />}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};
