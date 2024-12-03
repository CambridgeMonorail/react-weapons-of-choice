import { useState } from "react";
import { format, startOfMonth, endOfMonth } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { Button, Calendar, cn, Popover, PopoverContent, PopoverTrigger } from "@rwoc/shared";

export const CalendarDateRangePicker = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: startOfMonth(new Date()),
    to: endOfMonth(new Date()),
  });

  return (
    <div className={cn("grid gap-2 sm:gap-1", className)} data-testid="date-range-picker">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              // Responsive width for button
              "w-full sm:w-[240px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
            aria-label="Select date range"
            data-testid="date-range-button"
          >
            <CalendarIcon className="mr-2 sm:mr-1 h-4 w-4 sm:h-3 sm:w-3" />
            {date?.from ? (
              date.to ? (
                // Use simpler date format for small screens
                <span className="block sm:hidden">
                  {format(date.from, "MM/dd/yyyy")} - {format(date.to, "MM/dd/yyyy")}
                </span>
              ) : (
                <span className="block sm:hidden">{format(date.from, "MM/dd/yyyy")}</span>
              )
            ) : (
              <span className="block sm:hidden">Pick a date</span>
            )}
            {date?.from ? (
              date.to ? (
                <span className="hidden sm:block">
                  {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                </span>
              ) : (
                <span className="hidden sm:block">{format(date.from, "LLL dd, y")}</span>
              )
            ) : (
              <span className="hidden sm:block">Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-0"
          align="end"
          data-testid="date-range-popover"
        >
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            // Single month for smaller screens, two months for larger screens
            numberOfMonths={1}
            className="lg:numberOfMonths-2"
            data-testid="date-range-calendar"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
