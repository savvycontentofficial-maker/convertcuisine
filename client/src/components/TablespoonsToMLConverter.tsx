import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeftRight } from "lucide-react";

const TBSP_TO_ML = 14.787;

export default function TablespoonsToMLConverter() {
  const [tablespoons, setTablespoons] = useState("");
  const [milliliters, setMilliliters] = useState("");

  const handleTablespoonsChange = (value: string) => {
    setTablespoons(value);
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setMilliliters((numValue * TBSP_TO_ML).toFixed(1));
    } else {
      setMilliliters("");
    }
  };

  const handleMillilitersChange = (value: string) => {
    setMilliliters(value);
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setTablespoons((numValue / TBSP_TO_ML).toFixed(2));
    } else {
      setTablespoons("");
    }
  };

  return (
    <Card data-testid="card-tbsp-ml">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <ArrowLeftRight className="w-5 h-5" />
          Tablespoons ⟷ Milliliters
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="tbsp-input" className="text-xs uppercase font-medium tracking-wide text-muted-foreground">
            Tablespoons
          </Label>
          <Input
            id="tbsp-input"
            data-testid="input-tablespoons"
            type="number"
            step="0.5"
            value={tablespoons}
            onChange={(e) => handleTablespoonsChange(e.target.value)}
            placeholder="0"
            className="h-12 text-lg text-right"
          />
        </div>

        <div className="flex justify-center">
          <ArrowLeftRight className="w-5 h-5 text-muted-foreground" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="ml-input" className="text-xs uppercase font-medium tracking-wide text-muted-foreground">
            Milliliters
          </Label>
          <Input
            id="ml-input"
            data-testid="input-milliliters"
            type="number"
            step="1"
            value={milliliters}
            onChange={(e) => handleMillilitersChange(e.target.value)}
            placeholder="0"
            className="h-12 text-lg text-right"
          />
        </div>
      </CardContent>
    </Card>
  );
}
