#!/bin/sh
SVC=/media/developer/apps/usr/palm/services/org.webosbrew.settingspatch.service
PATCHED="$SVC/valid-settings-allow-all.js"
ORIGINAL=/usr/palm/services/com.webos.service.apiadapter/adapters/settings/valid-settings.js

mount | grep -q "$ORIGINAL" && exit 0
mount --bind "$PATCHED" "$ORIGINAL"
killall ss.apiadapter 2>/dev/null || true
