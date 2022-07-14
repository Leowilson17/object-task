var myMobileSpec = [
    {
        Brand: 'realme',
        Network: 'LTE',
        Display: 'Super Amoled',
        RAM: {
            size: 6,
            unit: 'GB'
        },
        ROM: {
            size: 128,
            unit: 'GB'
        },
        OS: 'HoneyComb',
        Camera: {
            size: 64,
            unit: 'MB'
        },
        Battery: {
            size: 4500,
            unit: 'mAh'
        },
        Ratings: 4.5
    },
    {
        Brand: 'samsung',
        Network: 'LTE',
        Display: 'Super Amoled',
        RAM: {
            size: 4,
            unit: 'GB'
        },
        ROM: {
            size: 64,
            unit: 'GB'
        },
        OS: 'Pie',
        Camera: {
            size: 32,
            unit: 'MB'
        },
        Battery: {
            size: 6000,
            unit: 'mAh'
        },
        Ratings: 4.0
    },
    {
        Brand: 'redmi',
        Network: 'LTE',
        Display: 'LCD',
        RAM: {
            size: 4,
            unit: 'GB'
        },
        ROM: {
            size: 128,
            unit: 'GB'
        },
        OS: 'Android Q',
        Camera: {
            size: 64,
            unit: 'MB'
        },
        Battery: {
            size: 4200,
            unit: 'mAh'
        },
        Ratings: 4.5
    }
]

// Create a Element Function
function discoverElement(primaryClass, primaryText, spanElement) {

    var mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'class-count');
    var span_1 = document.createElement('span');

    span_1.setAttribute('class', primaryClass);
    span_1.innerText = primaryText;

    spanElement.forEach(secondEle);

    function secondEle(secondaryElement) {
        var span_2 = document.createElement('span');
        span_2.innerText = secondaryElement.text;
        if (secondaryElement.classname !== '') {
            span_2.setAttribute('class', secondaryElement.classname);

        }
        span_1.appendChild(span_2);
    }
    mainDiv.appendChild(span_1);
    return mainDiv;

}


// console.log(show);

var checkBoxes = document.querySelectorAll('.filter');


checkBoxes.forEach(function (check) {
    check.addEventListener('click', function () {
        var checkBoxes = this.value;
        // console.log(checkBoxes);

        function show(data) {
            var showData = data;
            // console.log(showData.Brand);

            if (checkBoxes == showData.Brand) {
                secondaryBrandElement = [
                    {
                        'classname': 'brand-name',
                        'text': showData.Brand
                    }
                ]

                // passing element arguments

                brandInfo = discoverElement('brand-id', 'Brand:', secondaryBrandElement);
                // console.log(brandInfo);

                secondaryNetElement = [
                    {
                        'classname': 'net-type',
                        'text': showData.Network
                    }
                ]
                networkInfo = discoverElement('net-brand', 'Network:', secondaryNetElement);
                // console.log(networkInfo);

                secondaryPowerElement = [
                    {
                        'classname': 'power-name',
                        'text': showData.Battery.size
                    }
                ]
                powerInfo = discoverElement('power-id', 'Battery:', secondaryPowerElement);

                secondaryRAMElement = [
                    {
                        'classname': 'ram-name',
                        'text': showData.RAM.size
                    },
                    {
                        'classname': '',
                        'text': showData.RAM.unit
                    }
                ]

                ramInfo = discoverElement('ram', 'RAM:', secondaryRAMElement)
                // console.log(ramInfo);

                // create image element
                var imgEle = document.createElement('img');
                imgEle.setAttribute('class', 'img-1');
                imgEle.setAttribute('width', '200px');
                imgEle.setAttribute('height', '200px');
                imgEle.src = 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg';




                // console.log(powerInfo);
                // console.log('***********');
                var displayClass = document.createElement('div');
                displayClass.setAttribute('class', 'display-element')
                displayClass.appendChild(imgEle);
                displayClass.appendChild(brandInfo);
                displayClass.appendChild(networkInfo);
                displayClass.appendChild(powerInfo);
                displayClass.appendChild(ramInfo);
                console.log(displayClass);

                // append body element
                var bodyElement = document.querySelector('body');
                bodyElement.appendChild(displayClass);
            }
        }
        myMobileSpec.forEach(show);
    });
});






