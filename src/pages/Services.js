import React from "react";
import Service from "../components/Service";
import videoFile3 from "../img/VID-20230815-WA0024.mp4";
import videoFile2 from "../img/home1.mp4";
import tour from "../img/hotel.jpg";
import image2 from "../img/cleaners.jpg";
const servicesData = [
  {
    serviceName: "Maids",
    description:
      "Rediscover cleanliness and tranquility at home with our attentive maid service. Our expert team ensures thorough cleaning, using eco-friendly products. From regular maintenance to deep cleansing, our maids create a pristine environment for your peace of mind.",
    videoUrl: videoFile2,
  },
  {
    serviceName: "Security Guards",
    description:
      "Experience safety and peace of mind with our vigilant security guards. Our trained professionals ensure round-the-clock protection, enhancing your premises' security. From preventing unauthorized access to maintaining a secure environment, our security guards prioritize your safety.",
    videoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQThrI3qNRFBbFXRVxAS5qXUH-QvL3B7N1Hhw&usqp=CAU",
  },
  {
    serviceName: "Air conditioners Installation",
    description:
      "Experience hassle-free Air Conditioner installation by our skilled technicians. Stay comfortable indoors with our efficient service. Book now for a prompt and professional setup. Your cooling needs are our priority.",
    videoUrl: "https://www.youtube.com/embed/q1eynPGZAHo?controls=0",
  },
  {
    serviceName: "Dubai Tourism",
    description:
      "Immerse yourself in the captivating fusion of Dubai's vibrancy and the enchanting African wildlife. Our exceptional combination seamlessly bridges the gap between the essence of Dubai and the natural world, resulting in an extraordinary and indelible journey. Encounter the unparalleled charm of Dubai while being surrounded by the untamed beauty of African landscapes, forging a remarkable and unforgettable adventure that harmoniously marries urban excitement with the serenity of nature.",
    videoUrl: tour,
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
    videoUrl: image2,
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
