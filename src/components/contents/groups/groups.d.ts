import { IMember } from '../Members/members';

export interface IGroup {
  id: string;
  name: string;
  description: string;
  members?: Array<IMember>;
}
