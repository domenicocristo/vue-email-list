// stampare in pagina 10 email random con API

var emailList = new Vue (
    {
        el: "#container",
        data: {
            emailList: [
            ]
        },
        mounted () {
            for (i = 0; i < 10, i++) {
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(function (response) {
                    let email = response.data;
                    this.emailList.push(email);
                });
            };
        },
    }
);