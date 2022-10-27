localStorage.setItem('chakra-ui-color-mode', 'dark');

$('#wrapper').on('click', function (event) {
  $(this).toggleClass('wrapper-z');
});