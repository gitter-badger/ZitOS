// --------------------------------------------------
// Responsive Toolbar
// --------------------------------------------------

(function ($) {
  $(function () {
    var el = $("#top-bar,#top-menu,[class^=\"ui\"]");

    if ($(document).width() < 800) {
      el.addClass("shrinked");
    } else {
      el.removeClass("shrinked");
    }

    $(window).on("resize", function () {
      if ($(document).width() < 800) {
        el.addClass("shrinked");
      } else {
        el.removeClass("shrinked");
      }
    });
  });
}(jQuery));

// --------------------------------------------------
// Toolbar Items
// --------------------------------------------------

(function () {
  var toolbaritems = [
    {label: "File", className: "file", url: "#file"},
    {label: "Options", className: "opt", url: "#opt"},
    {label: "Menu", className: "menu", url: "#menu"},
    {label: "Help", className: "help", url: "#help"},
    {label: "Features", className: "feat", url: "#feat"},
    {label: "WebView", className: "wv", url: "#wv"}
  ];

  function renderToolBarItems (toolbaritems) {
    if (toolbaritems.length > 12) {
      _(12).times(function (n) {
        new ZitUI.ToolbarItem({
          label: toolbaritems[n].label,
          className: toolbaritems[n].className,
          url: toolbaritems[n].url
        }).render();
      });

      return;
    }

    _(toolbaritems).each(function (item) {
      new ZitUI.ToolbarItem({
        label: item.label,
        className: item.className,
        url: item.url
      }).render();
    });
  }

  renderToolBarItems(toolbaritems);
}());

(function () {

}());