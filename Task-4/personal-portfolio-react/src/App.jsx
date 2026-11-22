function App() {
  return (
    <>
      <header className="bg-[#000080] text-white p-5 text-center">
        <div>
          <h1>Zunayed Hossain</h1>
          <p>Web Developer</p>
        </div>
        <nav>
          <a href="#home" className="text-white mx-2.5">Home</a>
          <a href="#about" className="text-white mx-2.5">About</a>
          <a href="#skills" className="text-white mx-2.5">Skills</a>
          <a href="#education" className="text-white mx-2.5">Education</a>
          <a href="#contact" className="text-white mx-2.5">Contact</a>
        </nav>
      </header>

      <section id="home" className="m-5 p-5 bg-[#add8e6]">
        <h2>Home</h2>
        <img
          src="/zunayed_image.jpeg"
          alt="Zunayed Hossain"
          width="200"
          className="w-[200px]"
        />
        <div>
          <h2>Hello, I am Zunayed</h2>
          <p>I am a Web Developer.</p>
          <a href="#contact">Contact Me</a>
        </div>
      </section>

      <section id="about" className="m-5 p-5 bg-[#90ee90]">
        <h2>About Me</h2>
        <p>
          I love to create simple and useful websites.
          I am learning HTML and CSS.
          My goal is to become a professional Web Developer.
        </p>
      </section>

      <section id="skills" className="m-5 p-5 bg-[#008b8b]">
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>MERN</li>
          <li>PERN</li>
          <li>Git &amp; GitHub</li>
        </ul>
      </section>

      <section id="education" className="m-5 p-5">
        <h2>Education</h2>
        <table className="w-full">
          <tbody>
            <tr>
              <th className="border border-black p-2.5 bg-[#00ffff]">Degree</th>
              <th className="border border-black p-2.5 bg-[#00ffff]">Institution</th>
              <th className="border border-black p-2.5 bg-[#00ffff]">Year</th>
              <th className="border border-black p-2.5 bg-[#00ffff]">Result</th>
            </tr>
            <tr>
              <td className="border border-black p-2.5 bg-[#00ffff]">SSC</td>
              <td className="border border-black p-2.5 bg-[#00ffff]">GMHSK</td>
              <td className="border border-black p-2.5 bg-[#00ffff]">2020</td>
              <td className="border border-black p-2.5 bg-[#00ffff]">4.70</td>
            </tr>
            <tr>
              <td className="border border-black p-2.5 bg-[#00ffff]">HSC</td>
              <td className="border border-black p-2.5 bg-[#00ffff]">L&amp;S College</td>
              <td className="border border-black p-2.5 bg-[#00ffff]">2022</td>
              <td className="border border-black p-2.5 bg-[#00ffff]">4.50</td>
            </tr>
            <tr>
              <td className="border border-black p-2.5 bg-[#00ffff]">BSc in CSE</td>
              <td className="border border-black p-2.5 bg-[#00ffff]">NUBTK</td>
              <td className="border border-black p-2.5 bg-[#00ffff]">2027</td>
              <td className="border border-black p-2.5 bg-[#00ffff]">3.50</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="contact" className="m-5 p-5 bg-[#ffffe0]">
        <h2>Contact Me</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="p-2 m-1.5"
            placeholder="Enter your name"
          />
          <br />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="p-2 m-1.5"
            placeholder="Enter your email"
          />
          <br />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            className="p-2 m-1.5"
            placeholder="Write your message..."
          />
          <br />

          <label>Gender:</label>
          <input type="radio" name="gender" value="Male" /> Male
          <input type="radio" name="gender" value="Female" /> Female
          <br />

          <label>Skills:</label>
          <input type="checkbox" name="skills" value="HTML" /> HTML
          <input type="checkbox" name="skills" value="CSS" /> CSS
          <input type="checkbox" name="skills" value="JavaScript" /> JavaScript
          <input type="checkbox" name="skills" value="NodeJs" /> Node.js
          <input type="checkbox" name="skills" value="React" /> React.js
          <input type="checkbox" name="skills" value="Express" /> Express.js
          <input type="checkbox" name="skills" value="MongoDB" /> MongoDB
          <br />

          <input type="submit" value="Submit" className="p-2 m-1.5" />
        </form>
      </section>

      <footer className="bg-[#000080] text-white text-center p-[15px]">
        <p>All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
