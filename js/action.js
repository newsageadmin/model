//共用載入

$('#header').load('../model/header.html');
$('footer').load('../model/footer.html');



$('#sliderBox').owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  items: 1,
  nav: true,
  navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>']

});

$('.allModelList').owlCarousel({
  loop: true,
  margin: 15,
  dots: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
      nav: false,
      dots:true
    },
    600: {
      items: 3,
      nav: false
    },
    1000: {
      items: 4,
      nav: false,
      loop: false,
      mouseDrag:false
    }
  }
});




