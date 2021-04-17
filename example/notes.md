# Installation

```shell
mkdir node-red
cd node-red
npm init (to create a package.json file)
npm install --save node-red
```

## add start script to `package.json`

```json
{
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node node_modules/node-red/red.js -v -u ."
}
```

For persistence I use pm2 to run the local copy. A typical pm2 process file would look like this:

## example pm2 process file

**_nodered_pm2.yaml_**

```yml
apps:
  - name: myNodeREDapp
    script: ./node_modules/node-red/red.js
    args: ['-v', '-u', '.']
```

```shell
pm2 start nodered_pm2.yaml
```

## Notes

Possible to hardcode the name of the flow file in settings.js as it makes it more portable and is not dependant on the hostname.
