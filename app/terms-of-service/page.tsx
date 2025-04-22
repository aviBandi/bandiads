import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold text-[#0052CC]">Bandi Ads</span>
          </Link>
        </div>
      </header>

      <main className="container px-4 md:px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>

          <div className="prose prose-blue max-w-none">
            <p className="text-lg mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to Bandi Ads. These terms and conditions outline the rules and regulations for the use of our
              website and services.
            </p>
            <p className="mt-4">
              By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use
              Bandi Ads' website if you do not accept all of the terms and conditions stated on this page.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. License to Use</h2>
            <p>
              Unless otherwise stated, Bandi Ads and/or its licensors own the intellectual property rights for all
              material on this website. All intellectual property rights are reserved. You may view and/or print pages
              from the website for your own personal use subject to restrictions set in these terms and conditions.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Restrictions</h2>
            <p>You are specifically restricted from:</p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Publishing any website material in any other media</li>
              <li>Selling, sublicensing and/or otherwise commercializing any website material</li>
              <li>Publicly performing and/or showing any website material</li>
              <li>Using this website in any way that is or may be damaging to this website</li>
              <li>Using this website in any way that impacts user access to this website</li>
              <li>
                Using this website contrary to applicable laws and regulations, or in a way that causes, or may cause,
                harm to the website, or to any person or business entity
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Your Content</h2>
            <p>
              In these terms and conditions, "Your Content" shall mean any audio, video, text, images or other material
              you choose to display on this website. By displaying Your Content, you grant Bandi Ads a non-exclusive,
              worldwide, irrevocable, royalty-free, sublicensable license to use, reproduce, adapt, publish, translate
              and distribute it in any and all media.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. No Warranties</h2>
            <p>
              This website is provided "as is," with all faults, and Bandi Ads makes no express or implied
              representations or warranties, of any kind related to this website or the materials contained on this
              website.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
            <p>
              In no event shall Bandi Ads, nor any of its officers, directors and employees, be held liable for anything
              arising out of or in any way connected with your use of this website, whether such liability is under
              contract, tort or otherwise.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please contact us at:</p>
            <p className="mt-2">
              <strong>Email:</strong> avi@bandiads.com
              <br />
              <strong>Phone:</strong> +1(310) 362-7663
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t py-6 bg-white">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Bandi Ads. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
