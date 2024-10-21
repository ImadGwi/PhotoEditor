let file = new FileReader();
file.readAsDataURL(upload.files[0]);
img.src = file.result;
