import { NextPage } from "next";
import { ErrorProps } from "next/error";

const CustomError: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Oops! Something went wrong</h1>
        <p className="text-lg mt-4">
          {statusCode
            ? `An error ${statusCode} occurred on the server`
            : "An error occurred on the client"}
        </p>
      </div>
    </div>
  );
};

export default CustomError;
