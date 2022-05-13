# adalo-better-webview

## Status - 2022-05-13
- Working

## Known Bugs
- Currently does not receive confirmation page message from calendly, which contains event UUID.

# Goal
A webview for adalo that can read the current site url (native only) and can take actions based on that url.

## Usage
To create url-based actions, create and action and set it to fire `sometimes`, when webview > `url` `equals / contains / does not contain` `{URL or URL snippet to compare against}`
