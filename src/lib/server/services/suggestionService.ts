import { supabase } from "../database/connection";

export async function getSuggestionsByForm(formId: number) {
    const yesterdayMidnight: Date = new Date();
    yesterdayMidnight.setDate(yesterdayMidnight.getDate() - 1);
    yesterdayMidnight.setHours(0, 0, 0, 0);

    const { data, error } = await supabase.from('suggestions')
        .select()
        .gte('inserted_at', yesterdayMidnight.toISOString())
        .eq('form_id', formId);
    if (error) {
        console.log(error);
        throw new Error(error.message);
    }
    return data;
}