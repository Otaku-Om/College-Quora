import React from 'react'
import './css/AllUsers.css'
import QuoraHeader from './QuoraHeader'

function AllSpaces() {
    return (<>
        <QuoraHeader />
        <div className = 'allUser'>
            <div className = 'allUser-container'>
                <img width = {250} src = 'https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.build_following_feed_darkmode.png-26-3fb93e1da358eb6e.png' alt = ''/>
                <h4>Build your new following feed</h4>
                <p>Follow some Spaces to start discovering stories in you feed</p>
            </div>
            <div className = 'allUser-content'>
                <h3>Discover Spaces</h3>
                <div className = 'allUser-space'>
                    <p>Spaces you might like</p>
                </div>
                <div className = 'allUsers'>
                    <div className = 'allUserStrip'>
                        <img src = 'https://pbs.twimg.com/profile_images/1166337803124240385/M-2PQ7OA_400x400.jpg' alt ='' />
                        <div className = 'content'>
                            <p>Cybershristi</p>
                            <small>1K followers</small>
                            <small>A space to follow in our college for techies💓😘😘💓</small>
                        </div>
                    </div>
                    <div className = 'allUserStrip'>
                        <img src = 'https://vitk.vision.org.in/wp-content/uploads/2020/03/logo-Science-and-innovation-club.jpg' alt ='' />
                        <div className = 'content'>
                            <p>Techno Clubs</p>
                            <small>4K followers</small>
                            <small>This space is oraganized 😀😁😎 by our professors to the lovers of new tochnologies.</small>
                        </div>
                    </div>
                    <div className = 'allUserStrip'>
                        <img src = 'https://www.ipeindia.org/wp-content/uploads/2022/07/Logo_Cultural-Club-300x300.png' alt ='' />
                        <div className = 'content'>
                            <p>Cultural Clubs</p>
                            <small>1K followers</small>
                            <small>Everything About College Cultural events.</small>
                        </div>
                    </div>
                    <div className = 'allUserStrip'>
                        <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpu4USS_WJ9lUQ3R5p-2nqdf5G663gajD-Ly8FjN0nM-oZ2hrC7M5GNcH-kL3SOSOFG8&usqp=CAU' alt ='' />
                        <div className = 'content'>
                            <p>Sport Clubs</p>
                            <small>1K followers</small>
                            <small>If you are interested in Beyond the physical world then you are most welcome in our college sport clubs.</small>
                        </div>
                    </div>
                    <div className = 'allUserStrip'>
                        <img src = 'https://w7.pngwing.com/pngs/795/435/png-transparent-graduation-ceremony-square-academic-cap-computer-icons-academic-degree-alumni-people-logo-graduate-university-thumbnail.png' alt ='' />
                        <div className = 'content'>
                            <p>Alumni Space</p>
                            <small>1.3K followers</small>
                            <small>Regarding any type of exposure about the real projects join the spaces where your passed out senior guide you.</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default AllSpaces
