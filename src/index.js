import {
  GENERATE_TOURNAMENT_RECORD,
  INVOKE_TOURNAMENT_ENGINE,
  MOCKS_ENGINE,
  TOURNAMENT_ENGINE,
} from './constants';
import { messageHandler } from './messageHandler';

module.exports = function (RED) {
  function MocksEngine(props) {
    RED.nodes.createNode(this, props);
    this.on('input', function (msg) {
      msg.payload = messageHandler({
        engine: MOCKS_ENGINE,
        payload: msg.payload,
      });
      this.send(msg);
    });
  }
  RED.nodes.registerType('mocks-engine', MocksEngine);

  function TournamentEngine(props) {
    RED.nodes.createNode(this, props);
    this.on('input', function (msg) {
      msg.payload = messageHandler({
        engine: TOURNAMENT_ENGINE,
        payload: {
          method: INVOKE_TOURNAMENT_ENGINE,
          params: msg.payload,
        },
      });
      this.send(msg);
    });
  }
  RED.nodes.registerType('tournament-engine', TournamentEngine);

  function TournamentProfile(props) {
    RED.nodes.createNode(this, props);
    this.on('input', function (msg) {
      msg.payload = {
        method: GENERATE_TOURNAMENT_RECORD,
        params: {
          startDate: props.startDate,
          endDate: props.endDate,
          eventType: props.eventType,
          drawType: props.drawType,
          drawSize: parseInt(props.drawSize || 0),
          groupSize: parseInt(props.groupSize || 0),
        },
      };
      this.send(msg);
    });
  }
  RED.nodes.registerType('mock-tournament-attributes', TournamentProfile);
};
