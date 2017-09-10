(function(window) {

  'use strict';

  /**
   * Extend Object helper function.
   */
  function extend(a, b) {
    for(var key in b) { 
      if(b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
    return a;
  }

  /**
   * Each helper function.
   */
  function each(collection, callback) {
    for (var i = 0; i < collection.length; i++) {
      var item = collection[i];
      callback(item);
    }
  }

  /**
   * Menu Constructor.
   */
  function Menu(options) {
    this.options = extend({}, this.options);
    extend(this.options, options);
    this._init();
  }

  /**
   * Menu Options.
   */
  Menu.prototype.options = {
    wrapper: '#push-wrapper',          // The content wrapper
    header: '#header',
    type: 'account',             // The menu type
    menuOpenerClass: '.opener',   // The menu opener class names (i.e. the buttons)
    maskId: '.mask'               // The ID of the mask
  };

  /**
   * Initialise Menu.
   */
  Menu.prototype._init = function() {
    this.body = document.body;
    this.wrapper = document.querySelector(this.options.wrapper);
    this.header = document.querySelector(this.options.header);
    this.mask = document.querySelector(this.options.maskId);
    this.menu = document.querySelector('#' + this.options.type);
    this.menuOpeners = document.querySelectorAll(this.options.menuOpenerClass);
    this._initEvents();
  };

  /**
   * Initialise Menu Events.
   */
  Menu.prototype._initEvents = function() {

    // Event for clicks on the mask.
    this.mask.addEventListener('click', function(e) {
      e.preventDefault();
      this.close();
    }.bind(this));
  };

  /**
   * Open Menu.
   */
  Menu.prototype.open = function() {
    this.body.classList.add('active-menu');
    this.wrapper.classList.add('pushed');
    this.header.classList.add('pushed');
    this.menu.classList.add('active');
    this.mask.classList.add('active');
    this.disableMenuOpeners();
  };

  /**
   * Close Menu.
   */
  Menu.prototype.close = function() {
    this.body.classList.remove('active-menu');
    this.wrapper.classList.remove('pushed');
    this.header.classList.remove('pushed');
    this.menu.classList.remove('active');
    this.mask.classList.remove('active');
    this.enableMenuOpeners();
  };

  /**
   * Disable Menu Openers.
   */
  Menu.prototype.disableMenuOpeners = function() {
    each(this.menuOpeners, function(item) {
      //item.disabled = true;
      item.classList.add('open');
    });
  };

  /**
   * Enable Menu Openers.
   */
  Menu.prototype.enableMenuOpeners = function() {
    each(this.menuOpeners, function(item) {
      //item.disabled = false;
      item.classList.remove('open');
    });
  };

  /**
   * Add to global namespace.
   */
  window.Menu = Menu;

})(window);