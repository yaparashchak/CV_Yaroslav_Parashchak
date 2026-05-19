import { Mail, Phone, MessageCircle, Briefcase, GraduationCap, Award, Code } from 'lucide-react';
import { motion } from 'motion/react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl w-full text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-blue-400/30">
              CV
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Yaroslav Parashchak
          </h1>

          <p className="text-2xl sm:text-3xl text-blue-300 mb-8 font-light">
            Senior QA Engineer
          </p>

          <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Senior QA Engineer with 6+ years of experience ensuring quality in high-load, high-traffic software products.
            Skilled in process optimization, test strategy, and coordinating automation efforts across teams. Delivered significant
            efficiency improvements and cost savings by optimizing testing processes, tools, and team workflows (up to 50–60% reduction
            in effort and resources), while maintaining full coverage and high quality.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://t.me/parashchak_ya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-500/50"
            >
              <MessageCircle className="w-5 h-5" />
              Contact Me
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+380932014244"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-all backdrop-blur-sm border border-white/20"
            >
              <Phone className="w-5 h-5" />
              Call
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <Briefcase className="w-8 h-8 text-blue-400" />
              <h2 className="text-4xl font-bold text-white">Experience</h2>
            </div>

            {/* Favbet Tech */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12 bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                <h3 className="text-2xl font-bold text-white">Favbet Tech - Senior QA engineer (backend)</h3>
                <span className="text-slate-400 text-lg">Oct.2024 - Apr.2026</span>
              </div>

              <ul className="space-y-3 text-slate-300 text-lg mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Took a <span className="text-blue-300 font-medium">proactive role</span> in improving processes and introducing best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Coordinated the <span className="text-blue-300 font-medium">AQA team</span> in test automation strategy, prioritization, and coverage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Optimized <span className="text-blue-300 font-medium">smoke and regression test scope,</span> <span className="text-blue-300 font-medium">reducing</span> execution time by <span className="text-blue-300 font-medium">60%</span> without losing coverage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Actively participated in <span className="text-blue-300 font-medium">PI planning</span>, contributing to roadmap alignment and goal-setting.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Designed, implemented, and supported <span className="text-blue-300 font-medium">quality metrics</span> across the team to drive efficiency and transparency.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Facilitated <span className="text-blue-300 font-medium">knowledge sharing</span> and <span className="text-blue-300 font-medium">mentoring</span>, helping teammates grow in testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Wrote automated tests using Playwright, leveraging AI-assisted approaches to improve test coverage and efficiency.</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-700">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="w-5 h-5 text-blue-400" />
                  <h4 className="text-white font-semibold text-lg">Tools:</h4>
                </div>
                <p className="text-slate-300">Postman, Zephyr, Swagger, RabbitMQ, Kibana, Gitlab, Argo, New Relic, Grafana</p>
              </div>
            </motion.div>

            {/* Nova Digital */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                <h3 className="text-2xl font-bold text-white">Nova Digital - QA engineer (web + mobile)</h3>
                <span className="text-slate-400 text-lg">Dec.2019 - Oct.2024</span>
              </div>

              <ul className="space-y-3 text-slate-300 text-lg mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span><span className="text-blue-300 font-medium">API automation</span> of key product usage scenarios</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Implemented and configured a <span className="text-blue-300 font-medium">new test management system</span>, cutting costs by 50%.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span><span className="text-blue-300 font-medium">Launched new projects,</span> established testing processes, and developed test strategies.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Onboarding new employees and improving the QA onboarding process</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Streamlining testing and development processes within teams</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Built <span className="text-blue-300 font-medium">dashboards</span> and <span className="text-blue-300 font-medium">metrics</span> for bug tracking and team performance.</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-700">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="w-5 h-5 text-blue-400" />
                  <h4 className="text-white font-semibold text-lg">Tools:</h4>
                </div>
                <p className="text-slate-300">TestRail, Testomat, Postman (Automation), Insomnia, Jmeter, DBeaver-ce, MySQL, PostgreSQL, Graylog, Swagger, Chrome DevTools, JavaScript</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <GraduationCap className="w-8 h-8 text-blue-400" />
              <h2 className="text-4xl font-bold text-white">Education</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Novorozdilskyy Polytechnic College</h3>
                    <p className="text-slate-300 text-lg">Computer engineering</p>
                  </div>
                  <span className="text-slate-400 text-lg sm:text-right whitespace-nowrap">Junior Specialist</span>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">National Forestry University of Ukraine</h3>
                    <p className="text-slate-300 text-lg">Information systems and technologies</p>
                  </div>
                  <span className="text-slate-400 text-lg sm:text-right whitespace-nowrap">Bachelor</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <Mail className="w-8 h-8 text-blue-400" />
              <h2 className="text-4xl font-bold text-white">Contacts</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="tel:+380932014244"
                className="bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <h3 className="text-white font-semibold text-lg">Phone</h3>
                </div>
                <p className="text-blue-300 text-lg">+380932014244</p>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://t.me/parashchak_ya"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <MessageCircle className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <h3 className="text-white font-semibold text-lg">Telegram</h3>
                </div>
                <p className="text-blue-300 text-lg">@parashchak_ya</p>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="mailto:ya.parashchak@gmail.com"
                className="bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <h3 className="text-white font-semibold text-lg">Email</h3>
                </div>
                <p className="text-blue-300 text-lg break-all">ya.parashchak@gmail.com</p>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">© 2026 Yaroslav Parashchak. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
