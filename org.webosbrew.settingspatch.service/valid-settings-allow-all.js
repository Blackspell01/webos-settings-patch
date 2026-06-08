var allowAll = { indexOf: function() { return 0; } };
var proxyKeySet = new Proxy({}, { get: function() { return allowAll; } });

var validSettings = {
  getSettingsValidKeySet: proxyKeySet,
  getSettingDescValidKeySet: proxyKeySet,
  getSettingValuesValidKeySet: proxyKeySet,
  setSettingsValidKeySet: proxyKeySet,
  resetSettingsValidKeySet: proxyKeySet,
  resetSettingDescValidKeySet: proxyKeySet
};

module.exports = validSettings;
