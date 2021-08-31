import Footer from "./Footer";

function App() {
  const services = [
    {
      title: "UNIVERSIDAD",
      links: [
        {
          url: "https://www.usm.cl/universidad/historia/",
          value: "Nuestra Historia",
        },
        {
          url: "https://www.usm.cl/universidad/historia/",
          value: "Nuestra Historia",
        },
        {
          url: "https://www.usm.cl/universidad/historia/",
          value: "Nuestra Historia",
        },
        {
          url: "https://www.usm.cl/universidad/historia/",
          value: "Nuestra Historia",
        },
      ],
    },
    {
      title: "UNIVERSIDAD",
      links: [
        {
          url: "https://www.usm.cl/universidad/historia/",
          value: "Nuestra Historia",
        },
        {
          url: "https://www.usm.cl/universidad/historia/",
          value: "Nuestra Historia",
        },
        {
          url: "https://www.usm.cl/universidad/historia/",
          value: "Nuestra Historia",
        },
        {
          url: "https://www.usm.cl/universidad/historia/",
          value: "Nuestra Historia",
        },
      ],
    },
    {
      title: "UNIVERSIDAD",
      links: [
        {
          url: "https://www.usm.cl/universidad/historia/",
          value: "Nuestra Historia",
        },
        {
          url: "https://www.usm.cl/universidad/historia/",
          value: "Nuestra Historia",
        },
        {
          url: "https://www.usm.cl/universidad/historia/",
          value: "Nuestra Historia",
        },
        {
          url: "https://www.usm.cl/universidad/historia/",
          value: "Nuestra Historia",
        },
      ],
    },
  ];

  const images = [
    "https://vrea.usm.cl/wp-content/uploads//2021/06/logo-acreditacion_blanco.svg",
    "https://vrea.usm.cl/wp-content/uploads//2021/06/usm_cl.svg",
    "https://vrea.usm.cl/wp-content/uploads//2021/06/logo-90anios_blanco.svg",
  ];
  const sliderImages = [
    "https://vrea.usm.cl/wp-content/uploads/2021/04/logo_acceso.svg",
    "https://vrea.usm.cl/wp-content/uploads/2021/04/LOGO-CRUV-BLANCO.svg",
    "	https://vrea.usm.cl/wp-content/uploads/2021/04/logo_reuna.svg",
  ];
  return (
    <>
      <Footer services={services} images={images} sliderImages={sliderImages} />
    </>
  );
}

export default App;
