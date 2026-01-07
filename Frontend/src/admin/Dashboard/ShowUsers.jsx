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
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../utils/apiInstance";

const ShowUsers = () => {
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/showAllAccount/");
      console.log("The res", response);
      return response.data.message;
    } catch (err) {
      throw err.response.data.message;
    }
  };

  const { data, isLoading, isError, error } = useQuery({
    queryFn: fetchData,
    queryKey: ["staffs"],
    staleTime: 1000 * 60,
  });

  console.log(data);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen">
        <div className="ml-8 mt-4 relative">
          <button
            className="flex items-center border-1 p-2 rounded-2xl border-blue-500 gap-2 text-blue-500 absolute"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft /> Back
          </button>
        </div>

        <div className="h-20 sm:h-24 bg-white shadow-sm flex items-center justify-center">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            Users lists
          </h1>
        </div>

        <div className="text-red-400">{error}</div>
      </div>
    );
  }

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
          Users Lists
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
                    <b>Username</b>
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
                {Array.isArray(data) &&
                  data.map((row, index) => (
                    <TableRow key={row.id} hover>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{row.firstName}</TableCell>
                      <TableCell>{row.lastName}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>
                        <img src={row.Image} alt="" className="w-8" />
                      </TableCell>

                      <TableCell>{row.username}</TableCell>

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

export default ShowUsers;
