
var mapid = document.getElementById("mapid");
var level = document.getElementById("level");
var command = document.getElementById("command");
var is12active = parseInt(document.getElementById("is12active").value);

function mapchange(d) {
    var roomnumber = parseInt(mapid.value);
    var mazelevel = parseInt(level.value);
    var room = maze["room"+roomnumber];

    if (roomnumber == 12 || roomnumber == 13 || roomnumber == 21 || roomnumber == 48) {
        if (is12active == 0) {    
            mazelevel =0;
        };
    };

    mapid.value = room.connections[mazelevel][d];
    roomnumber = parseInt(mapid.value);
    room = maze["room"+roomnumber];

    if (roomnumber%4 == 0) {
        mazelevel = ((mazelevel+1)%4);
        level.value = mazelevel;
    };

    mapped = room.map[mazelevel];       

    for (var i=0; i<mapped.length; i++) {
        for (var j=0; j<mapped[i].length; j++) {
            var boxname = "box" + i + j;
            document.getElementById(boxname).style.background = mapped[i][j] ? "black" : "white";
        };
    };
    
    var dirlist = [
        "N to Room ","NE to Room ","E to Room ","SE to Room ","S to Room ","SW to Room ","W to Room ","NW to Room "
    ];

    for (var i=0; i<8; i++) {
        var x = document.getElementById("b"+i);
        if (room.connections[mazelevel][i] == -1) {
            x.style.display = "none";
        } else {
            x.style.display = "block";
            x.innerHTML = dirlist[i] + room.connections[mazelevel][i];
        };
    };
};


command.addEventListener("change", function() {
    switch (command.value) {
        case "cmd rotation":
            
        break;
    };
    command.value = "";
});

window.addEventListener("DOMContentLoaded", function() {
    mapchange(6);
});

