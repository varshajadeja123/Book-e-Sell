import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../constant/constant";

const createAccountStyle = makeStyles((theme) => ({
  createAccountWrapper: {
    "& .create-account-page-wrapper": {
      justifyContent: "center",
      padding: "42px 0 80px",
      "@media (max-width: 991px)": {
        padding: "35px 0 50px",
      },
      "@media (max-width: 767px)": {
        padding: "35px 0 40px",
      },
      "& .create-account-row": {
        "& .personal-information": {
          marginBottom: "32px",
        },
        "& p": {
          color: colors.lightTextColor,
          fontWeight: 300,
          fontSize: "15px",
          marginBottom: "16px",
        },
        "& .backlink": {
          color: colors.primary,
          fontWeight: "300",
        },

        "& .btn-wrapper": {
          marginBottom: "15px",
          marginTop: "17px",
          "& .btn": {
            minWidth: "136px",
            padding: "0 15px",
          },
        },
        "& .form-row-wrapper": {

          // display: "flex",
          flexWrap: "wrap",
          margin: "0 -15px",
          "& .form-col": {
            padding: " 0 15px",
            maxWidth: "50%",
            flex: "0 0 50%",
            position: "relative",
            "@media(max-width:767px)": {
              maxWidth: "100%",
              flex: "0 0 100%",
            },
            "&.full-width": {
              maxWidth: "100%",
              flex: "0 0 100%",
            },
            "& p": {
              color: colors.lightTextColor,
              fontWeight: 300,
              fontSize: "15px",
              marginBottom: "16px",
              "&.text-danger": {
                fontSize: "14px",
                color: colors.primary,
                position: "relative",
                bottom: "12%",
                margin: "0",
              },
            },
          },
          "& .MuiInputBase-formControl": {
            marginBottom: "15px",
          },
        },
      },
    },
  },
  RegisterContainer: {
    maxWidth: "700px", // Set the maximum width of the login container
    margin: "0 auto", // Center align the container horizontally
    padding: "20px", // Add some padding to the container
    border: "1px solid #ccc", // Add a border for visual separation
    borderRadius: "10px", // Add rounded corners
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
  },
  
}));

export { createAccountStyle };
