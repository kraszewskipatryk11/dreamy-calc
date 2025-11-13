import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Moon } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container max-w-2xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-base sm:text-xl">
            <Moon className="h-5 w-5 sm:h-6 sm:w-6" />
            <span>Sleepy Calc</span>
          </Link>
          <nav className="flex items-center gap-1 sm:gap-2">
            <Button variant="ghost" size="sm" className="text-xs sm:text-sm px-2 sm:px-4" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="ghost" size="sm" className="text-xs sm:text-sm px-2 sm:px-4" asChild>
              <Link href="/sleep-tips">Tips</Link>
            </Button>
          </nav>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
}
