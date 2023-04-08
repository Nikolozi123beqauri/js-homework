// fourth
let userIsAdmin = true;
let userIsModerator = false;
let userIsCommentAuthor = false;
const userCanDelete = userIsAdmin || userIsModerator || userIsCommentAuthor;
console.log(userCanDelete);