$(function() {
  console.log('sup');
  $('.drag').draggable({handle:'.toolbox-title'});
  $('.resize').resizable({
    maxHeight:500,
    maxWidth:500,
    minHeight:200,
    minWidth:100
  });
  $('.component').draggable({
    helper:'clone'
  });
  $('#main').droppable({
    activeClass: "ui-state-default",
    hoverClass: "ui-state-hover",
    accept:'.component',
    drop: function(event, ui) {
      console.log(ui.draggable);
      $('#main').append(ui.draggable.clone());
    }
  });
});