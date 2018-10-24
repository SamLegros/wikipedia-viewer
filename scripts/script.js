$(document).ready(function() {
    $(".myLuckyIcon").addClass("animated shake");

    $('#myWikiSearch').keypress(function(e){
        if (e.keyCode==13) {
            console.log("simulated click!");
            $("#myWikiButton").click();
        } // end of keyCode if statement
    }); // end of keypress function

    $("#myWikiButton").click(function() {

        var searchTerm = $("#myWikiSearch").val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?"

        $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "json",
            success: function(data) {
                // console.log(data[1][0]); // heading
                // console.log(data[2][0]); // description
                // console.log(data[3][0]); // link

                $("#myWikiOutput").html("");

                for (var i = 0; i < data[1].length; i++) {
                    $("#myWikiOutput").append("<a href=" + data[3][i] + " target='_blank'><li class='myLi'><h4>" + data[1][i] + "</h4><p class='myLiP'>" + data[2][i] + "</p></li></a>");
                } // end of for loop
            }, // end of success funtion
            error: function(errorMessage) {
                alert("Error");
            } // end of error function
        }); // end of ajax request

    }); // end of myWikiButton function

}); // end of document.ready function
