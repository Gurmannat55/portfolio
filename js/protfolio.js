Waves.init();
Waves.attach('.ripple');

$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 30) {
            $(".navbar").addClass("navbar-sticky");
        } else {
            $(".navbar").removeClass("navbar-sticky");
        }

        if (this.scrollY > 500) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    });

    $(".menu-btn").click(function() {
        $(".menu").toggleClass("menu-active");
        $(".menu-btn i").toggleClass("menu-active");
    });

    var typed = new Typed(".typing", {
        strings: ["Software Developer", "Web Designer", "Full Stack Developer", "Nature Enthusiast", "Raptors Fan"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Software Developer", "Web Designer", "Full Stack Developer", "Nature Enthusiast", "Raptors Fan"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $(".carousel").owlCarousel({
        margin: 20,
        items: 4,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    $.ajax({
        type: "GET",
        url: "./data.json",
        dataType: "JSON",
        success: function(response) {
            loadAboutInfo(response.about);
            console.log(response.about);
            loadSkillsInfo(response.skills);
            loadServicesInfo(response.services);
            
            loadProjectsInfo(response.projects);
            loadGetInTouchInfo(response["contact-me"]);
        }
    });

    function loadAboutInfo(about) {
        $("#about-info").html(
            `${about}`
        );
    }
    function loadSkillsInfo(skills) {
        $("#programming").html(`
            <p><b>Programming: </b>${skills.programming}</p><br>
        `);
        $("#database").html(`
            <p><b>Database: </b>${skills.database}</p><br>
        `);
        $("#dev-ops").html(`
            <p><b>Development & Deployment: </b>${skills["dev-ops"]}</p><br>
        `);
        $("#office").html(`
            <p><b>Microsoft Office: </b>${skills.office}</p>
        `);
    }

    function loadServicesInfo(services) {
        $(".services-content").html(`
            <div class="card ripple" data-aos="fade-up">
                <div class="box">
                    <i class="fas fa-paint-brush"></i> 
                    <div class="text">Web Design</div>
                    <p>${services["web-design"]}</p>
                </div>
            </div> 
            <div class="card ripple" data-aos="fade-up">
                <div class="box">
                    <i class="fas fa-file-code"></i>
                    <div class="text">Web App Development</div>
                    <p>${services["web-appllication-development"]}</p>
                </div>
            </div>
            <div class="card ripple" data-aos="fade-up">
                <div class="box">
                    <i class="fas fa-code"></i>
                    <div class="text">API Development</div>
                    <p>${services["api-development"]}</p>
                </div>
            </div>
            <div class="card ripple" data-aos="fade-up">
            <div class="box">
            <i class="fas fa-server"></i>
                <div class="text">API Deployment</div>
                <p>${services["api-deployment"]}</p>
            </div>
        </div>
        `);
    }

  

    function loadProjectsInfo(projects) {
        $(".project-1").html(`
            <div class="box">
                <img src="${projects["project-1"].img}" alt="project-1">
                <div class="text">${projects["project-1"].name}</div>
                <p>${projects["project-1"].description}</p>
            </div>
        `);
        $(".project-2").html(`
            <div class="box">
                <img src="${projects["project-2"].img}" alt="project-1">
                <div class="text">${projects["project-2"].name}</div>
                <p>${projects["project-2"].description}</p>
            </div>
        `);
        $(".project-3").html(`
            <div class="box">
                <img src="${projects["project-3"].img}" alt="project-1">
                <div class="text">${projects["project-3"].name}</div>
                <p>${projects["project-3"].description}</p>
            </div>
    `);
    }

    function loadGetInTouchInfo(contact) {
        $("#get-in-touch").html(`
            ${contact["get-in-touch"]}
        `);
    }

    $("#send").click(function() {
        alert("This service is not available right now.");
    });
});