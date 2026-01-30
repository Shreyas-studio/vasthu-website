
import React from 'react';
import { GalleryImage, FloorPlan } from './types';

/** Upload your logo to /images/logo.png in CloudPanel */
export const SITE_LOGO_URL = '/images/logo.png';

/** Footer logo (SNN RAJ CORP). Place in public/images/ */
export const FOOTER_LOGO_URL = '/images/snn-raj-corp-logo.png';

/** Upload your hero banner to /images/Banner.JPG in public folder */
export const BANNER_IMAGE_URL = '/images/Banner.JPG';

/** Upload gallery images to /images/gallery/ (g1.jpg, g2.jpg, ...) in CloudPanel */
export const GALLERY_IMAGE_BASE = '/images/gallery';

/** Upload floor plan images to /images/floorplans/ (f1.jpg, f2.jpg, f3.jpg) in CloudPanel */
export const FLOORPLAN_IMAGE_BASE = '/images/floorplans';

/** Image for Why Aurelia / Highlights section (two-column layout). Place in public/images/ */
export const WHY_SECTION_IMAGE_URL = '/images/why-section.jpg';

/**
 * Google Sheets form submission URL.
 * Set up: Google Sheet → Extensions → Apps Script → deploy as Web app (doPost).
 * Script appends: timestamp, name, email, phone, units, source.
 */
export const FORM_SUBMIT_URL = ''; // e.g. 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'

export const UNIT_OPTIONS = ['3 BHK', '4 BHK', '5 BHK'] as const;

/** Club Oasis amenities – icon, category and description for Amenities section */
export const AMENITIES_LIST: { icon: string; category: string; description: string }[] = [
  {
    icon: '🧘',
    category: 'Wellness',
    description: 'PRANA – The Spa Retreat featuring massage facilities, steam, sauna, and jacuzzi.',
  },
  {
    icon: '🌊',
    category: 'The Lagoon',
    description: 'A temperature-controlled swimming pool offering serene water views.',
  },
  {
    icon: '🥃',
    category: 'Social Life',
    description: 'The Oak & Ember cigar lounge and The Scoops—an architecturally recessed enclave overlooking the lake for collaboration and conversation.',
  },
  {
    icon: '🎬',
    category: 'Entertainment',
    description: 'Private Mini Theatre and a dedicated Indoor Games zone including "The Queen\'s Den" and "The Game Lounge".',
  },
  {
    icon: '🎾',
    category: 'Active Living',
    description: 'The Arena, featuring outdoor cricket, tennis, and basketball courts.',
  },
  {
    icon: '🏛️',
    category: 'Club House',
    description: 'Club Oasis is a sanctuary curated for leisure, wellness, and quiet indulgence.',
  },
];

export const GALLERY: GalleryImage[] = [
  { id: 'g1', title: 'Grand Lobby', category: 'Interior', url: `${GALLERY_IMAGE_BASE}/g1.jpg` },
  { id: 'g2', title: 'Sky Deck', category: 'Exterior', url: `${GALLERY_IMAGE_BASE}/g2.jpg` },
  { id: 'g3', title: 'Master Bedroom', category: 'Interior', url: `${GALLERY_IMAGE_BASE}/g3.jpg` },
  { id: 'g4', title: 'Façade at Sunset', category: 'Exterior', url: `${GALLERY_IMAGE_BASE}/g4.jpg` },
  { id: 'g5', title: 'Dining Experience', category: 'Interior', url: `${GALLERY_IMAGE_BASE}/g5.jpg` },
  { id: 'g6', title: 'Spa & Wellness', category: 'Amenities', url: `${GALLERY_IMAGE_BASE}/g6.jpg` },
];

export const FLOOR_PLANS: FloorPlan[] = [
  { id: 'f1', type: '3 BHK Grande', area: '2,450 sq. ft.', price: 'Starts from $2.4M', image: `${FLOORPLAN_IMAGE_BASE}/f1.jpg` },
  { id: 'f2', type: '4 BHK Royale', area: '3,800 sq. ft.', price: 'Starts from $3.8M', image: `${FLOORPLAN_IMAGE_BASE}/f2.jpg` },
  { id: 'f3', type: 'Penthouse', area: '6,200 sq. ft.', price: 'Starts from $7.5M', image: `${FLOORPLAN_IMAGE_BASE}/f3.jpg` },
];

export const SPECIFICATIONS = [
  { category: 'Elegant Finishes', details: 'Imported Marble flooring in living and dining areas; Wooden Flooring in the Master Bedroom.' },
  { category: 'Smart Living', details: 'Secure digital locks with biometric access and color display video door phones in every apartment.' },
  { category: 'Advanced Design', details: 'Acoustic EPDM seals for enhanced sound insulation and performance glass for superior heat insulation.' },
  { category: 'Superior Height', details: 'All doors and windows are upgraded to a height of 2.3m for enhanced ventilation and light.' },
];

/** Location section – category and detail for each point */
export const LOCATION_POINTS: { title: string; detail: string }[] = [
  { title: 'Metro Connectivity', detail: 'Only 2 kms from the Metro station.' },
  { title: 'Major Hubs', detail: '7 minutes from Bannerghatta Main Road and 10 minutes from Silk Board.' },
  { title: 'Education', detail: '5 minutes from IIM Bangalore and Presidency School; near Vibgyor and Ekya Schools.' },
  { title: 'Healthcare', detail: '7 minutes from Fortis and Apollo Hospitals.' },
  { title: 'Leisure', detail: '8 minutes from Vega City Mall and 10 minutes from Meenakshi Mall.' },
];
