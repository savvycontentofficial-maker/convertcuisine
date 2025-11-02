import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeftRight, ChefHat, Scale, Thermometer, Users } from "lucide-react";

// Ingredient conversion data
const ingredients = {
  "All-Purpose Flour": { cupsToGrams: 120 },
  "Granulated Sugar": { cupsToGrams: 200 },
  "Brown Sugar (packed)": { cupsToGrams: 220 },
  "Butter": { cupsToGrams: 227 },
  "Milk": { cupsToGrams: 240 },
  "Water": { cupsToGrams: 240 },
  "Honey": { cupsToGrams: 340 },
  "Vegetable Oil": { cupsToGrams: 220 },
  "Cocoa Powder": { cupsToGrams: 85 },
  "Powdered Sugar": { cupsToGrams: 120 },
};

export default function Home() {
  // Recipe Serving Size Adjuster
  const [currentServings, setCurrentServings] = useState<number>(4);
  const [desiredServings, setDesiredServings] = useState<number>(6);
  const multiplier = desiredServings / currentServings || 0;

  // Cups to Grams
  const [selectedIngredient, setSelectedIngredient] = useState<string>("All-Purpose Flour");
  const [cups, setCups] = useState<string>("");
  const [grams, setGrams] = useState<string>("");

  // Tablespoons to Milliliters
  const [tablespoons, setTablespoons] = useState<string>("");
  const [milliliters, setMilliliters] = useState<string>("");

  // Ounces to Grams
  const [ounces, setOunces] = useState<string>("");
  const [ouncesToGrams, setOuncesToGrams] = useState<string>("");

  // Fahrenheit to Celsius
  const [fahrenheit, setFahrenheit] = useState<string>("");
  const [celsius, setCelsius] = useState<string>("");

  // Conversion handlers
  const handleCupsChange = (value: string) => {
    setCups(value);
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      const ratio = ingredients[selectedIngredient as keyof typeof ingredients]?.cupsToGrams || 0;
      setGrams((numValue * ratio).toFixed(1));
    } else {
      setGrams("");
    }
  };

  const handleGramsChange = (value: string) => {
    setGrams(value);
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      const ratio = ingredients[selectedIngredient as keyof typeof ingredients]?.cupsToGrams || 1;
      setCups((numValue / ratio).toFixed(2));
    } else {
      setCups("");
    }
  };

  const handleTablespoonChange = (value: string) => {
    setTablespoons(value);
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setMilliliters((numValue * 14.7868).toFixed(1));
    } else {
      setMilliliters("");
    }
  };

  const handleMilliliterChange = (value: string) => {
    setMilliliters(value);
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setTablespoons((numValue / 14.7868).toFixed(2));
    } else {
      setTablespoons("");
    }
  };

  const handleOuncesChange = (value: string) => {
    setOunces(value);
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setOuncesToGrams((numValue * 28.3495).toFixed(1));
    } else {
      setOuncesToGrams("");
    }
  };

  const handleOuncesToGramsChange = (value: string) => {
    setOuncesToGrams(value);
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setOunces((numValue / 28.3495).toFixed(2));
    } else {
      setOunces("");
    }
  };

  const handleFahrenheitChange = (value: string) => {
    setFahrenheit(value);
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setCelsius((((numValue - 32) * 5) / 9).toFixed(1));
    } else {
      setCelsius("");
    }
  };

  const handleCelsiusChange = (value: string) => {
    setCelsius(value);
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setFahrenheit(((numValue * 9) / 5 + 32).toFixed(1));
    } else {
      setFahrenheit("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <ChefHat className="h-8 w-8 text-orange-500" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">ConvertCuisine</h1>
              <p className="text-sm text-gray-600">Professional Recipe Converter</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Convert Recipes with Confidence!
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Accurate ingredient conversions for perfect cooking every time
          </p>
        </div>

        {/* Recipe Serving Size Adjuster */}
        <Card className="border-orange-200 shadow-lg hover:shadow-xl transition-shadow bg-white/90 backdrop-blur">
          <CardHeader className="border-b border-orange-100 bg-gradient-to-r from-orange-50 to-amber-50">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-orange-600" />
              <CardTitle className="text-gray-900">Recipe Serving Size Adjuster</CardTitle>
            </div>
            <CardDescription>Scale your recipe for any number of servings</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              <div>
                <Label htmlFor="current" className="text-gray-700 font-medium">Current Servings</Label>
                <Input
                  id="current"
                  type="number"
                  min="1"
                  value={currentServings}
                  onChange={(e) => setCurrentServings(parseInt(e.target.value) || 1)}
                  className="mt-1.5 border-orange-200 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <Label htmlFor="desired" className="text-gray-700 font-medium">Desired Servings</Label>
                <Input
                  id="desired"
                  type="number"
                  min="1"
                  value={desiredServings}
                  onChange={(e) => setDesiredServings(parseInt(e.target.value) || 1)}
                  className="mt-1.5 border-orange-200 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <p className="text-sm text-gray-600 mb-1">Ingredient Multiplier</p>
                <p className="text-3xl font-bold text-orange-600">
                  {multiplier.toFixed(2)}×
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cups to Grams */}
        <Card className="border-orange-200 shadow-lg hover:shadow-xl transition-shadow bg-white/90 backdrop-blur">
          <CardHeader className="border-b border-orange-100 bg-gradient-to-r from-orange-50 to-amber-50">
            <div className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-orange-600" />
              <CardTitle className="text-gray-900">Cups ↔ Grams</CardTitle>
            </div>
            <CardDescription>Ingredient-aware volume to weight conversion</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="mb-4">
              <Label className="text-gray-700 font-medium">Ingredient</Label>
              <Select value={selectedIngredient} onValueChange={setSelectedIngredient}>
                <SelectTrigger className="mt-1.5 border-orange-200 focus:ring-orange-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(ingredients).map((ing) => (
                    <SelectItem key={ing} value={ing}>
                      {ing}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
              <div>
                <Label htmlFor="cups" className="text-gray-700 font-medium">Cups</Label>
                <Input
                  id="cups"
                  type="number"
                  step="0.25"
                  value={cups}
                  onChange={(e) => handleCupsChange(e.target.value)}
                  placeholder="0.25"
                  className="mt-1.5 border-orange-200 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div className="flex items-center justify-center md:order-3">
                <ArrowLeftRight className="h-6 w-6 text-orange-400" />
              </div>
              <div>
                <Label htmlFor="grams" className="text-gray-700 font-medium">Grams</Label>
                <Input
                  id="grams"
                  type="number"
                  step="1"
                  value={grams}
                  onChange={(e) => handleGramsChange(e.target.value)}
                  placeholder="30.0"
                  className="mt-1.5 border-orange-200 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tablespoons to Milliliters */}
        <Card className="border-orange-200 shadow-lg hover:shadow-xl transition-shadow bg-white/90 backdrop-blur">
          <CardHeader className="border-b border-orange-100 bg-gradient-to-r from-orange-50 to-amber-50">
            <div className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-orange-600" />
              <CardTitle className="text-gray-900">Tablespoons ↔ Milliliters</CardTitle>
            </div>
            <CardDescription>Quick liquid measurement conversion</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
              <div>
                <Label htmlFor="tbsp" className="text-gray-700 font-medium">Tablespoons</Label>
                <Input
                  id="tbsp"
                  type="number"
                  step="1"
                  value={tablespoons}
                  onChange={(e) => handleTablespoonChange(e.target.value)}
                  placeholder="0"
                  className="mt-1.5 border-orange-200 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div className="flex items-center justify-center md:order-3">
                <ArrowLeftRight className="h-6 w-6 text-orange-400" />
              </div>
              <div>
                <Label htmlFor="ml" className="text-gray-700 font-medium">Milliliters</Label>
                <Input
                  id="ml"
                  type="number"
                  step="1"
                  value={milliliters}
                  onChange={(e) => handleMilliliterChange(e.target.value)}
                  placeholder="0"
                  className="mt-1.5 border-orange-200 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ounces to Grams */}
        <Card className="border-orange-200 shadow-lg hover:shadow-xl transition-shadow bg-white/90 backdrop-blur">
          <CardHeader className="border-b border-orange-100 bg-gradient-to-r from-orange-50 to-amber-50">
            <div className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-orange-600" />
              <CardTitle className="text-gray-900">Ounces ↔ Grams</CardTitle>
            </div>
            <CardDescription>Weight conversion for precise measurements</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
              <div>
                <Label htmlFor="oz" className="text-gray-700 font-medium">Ounces</Label>
                <Input
                  id="oz"
                  type="number"
                  step="1"
                  value={ounces}
                  onChange={(e) => handleOuncesChange(e.target.value)}
                  placeholder="0"
                  className="mt-1.5 border-orange-200 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div className="flex items-center justify-center md:order-3">
                <ArrowLeftRight className="h-6 w-6 text-orange-400" />
              </div>
              <div>
                <Label htmlFor="oz-grams" className="text-gray-700 font-medium">Grams</Label>
                <Input
                  id="oz-grams"
                  type="number"
                  step="1"
                  value={ouncesToGrams}
                  onChange={(e) => handleOuncesToGramsChange(e.target.value)}
                  placeholder="0"
                  className="mt-1.5 border-orange-200 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Fahrenheit to Celsius */}
        <Card className="border-orange-200 shadow-lg hover:shadow-xl transition-shadow bg-white/90 backdrop-blur">
          <CardHeader className="border-b border-orange-100 bg-gradient-to-r from-orange-50 to-amber-50">
            <div className="flex items-center gap-2">
              <Thermometer className="h-5 w-5 text-orange-600" />
              <CardTitle className="text-gray-900">Fahrenheit ↔ Celsius</CardTitle>
            </div>
            <CardDescription>Oven temperature conversion</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
              <div>
                <Label htmlFor="f" className="text-gray-700 font-medium">Fahrenheit</Label>
                <Input
                  id="f"
                  type="number"
                  step="1"
                  value={fahrenheit}
                  onChange={(e) => handleFahrenheitChange(e.target.value)}
                  placeholder="0"
                  className="mt-1.5 border-orange-200 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div className="flex items-center justify-center md:order-3">
                <ArrowLeftRight className="h-6 w-6 text-orange-400" />
              </div>
              <div>
                <Label htmlFor="c" className="text-gray-700 font-medium">Celsius</Label>
                <Input
                  id="c"
                  type="number"
                  step="1"
                  value={celsius}
                  onChange={(e) => handleCelsiusChange(e.target.value)}
                  placeholder="0"
                  className="mt-1.5 border-orange-200 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-orange-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-gray-600">© 2025 ConvertCuisine. Made with ❤️ for home cooks.</p>
        </div>
      </footer>
    </div>
  );
}
