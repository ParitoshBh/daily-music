export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
  public: {
    Tables: {
      suggestions: {
        Row: {
          id: number
          user_id: string
          name: string
          band: string
          title: string
          url: string
          inserted_at: string
        }
        Insert: {
          id?: number
          user_id: string
          name: string
          band: string
          title: string
          url: string
          inserted_at?: string
        }
        Update: {
          id?: number
          user_id?: string
          name?: string
          band?: string
          title?: string
          url?: string
          inserted_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}