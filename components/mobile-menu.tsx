"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { X, Menu } from "lucide-react"

interface MobileMenuProps {
  links: {
    href: string
    label: string
  }[]
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [open, setOpen] = useState(false)
  const [activeHash, setActiveHash] = useState("")

  // Track scroll position to prevent unwanted scrolling
  useEffect(() => {
    // Set the active hash on initial load if there is one
    if (window.location.hash) {
      setActiveHash(window.location.hash)
    }

    // Handle hash changes from browser navigation
    const handleHashChange = () => {
      setActiveHash(window.location.hash)
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const handleLinkClick = (href: string) => {
    // Set the active hash immediately to prevent conflicts
    setActiveHash(href)

    // Close the menu
    setOpen(false)

    // Use a longer delay to ensure the menu fully closes before scrolling
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        // Get the header height to offset the scroll position
        const headerHeight = document.querySelector("header")?.offsetHeight || 0

        // Calculate the element's position relative to the viewport
        const elementPosition = element.getBoundingClientRect().top

        // Calculate the offset position
        const offsetPosition = elementPosition + window.scrollY - headerHeight - 16

        // Scroll to the element with the offset
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })

        // Update URL without causing a page jump
        if (window.history.pushState) {
          window.history.pushState(null, "", href)
        }
      }
    }, 400) // Increased delay to ensure menu animation completes
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[80%] sm:w-[350px] pt-12">
        <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={() => setOpen(false)}>
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
        <nav className="flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-base font-medium transition-colors border-b pb-2 ${
                activeHash === link.href ? "text-[#0052CC]" : "hover:text-[#0052CC]"
              }`}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation() // Prevent event bubbling
                handleLinkClick(link.href)
              }}
            >
              {link.label}
            </a>
          ))}
          <Button
            className="mt-4 w-full bg-[#0052CC] hover:bg-[#0052CC]/90"
            onClick={(e) => {
              e.stopPropagation() // Prevent event bubbling
              handleLinkClick("#contact")
            }}
          >
            Let's Talk
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
