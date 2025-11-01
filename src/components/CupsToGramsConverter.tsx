import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeftRight } from "lucide-react";

const INGREDIENT_DENSITIES = {
  "all-purpose-flour": { name: "All-Purpose Flour", gramsPerCup: 120 },
  "sugar": { name: "Granulated Sugar", gramsPerCup: 200 },
  "brown-sugar": { name: "Brown Sugar (packed)", gramsPerCup: 220 },
  "butter": { name: "Butter", gramsPerCup: 227 },
  "water": { name: "Water", gramsPerCup: 240 },
  "milk": { name: "Milk", gramsPerCup: 244 },
  "honey": { name: "Honey", gramsPerCup: 340 },
  "cocoa-powder": { name: "Cocoa Powder", gramsPerCup: 85 },
  "rice": { name: "Rice (uncooked)", gramsPerCup: 185 },
  "oats": { name: "Oats", gramsPerCup: 80 },
};

export default function CupsToGramsConverter() {
  const [cups, setCups] = useState("");
  const [grams, setGrams] = useState("");
  const [ingredient, setIngredient] = useState("all-purpose-flour");

  const handleCupsChange = (value: string) => {
    setCups(value);
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      const density = INGREDIENT_DENSITIES[ingredient as keyof typeof INGREDIENT_DENSITIES];
      setGrams((numValue * density.gramsPerCup).toFixed(1));
    } else {
      setGrams("");
    }
  };

  const handleGramsChange = (value: string) => {
    setGrams(value);
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      const density = INGREDIENT_DENSITIES[ingredient as keyof typeof INGREDIENT_DENSITIES];
      setCups((numValue / density.gramsPerCup).toFixed(2));
    } else {
      setCups("");
    }
  };

  const handleIngredientChange = (newIngredient: string) => {
    setIngredient(newIngredient);
    if (cups) {
      const numValue = parseFloat(cups);
      const density = INGREDIENT_DENSITIES[newIngredient as keyof typeof INGREDIENT_DENSITIES];
      setGrams((numValue * density.gramsPerCup).toFixed(1));
    }
  };

  return (
    <Card data-testid="card-cups-grams">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <ArrowLeftRight className="w-5 h-5" />
          Cups ⟷ Grams
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="ingredient-select" className="text-xs uppercase font-medium tracking-wide text-muted-foreground">
            Ingredient
          </Label>
          <Select value={ingredient} onValueChange={handleIngredientChange}>
            <SelectTrigger id="ingredient-select" data-testid="select-ingredient">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(INGREDIENT_DENSITIES).map(([key, value]) => (
                <SelectItem key={key} value={key}>
                  {value.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="cups-input" className="text-xs uppercase font-medium tracking-wide text-muted-foreground">
            Cups
          </Label>
          <Input
            id="cups-input"
            data-testid="input-cups"
            type="number"
            step="0.25"
            value={cups}
            onChange={(e) => handleCupsChange(e.target.value)}
            placeholder="0"
            className="h-12 text-lg text-right"
          />
        </div>

        <div className="flex justify-center">
          <ArrowLeftRight className="w-5 h-5 text-muted-foreground" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="grams-input" className="text-xs uppercase font-medium tracking-wide text-muted-foreground">
            Grams
          </Label>
          <Input
            id="grams-input"
            data-testid="input-grams"
            type="number"
            step="1"
            value={grams}
            onChange={(e) => handleGramsChange(e.target.value)}
            placeholder="0"
            className="h-12 text-lg text-right"
          />
        </div>
      </CardContent>
    </Card>
  );
}
