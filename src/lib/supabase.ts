import { createClient } from '@supabase/supabase-js';
import { weddingConfig } from '../wedding.config';

export interface BlessingItem {
  id: string;
  name: string;
  city: string | null;
  message: string;
  created_at?: string;
}

const SUPABASE_URL = weddingConfig.rsvp.supabaseUrl || 'https://lyukxpzpcjedvrkwrcur.supabase.co';
const SUPABASE_KEY = weddingConfig.rsvp.supabaseAnonKey || 'sb_publishable_7USKYo1sBAT7p3_kqWdrqg_RCxNm3yd';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export const GOOGLE_SHEET_WEBHOOK_URL = weddingConfig.rsvp.googleSheetWebhookUrl;

export interface RsvpPayload {
  name: string;
  email: string;
  guest_count: number;
  attending_events: string;
  declined_events: string;
  stambaMuhurta?: 'Yes' | 'No';
  muhurtham?: 'Yes' | 'No';
  reception?: 'Yes' | 'No';
  wedding?: 'Yes' | 'No';
  note: string;
  isUpdate?: boolean;
  originalEmail?: string;
  originalName?: string;
  submissionId?: string;
}

export async function saveRsvpToSupabase(payload: RsvpPayload): Promise<{ success: boolean; error?: string }> {
  try {
    if (payload.isUpdate && (payload.originalEmail || payload.email)) {
      const matchKey = payload.originalEmail || payload.email;
      const { data: existing } = await supabase
        .from('rsvps')
        .select('id')
        .eq('email', matchKey)
        .limit(1);

      if (existing && existing.length > 0) {
        const { error: updateError } = await supabase
          .from('rsvps')
          .update({
            name: payload.name,
            email: payload.email,
            guest_count: payload.guest_count,
            attending_events: payload.attending_events,
            declined_events: payload.declined_events,
            note: payload.note,
          })
          .eq('id', existing[0].id);

        if (!updateError) {
          return { success: true };
        }
      }
    }

    const { error } = await supabase.from('rsvps').insert([{
      name: payload.name,
      email: payload.email,
      guest_count: payload.guest_count,
      attending_events: payload.attending_events,
      declined_events: payload.declined_events,
      note: payload.note,
    }]);

    if (error) {
      console.warn('Supabase RSVP insert error:', error);
      return { success: false, error: error.message };
    }
    return { success: true };
  } catch (err: any) {
    console.warn('Supabase RSVP exception:', err);
    return { success: false, error: err?.message || 'Network error' };
  }
}

export async function saveRsvpToGoogleSheet(payload: RsvpPayload): Promise<void> {
  const webhookUrl = GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) return;

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: payload.isUpdate ? 'update' : 'create',
        isUpdate: !!payload.isUpdate,
        submissionId: payload.submissionId || '',
        originalEmail: payload.originalEmail || payload.email,
        originalName: payload.originalName || payload.name,
        name: payload.name,
        email: payload.email,
        contact: payload.email,
        guest_count: payload.guest_count,
        attending_events: payload.attending_events,
        declined_events: payload.declined_events,
        stambaMuhurta: payload.stambaMuhurta || 'No',
        muhurtham: payload.muhurtham || 'No',
        reception: payload.reception || 'No',
        wedding: payload.muhurtham || 'No',
        note: payload.note || '-',
        timestamp: new Date().toISOString(),
      }),
    });
  } catch (err) {
    console.warn('Google Sheet RSVP sync failed:', err);
  }
}

export async function saveRsvp(payload: RsvpPayload): Promise<{ success: boolean; error?: string }> {
  const [supabaseRes] = await Promise.allSettled([
    saveRsvpToSupabase(payload),
    saveRsvpToGoogleSheet(payload),
  ]);

  if (supabaseRes.status === 'fulfilled' && !supabaseRes.value.success) {
    return { success: false, error: supabaseRes.value.error };
  }
  return { success: true };
}

const FALLBACK_KEY = 'vows_blessings_cache_shashi_mangala';

const defaultSeedBlessings: BlessingItem[] = [
  {
    id: 'seed-1',
    name: 'Ravi & Sunitha',
    city: 'Hanuru',
    message: 'Wishing Shashi and Mangala a blessed married life filled with perpetual joy and harmony!',
    created_at: new Date().toISOString(),
  },
  {
    id: 'seed-2',
    name: 'Jayamma Auntie',
    city: 'Chamarajanagar',
    message: 'May Lord Bettalli Maramma shower immense blessings upon the newlyweds on this auspicious union.',
    created_at: new Date().toISOString(),
  },
  {
    id: 'seed-3',
    name: 'Mahesh Kumar',
    city: 'Bengaluru',
    message: 'Heartiest congratulations to Shashi & Mangala! Can’t wait to join the grand celebrations in Hanuru!',
    created_at: new Date().toISOString(),
  },
];

export async function fetchBlessings(): Promise<BlessingItem[]> {
  try {
    const { data, error } = await supabase
      .from('blessings')
      .select('id, name, city, message, created_at')
      .order('created_at', { ascending: false })
      .limit(60);

    if (error) throw error;
    if (data && data.length > 0) {
      try {
        localStorage.setItem(FALLBACK_KEY, JSON.stringify(data));
      } catch (_) {}
      return data;
    }
  } catch (err) {
    console.warn('Supabase fetch failed, checking local cache:', err);
  }

  try {
    const cached = localStorage.getItem(FALLBACK_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (_) {}

  return defaultSeedBlessings;
}

export async function addBlessing(name: string, city: string | null, message: string): Promise<void> {
  const newBlessing: BlessingItem = {
    id: 'local-' + Date.now(),
    name: name.trim(),
    city: city ? city.trim() : null,
    message: message.trim(),
    created_at: new Date().toISOString(),
  };

  try {
    const { error } = await supabase
      .from('blessings')
      .insert({ name: newBlessing.name, city: newBlessing.city, message: newBlessing.message });
    if (error) throw error;
  } catch (err) {
    console.warn('Supabase insert failed, persisting locally:', err);
  }

  // Always update local cache
  try {
    const cached = localStorage.getItem(FALLBACK_KEY);
    const list: BlessingItem[] = cached ? JSON.parse(cached) : [...defaultSeedBlessings];
    list.unshift(newBlessing);
    localStorage.setItem(FALLBACK_KEY, JSON.stringify(list));
  } catch (_) {}
}

