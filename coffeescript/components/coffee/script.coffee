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

# Ranges 

z = [1...10] 

called = [
    "JOhn snow"
    "Arya Stark"
    ][1..3]

called[1..2] = ['Bob', 'Pete']


# if statements

name = "cal"

if name == "cal" then 
name = "Eric Caleb"

if name is  "Eric Caleb"
    name = "Me"

if name isnt "Eric Caleb "
    name = "Level 6 Killjoy"

dance = -> 
    alert("Join the Servant Order")

happy = true

dance() if happy is true 

punch =  "So"

$('#history').prepend "#{punch}" if punch?

# Functions 

destinations = [
        "London"
        "Paris"
        "Berlin "
        "Tokyo "
        "Canberra"
    ]

# for thing , i  in destinations 
#     console.log " #{i} #{thing} " 

console.log " #{i} #{thing} " for thing , i in destinations  when thing isnt "London"

info = 
    name: "Black"
    title: "blackbeard"

for key,val of info 
    console.log "{#key}: #{val}"
 

#  Splats


minidata = [
    "John Snow"
    "https://iamcaleberic.github.io"
    "https://shadowsript.github.io"
]
# The links ... is a splat operator in CoffeeScript
fillOut = (name , links...) ->
    $("#history").append "#{name} <br> "
    for items in links 
        $('#history').append "#{item} <br>"

fillOut(minidata)

# Switch statements

append  = (item) -> 
    $('#exist').append "#{item}"

exist = "So does this order still exist?"

switch exist 
    when "cal " then append "John snow"
    when "me ", "So does this order still exist?" then append "They do" 
    else append "Do they still exist"
# @ returns the current object
say =  (item) -> 
    $('#exist').append "#{item}"
    console.log @say
    console.dir @say
say " Exist"
# do keyword turns Function into an expression
do scream =  (item = "Hell yeah") -> 
    $('#exist').append "#{item}"
    console.log @scream
    console.dir @scream
scream