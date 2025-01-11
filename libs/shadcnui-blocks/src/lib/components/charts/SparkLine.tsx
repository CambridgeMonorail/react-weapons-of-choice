import React from "react"
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts"

interface SparkLineProps {
  data: number[]
  strokeColor?: string
  strokeWidth?: number
  showTooltip?: boolean
  showGrid?: boolean
  height?: number
}

/**
 * A minimal sparkline using Recharts.
 * 
 * Pass in an array of numbers, and it will map them to a simple line chart.
 */
export function SparkLine({
  data,
  strokeColor = "#4ade80",  // Tailwind green-400 by default
  strokeWidth = 2,
  showTooltip = false,
  showGrid = false,
  height = 40,
}: SparkLineProps) {
  // Recharts needs an array of objects, each containing the values we want to plot.
  // Here, we map each numeric value to an object { xIndex, value }:
  const chartData = data.map((val, index) => ({ xIndex: index, value: val }))

  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          {/* Optionally show or hide a CartesianGrid */}
          {showGrid && <CartesianGrid strokeDasharray="3 3" />}
          {/* If you want an X-axis or Y-axis, uncomment below */}
          {/*
            <XAxis dataKey="xIndex" hide />
            <YAxis hide />
          */}
          {/* Tooltip is optional */}
          {showTooltip && <Tooltip isAnimationActive={false} />}
          <Line
            type="monotone"
            dataKey="value"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
