'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

const services = [
  'Commercialization Pathway Assessment',
  'IP Valuation',
  'Licensee Identification & Profiling',
  'Sales & Marketing Materials',
  'Licensee Approach & Engagement',
  'Drafting Licensing Agreement',
  'Licensing Negotiation',
  'Startup & Spin-Off Support',
  'Financial & Economic Feasibility Study',
  'TRL / MRL Assessment',
  'Prior Art Search',
  'IP Protection & Patenting',
  'Legal Toolbox Documents',
  'General Inquiry',
];

export default function ContactSection() {
  const searchParams = useSearchParams();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    service: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);

  // Pre-populate fields from URL params
  useEffect(() => {
    const subjectParam = searchParams.get('subject');
    const serviceParam = searchParams.get('service');
    setFormState((prev) => ({
      ...prev,
      ...(subjectParam ? { subject: subjectParam } : {}),
      ...(serviceParam ? { service: serviceParam } : {}),
    }));
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    try {
      const supabase = createClient();
      const { error } = await supabase.from('contact_submissions').insert({
        name: formState.name,
        email: formState.email,
        phone: formState.phone || null,
        organization: formState.organization || null,
        service: formState.service || null,
        subject: formState.subject || null,
        message: formState.message,
      });

      if (error) throw error;
      setSubmitted(true);
    } catch (err) {
      console.error('Contact form submission error:', err);
      setSubmitError('Something went wrong. Please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputBase =
    'w-full bg-white/5 border rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm outline-none transition-all duration-300';
  const inputIdle = 'border-white/10 hover:border-white/20';
  const inputFocused = 'border-[#4a81f6] bg-white/8 shadow-[0_0_0_3px_rgba(74,129,246,0.12)]';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  return (
    <section
      id="contact"
      className="w-full py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #010b40 0%, #0d1545 60%, #18256b 100%)' }}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #4a81f6 0%, transparent 70%)' }} />
        <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] rounded-full opacity-8"
          style={{ background: 'radial-gradient(circle, #243996 0%, transparent 70%)' }} />
        {/* Fine grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16 md:mb-20">
          <p className="text-[#4a81f6] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Take the{' '}
            <span
              className="inline-block"
              style={{
                background: 'linear-gradient(135deg, #4a81f6 0%, #7eaaff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Next Step?
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Our team of specialists is ready to support your journey from invention to impact. 
            Reach out and we'll connect you with the right service.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left: Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">NCTC</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                National Center for Technology Commercialization — Egypt's bridge from research to real-world impact.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(74, 129, 246, 0.15)', border: '1px solid rgba(74,129,246,0.2)' }}
                >
                  <MapPin className="w-4 h-4 text-[#4a81f6]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-0.5">Address</p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    101 Kasr El Einy St, 6th Floor<br />
                    Al Inshaa WA Al Munirah, El Sayeda Zeinab<br />
                    Cairo Governorate 4262104
                  </p>
                </div>
              </div>
            </div>


          </motion.div>

          {/* Right: Form */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.1 }}
                    className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                    style={{ background: 'rgba(74,129,246,0.15)', border: '1px solid rgba(74,129,246,0.3)' }}
                  >
                    <CheckCircle2 className="w-8 h-8 text-[#4a81f6]" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Received</h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto">
                    Thank you for reaching out. Our team will get back to you within 1–2 business days.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/50 text-xs font-medium uppercase tracking-widest mb-2">Full Name *</label>
                      <input
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        placeholder="Your name"
                        className={`${inputBase} ${focused === 'name' ? inputFocused : inputIdle}`}
                      />
                    </div>
                    <div>
                      <label className="block text-white/50 text-xs font-medium uppercase tracking-widest mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        placeholder="you@organization.com"
                        className={`${inputBase} ${focused === 'email' ? inputFocused : inputIdle}`}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/50 text-xs font-medium uppercase tracking-widest mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        onFocus={() => setFocused('phone')}
                        onBlur={() => setFocused(null)}
                        placeholder="+20 1XX XXX XXXX"
                        className={`${inputBase} ${focused === 'phone' ? inputFocused : inputIdle}`}
                      />
                    </div>
                    <div>
                      <label className="block text-white/50 text-xs font-medium uppercase tracking-widest mb-2">Organization</label>
                      <input
                        name="organization"
                        value={formState.organization}
                        onChange={handleChange}
                        onFocus={() => setFocused('organization')}
                        onBlur={() => setFocused(null)}
                        placeholder="University, company, etc."
                        className={`${inputBase} ${focused === 'organization' ? inputFocused : inputIdle}`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/50 text-xs font-medium uppercase tracking-widest mb-2">Service of Interest</label>
                    <select
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      onFocus={() => setFocused('service')}
                      onBlur={() => setFocused(null)}
                      className={`${inputBase} ${focused === 'service' ? inputFocused : inputIdle} appearance-none`}
                      style={{ colorScheme: 'dark' }}
                    >
                      <option value="" className="bg-[#0d1545] text-white/50">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-[#0d1545] text-white">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/50 text-xs font-medium uppercase tracking-widest mb-2">Subject</label>
                    <input
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      onFocus={() => setFocused('subject')}
                      onBlur={() => setFocused(null)}
                      placeholder="e.g. Inquiry: Technology Name"
                      className={`${inputBase} ${focused === 'subject' ? inputFocused : inputIdle}`}
                    />
                  </div>

                  <div>
                    <label className="block text-white/50 text-xs font-medium uppercase tracking-widest mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      placeholder="Tell us about your technology, project, or question..."
                      className={`${inputBase} ${focused === 'message' ? inputFocused : inputIdle} resize-none`}
                    />
                  </div>

                  {submitError && (
                    <p className="text-red-400 text-sm text-center">{submitError}</p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={{ scale: submitting ? 1 : 1.02 }}
                    whileTap={{ scale: submitting ? 1 : 0.98 }}
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold text-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      background: 'linear-gradient(135deg, #243996 0%, #4a81f6 100%)',
                      boxShadow: '0 4px 24px rgba(74,129,246,0.3)',
                    }}
                  >
                    {submitting ? 'Sending…' : 'Send Message'}
                    {!submitting && <ArrowRight className="w-4 h-4" />}
                  </motion.button>

                  <p className="text-center text-white/25 text-xs">
                    By submitting, you agree to our privacy policy. All information is handled with strict confidentiality.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
