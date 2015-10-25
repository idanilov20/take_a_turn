function loginWindow ()
{
    $('.back-graund-windows').fadeIn(300);
    $('#modul').removeClass("fadeOutRight").addClass("fadeInRight").show();
}
function closeWindows ()
{
    $('.back-graund-windows').fadeOut(300);
    $('#modul').removeClass("fadeInRight").addClass("fadeOutRight");
}