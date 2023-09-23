// document.addEventListener('DOMContentLoaded', function() {
//     var infoBtnCounter = 0;
//     var nextBtn = document.getElementById("next");
//     var prevBtn = document.getElementById("prev");
//     var infoArray = document.getElementsByClassName("info-div");
//     var progArray = document.getElementsByClassName("progress-bar");

//     // Codes for the next button in about page
//     nextBtn.addEventListener("click", () => {
//         infoBtnCounter++;
//         progArray[infoBtnCounter].style.visibility = "visible";
//         progArray[infoBtnCounter].style.animation = "3s ease-out 0s 1 exp";
//         if (infoBtnCounter <= 3) {
//             prevBtn.style.display = "inline-block";
//             for (i = 0; i < 4; i++) {
//                 if (i == infoBtnCounter)
//                     infoArray[i].style.display = "inline-block";
//                 else infoArray[i].style.display = "none";
//             }
//         }
//         if (infoBtnCounter == 3) {
//             nextBtn.style.display = "none";
//         }
//     });

//     // Codes for the prev button in about page
//     prevBtn.addEventListener("click", () => {
//         progArray[infoBtnCounter].style.visibility = "hidden";
//         infoBtnCounter--;
//         if (infoBtnCounter <= 3) {
//             nextBtn.style.display = "inline-block";
//             for (i = 0; i < 4; i++) {
//                 if (i == infoBtnCounter)
//                     infoArray[i].style.display = "inline-block";
//                 else infoArray[i].style.display = "none";
//             }
//         }
//         if (infoBtnCounter == 0) {
//             prevBtn.style.display = "none";
//             nextBtn.style.display = "inline-block";
//         }
//     });

//     const carousel = new bootstrap.Carousel("#myCarousel");
// });