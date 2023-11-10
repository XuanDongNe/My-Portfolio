/*global $, jQuery, alert*/
$(document).ready(function () {

  'use strict';

  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //


  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp();
      }
    });

    $(this).addClass('active');

    var target = this.hash,
      menu = target;

    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top - 80
    }, 500, 'swing', function () {
      window.location.hash = target.selector;
      $(document).on("scroll", onScroll);
    });
  });


  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //


  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 200) {
      $("#navbar, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass('subpage-nav');
    } else {
      $("#navbar").slideUp(700);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass('subpage-nav');
    }
  });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function (e) {
    $('.nav-menu').slideToggle();
  });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = new Typed('.typed', {
    strings: ["College Student.", "Photographer."],
    typeSpeed: 130,
    backSpeed: 100,
    backDelay: 100,
    loop: true
  });


  // ========================================================================= //
  //  Owl Carousel Services
  // ========================================================================= //


  $('.services-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 20,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
  });

  // ========================================================================= //
  //  magnificPopup
  // ========================================================================= //

  var magnifPopup = function () {
    $('.popup-img').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function (openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  };


  // Call the functions
  magnifPopup();

});

// ========================================================================= //
//  Porfolio isotope and filter
// ========================================================================= //
$(window).load(function () {

  var portfolioIsotope = $('.portfolio-container2').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on('click', function () {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });

})

// Testimonials carousel
$(".testimonial-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 1500,
  dots: true,
  loop: true,
  items: 1
});


// ========================================================================= //
//  //ACTION CLICK MY LABS
// ========================================================================= //
$(document).ready(function () {
  $('.tabcontent').hide();
  $('.tabcontent:first-child').fadeIn();
  $('.tab-excercise button').click(function () {
    // active navbar-nar
    $('.tab-excercise button').removeClass('active');
    $(this).addClass('active');

    //show tab-content item
    let id_tab_content = $(this).children('a')[0].dataset.id;
    if (!$(id_tab_content).is(':visible')) { // Check if the tab is not already visible
      $('.tabcontent').hide();
      $(id_tab_content).fadeIn();
    }

    return false;
  });
});


// ========================================================================= //
//  DOWNLOAD 
// ========================================================================= //
// Lắng nghe sự kiện click trên nút "Download"
$('.download-btn').click(function () {
  // Lấy đường dẫn và tên file từ thuộc tính "download"
  var downloadLink = $(this).attr("href");
  var fileName = $(this).attr("download");

  // Tạo một phần tử a ẩn để tải xuống tệp
  var a = document.createElement('a');
  a.href = downloadLink;
  a.download = fileName;

  // Thêm phần tử a vào tài liệu và kích hoạt sự kiện click để tải xuống
  document.body.appendChild(a);
  a.click();

  // Xóa phần tử a sau khi tải xong
  document.body.removeChild(a);

  // Ngăn chặn hành động mặc định của nút "Download"
  return false;
});

// ========================================================================= //
//  /.GOOGLE MAP
// ========================================================================= //
function initMap() {
  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 40.674, lng: -73.945 },
    zoom: 12,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    styles: [
      { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#263c3f' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#6b9a76' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#38414e' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212a37' }]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9ca5b3' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#746855' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#1f2835' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#f3d19c' }]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#2f3948' }]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#17263c' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#515c6d' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#17263c' }]
      }
    ]
  });
}

// ========================================================================= //
//  //ACTION CLICK ADD
// ========================================================================= //

var buyt = [
  { maxb: 'VN-1', tenxb: 'Limouse-32', from: 'HCM', to: 'Hà Nội', tendoanhnghiep: 'Phương Trang', trangthai: 'Dang hoat dong' },
  { maxb: 'VN-2', tenxb: 'Limouse-31', from: 'HCM', to: 'Nha Trang', tendoanhnghiep: 'Phương Trang', trangthai: 'Khong hoat dong' }
];

render();

var addBtn = document.querySelector('.btn-add');
addBtn.addEventListener("click", addItem);

function addItem() {
  let idInput = document.getElementById('mabuyt');
  let nameOfBusInput = document.getElementById('nameOfBus');
  let fromInput = document.getElementById('from');
  let toInput = document.getElementById('to');
  let nameOfBusinessInput = document.getElementById('nameOfBusiness');
  let trangThaiOfBus = document.getElementById('trangThai');

  const newItem = {
    maxb: idInput.value,
    tenxb: nameOfBusInput.value,
    from: fromInput.value,
    to: toInput.value,
    tendoanhnghiep: nameOfBusinessInput.value,
    trangthai: trangThaiOfBus.value
  };

  buyt.push(newItem);
  // buyt = [...buyt, newItem]
  sessionStorage.setItem('buyt', JSON.stringify(buyt));
  render(true);
}


function render(isRemove) {
  let tableBody = document.querySelector('.table-bordered tbody');

  if (isRemove) {
    tableBody.innerHTML = '';
  }

  const buytStore = JSON.parse(sessionStorage.getItem('buyt')) ?? buyt;

  buytStore.forEach((item, index) => {
    let row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.maxb}</td>
      <td>${item.tenxb}</td>
      <td>${item.from} - ${item.to}</td>
      <td>${item.tendoanhnghiep}</td>
      <td>${item.trangthai}</td>
      <td><button class="btn btn-warning btn-edit" onclick="editItem(${item.maxb})">Edit</button></td>
      <td><button class="btn btn-danger btn-delete" onclick="deleteItem(${index})">Delete</button></td>
    `;
    tableBody.appendChild(row);
  });
}

// ========================================================================= //
//  //delete CLICK find
// ========================================================================= //
var findBtn = document.querySelector('btn-find');




