import { createClient } from "@supabase/supabase-js";
import config from 'config';
import type { Database } from "./schema";
import type { DatabaseConfig } from "../../../types/config";

const dbConfig = config.get<DatabaseConfig>('database');

export const supabase = createClient<Database>(dbConfig.supabaseUrl, dbConfig.supabaseKey);