import { IMastermind, IScheme } from '@schemetwister/liblegendizer';

export interface IDefinedItem {
  random: boolean;
  definedItem?: IScheme | IMastermind;
}
