import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-headline font-bold text-primary dark:text-primary-dark">
              Chronic Care Australia
            </h1>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}