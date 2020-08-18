import { GameSetup } from './gameSetup';
import { IGameSetup } from './gameSetup.interface';
import { GameSets, IGameSet } from '../gamesets';

function testBigBox(gameSet: IGameSet) {
  const setup: GameSetup = new GameSetup(gameSet);
  const game:IGameSetup = setup.generateGame(2);
  describe(`Test ${gameSet.name} setup`, () => {
    it(`should only contain ${gameSet.name} cards`, () => {
      expect(game.scheme.gameSet).toBe(gameSet);
      expect(game.mastermind.gameSet).toBe(gameSet);
      expect(game.heroDeck.heroes.every((item) => item.gameSet === gameSet)).toBeTruthy();
      expect(game.villainDeck.henchmen.every((item) => item.gameSet === gameSet)).toBeTruthy();
      expect(game.villainDeck.villains.every((item) => item.gameSet === gameSet)).toBeTruthy();
      if (game.villainDeck.hero !== undefined)
        expect(game.villainDeck.hero.gameSet).toBe(gameSet);
    })
  })
}

describe('Class creation', () => {
  it('should create with all Gamesets', () => {
    expect(new GameSetup(...GameSets.ALL)).toBeTruthy();
  });

  it('should fail with no Gameset', () => {
    expect(() => {
      const gameSetup = new GameSetup(undefined);
    }).toThrow(Error);
  });

  it('should fail with an empty Gameset', () => {
    expect(() => {
      const gameSetup = new GameSetup(...[]);
    }).toThrow(Error);
  });

  it('should fail without a big box game set', () => {
    expect(() => {
      const gameSetup = new GameSetup(...GameSets.ALL.filter((item) => !item.essential));
    }).toThrow(Error)
  })
});

describe('Game creation', () => {
  const setup: GameSetup = new GameSetup(...GameSets.ALL);

  it('should fail if number of players is undefined', () => {
    expect(() => {
      const game: IGameSetup = setup.generateGame(undefined);
    }).toThrow(Error);
  })

  const game: IGameSetup = setup.generateGame(2);

  it('should have a scheme', () => expect(game.scheme).toBeTruthy());
  it('should have a mastermind', () => expect(game.mastermind).toBeTruthy());
  it('should have some heroes', () =>
    expect(game.heroDeck.heroes.length).toBeGreaterThan(0));
  it('should have some villains', () =>
    expect(game.villainDeck.villains.length).toBeGreaterThan(0));
  it('should have some henchmen', () =>
    expect(game.villainDeck.henchmen.length).toBeGreaterThan(0));
  it('should have 2 players', () => expect(game.numPlayers).toEqual(2))
});

GameSets.ALL.forEach(element => {
  if (element.essential)
    testBigBox(element)
});