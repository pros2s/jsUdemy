$(function() {
  const BButton = $('#burgerButton');
  const buttonClose = $('#buttonClose');
  const buttonNav = $('#burgerNav');

  BButton.on('click', function(e) {
    e.preventDefault();

    $('.header').css({
      overflow: "visible",
    });

    BButton.css({
      display: "none",
    });

    buttonClose.css({
      display: "block",
    });

    buttonNav.css({
      right: "-1.5rem",
      transition: "right .3s",
    });
  });

  buttonClose.on('click', function(e) {
    e.preventDefault();

    $('.header').css({
      overflow: "hidden",
    });

    buttonClose.css({
      display: "none",
    });

    buttonNav.css({
      right: "-11rem",
      transition: "right .3s",
    });

    BButton.css({
      display: "block",
    });
  });

  const navItem = $('#navLink');

  navItem.on('click', function(e) {
    e.preventDefault();

    navItem.addClass('active');
  });
});