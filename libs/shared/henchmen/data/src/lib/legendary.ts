import { Henchmen } from '@legendizer/shared/henchmen/types';
import { gameSets } from '@legendizer/shared/gameSet/data';

const legGameSet = gameSets.find(
  (record) => record.id === 'aa4eb824-5316-4f0d-bca7-a072b58dee5d'
);

export const henchmen: Henchmen[] = [
  {
    id: '33ce6029-f4e6-4330-8061-122a6bc21bab',
    name: 'Doombot Legion',
    fight:
      'Look at the top two cards of your deck. KO one of them and put the other back.',
    attackPoints: 3,
    victoryPoints: 1,
    gameSet: legGameSet
  },
  {
    id: 'd3fbf71a-392d-48d7-98ce-da9fe4540821',
    name: 'Hand Ninjas',
    fight: 'You get +1 Recruit.',
    attackPoints: 3,
    victoryPoints: 1,
    gameSet: legGameSet
  },
  {
    id: '2c1a00cc-d1f4-4dc3-a3cf-aab5af0c1cf5',
    name: 'Savage Land Mutates',
    fight:
      'When you draw a new hand of cards at the end of this turn, draw an extra card.',
    attackPoints: 3,
    victoryPoints: 1,
    gameSet: legGameSet
  },
  {
    id: 'a1ec1be1-913a-4047-81d3-2d23e6bededa',
    name: 'Sentinels',
    fight: 'KO one of your Heroes.',
    attackPoints: 3,
    victoryPoints: 1,
    gameSet: legGameSet
  },
]