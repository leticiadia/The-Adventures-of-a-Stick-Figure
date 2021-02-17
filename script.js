// Inicializar a cena atual para a cena 0 (Introdução)
var curScene = 0;


function changeScene(decision) {
    // Limpa a mensagem da cena
    var message = "";

    switch(curScene){

        case 0:
            if(decision == 1){
                curScene = 2;
                message = "You arrived at a beautiful little house in the forest";
            }else{
                curScene = 3;
                message = "You are positioning a part overlooking a peaceful river";
            }

        break;

        case 2: 

        if(decision == 1){
            curScene = 0;
            message = "Welcome back! Your journey begins now.";
        }else {
            decision == 2;
            message = "This action cannot be performed. Click the first button again to return to the beginning.";
        } 

        break;

        case 3: 

        if(decision == 2){
            curScene = 0;
            message = "Welcome back! Your journey begins now.";
        }else {
            decision == 1;
            message = "This action cannot be performed. Click the second button again to return to the beginning.";
        }
         
    }

    document.getElementById('sceneimg').src = "assets/scene" + curScene + ".jpg";
    
    alert(message);
}


