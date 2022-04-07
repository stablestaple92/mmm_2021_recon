import React from "react";
import "./View.css";

const View = () => {
    return (
        <div>
            <section className="main__logo">
            <img src="img/logo_mmm.png" alt="mmm_logo"/>
            <h4>under re-construction...</h4>
            </section>
            <section className="button__container">
            <div className="sns__line">
                <a href="https://twitter.com/sany_on_" target="blank"><img src="img/logo_twitter_200.png" alt="twitter_logo" /></a>
                <a href="https://www.instagram.com/sany_on_" target="blank"><img src="img/logo_insta_200.png" alt="instagram_logo" /></a>
                <a href="https://www.youtube.com/channel/UCJ0B8Yk2-OygES2EPRoFgiw" target="blank"><img src="img/logo_youtube_200.png" alt="youtube_logo" /></a>
            </div>
            <div className="music__line">
                <a href="https://soundcloud.com/sany-on" target="blank"><img src="img/logo_sc_200.png" alt="soundcloud_logo" /></a>
                <a href="https://sany-on.bandcamp.com/" target="blank"><img src="img/logo_bc_200.png" alt="bandcamp_logo" /></a>
                <a href="https://www.mixcloud.com/SANYON/" target="blank"><img src="img/logo_mix_200.png" alt="mixcloud_logo" /></a>
            </div>
            </section>
            <footer className="app__footer">
            <img src="img/logo_mmm_sd.png" alt="mmm_sd_logo"/>
            <h5> &copy; {new Date().getFullYear()} MAD MIND MACHINE</h5>
            </footer>
        </div>
    );
}

export default View;