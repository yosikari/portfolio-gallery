console.log('Starting up');

// on-load:


$('.btn-send-mail').click(function () {
    var email = $("[name='email-msg']").val()
    var sub = $("[name='email-sub']").val()
    var text =`from-${email} ,`+$("[name='email-txt']").val()
    var win = window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${sub}&body=${text}`, '_blank');
    if (win) {

        win.focus()
    } else {

        alert('Please allow popups for this website')
    }
})


renderPortfolio()
renderModals()