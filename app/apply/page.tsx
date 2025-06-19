import Navbar from "../components/Navbar";

export default function Apply() {
  return (
    <main className="min-h-screen bg-slate-600 text-gray-900">
      <Navbar />

      <section className="px-6 py-16 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Papa I'i Christian Academy Registration</h1>
        <p className="mb-6 text-lg text-left">E Komo Mai!</p>
        <p className="mb-6 text-lg text-left">
          We’re excited you're planning to join our school community as we strive to cultivate a rich and joyful learning culture where students can grow in their love and knowledge of Christ alongside one another.  Please fill out this form to register your family and help us plan for the upcoming academic year. After submission, you will be contacted to submit registration of $50/keiki to reserve your spot. This will go towards your curriculum fee.  We will close registration on June 25th.
        </p>

        <form
          action="https://formspree.io/f/xrbklqnq"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label className="block mb-1 font-medium">Father's Name</label>
            <input
              type="text"
              name="fatherName"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Father's Phone Number</label>
            <input
              type="tel"
              name="fatherPhone"
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Father's Email Address</label>
            <input
              type="email"
              name="fatherEmail"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Mother's Name</label>
            <input
              type="text"
              name="motherName"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Mother's Phone Number</label>
            <input
              type="tel"
              name="motherPhone"
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Mother's Email Address</label>
            <input
              type="email"
              name="motherEmail"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Physical Address</label>
            <input
              type="text"
              name="physicalAddress"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Emergency Contact Name</label>
            <input
              type="text"
              name="emergencyContactName"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Emergency Contact Phone Number</label>
            <input
              type="tel"
              name="emergencyContactPhone"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">What church are you a member of or are you committed to?</label>
            <input
              type="text"
              name="churchName"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">How many children are you hoping to enroll?</label>
            <div className="space-y-2">
              {[1,2,3,4,5].map((num) => (
                <label key={num} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="numberOfChildren"
                    value={num}
                    className="form-radio text-blue-600"
                  />
                  <span>{num}</span>
                </label>
              ))}
              <label key={"Other"} className="flex items-center space-x-2">
                <input 
                  type="radio"
                  name="numberOfChildren"
                  value="Other"
                  className="form-radio text-blue-600"
                />
                <span>Other</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Please provide the name of each keiki you are wanting to enroll, their age, and approximate grade level.</label>
            <input
              type="text"
              name="namesOfChildren"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            ></input>
          </div>

          <div>
            <label className="block mb-1 font-medium">How are you wanting to pay program dues?</label>
            <div className="space-y-2">
              {["Monthly", "Quarterly", "Semester", "In full at the beginning (discounted)"].map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="programDuesPlan"
                    value={option}
                    className="form-radio text-blue-600"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Do you have any further questions after looking at the Parent Handbook?</label>
            <input
              type="text"
              name="questions"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            ></input>
          </div>

          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}