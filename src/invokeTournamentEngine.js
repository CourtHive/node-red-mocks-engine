import { tournamentEngine } from 'tods-competition-factory';

export function invokeTournamentEngine(props) {
  const { method, params, tournamentRecord } = props;
  if (!tournamentEngine[method]) {
    throw new TypeError(`Unknown method: ${method}`);
  } else {
    return tournamentEngine.setState(tournamentRecord)[method](params);
  }
}
