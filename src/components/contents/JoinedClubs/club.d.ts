export interface IClubInfo {
  id: string;
  name: string;
  school: string;
  instagram_id: string;
  clubID: string; // A-Z0-9
  icon: string; // Path or URL (need to config domain in next.config.js)
  description: string; // Markdown Supported
}
