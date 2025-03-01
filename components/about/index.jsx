import React from 'react';

function About() {
  return (
    <div className="w-[85%] mx-auto py-12 md:w-[90%] lg:w-[80%] xl:w-[70%]" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold">About Me</h1>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <p className="text-lg md:text-xl">
            I am a **Backend Engineer** with a passion for designing scalable and high-performance systems. 
            With expertise in **Golang, distributed systems, and cloud-native architectures**, I specialize in 
            building microservices that handle millions of requests efficiently.
          </p>
          <div>
            <p>
              Over the years, I've architected **fault-tolerant backend solutions**, optimized database queries 
              to slash CPU utilization, and deployed **containerized services** on **Kubernetes** for seamless 
              scalability. Whether it's implementing **real-time messaging systems with Kafka & RabbitMQ** or 
              enhancing API response times, I thrive on solving complex engineering challenges.
            </p>
            <p>
              My philosophy? **Reliability, performance, and simplicity.** I enjoy working with cutting-edge 
              technologies like **Redis, AWS, and Firecracker**, always striving to optimize system efficiency. 
              When I'm not coding, you'll find me exploring the latest trends in **distributed computing and 
              cloud infrastructure**.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
