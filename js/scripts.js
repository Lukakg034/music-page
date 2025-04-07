document.addEventListener("DOMContentLoaded", function () {
  const videoLink = document.getElementById("video-link");
  const modelLink = document.getElementById("model-link");
  const orchestraLink = document.getElementById("orchestra-link");
  const videoSection = document.getElementById("video-section");
  const modelSection = document.getElementById("model-section");
  const orchestraSection = document.getElementById("orchestra-section");
  const orchestraImage = document.getElementsByClassName("orchestra-image");

  videoLink.addEventListener("click", function () {
    videoSection.style.display = "block";
    modelSection.style.display = "none";
    orchestraSection.style.display = "none";
  });

  modelLink.addEventListener("click", function () {
    modelSection.style.display = "block";
    videoSection.style.display = "none";
    orchestraSection.style.display = "none";
  });
  orchestraLink.addEventListener("click", function () {
    orchestraSection.style.display = "block";
    modelSection.style.display = "none";
    videoSection.style.display = "none";
  });

  // Set default section to video
  videoSection.style.display = "block";
  modelSection.style.display = "none";
  orchestraSection.style.display = "none";

  //   Array.from(orchestraImage).forEach((image) => {
  //     image.addEventListener("click", function (event) {
  //       image.style.transform = "scale(2)";
  //       image.style.transition = "transform 0.3s ease-in-out";
  //       event.stopPropagation();

  //       document.addEventListener("click", function resetScale(event) {
  //         if (!image.contains(event.target)) {
  //           image.style.transform = "scale(1)";
  //           document.removeEventListener("click", resetScale);
  //         }
  //       });
  //     });
  //   });
});
