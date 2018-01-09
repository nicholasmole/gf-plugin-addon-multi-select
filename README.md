# Gravity Forms Plugin Addon Multi Select
An addon to the gravity form plugin that selects multi check boxs

###Quick Tutorial

##### Check for the checkbox with value=%VALUETOCHECK% 
##### Call Function when that checkbox is checked.

$('.checkall li:first-child input:checkbox[value="%VALUETOCHECK%"]').click(function() {

##### Repeat this in function with all checkboxs of a value

$(this).parent('li').parent('ul').find(':checkbox[value="%VALUEFORCHECKED%"]').attr('checked', this.checked);
