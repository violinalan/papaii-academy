import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <main className="min-h-screen bg-neutral-600 text-white">
      <Navbar />

      <section className="px-6 py-16 max-w-2xl mx-auto">
        <h1 className="text-5xl mb-8 text-center">Contact Us</h1>
        <p className="mb-6 text-xl text-left">E Komo Mai! Thank you for your interest in Papa ʻĪʻī Christian Academy. Please fill out the form and we will be in touch with you.</p>

        <form
          action="https://formspree.io/f/xrbklqnq"
          method="POST"
          className="space-y-6"
        >
          <div className="flex space-x-3">
            <div className="w-full">
              <label className="block mb-1 font-medium">First Name</label>
              <input
                type="text"
                name="First Name"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-md"
              />
            </div>

            <div className="w-full">
              <label className="block mb-1 font-medium">Last Name</label>
              <input
                type="text"
                name="Last Name"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-md"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              name="Email"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="tel"
              name="fatherPhone"
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Subject</label>
            <input
              type="text"
              name="Subject"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="Message"
              required
              rows={5}
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}