window.ZitUI = (function (global, $, _) {
  var ZitUI = {}
    , win = global
    , doc = win.document;

  if (typeof $ !== "function" || typeof _ === "undefined") {
    throw new Error("Please load jQuery and Undescore");
  }

  ZitUI.version = "0.1.0";

  ZitUI.Component = function (name, tagName) {
    ZitUI.components[name] = [];
    return function (props) {
      this.el = doc.createElement(tagName.toLowerCase());
      ZitUI.components[name].push(this.el);
      this.$el = $(this.el);
      this.opt = props || {};
    };
  };

  ZitUI.components = {};

  // --------------------------------------------------
  // ZitUI.Button
  // --------------------------------------------------

  ZitUI.Button = new ZitUI.Component("button", "a");

  ZitUI.Button.prototype = {
    render: function () {
      this.$el.addClass("ui-button");

      if (typeof this.opt.className) {
        this.$el.addClass(this.opt.className);
        delete this.opt.className;
      }

      if (typeof this.opt.url === "string") {
        this.$el.attr("href", this.opt.url);
      } else {
        this.$el.attr("href", "#");
      }

      delete this.opt.url;

      if (typeof this.opt.content === "string") {
        this.$el.html(this.opt.content);
        delete this.opt.content;
      }

      this.$el.attr(this.opt);

      return this.el = this.$el.get()[0];
    }
  };

  // --------------------------------------------------
  // ZitUI.ToolbarItem
  // --------------------------------------------------

  ZitUI.ToolbarItem = new ZitUI.Component("toolbaritem", "a");

  ZitUI.ToolbarItem.prototype = {
    render: function () {
      this.$el.addClass("ui-toolbar-item");

      if (typeof this.opt.className) {
        this.$el.addClass(this.opt.className);
        delete this.opt.className;
      }

      if (typeof this.opt.url === "string") {
        this.$el.attr("href", this.opt.url);
      } else {
        this.$el.attr("href", "#");
      }

      delete this.opt.url;

      if (typeof this.opt.label === "string") {
        this.$el.html(this.opt.label);
        delete this.opt.label;
      }

      this.$el.attr(this.opt);

      return $(".top-menu").append(this.$el.get()[0]);
    }
  };

  return ZitUI;
}(window, jQuery, _));