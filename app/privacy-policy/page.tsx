import Link from "next/link"

export default function PrivacyPolicy() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose prose-blue max-w-none">
            <p className="text-lg mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              At Bandi Ads, we respect your privacy and are committed to protecting your personal data. This privacy
              policy will inform you about how we look after your personal data when you visit our website and tell you
              about your privacy rights and how the law protects you.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. The Data We Collect About You</h2>
            <p>
              Personal data, or personal information, means any information about an individual from which that person
              can be identified. We may collect, use, store and transfer different kinds of personal data about you
              which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Identity Data includes first name, last name, username or similar identifier.</li>
              <li>Contact Data includes email address and telephone numbers.</li>
              <li>
                Technical Data includes internet protocol (IP) address, browser type and version, time zone setting and
                location, browser plug-in types and versions, operating system and platform, and other technology on the
                devices you use to access this website.
              </li>
              <li>Usage Data includes information about how you use our website and services.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Personal Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal
              data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>
                Where it is necessary for our legitimate interests (or those of a third party) and your interests and
                fundamental rights do not override those interests.
              </li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally
              lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your
              personal data to those employees, agents, contractors and other third parties who have a business need to
              know.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data,
              including the right to request access, correction, erasure, restriction, transfer, to object to
              processing, to portability of data and (where the lawful ground of processing is consent) to withdraw
              consent.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
            <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
            <p className="mt-2">
              <strong>Email:</strong> avi@bandiads.com
              <br />
              <strong>Phone:</strong> +1 (310) 362-7663
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
