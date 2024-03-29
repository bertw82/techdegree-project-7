const notify = document.getElementById('notify');
const dropDown = document.getElementById('dropDown');
const bell = document.querySelector('.ping');

// alert notification phrases
const notifyPhrases = [
  [['You have'], [6], ['new messages']],
  [['You have'], [3], ['new followers']],
  [['You have'], [10], ['new visits']]
];

// function to create notification list items
function createLi(phrase) {
  const li = document.createElement('li');
  const p = document.createElement('p');
  const button = document.createElement('button');
  const span = document.createElement('div');
  li.className = 'list-item'; 
  p.innerHTML = `${phrase[0]} <span class="phrase-span">${phrase[1]}</span> ${phrase[2]}`;
  button.textContent = 'X'; 
  dropDown.appendChild(li);
  li.appendChild(span);
  li.appendChild(p);
  li.appendChild(button);
};

for ( let i = 0; i < notifyPhrases.length; i++) {
  createLi(notifyPhrases[i]);
};

// remove notification dot and display notification list items
bell.addEventListener('click', () => { 
  bell.classList.remove('ping');
  dropDown.classList.toggle('show');
});

// delete notification list item
dropDown.addEventListener('click', (e) => { 
  const button = document.querySelectorAll('.list-item button');
  for ( let i = 0; i < button.length; i++) {
    if (e.target === button[i]) {
      button[i].parentNode.style.display = 'none';
    }
  }
});

// create alert banner
const alertBanner = document.getElementById('alert');

alertBanner.innerHTML = `
  <div class="alert-banner">
    <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to perform</p>
    <p class="alert-banner-close">X</p>
  </div>
`;

// close alert banner
alertBanner.addEventListener('click', (e) => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = 'none';
    }
});

const trafficCanvas = document.getElementById('traffic-chart');

// data for line graph
let trafficData = {
  labels: ["1am", "4am", "5am", "7am", "9am", "11am", "1pm", "3pm", "5pm", "7pm", "9pm"],
  datasets: [{
    data:  [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
      2500],
      backgroundColor: 'rgb(72, 149, 239, 0.3)',
    borderWidth: 1,
  }]
};

// options for line graph
let trafficOptions = {
  aspectRatio: 2.5,
  animation: {
    duration: 0
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  },
  legend : {
    display: false
  }
};
  
// create line graph
let trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficData,
  options: trafficOptions
});

// add new data to line graph
const trafficNav = document.getElementById('trafficNav');

function addData(chart, labels, data) {
  chart.data.datasets[0].data = data;
  chart.data.labels = labels;
  chart.update();
};

trafficNav.addEventListener('click', (e) => {
  const trafficButton = document.querySelectorAll('.traffic-link button');

  const labelsUpdate = [
    ["1am", "4am", "5am", "7am", "9am", "11am", "1pm", "3pm", "5pm", "7pm", "9pm"],
    ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun", "Mon", "Tues", "Wed"],
    ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
            "4-10", "11-17", "18-24", "25-31"],
    ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November"]
  ];

  const chartUpdate = [
    [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
    [400, 300, 200, 225, 150, 450, 550, 300, 350, 500, 450],
    [2600, 2400, 2250, 800, 750, 2250, 2000, 1900, 1800, 1000, 1200],
    [1250, 970, 1200, 2300, 2000, 1250, 900, 700, 1000, 1250, 900],
  ];

  for (let i = 0; i < trafficButton.length; i++) {
    if (trafficButton[i] === e.target) { 
      for (let i = 0; i < trafficButton.length; i++) {
        trafficButton[i].classList.remove('button-background');
        trafficButton[i].classList.remove('initial-button');
      };
      addData(trafficChart, labelsUpdate[i], chartUpdate[i]);
      trafficButton[i].className = 'button-background';
      } else if (trafficButton[i] !== e.target) {
      trafficButton[i].className = 'traffic-button';
    }
  }
});

const dailyCanvas = document.getElementById('daily-chart');

// data for daily bar chart
const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
    label: 'Number of Users',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#4895EF',
    borderWidth: 1
  }]
};

//options for daily bar chart
const dailyOptions = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  },
  legend: {
    display: false
  }
};

// create daily bar chart
let dailyChart = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});

const mobileCanvas = document.getElementById('mobile-chart');

// data for mobile doughnut chart
const mobileData = {
  labels: ["Phones", "Tablet", "Desktop"],
  datasets: [{
    label: 'Number of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
      '#560BAD',
      '#4CC9F0',
      '#F72585'
    ]
  }]
};

// options for mobile doughnut chart
const mobileOptions = {
  legend: {
    position: 'right',
    labels: {
      boxWidth: 20,
      fontStyle: 'bold'
    }
  }
};

// create mobile doughnut chart
let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});
  
// autocomplete function from w3schools
const myInput = document.getElementById('myInput');

const users = [
  "Alison Smith",
  "Bert Witzel",
  "Christian Roberts",
  "Frankie Moreno",
  "Greg Daly",
  "Hank Rogers",
  "Ida Wellington",
  "Justine Parks",
  "Kristin Smith",
  "Laura Parker",
  "Maxine Hopewell",
  "Nick Harrison",
  "Orion Tupilow",
  "Peter Gilles",
  "Quenny Wells",
  "Roger Wallace",
  "Tanner Philips",
  "Ulysses Park",
  "William Wallace",
  "Xavier McDonald",
  "Yvette MacCloud",
  "Zelda Fitzgerald",
  "Victoria Chambers",
  "Dale Byrd",
  "Dawn Wood",
  "Jimmy Oliver",
  "Hank Jones",
  "Sally Jones",
  "Edgar Allan Poe",
  "Sarah Perkins",
  "Meghan Williams",
  "David Copperfield"
];

function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
              b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) { 
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}

myInput.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
};

autocomplete(myInput, users);

// choose a user and send a message
const message = document.getElementById('messageField');
const send = document.getElementById('send');

send.addEventListener('click', (e) => {
  if (myInput.value === "" && message.value === "" ) {
    e.preventDefault();
    alert('Please fill out User and Message fields before sending');
  } else if (myInput.value === "") {
    e.preventDefault();
    alert('Please fill out User field before sending');
  } else if (message.value === "") {
    e.preventDefault();
    alert('Please fill out Message field before sending');
  } else {
    alert(`Message sent successfully to ${myInput.value}`);
    myInput.value = null;
    messageField.value = null;
  }
});
  
/**
 * local storage JS
 */

const checkBox1 = document.getElementById('checkBox1');
const checkBox2 = document.getElementById('checkBox2');
const timeZone = document.getElementById('timeZone');
const save = document.getElementById('save');
const cancel = document.getElementById('cancel');
// create local storage by clicking "save" button
save.addEventListener('click', () => {
  localStorage.setItem('check1', JSON.stringify(checkBox1.checked));
  localStorage.setItem('check2', JSON.stringify(checkBox2.checked));
  localStorage.setItem('timeSelect', timeZone.value);
  alert('Your settings have been saved');
});
// first checkbox local storage
checkBox1.checked = JSON.parse(window.localStorage.getItem('check1'));
// second checkbox local storage
checkBox2.checked = JSON.parse(window.localStorage.getItem('check2'));
// timezone local storage
if (localStorage.getItem('timeSelect') !== null) {
  timeZone.value = window.localStorage.getItem('timeSelect');
}
// clear local storage with "cancel" button
cancel.addEventListener('click', () => {
  localStorage.clear();
  checkBox1.checked = false;
  checkBox2.checked = false;
  timeZone.selectedIndex = 0;
});

