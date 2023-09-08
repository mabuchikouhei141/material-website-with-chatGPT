import React from 'react';
import Link from 'next/link';
import 'font-awesome/css/font-awesome.min.css';



function Main() {

    

const members = [
    {
      name: "John Doe",
      role: "CEO",
      image: "https://picsum.photos/200/200?random=1",
      description: "John is the visionary behind our solutions. He leads with passion and expertise.",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: "https://picsum.photos/200/200?random=2",
      description: "Jane is the technical genius, ensuring our products are top-notch and innovative.",
    },
    {
      name: "Emily Johnson",
      role: "CFO",
      image: "https://picsum.photos/200/200?random=3",
      description: "Emily ensures our financial strategies are sound and forward-looking.",
    },
    // ... add more members as needed
  ];
  
  return (
    <main id='home' className="p-4 md:p-8 lg:p-16 bg-gray-100 min-h-screen mt-20">

      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-16 mb-8 rounded-lg">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4">
          HERO TITLE
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl mb-8">
          A powerful tagline or description.
        </p>
        <button className="text-indigo-600 bg-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-100 transition">
          Get Started
        </button>
      </section>

      <section className="container mx-auto">

        <h2 className="text-center my-28 text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          NEWS
        </h2>
        
        <article className="bg-white p-6 rounded-lg shadow-lg mb-8 flex flex-col md:flex-row">
          <img src="https://picsum.photos/200/300" alt="Random" className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-6" />
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              SUB HEADER
            </h2>
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales ut tellus eget fermentum. Curabitur vel tincidunt metus, non facilisis enim.
            </p>
          </div>
        </article>

        <article className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row">
          <img src="https://picsum.photos/200/300?random=2" alt="Random" className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-6" />
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              SUB HEADER2
            </h2>
            <p className="text-lg leading-relaxed">
              Morbi volutpat, justo in dapibus auctor, urna elit interdum velit, a sodales dui purus vitae purus. Sed euismod tellus eu ligula euismod, in commodo purus vehicula.
            </p>
          </div>
        </article>
        
      </section>
      <section id='about' className="container mx-auto my-28">
  <h1 className="text-center text-5xl md:text-6xl font-bold mb-8">ABOUT US</h1>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    <div>
      <img src="https://picsum.photos/400/400?random=3" alt="About Us" className="rounded-lg shadow-md w-full" />
    </div>
    <div>
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Journey</h2>
      <p className="text-lg leading-relaxed mb-4">
        Since our establishment in 20XX, we have been dedicated to providing the best solutions for our clients. Our team is driven by passion and innovation, striving to achieve excellence in every project we take on.
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Mission</h2>
      <p className="text-lg leading-relaxed">
        We aim to transform the industry by providing top-notch services and fostering relationships based on trust and reliability. Your success is our success, and together we can achieve great things.
      </p>
    </div>
  </div>
</section>
<section id='concept' className="container mx-auto my-28">
  <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center">CONCEPT</h2>
  
  <div className="flex flex-wrap -mx-4">
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
      <div className="p-6 bg-white rounded-lg shadow-md h-full  ">
        <img src="https://picsum.photos/400/300?random=4" alt="Concept 1" className="rounded-t-lg mb-4" />
        <h2 className="text-2xl font-semibold mb-4">Innovation</h2>
        <p className="text-lg leading-relaxed line-clamp-3">
          Embracing the latest technology to deliver state-of-the-art solutions for our clients.
        </p>
      </div>
    </div>

    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
      <div className="p-6 bg-white rounded-lg shadow-md h-full ">
        <img src="https://picsum.photos/400/300?random=5" alt="Concept 2" className="rounded-t-lg mb-4" />
        <h2 className="text-2xl font-semibold mb-4">Quality</h2>
        <p className="text-lg leading-relaxed line-clamp-3">
          We don't compromise on quality. Each project undergoes rigorous testing to ensure it meets our high standards.
        </p>
      </div>
    </div>

    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
      <div className="p-6 bg-white rounded-lg shadow-md h-full ">
        <img src="https://picsum.photos/400/300?random=6" alt="Concept 3" className="rounded-t-lg mb-4" />
        <h2 className="text-2xl font-semibold mb-4 truncate">Collaboration</h2>
        <p className="text-lg leading-relaxed line-clamp-3">
          Working hand-in-hand with our clients to transform their vision into reality.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reiciendis quis at ea eius, ullam tenetur quae sint quisquam, debitis iure aliquid provident! Id voluptas distinctio iure tempore excepturi ad.
        </p>
      </div>
    </div>
  </div>
</section>


<section id='works' className="container mx-auto my-28">
  <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center">WORKS</h2>
  
  <div className="flex flex-wrap -mx-4 -z-50">
    {[1, 2, 3, 4].map((i) => (
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8" key={i}>
          <Link href={`/works/${i}`} className="block p-6 bg-white rounded-lg shadow-md h-full transition-transform transform hover:scale-105">
            <img src={`https://picsum.photos/400/300?random=${i+6}`} alt={`Work ${i}`} className="rounded-t-lg mb-4 w-full h-48 object-cover" />
            <h2 className="text-2xl font-semibold mb-4 truncate">Project Title Number ${i}</h2>
            <p className="text-lg leading-relaxed line-clamp-2">
              This is a brief description of the project or achievement. Descriptions provide context and insight.
            </p>
          </Link>
      </div>
    ))}
  </div>
</section>


<section id='service' className="container mx-auto my-28">
  <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center">SERVICES</h1>
  
  <div className="flex flex-wrap justify-center -mx-4">
    {[
      { title: 'Design', desc: 'High-quality designs for your business needs.' },
      { title: 'Development', desc: 'Cutting-edge solutions using modern tech.' },
      { title: 'Consultation', desc: 'Expert advice and strategy planning.' },
      { title: 'Support', desc: 'Dedicated support for all our services.' }
    ].map((service, i) => (
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8" key={i}>
        <div className="block p-6 bg-white rounded-lg shadow-md h-full transition-transform transform hover:scale-105 text-center">
          <img src={`https://picsum.photos/100/100?random=${i+10}`} alt={`${service.title} Icon`} className="mb-4 mx-auto w-16 h-16 object-cover rounded-full" />
          <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
          <p className="text-lg leading-relaxed">
            {service.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

<section id='menber' className="container mx-auto my-28">
  <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center">MEMBER</h1>
  
  <div className="grid md:grid-cols-3 gap-8 items-start">
    {members.map((member) => (
      <div className="bg-white p-6 h-full rounded-lg shadow-md flex flex-col justify-center ">
        <img src={member.image} alt={`Portrait of ${member.name}`} className="rounded-full w-48 h-48 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-2 text-center">{member.name}</h2>
        <p className="text-center mb-4">{member.role}</p>
        <p className="text-lg leading-relaxed text-center">{member.description}</p>
      </div>
    ))}
  </div>
</section>


<section className="container mx-auto my-16">
  <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center">CONTACT</h1>
  
  <div className="grid md:grid-cols-2 gap-8 items-start">

    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" className="w-full p-2 border rounded"/>
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" className="w-full p-2 border rounded"/>
        </div>
        
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
          <textarea id="message" name="message" rows="4" placeholder="Your Message" className="w-full p-2 border rounded"></textarea>
        </div>
        
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">Send</button>
      </form>
    </div>
    <div>
    <div className="bg-white p-6 rounded-lg shadow-md mb-10">
      <h2 className="text-2xl font-semibold mb-4">General Contact Info</h2>
      <p><strong>Email:</strong> info@example.com</p>
      <p><strong>Phone:</strong> +123-456-7890</p>
      <p><strong>Address:</strong> 123 Main St, City, Country 12345</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4">SNS Info</h2>
    
    <div className="flex space-x-4">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fa fa-facebook-square text-3xl"></i>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fa fa-twitter-square text-3xl"></i>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fa fa-instagram text-3xl"></i>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fa fa-linkedin-square text-3xl"></i>
        </a>
    </div>
</div>
    </div>
  </div>
</section>
    </main>
  )
}

export default Main;
