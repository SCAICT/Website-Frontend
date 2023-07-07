export interface IClubInfo {
  name: string;
  school: string;
  insID: string;
  clubID: string; // A-Z0-9
  icon: string; // Path or URL (need to config domain in next.config.js)
  introduction: string; // Markdown Supported
}
