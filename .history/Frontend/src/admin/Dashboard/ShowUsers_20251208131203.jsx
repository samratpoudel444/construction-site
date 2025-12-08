import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import image from "../../assets/logo.png";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const rows = [
  {
    id: 1,
    firstName: "Portfolio Website",
    LastName: "Completed",
    Email: "Jan 2024 - Mar 2024",
    Gender: "Male",
    Image: image,
    Role: "User",
  },
  {
    id: 2,
    projectName: "Admin Dashboard",
    firstName: "Portfolio Website",
    LastName: "Completed",
    Email: "Jan 2024 - Mar 2024",
    Gender: "Male",
    Image: image,
    Role: "Admin",
  },
  {
    id: 3,
    projectName: "E-commerce App",
    firstName: "Portfolio Website",
    LastName: "Completed",
    Email: "Jan 2024 - Mar 2024",
    Gender: "Male",
    Image: image,
    Role: "User",
  },
];

const ShowProjects = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="ml-8 mt-4 fixed">
        <button
          className="flex items-center border-1 p-2 rounded-2xl border-blue-500 gap-2 text-blue-500"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft /> Back
        </button>
      </div>

      <div className="h-20 sm:h-24 bg-white shadow-sm flex items-center justify-center">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          Projects
        </h1>
      </div>

      {/* Table Container */}
      <div className="bg-gray-100 min-h-[80vh] p-4 sm:p-8">
        <div className="w-full overflow-x-auto">
          <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f3f4f6" }}>
                  <TableCell>
                    <b>S.N.</b>
                  </TableCell>
                  <TableCell>
                    <b>First Name</b>
                  </TableCell>
                  <TableCell>
                    <b>Last Name</b>
                  </TableCell>
                  <TableCell>
                    <b>Email</b>
                  </TableCell>
                  <TableCell>
                    <b>Image</b>
                  </TableCell>
                  <TableCell>
                    <b>Gender</b>
                  </TableCell>
                  <TableCell>
                    <b>Role</b>
                  </TableCell>
                  <TableCell>
                    <b></b>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id} hover>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.firsName}</TableCell>

                    <TableCell>
                      <img src={row.Image} alt="" className="w-8" />
                    </TableCell>

                    <TableCell>{row.Gender}</TableCell>

                    <TableCell>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          row.Role === "User"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {row.Role}
                      </span>
                    </TableCell>
                    <TableCell>{row.interval}</TableCell>

                    <TableCell>
                      <div className="flex gap-4">
                        <button className="p-2 bg-green-500 rounded-2xl hover:bg-green-800">
                          Update
                        </button>
                        <button className="p-2 bg-red-500 rounded-2xl hover:bg-red-800">
                          Delete
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default ShowProjects;
