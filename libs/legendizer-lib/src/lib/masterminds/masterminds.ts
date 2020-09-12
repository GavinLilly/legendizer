import { CardSet } from '../cardSet';
import { AntMan } from './antMan.masterminds';
import { DarkCity } from './darkCity.masterminds';
import { FantasticFour } from './fantasticFour.masterminds';
import { GuardiansOfTheGalaxy } from './guardiansOfTheGalaxy.masterminds';
import { HeroesOfAsgard } from "./heroesOfAsgard.masterminds";
import { Legendary } from './legendary.masterminds';
import { IMastermind } from './mastermind.interface';
import { PaintTheTownRed } from "./paintTheTown.masterminds";
import { X_Men } from "./xMen.masterminds";

export class Masterminds extends CardSet<IMastermind> {
  public static readonly LEGENDARY = Legendary;
  public static readonly DARK_CITY = DarkCity;
  public static readonly HEROES_OF_ASGARD = HeroesOfAsgard;
  public static readonly GUARDIANS_OF_THE_GALAXY = GuardiansOfTheGalaxy;
  public static readonly ANT_MAN = AntMan;
  public static readonly FANTASTIC_FOUR = FantasticFour;
  public static readonly PAINT_THE_TOWN_RED = PaintTheTownRed;
  public static readonly X_MEN = X_Men

  public static readonly ALL = [
    ...Object.values(Masterminds.LEGENDARY),
    ...Object.values(Masterminds.DARK_CITY),
    ...Object.values(Masterminds.HEROES_OF_ASGARD),
    ...Object.values(Masterminds.GUARDIANS_OF_THE_GALAXY),
    ...Object.values(Masterminds.ANT_MAN),
    ...Object.values(Masterminds.FANTASTIC_FOUR),
    ...Object.values(Masterminds.PAINT_THE_TOWN_RED),
    ...Object.values(Masterminds.X_MEN)
  ];
}
