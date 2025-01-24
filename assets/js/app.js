
document.addEventListener('keydown', (event) => {
  if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I") || (event.ctrlKey && event.key === "U")) {
    event.preventDefault();
  }
});

document.addEventListener('contextmenu', (event) => event.preventDefault());


const searchSvg = document.getElementById('searchSvg');
const searchInput = document.getElementById('searchInput');

searchSvg.addEventListener('click', function (event) {
    searchInput.style.width = '90%';
    searchInput.style.padding = '0.5rem 1rem';
    searchInput.focus(); 
    event.stopPropagation();
  });
  searchInput.addEventListener('click', function (event) {
    searchInput.style.width = '90%';
    searchInput.style.padding = '0.5rem 1rem';
    searchInput.focus(); 
    event.stopPropagation();
  });


  document.addEventListener('click', function () {
    searchInput.style.width = '0';
    searchInput.style.padding = '0';

  });


  // const welcomeText = document.getElementById("welcomeText");
  // const welcomeText = document.getElementById("welcomeText");

  // const observer = new IntersectionObserver(
  //   ([entry]) => {
  //     if (!entry.isIntersecting) {
  //       welcomeText.style.fontSize = "1rem"; // Change to your desired color
  //     } else {
  //       welcomeText.style.fontSize = "2rem"; // Reset to default color
  //     }
  //   },
  //   {
  //     root: null,
  //     threshold: 0, // Triggers when the element is fully or partially out of view
  //   }
  // );

  // observer.observe(welcomeText);