[![npm version](https://badge.fury.io/js/%40lexitgroup%2Fcordova-plugin-lexit-btprint.svg)](https://badge.fury.io/js/%40lexitgroup%2Fcordova-plugin-lexit-btprint)

# cordova-plugin-lexit-btprint

Print to Zebra QLn220 over bluetooth

# Usage

```
lexit.btprint.print("00:11:22:33:FF:EE", printData, callback, permissionError);

function callback()
{
    console.log(JSON.stringify(arguments));
}

function permissionError()
{
    console.log("no permission");
}
```
