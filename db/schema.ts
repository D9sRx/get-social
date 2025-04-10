import { pgTable,varchar,uuid,timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: uuid("id").primaryKey().defaultRandom(),
    email: varchar("email",{length: 255}).notNull().unique(),
    password: varchar("password",{length: 255}).notNull(),
    createdAt: timestamp("createdAt").notNull().defaultNow(),
});