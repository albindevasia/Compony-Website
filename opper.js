function toggleDropdown(event, dropdownId) {
    event.preventDefault();
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
  }