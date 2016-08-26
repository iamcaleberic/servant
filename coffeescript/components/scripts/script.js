var UK, United_Kingdom, add, called, dance, data, destinations, fillOut, happy, i, info, j, key, len, minidata, name, punch, ref, thing, val, z,
  slice = [].slice;

$(function() {
  return $('h1').append("Order");
});

add = function(a, b) {
  var d;
  d = 4;
  return a + b;
};

(function() {
  return console.log("Servant");
})();

data = {
  name: "Eric Caleb",
  numbers: [0, 4, 4],
  links: {
    twitter: "https://twitter.com/eric_caleb",
    github: "https://iamcaleberic.github.io"
  },
  occupation: "hacker",
  residence: [
    {
      name: "United Kingdom",
      region: "England"
    }
  ]
};

UK = ["Scotland", true, 1];

United_Kingdom = ["NotherIreland", true, 2];

$('#content').append(data.residence[0].name);

$('#history').append("The only known living relative of the founders of the order is " + data.name);

z = [1, 2, 3, 4, 5, 6, 7, 8, 9];

called = ["JOhn snow", "Arya Stark"].slice(1, 4);

[].splice.apply(called, [1, 2].concat(ref = ['Bob', 'Pete'])), ref;

name = "cal";

if (name === "cal") {

}

name = "Eric Caleb";

if (name === "Eric Caleb") {
  name = "Me";
}

if (name !== "Eric Caleb ") {
  name = "Level 6 Killjoy";
}

dance = function() {
  return alert("Join the Servant Order");
};

happy = true;

if (happy === true) {
  dance();
}

punch = "So";

if (punch != null) {
  $('#history').prepend("" + punch);
}

destinations = ["London", "Paris", "Berlin ", "Tokyo ", "Canberra"];

for (i = j = 0, len = destinations.length; j < len; i = ++j) {
  thing = destinations[i];
  if (thing !== "London") {
    console.log(" " + i + " " + thing + " ");
  }
}

info = {
  name: "Black",
  title: "blackbeard"
};

for (key in info) {
  val = info[key];
  console.log("{#key}: " + val);
}

minidata = ["John Snow", "https://iamcaleberic.github.io", "https://shadowsript.github.io"];

fillOut = function() {
  var items, k, len1, links, name, results;
  name = arguments[0], links = 2 <= arguments.length ? slice.call(arguments, 1) : [];
  $("#history").append(name + " <br> ");
  results = [];
  for (k = 0, len1 = links.length; k < len1; k++) {
    items = links[k];
    results.push($('#history').append(item + " <br>"));
  }
  return results;
};

fillOut(minidata);
