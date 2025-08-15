export function Footer() {
  return (
    <footer className="bg-[#F7F5EF] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-headline font-bold mb-6 text-black">
          Got time to talk?
        </h2>
        <p className="text-lg font-body mb-8 text-black max-w-2xl mx-auto">
          Ask us how Exercise As Medicine can improve your chronic condition(s).
        </p>
        <a 
          href="mailto:admin@chroniccare.com.au"
          className="inline-block bg-[#004146] hover:bg-[#004146]/90 text-white font-headline font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-lg"
        >
          INQUIRE
        </a>
        <div className="mt-8 space-y-2">
          <p className="text-lg font-semibold">
            <a href="tel:0893851430" className="text-black hover:text-primary transition-colors">
              (08) 9385 1430
            </a>
          </p>
          <p className="text-lg">
            <a href="mailto:admin@chroniccare.com.au" className="text-black hover:text-primary transition-colors">
              admin@chroniccare.com.au
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}