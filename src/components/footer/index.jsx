import React from "react";
import { Link } from "react-router-dom";
import { footerStyle } from "./style";
import sitelogo from "../../assets/images/LOGO.png"; 
import { Typography } from "@material-ui/core";

export const Footer = () => {
    const classes = footerStyle();

    return(
        <div className={classes.footerWrapper}>
            <footer className="site-footer" id="footer">
                <div className="bottom-footer">
                    <div className="container">
                        <div className="text-center">
                            <p>
                            © All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};