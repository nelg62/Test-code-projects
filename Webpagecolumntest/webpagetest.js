const ul = document.getElementById("unlisteditem").innerHTML;




let li = `
<li class="listitem">
                    <div class="listdiv"><input type="checkbox"></div>
                    <div class="listdiv"></div>
                    <div class="listdiv">12345</div>
                    <div class="listdiv">Test</div>
                    <div class="listdiv" id="statusbox">Test</div>
                    <div class="listdiv"><img src="user.png" alt=""></div>
                    
                </li>`;

function addbtnfun() {
    document.getElementById("unlisteditem").innerHTML += li
}

function removebtnfun() {
    let listItem = document.querySelectorAll("#unlisteditem li");
    Array.from(listItem).forEach(listItem => {
        listItem.parentNode.removeChild(listItem)
    });
}