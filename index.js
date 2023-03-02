import fs from "fs";
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export function get(name) {
  let service = fs.readFileSync(`${__dirname}/services/${name}.json`, 'utf8');
  return JSON.parse(service);
}

export function list() {
  let services = fs.readdirSync(`${__dirname}/services`);
  return services.map((service) => service.replace('.json', ''));
}