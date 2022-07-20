import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, avatar, name, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;

const data = [
  {
    id: 1,
    avatar: AVATAR1,
    name: "Name 1",
    review:
      "Voluptate culpa irure eiusmod velit tempor pariatur duis aute eiusmod. Sit cupidatat minim id cupidatat eiusmod ipsum elit excepteur cillum ipsum cupidatat. Laboris minim elit cillum est aliqua ex ea excepteur enim eu pariatur eiusmod pariatur. Sunt quis nisi officia tempor. Ad minim in ipsum ipsum consectetur ea. Elit sit sit ex pariatur dolore minim aliquip.",
  },
  {
    id: 2,
    avatar: AVATAR2,
    name: "Name 2",
    review:
      "Elit qui consectetur proident eiusmod qui. Velit eiusmod consequat labore magna nostrud officia. Laborum aute exercitation consectetur et.",
  },
  {
    id: 3,
    avatar: AVATAR3,
    name: "Name 3",
    review:
      "Nisi amet Lorem ad enim enim duis officia Lorem velit fugiat mollit ut. Sint consequat veniam quis aliqua amet veniam ea ullamco occaecat pariatur elit labore dolore mollit. Consectetur ut excepteur occaecat duis. Eiusmod dolor enim deserunt excepteur dolore irure ex irure laboris qui commodo eiusmod.",
  },
  {
    id: 4,
    avatar: AVATAR4,
    name: "Name 4",
    review:
      "Elit et eu ex deserunt ea. Amet ullamco dolore anim culpa. Aute id culpa culpa amet nulla id exercitation incididunt mollit Lorem. Do veniam pariatur aute consequat Lorem et eu in enim quis in nulla cillum. Proident et elit sunt nostrud sunt eu commodo dolore nostrud. Ex aute ad excepteur dolor id commodo ex aliquip enim nostrud minim consectetur et pariatur.",
  },
];
