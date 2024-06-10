import React, { useState } from 'react';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a mailto link
    const mailtoLink = `mailto:lauren@x.com?subject=Message from ${email}&body=${encodeURIComponent(message)}`;
    // Open the mailto link in the browser
    window.location.href = mailtoLink;
    // Display success message
    setSuccess(true);
    // Clear the form
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact font-sailors py-16 h-screen bg-branding-tennis-green text-branding-purple flex flex-col justify-center relative">
      <h2 className="text-4xl font-extrabold mb-6 text-center">Contact</h2>
      <p className="text-center mb-6">hi@name.com</p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-lg mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          required
          className="w-full h-32 p-2 mb-4 border border-gray-300 rounded"
        />
        <button type="submit" className="px-4 py-2 bg-branding-purple hover:bg-branding-marine-navy text-white rounded">Send</button>
      </form>
      {success && <p className="text-center text-green-500 mt-4">Message sent!</p>}
    </div>
  );
}

export default Contact;

