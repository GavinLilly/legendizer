import { IGameSet } from '../gamesets';
import { IKeyword } from '../keywords/keyword.interface';

import { CardType } from './cardType.enum';

export interface ICard {
  id: string;
  name: string;
  gameSet: IGameSet;
  cardType: CardType;
  keywords?: IKeyword[];
}
