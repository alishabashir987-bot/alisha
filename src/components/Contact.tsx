import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Check, Copy, ExternalLink } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface ContactProps {
  data: PortfolioData;
}

export const Contact: React.FC<ContactProps> = ({ data }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Direct mailto fallback link construction
    const mailtoUrl = `mailto:${data.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-wider text-sky-400 uppercase mb-2">
            07. Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Contact Me
          </h2>
          <div className="w-12 h-1 bg-sky-500 rounded mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              I am currently open to internship opportunities, academic research discussions, and entry-level Business Data Analytics roles. 
              Feel free to reach out directly through email, phone, or LinkedIn!
            </p>

            <div className="space-y-4">
              
              {/* Email Card with 1-click copy */}
              <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Email Address</p>
                    <a
                      href={`mailto:${data.email}`}
                      className="text-sm font-semibold text-white hover:text-sky-400 transition-colors"
                    >
                      {data.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(data.email, 'email')}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Direct Phone</p>
                    <a
                      href={`tel:${data.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors font-mono"
                    >
                      {data.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(data.phone, 'phone')}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Current Location</p>
                  <p className="text-sm font-semibold text-white">{data.location}</p>
                </div>
              </div>

            </div>

            {/* Social Buttons (LinkedIn & GitHub) */}
            <div className="pt-4 border-t border-slate-800/80">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Professional Networks
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                {data.linkedInUrl && (
                  <a
                    href={data.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3 bg-[#0A66C2] hover:bg-[#084e96] text-white font-semibold text-xs rounded-xl transition-all shadow-md shadow-[#0A66C2]/20 flex items-center justify-center gap-2 group"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>Open LinkedIn Profile</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform opacity-80" />
                  </a>
                )}

                {data.gitHubUrl && (
                  <a
                    href={data.gitHubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl transition-all border border-slate-700 flex items-center justify-center gap-2 group"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Profile</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform opacity-80" />
                  </a>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
              <h3 className="text-lg font-bold text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Have an inquiry about an internship or project? Send a note directly to my inbox.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">Message Prepared!</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Your email client has been launched with your message drafted to {data.email}. Thank you for connecting!
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs text-sky-400 hover:underline font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name <span className="text-sky-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe / Hiring Manager"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Email <span className="text-sky-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. recruiter@company.com"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Business Data Analytics Internship Inquiry"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Message <span className="text-sky-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message or inquiry here..."
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs rounded-xl transition-all shadow-md shadow-sky-600/30 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to Alisha Malik</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
