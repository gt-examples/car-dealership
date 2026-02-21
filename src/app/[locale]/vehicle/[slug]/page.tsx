"use client";

import { T, Currency, Num, DateTime, Branch, Var } from "gt-next";
import { useGT } from "gt-next/client";
import { LocaleSelector } from "gt-next";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getVehicleBySlug, Vehicle } from "@/data/vehicles";

function StatusBadge({ status }: { status: "available" | "reserved" | "sold" }) {
  const colors: Record<string, string> = {
    available: "bg-emerald-900/50 text-emerald-400 border-emerald-800",
    reserved: "bg-amber-900/50 text-amber-400 border-amber-800",
    sold: "bg-red-900/50 text-red-400 border-red-800",
  };

  return (
    <T>
      <Branch
        branch={status}
        available={
          <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full border ${colors.available}`}>
            Available
          </span>
        }
        reserved={
          <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full border ${colors.reserved}`}>
            Reserved
          </span>
        }
        sold={
          <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full border ${colors.sold}`}>
            Sold
          </span>
        }
      >
        <span />
      </Branch>
    </T>
  );
}

function SpecRow({ label, value }: { label: React.ReactNode; value: React.ReactNode }) {
  return (
    <div className="flex justify-between py-2.5 border-b border-neutral-800 last:border-b-0">
      <span className="text-neutral-500 text-sm">{label}</span>
      <span className="text-neutral-200 text-sm font-medium">{value}</span>
    </div>
  );
}

export default function VehicleDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const gt = useGT();
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
        <header className="border-b border-neutral-800 bg-neutral-950">
          <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a href="https://generaltranslation.com" target="_blank" rel="noopener noreferrer"
                className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors">
                General Translation
              </a>
              <span className="text-neutral-700">/</span>
              <Link href="/" className="text-sm font-semibold text-neutral-100 hover:text-neutral-300 transition-colors">
                Car Dealership
              </Link>
            </div>
            <LocaleSelector />
          </div>
        </header>
        <main className="max-w-3xl mx-auto px-6 py-12 text-center">
          <p className="text-neutral-500"><T>Vehicle not found.</T></p>
          <Link href="/" className="text-sm text-neutral-400 hover:text-neutral-200 mt-4 inline-block transition-colors">
            <T>Back to inventory</T>
          </Link>
        </main>
      </div>
    );
  }

  const featureLabels: Record<string, string> = {
    "Adaptive Cruise Control": gt("Adaptive Cruise Control"),
    "Lane Departure Warning": gt("Lane Departure Warning"),
    "Apple CarPlay": "Apple CarPlay",
    "Android Auto": "Android Auto",
    "Blind Spot Monitor": gt("Blind Spot Monitor"),
    "Rear Cross-Traffic Alert": gt("Rear Cross-Traffic Alert"),
    "Pro Power Onboard": gt("Pro Power Onboard"),
    "360-Degree Camera": gt("360-Degree Camera"),
    "Trailer Backup Assist": gt("Trailer Backup Assist"),
    "Heated Seats": gt("Heated Seats"),
    "B&O Sound System": "B&O Sound System",
    "Tailgate Step": gt("Tailgate Step"),
    "Panoramic Sunroof": gt("Panoramic Sunroof"),
    "Gesture Control": gt("Gesture Control"),
    "Harman Kardon Audio": "Harman Kardon Audio",
    "Head-Up Display": gt("Head-Up Display"),
    "Parking Assistant Plus": gt("Parking Assistant Plus"),
    "Wireless Charging": gt("Wireless Charging"),
    "Honda Sensing Suite": "Honda Sensing Suite",
    "Multi-Angle Rearview Camera": gt("Multi-Angle Rearview Camera"),
    "Remote Start": gt("Remote Start"),
    "Performance Data Recorder": gt("Performance Data Recorder"),
    "Magnetic Ride Control": gt("Magnetic Ride Control"),
    "Bose Premium Audio": "Bose Premium Audio",
    "Front Lift System": gt("Front Lift System"),
    "Removable Top": gt("Removable Top"),
    "Trail Rated Badge": gt("Trail Rated Badge"),
    "Dana 44 Axles": "Dana 44 Axles",
    "Rock-Trac Transfer Case": "Rock-Trac Transfer Case",
    "Uconnect Infotainment": "Uconnect Infotainment",
    "Off-Road Camera": gt("Off-Road Camera"),
    "MagneRide Suspension": "MagneRide Suspension",
    "SYNC 4 Infotainment": "SYNC 4 Infotainment",
    "B&O Audio": "B&O Audio",
    "Digital Cluster": gt("Digital Cluster"),
    "Active Exhaust": gt("Active Exhaust"),
    "Performance Pack": gt("Performance Pack"),
    "Toyota Safety Sense 2.5": "Toyota Safety Sense 2.5",
    "Multi-Terrain Select": gt("Multi-Terrain Select"),
    "JBL Audio": "JBL Audio",
    "Panoramic Roof": gt("Panoramic Roof"),
    "Power Liftgate": gt("Power Liftgate"),
    "12-Inch Touchscreen": gt("12-Inch Touchscreen"),
    "Air Suspension": gt("Air Suspension"),
    "Multifunction Tailgate": gt("Multifunction Tailgate"),
    "Tow Package": gt("Tow Package"),
    "Sport Chrono Package": "Sport Chrono Package",
    "PASM Suspension": "PASM Suspension",
    "Bose Surround Sound": "Bose Surround Sound",
    "Sport Exhaust": gt("Sport Exhaust"),
    "Porsche Active Suspension Management": "Porsche Active Suspension Management",
    "PCM Infotainment": "PCM Infotainment",
  };

  const colorLabels: Record<string, string> = {
    "Midnight Black": gt("Midnight Black"),
    "Ash Gray": gt("Ash Gray"),
    "Oxford White": gt("Oxford White"),
    "Black": gt("Black"),
    "Alpine White": gt("Alpine White"),
    "Cognac Leather": gt("Cognac Leather"),
    "Rallye Red": gt("Rallye Red"),
    "Torch Red": gt("Torch Red"),
    "Jet Black": gt("Jet Black"),
    "Sarge Green": gt("Sarge Green"),
    "Vapor Blue": gt("Vapor Blue"),
    "Ebony Leather": gt("Ebony Leather"),
    "Blueprint": gt("Blueprint"),
    "Light Gray": gt("Light Gray"),
    "Patriot Blue": gt("Patriot Blue"),
    "Diesel Gray": gt("Diesel Gray"),
    "GT Silver Metallic": gt("GT Silver Metallic"),
    "Black Leather": gt("Black Leather"),
  };

  const drivetrainLabels: Record<string, string> = {
    "FWD": gt("FWD"),
    "RWD": gt("RWD"),
    "AWD": gt("AWD"),
    "4WD": gt("4WD"),
  };

  const engineLabels: Record<string, string> = {
    "2.5L 4-Cylinder": gt("2.5L 4-Cylinder"),
    "3.5L V6 EcoBoost": gt("3.5L V6 EcoBoost"),
    "3.0L Inline-6 Turbo": gt("3.0L Inline-6 Turbo"),
    "2.0L 4-Cylinder": gt("2.0L 4-Cylinder"),
    "6.2L V8": gt("6.2L V8"),
    "3.6L V6": gt("3.6L V6"),
    "5.0L V8": gt("5.0L V8"),
    "5.7L HEMI V8": gt("5.7L HEMI V8"),
    "3.0L Twin-Turbo Flat-6": gt("3.0L Twin-Turbo Flat-6"),
  };

  const transmissionLabels: Record<string, string> = {
    "8-Speed Automatic": gt("8-Speed Automatic"),
    "10-Speed Automatic": gt("10-Speed Automatic"),
    "CVT": gt("CVT"),
    "8-Speed Dual-Clutch": gt("8-Speed Dual-Clutch"),
    "8-Speed PDK": gt("8-Speed PDK"),
  };

  const fuelEconomyLabels: Record<string, string> = {
    "28/39 MPG": gt("28/39 MPG"),
    "20/26 MPG": gt("20/26 MPG"),
    "21/26 MPG": gt("21/26 MPG"),
    "31/40 MPG": gt("31/40 MPG"),
    "16/24 MPG": gt("16/24 MPG"),
    "20/24 MPG": gt("20/24 MPG"),
    "15/24 MPG": gt("15/24 MPG"),
    "27/35 MPG": gt("27/35 MPG"),
    "15/22 MPG": gt("15/22 MPG"),
    "18/25 MPG": gt("18/25 MPG"),
  };

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <header className="border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="https://generaltranslation.com" target="_blank" rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors">
              General Translation
            </a>
            <span className="text-neutral-700">/</span>
            <Link href="/" className="text-sm font-semibold text-neutral-100 hover:text-neutral-300 transition-colors">
              Car Dealership
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://github.com/gt-examples/car-dealership" target="_blank" rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-200 transition-colors" aria-label="View on GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <LocaleSelector />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <Link href="/" className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors mb-6 inline-block">
          <T>Back to inventory</T>
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 flex-wrap mb-2">
            <h1 className="text-2xl font-semibold text-neutral-100">
              {vehicle.year} {vehicle.make} {vehicle.model}
            </h1>
            <StatusBadge status={vehicle.status} />
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-neutral-500">
            <T><Num>{vehicle.mileage}</Num> miles</T>
            <T>Listed <DateTime>{vehicle.listedAt}</DateTime></T>
          </div>
          <div className="text-3xl font-bold text-neutral-100 mt-4">
            <Currency currency="USD">{vehicle.price}</Currency>
          </div>
        </div>

        {/* Specifications */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-neutral-100 mb-4">
            <T>Specifications</T>
          </h2>
          <div className="border border-neutral-800 rounded-lg px-4">
            <SpecRow label={<T>Engine</T>} value={engineLabels[vehicle.engine] || vehicle.engine} />
            <SpecRow label={<T>Horsepower</T>} value={<T><Num>{vehicle.horsepower}</Num> hp</T>} />
            <SpecRow label={<T>Torque</T>} value={<T><Num>{vehicle.torque}</Num> lb-ft</T>} />
            <SpecRow label={<T>Transmission</T>} value={transmissionLabels[vehicle.transmission] || vehicle.transmission} />
            <SpecRow label={<T>Drivetrain</T>} value={drivetrainLabels[vehicle.drivetrain] || vehicle.drivetrain} />
            <SpecRow label={<T>Fuel Economy</T>} value={fuelEconomyLabels[vehicle.fuelEconomy] || vehicle.fuelEconomy} />
            <SpecRow label={<T>Exterior Color</T>} value={colorLabels[vehicle.exteriorColor] || vehicle.exteriorColor} />
            <SpecRow label={<T>Interior Color</T>} value={colorLabels[vehicle.interiorColor] || vehicle.interiorColor} />
          </div>
        </section>

        {/* Features */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-neutral-100 mb-4">
            <T>Features</T>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {vehicle.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-sm text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 shrink-0" />
                {featureLabels[feature] || feature}
              </div>
            ))}
          </div>
        </section>

        {/* Financing */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-neutral-100 mb-4">
            <T>Financing Estimate</T>
          </h2>
          <div className="border border-neutral-800 rounded-lg p-5">
            <div className="text-center mb-4">
              <div className="text-sm text-neutral-500 mb-1"><T>Estimated Monthly Payment</T></div>
              <div className="text-3xl font-bold text-neutral-100">
                <Currency currency="USD">{vehicle.monthlyPayment}</Currency>
                <span className="text-sm font-normal text-neutral-500"> / <T>month</T></span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-800">
              <div className="text-center">
                <div className="text-sm text-neutral-500 mb-1"><T>Down Payment</T></div>
                <div className="text-sm font-medium text-neutral-200">
                  <Currency currency="USD">{vehicle.downPayment}</Currency>
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-neutral-500 mb-1"><T>Loan Term</T></div>
                <div className="text-sm font-medium text-neutral-200">
                  <T><Num>{vehicle.loanTerm}</Num> months</T>
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-neutral-500 mb-1">APR</div>
                <div className="text-sm font-medium text-neutral-200">
                  <Num>{vehicle.apr}</Num>%
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 pt-6 border-t border-neutral-800 text-center text-sm text-neutral-500">
          <T>
            This is an example application built with General Translation to demonstrate
            internationalization with Currency, Num, DateTime, and Branch components.
          </T>
        </div>
      </main>
    </div>
  );
}
