// Inicializar a cena atual para a cena 0 (Introdução)
var curScene = 0;


function changeScene(decision) {
    // Limpa a mensagem da cena
    var message = "";

    switch(curScene){

        case 0:
            if(decision == 1){
                curScene = 2
                message = "You arrived at a beautiful little house in the forest";
            }else{
                curScene = 3
                message = "You are positioning a part overlooking a peaceful river"
            }

        break;

        case 2: 

        if(decision == 1){
            curScene = 0;
            message = "Welcome back! Your journey begins now."
        }

        case 3: 

        if(decision == 2){
            curScene = 0;
            message = "Welcome back! Your journey begins now."
        }

    }

    document.getElementById('sceneimg').src = "assets/scene" + curScene + ".jpg";
    
    alert(message);
}


