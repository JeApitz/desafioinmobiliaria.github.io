let elem = document.querySelector(".row");
let plantilla = "";

const propiedades_ventas = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: "4 Habitaciones",
    costo: "5.000",
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: "1 Habitaciones",
    costo: "10.000",
    smoke: true,
    pets: false,
  },
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: "8 Habitaciones",
    costo: "20.000",
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa de lujo en zona hermosa",
    src: "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvcGllZGFkZXN8ZW58MHx8MHx8fDA%3D",
    descripcion:
      "La casa de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: "5 Habitaciones",
    costo: "30.000",
    smoke: true,
    pets: true,
  },
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: "8 Habitaciones",
    costo: "20.000",
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa de lujo en zona hermosa",
    src: "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvcGllZGFkZXN8ZW58MHx8MHx8fDA%3D",
    descripcion:
      "La casa de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: "5 Habitaciones",
    costo: "30.000",
    smoke: true,
    pets: true,
  },
];

for (propiedad of propiedades_ventas) {
  if (propiedad.smoke == true && propiedad.pets == true) {
    plantilla += `
                 <div class="col-md-4 mb-4">
                 <div class="card">
                 <img
                 src=${propiedad.src}
                 class="card-img-top"
                 alt="Imagen del departamento"
               />
                <div class="card-body">
                <h5 class="card-title">
                   ${propiedad.nombre}
                 </h5>
                 <p class="card-text">
                   ${propiedad.descripcion}
                 </p>
                 <p>
                   <i class="fas fa-map-marker-alt"></i>
                   ${propiedad.ubicacion}
                 </p>
                 <p>
                   <i class="fas fa-bed"></i> ${propiedad.habitaciones} |
                   <i class="fas fa-bath"></i> 4 Baños
                 </p>
                 <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                 <p class="text-success">
                   <i class="fas fa-smoking-ban"></i> Permitido fumar
                 </p>
                 <p class="text-success">
                   <i class="fa-solid fa-ban"></i> Mascotas permitidas
                 </p>
                 </div>
                 </div>
                 </div>
               `;
  } else if (propiedad.smoke == true && propiedad.pets == false) {
    plantilla += `
                 <div class="col-md-4 mb-4">
                 <div class="card">
                 <img
                 src=${propiedad.src}
                 class="card-img-top"
                 alt="Imagen del departamento"
               />
                <div class="card-body">
                <h5 class="card-title">
                   ${propiedad.nombre}
                 </h5>
                 <p class="card-text">
                   ${propiedad.descripcion}
                 </p>
                 <p>
                   <i class="fas fa-map-marker-alt"></i>
                   ${propiedad.ubicacion}
                 </p>
                 <p>
                   <i class="fas fa-bed"></i> ${propiedad.habitaciones} |
                   <i class="fas fa-bath"></i> 4 Baños
                 </p>
                 <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                 <p class="text-success">
                   <i class="fas fa-smoking-ban"></i> Permitido fumar
                 </p>
                 <p class="text-danger">
                   <i class="fa-solid fa-ban"></i> No se permiten mascotas
                 </p>
                 </div>
                 </div>
                 </div>
               `;
  } else if (propiedad.smoke == false && propiedad.pets == true) {
    plantilla += `
                 <div class="col-md-4 mb-4">
                 <div class="card">
                 <img
                 src=${propiedad.src}
                 class="card-img-top"
                 alt="Imagen del departamento"
               />
                <div class="card-body">
                <h5 class="card-title">
                   ${propiedad.nombre}
                 </h5>
                 <p class="card-text">
                   ${propiedad.descripcion}
                 </p>
                 <p>
                   <i class="fas fa-map-marker-alt"></i>
                   ${propiedad.ubicacion}
                 </p>
                 <p>
                   <i class="fas fa-bed"></i> ${propiedad.habitaciones} |
                   <i class="fas fa-bath"></i> 4 Baños
                 </p>
                 <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                 <p class="text-danger">
                   <i class="fas fa-smoking-ban"></i> No se permite fumar
                 </p>
                 <p class="text-success">
                   <i class="fa-solid fa-ban"></i> Mascotas permitidas
                 </p>
                 </div>
                 </div>
                 </div>
               `;
  } else {
    plantilla += `
                 <div class="col-md-4 mb-4">
                 <div class="card">
                 <img
                 src=${propiedad.src}
                 class="card-img-top"
                 alt="Imagen del departamento"
               />
                <div class="card-body">
                <h5 class="card-title">
                   ${propiedad.nombre}
                 </h5>
                 <p class="card-text">
                   ${propiedad.descripcion}
                 </p>
                 <p>
                   <i class="fas fa-map-marker-alt"></i>
                   ${propiedad.ubicacion}
                 </p>
                 <p>
                   <i class="fas fa-bed"></i> ${propiedad.habitaciones} |
                   <i class="fas fa-bath"></i> 4 Baños
                 </p>
                 <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                 <p class="text-danger">
                   <i class="fas fa-smoking-ban"></i> No se permite fumar
                 </p>
                 <p class="text-danger">
                   <i class="fa-solid fa-ban"></i> No se permiten mascotas
                 </p>
                 </div>
                 </div>
                 </div>
               `;
  }
}

elem.innerHTML = plantilla;
