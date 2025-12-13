import { leads, type Lead, type InsertLead } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  createLead(lead: InsertLead): Promise<Lead>;
  getLeadByEmail(email: string): Promise<Lead | undefined>;
}

export class DatabaseStorage implements IStorage {
  async createLead(lead: InsertLead): Promise<Lead> {
    const [newLead] = await db
      .insert(leads)
      .values(lead)
      .returning();
    return newLead;
  }

  async getLeadByEmail(email: string): Promise<Lead | undefined> {
    const [lead] = await db
      .select()
      .from(leads)
      .where(eq(leads.email, email));
    return lead || undefined;
  }
}

export const storage = new DatabaseStorage();
