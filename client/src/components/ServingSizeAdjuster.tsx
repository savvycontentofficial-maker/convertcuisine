import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

export default function ServingSizeAdjuster() {
  const [currentServings, setCurrentServings] = useState("");
  const [desiredServings, setDesiredServings] = useState("");

  const calculateMultiplier = () => {
    const current = parseFloat(currentServings);
    const desired = parseFloat(desiredServings);
    if (!isNaN(current) && !isNaN(desired) && current > 0) {
      return desired / current;
    }
    return null;
  };

  const multiplier = calculateMultiplier();

  return (
    <Card data-testid="card-serving-size" className="md:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Users className="w-5 h-5" />
          Recipe Serving Size Adjuster
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="current-servings" className="text-xs uppercase font-medium tracking-wide text-muted-foreground">
              Current Servings
            </Label>
            <Input
              id="current-servings"
              data-testid="input-current-servings"
              type="number"
              step="1"
              min="1"
              value={currentServings}
              onChange={(e) => setCurrentServings(e.target.value)}
              placeholder="4"
              className="h-12 text-lg text-right"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="desired-servings" className="text-xs uppercase font-medium tracking-wide text-muted-foreground">
              Desired Servings
            </Label>
            <Input
              id="desired-servings"
              data-testid="input-desired-servings"
              type="number"
              step="1"
              min="1"
              value={desiredServings}
              onChange={(e) => setDesiredServings(e.target.value)}
              placeholder="6"
              className="h-12 text-lg text-right"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-xs uppercase font-medium tracking-wide text-muted-foreground">
              Ingredient Multiplier
            </Label>
            <div className="h-12 flex items-center justify-center">
              {multiplier !== null ? (
                <div className="space-y-1">
                  <Badge variant="secondary" className="text-lg px-4 py-2" data-testid="badge-multiplier">
                    ×{multiplier.toFixed(2)}
                  </Badge>
                  <p className="text-xs text-muted-foreground text-center">
                    Use {(multiplier * 100).toFixed(0)}% of ingredients
                  </p>
                </div>
              ) : (
                <span className="text-muted-foreground text-sm">Enter values</span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
