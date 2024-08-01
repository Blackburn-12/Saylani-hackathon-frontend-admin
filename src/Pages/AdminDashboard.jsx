import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../Components/Layout";
import Students from "../Components/Students";
import SendEmailsForm from "../Components/SendEmailsForm";
import Courses from "../Components/Courses"; // Import the Courses component

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [maleUsers, setMaleUsers] = useState([]);
  const [femaleUsers, setFemaleUsers] = useState([]);
  const [maleCounter, setMaleCounter] = useState(0);
  const [femaleCounter, setFemaleCounter] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTab, setSelectedTab] = useState("Students");

  const fetchData = async () => {
    try {
      const getData = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/allUsers`
      );
      setUsers(getData.data.users);
      setMaleUsers(getData.data.maleUsers);
      setFemaleUsers(getData.data.femaleUsers);
      setMaleCounter(getData.data.maleCounter[0].sequenceValue);
      setFemaleCounter(getData.data.femaleCounter[0].sequenceValue);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case "Students":
        return (
          <Students
            users={users}
            maleUsers={maleUsers}
            femaleUsers={femaleUsers}
            maleCounter={maleCounter}
            femaleCounter={femaleCounter}
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            fetchData={fetchData}
          />
        );
      case "Test Venue":
        return <SendEmailsForm />;
      case "Courses":
        return <Courses />;
      default:
        return null;
    }
  };

  return (
    <>
      <Layout
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onTabChange={setSelectedTab}
        selectedTab={selectedTab}
      />
      {renderContent()}
    </>
  );
};

export default AdminDashboard;
