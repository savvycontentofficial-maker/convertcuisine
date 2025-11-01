import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowLeftRight, Thermometer } from "lucide-react";

const COMMON_TEMPS = [
  { fahrenheit: 325, label: "325°F" },
  { fahrenheit: 350, label: "350°F" },
  { fahrenheit: 375, label: "375°F" },
  { fahrenheit: 400, label: "400°F" },
  { fahrenheit: 425, label: "425°F" },
  { fahrenheit: 450, label: "450°F" },
];

export default function TemperatureConverter() {
  const [fahrenheit, setFahrenheit] = useState("");
  const [celsius, setCelsius] = useState("");

  const handleFahrenheitChange = (value: string) => {
    setFahrenheit(value);
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setCelsius(((numValue - 32) * 5 / 9).toFixed(1));
    } else {
      setCelsius("");
    }
  };

  const handleCelsiusChange = (value: string) => {
    setCelsius(value);
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setFahrenheit(((numValue * 9 / 5) + 32).toFixed(1));
    } else {
      setFahrenheit("");
    }
  };

  const handlePresetClick = (temp: number) => {
    handleFahrenheitChange(temp.toString());
  };

  return (
    <Card data-testid="card-temperature">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Thermometer className="w-5 h-5" />
          Fahrenheit ⟷ Celsius
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fahrenheit-input" className="text-xs uppercase font-medium tracking-wide text-muted-foreground">
            Fahrenheit
          </Label>
          <Input
            id="fahrenheit-input"
            data-testid="input-fahrenheit"
            type="number"
            step="5"
            value={fahrenheit}
            onChange={(e) => handleFahrenheitChange(e.target.value)}
            placeholder="0"
            className="h-12 text-lg text-right"
          />
        </div>

        <div className="flex justify-center">
          <ArrowLeftRight className="w-5 h-5 text-muted-foreground" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="celsius-input" className="text-xs uppercase font-medium tracking-wide text-muted-foreground">
            Celsius
          </Label>
          <Input
            id="celsius-input"
            data-testid="input-celsius"
            type="number"
            step="5"
            value={celsius}
            onChange={(e) => handleCelsiusChange(e.target.value)}
            placeholder="0"
            className="h-12 text-lg text-right"
          />
        </div>

        <div className="pt-2">
          <Label className="text-xs uppercase font-medium tracking-wide text-muted-foreground mb-2 block">
            Common Oven Temperatures
          </Label>
          <div className="flex flex-wrap gap-2">
            {COMMON_TEMPS.map((temp) => (
              <Button
                key={temp.fahrenheit}
                variant="secondary"
                size="sm"
                onClick={() => handlePresetClick(temp.fahrenheit)}
                data-testid={`button-preset-${temp.fahrenheit}`}
              >
                {temp.label}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
