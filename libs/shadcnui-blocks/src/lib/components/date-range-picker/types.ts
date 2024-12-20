import React from 'react';

export interface CalendarDateRangePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  // Add a member to avoid empty interface error
  placeholder?: string;
}
