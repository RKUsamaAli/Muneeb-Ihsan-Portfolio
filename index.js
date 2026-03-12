const experienceYear = 2; 
const info = {
    name: 'Muneeb Ihsan',
    title: 'Unity Developer, Game Developer, C# Expert',
    subtitle: 'Expert in Unity 3D Game Development and Interactive Simulations',
    experienceYear: experienceYear,
    emailLink: 'mailto:muneebgaming3333@gmail.com',
    email: 'muneebgaming3333@gmail.com',
    phoneLink: 'tel:+923364570926',
    phone: '03364570926',
    location: 'Lahore, Pakistan',
    linkedIn: 'https://www.linkedin.com/in/muneebihsan',
    whatsapp: 'https://api.whatsapp.com/send?phone=923364570926',
    about: `
        <p class="mb-4 text-center">
            <strong>Focused and detail-oriented Unity 3D engine expert</strong> with a primary focus on 
            <strong>Unity 3D Game development</strong> and <strong>C# programming</strong>. 
            I am a creative and dependable team player dedicated to innovation and efficiently resolving project issues.
          </p>

          <p class="mb-4 text-center">
            While primarily a coder, I am proficient in a wide array of skills pertaining to the development of 
            <strong>2D and 3D games</strong>. I have a proven track record of overseeing projects from the ground up, 
            including First-Person Shooters (FPS), Third-Person Shooters (TPS), Simulation, and Open-World games.
          </p>

          <p class="mb-4 text-center">
            Beyond technical development, I have experience in <strong>mentoring and training interns</strong>, 
            guiding teams toward professional excellence and delivering high-quality gaming experiences.
          </p>
        </div>

        <h3 class="text-center mb-4 mt-5">Skills & Strengths</h3>
        <div class="row">
          <div class="col-lg-6">
            <ul>
              <li><p><strong>Unity & Unity 3D</strong>: Core engine expertise for 2D/3D development.</p></li>
              <li><p><strong>Game Development</strong>: Specialized in FPS, TPS, and Simulation genres.</p></li>
              <li><p><strong>OOP</strong>: Strong foundation in Object-Oriented Programming with C#.</p></li>
            </ul>
          </div>
          <div class="col-lg-6">
            <ul>
              <li><p><strong>Business Development</strong>: Strategic growth and project management.</p></li>
              <li><p><strong>Client Support</strong>: Effectively resolving project issues and client needs.</p></li>
              <li><p><strong>Point of Sale (POS)</strong>: Technical experience in POS system logic.</p></li>
            </ul>
          </div>
        </div>
    `,
portfolio: [
    {
        image: 'assets/img/projects/Game1.png',
        title: 'Bus Simulator (Indonesia)',
        type: 'Simulation',
        link: 'https://play.google.com/store/apps/details?id=com.indian.bus.simulator.ultimate.indonesia.driving.games',
    },
    {
        image: 'assets/img/projects/Game2.png',
        title: 'Coach Bus Transport',
        type: 'Simulation',
        link: 'https://play.google.com/store/apps/details?id=com.gp.coach.bus.transport.freegames',
    },
    {
        image: 'assets/img/projects/Game3.png',
        title: 'Open World: Gangster City',
        type: 'OpenWorld',
        link: 'https://play.google.com/store/apps/details?id=com.gp.open.world.gangster.city.game',
    },
    {
        image: 'assets/img/projects/Game4.png',
        title: 'Farm Simulator Farming Game',
        type: 'Simulation',
        link: 'https://play.google.com/store/apps/details?id=com.games.edge.farm.simulator.farming.game',
    }
],
    skills: [
        {
            "category": "Core Development",
            "items": [
                { "name": "Unity 3D", "expertise": "Expert", "badge_url": "https://img.shields.io/badge/Unity-Expert-000000?style=social&logo=unity" },
                { "name": "C# / OOP", "expertise": "Expert", "badge_url": "https://img.shields.io/badge/C%23-Expert-239120?style=social&logo=csharp" },
                { "name": "Game Design", "expertise": "Advanced", "badge_url": "https://img.shields.io/badge/Game_Dev-Advanced-blue?style=social" }
            ]
        },
        {
            "category": "Professional Skills",
            "items": [
                { "name": "Business Development", "expertise": "Advanced", "badge_url": "https://img.shields.io/badge/Business-Dev-orange?style=social" },
                { "name": "Client Support", "expertise": "Expert", "badge_url": "https://img.shields.io/badge/Support-Expert-red?style=social" },
                { "name": "Point of Sale", "expertise": "Intermediate", "badge_url": "https://img.shields.io/badge/POS_Systems-Intermediate-green?style=social" }
            ]
        }
    ],
    testimonials: [
    {
        name: 'Muneeb Ihsan',
        title: 'Unity Developer',
        message: 'Focused and detail-oriented Unity 3D engine expert.',
    },
    {
        name: 'Game Bit Square',
        title: 'Senior Developer',
        message: 'Excellent leadership and technical skills in FPS and Open World games.',
    }
],
}

// ... (Keep the rest of your index.js logic for rendering at the bottom)
document.querySelectorAll("[data-content-text]").forEach((val) => {
    const eleKey = val.getAttribute('data-content-text')
    if (val.getAttribute('data-typed-items'))
        val.setAttribute('data-typed-items', info[eleKey])
    else
        val.textContent = info[eleKey]
});
document.querySelectorAll("[data-content-link]").forEach((val) => {
    const eleKey = val.getAttribute('data-content-link')
    val.setAttribute('href', info[eleKey])
});
document.querySelectorAll("[data-content-html]").forEach((val) => {
    const eleKey = val.getAttribute('data-content-html')
    val.innerHTML = info[eleKey]
});
document.querySelectorAll("[data-content-testimonials]").forEach((ele) => {
    const eleKey = ele.getAttribute('data-content-testimonials')
    const list = info[eleKey]; if (!list?.length) return;
    ele.innerHTML = '';
    list.forEach(l => {
        ele.innerHTML += `<div class="swiper-slide"><div class="testimonial-item"><h3>${l.name}</h3><h4>${l.title}</h4><p>${l.message}</p></div></div>`
    })
});
document.querySelectorAll("[data-content-skills]").forEach((ele) => {
    const eleKey = ele.getAttribute('data-content-skills')
    const list = info[eleKey]; if (!list?.length) return;
    ele.innerHTML = '';
    list.forEach(l => {
        let itemsHtml = l.items?.map(i => `<div class="col-12 mb-2"><img src="${i.badge_url}" alt="${i.name}"></div>`).join('')
        ele.innerHTML += `<div class="col-lg-3 col-md-6 mb-4"><strong>${l.category}</strong><div class="d-flex flex-wrap">${itemsHtml}</div></div>`
    })
});
document.querySelectorAll("[data-content-list-container]").forEach((ele) => {
    const eleKey = ele.getAttribute('data-content-list-container')
    const list = info[eleKey]; if (!list?.length) return;
    const itemsContainer = ele.querySelector('[data-content-list="items"]')
    itemsContainer.innerHTML = '';
    list.forEach(l => {
        itemsContainer.innerHTML += `<div class="col-lg-4 col-md-6 portfolio-item filter-${l.type.toLowerCase()}">
            <div class="portfolio-wrap">
              <img src="${l.image}" class="img-fluid" alt="">
              <div class="portfolio-info"><h4>${l.title}</h4><p>${l.type}</p></div>
            </div>
          </div>`
    })
});
document.title = info.name + ' - ' + info.title;