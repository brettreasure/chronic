export function Footer() {
  return (
    <footer className="bg-primary dark:bg-primary-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-headline font-bold mb-4">
          Contact Chronic Care Australia
        </h2>
        <p className="text-lg font-body mb-6">
          Get your own individual support program
        </p>
        <div className="space-y-2 text-white/90">
          <p className="text-xl font-semibold">
            <a href="tel:0893851430" className="hover:text-white transition-colors">
              (08) 9385 1430
            </a>
          </p>
          <p className="text-xl">
            <a href="mailto:admin@chroniccare.com.au" className="hover:text-white transition-colors">
              admin@chroniccare.com.au
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}