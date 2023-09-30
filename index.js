document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "http://your-api-url.com"; // Replace with your API URL

    // Function to fetch the list of teachers
    async function fetchTeacherList() {
        try {
            const response = await fetch(`${apiUrl}/teachers`);
            if (!response.ok) {
                throw new Error("Error fetching teacher list");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching teacher list:", error);
            return [];
        }
    }

    // Function to display the list of teachers
    function displayTeacherList(teachers) {
        const teacherList = document.getElementById("teacher-list");
        teacherList.innerHTML = "";
        teachers.forEach((teacher) => {
            const listItem = document.createElement("li");
            listItem.textContent = teacher.name;
            listItem.dataset.id = teacher.id;
            listItem.addEventListener("click", () => {
                displayTeacherDetails(teacher);
            });
            teacherList.appendChild(listItem);
        });
    }

    // Function to display teacher details
    function displayTeacherDetails(teacher) {
        const teacherName = document.querySelector("#teacher-details h2");
        const teacherImage = document.getElementById("teacher-image");
        const teacherDescription = document.getElementById("teacher-description");

        teacherName.textContent = teacher.name;
        teacherImage.src = teacher.image;
        teacherDescription.textContent = teacher.description;
    }

    // Initial setup: Fetch and display the list of teachers
    fetchTeacherList().then((teachers) => {
        displayTeacherList(teachers);
    });
});
