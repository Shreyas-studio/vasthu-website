
export interface Amenity {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  category: 'Exterior' | 'Interior' | 'Amenities';
  title: string;
}

export interface FloorPlan {
  id: string;
  type: string;
  area: string;
  price: string;
  image: string;
}
