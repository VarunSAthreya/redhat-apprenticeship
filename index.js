function increment(x) {
    console.log(x.value);
    x.value++;
}
function decrement(x) {
    console.log(x.value);
    x.value--;
}

async function getData() {
    try {
        const json = await fetch(
            "http://universities.hipolabs.com/search?country=India"
        );
        const data = await json.json();

        const college = document.getElementById("college");
        data.forEach((element) => {
            const option = document.createElement("option");
            option.value = element.name;
            option.innerHTML = element.name;
            college.appendChild(option);
        });
    } catch (error) {
        const option = document.createElement("option");
        option.value = null;
        option.innerHTML = "Error in fetching data";
        college.appendChild(option);
    }
}

getData();

const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {};

    const firstname = document.getElementById("first-name");
    const lastname = document.getElementById("last-name");
    const email = document.getElementById("email");
    const number = document.getElementById("mobile-number");
    const location = document.getElementById("location");
    const gender = document.querySelector('input[name="gender"]:checked');
    const college = document.getElementById("college");
    const dob = document.getElementById("dob");
    const html = document.getElementById("html");
    const css = document.getElementById("css");
    const js = document.getElementById("js");

    data.firstname = firstname.value;
    data.lastname = lastname.value;
    data.email = email.value;
    data.number = number.value;
    data.location = location.value;
    data.gender = gender.value;
    data.college = college.value;
    data.dob = dob.value;
    data.html = html.value;
    data.css = css.value;
    data.js = js.value;

    console.log(data);
    alert(JSON.stringify(data));
});
