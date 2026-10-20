function awsZones(app, zones) {
  let arr = zones.split(",");

  for (const element of arr) {
    console.log(`Deploying ${app} to ${element}`);
  }
}

let app = "etsy";
let zones = "us-east-1,us-west-2,us-west-1";

awsZones(app, zones);