const personalInfo = {
    name: 'Christine López',
    location: 'Madrid',
    img: 'https://media-exp1.licdn.com/dms/image/C4E03AQF4xcNIeI-vVw/profile-displayphoto-shrink_800_800/0/1651598886814?e=1663200000&v=beta&t=djFK1IUR77Zkau_biqP6DN65M2N91cklsYEXoBhKX3g',
    about: '| Learning how to code |<br> | Full-stack Developer |<br>| 💻Gaffer, camera & editor ​🎞️ |<br>| Gaming 👾​ |<br>| Cars , JDM 🔰​ |<br>| Spanish, English & 日本語 💬|'
}

const tecnologies = {
    html: {
      name: 'HTML5',
      experience: 'Junior',
      img: 'https://i.imgur.com/uJgvzUV.png'
    },
    css: {
      name: 'CSS3',
      experience: 'Junior',
      img: 'https://i.imgur.com/lEdzSVb.png'
    },
    js: {
      name: 'Javascript',
      experience: 'Junior',
      img: 'https://i.imgur.com/lTdxHmO.png'
    },
    node: {
      name: 'NodeJS',
      experience: 'Junior',
      img: 'https://i.imgur.com/Cty20b4.png'
    },
    mongo: {
      name: 'MongoDB',
      experience: 'Junior',
      img: 'https://i.imgur.com/oR9yb7K.jpg'
    },
    react: {
      name: 'ReactJS',
      experience: 'Junior',
      img: 'https://i.imgur.com/a7XKmkC.jpg'
    }
    ,
    photoshop: {
      name: 'Photoshop',
      experience: 'Alto',
      img: 'https://i.imgur.com/4tsSW3h.png'
    },
    lightroom: {
      name: 'lightroom',
      experience: 'Alto',
      img: 'https://i.imgur.com/CYHGBjR.png'
    },
    premiere: {
      name: 'Premiere',
      experience: 'Medio',
      img: 'https://i.imgur.com/EDJw0YR.png'
    },
    avid: {
      name: 'Avid',
      experience: 'Junior',
      img: 'https://i.imgur.com/OMayiXz.jpg'
    }
    ,
    davinci: {
      name: 'Davinci',
      experience: 'Junior',
      img: 'https://i.imgur.com/UQO959M.png'
    }
}

const gallery = {
    landing1: {
      name: 'Replica Slack',
      description: 'Ejercicio de HTML y CSS realizado durante la primera semana de Bootcamp. Objetivo: Lograr replicar la web de "Slack" en su versión móvil con las herramientas disponibles.',
      cover: 'https://cdn.discordapp.com/attachments/701164137081733201/997633084109357138/slack.png?width=904&height=671'
    },
    landing2: {
      name: 'JDM Cars Web',
      description: 'Ejercicio de HTML y CSS realizado durante la primera semana de Bootcamp. Objetivo: Lograr hacer una página web desde cero y que sea responsive. Prueba de elementos GRID y FLEXBOX.',
      cover: 'https://cdn.discordapp.com/attachments/701164137081733201/997633083719307374/jdm.png?width=904&height=671'
    },
    landing3: {
      name: 'Replica Corte Inglés',
      description: 'Ejercicio de HTML y CSS realizado durante la primera semana de Bootcamp. Objetivo: Crear una estructura similar y utilizar elementos flex y botones.',
      cover: 'https://cdn.discordapp.com/attachments/701164137081733201/997633083262115901/corteingles.png?width=904&height=671'
    },
    landing4: {
      name: 'Mailchimp',
      description: 'Ejercicio de HTML y CSS realizado durante la primera semana de Bootcamp. Objetivo: Crear una página de registro/login. Uso de formularios',
      cover: 'https://www.motocms.com/blog/wp-content/uploads/2019/11/how-to-become-a-web-developer.jpg'
    },
    landing5: {
      name: 'Issuu register',
      description: 'Ejercicio de HTML y CSS realizado durante la primera semana de Bootcamp. Objetivo: Crear una página de registro/login. Uso de formularios.',
      cover: 'https://www.motocms.com/blog/wp-content/uploads/2019/11/how-to-become-a-web-developer.jpg'
    }
}

const cv = {
    gradomedio: {
        name: 'Laboratorio de Imagen',
        institute: 'IES Puerta Bonita',
        year: '2015 - 2017',
        description: 'Prácticas en estudio fotográfico de reportaje gráfico, reportaje social,  impresión, edición digital y restauración.'
    },
    gradosuperior: {
        name: 'Iluminación, captación y tratamiento de la imagen',
        institute: 'IES Puerta Bonita',
        year: '2017 - 2019',
        description: 'Prácticas en Movistar+ (continuidad). Labores básicas de edición de vídeo, control de calidad de datos y emisiones, clasificación, archivado y verificación de inserciones en plataforma'
    },
    operador: {
        name: 'Operador de cámara',
        institute: 'CES',
        year: '2019 - 2020',
        description: 'Curso de operador de cámara impartido en la escuela de imagen y sonido CES.'
    },
    developer: {
        name: 'Full-stack Developer',
        institute: 'NEOLAND',
        year: '2022',
    },
}
const rrss = {
    linkedin: {
      name: 'LinlkedIn',
      logo: 'https://cdn.discordapp.com/attachments/701164137081733201/997638360120180817/linkedin.png',
      anchor: 'https://www.linkedin.com/in/cristina-l-165a9218a/'
    },
    github: {
      name: 'Github',
      logo: 'https://cdn.discordapp.com/attachments/701164137081733201/997638359814000650/github.png',
      anchor: 'https://github.com/mistymidnights'
    }
}

let personalInfoHtml = document.querySelector('#personalInfo');
let tecnologiesHtml = document.querySelector('#tecnologies');
let galleryHtml = document.querySelector('#gallery');
let rrssHtml = document.querySelector('#rrss');
let cvHtml = document.querySelector('#cvInfo')

const personalInfoConversionHtml = (personalInfo) => {
    return `
    <div class="personal-container-all>
      <div class="personal-img-container">
          <img  class="personal-img" src="${personalInfo.img}" alt="${personalInfo.name}">
      </div>
      <div class="personal-data">
        <h1>${personalInfo.name}</h1>
        <h2>${personalInfo.location}</h2>
        <p>${personalInfo.about}</p>
      </div>
    </div>
    `
}
const tecnologiesConversionHtml = (tecnologies) => {
    return `
      <div class="tech-container-all">
        <div class="tecnologie-info">
          <h1>${tecnologies.html.name}</h1>
          <div class="tecnologie-data">
            <h2>${tecnologies.html.experience}</h2>
            <div class="tecnologie-img-container">
              <img class="tecnologie-img" src="${tecnologies.html.img}" alt="${tecnologies.html.name}">
            </div>
          </div>
        </div>
        <div class="tecnologie-info">
        <h1>${tecnologies.css.name}</h1>
        <div class="tecnologie-data">
          <h2>${tecnologies.css.experience}</h2>
          <div class="tecnologie-img-container">
            <img class="tecnologie-img" src="${tecnologies.css.img}" alt="${tecnologies.css.name}">
          </div>
        </div>
      </div>
      <div class="tecnologie-info">
      <h1>${tecnologies.js.name}</h1>
      <div class="tecnologie-data">
        <h2>${tecnologies.js.experience}</h2>
        <div class="tecnologie-img-container">
          <img class="tecnologie-img" src="${tecnologies.js.img}" alt="${tecnologies.js.name}">
        </div>
      </div>
    </div>
    <div class="tecnologie-info">
      <h1>${tecnologies.node.name}</h1>
      <div class="tecnologie-data">
        <h2>${tecnologies.node.experience}</h2>
        <div class="tecnologie-img-container">
          <img class="tecnologie-img" src="${tecnologies.node.img}" alt="${tecnologies.node.name}">
        </div>
      </div>
    </div>
    <div class="tecnologie-info">
      <h1>${tecnologies.mongo.name}</h1>
      <div class="tecnologie-data">
        <h2>${tecnologies.mongo.experience}</h2>
        <div class="tecnologie-img-container">
          <img class="tecnologie-img" src="${tecnologies.mongo.img}" alt="${tecnologies.mongo.name}">
        </div>
      </div>
    </div>
    <div class="tecnologie-info">
      <h1>${tecnologies.react.name}</h1>
      <div class="tecnologie-data">
        <h2>${tecnologies.react.experience}</h2>
        <div class="tecnologie-img-container">
          <img class="tecnologie-img" src="${tecnologies.react.img}" alt="${tecnologies.react.name}">
        </div>
      </div>
    </div>
    <div class="tecnologie-info">
      <h1>${tecnologies.photoshop.name}</h1>
      <div class="tecnologie-data">
        <h2>${tecnologies.photoshop.experience}</h2>
        <div class="tecnologie-img-container">
          <img class="tecnologie-img" src="${tecnologies.photoshop.img}" alt="${tecnologies.photoshop.name}">
        </div>
      </div>
    </div>
    <div class="tecnologie-info">
      <h1>${tecnologies.lightroom.name}</h1>
      <div class="tecnologie-data">
        <h2>${tecnologies.lightroom.experience}</h2>
        <div class="tecnologie-img-container">
          <img class="tecnologie-img" src="${tecnologies.lightroom.img}" alt="${tecnologies.lightroom.name}">
        </div>
      </div>
    </div>
    <div class="tecnologie-info">
      <h1>${tecnologies.premiere.name}</h1>
      <div class="tecnologie-data">
        <h2>${tecnologies.premiere.experience}</h2>
        <div class="tecnologie-img-container">
          <img class="tecnologie-img" src="${tecnologies.premiere.img}" alt="${tecnologies.premiere.name}">
        </div>
      </div>
    </div>
    <div class="tecnologie-info">
      <h1>${tecnologies.avid.name}</h1>
      <div class="tecnologie-data">
        <h2>${tecnologies.avid.experience}</h2>
        <div class="tecnologie-img-container">
          <img class="tecnologie-img" src="${tecnologies.avid.img}" alt="${tecnologies.avid.name}">
        </div>
      </div>
    </div>
    <div class="tecnologie-info">
      <h1>${tecnologies.davinci.name}</h1>
      <div class="tecnologie-data">
        <h2>${tecnologies.davinci.experience}</h2>
        <div class="tecnologie-img-container">
          <img class="tecnologie-img" src="${tecnologies.davinci.img}" alt="${tecnologies.davinci.name}">
        </div>
      </div>
    </div>
  </div>
    `
}

const galleryConversionToHtml = (gallery) => {
    return`
        <div class="gallery-container">
          <h1>${gallery.landing1.name}</h1>
          <p>${gallery.landing1.description}</p>
        <div class="gallery-img-container">
          <img class="gallery-img" src="${gallery.landing1.cover}" alt="${gallery.landing1.name}">
        </div>
      </div>
      <div class="gallery-container">
              <h1>${gallery.landing2.name}</h1>
              <p>${gallery.landing2.description}</p>
          <div class="gallery-img-container">
              <img class="gallery-img" src="${gallery.landing2.cover}" alt="${gallery.landing2.name}">
          </div>
      </div>
      <div class="gallery-container">
              <h1>${gallery.landing3.name}</h1>
              <p>${gallery.landing3.description}</p>
          <div class="gallery-img-container">
              <img class="gallery-img" src="${gallery.landing3.cover}" alt="${gallery.landing3.name}">
          </div>
      </div>
    </div>
    `

}

const cvConversionToHtml = (cvInfo) => {
    return`
    <div class="cv-container">
      <div class="cv-info">
          <h1>${cv.gradomedio.name}</h1>
          <h2>${cv.gradomedio.institute}</h2>
          <h3>${cv.gradomedio.year}</h3>
          <p>${cv.gradomedio.description}</p>
      </div>
      <div class="cv-info">
          <h1>${cv.gradosuperior.name}</h1>
          <h2>${cv.gradosuperior.institute}</h2>
          <h3>${cv.gradosuperior.year}</h3>
          <p>${cv.gradosuperior.description}</p>
      </div>
      <div class="cv-info">
          <h1>${cv.operador.name}</h1>
          <h2>${cv.operador.institute}</h2>
          <h3>${cv.operador.year}</h3>
          <p>${cv.operador.description}</p>
      </div>
      <div class="cv-info">
          <h1>${cv.developer.name}</h1>
          <h2>${cv.developer.institute}</h2>
          <h3>${cv.developer.year}</h3>
      </div>
    </div>
    `
}

const rrssConversionToHtml = (rrss) => {
    return`
    <div class="contact-rrss">
    <a href="${rrss.linkedin.anchor}"><img class="gallery-img" src="${rrss.linkedin.logo}" alt="${rrss.linkedin.name}"></a>
    <a href="${rrss.github.anchor}"><img class="gallery-img" src="${rrss.github.logo}" alt="${rrss.github.name}"></a>
    </div>
    `
}

  // Container será cada uno de los querys - element cada uno de los bloques de html
const passToDocumentHtml = (container, functionCreateHTML, element) => {
    container.innerHTML += functionCreateHTML(element);
}


passToDocumentHtml(personalInfoHtml, personalInfoConversionHtml, personalInfo);
passToDocumentHtml(tecnologiesHtml, tecnologiesConversionHtml, tecnologies);
passToDocumentHtml(galleryHtml, galleryConversionToHtml, gallery);
passToDocumentHtml(rrssHtml, rrssConversionToHtml, rrss);
passToDocumentHtml(cvHtml, cvConversionToHtml, cvInfo);