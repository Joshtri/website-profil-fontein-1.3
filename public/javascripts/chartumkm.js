const labels = ["Usaha Mikro", "Usaha Menengah", "Usaha Kecil"];

const data = {
  labels: labels,
  datasets: [
    {
      labels: ["My First dataset"],
      backgroundColor: ["#ECDBBA", "#C84B31", "#2D4263"],

      hoverOffset: 4,
    },
  ],
};

const config = {
  type: "pie",
  data: data,
  options: {
    scales:{
      x:{
        ticks:{
        
        }
          
      }
    },
     

    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Grafik Kategori Usaha",
      },
    },
  },
};

let myChart = new Chart(document.getElementById("myChart"), config);
axios.get("/statistics/statistik/umkm").then((e) => {
  console.log(e);
  myChart.data.datasets[0].data = e.data.data;
  myChart.update();
});



