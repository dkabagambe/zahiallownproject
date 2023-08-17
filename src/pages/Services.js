import React from "react";
import Service from "../components/Service";
import videoFile3 from "../img/VID-20230815-WA0024.mp4";
// import videoFile1 from "../img/VID-20230815-WA0025.mp4";
// import videoFile2 from "../img/VID-20230815-WA0023.mp4";

const servicesData = [
  {
    serviceName: "Labour Supply",
    description:
      "Looking for skilled and reliable labor supply? Our dedicated workforce is ready to assist you with a range of tasks, from construction to maintenance. We provide hardworking professionals who are trained to handle various manual and technical jobs efficiently",
    videoUrl: "https://www.youtube.com/embed/q1eynPGZAHo?controls=0",
  },
  {
    serviceName: "Helpers at Sites",
    description:
      "Make your construction sites more efficient with our experienced helpers. Our team of site assistants is well-versed in providing support to construction projects. Whether it's lifting, carrying, or organizing materials, our helpers ensure a smooth workflow at your sites.",
    videoUrl: "https://www.youtube.com/embed/M32JRrVoVhQ?controls=0&showinfo=0",
  },
  {
    serviceName: "Sales Personnels",
    description:
      "Boost your business's sales and customer interactions with our dedicated sales personnel. Our experienced team members are trained to understand your products or services thoroughly and communicate their value effectively to potential customers. They are skilled at building relationships and closing deals.",
    videoUrl: videoFile3,
  },
  {
    serviceName: "Technicians",
    description:
      "When it comes to technical expertise, our technicians have you covered. From repairing equipment to handling complex installations, our skilled technicians bring a wealth of experience and knowledge to tackle a variety of technical challenges.",
    videoUrl: "https://www.youtube.com/embed/7Gazj3_hDEU?controls=0&showinfo=0",
  },
  {
    serviceName: "Cleaners",
    description:
      "Maintain a clean and organized environment with our professional cleaning services. Our team of cleaners ensures that your spaces are spotless and hygienic, providing a comfortable and welcoming atmosphere for employees and visitors alike.",
    videoUrl: "https://www.youtube.com/embed/48vawUlO7ag?controls=0&showinfo=0",
  },
  {
    serviceName: "Hotel Booking",
    description:
      "Planning a getaway? Let us take care of your hotel booking needs. With our extensive network of accommodations, we can help you find the perfect hotel for your travel preferences. Whether it's a luxurious resort or a cozy inn, we make sure your stay is comfortable and enjoyable.",
    videoUrl: "https://www.youtube.com/embed/FyPGUImfkOQ?controls=0&showinfo=0",
  },
  {
    serviceName: "Driving",
    description:
      "Need a reliable and experienced driver? Our driving services offer safe and efficient transportation solutions. Whether you require a chauffeur for special occasions or a skilled driver for your daily commute, our professionals ensure a smooth and secure journey.",
    videoUrl: "https://www.youtube.com/embed/DvF_AoGm-wE?controls=0&showinfo=0",
  },
];

const ServicesPage = () => {
  return (
    <div>
      <h2>Our Services</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <Service
            key={index}
            serviceName={service.serviceName}
            description={service.description}
            videoUrl={service.videoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
