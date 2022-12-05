'use strict'

var projs = getProjs()

function renderPortfolio() {
    var strHtml = ''
    for (var i = 0; i < projs.length; i++) {
        strHtml += `
<div class="col-md-4 col-sm-6 portfolio-item">
<a class="portfolio-link" data-toggle="modal" href="#${projs[i].id}">
<div class="portfolio-hover">
<div class="portfolio-hover-content">
<i class="fa fa-plus fa-3x"></i>
</div>
</div>
<img class="img-fluid img-thumbnail " src="img/portfolio/${projs[i].id}.png" alt="">
</a>
<div class="portfolio-caption">
<h4>${projs[i].name}</h4>
<p class="text-muted">${projs[i].title}</p>
</div>
</div>`
    }

    $('.portfolio-container').html(strHtml)
}



function renderModals() {
    var strHtml = ''
    for (var i = 0; i < projs.length; i++) {
        strHtml += `
<div class="modals-container">
<div class="portfolio-modal modal fade" id=${projs[i].id} tabindex="-1" role="dialog" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="close-modal" data-dismiss="modal">
<div class="lr">
<div class="rl"></div>
</div>
</div>
<div class="container">
<div class="row">
<div class="col-lg-8 mx-auto">
<div class="modal-body">
<!-- Project Details Go Here -->
<h2>${projs[i].name}</h2>
<p class="item-intro text-muted">${projs[i].title}</p>
<img class="img-fluid d-block mx-auto" src="img/portfolio/${projs[i].id}-full.png" alt="">
<p>${projs[i].desc}</p>
<ul class="list-inline">
<li>Created: ${getTimeDelta(projs[i].publishedAt)} days ago</li>
<li>Client: Threads</li>
<li>Category: ${projs[i].labels}</li>
</ul>
<button class="btn btn-primary" data-dismiss="modal" type="button">
<i class="fa fa-times"></i>
Close Project</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>`
    }
    $('.modals-container').html(strHtml)
}


function getTimeDelta(delta) {
    var diffrence = new Date().getTime() - delta
    var days = diffrence/1000/60/60/24
    return parseInt(days)
}