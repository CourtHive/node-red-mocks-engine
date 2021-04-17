import {
  mocksEngine,
  //   matchUpTypes,
  //   drawDefinitionConstants,
} from 'tods-competition-factory';

// const { generatedDrawTypes } = drawDefinitionConstants;
// const eventTypes = Object.keys(matchUpTypes);

export function generateTournamentRecord({
  eventType,
  drawType,
  drawSize,
  groupSize,
  startDate,
  endDate,
}) {
  if (drawSize && !Number.isInteger(parseInt(drawSize)))
    throw new TypeError('Draw size must be an integer');
  if (!Number.isInteger(parseInt(groupSize || 0)))
    throw new Error('Group size must be an integer');

  return mocksEngine.generateTournamentRecord({
    startDate: startDate && new Date(startDate).toISOString(),
    endDate: endDate && new Date(endDate).toISOString(),
    completeAllMatchUps: true,
    drawProfiles: [
      {
        eventType,
        drawType,
        drawSize,
        structureOptions: { groupSize },
      },
    ],
  });
}
