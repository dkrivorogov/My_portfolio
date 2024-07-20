const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');
    hamburger.addEventListener('click', () =>{
        menu.classList.add('active');
    })
    closeElem.addEventListener('click', () =>{
        menu.classList.remove('active');
    })
// скприпт шкала процентов пересчет % в свойтсвах объекта
const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');
    counters.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;

    });
//появлекние кнопки pageup на заданном отступе
$(window).on('scroll', function() {
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
}); 
// плавный переход к якорю _href
$("a[href^='#up']").on('click', function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});

// $('.contacts__form').validate({
//     rules: {
//         name: "required",       
//         email: {
//             required: true,
//             email: true
//         }
//     },
//     messages: {
//         name: "Пожалуйста, введите свое имя",
//         email: {
//             required: "Пожалуйста, введите свою почту ",
//             email: "Неправильно введен адрес почты.",
//             policy: "Обязательно нажмите на флажок"
//         }
//     }
// });

// отправка данных форм на локальый хостинг
$('form').on('submit',function(e){
    e.preventDefault();
    if(!$(this).valid()){
        return;
    }
    $.ajax({
        type:"POST",
        url:"mailer/smart.php",
        data:$(this).serialize()
    }).done(function(){
        $(this).find("input").val("");
        $('form').trigger('reset');
    });
    return false;
});
