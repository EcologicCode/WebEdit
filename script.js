var IsLoad = 0;
$(document).ready(function(){
    if(IsLoad==0){
        var str = window.location.href;
        var url = new URL(str);
        var search_params = new URLSearchParams(url.search); 
        if(search_params.has('code')) {
            var code = search_params.get('code');
            if(!search_params.has('JavaScript')){
            $("#docu").html("<div style=\"background-color:rgb(0, 0, 0);color:rgb(255, 255, 255);\"><a href=\""+str+"&JavaScript=true\"Javascript ?</a></div><br>"+code);
            }else {
                $("#docu").html(code);
                if(search_params.has('script')){
                    var Script = search_params.get('script');
                    $.getScript(Script);
                }else{
                    alert("Impossible de charger JavaScript : Aucun Script");
                }
            }
        }else {
            location.href="../informatique/Web/Utiliser-WebEdit.html";
        }
        IsLoad=1;
    }
});