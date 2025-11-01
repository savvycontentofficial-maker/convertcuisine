import { ChefHat } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-card/80 backdrop-blur-sm border-b border-card-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-3">
          <ChefHat className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              ConvertCuisine
            </h1>
            <p className="text-sm text-muted-foreground">Recipe Converter</p>
          </div>
        </div>
      </div>
    </header>
  );
}
