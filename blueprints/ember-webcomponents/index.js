module.exports = {
  description: 'Prepare your application for webcomponents',

  normalizeEntityName: function() {
    // NOOP
    // This prevents an error about missing entity names
  },

  afterInstall: function(options) {
    return this.addBowerPackageToProject('webcomponents/webcomponentsjs');
  }
};
