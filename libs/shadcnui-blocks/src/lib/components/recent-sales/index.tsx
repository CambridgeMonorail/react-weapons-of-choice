import { FC } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@erisfy/shadcnui';

interface Sale {
  name: string;
  email: string;
  amount: string;
  avatarSrc: string;
  avatarFallback: string;
}

export interface RecentSalesProps {
  salesData: Sale[];
}

export const RecentSales: FC<RecentSalesProps> = ({ salesData }) => {
  return (
    <div className="space-y-8">
      {salesData.map((sale) => (
        <div key={sale.email} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={sale.avatarSrc} alt="Avatar" />
            <AvatarFallback>{sale.avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{sale.name}</p>
            <p className="text-sm text-muted-foreground">{sale.email}</p>
          </div>
          <div className="ml-auto font-medium">{sale.amount}</div>
        </div>
      ))}
    </div>
  );
};
