(function (){
    var slider = new fz.Scroll('#slider1', {
        role: 'slider',
        indicator: true,
        autoplay: true,
        interval: 3000
    });
    var slider2 = new fz.Scroll('#slider2', {
        role: 'slider',
        indicator: true,
        autoplay: true,
        interval: 3000
    });
})();
$('.multi-select div input').change(function(){
    if(this.checked)
        $(event.target.parentNode.parentNode.parentNode).find('ul').show();
    else 
        $(event.target.parentNode.parentNode.parentNode).find('ul').hide();
});