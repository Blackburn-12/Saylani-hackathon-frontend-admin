// import React, { useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./SendEmailsForm.css";

// const SendEmailsForm = () => {
//   const [start, setStart] = useState("");
//   const [end, setEnd] = useState("");
//   const [venue, setVenue] = useState("");
//   const [message, setMessage] = useState("");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [hasError, setHasError] = useState(false);

//   const handleSubmit = async (e, gender) => {
//     e.preventDefault();

//     if (!venue) {
//       setHasError(true);
//       return;
//     }

//     const toastId = toast.info("Sending Emails to Students", {
//       toastId: "pending-toast",
//       pauseOnHover: false,
//       autoClose: false,
//       style: {
//         backgroundColor: "#E0F7FA",
//       },
//     });

//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_BASE_URL}/sendPlacementEmails?start=${start}&end=${end}&venue=${venue}&gender=${gender}`
//       );
//       if (response.data.message) {
//         setMessage(response.data.message);
//         setHasError(false);
//         toast.update(toastId, {
//           render: "Emails Successfully Sent!",
//           type: "success",
//           isLoading: false,
//           autoClose: 3000,
//           style: {
//             backgroundColor: "#E8F5E9",
//           },
//         });
//         setTimeout(() => toast.dismiss(toastId), 3000);
//       }
//     } catch (error) {
//       console.error("Error sending emails:", error);
//       setMessage("Failed to send emails");
//       toast.update(toastId, {
//         render: "Failed to send emails",
//         type: "error",
//         isLoading: false,
//         autoClose: 3000,
//         style: {
//           backgroundColor: "#FFEBEE",
//         },
//       });
//       setTimeout(() => toast.dismiss(toastId), 3000);
//     }
//   };

//   const handleDropdownFocus = () => {
//     setIsDropdownOpen(true);
//   };

//   const handleDropdownBlur = () => {
//     setIsDropdownOpen(false);
//   };

//   return (
//     <div className="send-emails-container">
//       <ToastContainer />
//       <h2>Send Placement Emails</h2>
//       <form className={`send-emails-form ${isDropdownOpen ? "form-open" : ""}`}>
//         <div className="form-group">
//           <label htmlFor="start">Initial User Number:</label>
//           <input
//             type="number"
//             id="start"
//             name="start"
//             value={start}
//             onChange={(e) => setStart(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="end">Last User Number:</label>
//           <input
//             type="number"
//             id="end"
//             name="end"
//             value={end}
//             onChange={(e) => setEnd(e.target.value)}
//             required
//           />
//         </div>
//         <div className={`form-group ${hasError ? "error" : ""}`}>
//           <label htmlFor="venue">Venue:</label>
//           <select
//             id="venue"
//             name="venue"
//             value={venue}
//             onChange={(e) => setVenue(e.target.value)}
//             onFocus={handleDropdownFocus}
//             onBlur={handleDropdownBlur}
//             required
//           >
//             <option value="">Select Exam Place</option>
//             <option value="National Stadium Wasim Akram enclosure">
//               National Stadium Wasim Akram enclosure
//             </option>
//             <option value="National Stadium Muhammad Amir enclosure">
//               National Stadium Muhammad Amir enclosure
//             </option>
//           </select>
//         </div>
//         <div className="button-group">
//           <button
//             type="button"
//             onClick={(e) => handleSubmit(e, "M")}
//             className="send-button"
//           >
//             Send to Males
//           </button>
//           <button
//             type="button"
//             onClick={(e) => handleSubmit(e, "F")}
//             className="send-button"
//           >
//             Send to Females
//           </button>
//         </div>
//       </form>
//       {message && <p className="message">{message}</p>}
//     </div>
//   );
// };

// export default SendEmailsForm;

// this is new node with date and time
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SendEmailsForm.css";

const SendEmailsForm = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = async (e, gender) => {
    e.preventDefault();

    if (!venue || !date || !time) {
      setHasError(true);
      return;
    }

    const toastId = toast.info("Sending Emails to Students", {
      toastId: "pending-toast",
      pauseOnHover: false,
      autoClose: false,
      style: {
        backgroundColor: "#E0F7FA",
      },
    });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/sendPlacementEmails?start=${start}&end=${end}&venue=${venue}&date=${date}&time=${time}&gender=${gender}`
      );
      if (response.data.message) {
        setMessage(response.data.message);
        setHasError(false);
        toast.update(toastId, {
          render: "Emails Successfully Sent!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
          style: {
            backgroundColor: "#E8F5E9",
          },
        });
        setTimeout(() => toast.dismiss(toastId), 3000);
      }
    } catch (error) {
      console.error("Error sending emails:", error);
      setMessage("Failed to send emails");
      toast.update(toastId, {
        render: "Failed to send emails",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        style: {
          backgroundColor: "#FFEBEE",
        },
      });
      setTimeout(() => toast.dismiss(toastId), 3000);
    }
  };

  const handleDropdownFocus = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownBlur = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="send-emails-container">
      <ToastContainer />
      <h2>Send Placement Emails</h2>
      <form className={`send-emails-form ${isDropdownOpen ? "form-open" : ""}`}>
        <div className="form-group">
          <label htmlFor="start">Initial User Number:</label>
          <input
            type="number"
            id="start"
            name="start"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="end">Last User Number:</label>
          <input
            type="number"
            id="end"
            name="end"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            required
          />
        </div>
        <div className={`form-group ${hasError ? "error" : ""}`}>
          <label htmlFor="venue">Venue:</label>
          <select
            id="venue"
            name="venue"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            onFocus={handleDropdownFocus}
            onBlur={handleDropdownBlur}
            required
          >
            <option value="">Select Exam Place</option>
            <option value="National Stadium Wasim Akram enclosure">
              National Stadium Wasim Akram enclosure
            </option>
            <option value="National Stadium Muhammad Amir enclosure">
              National Stadium Muhammad Amir enclosure
            </option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div className="button-group">
          <button
            type="button"
            onClick={(e) => handleSubmit(e, "M")}
            className="send-button"
          >
            Send to Males
          </button>
          <button
            type="button"
            onClick={(e) => handleSubmit(e, "F")}
            className="send-button"
          >
            Send to Females
          </button>
        </div>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default SendEmailsForm;
