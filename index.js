/* jshint node: true */
'use strict';

var vulcanize = require('broccoli-vulcanize');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-webcomponents',

  included: function(app, parentAddon) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/webcomponentsjs/webcomponents.js');
  },

  postprocessTree: function(type, tree) {
    if (!tree) {
      return tree;
    }

    var vulcanized = vulcanize('app', {
      input: 'webcomponents.html',
      output: '/assets/vulcanized.html',
      csp: true,
      inline: true,
      strip: false,
      // excludes: {
      //   imports: ["(^data:)|(^http[s]?:)|(^\/)"],
      //   scripts: ["(^data:)|(^http[s]?:)|(^\/)"],
      //   styles: ["(^data:)|(^http[s]?:)|(^\/)"]
      // }
    });

    return mergeTrees([vulcanized, tree], { overwrite: true });
  }
};
