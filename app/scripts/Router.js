App.Routers.AppRouter = Backbone.Router.extend({
	routes : {  
        '' : 'index', 
		'index' : 'index',
        'book' : 'book'
    },  
    index : function(openid) { 
        App.openid = App.openid || 'oymdiw4LcA1CJpnwq3xcFwSKHR_A';
        App.UniversityId = 11646;
        App.zIndex=1;
        $('section.show').removeClass('show fadeIn').addClass('fadeOut');
        var that = this;
        App.loading();
    },
    book:function(){
        App.loading(); 
        App.zIndex ++;
        $('section.show').removeClass('fadeIn').addClass('fadeOut');
        $('#bookForm').removeClass('hide fadeOut').addClass('show fadeIn').css('zIndex',App.zIndex);
    }
}); 
$('section').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
    if($(this).hasClass('fadeOut'))
        $(this).removeClass('show').addClass('hide').css('zIndex',App.zIndex);
});
$(function(){
    new App.Routers.AppRouter();  
     
    Backbone.history.start();
    //location.href='#';
});