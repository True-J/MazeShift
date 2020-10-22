
var mapid = document.getElementById("mapid");
var level = document.getElementById("level");
var command = document.getElementById("command");
var is12active = document.getElementById("is12active");
var spilangcount = document.getElementById("spilangcount");
var spitext0 = document.getElementById("spitext0");
var spitext1 = document.getElementById("spitext1");
var spitext2 = document.getElementById("spitext2");

command.addEventListener("change", function() {
    switch (command.value) {
        case "openthelock":
            if (parseInt(mapid.value) == 45) {
                mapchange(-1);
            };
        break;
    };
    command.value = "";
});

window.addEventListener("DOMContentLoaded", function() {
    rotatemaze();
});

function mapchange(d) {
    var roomnumber = parseInt(mapid.value);
    var room = maze["room"+roomnumber];

    if (roomnumber == 45 && d == -1) {
        rotatemaze();
    } else {
        
        if (around12.indexOf(roomnumber) != -1 && parseInt(is12active.value) == 0) {
            var mazelevel = 0;
        } else {
            mazelevel = parseInt(level.value);
        };

        roomnumber = room.connections[mazelevel][d];
        mapid.value = roomnumber;
        room = maze["room"+roomnumber];

        if (roomnumber == 45 && d == 6) {
            level.value = (parseInt(level.value)+1)%4;
            mazelevel = parseInt(level.value);
        };

        if (roomnumber%4 == 0) {
            level.value = (parseInt(level.value)+1)%4;
            if (around12.indexOf(roomnumber) != -1 && parseInt(is12active.value) == 0) {
                mazelevel = 0;
            } else {
                mazelevel = parseInt(level.value);
            };
        };

        if (roomnumber != 49) {

            if (roomnumber == 46) {
                document.getElementById("spiderlang").style.display = "block";
                document.getElementById("comminput").style.display = "none";
                document.getElementById("spilanginput").style.display = "block";
                document.getElementById("spitext").style.display = "block";
            } else {
                if (roomnumber == 45) {
                    document.getElementById("spiderlang").style.display = "none";
                    document.getElementById("comminput").style.display = "block";
                    document.getElementById("spilanginput").style.display = "none";
                    document.getElementById("spitext").style.display = "none";
                } else {
                    document.getElementById("spiderlang").style.display = "none";
                    document.getElementById("comminput").style.display = "none";
                    document.getElementById("spilanginput").style.display = "none";
                    document.getElementById("spitext").style.display = "none";
                };
            };

            var gridmap = room.map[mazelevel];

            for (var i=0; i<gridmap.length; i++) {
                for (var j=0; j<gridmap[i].length; j++) {
                    var boxname = "box" + i + j;
                    if (gridmap[i][j] == 1) {
                        document.getElementById(boxname).style.background = "black";
                    } else {
                        if (roomnumber == 0) {
                            document.getElementById(boxname).style.background = "red";
                        } else {
                            if (roomnumber < 12) {
                                document.getElementById(boxname).style.background = "lightgreen";
                            } else {
                                if (roomnumber < 23) {
                                    document.getElementById(boxname).style.background = "darkgreen";
                                } else {
                                    if (roomnumber < 34) {
                                        document.getElementById(boxname).style.background = "gold";
                                    } else {
                                        if (roomnumber < 45) {
                                            document.getElementById(boxname).style.background = "maroon";
                                        } else {
                                            document.getElementById(boxname).style.background = "red";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };

            gridmap = room.puzzle[parseInt(level.value)];

            for (i=0; i<gridmap.length; i++) {
                for (j=0; j<gridmap[i].length; j++) {
                    boxname = "pbox" + i + j;
                    if (gridmap[i][j] == 1) {
                        document.getElementById(boxname).style.background = "black";
                        document.getElementById(boxname).style.opacity = 1;
                    } else {
                        document.getElementById(boxname).style.background ="white";
                        document.getElementById(boxname).style.opacity = 0;
                    };
                };
            };

            for (var i=0; i<8; i++) {
                var x = document.getElementById("b"+i);
                if (room.connections[mazelevel][i] == -1) {
                    x.style.display = "none";
                } else {
                    x.style.display = "block";
                    x.innerHTML = dirlist[i] + room.connections[mazelevel][i];
                };
            };

        } else {

            mapid.value = 1;
            level.value = 3;
            is12active.value = 0;
            mapchange(6);

        };
    };
};

function rotatemaze() {
    var roomnumber = parseInt(mapid.value);
    var room = maze["room"+roomnumber];
    level.value = (parseInt(level.value)+1)%4;
    var mazelevel = parseInt(level.value);

    var gridmap = room.map[mazelevel];

    for (var i=0; i<gridmap.length; i++) {
        for (var j=0; j<gridmap[i].length; j++) {
            var boxname = "box" + i + j;
            if (gridmap[i][j] == 1) {
                document.getElementById(boxname).style.background = "black";
            } else {
                if (roomnumber == 0) {
                    document.getElementById(boxname).style.background = "red";
                } else {
                    if (roomnumber < 12) {
                        document.getElementById(boxname).style.background = "lightgreen";
                    } else {
                        if (roomnumber < 23) {
                            document.getElementById(boxname).style.background = "darkgreen";
                        } else {
                            if (roomnumber < 34) {
                                document.getElementById(boxname).style.background = "gold";
                            } else {
                                if (roomnumber < 45) {
                                    document.getElementById(boxname).style.background = "maroon";
                                } else {
                                    document.getElementById(boxname).style.background = "red";
                                };
                            };
                        };
                    };
                };
            };
        };
    };

    gridmap = room.puzzle[parseInt(level.value)];

    for (i=0; i<gridmap.length; i++) {
        for (j=0; j<gridmap[i].length; j++) {
            boxname = "pbox" + i + j;
            if (gridmap[i][j] == 1) {
                document.getElementById(boxname).style.background = "black";
            } else {
                document.getElementById(boxname).style.background ="white";
            };
        };
    };

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

function talktospider(s) {
    document.getElementById("spword"+parseInt(spilangcount.value)).innerHTML = spisymbols[s];
    document.getElementById("spitext"+parseInt(spilangcount.value)).value = s;
    spilangcount.value = (parseInt(spilangcount.value)+1)%3;
};

function talkspiderdel() {
    spilangcount.value = (parseInt(spilangcount.value)+2)%3;
    document.getElementById("spword"+parseInt(spilangcount.value)).innerHTML = "-";
    document.getElementById("spitext"+parseInt(spilangcount.value)).value = 0;
};

function spiderresponse() {
    var response = [parseInt(spitext0.value),parseInt(spitext1.value),parseInt(spitext2.value)];
    response.sort((a,b)=>a-b);
    document.getElementById("spitexthere").innerHTML = "The Spider " + spiresponse[response[0],response[1],response[2]];
    document.getElementById("spiresp0").value = response[0];
    document.getElementById("spiresp1").value = response[1];
    document.getElementById("spiresp2").value = response[2];
};
