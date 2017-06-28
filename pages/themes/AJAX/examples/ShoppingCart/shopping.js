/**
 * Created by martin.harsovski on 6/22/2017.
 */

var myModule = (function () {
    var mainDiv = document.getElementById("mainDiv");
    var firstDiv = document.getElementById("cartProducts");
    var totalSum = document.getElementById("totalSum");
    var totalSumTax = document.getElementById("totalSumTax");
    var arr=[];
    var getXmlHttpRequest=function(url, callback) {

        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.overrideMimeType("application/json");
        xmlHttpRequest.open('GET', url, true);
        xmlHttpRequest.onreadystatechange = function () {
            if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == "200") {
                var json = xmlHttpRequest.responseText;
                var data = JSON.parse(json);
                callback(data);
            }
        }
        xmlHttpRequest.send();
    }
    var createElement = function(jsonArray){
        for(var i=0;size=jsonArray.length,i<size;i++){
            var div = document.createElement("div");
            div.setAttribute("class","product");
            div.innerHTML=`<img src="${jsonArray[i].image.small}"><br>
                           <h3 class="product-title">${jsonArray[i].name}</h3>
                           <label>${jsonArray[i].price}</label><i>$</i>
                           <div>
                           <button class="btn-order">Buy</button>
                           </div>
                           `;
            mainDiv.appendChild(div);
            //imagesize 150/185
        }

    }
    var deleteItem = function (e) {

        mainDiv.removeChild(e);
    }
    var addAllListeners = function () {
        mainDiv.addEventListener('click',function (e) {
            var span = firstDiv.getElementsByTagName("span");

            var sum = 0;
            var total;
            if(e.target.nodeName==="BUTTON"){
                var p = document.createElement("p");

                var name = e.target.parentElement.parentElement.querySelector("h3");
                var price = e.target.parentElement.parentElement.querySelector("label");

                p.innerHTML = `<span>${name.textContent}  ${price.textContent} $</span>`;
                firstDiv.appendChild(p);
                arr.push(price.textContent);
                deleteItem(e.target.parentElement.parentElement);


            }
            console.log(arr);
            for(var i=0;i<arr.length;i++){
                sum+=Number(arr[i]);
            }
            totalSum.innerHTML=`NO TAX  : ${sum} $`;
            total=sum+0.2*sum;
            totalSumTax.innerHTML=`TOTAL: ${total} $`
        })

    }

    var productsURL = 'https://github.com/ProgressBG-WWW-Courses/JavaScript-Advanced/blob/gh-pages/downloads/products.json';

    getXmlHttpRequest(productsURL,createElement);
    addAllListeners();
    return{
        getXmlHttpRequest:getXmlHttpRequest,
        createElement:createElement,
        deleteItem:deleteItem,
        addAllListeners:addAllListeners
    }
}());




