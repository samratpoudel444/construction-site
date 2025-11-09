import { AppError } from "../utils/AppError";
const Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return next({ code: 400, message: "Please Provide the necessary credentials" });
        }
    }
    catch (error) {
        if (error instanceof AppError) {
            return next({
                code: error.code,
                message: error.message || "Internal Server Error",
            });
        }
        if (error instanceof Error) {
            return next({
                code: 500,
                message: error.message || "Internal Server Error",
            });
        }
        return next({
            code: 500,
            message: "Internal Server Error",
        });
    }
};
export default Login;
