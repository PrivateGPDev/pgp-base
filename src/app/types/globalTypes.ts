export interface GlobalFavicon {
    id: number;
    url: string;
    width: number;
    height: number;
    alt_text: string;
    global_id: number;
    created_at: string;
}
  
export interface GlobalLogo {
    id: number;
    url: string;
    width: number;
    height: number;
    alt_text: string;
    global_id: number;
    created_at: string;
}
  
export interface GlobalData {
    id: number;
    created_at: string;
    site_description: string;
    site_name: string;
    location_one: string;
    location_two: string;
    location_three: string;
    location_four: string;
    email_one: string;
    email_two: string;
    phone_one: string;
    phone_two: string;
    open_hours_one: string;
    open_hours_two: string;
    open_hours_3: string;
    external_booking_url: string;
    instagram_url: string;
    facebook_url: string;
    x_url: string;
    linkedin_url: string;
    youtube_url: string;
    tiktok_url: string;
    googlemap_apikey: string;
    global_favicon: GlobalFavicon[];
    global_logo: GlobalLogo[];
}