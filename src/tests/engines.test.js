import { generateTournamentRecord } from '../generateTournamentRecord';
import { invokeTournamentEngine } from '../invokeTournamentEngine';

test('generatTournamentRecord works with defaults when no parameters provided', () => {
  const result = generateTournamentRecord({});
  expect(result.tournamentRecord).not.toBeUndefined();
  expect(result.drawIds).not.toBeUndefined();
});

test('tournaentEngine throws an error if no method provided', () => {
  let result = invokeTE({});
  expect(result.error).not.toBeUndefined();

  result = invokeTE({ method: 'newTournamentRecord' });
  expect(result.tournamentId).not.toBeUndefined();
});

function invokeTE(params) {
  try {
    const result = invokeTournamentEngine(params);
    return result;
  } catch (error) {
    return { error };
  }
}
