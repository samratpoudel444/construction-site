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
import { axiosInstance } from "../../utils/apiInstance";
import { useQuery } from "@tanstack/react-query";


const ShowStaffs = () => {
  const navigate = useNavigate();
   const fetchData = async () => {
     try {
       const response = await axiosInstance.get("/showAllStaffs/");
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
             Staffs lists
           </h1>
         </div>

         <div className="text-red-400">{error.message}</div>
       </div>
     );
   }
  return (
    <div className="min-h-screen">
      {/* Header */}
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
          Staffs
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
                    <b>Staff Name</b>
                  </TableCell>
                  <TableCell>
                    <b>Staff Image</b>
                  </TableCell>
                  <TableCell>
                    <b>Staff Role</b>
                  </TableCell>
                  <TableCell>
                    <b></b>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {data.map((row,index) => (
                  <TableRow key={row.id} hover>
                    <TableCell>{index+1}</TableCell>
                    <TableCell>{row.StaffName}</TableCell>
                    <TableCell>
                      <img src={row.StaffImage} alt="" className="w-8" />
                    </TableCell>
                    <TableCell>{row.StaffRole}</TableCell>
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

export default ShowStaffs;
