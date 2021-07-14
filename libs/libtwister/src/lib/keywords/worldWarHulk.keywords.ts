import { HeroClass } from '../enums';

import {
  CROSS_DIMENSIONAL_RAMPAGE,
  OUTWIT,
  SMASH,
  TRANSFORM,
  WOUNDED_FURY,
} from './baseKeywords';
import { IKeyword } from './keyword.interface';

export const Transform: IKeyword = {
  ...TRANSFORM,
  description: `This keyword represents the themes of duality and transformation in Hulk stories.
Heroes:
<ul>
  <li>Each Hero in this set has some special "Transformed" cards that go along with it. When you use these Heroes, don't shuffle their "Transformed" cards into the Hero Deck. Instead, set them aside in a special Transformation Pile. You can't recruit cards from this pile. Instead, you transform other cards into them.</li>
  <li>Some Hero cards like "Bruce Banner: Gamma Ray Experiments" say things like "...Transform this into Savage Hulk Unleashed."</li>
  <li>When you play a Hero card that says it transforms into another card, you complete all effects on the card you played and get its normal Recruit and Attack.</li>
  <li>Then remove the transforming card from the game (putting it in the Transformation Pile) and put the newly transformed card into your hand instead (from the Transformation Pile). You can play the new Transformed card immediately that same turn.</li>
  <li>You still count as having played the transforming card you played and removed from the game, including effects like "You get +1 Attack for each https://cf.geekdo-static.com/mbs/mb_26287_0.png card you played this turn." But if an effect asks you to reveal one of your cards, you can only reveal the new, transformed card, not the old card that you removed from the game.</li>
  <li>Some transforming cards tell you to put the new card on top of your deck or in your discard pile instead.</li>
  <li>You can look through the Transformation Pile at any time.</li>
  <li>At the end of the game, store a Hero's Transformed cards with the rest of that Hero's cards. To start a game, you only need to bring out the Transformed cards for the Heroes you're using. Don't bring out all the Transformed cards in the entire game.</li>
  <li>If you sleeve your cards, you can put the Transformed version of the card in the same sleeve, behind the Transforming card. When it's time to transform, you just pull the back card to the front of the sleeve. It's a little thicker in the sleeve, but it still shuffles well.</li>
</ul>

Masterminds:
Each Mastermind in this set is a double-sided "Transforming Mastermind" that transforms back and forth between two forms during the game.
<ul>
  <li>The side with the "Always Leads" ability starts face up.</li>
  <li>When a Master Strike or Mastermind Tactic ability occurs, it will tell you to "Transform" the Mastermind, meaning flip it over to its other side. (Don't also do the Master Strike ability of the new side.)</li>
  <li>A Mastermind only uses the abilities and Attack of its currently face up side. Ignore the special abilities and values on the currently face down side.</li>
</ul>`,
};

export const Outwit: IKeyword = {
  ...OUTWIT,
  description: `This keyword represents how Bruce Banner, Amadeus Cho, the Illuminati, and the Intelligencia are among the smartest characters in the Marvel universe.
<ul>
  <li>Some Heroes say things like "Outwit: Draw a card."</li>
  <li>You can use this Outwit ability only if you reveal Heroes with 3 different costs.</li>
  <li>You can count the Outwit card itself. So you can reveal a 2-cost Hero in your hand, plus a 6-cost Outwit card and 0-cost S.H.I.E.L.D. Agent Hero you already played.</li>
  <li>Some Villains and Masterminds also say they get stronger or harm you in special ways if you fail to Outwit them. For example: "Ambush: If you can't Outwit the Leader, play the top card of the Villain Deck."</li>
  <li>You can choose not to Outwit, even if you are able.</li>
</ul>`,
};

export const Smash: IKeyword = {
  ...SMASH,
  description: `This keyword represents how when Hulks get angry, they SMASH hard, no matter what they have to toss aside.
<ul><li>Some Heroes say things like "Smash 3." This means "You may discard another card from your hand. If you do, you get +3 Attack."</li></ul>`,
};

export const WoundedFury: IKeyword = {
  ...WOUNDED_FURY,
  description: `This keyword represents how wounding a Hulk often just makes it ANGRIER and STRONGER! It also includes Villains attacking with more furious bloodlust as they wound you.
<ul>
  <li>When a Hero card says "Wounded Fury", it means "You get +1 Attack for each Wound in your discard pile."</li>
  <li>Likewise, when a Villain or Mastermind says "Wounded Fury", it means "It gets +1 Attack for each Wound in your discard pile."</li>
</ul>`,
};

export const CrossDimensionalRampage: IKeyword = {
  ...CROSS_DIMENSIONAL_RAMPAGE,
  description: `As different Hulks rampage across planets and dimensions, only another Hulk can stop them! This keyword debuted in Legendary: Secret Wars.
<ul>
  <li>"Cross-Dimensional Hulk Rampage" means "Each player reveals one of their Hulk Heroes or a Hulk card in their Victory Pile or gains a Wound."</li>
  <li>You can reveal any card that includes the word "Hulk" in its card name, Hero name, Villain Group name, or Tactics for Hulk Masterminds. This includes any Red Hulk, She-Hulk, Red She-Hulk, Skaar, Son of Hulk, Joe Fixit Grey Hulk, Hulkling, Hulk Gang, Cosmic Hulk Robot, Hulkbuster, Enchain the Hulk, and so on.</li>
  <li>You don't need to know the whole history of Marvel comics to judge who counts as a Hulk – just rely on whether the card says Hulk in its name or not. There are only a few, very specific exceptions we have to make to stay true to the characters:
    <ul>
      <li>"Nul, Breaker of Worlds" from Fear Itself and "Maestro" (core set) count as Hulks for this.</li>
      <li>"Weapon X" and "Old Man Logan" count as Wolverines for "Cross-Dimensional Wolverine Rampage" in other sets.</li>
    </ul>
  </li>
  <li>Some Heroes in this set can transform into Hulks, like Bruce Banner and Amadeus Cho. A puny "Bruce Banner" card doesn't say "Hulk" on it, so it can't stop a Hulk Rampage. But revealing the transformed Bruce Banner card named "Savage Hulk Unleashed" works.</li>
  <li>When a Cross-Dimensional Hulk Rampage happens, you can choose to gain the Wound, even if you have a Hulk that you already played or could otherwise reveal. You might want the Wound if you have Wounded Fury cards.</li>
  <li>There are also Cross-Dimensional Void Rampages, etc.</li>
</ul>`,
};
