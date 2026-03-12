const experienceYear = 4; // Adjust as needed
const info = {
    name: 'Muneeb Ihsan',
    title: 'Game Developer, Unity 3D/2D Specialist, C# Expert, AR/VR Developer',
    subtitle: 'Crafting immersive gaming experiences and interactive environments',
    experienceYear: experienceYear,
    emailLink: 'mailto:muneeb@example.com', // Update with actual email
    email: 'muneeb@example.com',
    phoneLink: 'tel:+92000000000',
    phone: '+92 3XX XXXXXXX',
    location: 'Pakistan',
    linkedIn: 'https://www.linkedin.com/in/muneebihsan',
    whatsapp: 'https://api.whatsapp.com/send?phone=92000000000',
    about: `
        <p class="mb-4 text-center">
            <strong>Passionate Game Developer</strong> with
            <strong>${experienceYear}+ years of experience</strong> in creating 
            <strong>high-performance 2D and 3D games</strong>. Specialized in 
            <strong>Unity Engine</strong> and <strong>C#</strong>, with a deep understanding of 
            <strong>Game Physics, AI behaviors, and Optimization</strong> for mobile and PC platforms.
          </p>

          <p class="mb-4 text-center">
            Expertise in the full game development lifecycle—from <strong>prototyping mechanics</strong> 
            to <strong>UI/UX implementation</strong> and <strong>final deployment</strong>. 
            Experienced in <strong>AR/VR development</strong>, creating interactive simulations 
            and immersive virtual reality experiences.
          </p>

          <p class="mb-4 text-center">
            Proficient in <strong>Multiplayer Integration</strong> using Photon and Mirror, and 
            <strong>Asset Optimization</strong> using Blender and Maya. Committed to writing 
            <strong>clean, scalable game code</strong> and implementing <strong>Design Patterns</strong> 
            to ensure smooth gameplay and maintainability.
          </p>
        </div>

        <h3 class="text-center mb-4 mt-5">Core Game Development Skills</h3>
        <div class="row">
          <div class="col-lg-6">
            <ul>
              <li><p><strong>Unity 3D/2D</strong>: Expert in scene management, prefabs, and physics.</p></li>
              <li><p><strong>C# Programming</strong>: Scripting gameplay mechanics and systems.</p></li>
              <li><p><strong>Mobile Optimization</strong>: Ensuring 60 FPS on Android and iOS devices.</p></li>
              <li><p><strong>AR/VR Development</strong>: Creating apps for Oculus, Vive, and mobile AR.</p></li>
            </ul>
          </div>
          <div class="col-lg-6">
            <ul>
              <li><p><strong>Multiplayer Systems</strong>: Experience with Photon, Mirror, and Netcode.</p></li>
              <li><p><strong>Shader Graph</strong>: Creating custom visual effects and materials.</p></li>
              <li><p><strong>AI & Pathfinding</strong>: Implementing NavMesh and custom NPC behaviors.</p></li>
              <li><p><strong>Animation Systems</strong>: Working with Animator, IK, and Root Motion.</p></li>
            </ul>
          </div>
        </div>
    `,
    portfolio: [
        {
            image: 'assets/img/projects/game-1.png',
            title: 'Action RPG Adventure',
            type: 'Game',
            link: '#',
        },
        {
            image: 'assets/img/projects/game-2.png',
            title: 'Mobile Racing Challenge',
            type: 'Mobile',
            link: '#',
        },
        {
            image: 'assets/img/projects/vr-1.png',
            title: 'VR Training Simulation',
            type: 'AR/VR',
            link: '#',
        }
    ],
    testimonials: [
        {
            image: 'assets/img/testimonials/client-1.png',
            name: 'John Doe',
            title: 'Indie Studio Lead',
            message: "Muneeb's ability to optimize game performance on mobile devices is outstanding. He turned our complex idea into a smooth gameplay experience.",
        }
    ],
    skills: [
        {
            "category": "Game Engines",
            "items": [
                { "name": "Unity Engine", "expertise": "Expert", "badge_url": "https://img.shields.io/badge/Unity-Expert-000000?style=social&logo=unity" },
                { "name": "Unreal Engine", "expertise": "Intermediate", "badge_url": "https://img.shields.io/badge/Unreal-Intermediate-313131?style=social&logo=unrealengine" }
            ]
        },
        {
            "category": "Programming",
            "items": [
                { "name": "C#", "expertise": "Expert", "badge_url": "https://img.shields.io/badge/C%23-Expert-239120?style=social&logo=csharp" },
                { "name": "C++", "expertise": "Intermediate", "badge_url": "https://img.shields.io/badge/C%2B%2B-Intermediate-00599C?style=social&logo=cplusplus" }
            ]
        },
        {
            "category": "Design & 3D",
            "items": [
                { "name": "Blender", "expertise": "Advanced", "badge_url": "https://img.shields.io/badge/Blender-Advanced-F5792A?style=social&logo=blender" },
                { "name": "Maya", "expertise": "Intermediate", "badge_url": "https://img.shields.io/badge/Maya-Intermediate-37A5CC?style=social&logo=autodesk" }
            ]
        },
        {
            "category": "Networking & Cloud",
            "items": [
                { "name": "Photon Fusion", "expertise": "Advanced", "badge_url": "https://img.shields.io/badge/Photon-Advanced-blue?style=social" },
                { "name": "Firebase for Games", "expertise": "Expert", "badge_url": "https://img.shields.io/badge/Firebase-Expert-FFCA28?style=social&logo=firebase" }
            ]
        }
    ]
};

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