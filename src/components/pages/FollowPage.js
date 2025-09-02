import { SmallUserProfile } from "../smallPieces/SmallUserProfile"


function FollowingPage({setWindowState}){
    return(
        <div className = "following-page-main-container">
            <div className = "following-page-header-options">
                <button className = "arrow-button" onClick = { () => setWindowState(["profile", null])}>X</button>
                <div className = "following-page-your-acc-info">
                    <div className = "following-page-your-account-name">ACC NAME WILL ADD WITH DB</div>
                    <div className = "following-page-your-account-tag">ACC tag WILL ADD WITH DB</div>
                </div>
                <div className = "following-page-options">
                    <button onClick = { () => setWindowState(["following", null])}className = "following-page-following">Following</button>
                    <button className = "following-page-followers">Followers</button>
                </div>
                <div className = "following-page-user-profiles">
                    {/*THIS IS A TEST USE ACC DATA LATER*/}
                    {[...Array(5)].map((_, i) => (
                        <SmallUserProfile />
                    ))}
                </div>

            </div>
        </div>
    )
}

export { FollowingPage }