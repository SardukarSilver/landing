var $teamContainer = $("#anc-team");

var fillSelected = function (currentMember) {
  $teamContainer.find(".main-photo img").attr("src", currentMember.photo);
  $teamContainer.find(".member-info h3").text(currentMember.name);
  $teamContainer.find(".member-info p").text(currentMember.discription);
  $teamContainer.find(".profile-links a").attr("href", currentMember.links[0].link);
};

$.getJSON('js-resourses/team-content.json', function(data) {
    fillSelected(data.teamMembers[0]);
    $("#anc-team .team-photo img").each(function(i) {
      var $el = $(this);
      var currentMember = data.teamMembers[i+1];
      $el.attr("src", currentMember.photo);
      $el.click(function() {
        fillSelected(currentMember);
      });
    });
});
