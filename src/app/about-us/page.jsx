// "use client"

// function page() {
//   return (
//     <div>
//       about us
//       meet our team, photo , name  

//     </div>
//   )
// }

// export default page
"use client";

const teamMembers = [
  {
    name: "Bhargav Maru",
    role: "Full Stack Developer",
    image: "./bhargav_profile.jpeg",
    bio: "Bhargav is responsible for building reliable and scalable backend systems. With expertise in Node.js and cloud architecture, she ensures data flows securely and efficiently across all services.",
  },
  {
    name: "Jay Odedra",
    role: "Full Stack Developer & UI/UX Designer ",
    image: "./jay_profile.png",
    bio: "Bridging the gap between design and code, Jay crafts intuitive interfaces that not only look great but function seamlessly. With skills in both UI/UX design and frontend development, he transforms user needs into engaging digital experiences using tools like Figma, React, and Tailwind CSS.",
  },
  {
    name: "Harsh Vadher",
    role: "Frontend Developer",
    image: "./harsh_profile.jpeg",
    bio: "With a strong eye for detail and user behavior, Harsh develops responsive web applications that perform flawlessly across devices. His expertise lies in transforming complex requirements into clean, efficient code with React and Next.js.",
  },
  {
    name: "Keval Parmar",
    role: "Frontend Developer",
    image: "./keval_profile.jpg",
    bio: "Keval specializes in crafting seamless web interfaces using modern frameworks like React and Tailwind CSS. He focuses on creating fast, responsive, and accessible front-end experiences that delight users.",
  },
];

function AboutUs() {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">About Us</h2>

        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center mb-16 gap-8`}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover shadow-lg"
            />
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 max-w-xl">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
