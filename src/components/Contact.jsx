import React, { useRef, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await axios.post("http://localhost:5000/api/contact", form);
      setStatus({ success: true, message: res.data.message });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        success: false,
        message: error.response?.data?.message || "Error submitting form",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black bg-opacity-50 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="input" required />
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email" className="input" required />
          <textarea name="message" rows="5" value={form.message} onChange={handleChange} placeholder="Your message" className="input" required />
          {status && (
            <p className={`text-sm ${status.success ? "text-green-400" : "text-red-400"}`}>
              {status.message}
            </p>
          )}
          <button type="submit" className="bg-blue-600 py-2 px-6 rounded text-white hover:bg-blue-700">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
