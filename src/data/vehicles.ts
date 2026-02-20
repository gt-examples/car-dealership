export type Vehicle = {
  slug: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  type: "sedan" | "suv" | "truck" | "coupe" | "convertible";
  status: "available" | "reserved" | "sold";
  listedAt: Date;
  engine: string;
  transmission: string;
  drivetrain: string;
  fuelEconomy: string;
  exteriorColor: string;
  interiorColor: string;
  horsepower: number;
  torque: number;
  features: string[];
  monthlyPayment: number;
  downPayment: number;
  loanTerm: number;
  apr: number;
};

export const vehicles: Vehicle[] = [
  {
    slug: "2024-toyota-camry",
    make: "Toyota", model: "Camry", year: 2024, price: 28500, mileage: 12400,
    type: "sedan", status: "available", listedAt: new Date("2026-01-15"),
    engine: "2.5L 4-Cylinder", transmission: "8-Speed Automatic", drivetrain: "FWD",
    fuelEconomy: "28/39 MPG", exteriorColor: "Midnight Black", interiorColor: "Ash Gray",
    horsepower: 203, torque: 184,
    features: ["Adaptive Cruise Control", "Lane Departure Warning", "Apple CarPlay", "Android Auto", "Blind Spot Monitor", "Rear Cross-Traffic Alert"],
    monthlyPayment: 425, downPayment: 3000, loanTerm: 60, apr: 4.9,
  },
  {
    slug: "2023-ford-f150",
    make: "Ford", model: "F-150", year: 2023, price: 45900, mileage: 31200,
    type: "truck", status: "available", listedAt: new Date("2026-01-20"),
    engine: "3.5L V6 EcoBoost", transmission: "10-Speed Automatic", drivetrain: "4WD",
    fuelEconomy: "20/26 MPG", exteriorColor: "Oxford White", interiorColor: "Black",
    horsepower: 400, torque: 500,
    features: ["Pro Power Onboard", "360-Degree Camera", "Trailer Backup Assist", "Heated Seats", "B&O Sound System", "Tailgate Step"],
    monthlyPayment: 695, downPayment: 5000, loanTerm: 60, apr: 5.4,
  },
  {
    slug: "2024-bmw-x5",
    make: "BMW", model: "X5", year: 2024, price: 62300, mileage: 8700,
    type: "suv", status: "reserved", listedAt: new Date("2026-02-01"),
    engine: "3.0L Inline-6 Turbo", transmission: "8-Speed Automatic", drivetrain: "AWD",
    fuelEconomy: "21/26 MPG", exteriorColor: "Alpine White", interiorColor: "Cognac Leather",
    horsepower: 335, torque: 330,
    features: ["Panoramic Sunroof", "Gesture Control", "Harman Kardon Audio", "Head-Up Display", "Parking Assistant Plus", "Wireless Charging"],
    monthlyPayment: 985, downPayment: 8000, loanTerm: 60, apr: 5.2,
  },
  {
    slug: "2022-honda-civic",
    make: "Honda", model: "Civic", year: 2022, price: 21800, mileage: 45300,
    type: "sedan", status: "sold", listedAt: new Date("2025-11-10"),
    engine: "2.0L 4-Cylinder", transmission: "CVT", drivetrain: "FWD",
    fuelEconomy: "31/40 MPG", exteriorColor: "Rallye Red", interiorColor: "Black",
    horsepower: 158, torque: 138,
    features: ["Honda Sensing Suite", "Adaptive Cruise Control", "Apple CarPlay", "Android Auto", "Multi-Angle Rearview Camera", "Remote Start"],
    monthlyPayment: 325, downPayment: 2500, loanTerm: 60, apr: 4.5,
  },
  {
    slug: "2024-chevrolet-corvette",
    make: "Chevrolet", model: "Corvette", year: 2024, price: 67500, mileage: 3200,
    type: "coupe", status: "available", listedAt: new Date("2026-02-10"),
    engine: "6.2L V8", transmission: "8-Speed Dual-Clutch", drivetrain: "RWD",
    fuelEconomy: "16/24 MPG", exteriorColor: "Torch Red", interiorColor: "Jet Black",
    horsepower: 490, torque: 465,
    features: ["Performance Data Recorder", "Magnetic Ride Control", "Head-Up Display", "Bose Premium Audio", "Front Lift System", "Wireless Charging"],
    monthlyPayment: 1050, downPayment: 10000, loanTerm: 60, apr: 5.9,
  },
  {
    slug: "2023-jeep-wrangler",
    make: "Jeep", model: "Wrangler", year: 2023, price: 38700, mileage: 22100,
    type: "suv", status: "available", listedAt: new Date("2025-12-05"),
    engine: "3.6L V6", transmission: "8-Speed Automatic", drivetrain: "4WD",
    fuelEconomy: "20/24 MPG", exteriorColor: "Sarge Green", interiorColor: "Black",
    horsepower: 285, torque: 260,
    features: ["Removable Top", "Trail Rated Badge", "Dana 44 Axles", "Rock-Trac Transfer Case", "Uconnect Infotainment", "Off-Road Camera"],
    monthlyPayment: 585, downPayment: 4000, loanTerm: 60, apr: 5.1,
  },
  {
    slug: "2024-ford-mustang",
    make: "Ford", model: "Mustang", year: 2024, price: 55200, mileage: 5800,
    type: "convertible", status: "reserved", listedAt: new Date("2026-02-14"),
    engine: "5.0L V8", transmission: "10-Speed Automatic", drivetrain: "RWD",
    fuelEconomy: "15/24 MPG", exteriorColor: "Vapor Blue", interiorColor: "Ebony Leather",
    horsepower: 480, torque: 415,
    features: ["MagneRide Suspension", "SYNC 4 Infotainment", "B&O Audio", "Digital Cluster", "Active Exhaust", "Performance Pack"],
    monthlyPayment: 865, downPayment: 7000, loanTerm: 60, apr: 5.5,
  },
  {
    slug: "2023-toyota-rav4",
    make: "Toyota", model: "RAV4", year: 2023, price: 33400, mileage: 19600,
    type: "suv", status: "available", listedAt: new Date("2025-12-20"),
    engine: "2.5L 4-Cylinder", transmission: "8-Speed Automatic", drivetrain: "AWD",
    fuelEconomy: "27/35 MPG", exteriorColor: "Blueprint", interiorColor: "Light Gray",
    horsepower: 203, torque: 184,
    features: ["Toyota Safety Sense 2.5", "Multi-Terrain Select", "Wireless Charging", "JBL Audio", "Panoramic Roof", "Power Liftgate"],
    monthlyPayment: 505, downPayment: 3500, loanTerm: 60, apr: 4.7,
  },
  {
    slug: "2024-ram-1500",
    make: "Ram", model: "1500", year: 2024, price: 52100, mileage: 11400,
    type: "truck", status: "sold", listedAt: new Date("2026-01-08"),
    engine: "5.7L HEMI V8", transmission: "8-Speed Automatic", drivetrain: "4WD",
    fuelEconomy: "15/22 MPG", exteriorColor: "Patriot Blue", interiorColor: "Diesel Gray",
    horsepower: 395, torque: 410,
    features: ["12-Inch Touchscreen", "Air Suspension", "Multifunction Tailgate", "Harman Kardon Audio", "Head-Up Display", "Tow Package"],
    monthlyPayment: 815, downPayment: 6000, loanTerm: 60, apr: 5.3,
  },
  {
    slug: "2023-porsche-911",
    make: "Porsche", model: "911", year: 2023, price: 112000, mileage: 6100,
    type: "coupe", status: "available", listedAt: new Date("2026-02-05"),
    engine: "3.0L Twin-Turbo Flat-6", transmission: "8-Speed PDK", drivetrain: "RWD",
    fuelEconomy: "18/25 MPG", exteriorColor: "GT Silver Metallic", interiorColor: "Black Leather",
    horsepower: 379, torque: 331,
    features: ["Sport Chrono Package", "PASM Suspension", "Bose Surround Sound", "Sport Exhaust", "Porsche Active Suspension Management", "PCM Infotainment"],
    monthlyPayment: 1795, downPayment: 15000, loanTerm: 60, apr: 5.7,
  },
];

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.slug === slug);
}
