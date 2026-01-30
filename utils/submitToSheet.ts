import { FORM_SUBMIT_URL } from '../constants';

export type FormSource = 'contact' | 'popup' | 'brochure';

export async function submitToSheet(data: {
  name: string;
  email: string;
  phone: string;
  units: string;
  source: FormSource;
}): Promise<boolean> {
  if (!FORM_SUBMIT_URL) {
    console.warn('FORM_SUBMIT_URL not set – add your Google Apps Script web app URL in constants.tsx');
    return true; // allow form to show success in dev
  }
  try {
    const body = new URLSearchParams({
      name: data.name,
      email: data.email,
      phone: data.phone,
      units: data.units,
      source: data.source,
    }).toString();
    await fetch(FORM_SUBMIT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });
    return true;
  } catch {
    return false;
  }
}
