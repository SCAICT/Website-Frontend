import { IGroup } from '../groups/groups';
import { IClubInfo } from '../JoinedClubs/club';

export interface IMember {
  id: string;
  avatar: string;
  name: string;
  nickname: string;
  description: string;
  groups: IGroup[];
  club: IClubInfo;
  club_position?: string[];
}
