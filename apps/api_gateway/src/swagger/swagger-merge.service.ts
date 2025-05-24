import axios from "axios";
import { services } from "./swagger.config";

export async function getMergedSwaggerApis() {
  const merged: any = {
    openapi: "3.0.0",
    info: {
      title: "E-commerce api docs",
      version: "1.0.0",
    },
    paths: {},
    components: {
      schemas: {},
    },
  };

  for (const service of services) {
    const res = await axios.get(service.url);
    const doc = res.data;

    Object.assign(merged.paths, doc.paths);
    Object.assign(merged.components.schemas, doc.components?.schemas || {});
  }

  return merged;
}
