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
import image from "../../assets/logo.png"

const rows = [
  {
    id: 1,
    projectName: "Portfolio Website",
    status: "Completed",
    interval: "Jan 2024 - Mar 2024",
    projectImage: image,
  },
  {
    id: 2,
    projectName: "Admin Dashboard",
    status: "Running",
    interval: "Apr 2024 - Present",
    projectImage: image,
  },
  {
    id: 3,
    projectName: "E-commerce App",
    status: "Pending",
    interval: "Upcoming",
    projectImage: image,
  },
];

const ShowProjects = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
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
                    <b>Project Name</b>
                  </TableCell>
                  <TableCell>
                    <b>Status</b>
                  </TableCell>
                  <TableCell>
                    <b>Interval</b>
                  </TableCell>
                  <TableCell>
                    <b>Image</b>
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
                    <TableCell>{row.projectName}</TableCell>
                    <TableCell>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          row.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : row.status === "Running"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {row.status}
                      </span>
                    </TableCell>
                    <TableCell>{row.interval}</TableCell>
                    <TableCell>
                      <img src={row.projectImage} alt="" className="w-8" />
                    </TableCell>
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
