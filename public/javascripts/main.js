document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems);

  var elems2 = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems2);
});
