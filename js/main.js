// window.sr = ScrollReveal({
//   duration: 500,
//   delay: 200,
//   distance: 0
// });
// sr.reveal('.reveal');

var ikChart = document.getElementById("ik-chart").getContext('2d');
new Chart(ikChart, {
    type: 'horizontalBar',
    data: {
        labels: ['Data Analysis', 'Data Mining', 'Biostatistics', 'Modeling', 'Research Design', 'Analysis', 'Research', 'Mathematical Modeling', 'Project Management'],
        datasets: [{
            label: '',
            data: [9, 9, 8, 7, 9, 9, 10, 10, 8],
            backgroundColor: 'rgba(255, 69, 0, 0.2)',
            borderColor: 'rgb(255, 69, 0)',
            borderWidth: 1
        }]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
});

var ttChart = document.getElementById("tt-chart").getContext('2d');
new Chart(ttChart, {
    type: 'line',
    data: {
        labels: ['SASS', 'Stata', 'LaTeX', 'SPSS'],
        datasets: [{
            label: '',
            data: [9, 9, 8, 10],
            backgroundColor: 'rgba(255, 69, 0, 0.2)',
            borderColor: 'rgb(255, 69, 0)',
            borderWidth: 1
        }]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
});

var otherChart = document.getElementById("other-chart").getContext('2d');
new Chart(otherChart, {
    type: 'radar',
    data: {
        labels: ['Time Series Analysis', 'Multivariate Statistics', 'Monte Carlo Simulation', 'Survival Analysis', 'Experimental Design'],
        datasets: [{
            label: '',
            data: [9, 10, 7, 8, 10],
            backgroundColor: 'rgba(255, 69, 0, 0.2)',
            borderColor: 'rgb(255, 69, 0)',
            borderWidth: 1
        }]
    },
    options: {
      legend: {
        display: false
      }
    }
});
