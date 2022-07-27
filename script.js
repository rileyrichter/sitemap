const baseUrl = "https://bparker.api.stdlib.com/scrape-xml@dev/";
selectOne = document.querySelector("#pageone");
selectTwo = document.querySelector("#pagetwo");
pageList = [];
objectList = [];

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
