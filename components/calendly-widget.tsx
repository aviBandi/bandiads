"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

interface CalendlyWidgetProps {
  url: string
  backgroundColor?: string
  textColor?: string
  buttonText?: string
}

export function CalendlyWidget({
  url,
  backgroundColor = "#ffffff",
  textColor = "#0052CC",
  buttonText = "Schedule a Meeting",
}: CalendlyWidgetProps) {
  useEffect(() => {
    // Load the Calendly script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Clean up
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const openCalendly = () => {
    // @ts-ignore - Calendly is loaded via script
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: url,
      })
      return false
    }
  }

  return (
    <div className="w-full">
      <Button
        onClick={openCalendly}
        className="w-full bg-[#0052CC] hover:bg-[#0052CC]/90 text-white py-2 px-4 rounded-md text-sm md:text-base"
      >
        {buttonText}
      </Button>

      {/* Inline embed option */}
      <div
        className="calendly-inline-widget mt-4 bg-white rounded-lg shadow-sm border border-[#0052CC]/10"
        data-url={url}
        style={{ minWidth: "100%", height: "580px" }}
      ></div>
    </div>
  )
}
