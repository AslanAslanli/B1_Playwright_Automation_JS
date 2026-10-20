let budget = 45000;

let hills = `
name - Hills
average price - 80,000 - 100,000
rating - 4.0
gated - no
allow pets - yes
`;

let oaks = `
name - Oaks
average price - 55,000 - 75,000
rating - 3.5
gated - no
allow pets - yes
`;

let highland = `
name - Highland
average price - 120,000 - 150,000
rating - 4.5
gated - yes
allow pets - no
`;

let canyon = `
name - Canyon
average price - 160,000 - 201,000
rating - 4.8
gated - yes
allow pets - yes
`;

if (
  !((budget >= 80000 && budget <= 100000) ||
  (budget >= 55000 && budget <= 75000) ||
  (budget >= 120000 && budget <= 150000) ||
  (budget >= 160000 && budget <= 201000))
) {
    console.log("No available house");
}
