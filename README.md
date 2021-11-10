# node-red-competition-factory

Node-red components to facilitate use of [tods-competition-factory](https://courthive.github.io/tods-competition-factory/).

```js
cd example
npm i
npm run start
```

- Select 'Import' from the hamburger menu in the upper right corner.
- Select the 'Examples' tab of the dialog
- Expand `node-red-competition-factory`
- Select 'factoryEngines'

The example uses the `mocksEngine` to generate a TODS tournamentRecord and then passes the data along with a `getTournamentParticipants` method call to the `tournamentEngine`.

The result is output to the Node-red debug pane.
