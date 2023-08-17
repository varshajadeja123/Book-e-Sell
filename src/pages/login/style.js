import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../constant/constant";

const loginStyle = makeStyles((theme) => ({
  loginWrapper: {
    "& .login-page-wrapper": {
      margin: "0 auto",
    
      padding: "42px 0 80px",
      // display:"flex",
      "@media (max-width: 991px)": {
        padding: "35px 0 50px",
      },
      "@media (max-width: 767px)": {
        padding: "35px 0 40px",
      },
      "& .login-row": {
        display: "flex",
        justifyContent: "center",
        margin: "0 -15px",
        "@media (max-width: 767px)": {
          flexWrap: "wrap",
        },
        "& p": {
          color: colors.lightTextColor,
          fontWeight: 300,
          fontSize: "15px",
          marginBottom: "16px",
          "&.text-danger": {
            fontSize: "14px",
            color: colors.primary,
            position: "absolute",
            top: "70%",
            margin: "0",
          },
        },
        "& .content-col": {
          maxWidth: "50%",
          flex: "0 0 50%",
          padding: "0 15px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          "@media (max-width: 767px)": {
            maxWidth: "100%",
            flex: "0 0 100%",
          },
          "& .btn-wrapper": {
            marginTop: "10px",
            margin: "0 auto",
            justifyContent:"center",

            "@media (max-width: 767px)": {
              marginTop: "30px",
            },
          },
        },
        "& .form-block": {
          maxWidth: "100%",
          flex: "0 0 100%",
          padding: "0 15px",
          // alignItems: "center",
          // justifyContent: "center",
          // display: "flex",

          "@media (max-width: 767px)": {
            maxWidth: "100%",
            flex: "0 0 100%",
            marginTop: "35px",
          },
          "& .MuiInputBase-formControl": {
            marginBottom: "35px",
          },
          "& .form-row-wrapper": {
            maxWidth: "390px",
            width: "100%",
            display:"flex",
            margin: "0 auto",
            flexDirection: "column", // Stack items vertically
            // alignItems: "center",    // Center align horizontally
            // justifyContent: "center",
    
            "@media (max-width: 767px)": {
              maxWidth: "100%",
            },
            "& .form-col": {
              position: "relative",
            },
          },
          "& .forgot-password-link": {
            color: colors.primary,
            fontWeight: "300",
          },
          "& .btn-wrapper": {
            marginTop: "25px",
            "& .btn": {
              minWidth: "110px",
              padding: "0 15px",
              "@media (max-width: 767px)": {
                fontSize: "18px",
              },
            },
          },
        },
      },
    },
  },
  loginContainer: {
    maxWidth: "700px", // Set the maximum width of the login container
    margin: "0 auto", // Center align the container horizontally
    padding: "20px", // Add some padding to the container
    border: "1px solid #ccc", // Add a border for visual separation
    borderRadius: "10px", // Add rounded corners
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
  },
}));

export { loginStyle };
