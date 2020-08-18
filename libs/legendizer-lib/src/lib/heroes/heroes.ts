import { IHero } from './hero.interface';
import { Legendary } from './legendary.heroes';
import { DarkCity } from "./darkCity.heroes";
import { CardSet } from '../cardSet';
import { HeroesOfAsgard } from './heroesOfAsgard.heroes';
import { GuardiansOfTheGalaxy } from './guardiansOfTheGalaxy.heroes';

export class Heroes extends CardSet<IHero> {
  public static readonly LEGENDARY = Legendary;
  public static readonly DARK_CITY = DarkCity;
  public static readonly HEROES_OF_ASGARD = HeroesOfAsgard
  public static readonly GUARDIANS_OF_THE_GALAXY = GuardiansOfTheGalaxy

  public static readonly ALL = [
    ...Object.values(Heroes.LEGENDARY),
    ...Object.values(Heroes.DARK_CITY),
    ...Object.values(Heroes.HEROES_OF_ASGARD),
    ...Object.values(Heroes.GUARDIANS_OF_THE_GALAXY)
  ]
}