import fs from "fs";
import process from "process"
import { Validator } from "jsonschema";

const schema = JSON.parse(fs.readFileSync("schema.json", "utf8"));
const v = new Validator();

let all_valid = true;

try {
  const files = fs.readdirSync("services");
  for (const file of files) {
    let data = fs.readFileSync(`services/${file}`, "utf8");

    try {
      data = JSON.parse(data);
    } catch (err) {
      console.log("❌ Invalid JSON in:", file);
      all_valid = false;
      continue;
    }

    let result = v.validate(data, schema);
    if (result.valid) {
      console.log("💚 Valid:", file);
    } else {
      console.log("❌ Errors in:", file);
      console.log(result.errors);
      all_valid = false;
    }
  }
} catch (err) {
  console.error(err);
  process.exit(1);
}

process.exit(all_valid ? 0 : 1);
