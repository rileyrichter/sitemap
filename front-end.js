//runs on the front-end
//on page load, fetch the node js backend and get the sitemap links
//then, display the sitemap links in the front-end select fields
//some of this code is just to pass values to the success state of the form

const baseUrl = "https://bparker.api.stdlib.com/scrape-xml@dev/";
selectOne = document.querySelector("#pageone");
selectTwo = document.querySelector("#pagetwo");
submit = document.querySelector("#submit");
exName = document.querySelector("#exname");
exStart = document.querySelector("#exstart");
exEnd = document.querySelector("#exend");
exUrl1 = document.querySelector("#exurl1");
exUrl2 = document.querySelector("#exurl2");
experimentName = document.querySelector("#experiment-name");
experimentStart = document.querySelector("#start-date");
experimentEnd = document.querySelector("#end-date");
experimentGroupOne = document.querySelector("#pageone");
experimentGroupTwo = document.querySelector("#pagetwo");
pageList = [];
objectList = [];

window.addEventListener("load", (event) => {
  submit.addEventListener("click", passValues);
});

String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

window.addEventListener("load", (event) => {
  fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        let rip = item.replace(/(https:\/\/richmondtillwedie\.com\/)/gm, "");
        let replace = rip.replaceAll("/", ": ");
        let name = replace.replaceAll("-", " ");

        if (name === "") {
          title = "Home";
        } else {
          title = name.toProperCase();
        }

        let option = document.createElement("option");
        option.text = title;
        option.value = item;
        selectOne.appendChild(option);

        let optionTwo = document.createElement("option");
        optionTwo.text = title;
        optionTwo.value = item;
        selectTwo.appendChild(optionTwo);

        objectList.push({ page: title, url: item });
      });
    })
    .then(() => {
      console.table(objectList);
    });
});

function passValues() {
  console.log("hey");
  exName.innerText = experimentName.value;
  exStart.innerText = experimentStart.value;
  exEnd.innerText = experimentEnd.value;
  exUrl1.innerText = experimentGroupOne.value;
  exUrl2.innerText = experimentGroupTwo.value;
}
