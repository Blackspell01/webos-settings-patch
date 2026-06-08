# webos-settings-patch

Patches the LG webOS SSAP settings whitelist to allow reading and writing all picture settings keys (pictureMode, peakBrightness, eyeComfortMode, etc.) via the second screen API.

## What it does

Bind-mounts a patched `valid-settings.js` over the read-only original at:
```
/usr/palm/services/com.webos.service.apiadapter/adapters/settings/valid-settings.js
```

The patch replaces the hardcoded key whitelist with a Proxy that allows any key. The TV's own `com.webos.settingsservice` backend still enforces what actually exists — only the apiadapter filter is removed.

## Install

- Add this repo `https://blackspell01.github.io/webos-settings-patch/repo.json` to Homebrew Channel.
- Install via Homebrew Channel, or use `opkg install webos-settings-patch_1.0.0_all.ipk`.

