var request;
if (window.XMLHttpRequest){
    request = new XMLHttpRequest();

} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open('GET' , 'data.txt' , false);
request.onreadystatechange = function(){
    if ((request.readyState === 4) && (request.status === 200)){
        var mod = document.getElementById('update');
        mod.innerHTML = request.responseText
    }

}
request.send();

var say;
if (window.XMLHttpRequest){
    say = new XMLHttpRequest();

} else {
    say = new ActiveXObject("Microsoft.XMLHTTP");
}

say.open('GET' , 'data.xml' );
say.onreadystatechange = function(){
    if ((say.readyState === 4) && (say.status === 200)){
        console.log(say.responseXML.getElementsByTagName('name')[1].childNodes[0].nodeValue);
    }

    var items =  say.responseXML.getElementsByTagName('name');
    var output = '<ul>' ;
    for (var i = 0 ; i < items.length; i++){
        output += '<li>' +
            items[i].firstChild.nodeValue + '</li>';
    } 
    output += '</ul>';
        document.getElementById('use').innerHTML = output; 
}
say.send();



var myriad;
if (window.XMLHttpRequest){
    myriad = new XMLHttpRequest();

} else {
    myriad = new ActiveXObject("Microsoft.XMLHTTP");
}

myriad.open('GET' , 'data.json' );
myriad.onreadystatechange = function(){
    if ((myriad.readyState === 4) && (myriad.status === 200)){
        var items = JSON.parse(myriad.responseText);
        var output = '<ul>';
        for (var key in items){
            output += '<li>' + items[key].name + '</li>'
        }

        output += '</ul>';
    }
    document.getElementById('json').innerHTML = output
   
}
myriad.send();