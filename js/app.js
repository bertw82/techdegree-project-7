const alertBanner = document.getElementById('alert');

alertBanner.innerHTML = `
                        <div class="alert-banner">
                          <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to perform</p>
                          <p class="alert-banner-close">x</p>
                        </div>
                        `;

alertBanner.addEventListener('click', (e) => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none"
    }
})

const trafficCanvas = document.getElementById('traffic-chart');

let trafficData = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
            "4-10", "11-17", "18-24", "25-31"],
  datasets: [{
    data: [500, 1000, 1500, 2000, 2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
}

let trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficData
  // options: trafficOptions
});
