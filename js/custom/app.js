// mega menu start
const openmega = () => {
    document.getElementById('mega_menu').style.visibility = "visible";
}
const closemega = () => {
    document.getElementById('mega_menu').style.visibility = "hidden";
}

// mega menu end

//recharge_btn start
const recharge = () => {
    if (document.getElementById('rechargecheck').checked == true) {
        document.getElementById('recharge_btn').innerHTML = "Recharge Now";
    } else {
        document.getElementById('recharge_btn').innerHTML = "Proceed to Recharge";
    }
}

// recharge_btn end

// owl carasoul top carasoul
$('.owl-carousel').owlCarousel({
    // loop: true,
    margin: 10,
    nav: true,
    items: 10,
    responsive: {
        0: {
            items: 2
        },
        400: {
            items: 3
        },
        600: {
            items: 5
        },
        800: {
            items: 7
        },
        1000: {
            items: 10
        }
    }
})

// Top Product Slider
$('.slider_navigation').owlCarousel({
    items: 5
})

// book_on_paytm_carasoul
$('.book_on_paytm_carasoul').owlCarousel({
    // loop: true,
    items: 11,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 3
        },
        400: {
            items: 4
        },
        600: {
            items: 6
        },
        800: {
            items: 9
        },
        1000: {
            items: 11
        }
    }
})


// electronics owl-carasoul-three
$('#owl-carasoul-three').owlCarousel({
    // loop: true,
    items: 5,
    margin: 5,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 2
        },
        600: {
            items: 3
        },
        800: {
            items: 4
        },
        1100: {
            items: 5
        }
    }
})

// mobile owl-carasoul-three
$('#owl-carasoul-four').owlCarousel({
    // loop: true,
    items: 5,
    margin: 5,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 2
        },
        600: {
            items: 3
        },
        800: {
            items: 4
        },
        1100: {
            items: 5
        }
    }
})

// Health & Groceries | Bestsellers owl-carasoul-three
$('#owl-carasoul-five').owlCarousel({
    // loop: true,
    items: 5,
    margin: 5,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 2
        },
        600: {
            items: 3
        },
        800: {
            items: 4
        },
        1100: {
            items: 5
        }
    }
})

// paytm-money owl-carasoul-three
$('#owl-carasoul-six').owlCarousel({
    // loop: true,
    items: 5,
    margin: 5,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 2
        },
        600: {
            items: 3
        },
        800: {
            items: 4
        },
        1100: {
            items: 5
        }
    }
})

// Fashion Bestsellers owl-carasoul-three
$('#owl-carasoul-seven').owlCarousel({
        // loop: true,
        items: 5,
        margin: 5,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            600: {
                items: 3
            },
            800: {
                items: 4
            },
            1100: {
                items: 5
            }
        }
    })
    // Travel owl-carasoul-three
$('#owl-carasoul-eight').owlCarousel({
    // loop: true,
    items: 5,
    margin: 5,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 2
        },
        600: {
            items: 3
        },
        800: {
            items: 4
        },
        1100: {
            items: 5
        }
    }
})

// Laptops Bestsellers owl-carasoul-three
$('#owl-carasoul-nine').owlCarousel({
    // loop: true,
    items: 5,
    margin: 5,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 2
        },
        600: {
            items: 3
        },
        800: {
            items: 4
        },
        1100: {
            items: 5
        }
    }
})

// Top Sellers owl-carasoul-three
$('#owl-carasoul-ten').owlCarousel({
    // loop: true,
    items: 5,
    margin: 5,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 2
        },
        600: {
            items: 3
        },
        800: {
            items: 4
        },
        1100: {
            items: 5
        }
    }
})