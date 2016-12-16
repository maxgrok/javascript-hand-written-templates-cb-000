      function addComment(){
        var bodyText = document.getElementByID("commentText").value;
        var commenter = document.getElementByID("commenterName").value;

        var commentBody = createCommentBody(bodytext);
        var commenterLabel = createCommenterLabel(commenter);
        postNewComment(commentBody, commenterLabel);
      }

      function createCommentBody(comment){
        var bodyDiv = document.createElement("div");
        var bodyPara = document.createElement('p');
        bodyPara.innerHTML = comment;
        bodyDiv.appendChild(bodyPara);
        return bodyDiv;
      }

      function createCommenterLabel(commenter){
        var commenterDiv = document.createElement("div");
        var commenterLabel = document.createElement("p");
        commenterLabel.innerHTML = "posted by:&nbsp;";
        var commenterName = document.createElement("span");
        commenterName.innerHTML = commenter;
        commenterLabel.appendChild(commenterName);
        commenterDiv.appendChild(commenterLabel);
        return commenterLabel;
      }

      function postNewComment(body, commenter){
        var commentsDiv = document.getElementByID('comments');
        var newCommentDiv = document.createElement('div');
        newCommentDiv.appendChild(body);
        newCommentDiv.appendChild(commenter);
        commentsDiv.appendChild(newCommentDiv);
      }