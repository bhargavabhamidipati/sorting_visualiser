    // setup


const data = {
    labels: generateSequence(),
    datasets: [{
        label: 'Weekly Sales',
        data: generateRandomNumbers(),
        backgroundColor: [
        'rgba(255, 26, 104, 0.2)',
        ],
        borderColor: [
        'rgba(255, 26, 104, 1)',
        ],
        borderWidth: 1
    }]
    };

      // config
const config = {
type: 'bar',
data,
options: {
    plugins:{
        legend:{
            display:false
        }
    },
    scales: {
    y: {
        beginAtZero: true,
        ticks: {
        display: false //this will remove only the label
    }
    },
    x: {
        ticks: {
            display: false //this will remove only the label
        }
    }
    },
    tooltips: {
    display: false
},

}
};

      // render init block
const myChart = new Chart(
document.getElementById('myChart'),
config
);

// Instantly assign Chart.js version
const chartVersion = document.getElementById('chartVersion');
chartVersion.innerText = Chart.version;


function generateData(){
    myChart.data.datasets[0].data = generateRandomNumbers();
    myChart.update();

    myChart.data.labels = generateSequence();
    myChart.update();
    //console.log(myChart.data.labels)
    const unsortedArray = [5, 2, 8, 3, 1, 9, 4, 6, 7];
    const sortedArray = mergeSort(unsortedArray);
    console.log("sorting successful")
    console.log(sortedArray);

}

function generateRandomNumbers(){
    y_data = [];
    for(let i=0;i<100;i++){
        var r = Math.floor(Math.random() * 101);;
        y_data.push(r);
    }
    return y_data;
}

function generateSequence(){
    x_data = [];
    for(let i=0;i<100;i++){
        x_data.push(i);
    }
    return x_data;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
  }

  function merge(leftArr, rightArr) {
    const resultArr = [];

    while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
        resultArr.push(leftArr.shift());
      } else {
        resultArr.push(rightArr.shift());
      }
    }

    return [...resultArr, ...leftArr, ...rightArr];
  }