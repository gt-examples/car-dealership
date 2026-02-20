"use client";

import { T, Currency, Num, DateTime, Branch } from "gt-next";
import { useGT } from "gt-next/client";
import { LocaleSelector } from "gt-next";
import { useState } from "react";

type Vehicle = {
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  type: "sedan" | "suv" | "truck" | "coupe" | "convertible";
  status: "available" | "reserved" | "sold";
  listedAt: Date;
};

function StatusBadge({ status }: { status: "available" | "reserved" | "sold" }) {
  const colors: Record<string, string> = {
    available: "bg-emerald-900/50 text-emerald-400 border-emerald-800",
    reserved: "bg-amber-900/50 text-amber-400 border-amber-800",
    sold: "bg-red-900/50 text-red-400 border-red-800",
  };

  return (
    <Branch
      branch={status}
      available={
        <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full border ${colors.available}`}>
          <T>Available</T>
        </span>
      }
      reserved={
        <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full border ${colors.reserved}`}>
          <T>Reserved</T>
        </span>
      }
      sold={
        <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full border ${colors.sold}`}>
          <T>Sold</T>
        </span>
      }
    >
      <span />
    </Branch>
  );
}

function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <div className="py-5 border-b border-neutral-800 last:border-b-0">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base font-medium text-neutral-100">
              {vehicle.year} {vehicle.make} {vehicle.model}
            </h3>
            <StatusBadge status={vehicle.status} />
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-neutral-500">
            <T>
              <Num>{vehicle.mileage}</Num> miles
            </T>
            <T>
              Listed <DateTime>{vehicle.listedAt}</DateTime>
            </T>
          </div>
        </div>
        <div className="text-lg font-semibold text-neutral-200 shrink-0">
          <Currency currency="USD">{vehicle.price}</Currency>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const t = useGT();
  const [filter, setFilter] = useState<string>("all");

  const vehicles: Vehicle[] = [
    { make: "Toyota", model: "Camry", year: 2024, price: 28500, mileage: 12400, type: "sedan", status: "available", listedAt: new Date("2026-01-15") },
    { make: "Ford", model: "F-150", year: 2023, price: 45900, mileage: 31200, type: "truck", status: "available", listedAt: new Date("2026-01-20") },
    { make: "BMW", model: "X5", year: 2024, price: 62300, mileage: 8700, type: "suv", status: "reserved", listedAt: new Date("2026-02-01") },
    { make: "Honda", model: "Civic", year: 2022, price: 21800, mileage: 45300, type: "sedan", status: "sold", listedAt: new Date("2025-11-10") },
    { make: "Chevrolet", model: "Corvette", year: 2024, price: 67500, mileage: 3200, type: "coupe", status: "available", listedAt: new Date("2026-02-10") },
    { make: "Jeep", model: "Wrangler", year: 2023, price: 38700, mileage: 22100, type: "suv", status: "available", listedAt: new Date("2025-12-05") },
    { make: "Ford", model: "Mustang", year: 2024, price: 55200, mileage: 5800, type: "convertible", status: "reserved", listedAt: new Date("2026-02-14") },
    { make: "Toyota", model: "RAV4", year: 2023, price: 33400, mileage: 19600, type: "suv", status: "available", listedAt: new Date("2025-12-20") },
    { make: "Ram", model: "1500", year: 2024, price: 52100, mileage: 11400, type: "truck", status: "sold", listedAt: new Date("2026-01-08") },
    { make: "Porsche", model: "911", year: 2023, price: 112000, mileage: 6100, type: "coupe", status: "available", listedAt: new Date("2026-02-05") },
  ];

  const types = ["all", "sedan", "suv", "truck", "coupe", "convertible"];
  const typeLabels: Record<string, string> = {
    all: t("All"),
    sedan: t("Sedan"),
    suv: t("SUV"),
    truck: t("Truck"),
    coupe: t("Coupe"),
    convertible: t("Convertible"),
  };

  const filtered = filter === "all" ? vehicles : vehicles.filter((v) => v.type === filter);

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <header className="border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="https://generaltranslation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              General Translation
            </a>
            <span className="text-neutral-700">/</span>
            <h1 className="text-sm font-semibold text-neutral-100">
              Car Dealership
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gt-examples/car-dealership"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-200 transition-colors"
              aria-label="View on GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <LocaleSelector />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-neutral-100 mb-3">
            <T>Vehicle Inventory</T>
          </h2>
          <p className="text-base text-neutral-400 max-w-xl leading-relaxed">
            <T>
              Browse our selection of <Num>{vehicles.length}</Num> vehicles.
              Prices, mileage, and dates are formatted for your locale using gt-next.
            </T>
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
                filter === type
                  ? "bg-neutral-100 text-neutral-900 border-neutral-100"
                  : "bg-transparent text-neutral-400 border-neutral-700 hover:border-neutral-500 hover:text-neutral-200"
              }`}
            >
              {typeLabels[type]}
            </button>
          ))}
        </div>

        <div>
          {filtered.map((vehicle, i) => (
            <VehicleCard key={i} vehicle={vehicle} />
          ))}
          {filtered.length === 0 && (
            <p className="text-neutral-500 text-sm py-8 text-center">
              <T>No vehicles found for this type.</T>
            </p>
          )}
        </div>

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
