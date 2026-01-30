
import React from 'react';
import { Amenity, GalleryImage, FloorPlan } from './types';

/** Upload your logo to /images/logo.png in CloudPanel */
export const SITE_LOGO_URL = '/images/logo.png';

/** Upload your hero banner to /images/Banner.JPG in public folder */
export const BANNER_IMAGE_URL = '/images/Banner.JPG';

/** Upload gallery images to /images/gallery/ (g1.jpg, g2.jpg, ...) in CloudPanel */
export const GALLERY_IMAGE_BASE = '/images/gallery';

/** Upload floor plan images to /images/floorplans/ (f1.jpg, f2.jpg, f3.jpg) in CloudPanel */
export const FLOORPLAN_IMAGE_BASE = '/images/floorplans';

export const AMENITIES: Amenity[] = [
  {
    id: '1',
    title: 'Infinity Pool',
    description: 'Breathtaking rooftop pool with temperature control and panoramic city views.',
    icon: '🌊'
  },
  {
    id: '2',
    title: 'Zen Garden',
    description: 'A meticulously landscaped space for meditation and relaxation.',
    icon: '🧘'
  },
  {
    id: '3',
    title: 'Private Theatre',
    description: 'A 24-seater Dolby Atmos equipped private screening room.',
    icon: '🎬'
  },
  {
    id: '4',
    title: 'Elite Gym',
    description: 'State-of-the-art fitness center with personal training services.',
    icon: '🏋️'
  },
  {
    id: '5',
    title: 'Cigar Lounge',
    description: 'An exclusive sanctuary for business meetings and casual conversations.',
    icon: '🚬'
  },
  {
    id: '6',
    title: 'Smart Homes',
    description: 'Fully automated living spaces with voice-controlled lighting and climate.',
    icon: '📱'
  }
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
  { category: 'Structure', details: 'R.C.C. framed structure with earthquake resistance as per Seismic Zone II.' },
  { category: 'Flooring', details: 'Imported Italian Marble in Living, Dining, and Foyer. Engineered wooden flooring in Master Bedrooms.' },
  { category: 'Doors', details: '8-feet high Teak wood main door with smart biometric security lock.' },
  { category: 'Windows', details: 'Sound-proof UPVC windows with performance glass and motorized blinds.' },
  { category: 'Kitchen', details: 'Customized modular kitchen with quartz countertop and built-in appliances from Miele.' },
  { category: 'Bathroom', details: 'Designer bathrooms with sanitary ware from Kohler and CP fittings from Gessi.' }
];

export const LOCATION_POINTS = [
  { title: 'Airport', distance: '15 Mins' },
  { title: 'Financial District', distance: '10 Mins' },
  { title: 'Global Mall', distance: '5 Mins' },
  { title: 'Prestige School', distance: '8 Mins' },
  { title: 'Metro Station', distance: '2 Mins' }
];
