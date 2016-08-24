$(search).keyup(function(){
    var searchField = $('#search').val();
    console.log(searchField)
    $.getJSON('data.json', function(data){
    var output = '<ul class= "searchresults"> ';
    $.each(data, function(key ,val ){
        output += '<li>';
        output += '<img src="images/me.jpg" height =150 width=150 + alt="' + val.name + '"/>'   
        output += '<h2>' + val.name + '</h2>';
        output += '<p>' + val.bio + '</p>';
        output += '</li>';
    });
    output += '</ul>';
    $('#update').html(output);
    });
});
