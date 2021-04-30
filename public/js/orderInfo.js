
window.onload = function () {
    var status;

    function read() {
        status = document.getElementById("status").value;
        alert(status.toString());
    }



    //change status at data base
    function Func(){
        var data;
        fetch("/liron", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(function(response) {
                if (response.ok) {
                    console.log('got data: ', response.data);
                }
                else throw new Error('Request failed.');
            })
            .catch(function(error) {
                console.log(error);
            });
    }
    var btn = document.getElementById("submit");
    btn.addEventListener("click", read);
}


