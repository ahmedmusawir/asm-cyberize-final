import $ from 'jquery';

class UniversityFiltersParent {
  constructor() {
    // this.init();
    this.doc = $(document);
    // COLLECTING RESET BUTTON
    this.resetBtn = $('#univ-filter-reset');
    // COLLECTING RESET BUTTON
    this.locationBtn = $('#location-dropdown-btn');
    // COLLECTIN DROPDOWN
    this.dropDownBox = $('#menu-university-menu');

    // console.log(this.button);
    this.setEvents();
  }

  init = () => {
    console.log('Univ Parent Filter Reset');
  };

  setEvents() {
    this.resetBtn.on('click', this.resetFilters);
    this.locationBtn.on('click', this.locationDropdownIn);
    this.dropDownBox.on('mouseleave', this.locationDropdownOut);
    this.doc.on('mouseup', this.docClick);
  }

  docClick = (e) => {
    // console.log('doc mouse up');
    // const dropDownBox = $('#menu-university-menu');
    if (!this.dropDownBox.is(e.target)) {
      // this.dropDownBox.removeClass('is-active');
      this.dropDownBox.addClass('d-none');
    }
  };

  locationDropdownIn = (e) => {
    console.log('location btn clicked');
    // this.dropDownBox.addClass('is-active row');
    this.dropDownBox.removeClass('d-none');
  };

  locationDropdownOut = (e) => {
    // console.log('location btn clicked');
    this.dropDownBox.addClass('d-none');
  };

  resetFilters() {
    const theItem = $('.univ-post-item');
    console.log('Univ Reset btn clicked');

    const division = $('#division-select');
    division.val('all');

    const men = $('#men-select');
    men.val('all');

    const women = $('#women-select');
    women.val('all');

    theItem.addClass('d-none');
    setTimeout(function () {
      theItem.removeClass('d-none');
    });
  }
}

export default UniversityFiltersParent;
