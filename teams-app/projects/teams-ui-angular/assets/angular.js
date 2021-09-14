var CheckBoxElements = document.querySelectorAll(".ms-CheckBox");
for (var i = 0; i < CheckBoxElements.length; i++) {
    new fabric['CheckBox'](CheckBoxElements[i]);
}

$("body").on('click', '.dropdown-menu li', function() {
    var selText = $(this).text();
    $(this).parents('.dropdown-div').find('.btn').html(selText);
});
