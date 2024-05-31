import React from 'react';

const About = () => {
  const name = 'Hi, this is Shiyam Robert,';

  const from = 'Based in India, IN';

  const paragraphText1 =
    "Hey there! 👋 As a dedicated front-end developer, I'm all about creating amazing digital experiences that truly stand out. I'm super passionate about technology and creativity, and I'm always excited to learn new tools and techniques to bring fresh ideas to life. I specialize in turning designs into interactive web apps that not only look fantastic but also provide seamless user experiences. Attention to detail and a commitment to excellence are my jam, and I love nothing more than crafting websites that leave a lasting impression. Let's team up and make your online presence shine! ";
  const paragraphText2 =
    "A passionate front-end developer with a focus on crafting captivating digital experiences. Embracing a love for technology and creativity, I thrive on mastering new tools and techniques to deliver innovative solutions. With expertise in transforming designs into interactive web applications, I ensure seamless user experiences and visually striking interfaces. My attention to detail and commitment to excellence drive me to create compelling websites that leave a lasting impact. Let's collaborate to enhance your digital presence and bring your ideas to life!";

  const splitName = name.split(' ');

  const splitFrom = from.split(' ');

  const splitParagraphWords1 = paragraphText1.split(' ');
  const splitParagraphWords2 = paragraphText2.split(' ');

  return (
    <section className="about h-screen px-7 md:px-10 lg:px-16 xl:px-20 text-white/70">
      <div className=" bg-black-2 rounded-[2rem]">
        <div className="md:hidden block font-neue-montreal py-8 px-8">
          <p
            style={{
              fontSize: 'calc(0.8rem + 1vw)',
              lineHeight: 'calc(1rem + 3vw)',
            }}
          >
            {splitParagraphWords1.map((text, index) => (
              <span key={index} className="inline-block mr-3">
                {text}
              </span>
            ))}{' '}
          </p>
        </div>
        <div className="hidden md:block p-14 lg:p-20 xl:p-24 2xl:p-32">
          <div className="flex-between">
            <div>
              <h2
                style={{
                  fontSize: 'calc(0.9rem + 1vw)',
                  lineHeight: 'calc(3rem + 2vw)',
                }}
                className="text-left font-neue-montreal"
              >
                {splitName.map((name, index) => (
                  <span key={index} className="inline-block word mr-2.5">
                    {name}
                  </span>
                ))}
              </h2>
            </div>
            <div>
              <h2
                style={{
                  fontSize: 'calc(0.9rem + 1vw)',
                  lineHeight: 'calc(3rem + 2vw)',
                }}
                className="text-left font-neue-montreal"
              >
                {splitFrom.map((from, index) => (
                  <span key={index} className="inline-block mr-2.5">
                    {from}
                  </span>
                ))}
              </h2>
            </div>
          </div>
          <div className="w-full h-[1px] bg-white/70 my-6" />
          <div>
            <p
              style={{
                fontSize: 'calc(0.8rem + 1vw)',
                lineHeight: 'calc(1rem + 3vw)',
              }}
            >
              {splitParagraphWords2.map((text, index) => (
                <span key={index} className="inline-block mr-3 word">
                  {text}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
