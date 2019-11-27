$(document).ready(function () {
    $("#dialog").dialog({
        title: "",
        autoOpen: false,
        modal: true,
        show: "blind",
        hide: "blind",
        closeText: "x",
        buttons: {
            OK: function () { $(this).dialog("close"); }
        }
    });
});

$(document).ready(function () {
    $("tr.dataClass").click(function () {
        var FormName = $(this).find("td.FormName").text();
        var FormDescription = $(this).find("td.FormDescription").text();

        $("#dialog").find("p.FormName").text(FormName);
        $("#dialog").find("p.FormDescription").text(FormDescription);
        $("#dialog").dialog("open");
    });
});