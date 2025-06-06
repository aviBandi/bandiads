"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Facebook, Globe, MapPin, MessageSquare, MousePointerClick, Phone, Search, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CalendlyWidget } from "@/components/calendly-widget"
import { MobileMenu } from "@/components/mobile-menu"

export default function Home() {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#why-us", label: "Why Us" },
  ]

  // Use a ref to track if we're handling a programmatic scroll
  const isScrollingRef = useRef(false)
  const initialLoadRef = useRef(true)

  // Improve scroll behavior for anchor links
  useEffect(() => {
    // Handle initial hash on page load
    if (initialLoadRef.current && window.location.hash) {
      initialLoadRef.current = false
      const element = document.querySelector(window.location.hash)
      if (element) {
        setTimeout(() => {
          const headerHeight = document.querySelector("header")?.offsetHeight || 0
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 16

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }, 100)
      }
    }

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (anchor && anchor.hash && anchor.hash.startsWith("#")) {
        // Only handle clicks from the main navigation, not the mobile menu
        if (anchor.closest(".md\\:hidden")) {
          return
        }

        e.preventDefault()
        const element = document.querySelector(anchor.hash)
        if (element) {
          isScrollingRef.current = true

          // Add a small delay to ensure any mobile menu animations complete
          setTimeout(() => {
            // Get the header height to offset the scroll position
            const headerHeight = document.querySelector("header")?.offsetHeight || 0

            // Calculate the element's position relative to the viewport
            const elementPosition = element.getBoundingClientRect().top

            // Calculate the offset position
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 16

            // Scroll to the element with the offset
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            })

            // Update URL without causing a page jump
            window.history.pushState({}, "", anchor.hash)

            // Reset the scrolling flag after animation completes
            setTimeout(() => {
              isScrollingRef.current = false
            }, 1000)
          }, 100)
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold text-[#0052CC]">Bandi Ads</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium hover:text-primary">
                {link.label}
              </a>
            ))}
          </nav>
          <Button asChild size="sm" className="hidden md:inline-flex">
            <a href="#contact">Let's Talk</a>
          </Button>

          {/* Mobile Menu */}
          <MobileMenu links={navLinks} />
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-32 overflow-hidden bg-gradient-to-br from-[#0052CC]/5 via-[#0052CC]/10 to-background">
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5 z-0"></div>

          {/* Decorative elements */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-[#0052CC]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#0052CC]/10 rounded-full blur-3xl"></div>

          {/* Animated dots pattern (decorative) */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#0052CC]"></div>
            <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-[#0052CC]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-[#0052CC]"></div>
            <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-[#0052CC]"></div>
            <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-[#0052CC]"></div>
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col text-left">
                <div className="inline-flex items-center gap-1 mb-4 md:mb-6 text-xs md:text-sm font-medium bg-[#0052CC]/10 text-[#0052CC] px-3 py-1 rounded-full w-fit">
                  <MapPin className="h-3 w-3 md:h-4 md:w-4" />
                  <span>Minnesota-Based Digital Marketing</span>
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 leading-tight">
                  Get More Local Customers — <span className="text-[#0052CC]">Without Lifting a Finger.</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-xl">
                  Bandi Ads is a Minnesota-based agency helping service businesses grow with powerful digital
                  advertising.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="rounded-full px-6 md:px-8 bg-[#0052CC] hover:bg-[#0052CC]/90 w-full sm:w-auto"
                    asChild
                  >
                    <a href="#contact">Let's Talk</a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-6 md:px-8 border-[#0052CC] text-[#0052CC] w-full sm:w-auto"
                    asChild
                  >
                    <a href="#services">Our Services</a>
                  </Button>
                </div>
              </div>

              <div className="relative hidden md:block">
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#0052CC]/20 to-transparent rounded-lg blur-sm"></div>
                <div className="relative bg-background/80 backdrop-blur-sm border rounded-lg p-6 shadow-lg">
                  {/* Marketing Analytics Dashboard */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="h-5 w-24 bg-muted/50 rounded-md"></div>
                  </div>

                  {/* Campaign Performance Graph */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="h-4 w-32 bg-[#0052CC]/20 rounded"></div>
                      <div className="flex gap-1">
                        <div className="h-4 w-12 bg-[#0052CC]/10 rounded"></div>
                        <div className="h-4 w-12 bg-[#0052CC]/30 rounded"></div>
                      </div>
                    </div>
                    <div className="h-32 bg-[#0052CC]/5 rounded-md p-3 relative">
                      {/* Graph Line */}
                      <div className="absolute bottom-3 left-3 right-3 h-px bg-[#0052CC]/20"></div>
                      <div className="absolute bottom-3 left-3 h-16 w-px bg-[#0052CC]/20"></div>

                      {/* Graph Points */}
                      <svg viewBox="0 0 100 60" className="w-full h-full">
                        <path
                          d="M0,60 L10,50 L20,55 L30,40 L40,45 L50,30 L60,35 L70,20 L80,25 L90,10 L100,15"
                          fill="none"
                          stroke="#0052CC"
                          strokeWidth="2"
                          strokeOpacity="0.5"
                        />
                        <path
                          d="M0,60 L10,50 L20,55 L30,40 L40,45 L50,30 L60,35 L70,20 L80,25 L90,10 L100,15"
                          fill="url(#gradient)"
                          fillOpacity="0.2"
                          stroke="none"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#0052CC" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#0052CC" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  {/* Campaign Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-[#0052CC]/10 rounded-md p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-4 w-4 rounded-full bg-[#0052CC]/30"></div>
                        <div className="h-4 w-16 bg-[#0052CC]/20 rounded"></div>
                      </div>
                      <div className="text-center">
                        <div className="h-6 w-16 bg-[#0052CC]/40 rounded mx-auto mb-1"></div>
                        <div className="h-3 w-12 bg-[#0052CC]/20 rounded mx-auto"></div>
                      </div>
                    </div>
                    <div className="bg-[#0052CC]/10 rounded-md p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-4 w-4 rounded-full bg-[#0052CC]/30"></div>
                        <div className="h-4 w-16 bg-[#0052CC]/20 rounded"></div>
                      </div>
                      <div className="text-center">
                        <div className="h-6 w-16 bg-[#0052CC]/40 rounded mx-auto mb-1"></div>
                        <div className="h-3 w-12 bg-[#0052CC]/20 rounded mx-auto"></div>
                      </div>
                    </div>
                  </div>

                  {/* Ad Preview */}
                  <div className="bg-[#0052CC]/5 rounded-md p-3">
                    <div className="flex justify-between mb-2">
                      <div className="h-4 w-24 bg-[#0052CC]/20 rounded"></div>
                      <div className="h-4 w-16 bg-[#0052CC]/30 rounded"></div>
                    </div>
                    <div className="flex gap-3">
                      <div className="h-16 w-16 bg-[#0052CC]/20 rounded-md flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#0052CC]"
                        >
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                          <circle cx="9" cy="9" r="2" />
                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="h-4 w-full bg-[#0052CC]/10 rounded mb-2"></div>
                        <div className="h-3 w-5/6 bg-[#0052CC]/10 rounded mb-2"></div>
                        <div className="h-3 w-4/6 bg-[#0052CC]/10 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 h-16 w-16 bg-[#0052CC]/10 rounded-full flex items-center justify-center">
                  <Facebook className="h-6 w-6 text-[#0052CC]" />
                </div>
                <div className="absolute -bottom-6 -left-6 h-20 w-20 bg-[#0052CC]/10 rounded-full flex items-center justify-center">
                  <Search className="h-8 w-8 text-[#0052CC]" />
                </div>

                {/* Additional floating elements */}
                <div className="absolute top-1/2 -right-10 h-12 w-12 bg-[#0052CC]/10 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#0052CC]"
                  >
                    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                    <path d="M10 2c1 .5 2 2 2 5" />
                  </svg>
                </div>
                <div className="absolute -bottom-10 right-10 h-14 w-14 bg-[#0052CC]/10 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#0052CC]"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Stats bar */}
            <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 bg-background/80 backdrop-blur-sm rounded-lg p-4 md:p-6 border shadow-sm">
              <div className="text-center">
                <p className="text-xl md:text-3xl font-bold text-[#0052CC]">$210K+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Revenue Driven</p>
              </div>
              <div className="text-center">
                <p className="text-xl md:text-3xl font-bold text-[#0052CC]">600+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Leads Generated</p>
              </div>
              <div className="text-center">
                <p className="text-xl md:text-3xl font-bold text-[#0052CC]">30x</p>
                <p className="text-xs md:text-sm text-muted-foreground">Average ROAs</p>
              </div>
              <div className="text-center">
                <p className="text-xl md:text-3xl font-bold text-[#0052CC]">4+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Industries Marketed</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Text Content - First on mobile, first on desktop */}
              <div className="order-1">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 md:mb-6">
                  Local Roots, <span className="text-[#0052CC]">Digital Expertise</span>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
                  Hi, I'm Avi Bandi, a high school entrepreneur and the founder of Bandi Ads. Since launching my agency,
                  I've had the privilege of helping over 5 Minnesota businesses grow their customer base through
                  strategic, results-driven digital marketing.
                </p>
                <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
                  I'm passionate about combining my hustle with tailored marketing strategies that truly deliver. My
                  focus is on service-based businesses, and I pride myself on my deep roots in the local community,
                  which allows me to craft campaigns that resonate with real people. At Bandi Ads, I'm dedicated to
                  driving growth for businesses by making sure every ad dollar counts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#0052CC]/10 p-2 rounded-full">
                      <MapPin className="h-4 w-4 md:h-5 md:w-5 text-[#0052CC]" />
                    </div>
                    <span className="font-medium text-sm md:text-base">Minnesota-Based</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-[#0052CC]/10 p-2 rounded-full">
                      <MousePointerClick className="h-4 w-4 md:h-5 md:w-5 text-[#0052CC]" />
                    </div>
                    <span className="font-medium text-sm md:text-base">Results-Focused</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-[#0052CC]/10 p-2 rounded-full">
                      <MessageSquare className="h-4 w-4 md:h-5 md:w-5 text-[#0052CC]" />
                    </div>
                    <span className="font-medium text-sm md:text-base">Clear Communication</span>
                  </div>
                </div>
              </div>

              {/* Image - Second on mobile, second on desktop */}
              <div className="order-2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-[#0052CC]/20 to-transparent rounded-lg blur-sm"></div>
                  <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#0052CC]/10">
                    <Image
                      src="/images/avi-professional.png"
                      alt="Avi Bandi - Founder of Bandi Ads"
                      width={600}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 md:py-24 bg-[#0052CC]/5">
          {/* Content remains the same */}
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 md:mb-4">How We Help You Grow</h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Tired of slow seasons and no-shows? We help Minnesota service businesses consistently attract quality
                local customers through smart, proven digital marketing—so you can focus on what you do best.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {/* Facebook Ads */}
              <div className="bg-background rounded-lg p-6 md:p-8 shadow-sm border transition-all hover:shadow-md hover:border-[#0052CC]/30">
                <div className="bg-[#0052CC]/10 p-3 rounded-full w-fit mb-4 md:mb-6">
                  <Facebook className="h-5 w-5 md:h-6 md:w-6 text-[#0052CC]" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Facebook Ads</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                  Targeted lead generation campaigns that reach potential customers in your service area when they're
                  most likely to convert.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 md:h-5 md:w-5 text-[#0052CC] flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm md:text-base">Hyper-local targeting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 md:h-5 md:w-5 text-[#0052CC] flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm md:text-base">Lead form integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 md:h-5 md:w-5 text-[#0052CC] flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm md:text-base">Custom audience building</span>
                  </li>
                </ul>
              </div>

              {/* Google Ads */}
              <div className="bg-background rounded-lg p-6 md:p-8 shadow-sm border transition-all hover:shadow-md hover:border-[#0052CC]/30">
                <div className="bg-[#0052CC]/10 p-3 rounded-full w-fit mb-4 md:mb-6">
                  <Search className="h-5 w-5 md:h-6 md:w-6 text-[#0052CC]" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Google Ads</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                  High-converting local campaigns that capture customers actively searching for the services you provide
                  in your area.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 md:h-5 md:w-5 text-[#0052CC] flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm md:text-base">Local keyword research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 md:h-5 md:w-5 text-[#0052CC] flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm md:text-base">Conversion tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 md:h-5 md:w-5 text-[#0052CC] flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm md:text-base">Call & lead optimization</span>
                  </li>
                </ul>
              </div>

              {/* Website Makeovers */}
              <div className="bg-background rounded-lg p-6 md:p-8 shadow-sm border transition-all hover:shadow-md hover:border-[#0052CC]/30">
                <div className="bg-[#0052CC]/10 p-3 rounded-full w-fit mb-4 md:mb-6">
                  <Globe className="h-5 w-5 md:h-6 md:w-6 text-[#0052CC]" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Website Makeovers</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                  Transform your website into a lead-generating machine that converts visitors into paying customers.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 md:h-5 md:w-5 text-[#0052CC] flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm md:text-base">Mobile optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 md:h-5 md:w-5 text-[#0052CC] flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm md:text-base">Lead capture forms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 md:h-5 md:w-5 text-[#0052CC] flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm md:text-base">Local SEO improvements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 md:mb-4">
                Why Small Businesses Trust Bandi Ads
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Because you deserve more than just clicks — we bring you real customers. As Minnesotans ourselves, we
                know what works here and we use that insight to grow your business.
              </p>
            </div>

            {/* Key benefits grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
              <div className="bg-background rounded-lg p-5 md:p-6 shadow-sm border border-[#0052CC]/10 hover:border-[#0052CC]/30 transition-all hover:shadow-md group">
                <div className="bg-[#0052CC]/10 p-2 md:p-3 rounded-full w-fit mb-3 md:mb-4 group-hover:bg-[#0052CC]/20 transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 md:h-6 md:w-6 text-[#0052CC]"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Fast Results</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  We focus on strategies that deliver leads quickly, not months down the road. Most clients see results
                  within the first 2 weeks.
                </p>
              </div>

              <div className="bg-background rounded-lg p-5 md:p-6 shadow-sm border border-[#0052CC]/10 hover:border-[#0052CC]/30 transition-all hover:shadow-md group">
                <div className="bg-[#0052CC]/10 p-2 md:p-3 rounded-full w-fit mb-3 md:mb-4 group-hover:bg-[#0052CC]/20 transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 md:h-6 md:w-6 text-[#0052CC]"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Local Market Knowledge</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  We understand Minnesota customers and what motivates them to choose local service businesses. Our
                  campaigns speak directly to local needs.
                </p>
              </div>

              <div className="bg-background rounded-lg p-5 md:p-6 shadow-sm border border-[#0052CC]/10 hover:border-[#0052CC]/30 transition-all hover:shadow-md group">
                <div className="bg-[#0052CC]/10 p-2 md:p-3 rounded-full w-fit mb-3 md:mb-4 group-hover:bg-[#0052CC]/20 transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 md:h-6 md:w-6 text-[#0052CC]"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Clear Communication</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  No marketing jargon or confusing reports. We explain everything in plain English and keep you updated
                  on what matters.
                </p>
              </div>
            </div>

            {/* Stats section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12">
              <div className="bg-background rounded-lg p-4 md:p-6 shadow-sm border border-[#0052CC]/10 text-center">
                <p className="text-xl md:text-3xl font-bold text-[#0052CC] mb-1">$210K+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Revenue Generated</p>
              </div>
              <div className="bg-background rounded-lg p-4 md:p-6 shadow-sm border border-[#0052CC]/10 text-center">
                <p className="text-xl md:text-3xl font-bold text-[#0052CC] mb-1">600+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Leads Delivered</p>
              </div>
              <div className="bg-background rounded-lg p-4 md:p-6 shadow-sm border border-[#0052CC]/10 text-center">
                <p className="text-xl md:text-3xl font-bold text-[#0052CC] mb-1">30x</p>
                <p className="text-xs md:text-sm text-muted-foreground">Average ROA</p>
              </div>
              <div className="bg-background rounded-lg p-4 md:p-6 shadow-sm border border-[#0052CC]/10 text-center">
                <p className="text-xl md:text-3xl font-bold text-[#0052CC] mb-1">4+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Industries Marketed</p>
              </div>
            </div>

            {/* Testimonials section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              <div className="bg-background rounded-lg p-5 md:p-6 shadow-sm border border-[#0052CC]/10 relative">
                <div className="absolute -top-3 -left-3 text-[#0052CC] text-4xl md:text-5xl opacity-20">"</div>
                <div className="relative z-10">
                  <p className="italic text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                    "Avi helped book us over $21,000 worth of extra detailing jobs in just one month. His digital
                    marketing service is worth every cent. He's sharp, reliable, and honestly better than anybody we've
                    worked with."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden border-2 border-[#0052CC]/20">
                      <Image
                        src="/images/sjc-precision.png"
                        alt="Jack R. from SJC Precision Detail"
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sm md:text-base">Jack R.</p>
                      <p className="text-xs md:text-sm text-muted-foreground">SJC Precision Detail</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-lg p-5 md:p-6 shadow-sm border border-[#0052CC]/10 relative">
                <div className="absolute -top-3 -left-3 text-[#0052CC] text-4xl md:text-5xl opacity-20">"</div>
                <div className="relative z-10">
                  <p className="italic text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                    "Avi's incredibly easy to work with, always responsive and on top of things. In just three days, my
                    company landed a $24,000 sod job. The ROI was amazing, and I couldn't be happier with the results.
                    Highly recommend his services."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden border-2 border-[#0052CC]/20">
                      <Image
                        src="/images/lee-landscaping.png"
                        alt="Tripp L. from Lee Landscaping"
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sm md:text-base">Tripp L.</p>
                      <p className="text-xs md:text-sm text-muted-foreground">Lee Landscaping</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-lg p-5 md:p-6 shadow-sm border border-[#0052CC]/10 relative">
                <div className="absolute -top-3 -left-3 text-[#0052CC] text-4xl md:text-5xl opacity-20">"</div>
                <div className="relative z-10">
                  <p className="italic text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                    "Started with Bandi Ads in the beginning of 2025. It has complimented our current marketing strategy
                    nicely. Avi continues to bring in high quality leads, follows through with what he says he will do,
                    communicates well, and is knowledgeable in the subject."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden border-2 border-[#0052CC]/20">
                      <Image
                        src="/images/ben-brokaw.png"
                        alt="Ben Brokaw from Sota Landscaping"
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sm md:text-base">Ben B.</p>
                      <p className="text-xs md:text-sm text-muted-foreground">Sota Landscaping</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 md:mt-12 text-center">
              <Button
                asChild
                size="lg"
                className="rounded-full px-6 md:px-8 bg-[#0052CC] hover:bg-[#0052CC]/90 w-full sm:w-auto"
              >
                <a href="#contact">Get Started Today</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 bg-[#0052CC]/5">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 md:items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 md:mb-4">
                  Ready to Grow Your Business?
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
                  Book a call and I'll show you exactly how we'll get results—and what it'll cost. If you're serious
                  about growing your service business, this will be the most valuable 15-minute call you'll take this
                  month.
                </p>

                <div className="mt-6 md:mt-8 p-4 md:p-6 bg-background rounded-lg shadow-sm border border-[#0052CC]/10">
                  <h3 className="text-lg md:text-xl font-bold mb-3">What to Expect</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-[#0052CC]/20 flex items-center justify-center text-[#0052CC] font-bold text-xs md:text-sm mt-0.5">
                        1
                      </div>
                      <p className="text-sm md:text-base">A 30-minute call to understand your business goals</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-[#0052CC]/20 flex items-center justify-center text-[#0052CC] font-bold text-xs md:text-sm mt-0.5">
                        2
                      </div>
                      <p className="text-sm md:text-base">Custom strategy recommendations for your market</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-[#0052CC]/20 flex items-center justify-center text-[#0052CC] font-bold text-xs md:text-sm mt-0.5">
                        3
                      </div>
                      <p className="text-sm md:text-base">Clear pricing and timeline for implementation</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-background p-5 md:p-8 rounded-lg shadow-sm border">
                <CalendlyWidget url="https://calendly.com/bandiads/30min" buttonText="Book Your Call Now" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 md:py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            {/* Logo and About */}
            <div>
              <Link href="/" className="inline-block mb-3 md:mb-4">
                <span className="text-xl md:text-2xl font-bold text-[#0052CC]">Bandi Ads</span>
              </Link>
              <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                Minnesota-based digital marketing agency helping service businesses grow with powerful advertising
                strategies.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Contact Us</h3>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="h-3 w-3 md:h-4 md:w-4 text-[#0052CC]" />
                  <span className="text-xs md:text-sm">+1(310) 362-7663</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3 w-3 md:h-4 md:w-4 text-[#0052CC]" />
                  <span className="text-xs md:text-sm">avi@bandiads.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3 w-3 md:h-4 md:w-4 text-[#0052CC]" />
                  <span className="text-xs md:text-sm">Serving all of Minnesota</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <Link
                  href="https://www.facebook.com/profile.php?id=61574953708472"
                  className="text-muted-foreground hover:text-[#0052CC] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 md:h-5 md:w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="https://www.instagram.com/bandi_ads/"
                  className="text-muted-foreground hover:text-[#0052CC] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 md:h-5 md:w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 md:pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Bandi Ads. All rights reserved. Proudly serving Minnesota businesses.
            </p>
            <div className="mt-3 md:mt-0">
              <ul className="flex gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0052CC]"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0052CC]"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
