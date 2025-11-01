import Header from "@/components/Header";
import ServingSizeAdjuster from "@/components/ServingSizeAdjuster";
import CupsToGramsConverter from "@/components/CupsToGramsConverter";
import TablespoonsToMLConverter from "@/components/TablespoonsToMLConverter";
import OuncesToGramsConverter from "@/components/OuncesToGramsConverter";
import TemperatureConverter from "@/components/TemperatureConverter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-amber-50 to-orange-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServingSizeAdjuster />
          
          <CupsToGramsConverter />
          
          <TablespoonsToMLConverter />
          
          <OuncesToGramsConverter />
          
          <TemperatureConverter />
        </div>
      </main>
    </div>
  );
}
