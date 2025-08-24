export function Footer() {
  return (
    <footer className="bg-[#F7F5EF] py-12 relative z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-headline font-bold mb-6 text-[#004146]">
          Talk to Katie direct
        </h2>
        <a 
          href="mailto:katie@chroniccare.com.au"
          className="inline-block bg-[#004146] hover:bg-[#004146]/90 text-white font-headline font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-lg"
        >
          INQUIRE
        </a>
        <div className="mt-8 space-y-2">
          <p className="text-lg font-body font-semibold">
            <a href="tel:0893851430" className="text-black hover:text-primary transition-colors">
              (08) 9385 1430
            </a>
          </p>
          <p className="text-lg font-body">
            <a href="mailto:katie@chroniccare.com.au" className="text-black hover:text-primary transition-colors">
              katie@chroniccare.com.au
            </a>
          </p>
        </div>
        <p className="text-lg font-body mt-12 text-black max-w-3xl mx-auto">
          The study was conducted over three years and involved 177 participants. Results align with our previous research, awarded an <a href="https://chroniccare.com.au/vbhc" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#004146] transition-colors">International Value-Based Healthcare prize</a>.
        </p>
      </div>
    </footer>
  );
}