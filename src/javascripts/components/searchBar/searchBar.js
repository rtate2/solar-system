import $ from 'jquery';

const searchPlanets = () => {
  $(document).ready(() => {
    $('#myInput').keyup(() => {
      const value = $('#myInput').val().toUpperCase();
      $('.cardFront').hide();
      $(`.cardFront:contains("${value}")`).closest('.cardFront').show();
    });
    if ($('myInput').val() === 'Search') {
      $('.cardFront').show();
    }
  });
};

export default { searchPlanets };
