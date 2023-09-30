document.addEventListener("DOMContentLoaded", function () {
    const commentList = document.getElementById("comment-list");
    const commentForm = document.getElementById("comment-form");

    commentForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const nameInput = document.getElementById("name");
        const commentInput = document.getElementById("comment");

        const name = nameInput.value;
        const comment = commentInput.value;

        if (name && comment) {
            addComment(name, comment);
            nameInput.value = "";
            commentInput.value = "";
        }
    });

    function addComment(name, comment) {
        const commentItem = document.createElement("div");
        commentItem.classList.add("comment");
        commentItem.innerHTML = `
            <strong>${name}:</strong>
            <p>${comment}</p>
        `;
        commentList.appendChild(commentItem);
    }
});
