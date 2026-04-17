let userObject = {}

function onFinalSubmission() {
    const fullName = document.getElementById("name").value;
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const website = document.getElementById("webiste").value;
    const careerObjective = document.getElementById("careerObjective").value;
    const skills = document.getElementById("skills").value;
    const projects = document.getElementById("projects").value;
    const university = document.getElementById("university").value;
    const course = document.getElementById("course").value;
    const passingDate = document.getElementById("passingDate").value;
    console.log("============>", fullName, profession, email, phone, website, careerObjective, skills, projects, university, course, passingDate);

    if (!fullName || !profession || !email || !phone || !website || !careerObjective || !skills || !projects || !university || !course || !passingDate) {
        alert("Please fill all the fields");
        return false;
    }

    userObject = {
        fullName,
        profession,
        email,
        phone,
        website,
        careerObjective,
        skills,
        projects,
        university,
        course,
        passingDate
    }

    FetchTheValuesOnUI()
}

function splitTheValues(value) {
    if (!value) {
        return "";
    }
    return `<ul>` + value.split(",").map(item => `<i class="fa-solid fa-code"></i> <li>${item.trim()}</li>`).join("") + `</ul>`;
}

function FetchTheValuesOnUI() {
    document.getElementById("main-page").innerHTML = `
    <div class="text-center"> 
    <h1>${userObject.fullName}</h1>
    <small>${userObject.profession}</small>
    </div>
    <br>
    <div class="row mt-3">
        <div class="col-md-4">
            <a href="${userObject.website}"><i class="mr-3 fa fa-globe"></i>${userObject.website}</a>
        </div>
        <div class="col-md-4">
            <a><i class="mr-3 fa fa-envelope"></i>${userObject.email}</a>
        </div>
        <div class="col-md-4">
            <a><i class="mr-3 fa fa-phone"></i>${userObject.phone}</a>
        </div>
    </div>
    <hr>
    <h3>Career Objective</h3>
    <p>${userObject.careerObjective}</p>
    <hr>
    <div class="skills">
        <h3>Skills</h3>
        ${splitTheValues(userObject.skills)}
    </div>
    <hr>
    <div class="projects">
        <h3>Projects</h3>
        ${splitTheValues(userObject.projects)}
    </div>
    <hr>
    <div class="education">
        <h3>Education</h3>
        <h4>${userObject.university}</h4>
        <small>${userObject.passingDate}</small> <br>
        <p>${userObject.course}</p>
    </div>
    `;
}

