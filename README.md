A directory of status pages for various companies, the aim is to be able to pulled into other tools and services.

Current format is defined in `schema.json`.

Many companies re-use existing tooling for their services so for example, GitHub uses Atlassian for their status page. So it's easy enough to say:

```
{
    "name": "GitHub",
    "web": "https://www.githubstatus.com/",
    "host": "atlassian"
}
```

Then we can infer where the JSON, RSS or whatever is for GitHub. That's the `host` definition ☝️

Some companies have built their own, or use a system that doesn't (yet) seem to have any easy way to get from the status page to a consumable data format. In this case we define and extra `status` field, for example:

```
{
    "name": "docker",
    "web": "https://status.docker.com/",
    "host": "status.io",
    "status": {
        "content": "json",
        "url": "https://status.docker.com/1.0/status/533c6539221ae15e3f000031"
    }
}
```

Please add in more if this is useful, more detailed instructions on this will come.

## Installation

This data is useful standalone, but can also be used as a JavaScript library.

```bash
npm install service-status-data
```

And then to use:

```js
import { get, list } from "service-status-data";
get('github') // Returns the data as a JSON object for GitHub.
list() // Returns a list of services. Each string can be passed to the `get` command.
```