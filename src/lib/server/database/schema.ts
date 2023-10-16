export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      forms: {
        Row: {
          access_id: string | null
          created_at: string | null
          id: number
          name: string
          user_id: string | null
        }
        Insert: {
          name: string
          user_id?: string | null
        }
        Update: {
          access_id?: string | null
          created_at?: string | null
          id?: number
          name?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "forms_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      suggestions: {
        Row: {
          band: string
          form_id: number
          id: number
          inserted_at: string
          name: string
          title: string
          url: string
        }
        Insert: {
          band: string
          form_id: number
          name: string
          title: string
          url: string
        }
        Update: {
          band?: string
          form_id?: number
          id?: number
          inserted_at?: string
          name?: string
          title?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "suggestions_form_id_fkey"
            columns: ["form_id"]
            referencedRelation: "forms"
            referencedColumns: ["id"]
          }
        ]
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
