$(document).ready(function () {

    setTimeout(function(){
        $.getJSON('http://dev.nexusmedia-ua.com/devtest/', function (response) {
            var dataFromJson = JSON.parse(JSON.stringify(response.messages[0], null, 4)),
                dataImage = $('<div style="display:inline-block"><img src="' + dataFromJson.image + '" style=" border-radius: 50px; width: 50px; height: 50px"></div>'),
                dataName = $('<h5 style="text-align: left;">' + dataFromJson.name + '</h5>'),
                dataTitle = $('<span style="text-align: left;">' + dataFromJson.title + '</span>'),
                dataNameTitle = $('<div style="display:inline-block; margin-left: 5%"></div>'),
                dataImageNameTitle = $('<div style="margin-left: 5%; margin-top: 5%"></div>'),
                dataMessage = $('<h4 style="text-align: left; margin-left: 5%">' + dataFromJson.message + '</h4>'),
                body = $("body"),
                divMain = $('<div id="main_div" style=" position: fixed; bottom: 5%; right: 5%; z-index: 1000; border-radius: 25px; background-color: lightsteelblue; width: 300px; height: 250px"></div>'),
                closeOpenButton = $('<div><img id="close_open_button" src="http://images.all-free-download.com/images/graphiclarge/round_red_x_sign_4229.jpg" alt="Close/Open button" style=" z-index: 2000;border-radius: 25px; position: fixed; bottom: 4%; right: 4%; width: 25px"></div>');


            dataNameTitle.append(dataName);
            dataNameTitle.append(dataTitle);
            dataImageNameTitle.append(dataImage);
            dataImageNameTitle.append(dataNameTitle);
            divMain.append(dataImageNameTitle);
            divMain.append(dataMessage);
            body.append(closeOpenButton);
            body.append(divMain);

            $('#main_div').show();

            $('#close_open_button').click(function () {
                if ($('#close_open_button').attr('src') === 'http://images.all-free-download.com/images/graphiclarge/round_red_x_sign_4229.jpg') {
                    $('#main_div').hide();
                    $('#close_open_button').attr('src', 'http://1.bp.blogspot.com/-EQFf3X-038w/TnS2OGxA3eI/AAAAAAAAAOo/Ibi19QSdLys/s1600/ThumbsUp.jpg');
                } else {
                    $('#main_div').show();
                    $('#close_open_button').attr('src', 'http://images.all-free-download.com/images/graphiclarge/round_red_x_sign_4229.jpg');
                }
            })
        });
    }, 1000);
});