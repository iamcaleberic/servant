$(search).keyup(function(){
    var searchField = $('#search').val();// get typed values
    var myExp = new RegExp(searchField , "i"); //show resultst that equal the regex

    $.getJSON('data.json', function(data){
    var output = '<ul class= "searchresults"> ';
    $.each(data, function(key ,val ){
        if ((val.name.search(myExp) != -1 ) || (val.bio.search(myExp) != -1 )){
            output += '<li>';
            output += '<img class="ui avatar image" src="images/me.jpg" height =150 width=150 + alt="' + val.name + '"/>'   
            output += '<h2>' + val.name + '</h2>';
            output += '<p>' + val.bio + '</p>';
            output += '</li>';
        }
       
    });
    output += '</ul>';
    $('#update').html(output); // map output to upadte div
    });
});
