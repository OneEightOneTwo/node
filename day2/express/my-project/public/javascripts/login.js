;
$(() => {
    $("#sign").click(() => {
        // 用户名
        let inputEmail = $("#inputEmail").val();
        // 密码
        let inputPassword = $("#inputPassword").val();
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/sign/login",
            data: {
                inputEmail,
                inputPassword
            }
        }).done((data) => {
            console.log(data);
        })
    })
});