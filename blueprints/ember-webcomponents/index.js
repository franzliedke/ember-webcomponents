module.exports = {
  description: 'Prepare your application for webcomponents',

  afterInstall: function(options) {
    return this.addBowerPackageToProject('webcomponents/webcomponentsjs');
  }
};
