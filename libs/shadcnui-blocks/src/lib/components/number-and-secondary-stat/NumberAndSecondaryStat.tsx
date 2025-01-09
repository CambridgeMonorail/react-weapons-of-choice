import * as React from "react"
import { ArrowUp, ArrowDown } from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@rwoc/shadcnui"
import { SparkLine } from "../charts/SparkLine"


export interface NumberAndSecondaryStatProps {
  mainValue: number | string
  prefix?: string
  mainLabel?: string
  reversedLayout?: boolean
  goal?: {
    current?: number
    target: number
    showBar?: boolean
    label?: string
  }
  comparison?: {
    baselineValue: number
    displayMode?: "absolute" | "percent" | "both"
    label?: string
  }
  trendline?: number[]
  secondaryStats?: Array<{
    value: number | string
    label: string
    direction?: "up" | "down"
  }>
  className?: string
}

export function NumberAndSecondaryStat({
  mainValue,
  prefix,
  mainLabel,
  reversedLayout = false,
  goal,
  comparison,
  trendline,
  secondaryStats,
  className = "",
}: NumberAndSecondaryStatProps) {
  //
  // 1. Comparison logic
  //
  let comparisonElement: React.ReactNode = null
  if (comparison) {
    const { baselineValue, displayMode = "absolute", label } = comparison
    const currentValue =
      typeof mainValue === "number" ? mainValue : parseFloat(`${mainValue}`)
    const diff = currentValue - baselineValue
    const diffAbsolute = Math.abs(diff)
    const diffPercent =
      baselineValue !== 0 ? ((diff / baselineValue) * 100).toFixed(1) : "∞"

    const isUp = diff > 0
    const arrow = isUp ? (
      <ArrowUp className="h-4 w-4 text-green-500" />
    ) : diff < 0 ? (
      <ArrowDown className="h-4 w-4 text-red-500" />
    ) : null

    const absoluteText = `${isUp ? "+" : diff < 0 ? "-" : ""}${diffAbsolute}`
    const percentText = `${isUp ? "+" : diff < 0 ? "-" : ""}${diffPercent}%`

    let displayText = ""
    if (displayMode === "absolute") {
      displayText = absoluteText
    } else if (displayMode === "percent") {
      displayText = percentText
    } else if (displayMode === "both") {
      displayText = `${absoluteText} (${percentText})`
    }

    comparisonElement = (
      <div className="flex items-center space-x-2">
        {arrow}
        <span className="text-sm font-medium">{displayText}</span>
        {label && <span className="text-sm text-muted-foreground">{label}</span>}
      </div>
    )
  }

  //
  // 2. Goal progress
  //
  let goalElement: React.ReactNode = null
  if (goal) {
    const { current, target, showBar, label } = goal
    const goalCurrent =
      current ?? (typeof mainValue === "number" ? mainValue : 0)
    const percentage = Math.min((goalCurrent / target) * 100, 100)

    goalElement = (
      <div className="space-y-1">
        {label && (
          <div className="text-sm text-muted-foreground">
            {label} (Target: {target})
          </div>
        )}
        {showBar && (
          <div className="relative w-full h-2 bg-gray-200 rounded">
            <div
              className="absolute left-0 top-0 h-2 bg-green-500 rounded"
              style={{ width: `${percentage}%` }}
            />
          </div>
        )}
        <div className="text-sm font-medium">
          {goalCurrent} / {target}
        </div>
      </div>
    )
  }

  //
  // 3. Trendline (recharts-based sparkline)
  //
  let trendlineElement: React.ReactNode = null
  if (trendline && trendline.length > 0) {
    trendlineElement = (
      <div className="mt-2 w-full">
        <SparkLine data={trendline} strokeColor="#4ade80" height={50} />
      </div>
    )
  }

  //
  // 4. Secondary stats
  //
  let secondaryStatsElement: React.ReactNode = null
  if (secondaryStats && secondaryStats.length > 0) {
    secondaryStatsElement = (
      <ul className="space-y-2">
        {secondaryStats.map(({ label, value, direction }, index) => {
          let arrow: React.ReactNode = null
          if (direction === "up") {
            arrow = <ArrowUp className="h-4 w-4 text-green-500" />
          } else if (direction === "down") {
            arrow = <ArrowDown className="h-4 w-4 text-red-500" />
          }

          return (
            <li key={index} className="flex items-center space-x-2">
              {arrow}
              <span className="font-medium">{value}</span>
              <span className="text-sm text-muted-foreground">{label}</span>
            </li>
          )
        })}
      </ul>
    )
  }

  //
  // 5. Layout logic: reversed vs. normal
  //
  const mainValueElement = (
    <>
      <CardTitle className="text-4xl font-bold tracking-tight">
        {prefix && <span className="mr-1">{prefix}</span>}
        {mainValue}
      </CardTitle>
      {mainLabel && (
        <CardDescription className="mt-1">{mainLabel}</CardDescription>
      )}
    </>
  )

  return (
    <Card className={className}>
      <CardHeader>
        {reversedLayout ? (
          <>
            {mainLabel && (
              <CardDescription className="mt-1">{mainLabel}</CardDescription>
            )}
            <CardTitle className="text-4xl font-bold tracking-tight">
              {prefix && <span className="mr-1">{prefix}</span>}
              {mainValue}
            </CardTitle>
          </>
        ) : (
          mainValueElement
        )}
      </CardHeader>

      <CardContent className="space-y-4">
        {comparisonElement}
        {goalElement}
        {trendlineElement}
        {secondaryStatsElement}
      </CardContent>
    </Card>
  )
}
