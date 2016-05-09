# Building-Block for Sites
This project is a small library of UI components based off Zurb's [building blocks](http://zurb.com/building-blocks) however the code has been refactored to be more compatible with Foundation 6 and optimized for [Octophant](https://github.com/zurb/octophant) and [Zurb's Template](https://github.com/zurb/foundation-zurb-template).

<!-- I still need to set up a proper test environment but I don't know how to do that and don't have the time to do so...

[![npm version](https://badge.fury.io/js/foundation-sites.svg)](https://badge.fury.io/js/foundation-sites) [![Bower version](https://badge.fury.io/bo/foundation-sites.svg)](https://badge.fury.io/bo/foundation-sites) [![devDependency Status](https://david-dm.org/zurb/foundation-sites/dev-status.svg)](https://david-dm.org/zurb/foundation-sites#info=devDependencies) [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/zurb/foundation-sites?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) -->


## Installation

```bash
bower install building-blocks-sites
cd bower_components
npm i 
gulp
```

## Usage

Although building-blocks is intended to be used with foundation for sites, but is created to be extend the use of the standard zurb template. With that said, it is perfectly possible to use this with bootstrap or [blasphemy](https://github.com/HansUXdev/blasphemy).


## Folder Structure
```
├── package.json
├── bower.json
// Productions Files
├── blocks
│   ├── card
│   └── date-selector
│   └── event-listing
│   └── service-block
│   └── navigation
│   └── footers
│   └── */
│   └────── *.html
│   └────── *.scss
│   └────── *.js
// Testing Ground
└── src
    ├── assets
    ├── layouts
    ├── partials
    ├── pages
    ├── data
```
