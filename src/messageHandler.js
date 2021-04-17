import { generateTournamentRecord } from './generateTournamentRecord';
import { invokeTournamentEngine } from './invokeTournamentEngine';

import {
  GENERATE_TOURNAMENT_RECORD,
  MOCKS_ENGINE,
  TOURNAMENT_ENGINE,
  INVOKE_TOURNAMENT_ENGINE,
} from './constants';

export function messageHandler({ engine, payload }) {
  const { method, params } = payload;
  const handler = {
    [MOCKS_ENGINE]: {
      [GENERATE_TOURNAMENT_RECORD]: (payload) =>
        generateTournamentRecord(payload),
    },
    [TOURNAMENT_ENGINE]: {
      [INVOKE_TOURNAMENT_ENGINE]: (payload) => invokeTournamentEngine(payload),
    },
  };
  if (engine && method && handler[engine] && handler[engine][method]) {
    return handler[engine][method](params);
  } else {
    if (!engine || !handler[engine]) {
      throw new TypeError(`Unknown engine: ${engine}`);
    } else if (!method || !handler[engine][method]) {
      throw new TypeError(`Unknown method: ${method}`);
    }
  }
}
