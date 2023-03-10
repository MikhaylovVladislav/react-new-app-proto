import React from "react";
import matrica from "../../../images/matrica.png";
import st from "../Profile.module.css";
import Preloader from "../../Common/Preloader/Preloader";

let ProfileInfo = (props)=>{
    if(props.profile==null){
        return <Preloader/>
    }else{

        return (
            <div>
                <div>
                    <img src={matrica} className={st.cover}/>
                </div>
                <div className={st.general}>
                    <div className={st.ava}>
                        <img src={props.profile.photos.large}/>
                    </div>
                    <div className={st.info}>
                        <div className={st.FIO}> {props.profile.fullName}</div>
                        <div>Обо мне: {props.profile.aboutMe}</div>
                        <div>Education: USATU</div>
                        <div>Amount battle of WOT:blitz: 4983</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProfileInfo;