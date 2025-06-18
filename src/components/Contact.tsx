import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const iconStyle =
  "flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 shadow-lg transition-transform duration-300 hover:scale-110";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss opportunities to collaborate on data science and AI projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 text-center border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
            <span className={iconStyle}>
              <Mail className="w-8 h-8 text-blue-400" />
            </span>
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-300 mb-4">manojkumar9384@outlook.com</p>
            <a
              href="mailto:manojkumar9384@outlook.com"
              className="inline-flex items-center px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors duration-200"
            >
              Send Email
            </a>
          </div>

          <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 text-center border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
            <span className={iconStyle}>
              <Phone className="w-8 h-8 text-blue-400" />
            </span>
            <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
            <p className="text-gray-300 mb-4">+91 7826807488</p>
            <a
              href="tel:+917826807488"
              className="inline-flex items-center px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors duration-200"
            >
              Call Now
            </a>
          </div>

          <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 text-center border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
            <span className={iconStyle}>
              <MapPin className="w-8 h-8 text-blue-400" />
            </span>
            <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
            <p className="text-gray-300 mb-4">Dindigul, Tamil Nadu, India</p>
            <div className="flex justify-center items-center gap-4 sm:gap-6 mt-2">
              <a
                href="https://www.linkedin.com/in/manojkumartechie/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg hover:scale-110 transition-transform duration-300 overflow-hidden"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-7 h-7 text-white" />
              </a>
              <a
                href="https://github.com/manojkumartechie"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-gray-700 to-black shadow-lg hover:scale-110 transition-transform duration-300 overflow-hidden"
                aria-label="GitHub Profile"
              >
                <Github className="w-7 h-7 text-white" />
              </a>
              <a
                href="https://leetcode.com/manojkumartechie/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg hover:scale-110 transition-transform duration-300 overflow-hidden"
                aria-label="LeetCode Profile"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                </svg>
              </a>
              <a
                href="https://www.kaggle.com/manojkumartechie"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 shadow-lg hover:scale-110 transition-transform duration-300 overflow-hidden"
                aria-label="Kaggle Profile"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor">
                  <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353C5.151.117 5.269 0 5.505 0h2.431c.234 0 .351.117.351.353v9.514l6.203-6.157c.117-.095.245-.141.382-.141h3.176c.163 0 .258.117.258.352 0 .094-.023.188-.07.283l-5.507 5.736 5.835 7.132c.047.095.07.189.07.283l.234.034c.049.023.073.117.073.283 0 .095-.023.189-.07.283l-5.272 5.736c-.117.095-.245.141-.382.141h-3.176c-.163 0-.258-.117-.258-.352 0-.094.023-.188.07-.283l5.507-5.736-5.835-7.132c-.047-.095-.07-.189-.07-.283 0-.164.095-.281.281-.281h3.139c.187 0 .351.082.492.248l5.178 6.589 1.448-1.374V5.505c0-.235.117-.352.351-.352h2.431c.236 0 .354.117.354.352v18.142c0 .236-.118.354-.354.354h-2.431c-.234 0-.351-.118-.351-.354v-9.514l-6.203 6.157c-.117.095-.245.141-.382.141h-3.176c-.163 0-.258-.117-.258-.352 0-.094.023-.188.07-.283l5.507-5.736-5.835-7.132c-.047-.095-.07-.189-.07-.283 0-.164.095-.281.281-.281h3.139c.187 0 .351.082.492.248l5.178 6.589 1.448-1.374V.353c0-.235.117-.352.351-.352h2.431c.236 0 .354.117.354.352v23.506z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;