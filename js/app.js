const notify = document.getElementById('notify');
const dropDown = document.getElementById('dropDown');
const g = document.querySelector('.ping');

g.addEventListener('click', () => { 
  g.classList.remove('ping');
  dropDown.style.display = 'initial';
})

dropDown.addEventListener('click', (e) => { 
  const p = document.querySelectorAll('#dropDown li p');
  const dropLi = document.querySelectorAll('#dropDown li');
  
  for ( let i = 0; i < p.length; i++) {
    p.parentNode.className = 'hide';
    // let li = dropLi[i];  
    // if (e.target === p) {
    //   dropLi.className = 'hide';
    // }
  }
})

const alertBanner = document.getElementById('alert');

alertBanner.innerHTML = `
                        <div class="alert-banner">
                          <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to perform</p>
                          <p class="alert-banner-close">X</p>
                        </div>
                        `;

alertBanner.addEventListener('click', (e) => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none"
    }
})

const trafficCanvas = document.getElementById('traffic-chart');

// data for line graph
let trafficData = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
            "4-10", "11-17", "18-24", "25-31"],
  datasets: [{
    data:  [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
      2500],
      backgroundColor: 'rgba(108, 112, 224, 0.3)',
    // backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
}

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

const dailyCanvas = document.getElementById('daily-chart');

// data for daily bar chart
const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
    label: 'Number of Users',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#b22222',
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
      '#1e90ff',
      '#ff4500',
      '#00fa9a'
      // '#7477BF',
      // '#78CF82',
      // '#51B6C8'
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
}

// create mobile doughnut chart
let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});
  


  
