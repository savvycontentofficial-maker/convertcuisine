import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeftRight } from "lucide-react";

const OZ_TO_GRAMS = 28.3495;

export default function OuncesToGramsConverter() {
  const [ounces, setOunces] = useState("");
  const [grams, setGrams] = useState("");

  const handleOuncesChange = (value: string) => {
    setOunces(value);
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setGrams((numValue * OZ_TO_GRAMS).toFixed(1));
    } else {
      setGrams("");
    }
  };

  const handleGramsChange = (value: string) => {
    setGrams(value);
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setOunces((numValue / OZ_TO_GRAMS).toFixed(2));
    } else {
      setOunces("");
    }
  };

  return (
    <Card data-testid="card-oz-grams">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <ArrowLeftRight className="w-5 h-5" />
          Ounces ⟷ Grams
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="oz-input" className="text-xs uppercase font-medium tracking-wide text-muted-foreground">
            Ounces
          </Label>
          <Input
            id="oz-input"
            data-testid="input-ounces"
            type="number"
            step="0.5"
            value={ounces}
            onChange={(e) => handleOuncesChange(e.target.value)}
            placeholder="0"
            className="h-12 text-lg text-right"
          />
        </div>

        <div className="flex justify-center">
          <ArrowLeftRight className="w-5 h-5 text-muted-foreground" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="oz-grams-input" className="text-xs uppercase font-medium tracking-wide text-muted-foreground">
            Grams
          </Label>
          <Input
            id="oz-grams-input"
            data-testid="input-oz-grams"
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
