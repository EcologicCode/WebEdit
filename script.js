var IsLoad = 0;
$(document).ready(function(){
    if(IsLoad==0){
        var str = window.location.href;
        var url = new URL(str);
        var search_params = new URLSearchParams(url.search); 
        if(search_params.has('code')) {
            var code = search_params.get('code');
            document.write(code);
        }else {
            location.href="../informatique/Web/Utiliser-WebEdit.html";
        }
    }
});