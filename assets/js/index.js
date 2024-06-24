let venta = document.getElementById('en_venta');
let alquiler = document.getElementById('en_alquiler');
let plantilla = "";
let template = '';

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

const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: "2 Habitaciones",
    costo: "2.000",
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: "3 Habitaciones",
    costo: "2.500",
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      " Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: "2 Habitaciones",
    costo: "2.200",
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: "2 Habitaciones",
    costo: "2.000",
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: "3 Habitaciones",
    costo: "2.500",
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      " Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: "2 Habitaciones",
    costo: "2.200",
    smoke: false,
    pets: false,
  },
];

for (let i = 0; i < 3; i++) {
  if (
    propiedades_ventas[i].smoke == true &&
    propiedades_ventas[i].pets == true
  ) {
    plantilla += `
                     <div class="col-md-4 mb-4">
                     <div class="card">
                     <img
                     src=${propiedades_ventas[i].src}
                     class="card-img-top"
                     alt="Imagen del departamento"
                   />
                    <div class="card-body">
                    <h5 class="card-title">
                       ${propiedades_ventas[i].nombre}
                     </h5>
                     <p class="card-text">
                       ${propiedades_ventas[i].descripcion}
                     </p>
                     <p>
                       <i class="fas fa-map-marker-alt"></i>
                       ${propiedades_ventas[i].ubicacion}
                     </p>
                     <p>
                       <i class="fas fa-bed"></i> ${propiedades_ventas[i].habitaciones} |
                       <i class="fas fa-bath"></i> 4 Baños
                     </p>
                     <p><i class="fas fa-dollar-sign"></i> ${propiedades_ventas[i].costo}</p>
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
  } else if (
    propiedades_ventas[i].smoke == true &&
    propiedades_ventas[i].pets == false
  ) {
    plantilla += `
                     <div class="col-md-4 mb-4">
                     <div class="card">
                     <img
                     src=${propiedades_ventas[i].src}
                     class="card-img-top"
                     alt="Imagen del departamento"
                   />
                    <div class="card-body">
                    <h5 class="card-title">
                       ${propiedades_ventas[i].nombre}
                     </h5>
                     <p class="card-text">
                       ${propiedades_ventas[i].descripcion}
                     </p>
                     <p>
                       <i class="fas fa-map-marker-alt"></i>
                       ${propiedades_ventas[i].ubicacion}
                     </p>
                     <p>
                       <i class="fas fa-bed"></i> ${propiedades_ventas[i].habitaciones} |
                       <i class="fas fa-bath"></i> 4 Baños
                     </p>
                     <p><i class="fas fa-dollar-sign"></i> ${propiedades_ventas[i].costo}</p>
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
  } else if (
    propiedades_ventas[i].smoke == false &&
    propiedades_ventas[i].pets == true
  ) {
    plantilla += `
                     <div class="col-md-4 mb-4">
                     <div class="card">
                     <img
                     src=${propiedades_ventas[i].src}
                     class="card-img-top"
                     alt="Imagen del departamento"
                   />
                    <div class="card-body">
                    <h5 class="card-title">
                       ${propiedades_ventas[i].nombre}
                     </h5>
                     <p class="card-text">
                       ${propiedades_ventas[i].descripcion}
                     </p>
                     <p>
                       <i class="fas fa-map-marker-alt"></i>
                       ${propiedades_ventas[i].ubicacion}
                     </p>
                     <p>
                       <i class="fas fa-bed"></i> ${propiedades_ventas[i].habitaciones} |
                       <i class="fas fa-bath"></i> 4 Baños
                     </p>
                     <p><i class="fas fa-dollar-sign"></i> ${propiedades_ventas[i].costo}</p>
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
                     src=${propiedades_ventas[i].src}
                     class="card-img-top"
                     alt="Imagen del departamento"
                   />
                    <div class="card-body">
                    <h5 class="card-title">
                       ${propiedades_ventas[i].nombre}
                     </h5>
                     <p class="card-text">
                       ${propiedades_ventas[i].descripcion}
                     </p>
                     <p>
                       <i class="fas fa-map-marker-alt"></i>
                       ${propiedades_ventas[i].ubicacion}
                     </p>
                     <p>
                       <i class="fas fa-bed"></i> ${propiedades_ventas[i].habitaciones} |
                       <i class="fas fa-bath"></i> 4 Baños
                     </p>
                     <p><i class="fas fa-dollar-sign"></i> ${propiedades_ventas[i].costo}</p>
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

for (let i = 0; i < 3; i++) {
  if (
    propiedades_alquiler[i].smoke == true &&
    propiedades_alquiler[i].pets == true
  ) {
    template += `
                     <div class="col-md-4 mb-4">
                     <div class="card">
                     <img
                     src=${propiedades_alquiler[i].src}
                     class="card-img-top"
                     alt="Imagen del departamento"
                   />
                    <div class="card-body">
                    <h5 class="card-title">
                       ${propiedades_alquiler[i].nombre}
                     </h5>
                     <p class="card-text">
                       ${propiedades_alquiler[i].descripcion}
                     </p>
                     <p>
                       <i class="fas fa-map-marker-alt"></i>
                       ${propiedades_alquiler[i].ubicacion}
                     </p>
                     <p>
                       <i class="fas fa-bed"></i> ${propiedades_alquiler[i].habitaciones} |
                       <i class="fas fa-bath"></i> 4 Baños
                     </p>
                     <p><i class="fas fa-dollar-sign"></i> ${propiedades_alquiler[i].costo}</p>
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
  } else if (
    propiedades_alquiler[i].smoke == true &&
    propiedades_alquiler[i].pets == false
  ) {
    template += `
                     <div class="col-md-4 mb-4">
                     <div class="card">
                     <img
                     src=${propiedades_alquiler[i].src}
                     class="card-img-top"
                     alt="Imagen del departamento"
                   />
                    <div class="card-body">
                    <h5 class="card-title">
                       ${propiedades_alquiler[i].nombre}
                     </h5>
                     <p class="card-text">
                       ${propiedades_alquiler[i].descripcion}
                     </p>
                     <p>
                       <i class="fas fa-map-marker-alt"></i>
                       ${propiedades_alquiler[i].ubicacion}
                     </p>
                     <p>
                       <i class="fas fa-bed"></i> ${propiedades_alquiler[i].habitaciones} |
                       <i class="fas fa-bath"></i> 4 Baños
                     </p>
                     <p><i class="fas fa-dollar-sign"></i> ${propiedades_alquiler[i].costo}</p>
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
  } else if (
    propiedades_alquiler[i].smoke == false &&
    propiedades_alquiler[i].pets == true
  ) {
    template += `
                     <div class="col-md-4 mb-4">
                     <div class="card">
                     <img
                     src=${propiedades_alquiler[i].src}
                     class="card-img-top"
                     alt="Imagen del departamento"
                   />
                    <div class="card-body">
                    <h5 class="card-title">
                       ${propiedades_alquiler[i].nombre}
                     </h5>
                     <p class="card-text">
                       ${propiedades_alquiler[i].descripcion}
                     </p>
                     <p>
                       <i class="fas fa-map-marker-alt"></i>
                       ${propiedades_alquiler[i].ubicacion}
                     </p>
                     <p>
                       <i class="fas fa-bed"></i> ${propiedades_alquiler[i].habitaciones} |
                       <i class="fas fa-bath"></i> 4 Baños
                     </p>
                     <p><i class="fas fa-dollar-sign"></i> ${propiedades_alquiler[i].costo}</p>
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
    template += `
                     <div class="col-md-4 mb-4">
                     <div class="card">
                     <img
                     src=${propiedades_alquiler[i].src}
                     class="card-img-top"
                     alt="Imagen del departamento"
                   />
                    <div class="card-body">
                    <h5 class="card-title">
                       ${propiedades_alquiler[i].nombre}
                     </h5>
                     <p class="card-text">
                       ${propiedades_alquiler[i].descripcion}
                     </p>
                     <p>
                       <i class="fas fa-map-marker-alt"></i>
                       ${propiedades_alquiler[i].ubicacion}
                     </p>
                     <p>
                       <i class="fas fa-bed"></i> ${propiedades_alquiler[i].habitaciones} |
                       <i class="fas fa-bath"></i> 4 Baños
                     </p>
                     <p><i class="fas fa-dollar-sign"></i> ${propiedades_alquiler[i].costo}</p>
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

venta.innerHTML = plantilla;
alquiler.innerHTML = template;