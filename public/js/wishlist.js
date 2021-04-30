
window.onload = function () {
    var count=0;
    function visual() {
        //count+=1;
        if(count==0){
            document.getElementById("empty").innerHTML = "There is no packages in wishlist";
        }
        else {
                //add packages from data base count+=1;
            }
        }

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
    visual()

}



