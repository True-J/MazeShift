
// symbols in order mean: - nothing,  $ me, + you, @ have, # want, / give, = freedom, [ love, ) hate,
//      % flower, & rabbit, ~ lizard, ^ eagle, ! frog, ? what, > here, ; there, | yes, : no 

var spisymbols = ["-","$","+","@","#","/","=","[",")","%","&","~","^","!","?",">",";","|",":"]

var spiresponse = [
    [ // nothing
        [ // nothing
            "moves closer <br> and says <br> '? + >'", // - - -, what you here
            "nods and says <br> '| +'", // - - me, yes you
            "looks a bit <br> confused and says <br> ': +'", // - - you, no you
            "", // - - have,
            "", // - - want,
            "", // - - give,
            "", // - - freedom,
            "", // - - love,
            "", // - - hate,
            "", // - - flower,
            "", // - - rabbit,
            "", // - - lizard,
            "", // - - eagle,
            "", // - - frog,
            "", // - - what,
            "", // - - here,
            "", // - - there,
            "", // - - yes,
            "" // - - no,
        ],[ // me
            , // Doesn't Exist
            "", // - me me,
            "", // - me you, 
            "", // - me have,
            "", // - me want,
            "", // - me give,
            "", // - me freedom,
            "", // - me love,
            "", // - me hate,
            "", // - me flower,
            "", // - me rabbit,
            "", // - me lizard,
            "", // - me eagle,
            "", // - me frog,
            "", // - me what,
            "", // - me here,
            "", // - me there,
            "", // - me yes,
            "" // - me no,
        ],[ // you
            ,, // Doesn't Exist
            "", // - you you, 
            "", // - you have,
            "", // - you want,
            "", // - you give,
            "", // - you freedom,
            "", // - you love,
            "", // - you hate,
            "", // - you flower,
            "", // - you rabbit,
            "", // - you lizard,
            "", // - you eagle,
            "", // - you frog,
            "", // - you what,
            "", // - you here,
            "", // - you there,
            "", // - you yes,
            "", // - you no,
        ],[ // have
            ,,, // Doesn't Exist
            "", // - have have,
            "", // - have want,
            "", // - have give,
            "", // - have freedom,
            "", // - have love,
            "", // - have hate,
            "", // - have flower,
            "", // - have rabbit,
            "", // - have lizard,
            "", // - have eagle,
            "", // - have frog,
            "", // - have what,
            "", // - have here,
            "", // - have there,
            "", // - have yes,
            "" // - have no
        ],[ // want
            ,,,, // Doesn't Exist
            "", // - want want,
            "", // - want give,
            "", // - want freedom,
            "", // - want love,
            "", // - want hate,
            "", // - want flower,
            "", // - want rabbit,
            "", // - want lizard,
            "", // - want eagle,
            "", // - want frog,
            "", // - want what,
            "", // - want here,
            "", // - want there,
            "", // - want yes,
            "" // - want no,           
        ],[ // give
            ,,,,, // Doesn't Exist
            "", // - give give,
            "", // - give freedom,
            "", // - give love,
            "", // - give hate,
            "", // - give flower,
            "", // - give rabbit,
            "", // - give lizard,
            "", // - give eagle,
            "", // - give frog,
            "", // - give what,
            "", // - give here,
            "", // - give there,
            "", // - give yes,
            "" // - give no,           
        ],[ // freedom
            ,,,,,, // Doesn't Exist
            "", // - freedom freedom,
            "", // - freedom love,
            "", // - freedom hate,
            "", // - freedom flower,
            "", // - freedom rabbit,
            "", // - freedom lizard,
            "", // - freedom eagle,
            "", // - freedom frog,
            "", // - freedom what,
            "", // - freedom here,
            "", // - freedom there,
            "", // - freedom yes,
            "" // - freedom no,
        ],[ // love
            ,,,,,,, // Doesn't Exist
            "", // - love love,
            "", // - love hate,
            "", // - love flower,
            "", // - love rabbit,
            "", // - love lizard,
            "", // - love eagle,
            "", // - love frog,
            "", // - love what,
            "", // - love here,
            "", // - love there,
            "", // - love yes,
            "" // - love no,
        ],[ // hate
            ,,,,,,,, // Doesn't Exist
            "", // - hate hate,
            "", // - hate flower,
            "", // - hate rabbit,
            "", // - hate lizard,
            "", // - hate eagle,
            "", // - hate frog,
            "", // - hate what,
            "", // - hate here,
            "", // - hate there,
            "", // - hate yes,
            "" // - hate no,
        ],[ // flower
            ,,,,,,,,, // Doesn't Exist
            "", // - flower flower,
            "", // - flower rabbit,
            "", // - flower lizard,
            "", // - flower eagle,
            "", // - flower frog,
            "", // - flower what,
            "", // - flower here,
            "", // - flower there,
            "", // - flower yes,
            "" // - flower no,
        ],[ // rabbit
            ,,,,,,,,,, // Doesn't Exist
            "", // - rabbit rabbit,
            "", // - rabbit lizard,
            "", // - rabbit eagle,
            "", // - rabbit frog,
            "", // - rabbit what,
            "", // - rabbit here,
            "", // - rabbit there,
            "", // - rabbit yes,
            "" // - rabbit no,
        ],[ // lizard
            ,,,,,,,,,,, // Doesn't Exist
            "", // - lizard lizard,
            "", // - lizard eagle,
            "", // - lizard frog,
            "", // - lizard what,
            "", // - lizard here,
            "", // - lizard there,
            "", // - lizard yes,
            "" // - lizard no,
        ],[ // eagle
            ,,,,,,,,,,,, // Doesn't Exist
            "", // - eagle eagle,
            "", // - eagle frog,
            "", // - eagle what,
            "", // - eagle here,
            "", // - eagle there,
            "", // - eagle yes,
            "" // - eagle no,
        ],[ // frog
            ,,,,,,,,,,,,, // Doesn't Exist
            "", // - frog frog,
            "", // - frog what,
            "", // - frog here,
            "", // - frog there,
            "", // - frog yes,
            "" // - frog no,           
        ],[ // what
            ,,,,,,,,,,,,,, // Doesn't Exist
            "", // - what what,
            "", // - what here,
            "", // - what there,
            "", // - what yes,
            "" // - what no,           
        ],[ // here
            ,,,,,,,,,,,,,,, // Doesn't Exist
            "", // - here here,
            "", // - here there,
            "", // - here yes,
            "" // - here no,
        ],[ // there
            ,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // - there there,
            "", // - there yes,
            "" // - there no,           
        ],[ // yes
            ,,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // - yes yes,
            "" // - yes no,
        ],[ // no
            ,,,,,,,,,,,,,,,,,, // Doesn't Exist
            "" // - no no,
        ]
    ],[ // me
        [],[ // me
            , // Doesn't Exist
            "", // me me me,
            "", // me me you,
            "", // me me have,
            "", // me me want,
            "", // me me give,
            "", // me me freedom,
            "", // me me love,
            "", // me me hate,
            "", // me me flower,
            "", // me me rabbit,
            "", // me me lizard,
            "", // me me eagle,
            "", // me me frog,
            "", // me me what,
            "", // me me here,
            "", // me me there,
            "", // me me yes,
            "" // me me no,
        ],[ // you
            ,, // Doesn't Exist
            "", // me you you,
            "", // me you have,
            "", // me you want,
            "", // me you give,
            "", // me you freedom,
            "", // me you love,
            "", // me you hate,
            "", // me you flower,
            "", // me you rabbit,
            "", // me you lizard,
            "", // me you eagle,
            "", // me you frog,
            "", // me you what,
            "", // me you here,
            "", // me you there,
            "", // me you yes,
            "" // me you no,
        ],[ // have
            ,,, // Doesn't Exist
            "", // me have have,
            "", // me have want,
            "", // me have give,
            "", // me have freedom,
            "", // me have love,
            "", // me have hate,
            "", // me have flower,
            "", // me have rabbit,
            "", // me have lizard,
            "", // me have eagle,
            "", // me have frog,
            "", // me have what,
            "", // me have here,
            "", // me have there,
            "", // me have yes,
            "" // me have no,
        ],[ // want
            ,,,, // Doesn't Exist
            "", // me want want,
            "", // me want give,
            "", // me want freedom,
            "", // me want love,
            "", // me want hate,
            "", // me want flower,
            "", // me want rabbit,
            "", // me want lizard,
            "", // me want eagle,
            "", // me want frog,
            "", // me want what,
            "", // me want here,
            "", // me want there,
            "", // me want yes,
            "" // me want no,                    
        ],[ // give
            ,,,,, // Doesn't Exist
            "", // me give give,
            "", // me give freedom,
            "", // me give love,
            "", // me give hate,
            "", // me give flower,
            "", // me give rabbit,
            "", // me give lizard,
            "", // me give eagle,
            "", // me give frog,
            "", // me give what,
            "", // me give here,
            "", // me give there,
            "", // me give yes,
            "" // me give no,                  
        ],[ // freedom
            ,,,,,, // Doesn't Exist
            "", // me freedom freedom,
            "", // me freedom love,
            "", // me freedom hate,
            "", // me freedom flower,
            "", // me freedom rabbit,
            "", // me freedom lizard,
            "", // me freedom eagle,
            "", // me freedom frog,
            "", // me freedom what,
            "", // me freedom here,
            "", // me freedom there,
            "", // me freedom yes,
            "" // me freedom no,
        ],[ // love
            ,,,,,,, // Doesn't Exist
            "", // me love love,
            "", // me love hate,
            "", // me love flower,
            "", // me love rabbit,
            "", // me love lizard,
            "", // me love eagle,
            "", // me love frog,
            "", // me love what,
            "", // me love here,
            "", // me love there,
            "", // me love yes,
            "" // me love no,
        ],[ // hate
            ,,,,,,,, // Doesn't Exist
            "", // me hate hate,
            "", // me hate flower,
            "", // me hate rabbit,
            "", // me hate lizard,
            "", // me hate eagle,
            "", // me hate frog,
            "", // me hate what,
            "", // me hate here,
            "", // me hate there,
            "", // me hate yes,
            "" // me hate no,
        ],[ // flower
            ,,,,,,,,, // Doesn't Exist
            "", // me flower flower,
            "", // me flower rabbit,
            "", // me flower lizard,
            "", // me flower eagle,
            "", // me flower frog,
            "", // me flower what,
            "", // me flower here,
            "", // me flower there,
            "", // me flower yes,
            "" // me flower no,
        ],[ // rabbit
            ,,,,,,,,,, // Doesn't Exist
            "", // me rabbit rabbit,
            "", // me rabbit lizard,
            "", // me rabbit eagle,
            "", // me rabbit frog,
            "", // me rabbit what,
            "", // me rabbit here,
            "", // me rabbit there,
            "", // me rabbit yes,
            "" // me rabbit no,
        ],[ // lizard
            ,,,,,,,,,,, // Doesn't Exist
            "", // me lizard lizard,
            "", // me lizard eagle,
            "", // me lizard frog,
            "", // me lizard what,
            "", // me lizard here,
            "", // me lizard there,
            "", // me lizard yes,
            "" // me lizard no,
        ],[ // eagle
            ,,,,,,,,,,,, // Doesn't Exist
            "", // me eagle eagle,
            "", // me eagle frog,
            "", // me eagle what,
            "", // me eagle here,
            "", // me eagle there,
            "", // me eagle yes,
            "" // me eagle no,
        ],[ // frog
            ,,,,,,,,,,,,, // Doesn't Exist
            "", // me frog frog,
            "", // me frog what,
            "", // me frog here,
            "", // me frog there,
            "", // me frog yes,
            "" // me frog no,                    
        ],[ // what
            ,,,,,,,,,,,,,, // Doesn't Exist
            "", // me what what,
            "", // me what here,
            "", // me what there,
            "", // me what yes,
            "" // me what no,                    
        ],[ // here
            ,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me here here,
            "", // me here there,
            "", // me here yes,
            "" // me here no,
        ],[ // there
            ,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me there there,
            "", // me there yes,
            "" // me there no,
        ],[ // yes
            ,,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me yes yes,
            "" // me yes no,
        ],[ // no
            ,,,,,,,,,,,,,,,,,, // Doesn't Exist
            "" // me no no,
        ]
    ],[ // you
        [],[],[ // you
            ,, // Doesn't Exist
            "", // you you you,
            "", // you you have,
            "", // you you want,
            "", // you you give,
            "", // you you freedom,
            "", // you you love,
            "", // you you hate,
            "", // you you flower,
            "", // you you rabbit,
            "", // you you lizard,
            "", // you you eagle,
            "", // you you frog,
            "", // you you what,
            "", // you you here,
            "", // you you there,
            "", // you you yes,
            "" // you you no,
        ],[ // have
            ,,, // Doesn't Exist
            "", // me have have,
            "", // me have want,
            "", // me have give,
            "", // me have freedom,
            "", // me have love,
            "", // me have hate,
            "", // me have flower,
            "", // me have rabbit,
            "", // me have lizard,
            "", // me have eagle,
            "", // me have frog,
            "", // me have what,
            "", // me have here,
            "", // me have there,
            "", // me have yes,
            "" // me have no,
        ],[ // want
            ,,,, // Doesn't Exist
            "", // me want want,
            "", // me want give,
            "", // me want freedom,
            "", // me want love,
            "", // me want hate,
            "", // me want flower,
            "", // me want rabbit,
            "", // me want lizard,
            "", // me want eagle,
            "", // me want frog,
            "", // me want what,
            "", // me want here,
            "", // me want there,
            "", // me want yes,
            "" // me want no,                    
        ],[ // give
            ,,,,, // Doesn't Exist
            "", // me give give,
            "", // me give freedom,
            "", // me give love,
            "", // me give hate,
            "", // me give flower,
            "", // me give rabbit,
            "", // me give lizard,
            "", // me give eagle,
            "", // me give frog,
            "", // me give what,
            "", // me give here,
            "", // me give there,
            "", // me give yes,
            "" // me give no,                  
        ],[ // freedom
            ,,,,,, // Doesn't Exist
            "", // me freedom freedom,
            "", // me freedom love,
            "", // me freedom hate,
            "", // me freedom flower,
            "", // me freedom rabbit,
            "", // me freedom lizard,
            "", // me freedom eagle,
            "", // me freedom frog,
            "", // me freedom what,
            "", // me freedom here,
            "", // me freedom there,
            "", // me freedom yes,
            "" // me freedom no,
        ],[ // love
            ,,,,,,, // Doesn't Exist
            "", // me love love,
            "", // me love hate,
            "", // me love flower,
            "", // me love rabbit,
            "", // me love lizard,
            "", // me love eagle,
            "", // me love frog,
            "", // me love what,
            "", // me love here,
            "", // me love there,
            "", // me love yes,
            "" // me love no,
        ],[ // hate
            ,,,,,,,, // Doesn't Exist
            "", // me hate hate,
            "", // me hate flower,
            "", // me hate rabbit,
            "", // me hate lizard,
            "", // me hate eagle,
            "", // me hate frog,
            "", // me hate what,
            "", // me hate here,
            "", // me hate there,
            "", // me hate yes,
            "" // me hate no,
        ],[ // flower
            ,,,,,,,,, // Doesn't Exist
            "", // me flower flower,
            "", // me flower rabbit,
            "", // me flower lizard,
            "", // me flower eagle,
            "", // me flower frog,
            "", // me flower what,
            "", // me flower here,
            "", // me flower there,
            "", // me flower yes,
            "" // me flower no,
        ],[ // rabbit
            ,,,,,,,,,, // Doesn't Exist
            "", // me rabbit rabbit,
            "", // me rabbit lizard,
            "", // me rabbit eagle,
            "", // me rabbit frog,
            "", // me rabbit what,
            "", // me rabbit here,
            "", // me rabbit there,
            "", // me rabbit yes,
            "" // me rabbit no,
        ],[ // lizard
            ,,,,,,,,,,, // Doesn't Exist
            "", // me lizard lizard,
            "", // me lizard eagle,
            "", // me lizard frog,
            "", // me lizard what,
            "", // me lizard here,
            "", // me lizard there,
            "", // me lizard yes,
            "" // me lizard no,
        ],[ // eagle
            ,,,,,,,,,,,, // Doesn't Exist
            "", // me eagle eagle,
            "", // me eagle frog,
            "", // me eagle what,
            "", // me eagle here,
            "", // me eagle there,
            "", // me eagle yes,
            "" // me eagle no,
        ],[ // frog
            ,,,,,,,,,,,,, // Doesn't Exist
            "", // me frog frog,
            "", // me frog what,
            "", // me frog here,
            "", // me frog there,
            "", // me frog yes,
            "" // me frog no,                    
        ],[ // what
            ,,,,,,,,,,,,,, // Doesn't Exist
            "", // me what what,
            "", // me what here,
            "", // me what there,
            "", // me what yes,
            "" // me what no,                    
        ],[ // here
            ,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me here here,
            "", // me here there,
            "", // me here yes,
            "" // me here no,
        ],[ // there
            ,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me there there,
            "", // me there yes,
            "" // me there no,
        ],[ // yes
            ,,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me yes yes,
            "" // me yes no,
        ],[ // no
            ,,,,,,,,,,,,,,,,,, // Doesn't Exist
            "" // me no no,
        ]
    ],[ // have
        [],[],[],[ // have
            ,,, // Doesn't Exist
            "", // me have have,
            "", // me have want,
            "", // me have give,
            "", // me have freedom,
            "", // me have love,
            "", // me have hate,
            "", // me have flower,
            "", // me have rabbit,
            "", // me have lizard,
            "", // me have eagle,
            "", // me have frog,
            "", // me have what,
            "", // me have here,
            "", // me have there,
            "", // me have yes,
            "" // me have no,
        ],[ // want
            ,,,, // Doesn't Exist
            "", // me want want,
            "", // me want give,
            "", // me want freedom,
            "", // me want love,
            "", // me want hate,
            "", // me want flower,
            "", // me want rabbit,
            "", // me want lizard,
            "", // me want eagle,
            "", // me want frog,
            "", // me want what,
            "", // me want here,
            "", // me want there,
            "", // me want yes,
            "" // me want no,                    
        ],[ // give
            ,,,,, // Doesn't Exist
            "", // me give give,
            "", // me give freedom,
            "", // me give love,
            "", // me give hate,
            "", // me give flower,
            "", // me give rabbit,
            "", // me give lizard,
            "", // me give eagle,
            "", // me give frog,
            "", // me give what,
            "", // me give here,
            "", // me give there,
            "", // me give yes,
            "" // me give no,                  
        ],[ // freedom
            ,,,,,, // Doesn't Exist
            "", // me freedom freedom,
            "", // me freedom love,
            "", // me freedom hate,
            "", // me freedom flower,
            "", // me freedom rabbit,
            "", // me freedom lizard,
            "", // me freedom eagle,
            "", // me freedom frog,
            "", // me freedom what,
            "", // me freedom here,
            "", // me freedom there,
            "", // me freedom yes,
            "" // me freedom no,
        ],[ // love
            ,,,,,,, // Doesn't Exist
            "", // me love love,
            "", // me love hate,
            "", // me love flower,
            "", // me love rabbit,
            "", // me love lizard,
            "", // me love eagle,
            "", // me love frog,
            "", // me love what,
            "", // me love here,
            "", // me love there,
            "", // me love yes,
            "" // me love no,
        ],[ // hate
            ,,,,,,,, // Doesn't Exist
            "", // me hate hate,
            "", // me hate flower,
            "", // me hate rabbit,
            "", // me hate lizard,
            "", // me hate eagle,
            "", // me hate frog,
            "", // me hate what,
            "", // me hate here,
            "", // me hate there,
            "", // me hate yes,
            "" // me hate no,
        ],[ // flower
            ,,,,,,,,, // Doesn't Exist
            "", // me flower flower,
            "", // me flower rabbit,
            "", // me flower lizard,
            "", // me flower eagle,
            "", // me flower frog,
            "", // me flower what,
            "", // me flower here,
            "", // me flower there,
            "", // me flower yes,
            "" // me flower no,
        ],[ // rabbit
            ,,,,,,,,,, // Doesn't Exist
            "", // me rabbit rabbit,
            "", // me rabbit lizard,
            "", // me rabbit eagle,
            "", // me rabbit frog,
            "", // me rabbit what,
            "", // me rabbit here,
            "", // me rabbit there,
            "", // me rabbit yes,
            "" // me rabbit no,
        ],[ // lizard
            ,,,,,,,,,,, // Doesn't Exist
            "", // me lizard lizard,
            "", // me lizard eagle,
            "", // me lizard frog,
            "", // me lizard what,
            "", // me lizard here,
            "", // me lizard there,
            "", // me lizard yes,
            "" // me lizard no,
        ],[ // eagle
            ,,,,,,,,,,,, // Doesn't Exist
            "", // me eagle eagle,
            "", // me eagle frog,
            "", // me eagle what,
            "", // me eagle here,
            "", // me eagle there,
            "", // me eagle yes,
            "" // me eagle no,
        ],[ // frog
            ,,,,,,,,,,,,, // Doesn't Exist
            "", // me frog frog,
            "", // me frog what,
            "", // me frog here,
            "", // me frog there,
            "", // me frog yes,
            "" // me frog no,                    
        ],[ // what
            ,,,,,,,,,,,,,, // Doesn't Exist
            "", // me what what,
            "", // me what here,
            "", // me what there,
            "", // me what yes,
            "" // me what no,                    
        ],[ // here
            ,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me here here,
            "", // me here there,
            "", // me here yes,
            "" // me here no,
        ],[ // there
            ,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me there there,
            "", // me there yes,
            "" // me there no,
        ],[ // yes
            ,,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me yes yes,
            "" // me yes no,
        ],[ // no
            ,,,,,,,,,,,,,,,,,, // Doesn't Exist
            "" // me no no,
        ]
    ],[ // want
        [],[],[],[],[ // want
            ,,,, // Doesn't Exist
            "", // me want want,
            "", // me want give,
            "", // me want freedom,
            "", // me want love,
            "", // me want hate,
            "", // me want flower,
            "", // me want rabbit,
            "", // me want lizard,
            "", // me want eagle,
            "", // me want frog,
            "", // me want what,
            "", // me want here,
            "", // me want there,
            "", // me want yes,
            "" // me want no,                    
        ],[ // give
            ,,,,, // Doesn't Exist
            "", // me give give,
            "", // me give freedom,
            "", // me give love,
            "", // me give hate,
            "", // me give flower,
            "", // me give rabbit,
            "", // me give lizard,
            "", // me give eagle,
            "", // me give frog,
            "", // me give what,
            "", // me give here,
            "", // me give there,
            "", // me give yes,
            "" // me give no,                  
        ],[ // freedom
            ,,,,,, // Doesn't Exist
            "", // me freedom freedom,
            "", // me freedom love,
            "", // me freedom hate,
            "", // me freedom flower,
            "", // me freedom rabbit,
            "", // me freedom lizard,
            "", // me freedom eagle,
            "", // me freedom frog,
            "", // me freedom what,
            "", // me freedom here,
            "", // me freedom there,
            "", // me freedom yes,
            "" // me freedom no,
        ],[ // love
            ,,,,,,, // Doesn't Exist
            "", // me love love,
            "", // me love hate,
            "", // me love flower,
            "", // me love rabbit,
            "", // me love lizard,
            "", // me love eagle,
            "", // me love frog,
            "", // me love what,
            "", // me love here,
            "", // me love there,
            "", // me love yes,
            "" // me love no,
        ],[ // hate
            ,,,,,,,, // Doesn't Exist
            "", // me hate hate,
            "", // me hate flower,
            "", // me hate rabbit,
            "", // me hate lizard,
            "", // me hate eagle,
            "", // me hate frog,
            "", // me hate what,
            "", // me hate here,
            "", // me hate there,
            "", // me hate yes,
            "" // me hate no,
        ],[ // flower
            ,,,,,,,,, // Doesn't Exist
            "", // me flower flower,
            "", // me flower rabbit,
            "", // me flower lizard,
            "", // me flower eagle,
            "", // me flower frog,
            "", // me flower what,
            "", // me flower here,
            "", // me flower there,
            "", // me flower yes,
            "" // me flower no,
        ],[ // rabbit
            ,,,,,,,,,, // Doesn't Exist
            "", // me rabbit rabbit,
            "", // me rabbit lizard,
            "", // me rabbit eagle,
            "", // me rabbit frog,
            "", // me rabbit what,
            "", // me rabbit here,
            "", // me rabbit there,
            "", // me rabbit yes,
            "" // me rabbit no,
        ],[ // lizard
            ,,,,,,,,,,, // Doesn't Exist
            "", // me lizard lizard,
            "", // me lizard eagle,
            "", // me lizard frog,
            "", // me lizard what,
            "", // me lizard here,
            "", // me lizard there,
            "", // me lizard yes,
            "" // me lizard no,
        ],[ // eagle
            ,,,,,,,,,,,, // Doesn't Exist
            "", // me eagle eagle,
            "", // me eagle frog,
            "", // me eagle what,
            "", // me eagle here,
            "", // me eagle there,
            "", // me eagle yes,
            "" // me eagle no,
        ],[ // frog
            ,,,,,,,,,,,,, // Doesn't Exist
            "", // me frog frog,
            "", // me frog what,
            "", // me frog here,
            "", // me frog there,
            "", // me frog yes,
            "" // me frog no,                    
        ],[ // what
            ,,,,,,,,,,,,,, // Doesn't Exist
            "", // me what what,
            "", // me what here,
            "", // me what there,
            "", // me what yes,
            "" // me what no,                    
        ],[ // here
            ,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me here here,
            "", // me here there,
            "", // me here yes,
            "" // me here no,
        ],[ // there
            ,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me there there,
            "", // me there yes,
            "" // me there no,
        ],[ // yes
            ,,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me yes yes,
            "" // me yes no,
        ],[ // no
            ,,,,,,,,,,,,,,,,,, // Doesn't Exist
            "" // me no no,
        ]
    ],[ // give
        [],[],[],[],[],[ // give
            ,,,,, // Doesn't Exist
            "", // me give give,
            "", // me give freedom,
            "", // me give love,
            "", // me give hate,
            "", // me give flower,
            "", // me give rabbit,
            "", // me give lizard,
            "", // me give eagle,
            "", // me give frog,
            "", // me give what,
            "", // me give here,
            "", // me give there,
            "", // me give yes,
            "" // me give no,                  
        ],[ // freedom
            ,,,,,, // Doesn't Exist
            "", // me freedom freedom,
            "", // me freedom love,
            "", // me freedom hate,
            "", // me freedom flower,
            "", // me freedom rabbit,
            "", // me freedom lizard,
            "", // me freedom eagle,
            "", // me freedom frog,
            "", // me freedom what,
            "", // me freedom here,
            "", // me freedom there,
            "", // me freedom yes,
            "" // me freedom no,
        ],[ // love
            ,,,,,,, // Doesn't Exist
            "", // me love love,
            "", // me love hate,
            "", // me love flower,
            "", // me love rabbit,
            "", // me love lizard,
            "", // me love eagle,
            "", // me love frog,
            "", // me love what,
            "", // me love here,
            "", // me love there,
            "", // me love yes,
            "" // me love no,
        ],[ // hate
            ,,,,,,,, // Doesn't Exist
            "", // me hate hate,
            "", // me hate flower,
            "", // me hate rabbit,
            "", // me hate lizard,
            "", // me hate eagle,
            "", // me hate frog,
            "", // me hate what,
            "", // me hate here,
            "", // me hate there,
            "", // me hate yes,
            "" // me hate no,
        ],[ // flower
            ,,,,,,,,, // Doesn't Exist
            "", // me flower flower,
            "", // me flower rabbit,
            "", // me flower lizard,
            "", // me flower eagle,
            "", // me flower frog,
            "", // me flower what,
            "", // me flower here,
            "", // me flower there,
            "", // me flower yes,
            "" // me flower no,
        ],[ // rabbit
            ,,,,,,,,,, // Doesn't Exist
            "", // me rabbit rabbit,
            "", // me rabbit lizard,
            "", // me rabbit eagle,
            "", // me rabbit frog,
            "", // me rabbit what,
            "", // me rabbit here,
            "", // me rabbit there,
            "", // me rabbit yes,
            "" // me rabbit no,
        ],[ // lizard
            ,,,,,,,,,,, // Doesn't Exist
            "", // me lizard lizard,
            "", // me lizard eagle,
            "", // me lizard frog,
            "", // me lizard what,
            "", // me lizard here,
            "", // me lizard there,
            "", // me lizard yes,
            "" // me lizard no,
        ],[ // eagle
            ,,,,,,,,,,,, // Doesn't Exist
            "", // me eagle eagle,
            "", // me eagle frog,
            "", // me eagle what,
            "", // me eagle here,
            "", // me eagle there,
            "", // me eagle yes,
            "" // me eagle no,
        ],[ // frog
            ,,,,,,,,,,,,, // Doesn't Exist
            "", // me frog frog,
            "", // me frog what,
            "", // me frog here,
            "", // me frog there,
            "", // me frog yes,
            "" // me frog no,                    
        ],[ // what
            ,,,,,,,,,,,,,, // Doesn't Exist
            "", // me what what,
            "", // me what here,
            "", // me what there,
            "", // me what yes,
            "" // me what no,                    
        ],[ // here
            ,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me here here,
            "", // me here there,
            "", // me here yes,
            "" // me here no,
        ],[ // there
            ,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me there there,
            "", // me there yes,
            "" // me there no,
        ],[ // yes
            ,,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me yes yes,
            "" // me yes no,
        ],[ // no
            ,,,,,,,,,,,,,,,,,, // Doesn't Exist
            "" // me no no,
        ]
    ],[ // freedom
        [],[],[],[],[],[],[ // freedom
            ,,,,,, // Doesn't Exist
            "", // me freedom freedom,
            "", // me freedom love,
            "", // me freedom hate,
            "", // me freedom flower,
            "", // me freedom rabbit,
            "", // me freedom lizard,
            "", // me freedom eagle,
            "", // me freedom frog,
            "", // me freedom what,
            "", // me freedom here,
            "", // me freedom there,
            "", // me freedom yes,
            "" // me freedom no,
        ],[ // love
            ,,,,,,, // Doesn't Exist
            "", // me love love,
            "", // me love hate,
            "", // me love flower,
            "", // me love rabbit,
            "", // me love lizard,
            "", // me love eagle,
            "", // me love frog,
            "", // me love what,
            "", // me love here,
            "", // me love there,
            "", // me love yes,
            "" // me love no,
        ],[ // hate
            ,,,,,,,, // Doesn't Exist
            "", // me hate hate,
            "", // me hate flower,
            "", // me hate rabbit,
            "", // me hate lizard,
            "", // me hate eagle,
            "", // me hate frog,
            "", // me hate what,
            "", // me hate here,
            "", // me hate there,
            "", // me hate yes,
            "" // me hate no,
        ],[ // flower
            ,,,,,,,,, // Doesn't Exist
            "", // me flower flower,
            "", // me flower rabbit,
            "", // me flower lizard,
            "", // me flower eagle,
            "", // me flower frog,
            "", // me flower what,
            "", // me flower here,
            "", // me flower there,
            "", // me flower yes,
            "" // me flower no,
        ],[ // rabbit
            ,,,,,,,,,, // Doesn't Exist
            "", // me rabbit rabbit,
            "", // me rabbit lizard,
            "", // me rabbit eagle,
            "", // me rabbit frog,
            "", // me rabbit what,
            "", // me rabbit here,
            "", // me rabbit there,
            "", // me rabbit yes,
            "" // me rabbit no,
        ],[ // lizard
            ,,,,,,,,,,, // Doesn't Exist
            "", // me lizard lizard,
            "", // me lizard eagle,
            "", // me lizard frog,
            "", // me lizard what,
            "", // me lizard here,
            "", // me lizard there,
            "", // me lizard yes,
            "" // me lizard no,
        ],[ // eagle
            ,,,,,,,,,,,, // Doesn't Exist
            "", // me eagle eagle,
            "", // me eagle frog,
            "", // me eagle what,
            "", // me eagle here,
            "", // me eagle there,
            "", // me eagle yes,
            "" // me eagle no,
        ],[ // frog
            ,,,,,,,,,,,,, // Doesn't Exist
            "", // me frog frog,
            "", // me frog what,
            "", // me frog here,
            "", // me frog there,
            "", // me frog yes,
            "" // me frog no,                    
        ],[ // what
            ,,,,,,,,,,,,,, // Doesn't Exist
            "", // me what what,
            "", // me what here,
            "", // me what there,
            "", // me what yes,
            "" // me what no,                    
        ],[ // here
            ,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me here here,
            "", // me here there,
            "", // me here yes,
            "" // me here no,
        ],[ // there
            ,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me there there,
            "", // me there yes,
            "" // me there no,
        ],[ // yes
            ,,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me yes yes,
            "" // me yes no,
        ],[ // no
            ,,,,,,,,,,,,,,,,,, // Doesn't Exist
            "" // me no no,
        ]
    ],[ // love
        [],[],[],[],[],[],[],[ // love
            ,,,,,,, // Doesn't Exist
            "", // me love love,
            "", // me love hate,
            "", // me love flower,
            "", // me love rabbit,
            "", // me love lizard,
            "", // me love eagle,
            "", // me love frog,
            "", // me love what,
            "", // me love here,
            "", // me love there,
            "", // me love yes,
            "" // me love no,
        ],[ // hate
            ,,,,,,,, // Doesn't Exist
            "", // me hate hate,
            "", // me hate flower,
            "", // me hate rabbit,
            "", // me hate lizard,
            "", // me hate eagle,
            "", // me hate frog,
            "", // me hate what,
            "", // me hate here,
            "", // me hate there,
            "", // me hate yes,
            "" // me hate no,
        ],[ // flower
            ,,,,,,,,, // Doesn't Exist
            "", // me flower flower,
            "", // me flower rabbit,
            "", // me flower lizard,
            "", // me flower eagle,
            "", // me flower frog,
            "", // me flower what,
            "", // me flower here,
            "", // me flower there,
            "", // me flower yes,
            "" // me flower no,
        ],[ // rabbit
            ,,,,,,,,,, // Doesn't Exist
            "", // me rabbit rabbit,
            "", // me rabbit lizard,
            "", // me rabbit eagle,
            "", // me rabbit frog,
            "", // me rabbit what,
            "", // me rabbit here,
            "", // me rabbit there,
            "", // me rabbit yes,
            "" // me rabbit no,
        ],[ // lizard
            ,,,,,,,,,,, // Doesn't Exist
            "", // me lizard lizard,
            "", // me lizard eagle,
            "", // me lizard frog,
            "", // me lizard what,
            "", // me lizard here,
            "", // me lizard there,
            "", // me lizard yes,
            "" // me lizard no,
        ],[ // eagle
            ,,,,,,,,,,,, // Doesn't Exist
            "", // me eagle eagle,
            "", // me eagle frog,
            "", // me eagle what,
            "", // me eagle here,
            "", // me eagle there,
            "", // me eagle yes,
            "" // me eagle no,
        ],[ // frog
            ,,,,,,,,,,,,, // Doesn't Exist
            "", // me frog frog,
            "", // me frog what,
            "", // me frog here,
            "", // me frog there,
            "", // me frog yes,
            "" // me frog no,                    
        ],[ // what
            ,,,,,,,,,,,,,, // Doesn't Exist
            "", // me what what,
            "", // me what here,
            "", // me what there,
            "", // me what yes,
            "" // me what no,                    
        ],[ // here
            ,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me here here,
            "", // me here there,
            "", // me here yes,
            "" // me here no,
        ],[ // there
            ,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me there there,
            "", // me there yes,
            "" // me there no,
        ],[ // yes
            ,,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me yes yes,
            "" // me yes no,
        ],[ // no
            ,,,,,,,,,,,,,,,,,, // Doesn't Exist
            "" // me no no,
        ]
    ],[ // hate
        [],[],[],[],[],[],[],[],[ // hate
            ,,,,,,,, // Doesn't Exist
            "", // me hate hate,
            "", // me hate flower,
            "", // me hate rabbit,
            "", // me hate lizard,
            "", // me hate eagle,
            "", // me hate frog,
            "", // me hate what,
            "", // me hate here,
            "", // me hate there,
            "", // me hate yes,
            "" // me hate no,
        ],[ // flower
            ,,,,,,,,, // Doesn't Exist
            "", // me flower flower,
            "", // me flower rabbit,
            "", // me flower lizard,
            "", // me flower eagle,
            "", // me flower frog,
            "", // me flower what,
            "", // me flower here,
            "", // me flower there,
            "", // me flower yes,
            "" // me flower no,
        ],[ // rabbit
            ,,,,,,,,,, // Doesn't Exist
            "", // me rabbit rabbit,
            "", // me rabbit lizard,
            "", // me rabbit eagle,
            "", // me rabbit frog,
            "", // me rabbit what,
            "", // me rabbit here,
            "", // me rabbit there,
            "", // me rabbit yes,
            "" // me rabbit no,
        ],[ // lizard
            ,,,,,,,,,,, // Doesn't Exist
            "", // me lizard lizard,
            "", // me lizard eagle,
            "", // me lizard frog,
            "", // me lizard what,
            "", // me lizard here,
            "", // me lizard there,
            "", // me lizard yes,
            "" // me lizard no,
        ],[ // eagle
            ,,,,,,,,,,,, // Doesn't Exist
            "", // me eagle eagle,
            "", // me eagle frog,
            "", // me eagle what,
            "", // me eagle here,
            "", // me eagle there,
            "", // me eagle yes,
            "" // me eagle no,
        ],[ // frog
            ,,,,,,,,,,,,, // Doesn't Exist
            "", // me frog frog,
            "", // me frog what,
            "", // me frog here,
            "", // me frog there,
            "", // me frog yes,
            "" // me frog no,                    
        ],[ // what
            ,,,,,,,,,,,,,, // Doesn't Exist
            "", // me what what,
            "", // me what here,
            "", // me what there,
            "", // me what yes,
            "" // me what no,                    
        ],[ // here
            ,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me here here,
            "", // me here there,
            "", // me here yes,
            "" // me here no,
        ],[ // there
            ,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me there there,
            "", // me there yes,
            "" // me there no,
        ],[ // yes
            ,,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me yes yes,
            "" // me yes no,
        ],[ // no
            ,,,,,,,,,,,,,,,,,, // Doesn't Exist
            "" // me no no,
        ]
    ],[ // flower
        [],[],[],[],[],[],[],[],[],[ // flower
            ,,,,,,,,, // Doesn't Exist
            "", // me flower flower,
            "", // me flower rabbit,
            "", // me flower lizard,
            "", // me flower eagle,
            "", // me flower frog,
            "", // me flower what,
            "", // me flower here,
            "", // me flower there,
            "", // me flower yes,
            "" // me flower no,
        ],[ // rabbit
            ,,,,,,,,,, // Doesn't Exist
            "", // me rabbit rabbit,
            "", // me rabbit lizard,
            "", // me rabbit eagle,
            "", // me rabbit frog,
            "", // me rabbit what,
            "", // me rabbit here,
            "", // me rabbit there,
            "", // me rabbit yes,
            "" // me rabbit no,
        ],[ // lizard
            ,,,,,,,,,,, // Doesn't Exist
            "", // me lizard lizard,
            "", // me lizard eagle,
            "", // me lizard frog,
            "", // me lizard what,
            "", // me lizard here,
            "", // me lizard there,
            "", // me lizard yes,
            "" // me lizard no,
        ],[ // eagle
            ,,,,,,,,,,,, // Doesn't Exist
            "", // me eagle eagle,
            "", // me eagle frog,
            "", // me eagle what,
            "", // me eagle here,
            "", // me eagle there,
            "", // me eagle yes,
            "" // me eagle no,
        ],[ // frog
            ,,,,,,,,,,,,, // Doesn't Exist
            "", // me frog frog,
            "", // me frog what,
            "", // me frog here,
            "", // me frog there,
            "", // me frog yes,
            "" // me frog no,                    
        ],[ // what
            ,,,,,,,,,,,,,, // Doesn't Exist
            "", // me what what,
            "", // me what here,
            "", // me what there,
            "", // me what yes,
            "" // me what no,                    
        ],[ // here
            ,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me here here,
            "", // me here there,
            "", // me here yes,
            "" // me here no,
        ],[ // there
            ,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me there there,
            "", // me there yes,
            "" // me there no,
        ],[ // yes
            ,,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me yes yes,
            "" // me yes no,
        ],[ // no
            ,,,,,,,,,,,,,,,,,, // Doesn't Exist
            "" // me no no,
        ]
    ],[ // rabbit
        [],[],[],[],[],[],[],[],[],[],[ // rabbit
            ,,,,,,,,,, // Doesn't Exist
            "", // me rabbit rabbit,
            "", // me rabbit lizard,
            "", // me rabbit eagle,
            "", // me rabbit frog,
            "", // me rabbit what,
            "", // me rabbit here,
            "", // me rabbit there,
            "", // me rabbit yes,
            "" // me rabbit no,
        ],[ // lizard
            ,,,,,,,,,,, // Doesn't Exist
            "", // me lizard lizard,
            "", // me lizard eagle,
            "", // me lizard frog,
            "", // me lizard what,
            "", // me lizard here,
            "", // me lizard there,
            "", // me lizard yes,
            "" // me lizard no,
        ],[ // eagle
            ,,,,,,,,,,,, // Doesn't Exist
            "", // me eagle eagle,
            "", // me eagle frog,
            "", // me eagle what,
            "", // me eagle here,
            "", // me eagle there,
            "", // me eagle yes,
            "" // me eagle no,
        ],[ // frog
            ,,,,,,,,,,,,, // Doesn't Exist
            "", // me frog frog,
            "", // me frog what,
            "", // me frog here,
            "", // me frog there,
            "", // me frog yes,
            "" // me frog no,                    
        ],[ // what
            ,,,,,,,,,,,,,, // Doesn't Exist
            "", // me what what,
            "", // me what here,
            "", // me what there,
            "", // me what yes,
            "" // me what no,                    
        ],[ // here
            ,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me here here,
            "", // me here there,
            "", // me here yes,
            "" // me here no,
        ],[ // there
            ,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me there there,
            "", // me there yes,
            "" // me there no,
        ],[ // yes
            ,,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me yes yes,
            "" // me yes no,
        ],[ // no
            ,,,,,,,,,,,,,,,,,, // Doesn't Exist
            "" // me no no,
        ]
    ],[ // lizard
        [],[],[],[],[],[],[],[],[],[],[],[ // lizard
            ,,,,,,,,,,, // Doesn't Exist
            "", // me lizard lizard,
            "", // me lizard eagle,
            "", // me lizard frog,
            "", // me lizard what,
            "", // me lizard here,
            "", // me lizard there,
            "", // me lizard yes,
            "" // me lizard no,
        ],[ // eagle
            ,,,,,,,,,,,, // Doesn't Exist
            "", // me eagle eagle,
            "", // me eagle frog,
            "", // me eagle what,
            "", // me eagle here,
            "", // me eagle there,
            "", // me eagle yes,
            "" // me eagle no,
        ],[ // frog
            ,,,,,,,,,,,,, // Doesn't Exist
            "", // me frog frog,
            "", // me frog what,
            "", // me frog here,
            "", // me frog there,
            "", // me frog yes,
            "" // me frog no,                    
        ],[ // what
            ,,,,,,,,,,,,,, // Doesn't Exist
            "", // me what what,
            "", // me what here,
            "", // me what there,
            "", // me what yes,
            "" // me what no,                    
        ],[ // here
            ,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me here here,
            "", // me here there,
            "", // me here yes,
            "" // me here no,
        ],[ // there
            ,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me there there,
            "", // me there yes,
            "" // me there no,
        ],[ // yes
            ,,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me yes yes,
            "" // me yes no,
        ],[ // no
            ,,,,,,,,,,,,,,,,,, // Doesn't Exist
            "" // me no no,
        ]
    ],[ // eagle
        [],[],[],[],[],[],[],[],[],[],[],[],[ // eagle
            ,,,,,,,,,,,, // Doesn't Exist
            "", // me eagle eagle,
            "", // me eagle frog,
            "", // me eagle what,
            "", // me eagle here,
            "", // me eagle there,
            "", // me eagle yes,
            "" // me eagle no,
        ],[ // frog
            ,,,,,,,,,,,,, // Doesn't Exist
            "", // me frog frog,
            "", // me frog what,
            "", // me frog here,
            "", // me frog there,
            "", // me frog yes,
            "" // me frog no,                    
        ],[ // what
            ,,,,,,,,,,,,,, // Doesn't Exist
            "", // me what what,
            "", // me what here,
            "", // me what there,
            "", // me what yes,
            "" // me what no,                    
        ],[ // here
            ,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me here here,
            "", // me here there,
            "", // me here yes,
            "" // me here no,
        ],[ // there
            ,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me there there,
            "", // me there yes,
            "" // me there no,
        ],[ // yes
            ,,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me yes yes,
            "" // me yes no,
        ],[ // no
            ,,,,,,,,,,,,,,,,,, // Doesn't Exist
            "" // me no no,
        ]
    ],[ // frog
        [],[],[],[],[],[],[],[],[],[],[],[],[],[ // frog
            ,,,,,,,,,,,,, // Doesn't Exist
            "", // me frog frog,
            "", // me frog what,
            "", // me frog here,
            "", // me frog there,
            "", // me frog yes,
            "" // me frog no,                    
        ],[ // what
            ,,,,,,,,,,,,,, // Doesn't Exist
            "", // me what what,
            "", // me what here,
            "", // me what there,
            "", // me what yes,
            "" // me what no,                    
        ],[ // here
            ,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me here here,
            "", // me here there,
            "", // me here yes,
            "" // me here no,
        ],[ // there
            ,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me there there,
            "", // me there yes,
            "" // me there no,
        ],[ // yes
            ,,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me yes yes,
            "" // me yes no,
        ],[ // no
            ,,,,,,,,,,,,,,,,,, // Doesn't Exist
            "" // me no no,
        ]
    ],[ // what
        [],[],[],[],[],[],[],[],[],[],[],[],[],[],[ // what
            ,,,,,,,,,,,,,, // Doesn't Exist
            "", // me what what,
            "", // me what here,
            "", // me what there,
            "", // me what yes,
            "" // me what no,                    
        ],[ // here
            ,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me here here,
            "", // me here there,
            "", // me here yes,
            "" // me here no,
        ],[ // there
            ,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me there there,
            "", // me there yes,
            "" // me there no,
        ],[ // yes
            ,,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me yes yes,
            "" // me yes no,
        ],[ // no
            ,,,,,,,,,,,,,,,,,, // Doesn't Exist
            "" // me no no,
        ]
    ],[ // here
        [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[ // here
            ,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me here here,
            "", // me here there,
            "", // me here yes,
            "" // me here no,
        ],[ // there
            ,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me there there,
            "", // me there yes,
            "" // me there no,
        ],[ // yes
            ,,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me yes yes,
            "" // me yes no,
        ],[ // no
            ,,,,,,,,,,,,,,,,,, // Doesn't Exist
            "" // me no no,
        ]
    ],[ // there
        [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[ // there
            ,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me there there,
            "", // me there yes,
            "" // me there no,
        ],[ // yes
            ,,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me yes yes,
            "" // me yes no,
        ],[ // no
            ,,,,,,,,,,,,,,,,,, // Doesn't Exist
            "" // me no no,
        ]
    ],[ // yes
        [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[ // yes
            ,,,,,,,,,,,,,,,,, // Doesn't Exist
            "", // me yes yes,
            "" // me yes no,
        ],[ // no
            ,,,,,,,,,,,,,,,,,, // Doesn't Exist
            "" // me no no,
        ]
    ],[ // no
        [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[ // no
            ,,,,,,,,,,,,,,,,,, // Doesn't Exist
            "" // no no no,
        ]
    ]
];