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

const rows = [
  {
    id: 1,
    firstName: "Ram",
    lastName: "Thapa",
    Email: "ram@gmail.com",
    Gender: "male",
    image: image,
  },
  {
    id: 2,
    firstName: "Ram",
    lastName: "Thapa",
    Email: "ram@gmail.com",
    Gender: "male",
    image: image,
  },
  {
    id: 3,
    firstName: "Ram",
    lastName: "Thapa",
    Email: "ram@gmail.com",
    Gender: "male",
    image: image,
  },
];

const ApproveUsers = () => {
  return (
    <div className="min-h-screen">
      <div className="ml-8 mt-4 fixed">
        <button className="flex items-center border-1 p-2 rounded-2xl border-blue-500 gap-2 text-blue">
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
                    <b>Gender</b>
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
                    <TableCell>{row.firstName}</TableCell>
                    <TableCell>{row.lastName}</TableCell>
                    <TableCell>{row.Email}</TableCell>
                    <TableCell>
                      <img src={row.projectImage} alt="" className="w-8" />
                    </TableCell>
                    <TableCell>{row.Gender}</TableCell>
                    <TableCell>
                      <div className="flex gap-4">
                        <button className="p-2 bg-green-500 rounded-2xl hover:bg-green-800">
                          Approve
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

export default ApproveUsers;
