import {drizzle} from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const clent = postgres(process.env.DATABASE_URL!);
export const db = drizzle(clent, {schema});