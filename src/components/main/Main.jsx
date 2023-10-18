import { Component } from "react";
import "./style.css";
import React from "react";
import Items from "../items/Items";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      workers: [
        {
          id: 1,
          name: "John Smith",
          position: "Manager",
          department: "Sales",
          salary: 60000,
        },
        {
          id: 2,
          name: "Jane Doe",
          position: "Senior Developer",
          department: "Engineering",
          salary: 80000,
        },
        {
          id: 3,
          name: "Michael Johnson",
          position: "Accountant",
          department: "Finance",
          salary: 55000,
        },
        {
          id: 4,
          name: "Emily Davis",
          position: "HR Specialist",
          department: "Human Resources",
          salary: 45000,
        },
        {
          id: 5,
          name: "Alex Rodriguez",
          position: "Marketing Manager",
          department: "Marketing",
          salary: 70000,
        },
        {
          id: 6,
          name: "Sarah Wilson",
          position: "Software Engineer",
          department: "Engineering",
          salary: 65000,
        },
        {
          id: 7,
          name: "Daniel Thompson",
          position: "Sales Associate",
          department: "Sales",
          salary: 40000,
        },
        {
          id: 8,
          name: "Olivia Brown",
          position: "Financial Analyst",
          department: "Finance",
          salary: 60000,
        },
        {
          id: 9,
          name: "James Miller",
          position: "Product Manager",
          department: "Product Management",
          salary: 75000,
        },
        {
          id: 10,
          name: "Sophia Martinez",
          position: "Graphic Designer",
          department: "Design",
          salary: 50000,
        },
        {
          id: 11,
          name: "David Thompson",
          position: "Operations Manager",
          department: "Operations",
          salary: 70000,
        },
        {
          id: 12,
          name: "Mia Wilson",
          position: "Quality Assurance Engineer",
          department: "Engineering",
          salary: 55000,
        },
        {
          id: 13,
          name: "Benjamin Clark",
          position: "Business Analyst",
          department: "Business Analysis",
          salary: 60000,
        },
        {
          id: 14,
          name: "Ava Lewis",
          position: "Customer Service Representative",
          department: "Customer Service",
          salary: 35000,
        },
        {
          id: 15,
          name: "Ethan Young",
          position: "IT Support Specialist",
          department: "IT",
          salary: 45000,
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="header-container">
          <h1>WORKERS' INFORMATION</h1>
        </div>
        <div className="main-container">
          {this.state.workers.map((human) => (
            <Items
              id={human.id}
              name={human.name}
              position={human.position}
              department={human.department}
              salary={human.salary}
            />
          ))}
        </div>
        <div className="footer-container">©2023 Company </div>
      </React.Fragment>
    );
  }
}
export default Main;
