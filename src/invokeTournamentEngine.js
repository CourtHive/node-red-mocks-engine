import { tournamentEngine } from 'tods-competition-factory';

export function invokeTournamentEngine(props) {
  const { method, params } = props;
  console.log({ props, method, params });
  if (!tournamentEngine[method]) {
    throw new TypeError(`Unknown method: ${method}`);
  } else {
    return tournamentEngine[method](params);
  }
}
