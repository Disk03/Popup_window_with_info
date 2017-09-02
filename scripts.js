$(document).ready(function () {

    setTimeout(function(){
        $.getJSON('http://dev.nexusmedia-ua.com/devtest/', function (response) {
            var dataFromJson = JSON.parse(JSON.stringify(response.messages[0], null, 4)),
                dataImage = $('<p style="text-align: center">Image:</p><div style="text-align: center;"><img src="' + dataFromJson.image + '" style="width: 100px; height: 100px"></div>'),
                dataName = $('<p style="text-align: center">Name:</p><h5 style="text-align: center;">' + dataFromJson.name + '</h5>'),
                dataTitle = $('<p style="text-align: center">Title:</p><h5 style="text-align: center;">' + dataFromJson.title + '</h5>'),
                dataMessage = $('<p style="text-align: center">Message:</p><h5 style="text-align: center;">' + dataFromJson.message + '</h5>'),
                body = $("body"),
                divMain = $('<div id="main_div" style=" position: fixed; bottom: 5%; right: 5%; z-index: 999999; border-radius: 25px; background-color: lightsteelblue; width: 300px; height: 500px"></div>'),
                closeOpenButton = $('<div><img id="close_open_button" src="http://images.all-free-download.com/images/graphiclarge/round_red_x_sign_4229.jpg" alt="Close/Open button" style="border-radius: 25px; position: fixed; bottom: 3%; right: 3%; width: 25px"></div>');

            divMain.append(dataTitle);
            divMain.append(dataImage);
            divMain.append(dataName);
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