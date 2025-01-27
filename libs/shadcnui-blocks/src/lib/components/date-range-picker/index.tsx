import { useState } from "react";
import { format, startOfMonth, endOfMonth } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { Button, Calendar, cn, Popover, PopoverContent, PopoverTrigger } from "@erisfy/shadcnui";

/**
 * CalendarDateRangePicker component allows users to select a date range using a calendar popover.
 */
export const CalendarDateRangePicker: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: startOfMonth(new Date()),
    to: endOfMonth(new Date()),
  });

  /**
   * Formats the date range for display.
   * 
   * @param {Date | undefined} from - The start date of the range.
   * @param {Date | undefined} to - The end date of the range.
   * @param {string} formatStr - The format string.
   * @returns {string} The formatted date range.
   */
  const formatDateRange = (from: Date | undefined, to: Date | undefined, formatStr: string) => {
    if (!from) return "Pick a date";
    return to ? `${format(from, formatStr)} - ${format(to, formatStr)}` : format(from, formatStr);
  };

  return (
    <div className={cn("grid gap-2 sm:gap-1", className)} data-testid="date-range-picker">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              "w-full sm:w-[240px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
            aria-label="Select date range"
            data-testid="date-range-button"
          >
            <CalendarIcon className="mr-2 sm:mr-1 h-4 w-4 sm:h-3 sm:w-3" />
            <span className="block sm:hidden">
              {formatDateRange(date?.from, date?.to, "MM/dd/yyyy")}
            </span>
            <span className="hidden sm:block">
              {formatDateRange(date?.from, date?.to, "LLL dd, y")}
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end" data-testid="date-range-popover">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={1}
            className="lg:numberOfMonths-2"
            data-testid="date-range-calendar"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
