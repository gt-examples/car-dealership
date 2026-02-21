"use client";

import { T, Currency, Num, DateTime, Branch } from "gt-next";
import { useGT } from "gt-next/client";
import { LocaleSelector } from "gt-next";
import { useState } from "react";
import Link from "next/link";
import { vehicles, Vehicle } from "@/data/vehicles";

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

function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Link href={`/vehicle/${vehicle.slug}`} className="block py-5 border-b border-neutral-800 last:border-b-0 hover:bg-neutral-900/50 -mx-4 px-4 rounded transition-colors">
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
    </Link>
  );
}

type SortOption = "price-asc" | "price-desc" | "mileage-asc" | "year-desc";

export default function Home() {
  const gt = useGT();
  const [filter, setFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [sort, setSort] = useState<SortOption>("price-asc");

  const types = ["all", "sedan", "suv", "truck", "coupe", "convertible"];
  const typeLabels: Record<string, string> = {
    all: gt("All"),
    sedan: gt("Sedan"),
    suv: gt("SUV"),
    truck: gt("Truck"),
    coupe: gt("Coupe"),
    convertible: gt("Convertible"),
  };

  const statuses = ["all", "available", "reserved", "sold"];
  const statusLabels: Record<string, string> = {
    all: gt("All Statuses"),
    available: gt("Available"),
    reserved: gt("Reserved"),
    sold: gt("Sold"),
  };

  const sortLabels: Record<SortOption, string> = {
    "price-asc": gt("Price: Low to High"),
    "price-desc": gt("Price: High to Low"),
    "mileage-asc": gt("Lowest Mileage"),
    "year-desc": gt("Newest First"),
  };

  let filtered = filter === "all" ? [...vehicles] : vehicles.filter((v) => v.type === filter);
  if (statusFilter !== "all") {
    filtered = filtered.filter((v) => v.status === statusFilter);
  }

  filtered.sort((a, b) => {
    switch (sort) {
      case "price-asc": return a.price - b.price;
      case "price-desc": return b.price - a.price;
      case "mileage-asc": return a.mileage - b.mileage;
      case "year-desc": return b.year - a.year;
    }
  });

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

        {/* Type filter */}
        <div className="flex flex-wrap gap-2 mb-4">
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

        {/* Status filter + Sort */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="flex flex-wrap gap-2">
            {statuses.map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                  statusFilter === s
                    ? "bg-neutral-800 text-neutral-200 border-neutral-600"
                    : "bg-transparent text-neutral-500 border-neutral-800 hover:border-neutral-600 hover:text-neutral-300"
                }`}
              >
                {statusLabels[s]}
              </button>
            ))}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="ml-auto text-xs bg-neutral-900 text-neutral-400 border border-neutral-700 rounded-md px-2.5 py-1.5 focus:outline-none focus:border-neutral-500"
          >
            {(Object.keys(sortLabels) as SortOption[]).map((key) => (
              <option key={key} value={key}>{sortLabels[key]}</option>
            ))}
          </select>
        </div>

        <div>
          {filtered.map((vehicle) => (
            <VehicleCard key={vehicle.slug} vehicle={vehicle} />
          ))}
          {filtered.length === 0 && (
            <p className="text-neutral-500 text-sm py-8 text-center">
              <T>No vehicles found matching your filters.</T>
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
