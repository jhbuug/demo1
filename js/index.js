var aNav = document.querySelectorAll('.navItem')
var oHeader = document.querySelector('header')
var oLast = document.querySelector('.last')
var lastitemBox = document.getElementById('lastitemBox')
var hWH = document.getElementById('hWH')
var oitemBox = document.querySelectorAll('.header-warp .itemBox')
var oA = document.querySelectorAll('.navItem a')
var oLogo = document.getElementById('oLogo')
var oYonghu = document.getElementById('yonghu')
var oNyonghu = document.querySelector('.icon-yonghu')
var span1 = document.getElementById('span1')
var span2 = document.getElementById('span2')
var gouwuche = document.getElementById('gouwuche')

var oitem = document.querySelectorAll('.itemBox .item')

for (var i = 0; i < oitem.length; i++) {
    oitem[i].onmouseover = function () {
        for (var i = 0; i < oitem.length; i++) {
            oitem[i].style.opacity = "0.6"
            this.style.opacity = "1"
        }
    }

    oitem[i].onmouseleave = function () {
        for (var i = 0; i < oitem.length; i++) {
            oitem[i].style.opacity = "1"
        }
    }
}

// 头部行为
oNyonghu.onmouseover = function () {
    oYonghu.style.display = 'block'
    span1.style.color = '#fff'
    span2.style.color = '#fff'
    oLogo.src = 'img/logo.png'
    oLast.style.display = 'none'
    oHeader.style.background = 'none'
    for (var i = 0; i < oitemBox.length; i++) {
        oitemBox[i].style.display = 'none'
    }
    for (var i = 0; i < oA.length; i++) {
        oA[i].style.color = '#fff'
    }
    gouwuche.style.display = 'none'
}
oYonghu.onmouseleave = function () {
    oYonghu.style.display = 'none'
}

span2.onmouseover = function () {
    oYonghu.style.display = 'block'
    span1.style.color = '#fff'
    span2.style.color = '#fff'
    oLogo.src = 'img/logo.png'
    oLast.style.display = 'none'
    oHeader.style.background = 'none'
    for (var i = 0; i < oitemBox.length; i++) {
        oitemBox[i].style.display = 'none'
    }
    for (var i = 0; i < oA.length; i++) {
        oA[i].style.color = '#fff'
    }
    gouwuche.style.display = 'flex'
    oYonghu.style.display = 'none'
}
gouwuche.onmouseleave = function () {
    gouwuche.style.display = 'none'
}

for (var i = 0; i < aNav.length; i++) {
    aNav[i].index = i
    aNav[i].onmouseover = function () {
        gouwuche.style.display = 'none'
        oYonghu.style.display = 'none'
        span1.style.color = '#fff'
        span2.style.color = '#fff'
        oLogo.src = 'img/logo.png'
        oLast.style.display = 'none'
        oHeader.style.background = 'none'
        for (var i = 0; i < oitemBox.length; i++) {
            oitemBox[i].style.display = 'none'
        }
        for (var i = 0; i < oA.length; i++) {
            oA[i].style.color = '#fff'
        }
        oA[this.index].style.color = 'red'
    }

    if (i === 9) {
        aNav[i].onmouseover = function () {
            gouwuche.style.display = 'none'
            oYonghu.style.display = 'none'
            lastitemBox.style.display = 'flex'
            span1.style.color = '#000'
            span2.style.color = '#000'
            oLogo.src = 'img/logob.png'
            oHeader.style.background = '#fff'
            for (var i = 0; i < oitemBox.length; i++) {
                oitemBox[i].style.display = 'none'
            }
            for (var i = 0; i < oA.length; i++) {
                oA[i].style.color = '#000'
            }
            oLast.style.display = 'block'
            oA[this.index].style.color = 'red'
        }
    }

    if (i < 4) {
        aNav[i].index = i
        // console.log(aNav[i].index)
        oitemBox[i].style.display = 'none'
        aNav[i].onmouseover = function () {
            gouwuche.style.display = 'none'
            oYonghu.style.display = 'none'
            hWH.style.display = 'block'
            span1.style.color = '#000'
            span2.style.color = '#000'
            oLogo.src = 'img/logob.png'
            oLast.style.display = 'none'
            oHeader.style.background = '#fff'
            for (var i = 0; i < oitemBox.length; i++) {
                oitemBox[i].style.display = 'none'
            }
            oitemBox[this.index].style.display = 'flex'
            for (var i = 0; i < oA.length; i++) {
                oA[i].style.color = '#000'
            }
            oA[this.index].style.color = 'red'
        }
    }
}

oHeader.onmouseleave = function () {
    span1.style.color = '#fff'
    span2.style.color = '#fff'
    oLogo.src = 'img/logo.png'
    oHeader.style.background = 'none'
    oLast.style.display = 'none'
    hWH.style.display = 'none'
    for (var i = 0; i < aNav.length; i++) {
        oA[i].style.color = '#fff'
    }
}
// 头部行为

// 底部行为

var ftFirst = document.getElementById('ft-first')
var jubanle = document.getElementById('jubanle')

var Rlastshare = document.getElementById('R-last-share')
var shareM = document.getElementById('share-M')

var Rlastwechat = document.getElementById('R-last-wechat')
var wechatM = document.getElementById('wechat-M')

var brron = document.getElementById('br_r_on')
var yuyan = document.getElementById('yuyan')


ftFirst.onmouseover = function () {
    jubanle.style.display = 'block'
    setTimeout(function () {
        jubanle.style.opacity = '1'
        jubanle.style.transform = 'translateY(0)'
    }, 100)
}

ftFirst.onmouseleave = function () {
    jubanle.style.opacity = '0'
    jubanle.style.transform = 'translateY(10%)'
    if (!ftFirst.contains(Event.target) || Event.target === jubanle) {
        setTimeout(function () {
            jubanle.style.display = 'none'
        }, 100)
    }
}

Rlastshare.onmouseover = function () {
    shareM.style.display = 'block'
}
Rlastshare.onmouseleave = function () {
    shareM.style.display = 'none'
}

Rlastwechat.onmouseover = function () {
    wechatM.style.display = 'block'
}
Rlastwechat.onmouseleave = function () {
    wechatM.style.display = 'none'
}

brron.onmouseover = function () {
    yuyan.style.display = 'block'
}
yuyan.onmouseleave = function () {
    yuyan.style.display = 'none'
}

// 底部行为

