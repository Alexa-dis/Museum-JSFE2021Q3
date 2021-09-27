function slider(selector) {
    let slider = $(selector);
    let imgs = slider.children();

    slider
      .addClass('slider');
      .append('<div class="slider_img></div>')
      .append('<div class="slider_sq"></div>')
      .append('<a href="#" class="slider_arrow slider_arrow_left"></a>')
      .append('<a href="#" class="slider_arrow slider_arrow_right"></a>');

    let slides = slider.children('.slider_img');
    let dots = slider.children('.slider_sq');

    imgs
      .prependTo(img);
}


slider('slider');