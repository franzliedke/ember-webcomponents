# ember-webcomponents

Easily load and use web components in your Ember project.

This addon takes care of compiling all components into one file (using Polymer's [vulcanize](https://github.com/Polymer/vulcanize)).

## Installation

~~~sh
ember install ember-webcomponents
~~~

## Usage

Create app/webcomponents.html and import all your web components inside of it:

~~~html
<!--
This file belongs at app/webcomponents.html. It will load all your web components as a single file, rather than a bunch of individual link requests.

You can customize the components loaded here if you don't need certain things or want to add your own custom elements.
-->

<link rel="import" href="../bower_components/my-elements/my-element.html">
~~~

## Contributing

* `git clone https://github.com/franzliedke/ember-webcomponents.git`
* `cd ember-webcomponents`
* `npm install`
* `bower install`
* ...

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

## Acknowledgments

Thanks to https://github.com/wildland/ember-polymer for the original version of this addon, which was targeted at Polymer elements and older versions of Ember CLI.
