import { genererNombreAleatoire } from '../genererNombreAleatoire.js';

export function genererStats({ race }) {
  return {
    'Force': (genererNombreAleatoire(6, 12) + race.Force),
    'Intelligence': (genererNombreAleatoire(6, 12) + race.Intelligence),
    'Dexterite': (genererNombreAleatoire(6, 12) + race.Dexterite),
    'Charisme': (genererNombreAleatoire(6, 12) + race.Charisme),
    'Endurance': (genererNombreAleatoire(6, 12) + race.Endurance)
  };
}
