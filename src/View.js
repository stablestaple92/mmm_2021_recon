import React from "react";
import "./View.css";

const View = () => {
    return (
        <div>
            
            <div className="instagram block grayscale">
                <a href="https://www.instagram.com/sany_on_" target="blank"><img src="img/logo_insta_200.png" alt="instagram_logo" /></a>

            </div>
            <div className="youtube block grayscale">
                <a href="https://www.youtube.com/channel/UCJ0B8Yk2-OygES2EPRoFgiw" target="blank"><img src="img/logo_youtube_200.png" alt="youtube_logo" /></a>
            </div>
            <div className="twitter block grayscale">
                <a href="https://twitter.com/sany_on_" target="blank"><img src="img/logo_twitter_200.png" alt="twitter_logo" /></a>
            </div>
            
            <img className="logo__main block" src="img/logo_mmm.png" alt="mmm_logo"/>
            <div className="soundcloud block grayscale">
                <a href="https://soundcloud.com/sany-on" target="blank"><img src="img/logo_sc_200.png" alt="soundcloud_logo" /></a>
            </div>
            <div className="bandcamp block grayscale">
                <a href="https://sany-on.bandcamp.com/" target="blank"><img src="img/logo_bc_200.png" alt="bandcamp_logo" /></a>
            </div>
            <div className="mixlcoud block grayscale">
                <a href="https://www.mixcloud.com/SANYON/" target="blank"><img src="img/logo_mix_200.png" alt="mixcloud_logo" /></a>
            </div>
            <img className="logo__sd block" src="img/logo_mmm_sd.png" alt="mmm_sd_logo"/>
            <div className="footer__block block">
                <h5> &copy; {new Date().getFullYear()} MAD MIND MACHINE</h5>
            </div>
        </div>
    );
}

export default View;