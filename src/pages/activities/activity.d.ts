import { IMember } from '@/components/contents/Members/members';

export interface IActivity {
  id: string;
  date: {
    start: string;
    end: string;
  };
  name: string;
  description: string;
  thumbnail: string;
  principal: Array<IMember>;
}
