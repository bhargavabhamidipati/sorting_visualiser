    // setup
let update = [];

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

// code to generate the initial data
function generateData(){
    const unsortedArray = generateRandomNumbers();
    myChart.data.datasets[0].data = unsortedArray;
    myChart.data.labels = generateSequence();
    myChart.update();
    //console.log(myChart.data.labels)

    mergeSort(0,999);
    console.log("sorting successful")
    //console.log(sortedArray);
    myChart.update();

}

// code to generate unsorted array.
function generateRandomNumbers(){
    let y_data = [];
    for(let i=0;i<1000;i++){
        var r = Math.floor(Math.random() * 1001);;
        y_data.push(r);
    }
    return y_data;
}

// code to generate no of elements required by the user.
function generateSequence(){
    let x_data = [];
    for(let i=0;i<1000;i++){
        x_data.push(i);
    }
    return x_data;
}

//-------------------------Merge Sort Algorithm-----------------------------

function merge(l, m, r)
{
    var n1 = m - l + 1;
    var n2 = r - m;

    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = myChart.data.datasets[0].data[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = myChart.data.datasets[0].data[m + 1 + j];

    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    var i = 0;

    // Initial index of second subarray
    var j = 0;

    // Initial index of merged subarray
    var k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            myChart.data.datasets[0].data[k] = L[i];
            i++;
        }
        else {
            myChart.data.datasets[0].data[k] = R[j];
            j++;
        }
        k++;

    }

    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        myChart.data.datasets[0].data[k] = L[i];
        i++;
        k++;

    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        myChart.data.datasets[0].data[k] = R[j];
        j++;
        k++;

    }

    setTimeout(myChart.update('none'),1000);

}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
function mergeSort(l, r){
    if(l>=r){
        return;//returns recursively
    }
    var m =l+ parseInt((r-l)/2);
    setTimeout(mergeSort(l,m),1000);
    setTimeout(mergeSort(m+1,r),1000);
    setTimeout(merge(l,m,r),1000);
    console.log(myChart.data.datasets[0].data)
}
  //----------------------------------------------------------------------------

