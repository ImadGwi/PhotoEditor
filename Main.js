let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let hue_rotate = document.getElementById("hue-rotate");
let upload = document.getElementById("upload");
let download = document.getElementById("download");
let pic = document.getElementById("pic");
let reset = document.querySelector("span");
let picBox = document.getElementsByClassName("pic-box")[0];

onload = function () {
  reset.style.display = "none";
  download.style.display = "none";
  picBox.style.display = "none";
};

upload.onchange = function () {
  resetValue();
  reset.style.display = "block";
  download.style.display = "block";
  picBox.style.display = "block";

  let file = new FileReader();
  file.readAsDataURL(upload.files[0]);
  file.onload = function () {
    pic.src = file.result;
  };

  pic.onload = function () {
    canvas.width = pic.width;
    canvas.height = pic.height;
    ctx.drawImage(pic, 0, 0, canvas.width, canvas.height);
    pic.style.display = "none";
  };
};
/*
saturate.addEventListener("input", function () {
  pic.style.filter = `saturate(${saturate.value}%)`;
});

*/ //This way work if there is one filter not many

let filters = document.querySelectorAll("ul li input");

filters.forEach((filter) => {
  filter.addEventListener("input", function () {
    ctx.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hue_rotate.value}deg)
        `;
    ctx.drawImage(pic, 0, 0, canvas.width, canvas.height);
  });
});

function resetValue() {
  pic.style.filter = "none";
  saturate.value = "100";
  contrast.value = "100";
  brightness.value = "100";
  sepia.value = "0";
  grayscale.value = "0";
  blur.value = "0";
  hue_rotate.value = "0";
}

download.onclick = function () {
  download.href = canvas.toDataURL("img/png"); //deffual
};

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");