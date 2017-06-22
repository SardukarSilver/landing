$(document).ready(function(){
$.getJSON('js-resourses/tab-content.json', function(data) {
  var uiItems = {
    all: {
      innerHtml: ''
    },
    printTemplate: {
      innerHtml: ''
    },
    webTemplate: {
      innerHtml: ''
    },
    UI: {
      innerHtml: ''
    },
    mockUp: {
      innerHtml: ''
    }
  };

  function getUiElements(uiItems) {
    for (var i in uiItems) {
      if (uiItems.hasOwnProperty(i)) {
        var el = '#' + i + ' ul';
        uiItems[i].el = $(el);
      }
    }
  }

  function updateUiInnerHtml(uiItems) {
    for (var i in uiItems) {
      if (uiItems.hasOwnProperty(i)) {
        uiItems[i].el.html(uiItems[i].innerHtml);
      }
    }
  }

  getUiElements(uiItems);

  $.each(data.items, function(index, value) {
    uiItems.all.innerHtml += '<li><img src=' + value.imageSource + '></li>';

    switch (value.type) {
      case 'printTemplate':
        uiItems.printTemplate.innerHtml += '<li><img src=' + value.imageSource + '></li>';
        break;
      case 'webTemplate':
        uiItems.webTemplate.innerHtml += '<li><img src=' + value.imageSource + '></li>';
        break;
      case 'UI':
        uiItems.UI.innerHtml += '<li><img src=' + value.imageSource + '></li>';
        break;
      case 'mockUp':
        uiItems.mockUp.innerHtml += '<li><img src=' + value.imageSource + '></li>';
        break;
    }
  });

  updateUiInnerHtml(uiItems);
});
});
