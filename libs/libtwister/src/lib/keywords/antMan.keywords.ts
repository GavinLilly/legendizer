import { HeroClass } from '../heroes';
import {
  CHIVALROUS_DUEL,
  EMPOWERED,
  MICROSCOPIC_SIZE_CHANGING,
  SIZE_CHANGING,
} from './baseKeywords';
import { IKeyword } from './keyword.interface';

export const SizeChanging: IKeyword = {
  ...SIZE_CHANGING,
  description: `This keyword represents Heroes and Villains using superpowers to shrink, grow, or massively change their size. It's also used by characters that can change the size of a weapon, technology, or energy. It first debuted in Legendary Civil War and also appeared in Legendary Champions.

- Some Hero cards say things like "Size-Changing ${HeroClass.COVERT}." This means "You can recruit this card for 2 Recruit less if you played any ${HeroClass.COVERT} cards this turn."
- Likewise, some Villain cards say things like "Size-Changing ${HeroClass.TECH}." This means "You can fight this Villain for 2 Attack less if you played any ${HeroClass.TECH} cards this turn."
- Note: For a typical Size-Changing card, it doesn't matter how many Heroes of that Hero Class you played – it only matters if you played any Heroes of that Hero Class or not.
- After you've recruited a card, Size-Changing doesn't do anything else on that card.`,
};

export const MicroscopicSizeChanging: IKeyword = {
  ...MICROSCOPIC_SIZE_CHANGING,
  description: `Far beyond other Heroes that can stretch or grow, Ant-Man and Wasp can change their size to a whole new scale. They can shrink down smaller than an atom, to the quantum Microverse. Here, the very laws of physics can be broken and even reversed! This ability works like regular Size- Changing, but with a couple of twists.

- Some Heroes and Villains in this set say things like "Microscopic Size-Changing ${HeroClass.TECH} ${HeroClass.TECH} ${HeroClass.TECH}."
- This means "You can recruit this card for 2 Recruit less for each ${HeroClass.TECH} card you played this turn, counting up to three ${HeroClass.TECH} cards."
- So if you played one ${HeroClass.TECH} Hero this turn, this card costs 2 less. If you played two ${HeroClass.TECH} Heroes, it costs 4 less. If you played three or more ${HeroClass.TECH} Heroes, it costs 6 less.
- Playing a fourth ${HeroClass.TECH} card wouldn’t reduce this cost any further since there are only three ${HeroClass.TECH} icons listed in this particular Microscopic Size- Changing ability.
- The second twist is that Microscopic Size- Changing can actually reduce a card’s Recruit cost to zero or even a negative number! When you recruit a Microscopic Size-Changing Hero with a negative cost, you actually gain that many Recruit points!
- Some Villains also have Microscopic Size- Changing. It works the same way, letting you fight that Villain for 2 Attack less for each card of the correct color you played this turn, counting up to the number of icons shown in the Microscopic Size-Changing ability.
- Likewise, if you fight a Villain with Microscopic Size-Changing and reduce its Attack value to a negative number, you actually gain that many Attack points when you fight it. You don’t even need to have any Attack points before you fight them.
- For example, say you play five ${HeroClass.COVERT} Heroes, then fight a Villain with 3 Attack and "Microscopic Size-Changing ${HeroClass.COVERT} ${HeroClass.COVERT} ${HeroClass.COVERT} ${HeroClass.COVERT}." The Villain's Attack decreases to -5, and you actually gain 5 Attack when you fight them! (The 5th ${HeroClass.COVERT} Hero you played didn’t reduce the Attack, since the Microscopic Size- Changing ability only had 4 icons.)
- Building the right deck and shrinking down to the crazy backwards physics of the Microverse can create some very powerful turns!`,
};

export const Empowered: IKeyword = {
  ...EMPOWERED,
  description: `This keyword represents Heroes and Villains who draw power from ambient energy, technology, or superpowers around them.

- Some Heroes say things like "You get Empowered by ${HeroClass.STRENGTH}." This means "You get +1 Attack for each ${HeroClass.STRENGTH} card in the HQ."
- Likewise, some Villains and Masterminds say things like "Empowered by ${HeroClass.TECH}". This means "This gets +1 Attack for each ${HeroClass.TECH} card in the HQ."
- As cards enter and leave the HQ, an Empowered card can get stronger or weaker. You only check the Attack bonus at the moment you play your Empowered Hero or at the moment you fight the Empowered enemy.
- One clever move is to recruit a Hero from the HQ at the right time, changing the colors in the HQ to weaken an Empowered enemy or try to strengthen an Empowered Hero in your hand.
- Some cards are even "Double Empowered" or "Triple Empowered" meaning that they get +2 Attack or +3 Attack for each appropriate card in the HQ.
- (A multicolored or divided card from other sets counts if either half is the correct color. For example, an "Empowered by ${HeroClass.RANGED} and ${HeroClass.STRENGTH}" ability can get +1 Attack from a ${HeroClass.COVERT} ${HeroClass.RANGED} card or from a ${HeroClass.INSTINCT} ${HeroClass.STRENGTH} card. However, a "${HeroClass.RANGED} ${HeroClass.STRENGTH}" card in the HQ would only give +1 Attack, not +2 Attack.)`,
};

export const ChivalrousDuel: IKeyword = {
  ...CHIVALROUS_DUEL,
  description: `This keyword represents how Morgan le Fay and the knights of her "Queen's Vengeance" hail from a realm of honorable single combat. You can't gang up on an enemy in a Chivalrous Duel – you have to pick just one Hero Name to duel the enemy.

- To fight an enemy with "Chivalrous Duel," you can only use Attack from a single Hero Name.
- For example, to fight a 3 Attack Villain with Chivalrous Duel, you can spend 3 Attack from two different Black Knight hero cards. But you can't combine 2 Attack from Black Knight cards and 1 Attack from a Wasp card.
- If a Hero like "S.H.I.E.L.D. Trooper" doesn't have a Hero Name listed, then its Hero Name is the same as its card name. So you can play three S.H.I.E.L.D. Troopers then fight a 3 Attack Villain with Chivalrous Duel. But you can't spend 2 Attack from Black Knight cards and 1 Attack from a S.H.I.E.L.D. Trooper to fight an enemy with Chivalrous Duel.
- (You can't use Attack you get from anything that's not a Hero card, including Microscopic Size-Changing Villains, Mastermind Tactics, Shard tokens from other sets, etc. You can use Attack from Hero Artifacts in other sets with the right Hero Name, since those are Hero cards.)
- In a setup with lots of Chivalrous Duels, like fighting Morgan le Fay or the Scheme "Pull Earth into Medieval Times," you will want to build your deck to concentrate your Attack cards into just one or two Hero Names!`,
};
