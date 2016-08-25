$ -> 
    $('h1').append("Order")


add = (a ,b) -> 
    d = 4
    a + b

# Anonymous or namless func
do -> 
    console.log "Servant"

data = 
    name : "Eric Caleb"
    numbers : [0,4,4]
    links: 
        twitter: "https://twitter.com/eric_caleb"
        github: "https://iamcaleberic.github.io"
    occupation: "hacker"
    residence: [
        {
            name: "United Kingdom"
            region: "England"
        }
        ]
# Array writin one
UK  = [ "Scotland" , true , 1]

# Array writin two / no commas

United_Kingdom = ["NotherIreland" 
                true 
                 2] 
$('#content').append data.residence[0].name

$('#history').append  "The only known living relative of the founders of the order is #{data.name}"